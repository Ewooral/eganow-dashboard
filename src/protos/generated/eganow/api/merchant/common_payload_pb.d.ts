import * as jspb from 'google-protobuf'



export class MerchantRegulator extends jspb.Message {
  getId(): string;
  setId(value: string): MerchantRegulator;

  getName(): string;
  setName(value: string): MerchantRegulator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantRegulator.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantRegulator): MerchantRegulator.AsObject;
  static serializeBinaryToWriter(message: MerchantRegulator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantRegulator;
  static deserializeBinaryFromReader(message: MerchantRegulator, reader: jspb.BinaryReader): MerchantRegulator;
}

export namespace MerchantRegulator {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class MerchantIndustry extends jspb.Message {
  getId(): string;
  setId(value: string): MerchantIndustry;

  getName(): string;
  setName(value: string): MerchantIndustry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantIndustry.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantIndustry): MerchantIndustry.AsObject;
  static serializeBinaryToWriter(message: MerchantIndustry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantIndustry;
  static deserializeBinaryFromReader(message: MerchantIndustry, reader: jspb.BinaryReader): MerchantIndustry;
}

export namespace MerchantIndustry {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class MerchantBusinessSector extends jspb.Message {
  getId(): string;
  setId(value: string): MerchantBusinessSector;

  getName(): string;
  setName(value: string): MerchantBusinessSector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantBusinessSector.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantBusinessSector): MerchantBusinessSector.AsObject;
  static serializeBinaryToWriter(message: MerchantBusinessSector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantBusinessSector;
  static deserializeBinaryFromReader(message: MerchantBusinessSector, reader: jspb.BinaryReader): MerchantBusinessSector;
}

export namespace MerchantBusinessSector {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class MerchantRegulatorList extends jspb.Message {
  getRegulatorsList(): Array<MerchantRegulator>;
  setRegulatorsList(value: Array<MerchantRegulator>): MerchantRegulatorList;
  clearRegulatorsList(): MerchantRegulatorList;
  addRegulators(value?: MerchantRegulator, index?: number): MerchantRegulator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantRegulatorList.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantRegulatorList): MerchantRegulatorList.AsObject;
  static serializeBinaryToWriter(message: MerchantRegulatorList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantRegulatorList;
  static deserializeBinaryFromReader(message: MerchantRegulatorList, reader: jspb.BinaryReader): MerchantRegulatorList;
}

export namespace MerchantRegulatorList {
  export type AsObject = {
    regulatorsList: Array<MerchantRegulator.AsObject>,
  }
}

export class MerchantBusinessSectorList extends jspb.Message {
  getSectorsList(): Array<MerchantBusinessSector>;
  setSectorsList(value: Array<MerchantBusinessSector>): MerchantBusinessSectorList;
  clearSectorsList(): MerchantBusinessSectorList;
  addSectors(value?: MerchantBusinessSector, index?: number): MerchantBusinessSector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantBusinessSectorList.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantBusinessSectorList): MerchantBusinessSectorList.AsObject;
  static serializeBinaryToWriter(message: MerchantBusinessSectorList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantBusinessSectorList;
  static deserializeBinaryFromReader(message: MerchantBusinessSectorList, reader: jspb.BinaryReader): MerchantBusinessSectorList;
}

export namespace MerchantBusinessSectorList {
  export type AsObject = {
    sectorsList: Array<MerchantBusinessSector.AsObject>,
  }
}

export class MerchantIndustryList extends jspb.Message {
  getIndustriesList(): Array<MerchantIndustry>;
  setIndustriesList(value: Array<MerchantIndustry>): MerchantIndustryList;
  clearIndustriesList(): MerchantIndustryList;
  addIndustries(value?: MerchantIndustry, index?: number): MerchantIndustry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantIndustryList.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantIndustryList): MerchantIndustryList.AsObject;
  static serializeBinaryToWriter(message: MerchantIndustryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantIndustryList;
  static deserializeBinaryFromReader(message: MerchantIndustryList, reader: jspb.BinaryReader): MerchantIndustryList;
}

export namespace MerchantIndustryList {
  export type AsObject = {
    industriesList: Array<MerchantIndustry.AsObject>,
  }
}

