import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class CreateMerchantRequest extends jspb.Message {
  getPersonalInformation(): CreateMerchantRequest.PersonalInformation | undefined;
  setPersonalInformation(value?: CreateMerchantRequest.PersonalInformation): CreateMerchantRequest;
  hasPersonalInformation(): boolean;
  clearPersonalInformation(): CreateMerchantRequest;

  getBusinessInformation(): CreateMerchantRequest.BusinessInformation | undefined;
  setBusinessInformation(value?: CreateMerchantRequest.BusinessInformation): CreateMerchantRequest;
  hasBusinessInformation(): boolean;
  clearBusinessInformation(): CreateMerchantRequest;

  getPassword(): string;
  setPassword(value: string): CreateMerchantRequest;

  getOtpValue(): string;
  setOtpValue(value: string): CreateMerchantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMerchantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMerchantRequest): CreateMerchantRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMerchantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMerchantRequest;
  static deserializeBinaryFromReader(message: CreateMerchantRequest, reader: jspb.BinaryReader): CreateMerchantRequest;
}

export namespace CreateMerchantRequest {
  export type AsObject = {
    personalInformation?: CreateMerchantRequest.PersonalInformation.AsObject,
    businessInformation?: CreateMerchantRequest.BusinessInformation.AsObject,
    password: string,
    otpValue: string,
  }

  export class PersonalInformation extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): PersonalInformation;

    getMobileNumber(): string;
    setMobileNumber(value: string): PersonalInformation;

    getFirstName(): string;
    setFirstName(value: string): PersonalInformation;

    getLastName(): string;
    setLastName(value: string): PersonalInformation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonalInformation.AsObject;
    static toObject(includeInstance: boolean, msg: PersonalInformation): PersonalInformation.AsObject;
    static serializeBinaryToWriter(message: PersonalInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonalInformation;
    static deserializeBinaryFromReader(message: PersonalInformation, reader: jspb.BinaryReader): PersonalInformation;
  }

  export namespace PersonalInformation {
    export type AsObject = {
      email: string,
      mobileNumber: string,
      firstName: string,
      lastName: string,
    }
  }


  export class BusinessInformation extends jspb.Message {
    getBusinessName(): string;
    setBusinessName(value: string): BusinessInformation;

    getTradingName(): string;
    setTradingName(value: string): BusinessInformation;

    getMobileNumber(): string;
    setMobileNumber(value: string): BusinessInformation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BusinessInformation.AsObject;
    static toObject(includeInstance: boolean, msg: BusinessInformation): BusinessInformation.AsObject;
    static serializeBinaryToWriter(message: BusinessInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BusinessInformation;
    static deserializeBinaryFromReader(message: BusinessInformation, reader: jspb.BinaryReader): BusinessInformation;
  }

  export namespace BusinessInformation {
    export type AsObject = {
      businessName: string,
      tradingName: string,
      mobileNumber: string,
    }
  }

}

export class CheckMerchantAccountRequest extends jspb.Message {
  getMerchantEmail(): string;
  setMerchantEmail(value: string): CheckMerchantAccountRequest;

  getMerchantMobileNumber(): string;
  setMerchantMobileNumber(value: string): CheckMerchantAccountRequest;

  getCheckMerchantAccountPayloadCase(): CheckMerchantAccountRequest.CheckMerchantAccountPayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMerchantAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMerchantAccountRequest): CheckMerchantAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CheckMerchantAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMerchantAccountRequest;
  static deserializeBinaryFromReader(message: CheckMerchantAccountRequest, reader: jspb.BinaryReader): CheckMerchantAccountRequest;
}

export namespace CheckMerchantAccountRequest {
  export type AsObject = {
    merchantEmail: string,
    merchantMobileNumber: string,
  }

  export enum CheckMerchantAccountPayloadCase { 
    CHECK_MERCHANT_ACCOUNT_PAYLOAD_NOT_SET = 0,
    MERCHANT_EMAIL = 1,
    MERCHANT_MOBILE_NUMBER = 2,
  }
}

export class LoginMerchantRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginMerchantRequest;

  getPassword(): string;
  setPassword(value: string): LoginMerchantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginMerchantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginMerchantRequest): LoginMerchantRequest.AsObject;
  static serializeBinaryToWriter(message: LoginMerchantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginMerchantRequest;
  static deserializeBinaryFromReader(message: LoginMerchantRequest, reader: jspb.BinaryReader): LoginMerchantRequest;
}

export namespace LoginMerchantRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class AuthMerchantResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthMerchantResponse;

  getFullName(): string;
  setFullName(value: string): AuthMerchantResponse;

  getFirstName(): string;
  setFirstName(value: string): AuthMerchantResponse;

  getLastName(): string;
  setLastName(value: string): AuthMerchantResponse;

  getCompanyName(): string;
  setCompanyName(value: string): AuthMerchantResponse;

  getProfilePicture(): string;
  setProfilePicture(value: string): AuthMerchantResponse;

  getEmail(): string;
  setEmail(value: string): AuthMerchantResponse;

  getMobileNumber(): string;
  setMobileNumber(value: string): AuthMerchantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthMerchantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthMerchantResponse): AuthMerchantResponse.AsObject;
  static serializeBinaryToWriter(message: AuthMerchantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthMerchantResponse;
  static deserializeBinaryFromReader(message: AuthMerchantResponse, reader: jspb.BinaryReader): AuthMerchantResponse;
}

export namespace AuthMerchantResponse {
  export type AsObject = {
    accessToken: string,
    fullName: string,
    firstName: string,
    lastName: string,
    companyName: string,
    profilePicture: string,
    email: string,
    mobileNumber: string,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    email: string,
    newPassword: string,
  }
}

