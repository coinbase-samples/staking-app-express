export const extractWorkflowId = (workflowName: string): string => {
  const splitWorkflow = workflowName.split("/");
  if (splitWorkflow.length < 4) {
    throw new Error("invalid workflow name");
  }
  return splitWorkflow[3];
};
