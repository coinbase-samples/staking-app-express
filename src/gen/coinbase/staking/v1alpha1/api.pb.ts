/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
import * as CoinbaseStakingV1alpha1Action from "./action.pb"
import * as CoinbaseStakingV1alpha1Network from "./network.pb"
import * as CoinbaseStakingV1alpha1Protocol from "./protocol.pb"
import * as CoinbaseStakingV1alpha1Staking_context from "./staking_context.pb"
import * as CoinbaseStakingV1alpha1Validator from "./validator.pb"
import * as CoinbaseStakingV1alpha1Workflow from "./workflow.pb"
export class StakingService {
  static ListProtocols(req: CoinbaseStakingV1alpha1Protocol.ListProtocolsRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Protocol.ListProtocolsResponse> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Protocol.ListProtocolsRequest, CoinbaseStakingV1alpha1Protocol.ListProtocolsResponse>(`/api/v1alpha1/protocols?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListNetworks(req: CoinbaseStakingV1alpha1Network.ListNetworksRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Network.ListNetworksResponse> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Network.ListNetworksRequest, CoinbaseStakingV1alpha1Network.ListNetworksResponse>(`/api/v1alpha1/${req["parentprotocols"]}/networks?${fm.renderURLSearchParams(req, ["parentprotocols"])}`, {...initReq, method: "GET"})
  }
  static ListValidators(req: CoinbaseStakingV1alpha1Validator.ListValidatorsRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Validator.ListValidatorsResponse> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Validator.ListValidatorsRequest, CoinbaseStakingV1alpha1Validator.ListValidatorsResponse>(`/api/v1alpha1/${req["parentprotocolsnetworks"]}/validators?${fm.renderURLSearchParams(req, ["parentprotocolsnetworks"])}`, {...initReq, method: "GET"})
  }
  static ListActions(req: CoinbaseStakingV1alpha1Action.ListActionsRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Action.ListActionsResponse> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Action.ListActionsRequest, CoinbaseStakingV1alpha1Action.ListActionsResponse>(`/api/v1alpha1/${req["parentprotocolsnetworks"]}/actions?${fm.renderURLSearchParams(req, ["parentprotocolsnetworks"])}`, {...initReq, method: "GET"})
  }
  static CreateWorkflow(req: CoinbaseStakingV1alpha1Workflow.CreateWorkflowRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Workflow.Workflow> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Workflow.CreateWorkflowRequest, CoinbaseStakingV1alpha1Workflow.Workflow>(`/api/v1alpha1/${req["parentprojects"]}/workflows`, {...initReq, method: "POST", body: JSON.stringify(req["workflow"], fm.replacer)})
  }
  static GetWorkflow(req: CoinbaseStakingV1alpha1Workflow.GetWorkflowRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Workflow.Workflow> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Workflow.GetWorkflowRequest, CoinbaseStakingV1alpha1Workflow.Workflow>(`/api/v1alpha1/${req["nameprojectsworkflows"]}?${fm.renderURLSearchParams(req, ["nameprojectsworkflows"])}`, {...initReq, method: "GET"})
  }
  static ListWorkflows(req: CoinbaseStakingV1alpha1Workflow.ListWorkflowsRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Workflow.ListWorkflowsResponse> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Workflow.ListWorkflowsRequest, CoinbaseStakingV1alpha1Workflow.ListWorkflowsResponse>(`/api/v1alpha1/${req["parentprojects"]}/workflows?${fm.renderURLSearchParams(req, ["parentprojects"])}`, {...initReq, method: "GET"})
  }
  static PerformWorkflowStep(req: CoinbaseStakingV1alpha1Workflow.PerformWorkflowStepRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Workflow.Workflow> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Workflow.PerformWorkflowStepRequest, CoinbaseStakingV1alpha1Workflow.Workflow>(`/api/v1alpha1/${req["nameprojectsworkflows"]}/step`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RefreshWorkflowStep(req: CoinbaseStakingV1alpha1Workflow.RefreshWorkflowStepRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Workflow.Workflow> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Workflow.RefreshWorkflowStepRequest, CoinbaseStakingV1alpha1Workflow.Workflow>(`/api/v1alpha1/${req["nameprojectsworkflows"]}/refresh`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ViewStakingContext(req: CoinbaseStakingV1alpha1Staking_context.ViewStakingContextRequest, initReq?: fm.InitReq): Promise<CoinbaseStakingV1alpha1Staking_context.ViewStakingContextResponse> {
    return fm.fetchReq<CoinbaseStakingV1alpha1Staking_context.ViewStakingContextRequest, CoinbaseStakingV1alpha1Staking_context.ViewStakingContextResponse>(`/api/v1alpha1/viewStakingContext:view?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}