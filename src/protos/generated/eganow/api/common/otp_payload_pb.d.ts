import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class SendOTPRequest extends jspb.Message {
  getBusinessEmailAddress(): string;
  setBusinessEmailAddress(value: string): SendOTPRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): SendOTPRequest;

  getPurpose(): OtpGenerationPurpose;
  setPurpose(value: OtpGenerationPurpose): SendOTPRequest;

  getOtpRecipientInfoCase(): SendOTPRequest.OtpRecipientInfoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendOTPRequest): SendOTPRequest.AsObject;
  static serializeBinaryToWriter(message: SendOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOTPRequest;
  static deserializeBinaryFromReader(message: SendOTPRequest, reader: jspb.BinaryReader): SendOTPRequest;
}

export namespace SendOTPRequest {
  export type AsObject = {
    businessEmailAddress: string,
    mobileNumber: string,
    purpose: OtpGenerationPurpose,
  }

  export enum OtpRecipientInfoCase { 
    OTP_RECIPIENT_INFO_NOT_SET = 0,
    BUSINESS_EMAIL_ADDRESS = 1,
    MOBILE_NUMBER = 2,
  }
}

export class VerifyOTPRequest extends jspb.Message {
  getBusinessEmailAddress(): string;
  setBusinessEmailAddress(value: string): VerifyOTPRequest;

  getOtp(): string;
  setOtp(value: string): VerifyOTPRequest;

  getPurpose(): OtpGenerationPurpose;
  setPurpose(value: OtpGenerationPurpose): VerifyOTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPRequest): VerifyOTPRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPRequest;
  static deserializeBinaryFromReader(message: VerifyOTPRequest, reader: jspb.BinaryReader): VerifyOTPRequest;
}

export namespace VerifyOTPRequest {
  export type AsObject = {
    businessEmailAddress: string,
    otp: string,
    purpose: OtpGenerationPurpose,
  }
}

export enum OtpGenerationPurpose { 
  OTP_GEN_UNSPECIFIED = 0,
  OTP_GEN_SIGNUP = 1,
  OTP_GEN_TRANSACTION = 2,
}
