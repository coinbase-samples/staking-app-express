import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { Request, Response, Router } from "express";
import {
  PartialEthClaimRewardsRequest,
  PartialEthInitiateStakingRequest,
  PartialEthViewContextRequest,
  PartialEthInitiateUnstakeRequest,
} from "../types/partial_eth";

const router = Router();

router.use("/partial-eth");

router.post(
  "/stake",
  async (
    req: Request<{}, {}, PartialEthInitiateStakingRequest, {}>,
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

    const createStakeWorkflow = await client.EthereumKiln.stake(
      process.env.CB_PROJECT_ID!,
      body.network,
      false,
      body.stakerAddress,
      process.env.INTEGRATOR_CONTRACT_ADDRESS!,
      body.amount,
    );
    return res.status(200).send(createStakeWorkflow);
  },
);

router.post(
  "/unstake",
  async (
    req: Request<{}, {}, PartialEthInitiateUnstakeRequest, {}>,
    res: Response<any>,
  ) => {
    const client = new StakingServiceClient();

    const { body } = req;

    const createUnstakeWorkflow = await client.EthereumKiln.unstake(
      process.env.CB_PROJECT_ID!,
      process.env.NETWORK!,
      false,
      body.stakerAddress,
      process.env.INTEGRATOR_CONTRACT_ADDRESS!,
      body.unstakeAmount,
    );

    return res.status(200).send(createUnstakeWorkflow);
  },
);

router.post(
  "/claimRewards",
  async (
    req: Request<{}, {}, PartialEthClaimRewardsRequest, {}>,
    res: Response<any>,
  ) => {
    const client = new StakingServiceClient();

    const { body } = req;

    const claimRewardsWorkflow = await client.EthereumKiln.claimStake(
      process.env.CB_PROJECT_ID!,
      body.network,
      false,
      body.stakerAddress,
      process.env.INTEGRATOR_CONTRACT_ADDRESS!,
    );
    return res.status(200).send(claimRewardsWorkflow);
  },
);

router.get(
  "/address/:address/network/:network",
  async (
    req: Request<PartialEthViewContextRequest, {}, {}, {}>,
    res: Response<any>,
  ) => {
    const client = new StakingServiceClient();

    const { params } = req;
    const contextResponse = await client.EthereumKiln.viewStakingContext(
      params.stakerAddress,
      params.network,
      process.env.INTEGRATOR_CONTRACT_ADDRESS!,
    );
    return res.status(200).send(contextResponse);
  },
);

export default router;
