import express from "express";
import kilnRoutes from "./routes/kiln";
import StakingApi from "./client/stakingApi";

const app = express();
const PORT = 3000;
const BASE_API = "/v1";

app.use(`${BASE_API}/kiln`, kilnRoutes);

StakingApi.getInstance();

app.listen(PORT, async () => {
  console.log(
    "staking api",
    await StakingApi.getInstance().authenticator.buildJwt(
      "kiln",
      "http://localhost:3000/v1/kiln/stake"
    )
  );
  console.log(`Server is running on http://localhost:${PORT}`);
});
