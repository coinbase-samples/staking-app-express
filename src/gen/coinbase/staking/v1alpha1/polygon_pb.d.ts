// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/polygon.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as coinbase_staking_v1alpha1_common_pb from "../../../coinbase/staking/v1alpha1/common_pb";

export class PolygonStakeParameters extends jspb.Message { 
    getDelegatorAddress(): string;
    setDelegatorAddress(value: string): PolygonStakeParameters;
    getValidatorAddress(): string;
    setValidatorAddress(value: string): PolygonStakeParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): PolygonStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonStakeParameters): PolygonStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonStakeParameters;
    static deserializeBinaryFromReader(message: PolygonStakeParameters, reader: jspb.BinaryReader): PolygonStakeParameters;
}

export namespace PolygonStakeParameters {
    export type AsObject = {
        delegatorAddress: string,
        validatorAddress: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
    }
}

export class PolygonUnstakeParameters extends jspb.Message { 
    getDelegatorAddress(): string;
    setDelegatorAddress(value: string): PolygonUnstakeParameters;
    getValidatorAddress(): string;
    setValidatorAddress(value: string): PolygonUnstakeParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): PolygonUnstakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonUnstakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonUnstakeParameters): PolygonUnstakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonUnstakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonUnstakeParameters;
    static deserializeBinaryFromReader(message: PolygonUnstakeParameters, reader: jspb.BinaryReader): PolygonUnstakeParameters;
}

export namespace PolygonUnstakeParameters {
    export type AsObject = {
        delegatorAddress: string,
        validatorAddress: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
    }
}

export class PolygonRestakeParameters extends jspb.Message { 
    getDelegatorAddress(): string;
    setDelegatorAddress(value: string): PolygonRestakeParameters;
    getValidatorAddress(): string;
    setValidatorAddress(value: string): PolygonRestakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonRestakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonRestakeParameters): PolygonRestakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonRestakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonRestakeParameters;
    static deserializeBinaryFromReader(message: PolygonRestakeParameters, reader: jspb.BinaryReader): PolygonRestakeParameters;
}

export namespace PolygonRestakeParameters {
    export type AsObject = {
        delegatorAddress: string,
        validatorAddress: string,
    }
}

export class PolygonClaimRewardsParameters extends jspb.Message { 
    getDelegatorAddress(): string;
    setDelegatorAddress(value: string): PolygonClaimRewardsParameters;
    getValidatorAddress(): string;
    setValidatorAddress(value: string): PolygonClaimRewardsParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonClaimRewardsParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonClaimRewardsParameters): PolygonClaimRewardsParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonClaimRewardsParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonClaimRewardsParameters;
    static deserializeBinaryFromReader(message: PolygonClaimRewardsParameters, reader: jspb.BinaryReader): PolygonClaimRewardsParameters;
}

export namespace PolygonClaimRewardsParameters {
    export type AsObject = {
        delegatorAddress: string,
        validatorAddress: string,
    }
}

export class PolygonStakingParameters extends jspb.Message { 

    hasStakeParameters(): boolean;
    clearStakeParameters(): void;
    getStakeParameters(): PolygonStakeParameters | undefined;
    setStakeParameters(value?: PolygonStakeParameters): PolygonStakingParameters;

    hasUnstakeParameters(): boolean;
    clearUnstakeParameters(): void;
    getUnstakeParameters(): PolygonUnstakeParameters | undefined;
    setUnstakeParameters(value?: PolygonUnstakeParameters): PolygonStakingParameters;

    hasRestakeParameters(): boolean;
    clearRestakeParameters(): void;
    getRestakeParameters(): PolygonRestakeParameters | undefined;
    setRestakeParameters(value?: PolygonRestakeParameters): PolygonStakingParameters;

    hasClaimRewardsParameters(): boolean;
    clearClaimRewardsParameters(): void;
    getClaimRewardsParameters(): PolygonClaimRewardsParameters | undefined;
    setClaimRewardsParameters(value?: PolygonClaimRewardsParameters): PolygonStakingParameters;

    getParametersCase(): PolygonStakingParameters.ParametersCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonStakingParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonStakingParameters): PolygonStakingParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonStakingParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonStakingParameters;
    static deserializeBinaryFromReader(message: PolygonStakingParameters, reader: jspb.BinaryReader): PolygonStakingParameters;
}

export namespace PolygonStakingParameters {
    export type AsObject = {
        stakeParameters?: PolygonStakeParameters.AsObject,
        unstakeParameters?: PolygonUnstakeParameters.AsObject,
        restakeParameters?: PolygonRestakeParameters.AsObject,
        claimRewardsParameters?: PolygonClaimRewardsParameters.AsObject,
    }

    export enum ParametersCase {
        PARAMETERS_NOT_SET = 0,
        STAKE_PARAMETERS = 1,
        UNSTAKE_PARAMETERS = 2,
        RESTAKE_PARAMETERS = 3,
        CLAIM_REWARDS_PARAMETERS = 4,
    }

}
