import * as jspb from 'google-protobuf'



export class SendOTPRequest extends jspb.Message {
  getBusinessEmailAddress(): string;
  setBusinessEmailAddress(value: string): SendOTPRequest;

  getPurpose(): OtpGenerationPurpose;
  setPurpose(value: OtpGenerationPurpose): SendOTPRequest;

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
    purpose: OtpGenerationPurpose,
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
