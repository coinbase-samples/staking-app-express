// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

// A Validator resource, which represents an active validator
// for the given protocol network which you can submit an action
// to.
export type Validator = {
  // The resource name of the Validator.
  // Format: protocols/{protocolName}/networks/{networkName}/validators/{validatorName}
  // Ex: protocols/polygon/networks/testnet/validators/0x857679d69fE50E7B722f94aCd2629d80C355163d
  name: string | undefined;
  // The public address of the validator that you may perform workflow actions on.
  validatorAddress: string | undefined;
  // The rate of commission for the validator
  commissionRate: number | undefined;
};

// The request message for ListValidators.
export type ListValidatorsRequest = {
  // The resource name of the parent that owns
  // the collection of validators.
  // Format: protocols/{protocol}/networks/{network}
  //
  // Behaviors: REQUIRED
  parent: string | undefined;
  // *UNUSED* The maximum number of validators to return. The service may
  // return fewer than this value.
  // If unspecified, 50 validators will be returned.
  // The maximum value is 1000; values over 1000 will be floored to 1000.
  pageSize: number | undefined;
  // *UNUSED* A page token as part of the response of a previous call.
  // Provide this to retrieve the next page.
  // When paginating, all other parameters must match the previous
  // request to list resources.
  pageToken: string | undefined;
};

// The response message for ListValidators.
export type ListValidatorsResponse = {
  // The list of validators.
  validators: Validator[] | undefined;
  // *UNUSED* A token which can be provided as `page_token` to retrieve the next page.
  // If this field is omitted, there are no additional pages.
  nextPageToken: string | undefined;
};


// @@protoc_insertion_point(typescript-http-eof)
