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

import express from "express";
import contextRoutes from "./routes/context_routes";
import listRoutes from "./routes/list_routes";
import partialEthRoutes from "./routes/partial_eth_staking";
import workflowRoutes from "./routes/workflow_routes";
import { errorHandler } from "./middlewares/error_handler";
import { pollHandler } from "./middlewares/poll_handler";
import { constants } from "http2";
require("express-async-errors");

const app = express();
app.use(express.json());
const PORT = 3030;
const BASE_API = "/staking/api/v1alpha1";

app.get("/", (req, res) => {
  res.sendStatus(constants.HTTP_STATUS_OK);
});
app.get("/health", (req, res) => {
  res.sendStatus(constants.HTTP_STATUS_OK);
});

app.use(`${BASE_API}`, listRoutes);
app.use(`${BASE_API}/partial-eth`, partialEthRoutes);
app.use(`${BASE_API}`, contextRoutes);
app.use(`${BASE_API}`, workflowRoutes);

app.use(`${BASE_API}/partial-eth`, pollHandler);
app.use(`${BASE_API}/performWorkflowStep`, errorHandler);
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default 0;
