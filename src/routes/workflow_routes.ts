import { Request, Response, Router } from "express";
import { StakingServiceClient } from "staking-client-library-ts";
import {
  CreateWorkflowPathParams,
  CreateWorkflowRequestBody,
} from "../types/workflow";

const router = Router();

router.post(
  "/projects/:projectId/workflows",
  async (
    req: Request<CreateWorkflowPathParams, {}, CreateWorkflowRequestBody, {}>,
    res: Response<any>,
  ) => {
    const client = new StakingServiceClient();
    const { params, body } = req;

    try {
      const resp = await client.createWorkflow(params.projectId, body.workflow);
      return res.status(200).json(resp);
    } catch (err) {
      if (err instanceof Response) {
        return res.status(err.status).send(err);
      }
      return res
        .status(500)
        .send("error calling createWorkflow: " + (err as Error).toString());
    }
  },
);

export default router;
