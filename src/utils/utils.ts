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

import { isTxStepOutput } from "@coinbase/staking-client-library-ts/dist/client/staking-service-client";
import {
  TxStepOutputState,
  WorkflowStep,
} from "@coinbase/staking-client-library-ts/dist/gen/coinbase/staking/v1alpha1/workflow.pb";

export const extractWorkflowId = (workflowName: string): string => {
  const splitWorkflow = workflowName.split("/");
  if (splitWorkflow.length < 4) {
    throw new Error("invalid workflow name");
  }
  return splitWorkflow[3];
};

export const transactionConfirmedOrFinalized = (
  step: WorkflowStep,
): boolean => {
  return (
    isTxStepOutput(step) &&
    (TxStepOutputState.STATE_CONFIRMED == step.txStepOutput.state ||
      TxStepOutputState.STATE_FINALIZED == step.txStepOutput.state)
  );
};

export const isTransactionReadyForSigning = (step: WorkflowStep): boolean => {
  return (
    isTxStepOutput(step) &&
    TxStepOutputState.STATE_PENDING_SIGNING == step.txStepOutput.state
  );
};
