// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/network.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../google/api/resource_pb";

export class Network extends jspb.Message { 
    getName(): string;
    setName(value: string): Network;
    getIsMainnet(): boolean;
    setIsMainnet(value: boolean): Network;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Network.AsObject;
    static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Network;
    static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
    export type AsObject = {
        name: string,
        isMainnet: boolean,
    }
}

export class ListNetworksRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListNetworksRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworksRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworksRequest): ListNetworksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworksRequest;
    static deserializeBinaryFromReader(message: ListNetworksRequest, reader: jspb.BinaryReader): ListNetworksRequest;
}

export namespace ListNetworksRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNetworksResponse extends jspb.Message { 
    clearNetworksList(): void;
    getNetworksList(): Array<Network>;
    setNetworksList(value: Array<Network>): ListNetworksResponse;
    addNetworks(value?: Network, index?: number): Network;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworksResponse): ListNetworksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworksResponse;
    static deserializeBinaryFromReader(message: ListNetworksResponse, reader: jspb.BinaryReader): ListNetworksResponse;
}

export namespace ListNetworksResponse {
    export type AsObject = {
        networksList: Array<Network.AsObject>,
        nextPageToken: string,
    }
}
