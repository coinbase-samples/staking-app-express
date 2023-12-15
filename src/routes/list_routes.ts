import { Request, Response, Router } from "express";
import { StakingServiceClient } from "staking-client-library-ts";
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
    const client = new StakingServiceClient();
    const { params } = req;
    try {
      const resp = await client.listNetworks(params.protocol);
      return res.json(resp);
    } catch (err) {
      if (err instanceof Response) {
        return res.status(err.status).send(err);
      }
      return res
        .status(500)
        .send("error calling listNetworks: " + (err as Error).toString());
    }
  },
);

router.get(
  "/protocols/:protocol/networks/:network/actions",
  async (req: Request<ListActionsRequest, {}, {}, {}>, res: Response) => {
    const client = new StakingServiceClient();
    const { params } = req;
    try {
      const resp = await client.listActions(params.protocol, params.network);
      return res.json(resp);
    } catch (err) {
      if (err instanceof Response) {
        return res.status(err.status).send(err);
      }
      return res
        .status(500)
        .send("error calling listActions: " + (err as Error).toString());
    }
  },
);

export default router;
