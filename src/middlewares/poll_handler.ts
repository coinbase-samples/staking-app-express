/**
 * Copyright 2023-present Coinbase Global, Inc.
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
import {
  extractWorkflowId,
  isTransactionReadyForSigning,
  transactionConfirmedOrFinalized,
} from "../utils/utils";
import { workflowHasFinished } from "@coinbase/staking-client-library-ts/dist/client/staking-service-client";
import { WorkflowSuccessResponse } from "../types/workflow";
import { constants } from "http2";

export const pollHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;

  const workflowId = extractWorkflowId(body.workflowName);

  const workflow = await new StakingServiceClient().getWorkflow(
    process.env.CB_PROJECT_ID!,
    workflowId,
  );

  const output: WorkflowSuccessResponse = {
    workflow,
  };

  while (!workflowHasFinished(workflow)) {
    const currentStep = workflow.steps![workflow.currentStepId!];
    if (isTransactionReadyForSigning(currentStep)) {
      output.unsignedTransaction = currentStep.txStepOutput!.unsignedTx!;
      break;
    } else if (transactionConfirmedOrFinalized(currentStep)) {
      output.transactionHash = currentStep.txStepOutput!.txHash!;
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)); // sleep for 1 second
  }

  return res.status(constants.HTTP_STATUS_OK).json(output);
};
