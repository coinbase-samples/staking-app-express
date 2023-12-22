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
import { isFieldNotSet } from "../utils/utils";
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

    if (isFieldNotSet(body.stakerAddress)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("staker address is required");
    }
    if (isFieldNotSet(body.network)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("network is required");
    }
    if (isFieldNotSet(body.amount)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("amount is required");
    }

    try {
      const createStakeWorkflow =
        await new StakingServiceClient().EthereumKiln.stake(
          process.env.CB_PROJECT_ID!,
          body.network,
          false,
          body.stakerAddress,
          process.env.INTEGRATOR_CONTRACT_ADDRESS!,
          body.amount,
        );
      req.body.workflowName = createStakeWorkflow.name!;
      return res.status(constants.HTTP_STATUS_OK);
    } catch (e) {
      return next(e);
    }
  },
);

router.post(
  "/unstake",
  async (
    req: Request<{}, {}, PartialEthInitiateUnstakeRequest, {}>,
    res: Response<any>,
    next: NextFunction,
  ) => {
    const { body } = req;

    if (isFieldNotSet(body.stakerAddress)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("staker address is required");
    }
    if (isFieldNotSet(body.network)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("network is required");
    }
    if (isFieldNotSet(body.unstakeAmount)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("unstake amount is required");
    }

    try {
      const createUnstakeWorkflow =
        await new StakingServiceClient().EthereumKiln.unstake(
          process.env.CB_PROJECT_ID!,
          body.network,
          false,
          body.stakerAddress,
          process.env.INTEGRATOR_CONTRACT_ADDRESS!,
          body.unstakeAmount,
        );

      req.body.workflowName = createUnstakeWorkflow.name!;
      return res.status(constants.HTTP_STATUS_OK);
    } catch (e) {
      return next(e);
    }
  },
);

router.post(
  "/claimRewards",
  async (
    req: Request<{}, {}, PartialEthClaimRewardsRequest, {}>,
    res: Response<any>,
    next: NextFunction,
  ) => {
    const { body } = req;

    if (isFieldNotSet(body.stakerAddress)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("staker address is required");
    }
    if (isFieldNotSet(body.network)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("network is required");
    }

    try {
      const claimRewardsWorkflow =
        await new StakingServiceClient().EthereumKiln.claimStake(
          process.env.CB_PROJECT_ID!,
          body.network,
          false,
          body.stakerAddress,
          process.env.INTEGRATOR_CONTRACT_ADDRESS!,
        );
      req.body.workflowName = claimRewardsWorkflow.name!;
      return res.status(constants.HTTP_STATUS_OK);
    } catch (e) {
      return next(e);
    }
  },
);

router.get(
  "/address/:address/network/:network",
  async (
    req: Request<PartialEthViewContextRequest, {}, {}, {}>,
    res: Response<any>,
    next: NextFunction,
  ) => {
    const { params } = req;

    if (isFieldNotSet(params.stakerAddress)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("staker address is required");
    }
    if (isFieldNotSet(params.network)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("network is required");
    }

    try {
      const contextResponse =
        await new StakingServiceClient().EthereumKiln.viewStakingContext(
          params.stakerAddress,
          params.network,
          process.env.INTEGRATOR_CONTRACT_ADDRESS!,
        );
      return res.status(constants.HTTP_STATUS_OK).json(contextResponse);
    } catch (e) {
      return next(e);
    }
  },
);

export default router;
