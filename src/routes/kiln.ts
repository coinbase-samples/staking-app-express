import { Router, Request, Response } from "express";
import { Authenticator, ApiKey } from "../client/authenticator";

const router = Router();

router.get("/stake", (req: Request, res: Response) => {
  res.send("connected");
});

export default router;
