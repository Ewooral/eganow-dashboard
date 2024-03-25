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

export class MediaStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): MediaStringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: MediaStringValue): MediaStringValue.AsObject;
  static serializeBinaryToWriter(message: MediaStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaStringValue;
  static deserializeBinaryFromReader(message: MediaStringValue, reader: jspb.BinaryReader): MediaStringValue;
}

export namespace MediaStringValue {
  export type AsObject = {
    value: string,
  }
}

