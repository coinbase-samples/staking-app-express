// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/ethereum_kiln.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as coinbase_staking_v1alpha1_common_pb from "../../../coinbase/staking/v1alpha1/common_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";

export class EthereumKilnStakeParameters extends jspb.Message { 
    getStakerAddress(): string;
    setStakerAddress(value: string): EthereumKilnStakeParameters;
    getIntegratorContractAddress(): string;
    setIntegratorContractAddress(value: string): EthereumKilnStakeParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumKilnStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumKilnStakeParameters): EthereumKilnStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumKilnStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumKilnStakeParameters;
    static deserializeBinaryFromReader(message: EthereumKilnStakeParameters, reader: jspb.BinaryReader): EthereumKilnStakeParameters;
}

export namespace EthereumKilnStakeParameters {
    export type AsObject = {
        stakerAddress: string,
        integratorContractAddress: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
    }
}

export class EthereumKilnUnstakeParameters extends jspb.Message { 
    getStakerAddress(): string;
    setStakerAddress(value: string): EthereumKilnUnstakeParameters;
    getIntegratorContractAddress(): string;
    setIntegratorContractAddress(value: string): EthereumKilnUnstakeParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnUnstakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumKilnUnstakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumKilnUnstakeParameters): EthereumKilnUnstakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumKilnUnstakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumKilnUnstakeParameters;
    static deserializeBinaryFromReader(message: EthereumKilnUnstakeParameters, reader: jspb.BinaryReader): EthereumKilnUnstakeParameters;
}

export namespace EthereumKilnUnstakeParameters {
    export type AsObject = {
        stakerAddress: string,
        integratorContractAddress: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
    }
}

export class EthereumKilnStakingParameters extends jspb.Message { 

    hasStakeParameters(): boolean;
    clearStakeParameters(): void;
    getStakeParameters(): EthereumKilnStakeParameters | undefined;
    setStakeParameters(value?: EthereumKilnStakeParameters): EthereumKilnStakingParameters;

    hasUnstakeParameters(): boolean;
    clearUnstakeParameters(): void;
    getUnstakeParameters(): EthereumKilnUnstakeParameters | undefined;
    setUnstakeParameters(value?: EthereumKilnUnstakeParameters): EthereumKilnStakingParameters;

    getParametersCase(): EthereumKilnStakingParameters.ParametersCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumKilnStakingParameters.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumKilnStakingParameters): EthereumKilnStakingParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumKilnStakingParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumKilnStakingParameters;
    static deserializeBinaryFromReader(message: EthereumKilnStakingParameters, reader: jspb.BinaryReader): EthereumKilnStakingParameters;
}

export namespace EthereumKilnStakingParameters {
    export type AsObject = {
        stakeParameters?: EthereumKilnStakeParameters.AsObject,
        unstakeParameters?: EthereumKilnUnstakeParameters.AsObject,
    }

    export enum ParametersCase {
        PARAMETERS_NOT_SET = 0,
        STAKE_PARAMETERS = 1,
        UNSTAKE_PARAMETERS = 2,
    }

}

export class EthereumKilnStakingContextParameters extends jspb.Message { 
    getIntegratorContractAddress(): string;
    setIntegratorContractAddress(value: string): EthereumKilnStakingContextParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumKilnStakingContextParameters.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumKilnStakingContextParameters): EthereumKilnStakingContextParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumKilnStakingContextParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumKilnStakingContextParameters;
    static deserializeBinaryFromReader(message: EthereumKilnStakingContextParameters, reader: jspb.BinaryReader): EthereumKilnStakingContextParameters;
}

export namespace EthereumKilnStakingContextParameters {
    export type AsObject = {
        integratorContractAddress: string,
    }
}

export class EthereumKilnStakingContextDetails extends jspb.Message { 

    hasEthereumBalance(): boolean;
    clearEthereumBalance(): void;
    getEthereumBalance(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setEthereumBalance(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakingContextDetails;

    hasIntegratorShareBalance(): boolean;
    clearIntegratorShareBalance(): void;
    getIntegratorShareBalance(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setIntegratorShareBalance(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakingContextDetails;

    hasIntegratorShareUnderlyingBalance(): boolean;
    clearIntegratorShareUnderlyingBalance(): void;
    getIntegratorShareUnderlyingBalance(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setIntegratorShareUnderlyingBalance(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakingContextDetails;

    hasTotalExitableEth(): boolean;
    clearTotalExitableEth(): void;
    getTotalExitableEth(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setTotalExitableEth(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakingContextDetails;

    hasTotalSharesPendingExit(): boolean;
    clearTotalSharesPendingExit(): void;
    getTotalSharesPendingExit(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setTotalSharesPendingExit(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakingContextDetails;

    hasFulfillableShareCount(): boolean;
    clearFulfillableShareCount(): void;
    getFulfillableShareCount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setFulfillableShareCount(value?: coinbase_staking_v1alpha1_common_pb.Amount): EthereumKilnStakingContextDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthereumKilnStakingContextDetails.AsObject;
    static toObject(includeInstance: boolean, msg: EthereumKilnStakingContextDetails): EthereumKilnStakingContextDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthereumKilnStakingContextDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthereumKilnStakingContextDetails;
    static deserializeBinaryFromReader(message: EthereumKilnStakingContextDetails, reader: jspb.BinaryReader): EthereumKilnStakingContextDetails;
}

export namespace EthereumKilnStakingContextDetails {
    export type AsObject = {
        ethereumBalance?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        integratorShareBalance?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        integratorShareUnderlyingBalance?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        totalExitableEth?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        totalSharesPendingExit?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        fulfillableShareCount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
    }
}
