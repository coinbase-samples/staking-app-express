import express from "express";
import kilnRoutes from "./routes/kiln";
import StakingApi from "./client/stakingApi";
import { Api, HttpResponse } from "./gen/staking_api";

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
  const api = new Api({
    baseApiParams: {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    },
  });
  const output = await api.api.listProtocols().catch((e) => {
    const httpResponse = e as HttpResponse<unknown, unknown>;
    console.log(Object.getOwnPropertySymbols(httpResponse));
    console.log(httpResponse.url);
  });
  console.log(`Server is running on http://localhost:${PORT}`);
});
