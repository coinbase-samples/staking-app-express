import { Request, Response, Router } from "express";
import { ViewStakingContextQueryParams } from "../types/context";
import { StakingServiceClient } from "@coinbase/staking-client-library-ts";

const router = Router();

router.get(
  "/viewStakingContext:view",
  async (
    req: Request<{}, {}, {}, ViewStakingContextQueryParams>,
    res: Response<any>,
  ) => {
    const { query } = req;
    const client = new StakingServiceClient();
    const resp = await client.viewStakingContext({
      address: query.address,
      network: query.network,
    });
    return res.status(200).json(resp);
  },
);

export default router;
