// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/action.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../google/api/resource_pb";

export class Action extends jspb.Message { 
    getName(): string;
    setName(value: string): Action;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
    export type AsObject = {
        name: string,
    }
}

export class ListActionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListActionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListActionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListActionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListActionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListActionsRequest): ListActionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListActionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListActionsRequest;
    static deserializeBinaryFromReader(message: ListActionsRequest, reader: jspb.BinaryReader): ListActionsRequest;
}

export namespace ListActionsRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListActionsResponse extends jspb.Message { 
    clearActionsList(): void;
    getActionsList(): Array<Action>;
    setActionsList(value: Array<Action>): ListActionsResponse;
    addActions(value?: Action, index?: number): Action;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListActionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListActionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListActionsResponse): ListActionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListActionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListActionsResponse;
    static deserializeBinaryFromReader(message: ListActionsResponse, reader: jspb.BinaryReader): ListActionsResponse;
}

export namespace ListActionsResponse {
    export type AsObject = {
        actionsList: Array<Action.AsObject>,
        nextPageToken: string,
    }
}
