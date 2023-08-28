// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/staking_context.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as coinbase_staking_v1alpha1_ethereum_kiln_pb from "../../../coinbase/staking/v1alpha1/ethereum_kiln_pb";
import * as coinbase_staking_v1alpha1_network_pb from "../../../coinbase/staking/v1alpha1/network_pb";

export class ViewStakingContextRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ViewStakingContextRequest;

    hasNetwork(): boolean;
    clearNetwork(): void;
    getNetwork(): coinbase_staking_v1alpha1_network_pb.Network | undefined;
    setNetwork(value?: coinbase_staking_v1alpha1_network_pb.Network): ViewStakingContextRequest;

    hasEthereumKilnStakingContextParameters(): boolean;
    clearEthereumKilnStakingContextParameters(): void;
    getEthereumKilnStakingContextParameters(): coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingContextParameters | undefined;
    setEthereumKilnStakingContextParameters(value?: coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingContextParameters): ViewStakingContextRequest;

    getStakingContextParamatersCase(): ViewStakingContextRequest.StakingContextParamatersCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewStakingContextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ViewStakingContextRequest): ViewStakingContextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewStakingContextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewStakingContextRequest;
    static deserializeBinaryFromReader(message: ViewStakingContextRequest, reader: jspb.BinaryReader): ViewStakingContextRequest;
}

export namespace ViewStakingContextRequest {
    export type AsObject = {
        address: string,
        network?: coinbase_staking_v1alpha1_network_pb.Network.AsObject,
        ethereumKilnStakingContextParameters?: coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingContextParameters.AsObject,
    }

    export enum StakingContextParamatersCase {
        STAKING_CONTEXT_PARAMATERS_NOT_SET = 0,
        ETHEREUM_KILN_STAKING_CONTEXT_PARAMETERS = 3,
    }

}

export class ViewStakingContextResponse extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ViewStakingContextResponse;

    hasEthereumKilnStakingContextDetails(): boolean;
    clearEthereumKilnStakingContextDetails(): void;
    getEthereumKilnStakingContextDetails(): coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingContextDetails | undefined;
    setEthereumKilnStakingContextDetails(value?: coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingContextDetails): ViewStakingContextResponse;

    getStakingContextDetailsCase(): ViewStakingContextResponse.StakingContextDetailsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewStakingContextResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ViewStakingContextResponse): ViewStakingContextResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewStakingContextResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewStakingContextResponse;
    static deserializeBinaryFromReader(message: ViewStakingContextResponse, reader: jspb.BinaryReader): ViewStakingContextResponse;
}

export namespace ViewStakingContextResponse {
    export type AsObject = {
        address: string,
        ethereumKilnStakingContextDetails?: coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingContextDetails.AsObject,
    }

    export enum StakingContextDetailsCase {
        STAKING_CONTEXT_DETAILS_NOT_SET = 0,
        ETHEREUM_KILN_STAKING_CONTEXT_DETAILS = 2,
    }

}
