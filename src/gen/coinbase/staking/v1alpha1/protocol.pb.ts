/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Protocol = {
  name?: string
}

export type ListProtocolsRequest = {
  pageSize?: number
  pageToken?: string
}

export type ListProtocolsResponse = {
  protocols?: Protocol[]
  nextPageToken?: string
}