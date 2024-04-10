import * as jspb from 'google-protobuf'



export class EgaPayEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EgaPayEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: EgaPayEmpty): EgaPayEmpty.AsObject;
  static serializeBinaryToWriter(message: EgaPayEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EgaPayEmpty;
  static deserializeBinaryFromReader(message: EgaPayEmpty, reader: jspb.BinaryReader): EgaPayEmpty;
}

export namespace EgaPayEmpty {
  export type AsObject = {
  }
}

export class EgaPayStringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EgaPayStringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EgaPayStringValue.AsObject;
  static toObject(includeInstance: boolean, msg: EgaPayStringValue): EgaPayStringValue.AsObject;
  static serializeBinaryToWriter(message: EgaPayStringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EgaPayStringValue;
  static deserializeBinaryFromReader(message: EgaPayStringValue, reader: jspb.BinaryReader): EgaPayStringValue;
}

export namespace EgaPayStringValue {
  export type AsObject = {
    value: string,
  }
}

