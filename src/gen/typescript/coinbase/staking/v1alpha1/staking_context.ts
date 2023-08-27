/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: coinbase/staking/v1alpha1/staking_context.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/api/field_behavior";
import * as dependency_2 from "./ethereum_kiln";
import * as dependency_3 from "./network";
import * as pb_1 from "google-protobuf";
export namespace coinbase.staking.v1alpha1 {
    export class ViewStakingContextRequest extends pb_1.Message {
        #one_of_decls: number[][] = [[3]];
        constructor(data?: any[] | ({
            address?: string;
            network?: dependency_3.coinbase.staking.v1alpha1.Network;
        } & (({
            ethereum_kiln_staking_context_parameters?: dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("network" in data && data.network != undefined) {
                    this.network = data.network;
                }
                if ("ethereum_kiln_staking_context_parameters" in data && data.ethereum_kiln_staking_context_parameters != undefined) {
                    this.ethereum_kiln_staking_context_parameters = data.ethereum_kiln_staking_context_parameters;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get network() {
            return pb_1.Message.getWrapperField(this, dependency_3.coinbase.staking.v1alpha1.Network, 2) as dependency_3.coinbase.staking.v1alpha1.Network;
        }
        set network(value: dependency_3.coinbase.staking.v1alpha1.Network) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_network() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get ethereum_kiln_staking_context_parameters() {
            return pb_1.Message.getWrapperField(this, dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters, 3) as dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters;
        }
        set ethereum_kiln_staking_context_parameters(value: dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_ethereum_kiln_staking_context_parameters() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get staking_context_paramaters() {
            const cases: {
                [index: number]: "none" | "ethereum_kiln_staking_context_parameters";
            } = {
                0: "none",
                3: "ethereum_kiln_staking_context_parameters"
            };
            return cases[pb_1.Message.computeOneofCase(this, [3])];
        }
        static fromObject(data: {
            address?: string;
            network?: ReturnType<typeof dependency_3.coinbase.staking.v1alpha1.Network.prototype.toObject>;
            ethereum_kiln_staking_context_parameters?: ReturnType<typeof dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters.prototype.toObject>;
        }): ViewStakingContextRequest {
            const message = new ViewStakingContextRequest({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.network != null) {
                message.network = dependency_3.coinbase.staking.v1alpha1.Network.fromObject(data.network);
            }
            if (data.ethereum_kiln_staking_context_parameters != null) {
                message.ethereum_kiln_staking_context_parameters = dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters.fromObject(data.ethereum_kiln_staking_context_parameters);
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                network?: ReturnType<typeof dependency_3.coinbase.staking.v1alpha1.Network.prototype.toObject>;
                ethereum_kiln_staking_context_parameters?: ReturnType<typeof dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters.prototype.toObject>;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.network != null) {
                data.network = this.network.toObject();
            }
            if (this.ethereum_kiln_staking_context_parameters != null) {
                data.ethereum_kiln_staking_context_parameters = this.ethereum_kiln_staking_context_parameters.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (this.has_network)
                writer.writeMessage(2, this.network, () => this.network.serialize(writer));
            if (this.has_ethereum_kiln_staking_context_parameters)
                writer.writeMessage(3, this.ethereum_kiln_staking_context_parameters, () => this.ethereum_kiln_staking_context_parameters.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ViewStakingContextRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ViewStakingContextRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.network, () => message.network = dependency_3.coinbase.staking.v1alpha1.Network.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.ethereum_kiln_staking_context_parameters, () => message.ethereum_kiln_staking_context_parameters = dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextParameters.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ViewStakingContextRequest {
            return ViewStakingContextRequest.deserialize(bytes);
        }
    }
    export class ViewStakingContextResponse extends pb_1.Message {
        #one_of_decls: number[][] = [[2]];
        constructor(data?: any[] | ({
            address?: string;
        } & (({
            ethereum_kiln_staking_context_details?: dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("ethereum_kiln_staking_context_details" in data && data.ethereum_kiln_staking_context_details != undefined) {
                    this.ethereum_kiln_staking_context_details = data.ethereum_kiln_staking_context_details;
                }
            }
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get ethereum_kiln_staking_context_details() {
            return pb_1.Message.getWrapperField(this, dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails, 2) as dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails;
        }
        set ethereum_kiln_staking_context_details(value: dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_ethereum_kiln_staking_context_details() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get staking_context_details() {
            const cases: {
                [index: number]: "none" | "ethereum_kiln_staking_context_details";
            } = {
                0: "none",
                2: "ethereum_kiln_staking_context_details"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2])];
        }
        static fromObject(data: {
            address?: string;
            ethereum_kiln_staking_context_details?: ReturnType<typeof dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails.prototype.toObject>;
        }): ViewStakingContextResponse {
            const message = new ViewStakingContextResponse({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.ethereum_kiln_staking_context_details != null) {
                message.ethereum_kiln_staking_context_details = dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails.fromObject(data.ethereum_kiln_staking_context_details);
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                ethereum_kiln_staking_context_details?: ReturnType<typeof dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails.prototype.toObject>;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.ethereum_kiln_staking_context_details != null) {
                data.ethereum_kiln_staking_context_details = this.ethereum_kiln_staking_context_details.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.address.length)
                writer.writeString(1, this.address);
            if (this.has_ethereum_kiln_staking_context_details)
                writer.writeMessage(2, this.ethereum_kiln_staking_context_details, () => this.ethereum_kiln_staking_context_details.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ViewStakingContextResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ViewStakingContextResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.ethereum_kiln_staking_context_details, () => message.ethereum_kiln_staking_context_details = dependency_2.coinbase.staking.v1alpha1.EthereumKilnStakingContextDetails.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ViewStakingContextResponse {
            return ViewStakingContextResponse.deserialize(bytes);
        }
    }
}