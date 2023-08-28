// package: coinbase.staking.v1alpha1
// file: coinbase/staking/v1alpha1/api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as coinbase_staking_v1alpha1_api_pb from "../../../coinbase/staking/v1alpha1/api_pb";
import * as google_api_client_pb from "../../../google/api/client_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "../../../protoc-gen-openapiv2/options/annotations_pb";
import * as coinbase_staking_v1alpha1_protocol_pb from "../../../coinbase/staking/v1alpha1/protocol_pb";
import * as coinbase_staking_v1alpha1_network_pb from "../../../coinbase/staking/v1alpha1/network_pb";
import * as coinbase_staking_v1alpha1_action_pb from "../../../coinbase/staking/v1alpha1/action_pb";
import * as coinbase_staking_v1alpha1_validator_pb from "../../../coinbase/staking/v1alpha1/validator_pb";
import * as coinbase_staking_v1alpha1_workflow_pb from "../../../coinbase/staking/v1alpha1/workflow_pb";
import * as coinbase_staking_v1alpha1_staking_context_pb from "../../../coinbase/staking/v1alpha1/staking_context_pb";

interface IStakingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listProtocols: IStakingServiceService_IListProtocols;
    listNetworks: IStakingServiceService_IListNetworks;
    listValidators: IStakingServiceService_IListValidators;
    listActions: IStakingServiceService_IListActions;
    createWorkflow: IStakingServiceService_ICreateWorkflow;
    getWorkflow: IStakingServiceService_IGetWorkflow;
    listWorkflows: IStakingServiceService_IListWorkflows;
    performWorkflowStep: IStakingServiceService_IPerformWorkflowStep;
    refreshWorkflowStep: IStakingServiceService_IRefreshWorkflowStep;
    viewStakingContext: IStakingServiceService_IViewStakingContext;
}

interface IStakingServiceService_IListProtocols extends grpc.MethodDefinition<coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse> {
    path: "/coinbase.staking.v1alpha1.StakingService/ListProtocols";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse>;
}
interface IStakingServiceService_IListNetworks extends grpc.MethodDefinition<coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, coinbase_staking_v1alpha1_network_pb.ListNetworksResponse> {
    path: "/coinbase.staking.v1alpha1.StakingService/ListNetworks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_network_pb.ListNetworksRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_network_pb.ListNetworksRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_network_pb.ListNetworksResponse>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_network_pb.ListNetworksResponse>;
}
interface IStakingServiceService_IListValidators extends grpc.MethodDefinition<coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse> {
    path: "/coinbase.staking.v1alpha1.StakingService/ListValidators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse>;
}
interface IStakingServiceService_IListActions extends grpc.MethodDefinition<coinbase_staking_v1alpha1_action_pb.ListActionsRequest, coinbase_staking_v1alpha1_action_pb.ListActionsResponse> {
    path: "/coinbase.staking.v1alpha1.StakingService/ListActions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_action_pb.ListActionsRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_action_pb.ListActionsRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_action_pb.ListActionsResponse>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_action_pb.ListActionsResponse>;
}
interface IStakingServiceService_ICreateWorkflow extends grpc.MethodDefinition<coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow> {
    path: "/coinbase.staking.v1alpha1.StakingService/CreateWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
}
interface IStakingServiceService_IGetWorkflow extends grpc.MethodDefinition<coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow> {
    path: "/coinbase.staking.v1alpha1.StakingService/GetWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
}
interface IStakingServiceService_IListWorkflows extends grpc.MethodDefinition<coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse> {
    path: "/coinbase.staking.v1alpha1.StakingService/ListWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse>;
}
interface IStakingServiceService_IPerformWorkflowStep extends grpc.MethodDefinition<coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow> {
    path: "/coinbase.staking.v1alpha1.StakingService/PerformWorkflowStep";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
}
interface IStakingServiceService_IRefreshWorkflowStep extends grpc.MethodDefinition<coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow> {
    path: "/coinbase.staking.v1alpha1.StakingService/RefreshWorkflowStep";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_workflow_pb.Workflow>;
}
interface IStakingServiceService_IViewStakingContext extends grpc.MethodDefinition<coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse> {
    path: "/coinbase.staking.v1alpha1.StakingService/ViewStakingContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest>;
    requestDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest>;
    responseSerialize: grpc.serialize<coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse>;
    responseDeserialize: grpc.deserialize<coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse>;
}

export const StakingServiceService: IStakingServiceService;

export interface IStakingServiceServer {
    listProtocols: grpc.handleUnaryCall<coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse>;
    listNetworks: grpc.handleUnaryCall<coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, coinbase_staking_v1alpha1_network_pb.ListNetworksResponse>;
    listValidators: grpc.handleUnaryCall<coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse>;
    listActions: grpc.handleUnaryCall<coinbase_staking_v1alpha1_action_pb.ListActionsRequest, coinbase_staking_v1alpha1_action_pb.ListActionsResponse>;
    createWorkflow: grpc.handleUnaryCall<coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    getWorkflow: grpc.handleUnaryCall<coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    listWorkflows: grpc.handleUnaryCall<coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse>;
    performWorkflowStep: grpc.handleUnaryCall<coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    refreshWorkflowStep: grpc.handleUnaryCall<coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, coinbase_staking_v1alpha1_workflow_pb.Workflow>;
    viewStakingContext: grpc.handleUnaryCall<coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse>;
}

export interface IStakingServiceClient {
    listProtocols(request: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse) => void): grpc.ClientUnaryCall;
    listProtocols(request: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse) => void): grpc.ClientUnaryCall;
    listProtocols(request: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse) => void): grpc.ClientUnaryCall;
    listNetworks(request: coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_network_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    listNetworks(request: coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_network_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    listNetworks(request: coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_network_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listActions(request: coinbase_staking_v1alpha1_action_pb.ListActionsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_action_pb.ListActionsResponse) => void): grpc.ClientUnaryCall;
    listActions(request: coinbase_staking_v1alpha1_action_pb.ListActionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_action_pb.ListActionsResponse) => void): grpc.ClientUnaryCall;
    listActions(request: coinbase_staking_v1alpha1_action_pb.ListActionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_action_pb.ListActionsResponse) => void): grpc.ClientUnaryCall;
    createWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    createWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    createWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    getWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    getWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    getWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    listWorkflows(request: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse) => void): grpc.ClientUnaryCall;
    listWorkflows(request: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse) => void): grpc.ClientUnaryCall;
    listWorkflows(request: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse) => void): grpc.ClientUnaryCall;
    performWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    performWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    performWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    refreshWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    refreshWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    refreshWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    viewStakingContext(request: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse) => void): grpc.ClientUnaryCall;
    viewStakingContext(request: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse) => void): grpc.ClientUnaryCall;
    viewStakingContext(request: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse) => void): grpc.ClientUnaryCall;
}

export class StakingServiceClient extends grpc.Client implements IStakingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listProtocols(request: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse) => void): grpc.ClientUnaryCall;
    public listProtocols(request: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse) => void): grpc.ClientUnaryCall;
    public listProtocols(request: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_protocol_pb.ListProtocolsResponse) => void): grpc.ClientUnaryCall;
    public listNetworks(request: coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_network_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    public listNetworks(request: coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_network_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    public listNetworks(request: coinbase_staking_v1alpha1_network_pb.ListNetworksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_network_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: coinbase_staking_v1alpha1_validator_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_validator_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listActions(request: coinbase_staking_v1alpha1_action_pb.ListActionsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_action_pb.ListActionsResponse) => void): grpc.ClientUnaryCall;
    public listActions(request: coinbase_staking_v1alpha1_action_pb.ListActionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_action_pb.ListActionsResponse) => void): grpc.ClientUnaryCall;
    public listActions(request: coinbase_staking_v1alpha1_action_pb.ListActionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_action_pb.ListActionsResponse) => void): grpc.ClientUnaryCall;
    public createWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public createWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public createWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.CreateWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: coinbase_staking_v1alpha1_workflow_pb.GetWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public listWorkflows(request: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public listWorkflows(request: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public listWorkflows(request: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.ListWorkflowsResponse) => void): grpc.ClientUnaryCall;
    public performWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public performWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public performWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.PerformWorkflowStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public refreshWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public refreshWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public refreshWorkflowStep(request: coinbase_staking_v1alpha1_workflow_pb.RefreshWorkflowStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_workflow_pb.Workflow) => void): grpc.ClientUnaryCall;
    public viewStakingContext(request: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse) => void): grpc.ClientUnaryCall;
    public viewStakingContext(request: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse) => void): grpc.ClientUnaryCall;
    public viewStakingContext(request: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coinbase_staking_v1alpha1_staking_context_pb.ViewStakingContextResponse) => void): grpc.ClientUnaryCall;
}
