import { Router, Request, Response } from "express";
import { readFileSync } from "fs";
import { Signer } from "../signer/signer";
import { Transaction, ethers } from "ethers";
import { StakingServiceClient, V1Alpha1Workflow, V1Alpha1WorkflowState } from "staking-client-library-ts";

const kilnRouter = Router();

kilnRouter.post("/initiate", async (req: Request<{}, {}>, res: Response) => {
  const client = new StakingServiceClient();
  console.log("created new client");

  var listProtocolsOutput = await client.listProtocols();

  console.log("List Protocols ", listProtocolsOutput);

  var workflow: V1Alpha1Workflow | void = await client
    .createWorkflow(
      "projects/e28ffb06-f37a-44b1-ba4d-df05f10178d9",
      {
        action: "protocols/ethereum_kiln/networks/mainnet/actions/stake",
        ethereumKilnStakingParameters: {
          stakeParameters: {
            stakerAddress:       "0x2268c551F13F27754355394262c5f2B30Eb53755",
            integratorContractAddress: "0x0a868e4e07a0a00587a783720b76fad9f7eea009",
            amount: {
              value: "100000000000000",
              currency: "ETH",
          }
        }
      }
      }
    )
    .catch((e) => {
      console.log(e);
    });

  if (!(workflow instanceof Object)) {
    throw new Error("failed to create worfklow");
  }
  console.log("created new workflow ", workflow.name);

  workflow = await client.getWorkflow(workflow.name!);
  console.log("workflow name ", workflow.name);

  try {
    while (
      workflow.state !== V1Alpha1WorkflowState.STATE_COMPLETED &&
      workflow.state !== V1Alpha1WorkflowState.STATE_FAILED
    ) {
      var step = workflow.steps![workflow.currentStepId!];

      if (workflow.state === V1Alpha1WorkflowState.STATE_WAITING_FOR_SIGNING) {
        var unsignedTxByteString = step.txStepOutput!.unsignedTx!;

        console.log("unsigned tx: ", unsignedTxByteString);

        const signer = new Signer();
        const unsignedTxBytes = Buffer.from(unsignedTxByteString, "hex");
        console.log(unsignedTxBytes);
        const unsignedTxHex = ethers.hexlify(unsignedTxBytes);
        console.log(unsignedTxHex);
        const txRequest: Transaction = ethers.Transaction.from(unsignedTxHex);
        console.log(JSON.stringify(txRequest.toJSON()));
        txRequest.signature = null;
        var signedTx = await signer.signTransaction(txRequest);

        console.log("signed tx: ", signedTx);

        workflow = await client.performWorkflowStep(
          workflow.name!,
          workflow.currentStepId!,
          signedTx
        );
      } else if (workflow.state === V1Alpha1WorkflowState.STATE_IN_PROGRESS) {
        if (step.txStepOutput) {
          console.log("TX Hash: ", step.txStepOutput!.txHash);
        } else if (step.waitStepOutput) {
          console.log(
            `Waiting for ${
              Number(step.waitStepOutput.target!) -
              Number(step.waitStepOutput.current!)
            } ${step.waitStepOutput.unit} to complete...`
          );
        }
      }

      workflow = await client.getWorkflow(workflow.name!);
      console.log(workflow);

      await delay(5000);
    }
  } catch (e) {
    console.log(e);
  }
  console.log("success");
});

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default kilnRouter;
