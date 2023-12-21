/**
 * Copyright 2023 Coinbase Global, Inc.
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

const router = Router();

router.get("/protocols", async (req: Request<any>, res: Response<any>) => {
  const client = new StakingServiceClient();
  try {
    const resp = await client.listProtocols();
    return res.status(200).json(resp);
  } catch (err) {
    if (err instanceof Response) {
      return res.status(err.status).send(err);
    }
    return res
      .status(500)
      .send("error calling listProtocols: " + (err as Error).toString());
  }
});

router.get(
  "/protocols/:protocol/networks",
  async (req: Request<ListNetworksRequest, {}, {}, {}>, res: Response) => {
    const { params } = req;
    if (!params.protocol || params.protocol == "") {
      res.status(400).send("protocol not provided");
    }

    const client = new StakingServiceClient();
    const resp = await client.listNetworks(params.protocol);
    return res.json(resp);
  },
);

router.get(
  "/protocols/:protocol/networks/:network/actions",
  async (req: Request<ListActionsRequest, {}, {}, {}>, res: Response) => {
    const { params } = req;
    if (!params.protocol || params.protocol == "") {
      return res.status(400).send("protocol not provided");
    }

    if (!params.network || params.network == "") {
      return res.status(400).send("network not provided");
    }

    const client = new StakingServiceClient();
    const resp = await client.listActions(params.protocol, params.network);
    return res.json(resp);
  },
);

export default router;
