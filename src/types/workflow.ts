import { Workflow } from "staking-client-library-ts/dist/gen/coinbase/staking/v1alpha1/workflow.pb";

export interface CreateWorkflowPathParams {
  projectId: string;
}

export interface CreateWorkflowRequestBody {
  workflow: Workflow;
}
