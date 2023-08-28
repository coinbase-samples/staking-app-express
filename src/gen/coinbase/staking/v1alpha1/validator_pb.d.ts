// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/validator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../google/api/resource_pb";

export class Validator extends jspb.Message { 
    getName(): string;
    setName(value: string): Validator;
    getValidatorAddress(): string;
    setValidatorAddress(value: string): Validator;
    getCommissionRate(): number;
    setCommissionRate(value: number): Validator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validator.AsObject;
    static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validator;
    static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
    export type AsObject = {
        name: string,
        validatorAddress: string,
        commissionRate: number,
    }
}

export class ListValidatorsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListValidatorsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListValidatorsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListValidatorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValidatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListValidatorsRequest): ListValidatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListValidatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValidatorsRequest;
    static deserializeBinaryFromReader(message: ListValidatorsRequest, reader: jspb.BinaryReader): ListValidatorsRequest;
}

export namespace ListValidatorsRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListValidatorsResponse extends jspb.Message { 
    clearValidatorsList(): void;
    getValidatorsList(): Array<Validator>;
    setValidatorsList(value: Array<Validator>): ListValidatorsResponse;
    addValidators(value?: Validator, index?: number): Validator;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListValidatorsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValidatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListValidatorsResponse): ListValidatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListValidatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValidatorsResponse;
    static deserializeBinaryFromReader(message: ListValidatorsResponse, reader: jspb.BinaryReader): ListValidatorsResponse;
}

export namespace ListValidatorsResponse {
    export type AsObject = {
        validatorsList: Array<Validator.AsObject>,
        nextPageToken: string,
    }
}
