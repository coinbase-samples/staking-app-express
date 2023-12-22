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
import { StakingServiceClient } from "@coinbase/staking-client-library-ts";
import { constants } from "http2";
import { validateFieldInRequest } from "../utils/utils";
import { PerformWorkflowStepRequest } from "../types/workflow";

const router = Router();

router.post(
  "/performWorkflowStep",
  async (
    req: Request<{}, {}, PerformWorkflowStepRequest, {}>,
    res: Response<any>,
    next: NextFunction,
  ) => {
    const { body } = req;
    validateFieldInRequest(res, "workflowId", body.workflowId);
    validateFieldInRequest(res, "data", body.data);

    try {
      const resp = await new StakingServiceClient().performWorkflowStep(
        process.env.CB_PROJECT_ID!,
        body.workflowId,
        body.stepIndex,
        body.data,
      );
      req.body.workflowName = resp.name!;
      return res.status(constants.HTTP_STATUS_OK);
    } catch (e) {
      return next(e);
    }
  },
);

export default router;
