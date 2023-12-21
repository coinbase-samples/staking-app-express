import { Workflow } from "@coinbase/staking-client-library-ts/dist/gen/coinbase/staking/v1alpha1/workflow.pb";

export interface WorkflowSuccessResponse {
  workflow: Workflow;
  unsignedTransaction?: string;
  transactionHash?: string;
}
