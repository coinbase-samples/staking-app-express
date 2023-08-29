import { readFileSync } from "fs";
import { StakingService } from "../gen/coinbase/staking/v1alpha1/api.pb";
import { APIKey, Authenticator } from "./authenticator";

class StakingApi {
  private static _instance: StakingApi;
  public readonly authenticator: Authenticator;
  public readonly client: StakingService;

  private constructor() {
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
    this.authenticator = new Authenticator(apiKey);
    this.client = new StakingService();
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new StakingApi();
    return this._instance;
  }
}

export default StakingApi;
