// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/protocol.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_resource_pb from "../../../google/api/resource_pb";

export class Protocol extends jspb.Message { 
    getName(): string;
    setName(value: string): Protocol;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Protocol.AsObject;
    static toObject(includeInstance: boolean, msg: Protocol): Protocol.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Protocol, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Protocol;
    static deserializeBinaryFromReader(message: Protocol, reader: jspb.BinaryReader): Protocol;
}

export namespace Protocol {
    export type AsObject = {
        name: string,
    }
}

export class ListProtocolsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListProtocolsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListProtocolsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProtocolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProtocolsRequest): ListProtocolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProtocolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProtocolsRequest;
    static deserializeBinaryFromReader(message: ListProtocolsRequest, reader: jspb.BinaryReader): ListProtocolsRequest;
}

export namespace ListProtocolsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListProtocolsResponse extends jspb.Message { 
    clearProtocolsList(): void;
    getProtocolsList(): Array<Protocol>;
    setProtocolsList(value: Array<Protocol>): ListProtocolsResponse;
    addProtocols(value?: Protocol, index?: number): Protocol;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListProtocolsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProtocolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProtocolsResponse): ListProtocolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProtocolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProtocolsResponse;
    static deserializeBinaryFromReader(message: ListProtocolsResponse, reader: jspb.BinaryReader): ListProtocolsResponse;
}

export namespace ListProtocolsResponse {
    export type AsObject = {
        protocolsList: Array<Protocol.AsObject>,
        nextPageToken: string,
    }
}
