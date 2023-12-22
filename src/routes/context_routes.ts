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

import { NextFunction, Request, Response, Router } from "express";
import { ViewStakingContextQueryParams } from "../types/context";
import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { constants } from "http2";
import { isFieldNotSet } from "../utils/utils";

const router = Router();

router.get(
  "/viewStakingContext:view",
  async (
    req: Request<{}, {}, {}, ViewStakingContextQueryParams>,
    res: Response<any>,
    next: NextFunction,
  ) => {
    const { query } = req;

    if (isFieldNotSet(query.address)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("address is required");
    }
    if (isFieldNotSet(query.network)) {
      return res
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .send("network is required");
    }

    try {
      const resp = await new StakingServiceClient().viewStakingContext({
        address: query.address,
        network: query.network,
      });
      return res.status(constants.HTTP_STATUS_OK).json(resp);
    } catch (e) {
      return next(e);
    }
  },
);

export default router;
