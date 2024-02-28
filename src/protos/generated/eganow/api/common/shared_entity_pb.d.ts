import * as jspb from 'google-protobuf'



export class CountryData extends jspb.Message {
  getCountryname(): string;
  setCountryname(value: string): CountryData;

  getCountrycode(): string;
  setCountrycode(value: string): CountryData;

  getCountrydialcode(): string;
  setCountrydialcode(value: string): CountryData;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CountryData;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): CountryData;

  getMobilenominlen(): number;
  setMobilenominlen(value: number): CountryData;

  getMobilenomaxlen(): number;
  setMobilenomaxlen(value: number): CountryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryData.AsObject;
  static toObject(includeInstance: boolean, msg: CountryData): CountryData.AsObject;
  static serializeBinaryToWriter(message: CountryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryData;
  static deserializeBinaryFromReader(message: CountryData, reader: jspb.BinaryReader): CountryData;
}

export namespace CountryData {
  export type AsObject = {
    countryname: string,
    countrycode: string,
    countrydialcode: string,
    currencyiso: string,
    countryflagurl: string,
    mobilenominlen: number,
    mobilenomaxlen: number,
  }
}

export enum GroupValue { 
  GROUP_VALUE_UNKNOWN = 0,
  GROUP_VALUE_PERSONAL = 1,
  GROUP_VALUE_BUSINESS = 2,
}
export enum AccountLocationValue { 
  ACCOUNT_LOCATION_UNKNOWN = 0,
  ACCOUNT_LOCATION_INTERNAL = 1,
  ACCOUNT_LOCATION_EXTERNAL = 2,
}
export enum ClientPlatform { 
  CLIENT_UNKNOWN = 0,
  CLIENT_MOBILE = 1,
  CLIENT_WEB = 2,
  CLIENT_API = 3,
}
export enum UserAccountStatus { 
  USER_ACCOUNT_STATUS_UNKNOWN = 0,
  USER_ACCOUNT_STATUS_ACTIVE = 1,
  USER_ACCOUNT_STATUS_BLOCKED = 2,
}
export enum UserPasswordStatus { 
  PASSWORD_RESET_STATUS_UNKNOWN = 0,
  PASSWORD_RESET_STATUS_TEMPORAL = 1,
  PASSWORD_RESET_STATUS_PERMANENT = 2,
}
