export interface InitiatePartialEthStakingRequest {
  stakerAddress: string;
  amount: string;
}

export interface UnstakePartialEthStakingRequest {
  stakerAddress: string;
  unstakeAmount: string;
}

export interface ClaimPartialEthRewardsRequest {
  stakerAddress: string;
}
