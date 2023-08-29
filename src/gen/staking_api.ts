/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * The unit of wait time
 * - WAIT_UNIT_UNSPECIFIED: Unspecified wait time
 *  - WAIT_UNIT_SECONDS: Wait time measured in seconds
 *  - WAIT_UNIT_BLOCKS: Wait time measured in blocks
 *  - WAIT_UNIT_EPOCHS: Wait time measured in epochs
 *  - WAIT_UNIT_CHECKPOINTS: Wait time measured in checkpoints
 * @default "WAIT_UNIT_UNSPECIFIED"
 */
export enum WaitStepOutputWaitUnit {
  WAIT_UNIT_UNSPECIFIED = "WAIT_UNIT_UNSPECIFIED",
  WAIT_UNIT_SECONDS = "WAIT_UNIT_SECONDS",
  WAIT_UNIT_BLOCKS = "WAIT_UNIT_BLOCKS",
  WAIT_UNIT_EPOCHS = "WAIT_UNIT_EPOCHS",
  WAIT_UNIT_CHECKPOINTS = "WAIT_UNIT_CHECKPOINTS",
}

export interface ProtobufAny {
  "@type"?: string;
  [key: string]: any;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
 * An Action resource, which represents an action you may take on a network,
 * posted to a validator. (i.e. stake, unstake)
 */
export interface V1Alpha1Action {
  /**
   * The resource name of the Action.
   * Format: protocols/{protocolName}/networks/{networkName}/actions/{actionName}
   * Ex: protocols/polygon/networks/testnet/validators/stake
   */
  name?: string;
}

/**
 * The amount of a token you wish to perform an action
 * with.
 */
export interface V1Alpha1Amount {
  /** The total value of the token. */
  value?: string;
  /** The currency of the token */
  currency?: string;
}

/**
 * EthereumKiln: Stake Parameters
 * The parameters required for the stake action on Ethereum Kiln.
 */
export interface V1Alpha1EthereumKilnStakeParameters {
  /** The address you wish to stake from. */
  stakerAddress: string;
  /** The address of the integrator contract */
  integratorContractAddress: string;
  /** The amount of Ethereum to stake in wei. */
  amount: V1Alpha1Amount;
}

/**
 * EthereumKiln: Staking context details
 * The protocol specific details for an Ethereum Kiln staking context.
 */
export interface V1Alpha1EthereumKilnStakingContextDetails {
  /**
   * The Ethereum balance of the address
   * The amount of a token you wish to perform an action
   * with.
   */
  ethereumBalance?: V1Alpha1Amount;
  /** The number of integrator shares owned by the address. */
  integratorShareBalance?: V1Alpha1Amount;
  /** The total Ethereum you can exchange for your integrator shares. */
  integratorShareUnderlyingBalance?: V1Alpha1Amount;
  /** The total amount of Ethereum you can redeem for all non-claimed vPool shares. */
  totalExitableEth?: V1Alpha1Amount;
  /** The number of vPool shares are eligible to receive now or at a later point in time. */
  totalSharesPendingExit?: V1Alpha1Amount;
  /** The number of vPool shares you are able to claim now. */
  fulfillableShareCount?: V1Alpha1Amount;
}

/**
 * EthereumKiln: Staking Context Parameters
 * The protocol specific parameters required for fetching a staking context.
 */
export interface V1Alpha1EthereumKilnStakingContextParameters {
  /** Integrator contract address */
  integratorContractAddress?: string;
}

/**
 * EthereumKiln: Staking Parameters
 * The parameters needed for staking on Ethereum via Kiln.
 */
export interface V1Alpha1EthereumKilnStakingParameters {
  /** The parameters for stake action on Ethereum Kiln. */
  stakeParameters?: V1Alpha1EthereumKilnStakeParameters;
  /** The parameters for unstake action on Ethereum Kiln. */
  unstakeParameters?: V1Alpha1EthereumKilnUnstakeParameters;
}

/**
 * EthereumKiln: Unstake Parameters
 * The parameters required for the unstake action on Ethereum Kiln.
 */
export interface V1Alpha1EthereumKilnUnstakeParameters {
  /** The address you wish to unstake from. */
  stakerAddress: string;
  /** The address of the integrator contract */
  integratorContractAddress: string;
  /** The amount of Ethereum to unstake in wei. */
  amount: V1Alpha1Amount;
}

/** The response message for ListActions. */
export interface V1Alpha1ListActionsResponse {
  /** The list of actions. */
  actions?: V1Alpha1Action[];
  /**
   * *UNUSED* A token which can be provided as `page_token` to retrieve the next page.
   * If this field is omitted, there are no additional pages.
   */
  nextPageToken?: string;
}

/** The response message for ListNetworks. */
export interface V1Alpha1ListNetworksResponse {
  /** The list of networks. */
  networks?: V1Alpha1Network[];
  /**
   * *UNUSED* A token which can be provided as `page_token` to retrieve the next page.
   * If this field is omitted, there are no additional pages.
   */
  nextPageToken?: string;
}

/** The response message for ListProtocols. */
export interface V1Alpha1ListProtocolsResponse {
  /** The list of protocols. */
  protocols?: V1Alpha1Protocol[];
  /**
   * *UNUSED* A token which can be provided as `page_token` to retrieve the next page.
   * If this field is omitted, there are no additional pages.
   */
  nextPageToken?: string;
}

/** The response message for ListValidators. */
export interface V1Alpha1ListValidatorsResponse {
  /** The list of validators. */
  validators?: V1Alpha1Validator[];
  /**
   * *UNUSED* A token which can be provided as `page_token` to retrieve the next page.
   * If this field is omitted, there are no additional pages.
   */
  nextPageToken?: string;
}

/** The response message for ListWorkflows. */
export interface V1Alpha1ListWorkflowsResponse {
  /** The list of workflows. */
  workflows?: V1Alpha1Workflow[];
  /**
   * A token which can be provided as `page_token` to retrieve the next page.
   * If this field is omitted, there are no additional pages.
   */
  nextPageToken?: string;
}

/**
 * A Network resource, which represents a blockchain network.
 * (i.e. mainnet, testnet, etc.)
 */
export interface V1Alpha1Network {
  /**
   * The resource name of the Network.
   * Format: protocols/{protocolName}/networks/{networkName}
   * Ex: protocols/polygon/networks/testnet
   */
  name?: string;
  /**
   * Represents if the network is the mainnet network
   * for the given protocol.
   */
  isMainnet?: boolean;
}

/**
 * Solana: Nonce Options
 * The parameters required to use a durable transaction nonce for Solana transactions.
 */
export interface V1Alpha1NonceOptions {
  /** The blockhash stored in the nonce account. */
  nonce?: string;
  /** The address of the nonce account. */
  nonceAccount?: string;
  /** The address of the nonce authority. If not provided, defaults to the nonce_account_address. Signs the transaction. */
  nonceAuthority?: string;
}

/** The parameters needed to claim rewards on Polygon. */
export interface V1Alpha1PolygonClaimRewardsParameters {
  /**
   * The public address of the delegator you wish to
   * interact with.
   */
  delegatorAddress: string;
  /**
   * The public address of the validator you wish to
   * perform the action to.
   */
  validatorAddress: string;
}

/** The parameters needed to restake on Polygon. */
export interface V1Alpha1PolygonRestakeParameters {
  /**
   * The public address of the delegator you wish to
   * interact with.
   */
  delegatorAddress: string;
  /**
   * The public address of the validator you wish to
   * perform the action to.
   */
  validatorAddress: string;
}

/** The parameters needed to stake on Polygon. */
export interface V1Alpha1PolygonStakeParameters {
  /**
   * The public address of the delegator you wish to
   * interact with.
   */
  delegatorAddress: string;
  /**
   * The public address of the validator you wish to
   * perform the action to.
   */
  validatorAddress: string;
  /**
   * The amount of the asset. For native assets or ERC-20 contracts, this is presented in terms of
   * atomic units (e.g., Wei for Ether) as a base-10 number.
   */
  amount: V1Alpha1Amount;
}

/** The parameters needed for staking on Polygon */
export interface V1Alpha1PolygonStakingParameters {
  /** The parameters for stake action on Polygon */
  stakeParameters?: V1Alpha1PolygonStakeParameters;
  /** The parameters for unstake action on Polygon */
  unstakeParameters?: V1Alpha1PolygonUnstakeParameters;
  /** The parameters for restake action on Polygon */
  restakeParameters?: V1Alpha1PolygonRestakeParameters;
  /** The parameters for claim rewards action on Polygon */
  claimRewardsParameters?: V1Alpha1PolygonClaimRewardsParameters;
}

/** The parameters needed to unstake on Polygon. */
export interface V1Alpha1PolygonUnstakeParameters {
  /**
   * The public address of the delegator you wish to
   * interact with.
   */
  delegatorAddress: string;
  /**
   * The public address of the validator you wish to
   * perform the action to.
   */
  validatorAddress: string;
  /**
   * The amount of the asset. For native assets or ERC-20 contracts, this is presented in terms of
   * atomic units (e.g., Wei for Ether) as a base-10 number.
   */
  amount: V1Alpha1Amount;
}

/** A Protocol resource (i.e. polygon, ethereum, etc.) */
export interface V1Alpha1Protocol {
  /**
   * The resource name of the Protocol.
   * Format: protocols/{protocolName}
   * Ex: protocols/polygon
   */
  name?: string;
}

/**
 * Solana: Create Stake Account Parameters
 * The parameters required for the create stake account action on Solana.
 */
export interface V1Alpha1SolanaCreateStakeAccountParameters {
  /** The address of the new stake account which will be created. This address must not already exist. Signs the transaction. */
  stakeAccountAddress: string;
  /**
   * The address of the account which will fund the stake account. Pays the transaction fee. Signs the transaction.
   * (-- api-linter: core::0140::prepositions=disabled
   *     aip.dev/not-precedent: We need to do this because it's not relevant to our use case. --)
   */
  fromAddress: string;
  /** The address of the account which will be granted signing authority over staking operations on the new stake account. If not provided, defaults to the from_address. */
  stakeAuthority?: string;
  /** The address of the account which will be granted signing authority over withdrawing inactive stake from the new stake account. If not provided, defaults to the from_address. */
  withdrawAuthority?: string;
  /** The amount to fund the stake account with, in Lamports. */
  amount: V1Alpha1Amount;
  /** The parameters required to use a durable transaction nonce for Solana transactions. */
  nonceOptions?: V1Alpha1NonceOptions;
}

/**
 * Solana: Deactivate Stake Parameters
 * The parameters required for the deactivate stake action on Solana.
 */
export interface V1Alpha1SolanaDeactivateStakeParameters {
  /** The address of the stake account which will have its stake deactivated. Stake must be currently active. */
  stakeAccountAddress: string;
  /** The address of the account which has signing authority over staking operations on the stake account. Signs the transaction. */
  stakeAuthority: string;
  /** The parameters required to use a durable transaction nonce for Solana transactions. */
  nonceOptions?: V1Alpha1NonceOptions;
}

/**
 * Solana: Delegate Stake Parameters
 * The parameters required for the delegate stake action on Solana.
 */
export interface V1Alpha1SolanaDelegateStakeParameters {
  /** The address of the stake account which will be delegating its stake. */
  stakeAccountAddress: string;
  /** The address of the validator's vote account to which the stake will be delegated. */
  voteAccountAddress: string;
  /** The address of the account which has signing authority over staking operations on the stake account. Signs the transaction. */
  stakeAuthority: string;
  /** The parameters required to use a durable transaction nonce for Solana transactions. */
  nonceOptions?: V1Alpha1NonceOptions;
}

/**
 * Solana: Merge Stake Parameters
 * The parameters required for merge stake action on Solana.
 */
export interface V1Alpha1SolanaMergeStakeParameters {
  /** The address of the stake account will be merged into and have stake added to it. */
  stakeAccountAddress: string;
  /** The address of the source stake account which will have no longer exist after the merge. */
  sourceStakeAccountAddress: string;
  /** The address of the account which has signing authority over staking operations on the stake account. Signs the transaction. */
  stakeAuthority: string;
  /** The parameters required to use a durable transaction nonce for Solana transactions. */
  nonceOptions?: V1Alpha1NonceOptions;
}

/**
 * Solana: Split Stake Parameters
 * The parameters required for split stake action on Solana.
 */
export interface V1Alpha1SolanaSplitStakeParameters {
  /** The address of the stake account will be split and have its stake removed. */
  stakeAccountAddress: string;
  /** The address of the new stake account which will be created and have the stake added to it. */
  newStakeAccountAddress: string;
  /** The address of the account which has signing authority over staking operations on the stake account. Signs the transaction. */
  stakeAuthority: string;
  /** The amount of stake to split, in Lamports. */
  amount: V1Alpha1Amount;
  /** The parameters required to use a durable transaction nonce for Solana transactions. */
  nonceOptions?: V1Alpha1NonceOptions;
}

/** Solana: Staking Parameters */
export interface V1Alpha1SolanaStakingParameters {
  /** The parameters for create stake account action on Solana. */
  createStakeParameters?: V1Alpha1SolanaCreateStakeAccountParameters;
  /** The parameters for delegate stake action on Solana. */
  delegateStakeParameters?: V1Alpha1SolanaDelegateStakeParameters;
  /** The parameters for deactivate stake action on Solana. */
  deactivateStakeParameters?: V1Alpha1SolanaDeactivateStakeParameters;
  /** The parameters for withdraw stake action on Solana. */
  withdrawStakeParameters?: V1Alpha1SolanaWithdrawStakeParameters;
  /** The parameters for split stake action on Solana. */
  splitStakeParameters?: V1Alpha1SolanaSplitStakeParameters;
  /** The parameters for merge stake action on Solana. */
  mergeStakeParameters?: V1Alpha1SolanaMergeStakeParameters;
}

/**
 * Solana: Withdraw Stake Parameters
 * The parameters required for the withdraw stake action on Solana.
 */
export interface V1Alpha1SolanaWithdrawStakeParameters {
  /** The address of the stake account from which stake will be withdrawn. Stake must be currently inactive. */
  stakeAccountAddress: string;
  /** The address of the recipient account which will receive the withdrawn stake. */
  recipientAddress: string;
  /** The address of the account which has signing authority over withdrawing inactive stake from the stake account. Signs the transaction. */
  withdrawAuthority: string;
  /** The amount to withdraw from the stake account, in Lamports. */
  amount: V1Alpha1Amount;
  /** The parameters required to use a durable transaction nonce for Solana transactions. */
  nonceOptions?: V1Alpha1NonceOptions;
}

/** The details of a transaction being constructed and broadcasted to the network. */
export interface V1Alpha1TxStepOutput {
  /** The unsigned transaction which was signed in order to be broadcasted */
  unsignedTx?: string;
  /** The signed transaction which was asked to be broadcasted */
  signedTx?: string;
  /** The hash of the broadcasted transaction. */
  txHash?: string;
  /** The state of the transaction step. */
  state?: V1Alpha1TxStepOutputState;
}

/**
 * State defines an enumeration of states for a staking transaction
 * - STATE_UNSPECIFIED: Unspecified transaction state, this is for backwards compatibility.
 *  - STATE_NOT_CONSTRUCTED: Tx has not yet been constructed in the backend
 *  - STATE_CONSTRUCTED: Tx construction is over in the backend
 *  - STATE_PENDING_SIGNING: Tx is waiting to be signed
 *  - STATE_SIGNED: Tx has been signed and returned to the backend
 *  - STATE_BROADCASTING: Tx is being broadcasted to the network
 *  - STATE_CONFIRMING: Tx is waiting for confirmation
 *  - STATE_CONFIRMED: Tx has been confirmed to be included in a block
 *  - STATE_FINALIZED: Tx has been finalized
 *  - STATE_FAILED: Tx construction or broadcasting failed
 *  - STATE_SUCCESS: Tx has been successfully executed
 *  - STATE_CANCELING: Tx is being canceled
 *  - STATE_CANCELED: Tx has been canceled
 *  - STATE_CANCEL_FAILED: Tx cancellation failed
 *  - STATE_FAILED_REFRESHABLE: Tx failed but can be refreshed
 *  - STATE_REFRESHING: Tx is being refreshed
 * @default "STATE_UNSPECIFIED"
 */
export enum V1Alpha1TxStepOutputState {
  STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
  STATE_NOT_CONSTRUCTED = "STATE_NOT_CONSTRUCTED",
  STATE_CONSTRUCTED = "STATE_CONSTRUCTED",
  STATE_PENDING_SIGNING = "STATE_PENDING_SIGNING",
  STATE_SIGNED = "STATE_SIGNED",
  STATE_BROADCASTING = "STATE_BROADCASTING",
  STATE_CONFIRMING = "STATE_CONFIRMING",
  STATE_CONFIRMED = "STATE_CONFIRMED",
  STATE_FINALIZED = "STATE_FINALIZED",
  STATE_FAILED = "STATE_FAILED",
  STATE_SUCCESS = "STATE_SUCCESS",
  STATE_CANCELING = "STATE_CANCELING",
  STATE_CANCELED = "STATE_CANCELED",
  STATE_CANCEL_FAILED = "STATE_CANCEL_FAILED",
  STATE_FAILED_REFRESHABLE = "STATE_FAILED_REFRESHABLE",
  STATE_REFRESHING = "STATE_REFRESHING",
}

/**
 * A Validator resource, which represents an active validator
 * for the given protocol network which you can submit an action
 * to.
 */
export interface V1Alpha1Validator {
  /**
   * The resource name of the Validator.
   * Format: protocols/{protocolName}/networks/{networkName}/validators/{validatorName}
   * Ex: protocols/polygon/networks/testnet/validators/0x857679d69fE50E7B722f94aCd2629d80C355163d
   */
  name?: string;
  /** The public address of the validator that you may perform workflow actions on. */
  validatorAddress?: string;
  /**
   * The rate of commission for the validator
   * @format float
   */
  commissionRate?: number;
}

/** The response message for the ViewStakingContext request. */
export interface V1Alpha1ViewStakingContextResponse {
  /** The address you are getting a staking context for */
  address: string;
  /**
   * EthereumKiln staking context details
   * The protocol specific details for an Ethereum Kiln staking context.
   */
  ethereumKilnStakingContextDetails: V1Alpha1EthereumKilnStakingContextDetails;
}

/** The output details of a step where we wait for some kind of on-chain activity to finish like reaching a certain checkpoint, epoch or block */
export interface V1Alpha1WaitStepOutput {
  /**
   * The beginning of wait period.
   * @format int64
   */
  start?: string;
  /**
   * The current wait progress.
   * @format int64
   */
  current?: string;
  /**
   * The target wait end point.
   * @format int64
   */
  target?: string;
  /**
   * The wait unit (like checkpoint, block, epoch etc)
   * - WAIT_UNIT_UNSPECIFIED: Unspecified wait time
   *  - WAIT_UNIT_SECONDS: Wait time measured in seconds
   *  - WAIT_UNIT_BLOCKS: Wait time measured in blocks
   *  - WAIT_UNIT_EPOCHS: Wait time measured in epochs
   *  - WAIT_UNIT_CHECKPOINTS: Wait time measured in checkpoints
   */
  unit?: WaitStepOutputWaitUnit;
  /** The state of the wait step. */
  state?: V1Alpha1WaitStepOutputState;
}

/**
 * WaitStepState defines an enumeration of states for a wait step
 * - STATE_UNSPECIFIED: Unspecified wait step state
 *  - STATE_NOT_STARTED: Wait step has not started
 *  - STATE_IN_PROGRESS: Wait step is in-progress
 *  - STATE_COMPLETED: Wait step completed
 * @default "STATE_UNSPECIFIED"
 */
export enum V1Alpha1WaitStepOutputState {
  STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
  STATE_NOT_STARTED = "STATE_NOT_STARTED",
  STATE_IN_PROGRESS = "STATE_IN_PROGRESS",
  STATE_COMPLETED = "STATE_COMPLETED",
}

/** A Workflow resource */
export interface V1Alpha1Workflow {
  /**
   * The resource name of the workflow.
   * Format: projects/{projectUUID}/workflows/{workflowUUID}
   * Ex: projects/ 123e4567-e89b-12d3-a456-426614174000/workflows/123e4567-e89b-12d3-a456-426614174000
   */
  name?: string;
  /**
   * The resource name of the action being
   * performed.
   * Format: protocols/{protocol}/networks/{network}/actions/{action}
   */
  action: string;
  /** Polygon staking parameters */
  polygonStakingParameters: V1Alpha1PolygonStakingParameters;
  /** Solana staking parameters */
  solanaStakingParameters: V1Alpha1SolanaStakingParameters;
  /**
   * EthereumKiln staking parameters
   * The parameters needed for staking on Ethereum via Kiln.
   */
  ethereumKilnStakingParameters: V1Alpha1EthereumKilnStakingParameters;
  /**
   * The current state of the workflow
   * - STATE_UNSPECIFIED: Unspecified workflow state, this is for backwards compatibility.
   *  - STATE_IN_PROGRESS: In Progress represents a workflow that is currently in progress.
   *  - STATE_WAITING_FOR_SIGNING: Waiting for signing represents the workflow is waiting on the consumer to sign.
   *  - STATE_COMPLETED: Completed represents the workflow has completed.
   *  - STATE_FAILED: Failed represents the workflow has failed.
   *  - STATE_CANCELING: Canceling represents the workflow is being canceled.
   *  - STATE_CANCELED: Canceled represents the workflow has been canceled.
   *  - STATE_CANCEL_FAILED: Cancel failed represents the workflow failed to cancel.
   *  - STATE_FAILED_REFRESHABLE: Failed refreshable represents the workflow failed but can be refreshed.
   */
  state?: V1Alpha1WorkflowState;
  /**
   * The index of the current step.
   * @format int32
   */
  currentStepId?: number;
  /** The list of steps for this workflow. */
  steps?: V1Alpha1WorkflowStep[];
  /**
   * The timestamp the workflow was created
   * @format date-time
   */
  createTime?: string;
  /**
   * The timestamp the workflow was last updated
   * @format date-time
   */
  updateTime?: string;
}

/**
 * The state of a workflow
 * Example workflow states:
 * IN_PROGRESS -> WAITING_FOR_SIGNING -> IN_PROGRESS -> COMPLETED
 * .................................................|-> FAILED
 * IN_PROGRESS -> WAITING_FOR_SIGNING -> CANCELING -> CANCELED
 * ...............................................|-> CANCEL_FAILED
 * - STATE_UNSPECIFIED: Unspecified workflow state, this is for backwards compatibility.
 *  - STATE_IN_PROGRESS: In Progress represents a workflow that is currently in progress.
 *  - STATE_WAITING_FOR_SIGNING: Waiting for signing represents the workflow is waiting on the consumer to sign.
 *  - STATE_COMPLETED: Completed represents the workflow has completed.
 *  - STATE_FAILED: Failed represents the workflow has failed.
 *  - STATE_CANCELING: Canceling represents the workflow is being canceled.
 *  - STATE_CANCELED: Canceled represents the workflow has been canceled.
 *  - STATE_CANCEL_FAILED: Cancel failed represents the workflow failed to cancel.
 *  - STATE_FAILED_REFRESHABLE: Failed refreshable represents the workflow failed but can be refreshed.
 * @default "STATE_UNSPECIFIED"
 */
export enum V1Alpha1WorkflowState {
  STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
  STATE_IN_PROGRESS = "STATE_IN_PROGRESS",
  STATE_WAITING_FOR_SIGNING = "STATE_WAITING_FOR_SIGNING",
  STATE_COMPLETED = "STATE_COMPLETED",
  STATE_FAILED = "STATE_FAILED",
  STATE_CANCELING = "STATE_CANCELING",
  STATE_CANCELED = "STATE_CANCELED",
  STATE_CANCEL_FAILED = "STATE_CANCEL_FAILED",
  STATE_FAILED_REFRESHABLE = "STATE_FAILED_REFRESHABLE",
}

/** The information for a step in the workflow */
export interface V1Alpha1WorkflowStep {
  /** The human readable name of the step. */
  name?: string;
  /** The tx step output (i.e. transaction metadata such as unsigned tx, signed tx etc). */
  txStepOutput?: V1Alpha1TxStepOutput;
  /** The waiting details for any kind like how many checkpoints away for unbonding etc */
  waitStepOutput?: V1Alpha1WaitStepOutput;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.developer.coinbase.com/staking";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Coinbase Non-Custodial Staking API
 * @version v1alpha1
 * @baseUrl https://api.developer.coinbase.com/staking
 *
 * Staking Service is a non-custodial staking service that aims to support multiple protocols and actions on them.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description List supported protocols
     *
     * @tags Protocol
     * @name ListProtocols
     * @summary List supported protocols
     * @request GET:/api/v1alpha1/protocols
     */
    listProtocols: (
      query?: {
        /**
         * *UNUSED* The maximum number of protocols to return. The service may
         * return fewer than this value.
         *
         * If unspecified, 50 protocols will be returned.
         * The maximum value is 1000; values over 1000 will be floored to 1000.
         * @format int32
         */
        pageSize?: number;
        /**
         * *UNUSED* A page token as part of the response of a previous call.
         * Provide this to retrieve the next page.
         *
         * When paginating, all other parameters must match the previous
         * request to list resources.
         */
        pageToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1ListProtocolsResponse, RpcStatus>({
        path: `/api/v1alpha1/protocols`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns point-in-time context of staking data for an address
     *
     * @tags StakingContext
     * @name ViewStakingContext
     * @summary Returns point-in-time context of staking data for an address
     * @request GET:/api/v1alpha1/viewStakingContext:view
     */
    viewStakingContext: (
      view: string,
      query: {
        /** The address to fetch staking context for. */
        address: string;
        /**
         * The resource name of the Network.
         * Format: protocols/{protocolName}/networks/{networkName}
         * Ex: protocols/polygon/networks/testnet
         */
        "network.name"?: string;
        /**
         * Represents if the network is the mainnet network
         * for the given protocol.
         */
        "network.isMainnet"?: boolean;
        /** Integrator contract address */
        "ethereumKilnStakingContextParameters.integratorContractAddress"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1ViewStakingContextResponse, RpcStatus>({
        path: `/api/v1alpha1/viewStakingContext${view}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name GetWorkflow
     * @summary Get workflow
     * @request GET:/api/v1alpha1/{name}
     */
    getWorkflow: (name: string, params: RequestParams = {}) =>
      this.request<V1Alpha1Workflow, RpcStatus>({
        path: `/api/v1alpha1/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Refresh the current step in a workflow
     *
     * @tags Workflow
     * @name RefreshWorkflow
     * @summary Refresh the current step in a workflow
     * @request POST:/api/v1alpha1/{name}/refresh
     */
    refreshWorkflow: (
      name: string,
      body: {
        /**
         * The index of the step to be refreshed.
         * @format int32
         */
        step: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1Workflow, RpcStatus>({
        path: `/api/v1alpha1/${name}/refresh`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Perform the next step in a workflow
     *
     * @tags Workflow
     * @name UpdateWorkflow
     * @summary Perform the next step in a workflow
     * @request POST:/api/v1alpha1/{name}/step
     */
    updateWorkflow: (
      name: string,
      body: {
        /**
         * The index of the step to be performed.
         * @format int32
         */
        step: number;
        /** The signed transaction to post to the network. */
        signedTx: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1Workflow, RpcStatus>({
        path: `/api/v1alpha1/${name}/step`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List supported actions
     *
     * @tags Action
     * @name ListActions
     * @summary List supported actions
     * @request GET:/api/v1alpha1/{parent}/actions
     */
    listActions: (
      parent: string,
      query?: {
        /**
         * *UNUSED* The maximum number of actions to return. The service may
         * return fewer than this value.
         *
         * If unspecified, 50 actions will be returned.
         * The maximum value is 1000; values over 1000 will be floored to 1000.
         * @format int32
         */
        pageSize?: number;
        /**
         * *UNUSED* A page token as part of the response of a previous call.
         * Provide this to retrieve the next page.
         *
         * When paginating, all other parameters must match the previous
         * request to list resources.
         */
        pageToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1ListActionsResponse, RpcStatus>({
        path: `/api/v1alpha1/${parent}/actions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description List supported networks
     *
     * @tags Network
     * @name ListNetworks
     * @summary List supported networks
     * @request GET:/api/v1alpha1/{parent}/networks
     */
    listNetworks: (
      parent: string,
      query?: {
        /**
         * *UNUSED* The maximum number of networks to return. The service may
         * return fewer than this value.
         *
         * If unspecified, 50 networks will be returned.
         * The maximum value is 1000; values over 1000 will be floored to 1000.
         * @format int32
         */
        pageSize?: number;
        /**
         * *UNUSED* A page token as part of the response of a previous call.
         * Provide this to retrieve the next page.
         *
         * When paginating, all other parameters must match the previous
         * request to list resources.
         */
        pageToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1ListNetworksResponse, RpcStatus>({
        path: `/api/v1alpha1/${parent}/networks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description List supported validators
     *
     * @tags Validator
     * @name ListValidators
     * @summary List supported validators
     * @request GET:/api/v1alpha1/{parent}/validators
     */
    listValidators: (
      parent: string,
      query?: {
        /**
         * *UNUSED* The maximum number of validators to return. The service may
         * return fewer than this value.
         *
         * If unspecified, 50 validators will be returned.
         * The maximum value is 1000; values over 1000 will be floored to 1000.
         * @format int32
         */
        pageSize?: number;
        /**
         * *UNUSED* A page token as part of the response of a previous call.
         * Provide this to retrieve the next page.
         *
         * When paginating, all other parameters must match the previous
         * request to list resources.
         */
        pageToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1ListValidatorsResponse, RpcStatus>({
        path: `/api/v1alpha1/${parent}/validators`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name ListWorkflows
     * @summary List supported workflows
     * @request GET:/api/v1alpha1/{parent}/workflows
     */
    listWorkflows: (
      parent: string,
      query?: {
        /**
         * [AIP-160](https://google.aip.dev/160) filter
         * Supported fields:
         * - string delegator_address: "0x..."
         * - string validator_address: "0x..."
         * - string action: "stake", "unstake"
         * - string protocol: "polygon"
         * - string network: "testnet", "mainnet"
         * - string amount: "10000"
         * - string currency: "MATIC"
         */
        filter?: string;
        /**
         * The maximum number of workflows to return. The service may
         * return fewer than this value.
         *
         * If unspecified, 50 workflows will be returned.
         * The maximum value is 1000; values over 1000 will be floored to 1000.
         * @format int32
         */
        pageSize?: number;
        /**
         * A page token as part of the response of a previous call.
         * Provide this to retrieve the next page.
         *
         * When paginating, all other parameters must match the previous
         * request to list resources.
         */
        pageToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1Alpha1ListWorkflowsResponse, RpcStatus>({
        path: `/api/v1alpha1/${parent}/workflows`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name CreateWorkflow
     * @summary Create workflow
     * @request POST:/api/v1alpha1/{parent}/workflows
     */
    createWorkflow: (parent: string, workflow: V1Alpha1Workflow, params: RequestParams = {}) =>
      this.request<V1Alpha1Workflow, RpcStatus>({
        path: `/api/v1alpha1/${parent}/workflows`,
        method: "POST",
        body: workflow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
