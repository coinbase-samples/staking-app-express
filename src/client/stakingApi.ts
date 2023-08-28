import { StakingServiceClient } from "../gen/coinbase/staking/v1alpha1/api_grpc_pb";
import { ApiKey, Authenticator } from "./authenticator";

class StakingApi {
  private static _instance: StakingApi;
  public readonly authenticator: Authenticator;
  public readonly client: StakingServiceClient;

  private constructor() {
    let apiKey = new ApiKey();
    this.authenticator = new Authenticator(apiKey);
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
