import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { Request, Response, Router } from "express";
import { InitiatePartialEthStakingRequest } from "../types/partial_eth";

const router = Router();

router.post(
  "partial-eth/initiate",
  async (
    req: Request<{}, {}, InitiatePartialEthStakingRequest, {}>,
    res: Response<any>,
  ) => {
    const client = new StakingServiceClient();

    const { body } = req;

    if (!body.stakerAddress || body.stakerAddress == "") {
      return res.status(400).send("bad request input: missing staker address");
    }

    if (!body.amount || body.amount == "") {
      return res.status(400).send("bad request input: missing stake amount");
    }

    try {
      const createPartialEthWorkflow = await client.EthereumKiln.stake(
        process.env.CB_PROJECT_ID!,
        process.env.NETWORK!,
        false,
        body.stakerAddress,
        process.env.INTEGRATOR_CONTRACTOR_ADDRESS!,
        body.amount,
      );
      return res.status(200).send(createPartialEthWorkflow);
    } catch (err) {
      console.error(err);
      return res.status(500).send("error calling initiate partial ETH staking");
    }
  },
);

export default router;
