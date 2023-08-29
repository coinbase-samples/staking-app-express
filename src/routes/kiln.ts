import { Router, Request, Response } from "express";

const router = Router();

router.get("/stake", (req: Request, res: Response) => {
  res.send("connected");
});

export default router;
