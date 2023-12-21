import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { Request, Response, Router } from "express";
import { InitiatePartialEthStakingRequest } from "../types/partial_eth";

const router = Router();

router.use("/partial-eth");

router.post(
  "/initiate",
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
      const createStakeWorkflow = await client.EthereumKiln.stake(
        process.env.CB_PROJECT_ID!,
        process.env.NETWORK!,
        false,
        body.stakerAddress,
        process.env.INTEGRATOR_CONTRACT_ADDRESS!,
        body.amount,
      );
      return res.status(200).send(createStakeWorkflow);
    } catch (err) {
      console.error(err);
      return res.status(500).send("error calling initiate stake Partial ETH");
    }
  },
);

router.post("/unstake", async (req: Request<any>, res: Response<any>) => {
  const client = new StakingServiceClient();

  const { body } = req;

  try {
    const createUnstakeWorkflow = await client.EthereumKiln.unstake(
      process.env.CB_PROJECT_ID!,
      process.env.NETWORK!,
      false,
      body.stakerAddress,
      process.env.INTEGRATOR_CONTRACT_ADDRESS!,
      body.unstakeAmount,
    );
    return res.status(200).send(createUnstakeWorkflow);
  } catch (err) {
    console.error(err);
    return res.status(500).send("error calling start unstake Partial ETH");
  }
});

router.post("/claimRewards", async (req: Request<any>, res: Response<any>) => {
  const client = new StakingServiceClient();

  const { body } = req;

  try {
    const claimRewardsWorkflow = await client.EthereumKiln.claimStake(
      process.env.CB_PROJECT_ID!,
      process.env.NETWORK!,
      false,
      body.stakerAddress,
      process.env.INTEGRATOR_CONTRACT_ADDRESS!,
    );
    return res.status(200).send(claimRewardsWorkflow);
  } catch (err) {
    console.error(err);
    return res.status(500).send("error calling claim rewards Partial ETH");
  }
});

router.get(
  "/address/:address/network/:network",
  async (req: Request<any>, res: Response<any>) => {
    const client = new StakingServiceClient();

    const { params } = req;
    try {
      const contextResponse = await client.EthereumKiln.viewStakingContext(
        params.address,
        params.network,
        process.env.INTEGRATOR_CONTRACT_ADDRESS!,
      );
      return res.status(200).send(contextResponse);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send("error calling view staking context Partial ETH");
    }
  },
);

export default router;
