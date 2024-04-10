import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class AccessTokenResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): AccessTokenResponse;

  getMessage(): string;
  setMessage(value: string): AccessTokenResponse;

  getToken(): string;
  setToken(value: string): AccessTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccessTokenResponse): AccessTokenResponse.AsObject;
  static serializeBinaryToWriter(message: AccessTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessTokenResponse;
  static deserializeBinaryFromReader(message: AccessTokenResponse, reader: jspb.BinaryReader): AccessTokenResponse;
}

export namespace AccessTokenResponse {
  export type AsObject = {
    status: boolean,
    message: string,
    token: string,
  }
}

export class GetAccountInfoRequest extends jspb.Message {
  getCustomeracctno(): string;
  setCustomeracctno(value: string): GetAccountInfoRequest;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): GetAccountInfoRequest;

  getLanguageid(): string;
  setLanguageid(value: string): GetAccountInfoRequest;

  getCountrycode(): string;
  setCountrycode(value: string): GetAccountInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountInfoRequest): GetAccountInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountInfoRequest;
  static deserializeBinaryFromReader(message: GetAccountInfoRequest, reader: jspb.BinaryReader): GetAccountInfoRequest;
}

export namespace GetAccountInfoRequest {
  export type AsObject = {
    customeracctno: string,
    paypartnerserviceid: string,
    languageid: string,
    countrycode: string,
  }
}

export class GetAccountInfoResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): GetAccountInfoResponse;

  getMessage(): string;
  setMessage(value: string): GetAccountInfoResponse;

  getAccountname(): string;
  setAccountname(value: string): GetAccountInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountInfoResponse): GetAccountInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountInfoResponse;
  static deserializeBinaryFromReader(message: GetAccountInfoResponse, reader: jspb.BinaryReader): GetAccountInfoResponse;
}

export namespace GetAccountInfoResponse {
  export type AsObject = {
    status: boolean,
    message: string,
    accountname: string,
  }
}

export class GetServiceListRequest extends jspb.Message {
  getLanguageid(): string;
  setLanguageid(value: string): GetServiceListRequest;

  getCountrycode(): string;
  setCountrycode(value: string): GetServiceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceListRequest): GetServiceListRequest.AsObject;
  static serializeBinaryToWriter(message: GetServiceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceListRequest;
  static deserializeBinaryFromReader(message: GetServiceListRequest, reader: jspb.BinaryReader): GetServiceListRequest;
}

export namespace GetServiceListRequest {
  export type AsObject = {
    languageid: string,
    countrycode: string,
  }
}

export class ServicePayload extends jspb.Message {
  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): ServicePayload;

  getPaypartnergroupid(): number;
  setPaypartnergroupid(value: number): ServicePayload;

  getAppname(): string;
  setAppname(value: string): ServicePayload;

  getCountrycode(): string;
  setCountrycode(value: string): ServicePayload;

  getCountryname(): string;
  setCountryname(value: string): ServicePayload;

  getPaypartnergroupurl(): string;
  setPaypartnergroupurl(value: string): ServicePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ServicePayload): ServicePayload.AsObject;
  static serializeBinaryToWriter(message: ServicePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicePayload;
  static deserializeBinaryFromReader(message: ServicePayload, reader: jspb.BinaryReader): ServicePayload;
}

export namespace ServicePayload {
  export type AsObject = {
    paypartnertypeid: number,
    paypartnergroupid: number,
    appname: string,
    countrycode: string,
    countryname: string,
    paypartnergroupurl: string,
  }
}

export class GetServiceListResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): GetServiceListResponse;

  getMessage(): string;
  setMessage(value: string): GetServiceListResponse;

  getPaymenttypelistList(): Array<ServicePayload>;
  setPaymenttypelistList(value: Array<ServicePayload>): GetServiceListResponse;
  clearPaymenttypelistList(): GetServiceListResponse;
  addPaymenttypelist(value?: ServicePayload, index?: number): ServicePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceListResponse): GetServiceListResponse.AsObject;
  static serializeBinaryToWriter(message: GetServiceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceListResponse;
  static deserializeBinaryFromReader(message: GetServiceListResponse, reader: jspb.BinaryReader): GetServiceListResponse;
}

export namespace GetServiceListResponse {
  export type AsObject = {
    status: boolean,
    message: string,
    paymenttypelistList: Array<ServicePayload.AsObject>,
  }
}

export class TransferRequest extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): TransferRequest;

  getAmount(): number;
  setAmount(value: number): TransferRequest;

  getAccountnoorcardnoormsisdn(): string;
  setAccountnoorcardnoormsisdn(value: string): TransferRequest;

  getAccountname(): string;
  setAccountname(value: string): TransferRequest;

  getTransactionid(): string;
  setTransactionid(value: string): TransferRequest;

  getNarration(): string;
  setNarration(value: string): TransferRequest;

  getTranscurrencyiso(): string;
  setTranscurrencyiso(value: string): TransferRequest;

  getExpirydatemonth(): number;
  setExpirydatemonth(value: number): TransferRequest;

  getExpirydateyear(): number;
  setExpirydateyear(value: number): TransferRequest;

  getCvv(): number;
  setCvv(value: number): TransferRequest;

  getLanguageid(): string;
  setLanguageid(value: string): TransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRequest): TransferRequest.AsObject;
  static serializeBinaryToWriter(message: TransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRequest;
  static deserializeBinaryFromReader(message: TransferRequest, reader: jspb.BinaryReader): TransferRequest;
}

export namespace TransferRequest {
  export type AsObject = {
    paypartnerserviceid: string,
    amount: number,
    accountnoorcardnoormsisdn: string,
    accountname: string,
    transactionid: string,
    narration: string,
    transcurrencyiso: string,
    expirydatemonth: number,
    expirydateyear: number,
    cvv: number,
    languageid: string,
  }
}

export class TransferResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): TransferResponse;

  getMessage(): string;
  setMessage(value: string): TransferResponse;

  getReferenceno(): string;
  setReferenceno(value: string): TransferResponse;

  getTransstatus(): string;
  setTransstatus(value: string): TransferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponse): TransferResponse.AsObject;
  static serializeBinaryToWriter(message: TransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponse;
  static deserializeBinaryFromReader(message: TransferResponse, reader: jspb.BinaryReader): TransferResponse;
}

export namespace TransferResponse {
  export type AsObject = {
    status: boolean,
    message: string,
    referenceno: string,
    transstatus: string,
  }
}

export class QueryTransferStatusRequest extends jspb.Message {
  getTransactionid(): string;
  setTransactionid(value: string): QueryTransferStatusRequest;

  getLanguageid(): string;
  setLanguageid(value: string): QueryTransferStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTransferStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTransferStatusRequest): QueryTransferStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTransferStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTransferStatusRequest;
  static deserializeBinaryFromReader(message: QueryTransferStatusRequest, reader: jspb.BinaryReader): QueryTransferStatusRequest;
}

export namespace QueryTransferStatusRequest {
  export type AsObject = {
    transactionid: string,
    languageid: string,
  }
}

export class QueryTransferStatusTransferResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): QueryTransferStatusTransferResponse;

  getMessage(): string;
  setMessage(value: string): QueryTransferStatusTransferResponse;

  getReferenceno(): string;
  setReferenceno(value: string): QueryTransferStatusTransferResponse;

  getTransstatus(): string;
  setTransstatus(value: string): QueryTransferStatusTransferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTransferStatusTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTransferStatusTransferResponse): QueryTransferStatusTransferResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTransferStatusTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTransferStatusTransferResponse;
  static deserializeBinaryFromReader(message: QueryTransferStatusTransferResponse, reader: jspb.BinaryReader): QueryTransferStatusTransferResponse;
}

export namespace QueryTransferStatusTransferResponse {
  export type AsObject = {
    status: boolean,
    message: string,
    referenceno: string,
    transstatus: string,
  }
}

export class TransferCallbackResponse extends jspb.Message {
  getMerchantid(): string;
  setMerchantid(value: string): TransferCallbackResponse;

  getTransactionrefno(): string;
  setTransactionrefno(value: string): TransferCallbackResponse;

  getTranstypedrcr(): string;
  setTranstypedrcr(value: string): TransferCallbackResponse;

  getStatus(): boolean;
  setStatus(value: boolean): TransferCallbackResponse;

  getMiddlewaretransid(): string;
  setMiddlewaretransid(value: string): TransferCallbackResponse;

  getEganowtransrefno(): string;
  setEganowtransrefno(value: string): TransferCallbackResponse;

  getTransactionstatus(): string;
  setTransactionstatus(value: string): TransferCallbackResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallbackResponse): TransferCallbackResponse.AsObject;
  static serializeBinaryToWriter(message: TransferCallbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallbackResponse;
  static deserializeBinaryFromReader(message: TransferCallbackResponse, reader: jspb.BinaryReader): TransferCallbackResponse;
}

export namespace TransferCallbackResponse {
  export type AsObject = {
    merchantid: string,
    transactionrefno: string,
    transtypedrcr: string,
    status: boolean,
    middlewaretransid: string,
    eganowtransrefno: string,
    transactionstatus: string,
  }
}

