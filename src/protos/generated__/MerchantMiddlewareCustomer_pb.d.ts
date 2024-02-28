import * as jspb from 'google-protobuf'



export class MerchantMiddlewareEmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantMiddlewareEmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantMiddlewareEmptyMessage): MerchantMiddlewareEmptyMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantMiddlewareEmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantMiddlewareEmptyMessage;
  static deserializeBinaryFromReader(message: MerchantMiddlewareEmptyMessage, reader: jspb.BinaryReader): MerchantMiddlewareEmptyMessage;
}

export namespace MerchantMiddlewareEmptyMessage {
  export type AsObject = {
  }
}

export class SuccessMessageMerchantMiddleware extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SuccessMessageMerchantMiddleware;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): SuccessMessageMerchantMiddleware;

  getMessage(): string;
  setMessage(value: string): SuccessMessageMerchantMiddleware;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): SuccessMessageMerchantMiddleware;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): SuccessMessageMerchantMiddleware;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessMessageMerchantMiddleware.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessMessageMerchantMiddleware): SuccessMessageMerchantMiddleware.AsObject;
  static serializeBinaryToWriter(message: SuccessMessageMerchantMiddleware, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessMessageMerchantMiddleware;
  static deserializeBinaryFromReader(message: SuccessMessageMerchantMiddleware, reader: jspb.BinaryReader): SuccessMessageMerchantMiddleware;
}

export namespace SuccessMessageMerchantMiddleware {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
    paypartnerid: string,
  }
}

export class MerchantCustomerIdRequestMessage extends jspb.Message {
  getMerchantcustomeruserid(): string;
  setMerchantcustomeruserid(value: string): MerchantCustomerIdRequestMessage;

  getCid(): string;
  setCid(value: string): MerchantCustomerIdRequestMessage;

  getCustomername(): string;
  setCustomername(value: string): MerchantCustomerIdRequestMessage;

  getMobileno(): string;
  setMobileno(value: string): MerchantCustomerIdRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerIdRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerIdRequestMessage): MerchantCustomerIdRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerIdRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerIdRequestMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerIdRequestMessage, reader: jspb.BinaryReader): MerchantCustomerIdRequestMessage;
}

export namespace MerchantCustomerIdRequestMessage {
  export type AsObject = {
    merchantcustomeruserid: string,
    cid: string,
    customername: string,
    mobileno: string,
  }
}

export class MerchantCustomerSuspendCloseRequestMessage extends jspb.Message {
  getMerchantcustomeruserid(): string;
  setMerchantcustomeruserid(value: string): MerchantCustomerSuspendCloseRequestMessage;

  getReasonforsuspensionorclose(): string;
  setReasonforsuspensionorclose(value: string): MerchantCustomerSuspendCloseRequestMessage;

  getMerchantcustomerstatus(): string;
  setMerchantcustomerstatus(value: string): MerchantCustomerSuspendCloseRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerSuspendCloseRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerSuspendCloseRequestMessage): MerchantCustomerSuspendCloseRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerSuspendCloseRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerSuspendCloseRequestMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerSuspendCloseRequestMessage, reader: jspb.BinaryReader): MerchantCustomerSuspendCloseRequestMessage;
}

export namespace MerchantCustomerSuspendCloseRequestMessage {
  export type AsObject = {
    merchantcustomeruserid: string,
    reasonforsuspensionorclose: string,
    merchantcustomerstatus: string,
  }
}

export class UsersByCIDRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): UsersByCIDRequestMessage;

  getSubscriptionstatus(): string;
  setSubscriptionstatus(value: string): UsersByCIDRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersByCIDRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UsersByCIDRequestMessage): UsersByCIDRequestMessage.AsObject;
  static serializeBinaryToWriter(message: UsersByCIDRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersByCIDRequestMessage;
  static deserializeBinaryFromReader(message: UsersByCIDRequestMessage, reader: jspb.BinaryReader): UsersByCIDRequestMessage;
}

export namespace UsersByCIDRequestMessage {
  export type AsObject = {
    countrycode: string,
    subscriptionstatus: string,
  }
}

export class UsersByCIDMessage extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): UsersByCIDMessage;

  getMobilenumber(): string;
  setMobilenumber(value: string): UsersByCIDMessage;

  getCustomernumber(): string;
  setCustomernumber(value: string): UsersByCIDMessage;

  getCid(): string;
  setCid(value: string): UsersByCIDMessage;

  getAccountnumber(): string;
  setAccountnumber(value: string): UsersByCIDMessage;

  getSubscriptionussd(): string;
  setSubscriptionussd(value: string): UsersByCIDMessage;

  getCustomernameatregistration(): string;
  setCustomernameatregistration(value: string): UsersByCIDMessage;

  getMakerid(): string;
  setMakerid(value: string): UsersByCIDMessage;

  getMakedatetime(): string;
  setMakedatetime(value: string): UsersByCIDMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersByCIDMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UsersByCIDMessage): UsersByCIDMessage.AsObject;
  static serializeBinaryToWriter(message: UsersByCIDMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersByCIDMessage;
  static deserializeBinaryFromReader(message: UsersByCIDMessage, reader: jspb.BinaryReader): UsersByCIDMessage;
}

export namespace UsersByCIDMessage {
  export type AsObject = {
    userid: string,
    mobilenumber: string,
    customernumber: string,
    cid: string,
    accountnumber: string,
    subscriptionussd: string,
    customernameatregistration: string,
    makerid: string,
    makedatetime: string,
  }
}

export class UsersUssdByCIDListMessage extends jspb.Message {
  getUserslistList(): Array<UsersByCIDMessage>;
  setUserslistList(value: Array<UsersByCIDMessage>): UsersUssdByCIDListMessage;
  clearUserslistList(): UsersUssdByCIDListMessage;
  addUserslist(value?: UsersByCIDMessage, index?: number): UsersByCIDMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersUssdByCIDListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UsersUssdByCIDListMessage): UsersUssdByCIDListMessage.AsObject;
  static serializeBinaryToWriter(message: UsersUssdByCIDListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersUssdByCIDListMessage;
  static deserializeBinaryFromReader(message: UsersUssdByCIDListMessage, reader: jspb.BinaryReader): UsersUssdByCIDListMessage;
}

export namespace UsersUssdByCIDListMessage {
  export type AsObject = {
    userslistList: Array<UsersByCIDMessage.AsObject>,
  }
}

export class AcctToAcctTransRequestMessage extends jspb.Message {
  getMerchantid(): string;
  setMerchantid(value: string): AcctToAcctTransRequestMessage;

  getStartdate(): string;
  setStartdate(value: string): AcctToAcctTransRequestMessage;

  getEnddate(): string;
  setEnddate(value: string): AcctToAcctTransRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): AcctToAcctTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcctToAcctTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AcctToAcctTransRequestMessage): AcctToAcctTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: AcctToAcctTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcctToAcctTransRequestMessage;
  static deserializeBinaryFromReader(message: AcctToAcctTransRequestMessage, reader: jspb.BinaryReader): AcctToAcctTransRequestMessage;
}

export namespace AcctToAcctTransRequestMessage {
  export type AsObject = {
    merchantid: string,
    startdate: string,
    enddate: string,
    countrycode: string,
  }
}

export class AcctToAcctTransMessage extends jspb.Message {
  getSourceaccount(): string;
  setSourceaccount(value: string): AcctToAcctTransMessage;

  getSourceaccountname(): string;
  setSourceaccountname(value: string): AcctToAcctTransMessage;

  getTranstype(): string;
  setTranstype(value: string): AcctToAcctTransMessage;

  getAmount(): string;
  setAmount(value: string): AcctToAcctTransMessage;

  getDestinationaccount(): string;
  setDestinationaccount(value: string): AcctToAcctTransMessage;

  getDestinationaccountname(): string;
  setDestinationaccountname(value: string): AcctToAcctTransMessage;

  getTransstatus(): string;
  setTransstatus(value: string): AcctToAcctTransMessage;

  getUserid(): string;
  setUserid(value: string): AcctToAcctTransMessage;

  getBatchno(): string;
  setBatchno(value: string): AcctToAcctTransMessage;

  getValuedate(): string;
  setValuedate(value: string): AcctToAcctTransMessage;

  getTranstime(): string;
  setTranstime(value: string): AcctToAcctTransMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcctToAcctTransMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AcctToAcctTransMessage): AcctToAcctTransMessage.AsObject;
  static serializeBinaryToWriter(message: AcctToAcctTransMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcctToAcctTransMessage;
  static deserializeBinaryFromReader(message: AcctToAcctTransMessage, reader: jspb.BinaryReader): AcctToAcctTransMessage;
}

export namespace AcctToAcctTransMessage {
  export type AsObject = {
    sourceaccount: string,
    sourceaccountname: string,
    transtype: string,
    amount: string,
    destinationaccount: string,
    destinationaccountname: string,
    transstatus: string,
    userid: string,
    batchno: string,
    valuedate: string,
    transtime: string,
  }
}

export class AcctToAcctTransListMessage extends jspb.Message {
  getTranslistList(): Array<AcctToAcctTransMessage>;
  setTranslistList(value: Array<AcctToAcctTransMessage>): AcctToAcctTransListMessage;
  clearTranslistList(): AcctToAcctTransListMessage;
  addTranslist(value?: AcctToAcctTransMessage, index?: number): AcctToAcctTransMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcctToAcctTransListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AcctToAcctTransListMessage): AcctToAcctTransListMessage.AsObject;
  static serializeBinaryToWriter(message: AcctToAcctTransListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcctToAcctTransListMessage;
  static deserializeBinaryFromReader(message: AcctToAcctTransListMessage, reader: jspb.BinaryReader): AcctToAcctTransListMessage;
}

export namespace AcctToAcctTransListMessage {
  export type AsObject = {
    translistList: Array<AcctToAcctTransMessage.AsObject>,
  }
}

export class MerchantCustomerPINChangeMessage extends jspb.Message {
  getTid(): number;
  setTid(value: number): MerchantCustomerPINChangeMessage;

  getMobileno(): string;
  setMobileno(value: string): MerchantCustomerPINChangeMessage;

  getRequeststatus(): string;
  setRequeststatus(value: string): MerchantCustomerPINChangeMessage;

  getRequestdate(): string;
  setRequestdate(value: string): MerchantCustomerPINChangeMessage;

  getCustomername(): string;
  setCustomername(value: string): MerchantCustomerPINChangeMessage;

  getCid(): string;
  setCid(value: string): MerchantCustomerPINChangeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerPINChangeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerPINChangeMessage): MerchantCustomerPINChangeMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerPINChangeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerPINChangeMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerPINChangeMessage, reader: jspb.BinaryReader): MerchantCustomerPINChangeMessage;
}

export namespace MerchantCustomerPINChangeMessage {
  export type AsObject = {
    tid: number,
    mobileno: string,
    requeststatus: string,
    requestdate: string,
    customername: string,
    cid: string,
  }
}

export class MerchantCustomerPINChangeListMessage extends jspb.Message {
  getCustlistList(): Array<MerchantCustomerPINChangeMessage>;
  setCustlistList(value: Array<MerchantCustomerPINChangeMessage>): MerchantCustomerPINChangeListMessage;
  clearCustlistList(): MerchantCustomerPINChangeListMessage;
  addCustlist(value?: MerchantCustomerPINChangeMessage, index?: number): MerchantCustomerPINChangeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerPINChangeListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerPINChangeListMessage): MerchantCustomerPINChangeListMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerPINChangeListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerPINChangeListMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerPINChangeListMessage, reader: jspb.BinaryReader): MerchantCustomerPINChangeListMessage;
}

export namespace MerchantCustomerPINChangeListMessage {
  export type AsObject = {
    custlistList: Array<MerchantCustomerPINChangeMessage.AsObject>,
  }
}

export class MerchantCustomerPINChangeApproveMessage extends jspb.Message {
  getTid(): number;
  setTid(value: number): MerchantCustomerPINChangeApproveMessage;

  getSubscriptionstatus(): string;
  setSubscriptionstatus(value: string): MerchantCustomerPINChangeApproveMessage;

  getApproveordisapprove(): string;
  setApproveordisapprove(value: string): MerchantCustomerPINChangeApproveMessage;

  getCid(): string;
  setCid(value: string): MerchantCustomerPINChangeApproveMessage;

  getMobileno(): string;
  setMobileno(value: string): MerchantCustomerPINChangeApproveMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerPINChangeApproveMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerPINChangeApproveMessage): MerchantCustomerPINChangeApproveMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerPINChangeApproveMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerPINChangeApproveMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerPINChangeApproveMessage, reader: jspb.BinaryReader): MerchantCustomerPINChangeApproveMessage;
}

export namespace MerchantCustomerPINChangeApproveMessage {
  export type AsObject = {
    tid: number,
    subscriptionstatus: string,
    approveordisapprove: string,
    cid: string,
    mobileno: string,
  }
}

export class MerchantCustomerTerminateServiceMessage extends jspb.Message {
  getMobileno(): string;
  setMobileno(value: string): MerchantCustomerTerminateServiceMessage;

  getCid(): string;
  setCid(value: string): MerchantCustomerTerminateServiceMessage;

  getTerminationstatus(): string;
  setTerminationstatus(value: string): MerchantCustomerTerminateServiceMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerTerminateServiceMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerTerminateServiceMessage): MerchantCustomerTerminateServiceMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerTerminateServiceMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerTerminateServiceMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerTerminateServiceMessage, reader: jspb.BinaryReader): MerchantCustomerTerminateServiceMessage;
}

export namespace MerchantCustomerTerminateServiceMessage {
  export type AsObject = {
    mobileno: string,
    cid: string,
    terminationstatus: string,
  }
}

export class MerchantCustomerTerminateServiceResponseMessage extends jspb.Message {
  getMobileno(): string;
  setMobileno(value: string): MerchantCustomerTerminateServiceResponseMessage;

  getCid(): string;
  setCid(value: string): MerchantCustomerTerminateServiceResponseMessage;

  getCustomername(): string;
  setCustomername(value: string): MerchantCustomerTerminateServiceResponseMessage;

  getMakerid(): string;
  setMakerid(value: string): MerchantCustomerTerminateServiceResponseMessage;

  getRequestdate(): string;
  setRequestdate(value: string): MerchantCustomerTerminateServiceResponseMessage;

  getTid(): number;
  setTid(value: number): MerchantCustomerTerminateServiceResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerTerminateServiceResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerTerminateServiceResponseMessage): MerchantCustomerTerminateServiceResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerTerminateServiceResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerTerminateServiceResponseMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerTerminateServiceResponseMessage, reader: jspb.BinaryReader): MerchantCustomerTerminateServiceResponseMessage;
}

export namespace MerchantCustomerTerminateServiceResponseMessage {
  export type AsObject = {
    mobileno: string,
    cid: string,
    customername: string,
    makerid: string,
    requestdate: string,
    tid: number,
  }
}

export class MerchantCustomerTerminateServiceListResponseMessage extends jspb.Message {
  getCustlistList(): Array<MerchantCustomerTerminateServiceResponseMessage>;
  setCustlistList(value: Array<MerchantCustomerTerminateServiceResponseMessage>): MerchantCustomerTerminateServiceListResponseMessage;
  clearCustlistList(): MerchantCustomerTerminateServiceListResponseMessage;
  addCustlist(value?: MerchantCustomerTerminateServiceResponseMessage, index?: number): MerchantCustomerTerminateServiceResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerTerminateServiceListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerTerminateServiceListResponseMessage): MerchantCustomerTerminateServiceListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerTerminateServiceListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerTerminateServiceListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerTerminateServiceListResponseMessage, reader: jspb.BinaryReader): MerchantCustomerTerminateServiceListResponseMessage;
}

export namespace MerchantCustomerTerminateServiceListResponseMessage {
  export type AsObject = {
    custlistList: Array<MerchantCustomerTerminateServiceResponseMessage.AsObject>,
  }
}

