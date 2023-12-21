export interface BasePartialEthStakingRequest {
  stakerAddress: string;
  workflowName?: string;
}

export interface PartialEthInitiateStakingRequest
  extends BasePartialEthStakingRequest {
  amount: string;
}

export interface PartialEthInitiateUnstakeRequest
  extends BasePartialEthStakingRequest {
  unstakeAmount: string;
}

export interface PartialEthClaimRewardsRequest
  extends BasePartialEthStakingRequest {}

export interface PartialEthViewContextRequest
  extends BasePartialEthStakingRequest {
  network: string;
}
