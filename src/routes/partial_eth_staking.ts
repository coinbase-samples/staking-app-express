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

import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { Request, Response, Router } from "express";
import {
  PartialEthClaimRewardsRequest,
  PartialEthInitiateStakingRequest,
  PartialEthViewContextRequest,
  PartialEthInitiateUnstakeRequest,
} from "../types/partial_eth";
import { constants } from "http2";
import { NextFunction } from "connect";

const router = Router();

router.post(
  "/stake",
  async (
    req: Request<{}, {}, PartialEthInitiateStakingRequest, {}>,
    res: Response<any>,
    next: NextFunction,
  ) => {
    const { body } = req;

    if (!body.stakerAddress || body.stakerAddress == "") {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("bad request input: missing staker address");
    }

    if (!body.amount || body.amount == "") {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("bad request input: missing stake amount");
    }

    const createStakeWorkflow =
      await new StakingServiceClient().EthereumKiln.stake(
        process.env.CB_PROJECT_ID!,
        body.network,
        false,
        body.stakerAddress,
        process.env.INTEGRATOR_CONTRACT_ADDRESS!,
        body.amount,
      );
    return res.status(constants.HTTP_STATUS_OK).json(createStakeWorkflow);
  },
);

router.post(
  "/unstake",
  async (
    req: Request<{}, {}, PartialEthInitiateUnstakeRequest, {}>,
    res: Response<any>,
  ) => {
    const { body } = req;

    const createUnstakeWorkflow =
      await new StakingServiceClient().EthereumKiln.unstake(
        process.env.CB_PROJECT_ID!,
        process.env.NETWORK!,
        false,
        body.stakerAddress,
        process.env.INTEGRATOR_CONTRACT_ADDRESS!,
        body.unstakeAmount,
      );

    return res.status(constants.HTTP_STATUS_OK).send(createUnstakeWorkflow);
  },
);

router.post(
  "/claimRewards",
  async (
    req: Request<{}, {}, PartialEthClaimRewardsRequest, {}>,
    res: Response<any>,
  ) => {
    const { body } = req;

    const claimRewardsWorkflow =
      await new StakingServiceClient().EthereumKiln.claimStake(
        process.env.CB_PROJECT_ID!,
        body.network,
        false,
        body.stakerAddress,
        process.env.INTEGRATOR_CONTRACT_ADDRESS!,
      );
    return res.status(constants.HTTP_STATUS_OK).send(claimRewardsWorkflow);
  },
);

router.get(
  "/address/:address/network/:network",
  async (
    req: Request<PartialEthViewContextRequest, {}, {}, {}>,
    res: Response<any>,
  ) => {
    const { params } = req;
    const contextResponse =
      await new StakingServiceClient().EthereumKiln.viewStakingContext(
        params.stakerAddress,
        params.network,
        process.env.INTEGRATOR_CONTRACT_ADDRESS!,
      );
    return res.status(constants.HTTP_STATUS_OK).json(contextResponse);
  },
);

export default router;
