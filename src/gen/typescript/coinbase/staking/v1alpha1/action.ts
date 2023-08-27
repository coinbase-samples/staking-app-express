/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: coinbase/staking/v1alpha1/action.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/api/field_behavior";
import * as dependency_2 from "./../../../google/api/resource";
import * as pb_1 from "google-protobuf";
export namespace coinbase.staking.v1alpha1 {
    export class Action extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            name?: string;
        }): Action {
            const message = new Action({});
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Action {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Action();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Action {
            return Action.deserialize(bytes);
        }
    }
    export class ListActionsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            parent?: string;
            page_size?: number;
            page_token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("parent" in data && data.parent != undefined) {
                    this.parent = data.parent;
                }
                if ("page_size" in data && data.page_size != undefined) {
                    this.page_size = data.page_size;
                }
                if ("page_token" in data && data.page_token != undefined) {
                    this.page_token = data.page_token;
                }
            }
        }
        get parent() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set parent(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get page_size() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set page_size(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get page_token() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set page_token(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            parent?: string;
            page_size?: number;
            page_token?: string;
        }): ListActionsRequest {
            const message = new ListActionsRequest({});
            if (data.parent != null) {
                message.parent = data.parent;
            }
            if (data.page_size != null) {
                message.page_size = data.page_size;
            }
            if (data.page_token != null) {
                message.page_token = data.page_token;
            }
            return message;
        }
        toObject() {
            const data: {
                parent?: string;
                page_size?: number;
                page_token?: string;
            } = {};
            if (this.parent != null) {
                data.parent = this.parent;
            }
            if (this.page_size != null) {
                data.page_size = this.page_size;
            }
            if (this.page_token != null) {
                data.page_token = this.page_token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.parent.length)
                writer.writeString(1, this.parent);
            if (this.page_size != 0)
                writer.writeInt32(2, this.page_size);
            if (this.page_token.length)
                writer.writeString(3, this.page_token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListActionsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListActionsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.parent = reader.readString();
                        break;
                    case 2:
                        message.page_size = reader.readInt32();
                        break;
                    case 3:
                        message.page_token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListActionsRequest {
            return ListActionsRequest.deserialize(bytes);
        }
    }
    export class ListActionsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            actions?: Action[];
            next_page_token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("actions" in data && data.actions != undefined) {
                    this.actions = data.actions;
                }
                if ("next_page_token" in data && data.next_page_token != undefined) {
                    this.next_page_token = data.next_page_token;
                }
            }
        }
        get actions() {
            return pb_1.Message.getRepeatedWrapperField(this, Action, 1) as Action[];
        }
        set actions(value: Action[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get next_page_token() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set next_page_token(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            actions?: ReturnType<typeof Action.prototype.toObject>[];
            next_page_token?: string;
        }): ListActionsResponse {
            const message = new ListActionsResponse({});
            if (data.actions != null) {
                message.actions = data.actions.map(item => Action.fromObject(item));
            }
            if (data.next_page_token != null) {
                message.next_page_token = data.next_page_token;
            }
            return message;
        }
        toObject() {
            const data: {
                actions?: ReturnType<typeof Action.prototype.toObject>[];
                next_page_token?: string;
            } = {};
            if (this.actions != null) {
                data.actions = this.actions.map((item: Action) => item.toObject());
            }
            if (this.next_page_token != null) {
                data.next_page_token = this.next_page_token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.actions.length)
                writer.writeRepeatedMessage(1, this.actions, (item: Action) => item.serialize(writer));
            if (this.next_page_token.length)
                writer.writeString(2, this.next_page_token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListActionsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ListActionsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.actions, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Action.deserialize(reader), Action));
                        break;
                    case 2:
                        message.next_page_token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ListActionsResponse {
            return ListActionsResponse.deserialize(bytes);
        }
    }
}