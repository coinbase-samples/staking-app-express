// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/solana.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as coinbase_staking_v1alpha1_common_pb from "../../../coinbase/staking/v1alpha1/common_pb";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";

export class NonceOptions extends jspb.Message { 
    getNonce(): string;
    setNonce(value: string): NonceOptions;
    getNonceAccount(): string;
    setNonceAccount(value: string): NonceOptions;
    getNonceAuthority(): string;
    setNonceAuthority(value: string): NonceOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NonceOptions.AsObject;
    static toObject(includeInstance: boolean, msg: NonceOptions): NonceOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NonceOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NonceOptions;
    static deserializeBinaryFromReader(message: NonceOptions, reader: jspb.BinaryReader): NonceOptions;
}

export namespace NonceOptions {
    export type AsObject = {
        nonce: string,
        nonceAccount: string,
        nonceAuthority: string,
    }
}

export class SolanaCreateStakeAccountParameters extends jspb.Message { 
    getStakeAccountAddress(): string;
    setStakeAccountAddress(value: string): SolanaCreateStakeAccountParameters;
    getFromAddress(): string;
    setFromAddress(value: string): SolanaCreateStakeAccountParameters;
    getStakeAuthority(): string;
    setStakeAuthority(value: string): SolanaCreateStakeAccountParameters;
    getWithdrawAuthority(): string;
    setWithdrawAuthority(value: string): SolanaCreateStakeAccountParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): SolanaCreateStakeAccountParameters;

    hasNonceOptions(): boolean;
    clearNonceOptions(): void;
    getNonceOptions(): NonceOptions | undefined;
    setNonceOptions(value?: NonceOptions): SolanaCreateStakeAccountParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaCreateStakeAccountParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaCreateStakeAccountParameters): SolanaCreateStakeAccountParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaCreateStakeAccountParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaCreateStakeAccountParameters;
    static deserializeBinaryFromReader(message: SolanaCreateStakeAccountParameters, reader: jspb.BinaryReader): SolanaCreateStakeAccountParameters;
}

export namespace SolanaCreateStakeAccountParameters {
    export type AsObject = {
        stakeAccountAddress: string,
        fromAddress: string,
        stakeAuthority: string,
        withdrawAuthority: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        nonceOptions?: NonceOptions.AsObject,
    }
}

export class SolanaDelegateStakeParameters extends jspb.Message { 
    getStakeAccountAddress(): string;
    setStakeAccountAddress(value: string): SolanaDelegateStakeParameters;
    getVoteAccountAddress(): string;
    setVoteAccountAddress(value: string): SolanaDelegateStakeParameters;
    getStakeAuthority(): string;
    setStakeAuthority(value: string): SolanaDelegateStakeParameters;

    hasNonceOptions(): boolean;
    clearNonceOptions(): void;
    getNonceOptions(): NonceOptions | undefined;
    setNonceOptions(value?: NonceOptions): SolanaDelegateStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaDelegateStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaDelegateStakeParameters): SolanaDelegateStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaDelegateStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaDelegateStakeParameters;
    static deserializeBinaryFromReader(message: SolanaDelegateStakeParameters, reader: jspb.BinaryReader): SolanaDelegateStakeParameters;
}

export namespace SolanaDelegateStakeParameters {
    export type AsObject = {
        stakeAccountAddress: string,
        voteAccountAddress: string,
        stakeAuthority: string,
        nonceOptions?: NonceOptions.AsObject,
    }
}

export class SolanaDeactivateStakeParameters extends jspb.Message { 
    getStakeAccountAddress(): string;
    setStakeAccountAddress(value: string): SolanaDeactivateStakeParameters;
    getStakeAuthority(): string;
    setStakeAuthority(value: string): SolanaDeactivateStakeParameters;

    hasNonceOptions(): boolean;
    clearNonceOptions(): void;
    getNonceOptions(): NonceOptions | undefined;
    setNonceOptions(value?: NonceOptions): SolanaDeactivateStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaDeactivateStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaDeactivateStakeParameters): SolanaDeactivateStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaDeactivateStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaDeactivateStakeParameters;
    static deserializeBinaryFromReader(message: SolanaDeactivateStakeParameters, reader: jspb.BinaryReader): SolanaDeactivateStakeParameters;
}

export namespace SolanaDeactivateStakeParameters {
    export type AsObject = {
        stakeAccountAddress: string,
        stakeAuthority: string,
        nonceOptions?: NonceOptions.AsObject,
    }
}

export class SolanaWithdrawStakeParameters extends jspb.Message { 
    getStakeAccountAddress(): string;
    setStakeAccountAddress(value: string): SolanaWithdrawStakeParameters;
    getRecipientAddress(): string;
    setRecipientAddress(value: string): SolanaWithdrawStakeParameters;
    getWithdrawAuthority(): string;
    setWithdrawAuthority(value: string): SolanaWithdrawStakeParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): SolanaWithdrawStakeParameters;

    hasNonceOptions(): boolean;
    clearNonceOptions(): void;
    getNonceOptions(): NonceOptions | undefined;
    setNonceOptions(value?: NonceOptions): SolanaWithdrawStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaWithdrawStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaWithdrawStakeParameters): SolanaWithdrawStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaWithdrawStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaWithdrawStakeParameters;
    static deserializeBinaryFromReader(message: SolanaWithdrawStakeParameters, reader: jspb.BinaryReader): SolanaWithdrawStakeParameters;
}

export namespace SolanaWithdrawStakeParameters {
    export type AsObject = {
        stakeAccountAddress: string,
        recipientAddress: string,
        withdrawAuthority: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        nonceOptions?: NonceOptions.AsObject,
    }
}

export class SolanaSplitStakeParameters extends jspb.Message { 
    getStakeAccountAddress(): string;
    setStakeAccountAddress(value: string): SolanaSplitStakeParameters;
    getNewStakeAccountAddress(): string;
    setNewStakeAccountAddress(value: string): SolanaSplitStakeParameters;
    getStakeAuthority(): string;
    setStakeAuthority(value: string): SolanaSplitStakeParameters;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): coinbase_staking_v1alpha1_common_pb.Amount | undefined;
    setAmount(value?: coinbase_staking_v1alpha1_common_pb.Amount): SolanaSplitStakeParameters;

    hasNonceOptions(): boolean;
    clearNonceOptions(): void;
    getNonceOptions(): NonceOptions | undefined;
    setNonceOptions(value?: NonceOptions): SolanaSplitStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaSplitStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaSplitStakeParameters): SolanaSplitStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaSplitStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaSplitStakeParameters;
    static deserializeBinaryFromReader(message: SolanaSplitStakeParameters, reader: jspb.BinaryReader): SolanaSplitStakeParameters;
}

export namespace SolanaSplitStakeParameters {
    export type AsObject = {
        stakeAccountAddress: string,
        newStakeAccountAddress: string,
        stakeAuthority: string,
        amount?: coinbase_staking_v1alpha1_common_pb.Amount.AsObject,
        nonceOptions?: NonceOptions.AsObject,
    }
}

export class SolanaMergeStakeParameters extends jspb.Message { 
    getStakeAccountAddress(): string;
    setStakeAccountAddress(value: string): SolanaMergeStakeParameters;
    getSourceStakeAccountAddress(): string;
    setSourceStakeAccountAddress(value: string): SolanaMergeStakeParameters;
    getStakeAuthority(): string;
    setStakeAuthority(value: string): SolanaMergeStakeParameters;

    hasNonceOptions(): boolean;
    clearNonceOptions(): void;
    getNonceOptions(): NonceOptions | undefined;
    setNonceOptions(value?: NonceOptions): SolanaMergeStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaMergeStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaMergeStakeParameters): SolanaMergeStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaMergeStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaMergeStakeParameters;
    static deserializeBinaryFromReader(message: SolanaMergeStakeParameters, reader: jspb.BinaryReader): SolanaMergeStakeParameters;
}

export namespace SolanaMergeStakeParameters {
    export type AsObject = {
        stakeAccountAddress: string,
        sourceStakeAccountAddress: string,
        stakeAuthority: string,
        nonceOptions?: NonceOptions.AsObject,
    }
}

export class SolanaStakingParameters extends jspb.Message { 

    hasCreateStakeParameters(): boolean;
    clearCreateStakeParameters(): void;
    getCreateStakeParameters(): SolanaCreateStakeAccountParameters | undefined;
    setCreateStakeParameters(value?: SolanaCreateStakeAccountParameters): SolanaStakingParameters;

    hasDelegateStakeParameters(): boolean;
    clearDelegateStakeParameters(): void;
    getDelegateStakeParameters(): SolanaDelegateStakeParameters | undefined;
    setDelegateStakeParameters(value?: SolanaDelegateStakeParameters): SolanaStakingParameters;

    hasDeactivateStakeParameters(): boolean;
    clearDeactivateStakeParameters(): void;
    getDeactivateStakeParameters(): SolanaDeactivateStakeParameters | undefined;
    setDeactivateStakeParameters(value?: SolanaDeactivateStakeParameters): SolanaStakingParameters;

    hasWithdrawStakeParameters(): boolean;
    clearWithdrawStakeParameters(): void;
    getWithdrawStakeParameters(): SolanaWithdrawStakeParameters | undefined;
    setWithdrawStakeParameters(value?: SolanaWithdrawStakeParameters): SolanaStakingParameters;

    hasSplitStakeParameters(): boolean;
    clearSplitStakeParameters(): void;
    getSplitStakeParameters(): SolanaSplitStakeParameters | undefined;
    setSplitStakeParameters(value?: SolanaSplitStakeParameters): SolanaStakingParameters;

    hasMergeStakeParameters(): boolean;
    clearMergeStakeParameters(): void;
    getMergeStakeParameters(): SolanaMergeStakeParameters | undefined;
    setMergeStakeParameters(value?: SolanaMergeStakeParameters): SolanaStakingParameters;

    getParametersCase(): SolanaStakingParameters.ParametersCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaStakingParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaStakingParameters): SolanaStakingParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaStakingParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaStakingParameters;
    static deserializeBinaryFromReader(message: SolanaStakingParameters, reader: jspb.BinaryReader): SolanaStakingParameters;
}

export namespace SolanaStakingParameters {
    export type AsObject = {
        createStakeParameters?: SolanaCreateStakeAccountParameters.AsObject,
        delegateStakeParameters?: SolanaDelegateStakeParameters.AsObject,
        deactivateStakeParameters?: SolanaDeactivateStakeParameters.AsObject,
        withdrawStakeParameters?: SolanaWithdrawStakeParameters.AsObject,
        splitStakeParameters?: SolanaSplitStakeParameters.AsObject,
        mergeStakeParameters?: SolanaMergeStakeParameters.AsObject,
    }

    export enum ParametersCase {
        PARAMETERS_NOT_SET = 0,
        CREATE_STAKE_PARAMETERS = 1,
        DELEGATE_STAKE_PARAMETERS = 2,
        DEACTIVATE_STAKE_PARAMETERS = 3,
        WITHDRAW_STAKE_PARAMETERS = 4,
        SPLIT_STAKE_PARAMETERS = 5,
        MERGE_STAKE_PARAMETERS = 6,
    }

}
