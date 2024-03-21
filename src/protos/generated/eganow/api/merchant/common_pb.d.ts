import * as jspb from 'google-protobuf'



export class MerchantEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantEmpty): MerchantEmpty.AsObject;
  static serializeBinaryToWriter(message: MerchantEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantEmpty;
  static deserializeBinaryFromReader(message: MerchantEmpty, reader: jspb.BinaryReader): MerchantEmpty;
}

export namespace MerchantEmpty {
  export type AsObject = {
  }
}

export class MerchantStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): MerchantStringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantStringValue): MerchantStringValue.AsObject;
  static serializeBinaryToWriter(message: MerchantStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantStringValue;
  static deserializeBinaryFromReader(message: MerchantStringValue, reader: jspb.BinaryReader): MerchantStringValue;
}

export namespace MerchantStringValue {
  export type AsObject = {
    value: string,
  }
}

export class MerchantIntValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): MerchantIntValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantIntValue.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantIntValue): MerchantIntValue.AsObject;
  static serializeBinaryToWriter(message: MerchantIntValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantIntValue;
  static deserializeBinaryFromReader(message: MerchantIntValue, reader: jspb.BinaryReader): MerchantIntValue;
}

export namespace MerchantIntValue {
  export type AsObject = {
    value: number,
  }
}

