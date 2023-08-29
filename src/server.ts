import express from "express";
import kilnRoutes from "./routes/kiln";
import StakingApi from "./client/stakingApi";
import { StakingService } from "./gen/coinbase/staking/v1alpha1/api.pb";
import { ListProtocolsRequest } from "./gen/coinbase/staking/v1alpha1/protocol_pb";

const app = express();
const PORT = 3000;
const BASE_API = "/v1";

app.use(`${BASE_API}/kiln`, kilnRoutes);

StakingApi.getInstance();

app.listen(PORT, async () => {
  const jwt = await StakingApi.getInstance().authenticator.buildJWT(
    "staking",
    "https://api.developer.coinbase.com/staking/api/v1alpha1/protocols"
  );
  console.log(
    await StakingService.ListProtocols(
      {},
      {
        pathPrefix: `https://api.developer.coinbase.com/staking/`,
        headers: { Authorization: `Bearer ${jwt}` },
      }
    )
  );
  console.log(`Server is running on http://localhost:${PORT}`);
});
