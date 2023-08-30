import express from "express";
import kilnRoutes from "./routes/kiln";
import { Api, HttpResponse } from "./gen/staking_api";
import { StakingServiceClient } from "./client";
import { APIKey, Authenticator } from "./auth";
import { readFileSync } from "fs";

const app = express();
const PORT = 3000;
const BASE_API = "/v1";

app.use(`${BASE_API}/kiln`, kilnRoutes);

app.listen(PORT, async () => {
  const apiKeyBlob = readFileSync(".coinbase_cloud_api_key.json", "utf-8");
  const apiKeyJson = JSON.parse(apiKeyBlob);

  let name = "";
  if (apiKeyJson["name"]) {
    name = apiKeyJson["name"];
  }

  let privateKey = "";
  if (apiKeyJson["privateKey"]) {
    privateKey = apiKeyJson["privateKey"];
  }
  let apiKey: APIKey = {
    name,
    privateKey,
  };
  const client = new StakingServiceClient(new Authenticator(apiKey));
  try {
    const output = await client.listProtocols();
    const output1 = await client.listNetworks("protocols/polygon");
    const output2 = await client.listActions(
      "protocols/polygon/networks/mainnet"
    );
    const output3 = await client.listValidators(
      "protocols/polygon/networks/mainnet"
    );
  } catch (e) {
    console.log(e);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
