import { Request, Response, Router } from "express";
import { StakingServiceClient } from "staking-client-library-ts";
import { ListActionsRequest, ListNetworksRequest } from "../types/common";

const router = Router();

router.get("/listProtocols", async (req: Request<any>, res: Response<any>) => {
  const client = new StakingServiceClient();
  try {
  const resp = await client.listProtocols();
  return res.status(200).json(resp);
  } catch (err) {
    console.log(err)
    if (err instanceof Response) {
      return res.status(err.status).send(err)
    }
    res.status(500).send('error calling listProtocols: ' + (err as Error).toString());
  }
});

router.get("/listActions", async (req: Request<{}, {}, {}, ListActionsRequest>, res: Response) => {
  const client = new StakingServiceClient();
  const { query } = req;
  try {
    const resp = await client.listActions(query.network);
    console.log(resp);
    res.json(resp);
  } catch (err) {
    console.log(err)
    if (err instanceof Response) {
      return res.status(err.status).send(err)
    }
    res.status(500).send('error calling listActions: ' + (err as Error).toString());
  }
});

router.get("/listNetworks", async (req: Request<{}, {}, {}, ListNetworksRequest>, res: Response) => {
  const client = new StakingServiceClient();
  const { query } = req;
  try {
    const resp = await client.listNetworks(query.protocol);
    console.log(resp);
    res.json(resp);
  } catch (err) {
    console.log(err)
    if (err instanceof Response) {
      return res.status(err.status).send(err)
    }
    res.status(500).send('error calling listActions: ' + (err as Error).toString());
  }
});

export default router;