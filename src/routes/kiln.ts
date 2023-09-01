import { Router, Request, Response } from "express";
import { StakingServiceClient } from "../client";
import { APIKey, Authenticator } from "../auth";
import { readFileSync } from "fs";
import { V1Alpha1Workflow, V1Alpha1WorkflowState } from "../gen/staking_api";
import { Signer } from "../signer";
import { ethers } from "ethers";

const router = Router();

router.get("/stake", (req: Request, res: Response) => {
  res.send("connected");
});

router.get("/stakingTest", async (req: Request, res: Response) => {
  const apiKeyBlob = readFileSync(".coinbase_cloud_api_key.json", "utf-8");
  const apiKeyJson = JSON.parse(apiKeyBlob);

  let name = "";
  if (apiKeyJson["name"]) {
    name = apiKeyJson["name"];
  }

  let privateKey = "";
  if (apiKeyJson["privateKey"]) {
    privateKey = apiKeyJson["privateKey"];
  }
  let apiKey: APIKey = {
    name,
    privateKey,
  };
  const client = new StakingServiceClient(new Authenticator(apiKey));
  console.log("created new client");

  var listProtocolsOutput = await client.listProtocols();

  console.log("List Protocols ", listProtocolsOutput);

  var workflow: V1Alpha1Workflow | void = await client
    .createKilnStakeWorkflow(
      "projects/e28ffb06-f37a-44b1-ba4d-df05f10178d9",
      "0x2268c551F13F27754355394262c5f2B30Eb53755",
      "0x0a868e4e07a0a00587a783720b76fad9f7eea009",
      "100000000000000"
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

  while (
    workflow.state !== V1Alpha1WorkflowState.STATE_COMPLETED &&
    workflow.state !== V1Alpha1WorkflowState.STATE_FAILED
  ) {
    var step = workflow.steps![workflow.currentStepId!];

    if (workflow.state === V1Alpha1WorkflowState.STATE_WAITING_FOR_SIGNING) {
      var unsignedTx = step.txStepOutput!.unsignedTx!;

      console.log("unsigned tx: ", unsignedTx);

      const signer = new Signer();
      var signedTx = await signer.signTransaction(unsignedTx);

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

    await delay(5000);
  }
  console.log("success");
});

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default router;
