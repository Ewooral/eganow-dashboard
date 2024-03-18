import * as jspb from 'google-protobuf'



export class CustomerEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerEmpty): CustomerEmpty.AsObject;
  static serializeBinaryToWriter(message: CustomerEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerEmpty;
  static deserializeBinaryFromReader(message: CustomerEmpty, reader: jspb.BinaryReader): CustomerEmpty;
}

export namespace CustomerEmpty {
  export type AsObject = {
  }
}

export class CustomerStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerStringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerStringValue): CustomerStringValue.AsObject;
  static serializeBinaryToWriter(message: CustomerStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerStringValue;
  static deserializeBinaryFromReader(message: CustomerStringValue, reader: jspb.BinaryReader): CustomerStringValue;
}

export namespace CustomerStringValue {
  export type AsObject = {
    value: string,
  }
}

