// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/workflow.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as coinbase_staking_v1alpha1_ethereum_kiln_pb from "../../../coinbase/staking/v1alpha1/ethereum_kiln_pb";
import * as coinbase_staking_v1alpha1_polygon_pb from "../../../coinbase/staking/v1alpha1/polygon_pb";
import * as coinbase_staking_v1alpha1_solana_pb from "../../../coinbase/staking/v1alpha1/solana_pb";
import * as google_api_field_behavior_pb from "../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";

export class TxStepOutput extends jspb.Message { 
    getUnsignedTx(): string;
    setUnsignedTx(value: string): TxStepOutput;
    getSignedTx(): string;
    setSignedTx(value: string): TxStepOutput;
    getTxHash(): string;
    setTxHash(value: string): TxStepOutput;
    getState(): TxStepOutput.State;
    setState(value: TxStepOutput.State): TxStepOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxStepOutput.AsObject;
    static toObject(includeInstance: boolean, msg: TxStepOutput): TxStepOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxStepOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxStepOutput;
    static deserializeBinaryFromReader(message: TxStepOutput, reader: jspb.BinaryReader): TxStepOutput;
}

export namespace TxStepOutput {
    export type AsObject = {
        unsignedTx: string,
        signedTx: string,
        txHash: string,
        state: TxStepOutput.State,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    STATE_NOT_CONSTRUCTED = 1,
    STATE_CONSTRUCTED = 2,
    STATE_PENDING_SIGNING = 3,
    STATE_SIGNED = 4,
    STATE_BROADCASTING = 5,
    STATE_CONFIRMING = 6,
    STATE_CONFIRMED = 7,
    STATE_FINALIZED = 8,
    STATE_FAILED = 9,
    STATE_SUCCESS = 10,
    STATE_CANCELING = 11,
    STATE_CANCELED = 12,
    STATE_CANCEL_FAILED = 13,
    STATE_FAILED_REFRESHABLE = 14,
    STATE_REFRESHING = 15,
    }

}

export class WaitStepOutput extends jspb.Message { 
    getStart(): number;
    setStart(value: number): WaitStepOutput;
    getCurrent(): number;
    setCurrent(value: number): WaitStepOutput;
    getTarget(): number;
    setTarget(value: number): WaitStepOutput;
    getUnit(): WaitStepOutput.WaitUnit;
    setUnit(value: WaitStepOutput.WaitUnit): WaitStepOutput;
    getState(): WaitStepOutput.State;
    setState(value: WaitStepOutput.State): WaitStepOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaitStepOutput.AsObject;
    static toObject(includeInstance: boolean, msg: WaitStepOutput): WaitStepOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaitStepOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaitStepOutput;
    static deserializeBinaryFromReader(message: WaitStepOutput, reader: jspb.BinaryReader): WaitStepOutput;
}

export namespace WaitStepOutput {
    export type AsObject = {
        start: number,
        current: number,
        target: number,
        unit: WaitStepOutput.WaitUnit,
        state: WaitStepOutput.State,
    }

    export enum WaitUnit {
    WAIT_UNIT_UNSPECIFIED = 0,
    WAIT_UNIT_SECONDS = 1,
    WAIT_UNIT_BLOCKS = 2,
    WAIT_UNIT_EPOCHS = 3,
    WAIT_UNIT_CHECKPOINTS = 4,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    STATE_NOT_STARTED = 1,
    STATE_IN_PROGRESS = 2,
    STATE_COMPLETED = 3,
    }

}

export class WorkflowStep extends jspb.Message { 
    getName(): string;
    setName(value: string): WorkflowStep;

    hasTxStepOutput(): boolean;
    clearTxStepOutput(): void;
    getTxStepOutput(): TxStepOutput | undefined;
    setTxStepOutput(value?: TxStepOutput): WorkflowStep;

    hasWaitStepOutput(): boolean;
    clearWaitStepOutput(): void;
    getWaitStepOutput(): WaitStepOutput | undefined;
    setWaitStepOutput(value?: WaitStepOutput): WorkflowStep;

    getOutputCase(): WorkflowStep.OutputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowStep.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowStep): WorkflowStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowStep;
    static deserializeBinaryFromReader(message: WorkflowStep, reader: jspb.BinaryReader): WorkflowStep;
}

export namespace WorkflowStep {
    export type AsObject = {
        name: string,
        txStepOutput?: TxStepOutput.AsObject,
        waitStepOutput?: WaitStepOutput.AsObject,
    }

    export enum OutputCase {
        OUTPUT_NOT_SET = 0,
        TX_STEP_OUTPUT = 2,
        WAIT_STEP_OUTPUT = 3,
    }

}

export class Workflow extends jspb.Message { 
    getName(): string;
    setName(value: string): Workflow;
    getAction(): string;
    setAction(value: string): Workflow;

    hasPolygonStakingParameters(): boolean;
    clearPolygonStakingParameters(): void;
    getPolygonStakingParameters(): coinbase_staking_v1alpha1_polygon_pb.PolygonStakingParameters | undefined;
    setPolygonStakingParameters(value?: coinbase_staking_v1alpha1_polygon_pb.PolygonStakingParameters): Workflow;

    hasSolanaStakingParameters(): boolean;
    clearSolanaStakingParameters(): void;
    getSolanaStakingParameters(): coinbase_staking_v1alpha1_solana_pb.SolanaStakingParameters | undefined;
    setSolanaStakingParameters(value?: coinbase_staking_v1alpha1_solana_pb.SolanaStakingParameters): Workflow;

    hasEthereumKilnStakingParameters(): boolean;
    clearEthereumKilnStakingParameters(): void;
    getEthereumKilnStakingParameters(): coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingParameters | undefined;
    setEthereumKilnStakingParameters(value?: coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingParameters): Workflow;
    getState(): Workflow.State;
    setState(value: Workflow.State): Workflow;
    getCurrentStepId(): number;
    setCurrentStepId(value: number): Workflow;
    clearStepsList(): void;
    getStepsList(): Array<WorkflowStep>;
    setStepsList(value: Array<WorkflowStep>): Workflow;
    addSteps(value?: WorkflowStep, index?: number): WorkflowStep;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Workflow;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Workflow;

    getStakingParametersCase(): Workflow.StakingParametersCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Workflow.AsObject;
    static toObject(includeInstance: boolean, msg: Workflow): Workflow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Workflow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Workflow;
    static deserializeBinaryFromReader(message: Workflow, reader: jspb.BinaryReader): Workflow;
}

export namespace Workflow {
    export type AsObject = {
        name: string,
        action: string,
        polygonStakingParameters?: coinbase_staking_v1alpha1_polygon_pb.PolygonStakingParameters.AsObject,
        solanaStakingParameters?: coinbase_staking_v1alpha1_solana_pb.SolanaStakingParameters.AsObject,
        ethereumKilnStakingParameters?: coinbase_staking_v1alpha1_ethereum_kiln_pb.EthereumKilnStakingParameters.AsObject,
        state: Workflow.State,
        currentStepId: number,
        stepsList: Array<WorkflowStep.AsObject>,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    STATE_IN_PROGRESS = 1,
    STATE_WAITING_FOR_SIGNING = 2,
    STATE_COMPLETED = 3,
    STATE_FAILED = 4,
    STATE_CANCELING = 5,
    STATE_CANCELED = 6,
    STATE_CANCEL_FAILED = 7,
    STATE_FAILED_REFRESHABLE = 8,
    }


    export enum StakingParametersCase {
        STAKING_PARAMETERS_NOT_SET = 0,
        POLYGON_STAKING_PARAMETERS = 3,
        SOLANA_STAKING_PARAMETERS = 9,
        ETHEREUM_KILN_STAKING_PARAMETERS = 10,
    }

}

export class CreateWorkflowRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateWorkflowRequest;

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): Workflow | undefined;
    setWorkflow(value?: Workflow): CreateWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWorkflowRequest): CreateWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWorkflowRequest;
    static deserializeBinaryFromReader(message: CreateWorkflowRequest, reader: jspb.BinaryReader): CreateWorkflowRequest;
}

export namespace CreateWorkflowRequest {
    export type AsObject = {
        parent: string,
        workflow?: Workflow.AsObject,
    }
}

export class GetWorkflowRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowRequest): GetWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowRequest;
    static deserializeBinaryFromReader(message: GetWorkflowRequest, reader: jspb.BinaryReader): GetWorkflowRequest;
}

export namespace GetWorkflowRequest {
    export type AsObject = {
        name: string,
    }
}

export class ListWorkflowsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListWorkflowsRequest;
    getFilter(): string;
    setFilter(value: string): ListWorkflowsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListWorkflowsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListWorkflowsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWorkflowsRequest): ListWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWorkflowsRequest;
    static deserializeBinaryFromReader(message: ListWorkflowsRequest, reader: jspb.BinaryReader): ListWorkflowsRequest;
}

export namespace ListWorkflowsRequest {
    export type AsObject = {
        parent: string,
        filter: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListWorkflowsResponse extends jspb.Message { 
    clearWorkflowsList(): void;
    getWorkflowsList(): Array<Workflow>;
    setWorkflowsList(value: Array<Workflow>): ListWorkflowsResponse;
    addWorkflows(value?: Workflow, index?: number): Workflow;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListWorkflowsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWorkflowsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWorkflowsResponse): ListWorkflowsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWorkflowsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWorkflowsResponse;
    static deserializeBinaryFromReader(message: ListWorkflowsResponse, reader: jspb.BinaryReader): ListWorkflowsResponse;
}

export namespace ListWorkflowsResponse {
    export type AsObject = {
        workflowsList: Array<Workflow.AsObject>,
        nextPageToken: string,
    }
}

export class PerformWorkflowStepRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): PerformWorkflowStepRequest;
    getStep(): number;
    setStep(value: number): PerformWorkflowStepRequest;
    getSignedTx(): string;
    setSignedTx(value: string): PerformWorkflowStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformWorkflowStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PerformWorkflowStepRequest): PerformWorkflowStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformWorkflowStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformWorkflowStepRequest;
    static deserializeBinaryFromReader(message: PerformWorkflowStepRequest, reader: jspb.BinaryReader): PerformWorkflowStepRequest;
}

export namespace PerformWorkflowStepRequest {
    export type AsObject = {
        name: string,
        step: number,
        signedTx: string,
    }
}

export class RefreshWorkflowStepRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RefreshWorkflowStepRequest;
    getStep(): number;
    setStep(value: number): RefreshWorkflowStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshWorkflowStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshWorkflowStepRequest): RefreshWorkflowStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshWorkflowStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshWorkflowStepRequest;
    static deserializeBinaryFromReader(message: RefreshWorkflowStepRequest, reader: jspb.BinaryReader): RefreshWorkflowStepRequest;
}

export namespace RefreshWorkflowStepRequest {
    export type AsObject = {
        name: string,
        step: number,
    }
}
