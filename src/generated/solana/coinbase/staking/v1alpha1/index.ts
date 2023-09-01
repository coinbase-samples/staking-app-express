// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

// The parameters required to use a durable transaction nonce for Solana transactions.
export type NonceOptions = {
  // The blockhash stored in the nonce account.
  nonce: string | undefined;
  // The address of the nonce account.
  nonceAccount: string | undefined;
  // The address of the nonce authority. If not provided, defaults to the nonce_account_address. Signs the transaction.
  nonceAuthority: string | undefined;
};

// The parameters required for the create stake account action on Solana.
export type SolanaCreateStakeAccountParameters = {
  // The address of the new stake account which will be created. This address must not already exist. Signs the transaction.
  //
  // Behaviors: REQUIRED
  stakeAccountAddress: string | undefined;
  // The address of the account which will fund the stake account. Pays the transaction fee. Signs the transaction.
  // (-- api-linter: core::0140::prepositions=disabled
  // aip.dev/not-precedent: We need to do this because it's not relevant to our use case. --)
  //
  // Behaviors: REQUIRED
  fromAddress: string | undefined;
  // The address of the account which will be granted signing authority over staking operations on the new stake account. If not provided, defaults to the from_address.
  //
  // Behaviors: OPTIONAL
  stakeAuthority: string | undefined;
  // The address of the account which will be granted signing authority over withdrawing inactive stake from the new stake account. If not provided, defaults to the from_address.
  //
  // Behaviors: OPTIONAL
  withdrawAuthority: string | undefined;
  // The amount to fund the stake account with, in Lamports.
  //
  // Behaviors: REQUIRED
  amount: Amount | undefined;
  // The parameters required to use a durable transaction nonce for Solana transactions.
  //
  // Behaviors: OPTIONAL
  nonceOptions: NonceOptions | undefined;
};

// The amount of a token you wish to perform an action
// with.
export type Amount = {
  // The total value of the token.
  value: string | undefined;
  // (-- api-linter: core::0143::standardized-codes=disabled
  // aip.dev/not-precedent: We need to do this because it is in active.
  // discussion --)
  // The name of the token.
  currency: string | undefined;
};

// The parameters required for the delegate stake action on Solana.
export type SolanaDelegateStakeParameters = {
  // The address of the stake account which will be delegating its stake.
  //
  // Behaviors: REQUIRED
  stakeAccountAddress: string | undefined;
  // The address of the validator's vote account to which the stake will be delegated.
  //
  // Behaviors: REQUIRED
  voteAccountAddress: string | undefined;
  // The address of the account which has signing authority over staking operations on the stake account. Signs the transaction.
  //
  // Behaviors: REQUIRED
  stakeAuthority: string | undefined;
  // The parameters required to use a durable transaction nonce for Solana transactions.
  //
  // Behaviors: OPTIONAL
  nonceOptions: NonceOptions | undefined;
};

// The parameters required for the deactivate stake action on Solana.
export type SolanaDeactivateStakeParameters = {
  // The address of the stake account which will have its stake deactivated. Stake must be currently active.
  //
  // Behaviors: REQUIRED
  stakeAccountAddress: string | undefined;
  // The address of the account which has signing authority over staking operations on the stake account. Signs the transaction.
  //
  // Behaviors: REQUIRED
  stakeAuthority: string | undefined;
  // The parameters required to use a durable transaction nonce for Solana transactions.
  //
  // Behaviors: OPTIONAL
  nonceOptions: NonceOptions | undefined;
};

// The parameters required for the withdraw stake action on Solana.
export type SolanaWithdrawStakeParameters = {
  // The address of the stake account from which stake will be withdrawn. Stake must be currently inactive.
  //
  // Behaviors: REQUIRED
  stakeAccountAddress: string | undefined;
  // The address of the recipient account which will receive the withdrawn stake.
  //
  // Behaviors: REQUIRED
  recipientAddress: string | undefined;
  // The address of the account which has signing authority over withdrawing inactive stake from the stake account. Signs the transaction.
  //
  // Behaviors: REQUIRED
  withdrawAuthority: string | undefined;
  // The amount to withdraw from the stake account, in Lamports.
  //
  // Behaviors: REQUIRED
  amount: Amount | undefined;
  // The parameters required to use a durable transaction nonce for Solana transactions.
  //
  // Behaviors: OPTIONAL
  nonceOptions: NonceOptions | undefined;
};

// The parameters required for split stake action on Solana.
export type SolanaSplitStakeParameters = {
  // The address of the stake account will be split and have its stake removed.
  //
  // Behaviors: REQUIRED
  stakeAccountAddress: string | undefined;
  // The address of the new stake account which will be created and have the stake added to it.
  //
  // Behaviors: REQUIRED
  newStakeAccountAddress: string | undefined;
  // The address of the account which has signing authority over staking operations on the stake account. Signs the transaction.
  //
  // Behaviors: REQUIRED
  stakeAuthority: string | undefined;
  // The amount of stake to split, in Lamports.
  //
  // Behaviors: REQUIRED
  amount: Amount | undefined;
  // The parameters required to use a durable transaction nonce for Solana transactions.
  //
  // Behaviors: OPTIONAL
  nonceOptions: NonceOptions | undefined;
};

// The parameters required for merge stake action on Solana.
export type SolanaMergeStakeParameters = {
  // The address of the stake account will be merged into and have stake added to it.
  //
  // Behaviors: REQUIRED
  stakeAccountAddress: string | undefined;
  // The address of the source stake account which will have no longer exist after the merge.
  //
  // Behaviors: REQUIRED
  sourceStakeAccountAddress: string | undefined;
  // The address of the account which has signing authority over staking operations on the stake account. Signs the transaction.
  //
  // Behaviors: REQUIRED
  stakeAuthority: string | undefined;
  // The parameters required to use a durable transaction nonce for Solana transactions.
  //
  // Behaviors: OPTIONAL
  nonceOptions: NonceOptions | undefined;
};

// The parameters needed for staking on Solana
export type SolanaStakingParameters = {
  // The parameters for create stake account action on Solana.
  createStakeParameters?: SolanaCreateStakeAccountParameters;
  // The parameters for delegate stake action on Solana.
  delegateStakeParameters?: SolanaDelegateStakeParameters;
  // The parameters for deactivate stake action on Solana.
  deactivateStakeParameters?: SolanaDeactivateStakeParameters;
  // The parameters for withdraw stake action on Solana.
  withdrawStakeParameters?: SolanaWithdrawStakeParameters;
  // The parameters for split stake action on Solana.
  splitStakeParameters?: SolanaSplitStakeParameters;
  // The parameters for merge stake action on Solana.
  mergeStakeParameters?: SolanaMergeStakeParameters;
};


// @@protoc_insertion_point(typescript-http-eof)