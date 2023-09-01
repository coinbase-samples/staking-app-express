import { Authenticator } from "../auth";
import {
  Api,
  V1Alpha1EthereumKilnStakingParameters,
  V1Alpha1ListActionsResponse,
  V1Alpha1ListNetworksResponse,
  V1Alpha1ListProtocolsResponse,
  V1Alpha1ListValidatorsResponse,
  V1Alpha1Workflow,
} from "../gen/staking_api";
import {
  checkProtocolNetworkParentRegex,
  checkProtocolParentRegex,
} from "../utils";

/**
 * staking is the name of the service used by the JWT auth
 */
const stakingServiceName = "staking";

export class StakingServiceClient {
  authenticator: Authenticator;

  constructor(authenticator: Authenticator) {
    this.authenticator = authenticator;
  }

  async createApiClient(
    method: string,
    endpoint: string
  ): Promise<Api<unknown>> {
    const jwt = await this.authenticator.buildJWT(
      stakingServiceName,
      `${method} cloud-api-dev.cbhq.net/staking/api/v1alpha1/${endpoint}`
    );

    return new Api({
      baseUrl: "https://cloud-api-dev.cbhq.net/staking",
      baseApiParams: {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    });
  }

  async listProtocols(
    pageSize?: number,
    pageToken?: string
  ): Promise<V1Alpha1ListProtocolsResponse> {
    const client = await this.createApiClient("GET", "protocols");
    const response = await client.api.listProtocols({
      pageSize,
      pageToken,
    });
    return response.data;
  }

  async listNetworks(
    parent: string,
    pageSize?: number,
    pageToken?: string
  ): Promise<V1Alpha1ListNetworksResponse> {
    if (!checkProtocolParentRegex(parent)) {
      return Promise.reject("field 'parent' did not match expected format");
    }

    const client = await this.createApiClient("GET", `${parent}/networks`);

    const response = await client.api.listNetworks(parent, {
      pageSize,
      pageToken,
    });

    return response.data;
  }

  async listActions(
    parent: string,
    pageSize?: number,
    pageToken?: string
  ): Promise<V1Alpha1ListActionsResponse> {
    if (!checkProtocolNetworkParentRegex(parent)) {
      return Promise.reject("field 'parent' did not match expected format");
    }

    const client = await this.createApiClient("GET", `${parent}/actions`);

    const response = await client.api.listActions(parent, {
      pageSize,
      pageToken,
    });
    return response.data;
  }

  async listValidators(
    parent: string,
    pageSize?: number,
    pageToken?: string
  ): Promise<V1Alpha1ListValidatorsResponse> {
    if (!checkProtocolNetworkParentRegex(parent)) {
      return Promise.reject("field 'parent' did not match expected format");
    }

    const client = await this.createApiClient("GET", `${parent}/validators`);

    const response = await client.api.listActions(parent, {
      pageSize,
      pageToken,
    });
    return response.data;
  }

  async createWorkflow(
    projectId: string,
    workflow: V1Alpha1Workflow
  ): Promise<V1Alpha1Workflow> {
    const client = await this.createApiClient("POST", `${projectId}/workflows`);

    const response = await client.api.createWorkflow(projectId, workflow);
    return response.data;
  }

  async createKilnStakeWorkflow(
    projectId: string,
    stakerAddress: string,
    integratorContractAddress: string,
    value: string
  ): Promise<V1Alpha1Workflow> {
    const ethKilnStakingParameters: V1Alpha1EthereumKilnStakingParameters = {
      stakeParameters: {
        stakerAddress,
        integratorContractAddress,
        amount: {
          value,
          currency: "ETH",
        },
      },
    };

    return this.createWorkflow(projectId, {
      action: "protocols/ethereum_kiln/networks/goerli/actions/stake",
      ethereumKilnStakingParameters: ethKilnStakingParameters,
    });
  }

  async getWorkflow(name: string): Promise<V1Alpha1Workflow> {
    const client = await this.createApiClient("GET", `${name}`);

    const response = await client.api.getWorkflow(name);
    return response.data;
  }

  async performWorkflowStep(
    name: string,
    stepIndex: number,
    signedTx: string
  ): Promise<V1Alpha1Workflow> {
    const client = await this.createApiClient("POST", `${name}/step`);

    const response = await client.api.updateWorkflow(name, {
      step: stepIndex,
      signedTx,
    });
    return response.data;
  }
}
