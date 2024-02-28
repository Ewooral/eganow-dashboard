import * as jspb from 'google-protobuf'



export class GetCountriesRequest extends jspb.Message {
  getFilter(): CountryFilter;
  setFilter(value: CountryFilter): GetCountriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesRequest): GetCountriesRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesRequest;
  static deserializeBinaryFromReader(message: GetCountriesRequest, reader: jspb.BinaryReader): GetCountriesRequest;
}

export namespace GetCountriesRequest {
  export type AsObject = {
    filter: CountryFilter,
  }
}

export class Country extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): Country;

  getCountryName(): string;
  setCountryName(value: string): Country;

  getCurrencyIso(): string;
  setCurrencyIso(value: string): Country;

  getCountryFlagUrl(): string;
  setCountryFlagUrl(value: string): Country;

  getMinMobileNumberLength(): number;
  setMinMobileNumberLength(value: number): Country;

  getMaxMobileNumberLength(): number;
  setMaxMobileNumberLength(value: number): Country;

  getDialCode(): string;
  setDialCode(value: string): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    countryCode: string,
    countryName: string,
    currencyIso: string,
    countryFlagUrl: string,
    minMobileNumberLength: number,
    maxMobileNumberLength: number,
    dialCode: string,
  }
}

export class GetCountriesResponse extends jspb.Message {
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): GetCountriesResponse;
  clearCountriesList(): GetCountriesResponse;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesResponse): GetCountriesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesResponse;
  static deserializeBinaryFromReader(message: GetCountriesResponse, reader: jspb.BinaryReader): GetCountriesResponse;
}

export namespace GetCountriesResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export enum CountryFilter { 
  COUNTRY_FILTER_UNSPECIFIED = 0,
  COUNTRY_FILTER_SIGNUP = 1,
  COUNTRY_FILTER_OPERATING = 2,
}
