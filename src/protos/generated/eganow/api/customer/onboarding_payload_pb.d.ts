import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class CreateCustomerRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateCustomerRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): CreateCustomerRequest;

  getFirstName(): string;
  setFirstName(value: string): CreateCustomerRequest;

  getLastName(): string;
  setLastName(value: string): CreateCustomerRequest;

  getTin(): string;
  setTin(value: string): CreateCustomerRequest;

  getPostalZipCode(): string;
  setPostalZipCode(value: string): CreateCustomerRequest;

  getStreetAddress(): string;
  setStreetAddress(value: string): CreateCustomerRequest;

  getCity(): string;
  setCity(value: string): CreateCustomerRequest;

  getProvinceState(): string;
  setProvinceState(value: string): CreateCustomerRequest;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): CreateCustomerRequest;

  getSector(): string;
  setSector(value: string): CreateCustomerRequest;

  getIndustry(): string;
  setIndustry(value: string): CreateCustomerRequest;

  getCountryCode(): string;
  setCountryCode(value: string): CreateCustomerRequest;

  getPassword(): string;
  setPassword(value: string): CreateCustomerRequest;

  getAuthPin(): string;
  setAuthPin(value: string): CreateCustomerRequest;

  getOtpValue(): string;
  setOtpValue(value: string): CreateCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerRequest): CreateCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerRequest;
  static deserializeBinaryFromReader(message: CreateCustomerRequest, reader: jspb.BinaryReader): CreateCustomerRequest;
}

export namespace CreateCustomerRequest {
  export type AsObject = {
    email: string,
    mobileNumber: string,
    firstName: string,
    lastName: string,
    tin: string,
    postalZipCode: string,
    streetAddress: string,
    city: string,
    provinceState: string,
    digitalAddress: string,
    sector: string,
    industry: string,
    countryCode: string,
    password: string,
    authPin: string,
    otpValue: string,
  }
}

export class LoginCustomerRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): LoginCustomerRequest;

  getPassword(): string;
  setPassword(value: string): LoginCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginCustomerRequest): LoginCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: LoginCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginCustomerRequest;
  static deserializeBinaryFromReader(message: LoginCustomerRequest, reader: jspb.BinaryReader): LoginCustomerRequest;
}

export namespace LoginCustomerRequest {
  export type AsObject = {
    phoneNumber: string,
    password: string,
  }
}

export class AuthCustomerResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthCustomerResponse;

  getFullName(): string;
  setFullName(value: string): AuthCustomerResponse;

  getFirstName(): string;
  setFirstName(value: string): AuthCustomerResponse;

  getLastName(): string;
  setLastName(value: string): AuthCustomerResponse;

  getEmail(): string;
  setEmail(value: string): AuthCustomerResponse;

  getMobileNumber(): string;
  setMobileNumber(value: string): AuthCustomerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthCustomerResponse): AuthCustomerResponse.AsObject;
  static serializeBinaryToWriter(message: AuthCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthCustomerResponse;
  static deserializeBinaryFromReader(message: AuthCustomerResponse, reader: jspb.BinaryReader): AuthCustomerResponse;
}

export namespace AuthCustomerResponse {
  export type AsObject = {
    accessToken: string,
    fullName: string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
  }
}

export class CheckCustomerAccountRequest extends jspb.Message {
  getMerchantMobileNumber(): string;
  setMerchantMobileNumber(value: string): CheckCustomerAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCustomerAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCustomerAccountRequest): CheckCustomerAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CheckCustomerAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCustomerAccountRequest;
  static deserializeBinaryFromReader(message: CheckCustomerAccountRequest, reader: jspb.BinaryReader): CheckCustomerAccountRequest;
}

export namespace CheckCustomerAccountRequest {
  export type AsObject = {
    merchantMobileNumber: string,
  }
}

