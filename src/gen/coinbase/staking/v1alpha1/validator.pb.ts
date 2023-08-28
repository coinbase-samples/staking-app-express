/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Validator = {
  name?: string
  validatorAddress?: string
  commissionRate?: number
}

export type ListValidatorsRequest = {
  parent?: string
  pageSize?: number
  pageToken?: string
}

export type ListValidatorsResponse = {
  validators?: Validator[]
  nextPageToken?: string
}