/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: coinbase/staking/v1alpha1/ethereum_kiln.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./common";
import * as dependency_2 from "./../../../protoc-gen-openapiv2/options/annotations";
import * as dependency_3 from "./../../../google/api/field_behavior";
import * as pb_1 from "google-protobuf";
export namespace coinbase.staking.v1alpha1 {
    export class EthereumKilnStakeParameters extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            staker_address?: string;
            integrator_contract_address?: string;
            amount?: dependency_1.coinbase.staking.v1alpha1.Amount;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("staker_address" in data && data.staker_address != undefined) {
                    this.staker_address = data.staker_address;
                }
                if ("integrator_contract_address" in data && data.integrator_contract_address != undefined) {
                    this.integrator_contract_address = data.integrator_contract_address;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get staker_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set staker_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get integrator_contract_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set integrator_contract_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 3) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set amount(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_amount() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            staker_address?: string;
            integrator_contract_address?: string;
            amount?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
        }): EthereumKilnStakeParameters {
            const message = new EthereumKilnStakeParameters({});
            if (data.staker_address != null) {
                message.staker_address = data.staker_address;
            }
            if (data.integrator_contract_address != null) {
                message.integrator_contract_address = data.integrator_contract_address;
            }
            if (data.amount != null) {
                message.amount = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.amount);
            }
            return message;
        }
        toObject() {
            const data: {
                staker_address?: string;
                integrator_contract_address?: string;
                amount?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            } = {};
            if (this.staker_address != null) {
                data.staker_address = this.staker_address;
            }
            if (this.integrator_contract_address != null) {
                data.integrator_contract_address = this.integrator_contract_address;
            }
            if (this.amount != null) {
                data.amount = this.amount.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.staker_address.length)
                writer.writeString(1, this.staker_address);
            if (this.integrator_contract_address.length)
                writer.writeString(2, this.integrator_contract_address);
            if (this.has_amount)
                writer.writeMessage(3, this.amount, () => this.amount.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthereumKilnStakeParameters {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthereumKilnStakeParameters();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.staker_address = reader.readString();
                        break;
                    case 2:
                        message.integrator_contract_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => message.amount = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EthereumKilnStakeParameters {
            return EthereumKilnStakeParameters.deserialize(bytes);
        }
    }
    export class EthereumKilnUnstakeParameters extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            staker_address?: string;
            integrator_contract_address?: string;
            amount?: dependency_1.coinbase.staking.v1alpha1.Amount;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("staker_address" in data && data.staker_address != undefined) {
                    this.staker_address = data.staker_address;
                }
                if ("integrator_contract_address" in data && data.integrator_contract_address != undefined) {
                    this.integrator_contract_address = data.integrator_contract_address;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get staker_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set staker_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get integrator_contract_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set integrator_contract_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 3) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set amount(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_amount() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            staker_address?: string;
            integrator_contract_address?: string;
            amount?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
        }): EthereumKilnUnstakeParameters {
            const message = new EthereumKilnUnstakeParameters({});
            if (data.staker_address != null) {
                message.staker_address = data.staker_address;
            }
            if (data.integrator_contract_address != null) {
                message.integrator_contract_address = data.integrator_contract_address;
            }
            if (data.amount != null) {
                message.amount = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.amount);
            }
            return message;
        }
        toObject() {
            const data: {
                staker_address?: string;
                integrator_contract_address?: string;
                amount?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            } = {};
            if (this.staker_address != null) {
                data.staker_address = this.staker_address;
            }
            if (this.integrator_contract_address != null) {
                data.integrator_contract_address = this.integrator_contract_address;
            }
            if (this.amount != null) {
                data.amount = this.amount.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.staker_address.length)
                writer.writeString(1, this.staker_address);
            if (this.integrator_contract_address.length)
                writer.writeString(2, this.integrator_contract_address);
            if (this.has_amount)
                writer.writeMessage(3, this.amount, () => this.amount.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthereumKilnUnstakeParameters {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthereumKilnUnstakeParameters();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.staker_address = reader.readString();
                        break;
                    case 2:
                        message.integrator_contract_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => message.amount = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EthereumKilnUnstakeParameters {
            return EthereumKilnUnstakeParameters.deserialize(bytes);
        }
    }
    export class EthereumKilnStakingParameters extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            stake_parameters?: EthereumKilnStakeParameters;
            unstake_parameters?: never;
        } | {
            stake_parameters?: never;
            unstake_parameters?: EthereumKilnUnstakeParameters;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("stake_parameters" in data && data.stake_parameters != undefined) {
                    this.stake_parameters = data.stake_parameters;
                }
                if ("unstake_parameters" in data && data.unstake_parameters != undefined) {
                    this.unstake_parameters = data.unstake_parameters;
                }
            }
        }
        get stake_parameters() {
            return pb_1.Message.getWrapperField(this, EthereumKilnStakeParameters, 1) as EthereumKilnStakeParameters;
        }
        set stake_parameters(value: EthereumKilnStakeParameters) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_stake_parameters() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get unstake_parameters() {
            return pb_1.Message.getWrapperField(this, EthereumKilnUnstakeParameters, 2) as EthereumKilnUnstakeParameters;
        }
        set unstake_parameters(value: EthereumKilnUnstakeParameters) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_unstake_parameters() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get parameters() {
            const cases: {
                [index: number]: "none" | "stake_parameters" | "unstake_parameters";
            } = {
                0: "none",
                1: "stake_parameters",
                2: "unstake_parameters"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            stake_parameters?: ReturnType<typeof EthereumKilnStakeParameters.prototype.toObject>;
            unstake_parameters?: ReturnType<typeof EthereumKilnUnstakeParameters.prototype.toObject>;
        }): EthereumKilnStakingParameters {
            const message = new EthereumKilnStakingParameters({});
            if (data.stake_parameters != null) {
                message.stake_parameters = EthereumKilnStakeParameters.fromObject(data.stake_parameters);
            }
            if (data.unstake_parameters != null) {
                message.unstake_parameters = EthereumKilnUnstakeParameters.fromObject(data.unstake_parameters);
            }
            return message;
        }
        toObject() {
            const data: {
                stake_parameters?: ReturnType<typeof EthereumKilnStakeParameters.prototype.toObject>;
                unstake_parameters?: ReturnType<typeof EthereumKilnUnstakeParameters.prototype.toObject>;
            } = {};
            if (this.stake_parameters != null) {
                data.stake_parameters = this.stake_parameters.toObject();
            }
            if (this.unstake_parameters != null) {
                data.unstake_parameters = this.unstake_parameters.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_stake_parameters)
                writer.writeMessage(1, this.stake_parameters, () => this.stake_parameters.serialize(writer));
            if (this.has_unstake_parameters)
                writer.writeMessage(2, this.unstake_parameters, () => this.unstake_parameters.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthereumKilnStakingParameters {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthereumKilnStakingParameters();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.stake_parameters, () => message.stake_parameters = EthereumKilnStakeParameters.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.unstake_parameters, () => message.unstake_parameters = EthereumKilnUnstakeParameters.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EthereumKilnStakingParameters {
            return EthereumKilnStakingParameters.deserialize(bytes);
        }
    }
    export class EthereumKilnStakingContextParameters extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            integrator_contract_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("integrator_contract_address" in data && data.integrator_contract_address != undefined) {
                    this.integrator_contract_address = data.integrator_contract_address;
                }
            }
        }
        get integrator_contract_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set integrator_contract_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            integrator_contract_address?: string;
        }): EthereumKilnStakingContextParameters {
            const message = new EthereumKilnStakingContextParameters({});
            if (data.integrator_contract_address != null) {
                message.integrator_contract_address = data.integrator_contract_address;
            }
            return message;
        }
        toObject() {
            const data: {
                integrator_contract_address?: string;
            } = {};
            if (this.integrator_contract_address != null) {
                data.integrator_contract_address = this.integrator_contract_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.integrator_contract_address.length)
                writer.writeString(1, this.integrator_contract_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthereumKilnStakingContextParameters {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthereumKilnStakingContextParameters();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.integrator_contract_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EthereumKilnStakingContextParameters {
            return EthereumKilnStakingContextParameters.deserialize(bytes);
        }
    }
    export class EthereumKilnStakingContextDetails extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            ethereum_balance?: dependency_1.coinbase.staking.v1alpha1.Amount;
            integrator_share_balance?: dependency_1.coinbase.staking.v1alpha1.Amount;
            integrator_share_underlying_balance?: dependency_1.coinbase.staking.v1alpha1.Amount;
            total_exitable_eth?: dependency_1.coinbase.staking.v1alpha1.Amount;
            total_shares_pending_exit?: dependency_1.coinbase.staking.v1alpha1.Amount;
            fulfillable_share_count?: dependency_1.coinbase.staking.v1alpha1.Amount;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ethereum_balance" in data && data.ethereum_balance != undefined) {
                    this.ethereum_balance = data.ethereum_balance;
                }
                if ("integrator_share_balance" in data && data.integrator_share_balance != undefined) {
                    this.integrator_share_balance = data.integrator_share_balance;
                }
                if ("integrator_share_underlying_balance" in data && data.integrator_share_underlying_balance != undefined) {
                    this.integrator_share_underlying_balance = data.integrator_share_underlying_balance;
                }
                if ("total_exitable_eth" in data && data.total_exitable_eth != undefined) {
                    this.total_exitable_eth = data.total_exitable_eth;
                }
                if ("total_shares_pending_exit" in data && data.total_shares_pending_exit != undefined) {
                    this.total_shares_pending_exit = data.total_shares_pending_exit;
                }
                if ("fulfillable_share_count" in data && data.fulfillable_share_count != undefined) {
                    this.fulfillable_share_count = data.fulfillable_share_count;
                }
            }
        }
        get ethereum_balance() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 1) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set ethereum_balance(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_ethereum_balance() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get integrator_share_balance() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 2) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set integrator_share_balance(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_integrator_share_balance() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get integrator_share_underlying_balance() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 3) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set integrator_share_underlying_balance(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_integrator_share_underlying_balance() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get total_exitable_eth() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 4) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set total_exitable_eth(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_total_exitable_eth() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get total_shares_pending_exit() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 5) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set total_shares_pending_exit(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_total_shares_pending_exit() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get fulfillable_share_count() {
            return pb_1.Message.getWrapperField(this, dependency_1.coinbase.staking.v1alpha1.Amount, 6) as dependency_1.coinbase.staking.v1alpha1.Amount;
        }
        set fulfillable_share_count(value: dependency_1.coinbase.staking.v1alpha1.Amount) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_fulfillable_share_count() {
            return pb_1.Message.getField(this, 6) != null;
        }
        static fromObject(data: {
            ethereum_balance?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            integrator_share_balance?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            integrator_share_underlying_balance?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            total_exitable_eth?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            total_shares_pending_exit?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            fulfillable_share_count?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
        }): EthereumKilnStakingContextDetails {
            const message = new EthereumKilnStakingContextDetails({});
            if (data.ethereum_balance != null) {
                message.ethereum_balance = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.ethereum_balance);
            }
            if (data.integrator_share_balance != null) {
                message.integrator_share_balance = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.integrator_share_balance);
            }
            if (data.integrator_share_underlying_balance != null) {
                message.integrator_share_underlying_balance = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.integrator_share_underlying_balance);
            }
            if (data.total_exitable_eth != null) {
                message.total_exitable_eth = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.total_exitable_eth);
            }
            if (data.total_shares_pending_exit != null) {
                message.total_shares_pending_exit = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.total_shares_pending_exit);
            }
            if (data.fulfillable_share_count != null) {
                message.fulfillable_share_count = dependency_1.coinbase.staking.v1alpha1.Amount.fromObject(data.fulfillable_share_count);
            }
            return message;
        }
        toObject() {
            const data: {
                ethereum_balance?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
                integrator_share_balance?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
                integrator_share_underlying_balance?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
                total_exitable_eth?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
                total_shares_pending_exit?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
                fulfillable_share_count?: ReturnType<typeof dependency_1.coinbase.staking.v1alpha1.Amount.prototype.toObject>;
            } = {};
            if (this.ethereum_balance != null) {
                data.ethereum_balance = this.ethereum_balance.toObject();
            }
            if (this.integrator_share_balance != null) {
                data.integrator_share_balance = this.integrator_share_balance.toObject();
            }
            if (this.integrator_share_underlying_balance != null) {
                data.integrator_share_underlying_balance = this.integrator_share_underlying_balance.toObject();
            }
            if (this.total_exitable_eth != null) {
                data.total_exitable_eth = this.total_exitable_eth.toObject();
            }
            if (this.total_shares_pending_exit != null) {
                data.total_shares_pending_exit = this.total_shares_pending_exit.toObject();
            }
            if (this.fulfillable_share_count != null) {
                data.fulfillable_share_count = this.fulfillable_share_count.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_ethereum_balance)
                writer.writeMessage(1, this.ethereum_balance, () => this.ethereum_balance.serialize(writer));
            if (this.has_integrator_share_balance)
                writer.writeMessage(2, this.integrator_share_balance, () => this.integrator_share_balance.serialize(writer));
            if (this.has_integrator_share_underlying_balance)
                writer.writeMessage(3, this.integrator_share_underlying_balance, () => this.integrator_share_underlying_balance.serialize(writer));
            if (this.has_total_exitable_eth)
                writer.writeMessage(4, this.total_exitable_eth, () => this.total_exitable_eth.serialize(writer));
            if (this.has_total_shares_pending_exit)
                writer.writeMessage(5, this.total_shares_pending_exit, () => this.total_shares_pending_exit.serialize(writer));
            if (this.has_fulfillable_share_count)
                writer.writeMessage(6, this.fulfillable_share_count, () => this.fulfillable_share_count.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthereumKilnStakingContextDetails {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthereumKilnStakingContextDetails();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.ethereum_balance, () => message.ethereum_balance = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.integrator_share_balance, () => message.integrator_share_balance = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.integrator_share_underlying_balance, () => message.integrator_share_underlying_balance = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.total_exitable_eth, () => message.total_exitable_eth = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.total_shares_pending_exit, () => message.total_shares_pending_exit = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.fulfillable_share_count, () => message.fulfillable_share_count = dependency_1.coinbase.staking.v1alpha1.Amount.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EthereumKilnStakingContextDetails {
            return EthereumKilnStakingContextDetails.deserialize(bytes);
        }
    }
}