import * as Staking from "../generated/api/coinbase/staking/v1alpha1";
import { HttpRequestHandler } from "./http";
import { Authenticator } from "../auth";

/**
 * staking is the name of the service used by the JWT auth
 */
const stakingServiceName = "staking";

export class StakingServiceClient {
  #isInitialized: boolean;
  #stakingClient: Staking.StakingService;

  constructor(hostname: string, authenticator: Authenticator | undefined) {
    const handler = new HttpRequestHandler(
      hostname,
      stakingServiceName,
      authenticator
    );

    this.#stakingClient = Staking.createStakingServiceClient(
      handler.requestHandler
    );
    this.#isInitialized = true;
  }

  /**
   * If the service has been successfully initialized.
   * @returns True if the service is initialized, false otherwise.
   */
  isInitialized(): boolean {
    return this.#isInitialized;
  }

  async ListProtocols(
    pageSize: number | undefined,
    pageToken: string | undefined
  ): Promise<Staking.ListProtocolsResponse> {
    if (!this.isInitialized) {
      return Promise.reject(new Error("staking service is not initialized"));
    }

    const listProtocolsRequest: Staking.ListProtocolsRequest = {
      pageSize,
      pageToken,
    };

    return await this.#stakingClient.ListProtocols(listProtocolsRequest);
  }
}
