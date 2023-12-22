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

import { Request, Response, Router } from "express";
import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { ListActionsRequest, ListNetworksRequest } from "../types/list";
import { constants } from "http2";
import { validateFieldInRequest } from "../utils/utils";

const router = Router();

router.get("/protocols", async (req: Request<any>, res: Response<any>) => {
  const resp = await new StakingServiceClient().listProtocols();
  return res.status(constants.HTTP_STATUS_OK).json(resp);
});

router.get(
  "/protocols/:protocol/networks",
  async (req: Request<ListNetworksRequest, {}, {}, {}>, res: Response) => {
    const { params } = req;
    validateFieldInRequest(res, "protocol", params.protocol);

    const resp = await new StakingServiceClient().listNetworks(params.protocol);
    return res.json(resp);
  },
);

router.get(
  "/protocols/:protocol/networks/:network/actions",
  async (req: Request<ListActionsRequest, {}, {}, {}>, res: Response) => {
    const { params } = req;

    validateFieldInRequest(res, "protocol", params.protocol);
    validateFieldInRequest(res, "network", params.network);

    const resp = await new StakingServiceClient().listActions(
      params.protocol,
      params.network,
    );
    return res.json(resp);
  },
);

export default router;
