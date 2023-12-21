/**
 * Copyright 2023 Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { NextFunction, Request, Response } from "express";
import { extractWorkflowId } from "../utils/utils";
import {
  isTxStepOutput,
  workflowHasFinished,
} from "@coinbase/staking-client-library-ts/dist/client/staking-service-client";
import { TxStepOutputState } from "@coinbase/staking-client-library-ts/dist/gen/coinbase/staking/v1alpha1/workflow.pb";
import { WorkflowSuccessResponse } from "../types/workflow";

export const pollHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;

  const client = new StakingServiceClient();

  const workflowId = extractWorkflowId(body.workflowName);

  const workflow = await client.getWorkflow(
    process.env.CB_PROJECT_ID!,
    workflowId,
  );

  const output: WorkflowSuccessResponse = {
    workflow,
  };

  while (!workflowHasFinished(workflow)) {
    const currentStep = workflow.steps![workflow.currentStepId!];
    if (
      isTxStepOutput(currentStep) &&
      TxStepOutputState.STATE_PENDING_SIGNING == currentStep.txStepOutput.state
    ) {
      output.unsignedTransaction = currentStep.txStepOutput.unsignedTx!;
      break;
    } else if (
      isTxStepOutput(currentStep) &&
      (TxStepOutputState.STATE_CONFIRMED == currentStep.txStepOutput.state ||
        TxStepOutputState.STATE_FINALIZED == currentStep.txStepOutput.state)
    ) {
      output.transactionHash = currentStep.txStepOutput.txHash!;
      break;
    }
  }

  return res.status(200).json(output);
};
