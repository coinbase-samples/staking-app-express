import { Request, Response, Router } from "express";
import { StakingServiceClient } from "staking-client-library-ts";
import { ViewStakingContextQueryParams } from "../types/context";

const router = Router();

router.get(
  "/viewStakingContext:view",
  async (
    req: Request<{}, {}, {}, ViewStakingContextQueryParams>,
    res: Response<any>,
  ) => {
    const client = new StakingServiceClient();
    const { query } = req;

    try {
      const resp = await client.viewStakingContext({
        address: query.address,
        network: query.network,
        ethereumKilnStakingContextParameters: {
          integratorContractAddress: query.integrationContractAddress,
        },
      });
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
