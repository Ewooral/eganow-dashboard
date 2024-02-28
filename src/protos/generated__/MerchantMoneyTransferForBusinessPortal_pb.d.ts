import * as jspb from 'google-protobuf'



export class BillPaymentEmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillPaymentEmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BillPaymentEmptyMessage): BillPaymentEmptyMessage.AsObject;
  static serializeBinaryToWriter(message: BillPaymentEmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillPaymentEmptyMessage;
  static deserializeBinaryFromReader(message: BillPaymentEmptyMessage, reader: jspb.BinaryReader): BillPaymentEmptyMessage;
}

export namespace BillPaymentEmptyMessage {
  export type AsObject = {
  }
}

export class BillPaymentCountryMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): BillPaymentCountryMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BillPaymentCountryMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillPaymentCountryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BillPaymentCountryMessage): BillPaymentCountryMessage.AsObject;
  static serializeBinaryToWriter(message: BillPaymentCountryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillPaymentCountryMessage;
  static deserializeBinaryFromReader(message: BillPaymentCountryMessage, reader: jspb.BinaryReader): BillPaymentCountryMessage;
}

export namespace BillPaymentCountryMessage {
  export type AsObject = {
    countrycode: string,
    languageid: string,
  }
}

export class MerchantServicesRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): MerchantServicesRequestMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantServicesRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantServicesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServicesRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServicesRequestMessage): MerchantServicesRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServicesRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServicesRequestMessage;
  static deserializeBinaryFromReader(message: MerchantServicesRequestMessage, reader: jspb.BinaryReader): MerchantServicesRequestMessage;
}

export namespace MerchantServicesRequestMessage {
  export type AsObject = {
    countrycode: string,
    paypartnerserviceid: string,
    languageid: string,
  }
}

export class SuccessMessageMerchantTrans extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SuccessMessageMerchantTrans;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): SuccessMessageMerchantTrans;

  getMessage(): string;
  setMessage(value: string): SuccessMessageMerchantTrans;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): SuccessMessageMerchantTrans;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessMessageMerchantTrans.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessMessageMerchantTrans): SuccessMessageMerchantTrans.AsObject;
  static serializeBinaryToWriter(message: SuccessMessageMerchantTrans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessMessageMerchantTrans;
  static deserializeBinaryFromReader(message: SuccessMessageMerchantTrans, reader: jspb.BinaryReader): SuccessMessageMerchantTrans;
}

export namespace SuccessMessageMerchantTrans {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
  }
}

export class BillPaymentTransRequestMessage extends jspb.Message {
  getDestinationpaypartnerserviceid(): string;
  setDestinationpaypartnerserviceid(value: string): BillPaymentTransRequestMessage;

  getDestinationaccountno(): string;
  setDestinationaccountno(value: string): BillPaymentTransRequestMessage;

  getDestinationaccountname(): string;
  setDestinationaccountname(value: string): BillPaymentTransRequestMessage;

  getTransamount(): number;
  setTransamount(value: number): BillPaymentTransRequestMessage;

  getSourcepaypartnerserviceid(): string;
  setSourcepaypartnerserviceid(value: string): BillPaymentTransRequestMessage;

  getSourceaccountno(): string;
  setSourceaccountno(value: string): BillPaymentTransRequestMessage;

  getSourceaccountname(): string;
  setSourceaccountname(value: string): BillPaymentTransRequestMessage;

  getMobileorweborussd(): string;
  setMobileorweborussd(value: string): BillPaymentTransRequestMessage;

  getOriginatingpaypartnerserviceid(): string;
  setOriginatingpaypartnerserviceid(value: string): BillPaymentTransRequestMessage;

  getTransreference(): string;
  setTransreference(value: string): BillPaymentTransRequestMessage;

  getMerchanttransrefnoinmerchantsystem(): string;
  setMerchanttransrefnoinmerchantsystem(value: string): BillPaymentTransRequestMessage;

  getMerchantuniqueidinmerchantsystem(): string;
  setMerchantuniqueidinmerchantsystem(value: string): BillPaymentTransRequestMessage;

  getMerchantcolumnonevalue(): string;
  setMerchantcolumnonevalue(value: string): BillPaymentTransRequestMessage;

  getMerchantcolumntwovalue(): string;
  setMerchantcolumntwovalue(value: string): BillPaymentTransRequestMessage;

  getMerchantcolumnthreevalue(): string;
  setMerchantcolumnthreevalue(value: string): BillPaymentTransRequestMessage;

  getIscolumnonerequiredyesnona(): string;
  setIscolumnonerequiredyesnona(value: string): BillPaymentTransRequestMessage;

  getIscolumntworequiredyesnona(): string;
  setIscolumntworequiredyesnona(value: string): BillPaymentTransRequestMessage;

  getIscolumnthreerequiredyesnona(): string;
  setIscolumnthreerequiredyesnona(value: string): BillPaymentTransRequestMessage;

  getSendercountrycode(): string;
  setSendercountrycode(value: string): BillPaymentTransRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): BillPaymentTransRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BillPaymentTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillPaymentTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BillPaymentTransRequestMessage): BillPaymentTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: BillPaymentTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillPaymentTransRequestMessage;
  static deserializeBinaryFromReader(message: BillPaymentTransRequestMessage, reader: jspb.BinaryReader): BillPaymentTransRequestMessage;
}

export namespace BillPaymentTransRequestMessage {
  export type AsObject = {
    destinationpaypartnerserviceid: string,
    destinationaccountno: string,
    destinationaccountname: string,
    transamount: number,
    sourcepaypartnerserviceid: string,
    sourceaccountno: string,
    sourceaccountname: string,
    mobileorweborussd: string,
    originatingpaypartnerserviceid: string,
    transreference: string,
    merchanttransrefnoinmerchantsystem: string,
    merchantuniqueidinmerchantsystem: string,
    merchantcolumnonevalue: string,
    merchantcolumntwovalue: string,
    merchantcolumnthreevalue: string,
    iscolumnonerequiredyesnona: string,
    iscolumntworequiredyesnona: string,
    iscolumnthreerequiredyesnona: string,
    sendercountrycode: string,
    beneficiarycountrycode: string,
    languageid: string,
  }
}

export class TransStatusRequestMessage extends jspb.Message {
  getMerchanttransrefno(): string;
  setMerchanttransrefno(value: string): TransStatusRequestMessage;

  getPartnerserviceid(): string;
  setPartnerserviceid(value: string): TransStatusRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransStatusRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TransStatusRequestMessage): TransStatusRequestMessage.AsObject;
  static serializeBinaryToWriter(message: TransStatusRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransStatusRequestMessage;
  static deserializeBinaryFromReader(message: TransStatusRequestMessage, reader: jspb.BinaryReader): TransStatusRequestMessage;
}

export namespace TransStatusRequestMessage {
  export type AsObject = {
    merchanttransrefno: string,
    partnerserviceid: string,
  }
}

export class TransStatusResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): TransStatusResponseMessage;

  getTransactionstatus(): string;
  setTransactionstatus(value: string): TransStatusResponseMessage;

  getMessage(): string;
  setMessage(value: string): TransStatusResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransStatusResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TransStatusResponseMessage): TransStatusResponseMessage.AsObject;
  static serializeBinaryToWriter(message: TransStatusResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransStatusResponseMessage;
  static deserializeBinaryFromReader(message: TransStatusResponseMessage, reader: jspb.BinaryReader): TransStatusResponseMessage;
}

export namespace TransStatusResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    transactionstatus: string,
    message: string,
  }
}

export class MerchantServiceAccountBalMessage extends jspb.Message {
  getAccountno(): string;
  setAccountno(value: string): MerchantServiceAccountBalMessage;

  getDashboardname(): string;
  setDashboardname(value: string): MerchantServiceAccountBalMessage;

  getAvailablebalance(): number;
  setAvailablebalance(value: number): MerchantServiceAccountBalMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): MerchantServiceAccountBalMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantServiceAccountBalMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceAccountBalMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceAccountBalMessage): MerchantServiceAccountBalMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceAccountBalMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceAccountBalMessage;
  static deserializeBinaryFromReader(message: MerchantServiceAccountBalMessage, reader: jspb.BinaryReader): MerchantServiceAccountBalMessage;
}

export namespace MerchantServiceAccountBalMessage {
  export type AsObject = {
    accountno: string,
    dashboardname: string,
    availablebalance: number,
    paypartnerservicename: string,
    currencyiso: string,
  }
}

export class MerchantServiceAccountBalListMessage extends jspb.Message {
  getBalancelistList(): Array<MerchantServiceAccountBalMessage>;
  setBalancelistList(value: Array<MerchantServiceAccountBalMessage>): MerchantServiceAccountBalListMessage;
  clearBalancelistList(): MerchantServiceAccountBalListMessage;
  addBalancelist(value?: MerchantServiceAccountBalMessage, index?: number): MerchantServiceAccountBalMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceAccountBalListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceAccountBalListMessage): MerchantServiceAccountBalListMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceAccountBalListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceAccountBalListMessage;
  static deserializeBinaryFromReader(message: MerchantServiceAccountBalListMessage, reader: jspb.BinaryReader): MerchantServiceAccountBalListMessage;
}

export namespace MerchantServiceAccountBalListMessage {
  export type AsObject = {
    balancelistList: Array<MerchantServiceAccountBalMessage.AsObject>,
  }
}

export class MerchantServiceTransRequestMessage extends jspb.Message {
  getPartnerserviceid(): string;
  setPartnerserviceid(value: string): MerchantServiceTransRequestMessage;

  getCollectionorpayout(): string;
  setCollectionorpayout(value: string): MerchantServiceTransRequestMessage;

  getFromdate(): string;
  setFromdate(value: string): MerchantServiceTransRequestMessage;

  getTodate(): string;
  setTodate(value: string): MerchantServiceTransRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantServiceTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceTransRequestMessage): MerchantServiceTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceTransRequestMessage;
  static deserializeBinaryFromReader(message: MerchantServiceTransRequestMessage, reader: jspb.BinaryReader): MerchantServiceTransRequestMessage;
}

export namespace MerchantServiceTransRequestMessage {
  export type AsObject = {
    partnerserviceid: string,
    collectionorpayout: string,
    fromdate: string,
    todate: string,
    countrycode: string,
  }
}

export class MerchantServicesResponseMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantServicesResponseMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): MerchantServicesResponseMessage;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): MerchantServicesResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantServicesResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantServicesResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServicesResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServicesResponseMessage): MerchantServicesResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServicesResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServicesResponseMessage;
  static deserializeBinaryFromReader(message: MerchantServicesResponseMessage, reader: jspb.BinaryReader): MerchantServicesResponseMessage;
}

export namespace MerchantServicesResponseMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    paypartnerservicename: string,
    paypartnerid: string,
    currencyiso: string,
    countrycode: string,
  }
}

export class MerchantServicesListResponseMessage extends jspb.Message {
  getPaypartnerserviceslistList(): Array<MerchantServicesResponseMessage>;
  setPaypartnerserviceslistList(value: Array<MerchantServicesResponseMessage>): MerchantServicesListResponseMessage;
  clearPaypartnerserviceslistList(): MerchantServicesListResponseMessage;
  addPaypartnerserviceslist(value?: MerchantServicesResponseMessage, index?: number): MerchantServicesResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServicesListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServicesListResponseMessage): MerchantServicesListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServicesListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServicesListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantServicesListResponseMessage, reader: jspb.BinaryReader): MerchantServicesListResponseMessage;
}

export namespace MerchantServicesListResponseMessage {
  export type AsObject = {
    paypartnerserviceslistList: Array<MerchantServicesResponseMessage.AsObject>,
  }
}

export class MerchantServiceTransMessage extends jspb.Message {
  getValuedate(): string;
  setValuedate(value: string): MerchantServiceTransMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantServiceTransMessage;

  getTransamount(): number;
  setTransamount(value: number): MerchantServiceTransMessage;

  getCommissionamt(): number;
  setCommissionamt(value: number): MerchantServiceTransMessage;

  getMerchantcollectionorpayout(): string;
  setMerchantcollectionorpayout(value: string): MerchantServiceTransMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): MerchantServiceTransMessage;

  getMerchanttransrefnoinmerchantsystem(): string;
  setMerchanttransrefnoinmerchantsystem(value: string): MerchantServiceTransMessage;

  getSourceaccountno(): string;
  setSourceaccountno(value: string): MerchantServiceTransMessage;

  getSourceaccountname(): string;
  setSourceaccountname(value: string): MerchantServiceTransMessage;

  getRecipientaccountno(): string;
  setRecipientaccountno(value: string): MerchantServiceTransMessage;

  getRecipientname(): string;
  setRecipientname(value: string): MerchantServiceTransMessage;

  getGatewaytranstatus(): string;
  setGatewaytranstatus(value: string): MerchantServiceTransMessage;

  getEganowtranstatus(): string;
  setEganowtranstatus(value: string): MerchantServiceTransMessage;

  getTransstatussenttomerchantpendingconfirmed(): string;
  setTransstatussenttomerchantpendingconfirmed(value: string): MerchantServiceTransMessage;

  getEganowtransrefno(): string;
  setEganowtransrefno(value: string): MerchantServiceTransMessage;

  getTranstimes(): string;
  setTranstimes(value: string): MerchantServiceTransMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceTransMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceTransMessage): MerchantServiceTransMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceTransMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceTransMessage;
  static deserializeBinaryFromReader(message: MerchantServiceTransMessage, reader: jspb.BinaryReader): MerchantServiceTransMessage;
}

export namespace MerchantServiceTransMessage {
  export type AsObject = {
    valuedate: string,
    currencyiso: string,
    transamount: number,
    commissionamt: number,
    merchantcollectionorpayout: string,
    paypartnerservicename: string,
    merchanttransrefnoinmerchantsystem: string,
    sourceaccountno: string,
    sourceaccountname: string,
    recipientaccountno: string,
    recipientname: string,
    gatewaytranstatus: string,
    eganowtranstatus: string,
    transstatussenttomerchantpendingconfirmed: string,
    eganowtransrefno: string,
    transtimes: string,
  }
}

export class MerchantServiceTransListMessage extends jspb.Message {
  getTranslistList(): Array<MerchantServiceTransMessage>;
  setTranslistList(value: Array<MerchantServiceTransMessage>): MerchantServiceTransListMessage;
  clearTranslistList(): MerchantServiceTransListMessage;
  addTranslist(value?: MerchantServiceTransMessage, index?: number): MerchantServiceTransMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceTransListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceTransListMessage): MerchantServiceTransListMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceTransListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceTransListMessage;
  static deserializeBinaryFromReader(message: MerchantServiceTransListMessage, reader: jspb.BinaryReader): MerchantServiceTransListMessage;
}

export namespace MerchantServiceTransListMessage {
  export type AsObject = {
    translistList: Array<MerchantServiceTransMessage.AsObject>,
  }
}

export class MerchantServiceStatementResponseMessage extends jspb.Message {
  getValuedate(): string;
  setValuedate(value: string): MerchantServiceStatementResponseMessage;

  getAccountname(): string;
  setAccountname(value: string): MerchantServiceStatementResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): MerchantServiceStatementResponseMessage;

  getBalance(): number;
  setBalance(value: number): MerchantServiceStatementResponseMessage;

  getDrcr(): string;
  setDrcr(value: string): MerchantServiceStatementResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantServiceStatementResponseMessage;

  getMainorfeeortransfer(): string;
  setMainorfeeortransfer(value: string): MerchantServiceStatementResponseMessage;

  getEganowtransrefno(): string;
  setEganowtransrefno(value: string): MerchantServiceStatementResponseMessage;

  getMainOrReversal(): string;
  setMainOrReversal(value: string): MerchantServiceStatementResponseMessage;

  getMerchanttransrefnoinmerchantsystem(): string;
  setMerchanttransrefnoinmerchantsystem(value: string): MerchantServiceStatementResponseMessage;

  getTid(): number;
  setTid(value: number): MerchantServiceStatementResponseMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MerchantServiceStatementResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceStatementResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceStatementResponseMessage): MerchantServiceStatementResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceStatementResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceStatementResponseMessage;
  static deserializeBinaryFromReader(message: MerchantServiceStatementResponseMessage, reader: jspb.BinaryReader): MerchantServiceStatementResponseMessage;
}

export namespace MerchantServiceStatementResponseMessage {
  export type AsObject = {
    valuedate: string,
    accountname: string,
    transamount: number,
    balance: number,
    drcr: string,
    currencyiso: string,
    mainorfeeortransfer: string,
    eganowtransrefno: string,
    mainOrReversal: string,
    merchanttransrefnoinmerchantsystem: string,
    tid: number,
    transnarration: string,
  }
}

export class MerchantServiceStatementListResponseMessage extends jspb.Message {
  getStatementlistList(): Array<MerchantServiceStatementResponseMessage>;
  setStatementlistList(value: Array<MerchantServiceStatementResponseMessage>): MerchantServiceStatementListResponseMessage;
  clearStatementlistList(): MerchantServiceStatementListResponseMessage;
  addStatementlist(value?: MerchantServiceStatementResponseMessage, index?: number): MerchantServiceStatementResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceStatementListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceStatementListResponseMessage): MerchantServiceStatementListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceStatementListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceStatementListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantServiceStatementListResponseMessage, reader: jspb.BinaryReader): MerchantServiceStatementListResponseMessage;
}

export namespace MerchantServiceStatementListResponseMessage {
  export type AsObject = {
    statementlistList: Array<MerchantServiceStatementResponseMessage.AsObject>,
  }
}

export class MerchantInternalFundTransferInitRequestMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantInternalFundTransferInitRequestMessage;

  getCashortransfertype(): string;
  setCashortransfertype(value: string): MerchantInternalFundTransferInitRequestMessage;

  getTransamount(): number;
  setTransamount(value: number): MerchantInternalFundTransferInitRequestMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MerchantInternalFundTransferInitRequestMessage;

  getMobileorweborussd(): string;
  setMobileorweborussd(value: string): MerchantInternalFundTransferInitRequestMessage;

  getPaypartnerservicecountrycode(): string;
  setPaypartnerservicecountrycode(value: string): MerchantInternalFundTransferInitRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantInternalFundTransferInitRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantInternalFundTransferInitRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantInternalFundTransferInitRequestMessage): MerchantInternalFundTransferInitRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantInternalFundTransferInitRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantInternalFundTransferInitRequestMessage;
  static deserializeBinaryFromReader(message: MerchantInternalFundTransferInitRequestMessage, reader: jspb.BinaryReader): MerchantInternalFundTransferInitRequestMessage;
}

export namespace MerchantInternalFundTransferInitRequestMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    cashortransfertype: string,
    transamount: number,
    transnarration: string,
    mobileorweborussd: string,
    paypartnerservicecountrycode: string,
    languageid: string,
  }
}

export class MerchantFundTransferPendingRequestMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantFundTransferPendingRequestMessage;

  getPaypartnerservicecountrycode(): string;
  setPaypartnerservicecountrycode(value: string): MerchantFundTransferPendingRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantFundTransferPendingRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferPendingRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferPendingRequestMessage): MerchantFundTransferPendingRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferPendingRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferPendingRequestMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferPendingRequestMessage, reader: jspb.BinaryReader): MerchantFundTransferPendingRequestMessage;
}

export namespace MerchantFundTransferPendingRequestMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    paypartnerservicecountrycode: string,
    languageid: string,
  }
}

export class MerchantFundTransferTransResponseMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantFundTransferTransResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantFundTransferTransResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): MerchantFundTransferTransResponseMessage;

  getMakedate(): string;
  setMakedate(value: string): MerchantFundTransferTransResponseMessage;

  getCashortransfertype(): string;
  setCashortransfertype(value: string): MerchantFundTransferTransResponseMessage;

  getTransstatus(): string;
  setTransstatus(value: string): MerchantFundTransferTransResponseMessage;

  getMakerid(): string;
  setMakerid(value: string): MerchantFundTransferTransResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantFundTransferTransResponseMessage;

  getJournalrefno(): string;
  setJournalrefno(value: string): MerchantFundTransferTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferTransResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferTransResponseMessage): MerchantFundTransferTransResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferTransResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferTransResponseMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferTransResponseMessage, reader: jspb.BinaryReader): MerchantFundTransferTransResponseMessage;
}

export namespace MerchantFundTransferTransResponseMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    currencyiso: string,
    transamount: number,
    makedate: string,
    cashortransfertype: string,
    transstatus: string,
    makerid: string,
    countrycode: string,
    journalrefno: string,
  }
}

export class MerchantFundTransferTransListResponseMessage extends jspb.Message {
  getTranslistList(): Array<MerchantFundTransferTransResponseMessage>;
  setTranslistList(value: Array<MerchantFundTransferTransResponseMessage>): MerchantFundTransferTransListResponseMessage;
  clearTranslistList(): MerchantFundTransferTransListResponseMessage;
  addTranslist(value?: MerchantFundTransferTransResponseMessage, index?: number): MerchantFundTransferTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferTransListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferTransListResponseMessage): MerchantFundTransferTransListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferTransListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferTransListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferTransListResponseMessage, reader: jspb.BinaryReader): MerchantFundTransferTransListResponseMessage;
}

export namespace MerchantFundTransferTransListResponseMessage {
  export type AsObject = {
    translistList: Array<MerchantFundTransferTransResponseMessage.AsObject>,
  }
}

export class MerchantFundTransferApprovalRequestMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantFundTransferApprovalRequestMessage;

  getPaypartnerservicecountrycode(): string;
  setPaypartnerservicecountrycode(value: string): MerchantFundTransferApprovalRequestMessage;

  getJournalreferrenceno(): string;
  setJournalreferrenceno(value: string): MerchantFundTransferApprovalRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantFundTransferApprovalRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferApprovalRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferApprovalRequestMessage): MerchantFundTransferApprovalRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferApprovalRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferApprovalRequestMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferApprovalRequestMessage, reader: jspb.BinaryReader): MerchantFundTransferApprovalRequestMessage;
}

export namespace MerchantFundTransferApprovalRequestMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    paypartnerservicecountrycode: string,
    journalreferrenceno: string,
    languageid: string,
  }
}

export class MerchantTransRetryRequestMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantTransRetryRequestMessage;

  getPaypartnerservicecountrycode(): string;
  setPaypartnerservicecountrycode(value: string): MerchantTransRetryRequestMessage;

  getJournalreferrenceno(): string;
  setJournalreferrenceno(value: string): MerchantTransRetryRequestMessage;

  getCollection1Payout2(): number;
  setCollection1Payout2(value: number): MerchantTransRetryRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantTransRetryRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantTransRetryRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantTransRetryRequestMessage): MerchantTransRetryRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantTransRetryRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantTransRetryRequestMessage;
  static deserializeBinaryFromReader(message: MerchantTransRetryRequestMessage, reader: jspb.BinaryReader): MerchantTransRetryRequestMessage;
}

export namespace MerchantTransRetryRequestMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    paypartnerservicecountrycode: string,
    journalreferrenceno: string,
    collection1Payout2: number,
    languageid: string,
  }
}

export class MechantPaymentByLinkInitailTransDataRequestMessage extends jspb.Message {
  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  getBeneficiarytranscurrecyiso(): string;
  setBeneficiarytranscurrecyiso(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  getTransamount(): number;
  setTransamount(value: number): MechantPaymentByLinkInitailTransDataRequestMessage;

  getCanuserchangeamountyesno(): string;
  setCanuserchangeamountyesno(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  getPaymenlinktype(): string;
  setPaymenlinktype(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  getNoofdaystoexpire(): number;
  setNoofdaystoexpire(value: number): MechantPaymentByLinkInitailTransDataRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MechantPaymentByLinkInitailTransDataRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MechantPaymentByLinkInitailTransDataRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MechantPaymentByLinkInitailTransDataRequestMessage): MechantPaymentByLinkInitailTransDataRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MechantPaymentByLinkInitailTransDataRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MechantPaymentByLinkInitailTransDataRequestMessage;
  static deserializeBinaryFromReader(message: MechantPaymentByLinkInitailTransDataRequestMessage, reader: jspb.BinaryReader): MechantPaymentByLinkInitailTransDataRequestMessage;
}

export namespace MechantPaymentByLinkInitailTransDataRequestMessage {
  export type AsObject = {
    beneficiarypaypartnerserviceid: string,
    beneficiarytranscurrecyiso: string,
    transamount: number,
    canuserchangeamountyesno: string,
    beneficiarycountrycode: string,
    transnarration: string,
    paymenlinktype: string,
    noofdaystoexpire: number,
    languageid: string,
  }
}

export class MechantPaymentByLinkInitailTransDataResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): MechantPaymentByLinkInitailTransDataResponseMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): MechantPaymentByLinkInitailTransDataResponseMessage;

  getMessage(): string;
  setMessage(value: string): MechantPaymentByLinkInitailTransDataResponseMessage;

  getPaymentbylinktransrefno(): string;
  setPaymentbylinktransrefno(value: string): MechantPaymentByLinkInitailTransDataResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MechantPaymentByLinkInitailTransDataResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MechantPaymentByLinkInitailTransDataResponseMessage): MechantPaymentByLinkInitailTransDataResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MechantPaymentByLinkInitailTransDataResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MechantPaymentByLinkInitailTransDataResponseMessage;
  static deserializeBinaryFromReader(message: MechantPaymentByLinkInitailTransDataResponseMessage, reader: jspb.BinaryReader): MechantPaymentByLinkInitailTransDataResponseMessage;
}

export namespace MechantPaymentByLinkInitailTransDataResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    paymentbylinktransrefno: string,
  }
}

export class MechantPaymentByLinkTransRequestMessage extends jspb.Message {
  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): MechantPaymentByLinkTransRequestMessage;

  getBeneficiaryaccountno(): string;
  setBeneficiaryaccountno(value: string): MechantPaymentByLinkTransRequestMessage;

  getBeneficiaryaccountname(): string;
  setBeneficiaryaccountname(value: string): MechantPaymentByLinkTransRequestMessage;

  getTransamount(): number;
  setTransamount(value: number): MechantPaymentByLinkTransRequestMessage;

  getSenderpaypartnerserviceid(): string;
  setSenderpaypartnerserviceid(value: string): MechantPaymentByLinkTransRequestMessage;

  getSenderaccountnoorcardnumber(): string;
  setSenderaccountnoorcardnumber(value: string): MechantPaymentByLinkTransRequestMessage;

  getSenderaccountname(): string;
  setSenderaccountname(value: string): MechantPaymentByLinkTransRequestMessage;

  getMerchanttransrefno(): string;
  setMerchanttransrefno(value: string): MechantPaymentByLinkTransRequestMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MechantPaymentByLinkTransRequestMessage;

  getSendercountrycode(): string;
  setSendercountrycode(value: string): MechantPaymentByLinkTransRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): MechantPaymentByLinkTransRequestMessage;

  getSendertranscurrecyiso(): string;
  setSendertranscurrecyiso(value: string): MechantPaymentByLinkTransRequestMessage;

  getBeneficiarytranscurrecyiso(): string;
  setBeneficiarytranscurrecyiso(value: string): MechantPaymentByLinkTransRequestMessage;

  getMerchantcustomerguid(): string;
  setMerchantcustomerguid(value: string): MechantPaymentByLinkTransRequestMessage;

  getPaymentbylinktransrefno(): string;
  setPaymentbylinktransrefno(value: string): MechantPaymentByLinkTransRequestMessage;

  getCustomermobilenumber(): string;
  setCustomermobilenumber(value: string): MechantPaymentByLinkTransRequestMessage;

  getCustomeremailaddress(): string;
  setCustomeremailaddress(value: string): MechantPaymentByLinkTransRequestMessage;

  getExpirydatemonth(): number;
  setExpirydatemonth(value: number): MechantPaymentByLinkTransRequestMessage;

  getExpirydateyear(): number;
  setExpirydateyear(value: number): MechantPaymentByLinkTransRequestMessage;

  getCvv(): string;
  setCvv(value: string): MechantPaymentByLinkTransRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MechantPaymentByLinkTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MechantPaymentByLinkTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MechantPaymentByLinkTransRequestMessage): MechantPaymentByLinkTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MechantPaymentByLinkTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MechantPaymentByLinkTransRequestMessage;
  static deserializeBinaryFromReader(message: MechantPaymentByLinkTransRequestMessage, reader: jspb.BinaryReader): MechantPaymentByLinkTransRequestMessage;
}

export namespace MechantPaymentByLinkTransRequestMessage {
  export type AsObject = {
    beneficiarypaypartnerserviceid: string,
    beneficiaryaccountno: string,
    beneficiaryaccountname: string,
    transamount: number,
    senderpaypartnerserviceid: string,
    senderaccountnoorcardnumber: string,
    senderaccountname: string,
    merchanttransrefno: string,
    transnarration: string,
    sendercountrycode: string,
    beneficiarycountrycode: string,
    sendertranscurrecyiso: string,
    beneficiarytranscurrecyiso: string,
    merchantcustomerguid: string,
    paymentbylinktransrefno: string,
    customermobilenumber: string,
    customeremailaddress: string,
    expirydatemonth: number,
    expirydateyear: number,
    cvv: string,
    languageid: string,
  }
}

export class MechantPaymentByLinkTransResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): MechantPaymentByLinkTransResponseMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): MechantPaymentByLinkTransResponseMessage;

  getMessage(): string;
  setMessage(value: string): MechantPaymentByLinkTransResponseMessage;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): MechantPaymentByLinkTransResponseMessage;

  getEganowtransrefno(): string;
  setEganowtransrefno(value: string): MechantPaymentByLinkTransResponseMessage;

  getCardredirectthreedsurl(): string;
  setCardredirectthreedsurl(value: string): MechantPaymentByLinkTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MechantPaymentByLinkTransResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MechantPaymentByLinkTransResponseMessage): MechantPaymentByLinkTransResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MechantPaymentByLinkTransResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MechantPaymentByLinkTransResponseMessage;
  static deserializeBinaryFromReader(message: MechantPaymentByLinkTransResponseMessage, reader: jspb.BinaryReader): MechantPaymentByLinkTransResponseMessage;
}

export namespace MechantPaymentByLinkTransResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
    eganowtransrefno: string,
    cardredirectthreedsurl: string,
  }
}

export class MechantPaymentInitialTransDataRequestMessage extends jspb.Message {
  getPaymentbylinktransrefno(): string;
  setPaymentbylinktransrefno(value: string): MechantPaymentInitialTransDataRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): MechantPaymentInitialTransDataRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MechantPaymentInitialTransDataRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MechantPaymentInitialTransDataRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MechantPaymentInitialTransDataRequestMessage): MechantPaymentInitialTransDataRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MechantPaymentInitialTransDataRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MechantPaymentInitialTransDataRequestMessage;
  static deserializeBinaryFromReader(message: MechantPaymentInitialTransDataRequestMessage, reader: jspb.BinaryReader): MechantPaymentInitialTransDataRequestMessage;
}

export namespace MechantPaymentInitialTransDataRequestMessage {
  export type AsObject = {
    paymentbylinktransrefno: string,
    beneficiarycountrycode: string,
    languageid: string,
  }
}

export class MechantPaymentInitialTransDataResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): MechantPaymentInitialTransDataResponseMessage;

  getMessage(): string;
  setMessage(value: string): MechantPaymentInitialTransDataResponseMessage;

  getPaymentbylinktransrefno(): string;
  setPaymentbylinktransrefno(value: string): MechantPaymentInitialTransDataResponseMessage;

  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): MechantPaymentInitialTransDataResponseMessage;

  getBeneficiarypaypartnerservicename(): string;
  setBeneficiarypaypartnerservicename(value: string): MechantPaymentInitialTransDataResponseMessage;

  getBeneficiarytranscurrecyiso(): string;
  setBeneficiarytranscurrecyiso(value: string): MechantPaymentInitialTransDataResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): MechantPaymentInitialTransDataResponseMessage;

  getCanuserchangeamountyesno(): string;
  setCanuserchangeamountyesno(value: string): MechantPaymentInitialTransDataResponseMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): MechantPaymentInitialTransDataResponseMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MechantPaymentInitialTransDataResponseMessage;

  getMerchantcustomerguid(): string;
  setMerchantcustomerguid(value: string): MechantPaymentInitialTransDataResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MechantPaymentInitialTransDataResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MechantPaymentInitialTransDataResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MechantPaymentInitialTransDataResponseMessage): MechantPaymentInitialTransDataResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MechantPaymentInitialTransDataResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MechantPaymentInitialTransDataResponseMessage;
  static deserializeBinaryFromReader(message: MechantPaymentInitialTransDataResponseMessage, reader: jspb.BinaryReader): MechantPaymentInitialTransDataResponseMessage;
}

export namespace MechantPaymentInitialTransDataResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    message: string,
    paymentbylinktransrefno: string,
    beneficiarypaypartnerserviceid: string,
    beneficiarypaypartnerservicename: string,
    beneficiarytranscurrecyiso: string,
    transamount: number,
    canuserchangeamountyesno: string,
    beneficiarycountrycode: string,
    transnarration: string,
    merchantcustomerguid: string,
    languageid: string,
  }
}

export class MerchantCustomerPaymentSourceAccountsRequestMessage extends jspb.Message {
  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): MerchantCustomerPaymentSourceAccountsRequestMessage;

  getSendingcurrencycode(): string;
  setSendingcurrencycode(value: string): MerchantCustomerPaymentSourceAccountsRequestMessage;

  getBeneficiarycurrencycode(): string;
  setBeneficiarycurrencycode(value: string): MerchantCustomerPaymentSourceAccountsRequestMessage;

  getMerchantcustomerguid(): string;
  setMerchantcustomerguid(value: string): MerchantCustomerPaymentSourceAccountsRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerPaymentSourceAccountsRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerPaymentSourceAccountsRequestMessage): MerchantCustomerPaymentSourceAccountsRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerPaymentSourceAccountsRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerPaymentSourceAccountsRequestMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerPaymentSourceAccountsRequestMessage, reader: jspb.BinaryReader): MerchantCustomerPaymentSourceAccountsRequestMessage;
}

export namespace MerchantCustomerPaymentSourceAccountsRequestMessage {
  export type AsObject = {
    beneficiarycountrycode: string,
    sendingcurrencycode: string,
    beneficiarycurrencycode: string,
    merchantcustomerguid: string,
  }
}

export class MerchantCustomerExistingSourceAccountsMessage extends jspb.Message {
  getSourceaccountname(): string;
  setSourceaccountname(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getSourceaccountno(): string;
  setSourceaccountno(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): MerchantCustomerExistingSourceAccountsMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getPaypartnergroupname(): string;
  setPaypartnergroupname(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getDisplaysourceaccountno(): string;
  setDisplaysourceaccountno(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getSourceaccountstatus(): string;
  setSourceaccountstatus(value: string): MerchantCustomerExistingSourceAccountsMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): MerchantCustomerExistingSourceAccountsMessage;

  getLogourl(): string;
  setLogourl(value: string): MerchantCustomerExistingSourceAccountsMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerExistingSourceAccountsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerExistingSourceAccountsMessage): MerchantCustomerExistingSourceAccountsMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerExistingSourceAccountsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerExistingSourceAccountsMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerExistingSourceAccountsMessage, reader: jspb.BinaryReader): MerchantCustomerExistingSourceAccountsMessage;
}

export namespace MerchantCustomerExistingSourceAccountsMessage {
  export type AsObject = {
    sourceaccountname: string,
    sourceaccountno: string,
    paypartnerid: string,
    paypartnertypeid: number,
    paypartnerservicename: string,
    paypartnergroupname: string,
    paypartnerserviceid: string,
    currencyiso: string,
    displaysourceaccountno: string,
    sourceaccountstatus: string,
    paypartnergroupcode: number,
    logourl: string,
  }
}

export class MerchantCustomerExistingSourceAccountsListMessage extends jspb.Message {
  getCustexistingaccountsList(): Array<MerchantCustomerExistingSourceAccountsMessage>;
  setCustexistingaccountsList(value: Array<MerchantCustomerExistingSourceAccountsMessage>): MerchantCustomerExistingSourceAccountsListMessage;
  clearCustexistingaccountsList(): MerchantCustomerExistingSourceAccountsListMessage;
  addCustexistingaccounts(value?: MerchantCustomerExistingSourceAccountsMessage, index?: number): MerchantCustomerExistingSourceAccountsMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerExistingSourceAccountsListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerExistingSourceAccountsListMessage): MerchantCustomerExistingSourceAccountsListMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerExistingSourceAccountsListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerExistingSourceAccountsListMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerExistingSourceAccountsListMessage, reader: jspb.BinaryReader): MerchantCustomerExistingSourceAccountsListMessage;
}

export namespace MerchantCustomerExistingSourceAccountsListMessage {
  export type AsObject = {
    custexistingaccountsList: Array<MerchantCustomerExistingSourceAccountsMessage.AsObject>,
  }
}

export class PayLinkCountryRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): PayLinkCountryRequestMessage;

  getMerchantserviceid(): string;
  setMerchantserviceid(value: string): PayLinkCountryRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PayLinkCountryRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayLinkCountryRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayLinkCountryRequestMessage): PayLinkCountryRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayLinkCountryRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayLinkCountryRequestMessage;
  static deserializeBinaryFromReader(message: PayLinkCountryRequestMessage, reader: jspb.BinaryReader): PayLinkCountryRequestMessage;
}

export namespace PayLinkCountryRequestMessage {
  export type AsObject = {
    countrycode: string,
    merchantserviceid: string,
    languageid: string,
  }
}

export class PayLinkPaymentAcctTypesMessage extends jspb.Message {
  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PayLinkPaymentAcctTypesMessage;

  getPaypartnergroupid(): number;
  setPaypartnergroupid(value: number): PayLinkPaymentAcctTypesMessage;

  getAppname(): string;
  setAppname(value: string): PayLinkPaymentAcctTypesMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PayLinkPaymentAcctTypesMessage;

  getCountryname(): string;
  setCountryname(value: string): PayLinkPaymentAcctTypesMessage;

  getPaypartnergroupurl(): string;
  setPaypartnergroupurl(value: string): PayLinkPaymentAcctTypesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayLinkPaymentAcctTypesMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayLinkPaymentAcctTypesMessage): PayLinkPaymentAcctTypesMessage.AsObject;
  static serializeBinaryToWriter(message: PayLinkPaymentAcctTypesMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayLinkPaymentAcctTypesMessage;
  static deserializeBinaryFromReader(message: PayLinkPaymentAcctTypesMessage, reader: jspb.BinaryReader): PayLinkPaymentAcctTypesMessage;
}

export namespace PayLinkPaymentAcctTypesMessage {
  export type AsObject = {
    paypartnertypeid: number,
    paypartnergroupid: number,
    appname: string,
    countrycode: string,
    countryname: string,
    paypartnergroupurl: string,
  }
}

export class PayLinkPaymentAcctTypesAndServicesMessage extends jspb.Message {
  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PayLinkPaymentAcctTypesAndServicesMessage;

  getPaypartnertypedesc(): string;
  setPaypartnertypedesc(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  getAppname(): string;
  setAppname(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  getCountryname(): string;
  setCountryname(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  getPaypartnergroupid(): number;
  setPaypartnergroupid(value: number): PayLinkPaymentAcctTypesAndServicesMessage;

  getLogourl(): string;
  setLogourl(value: string): PayLinkPaymentAcctTypesAndServicesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayLinkPaymentAcctTypesAndServicesMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayLinkPaymentAcctTypesAndServicesMessage): PayLinkPaymentAcctTypesAndServicesMessage.AsObject;
  static serializeBinaryToWriter(message: PayLinkPaymentAcctTypesAndServicesMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayLinkPaymentAcctTypesAndServicesMessage;
  static deserializeBinaryFromReader(message: PayLinkPaymentAcctTypesAndServicesMessage, reader: jspb.BinaryReader): PayLinkPaymentAcctTypesAndServicesMessage;
}

export namespace PayLinkPaymentAcctTypesAndServicesMessage {
  export type AsObject = {
    paypartnertypeid: number,
    paypartnertypedesc: string,
    appname: string,
    paypartnerserviceid: string,
    paypartnerservicename: string,
    countrycode: string,
    countryname: string,
    paypartnergroupid: number,
    logourl: string,
  }
}

export class PayLinkPaymentAcctTypesAndServicesListResponseMessage extends jspb.Message {
  getPaylinkpaymenttypeslistList(): Array<PayLinkPaymentAcctTypesMessage>;
  setPaylinkpaymenttypeslistList(value: Array<PayLinkPaymentAcctTypesMessage>): PayLinkPaymentAcctTypesAndServicesListResponseMessage;
  clearPaylinkpaymenttypeslistList(): PayLinkPaymentAcctTypesAndServicesListResponseMessage;
  addPaylinkpaymenttypeslist(value?: PayLinkPaymentAcctTypesMessage, index?: number): PayLinkPaymentAcctTypesMessage;

  getPaylinkpaymenttypesandsvclistList(): Array<PayLinkPaymentAcctTypesAndServicesMessage>;
  setPaylinkpaymenttypesandsvclistList(value: Array<PayLinkPaymentAcctTypesAndServicesMessage>): PayLinkPaymentAcctTypesAndServicesListResponseMessage;
  clearPaylinkpaymenttypesandsvclistList(): PayLinkPaymentAcctTypesAndServicesListResponseMessage;
  addPaylinkpaymenttypesandsvclist(value?: PayLinkPaymentAcctTypesAndServicesMessage, index?: number): PayLinkPaymentAcctTypesAndServicesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayLinkPaymentAcctTypesAndServicesListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayLinkPaymentAcctTypesAndServicesListResponseMessage): PayLinkPaymentAcctTypesAndServicesListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PayLinkPaymentAcctTypesAndServicesListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayLinkPaymentAcctTypesAndServicesListResponseMessage;
  static deserializeBinaryFromReader(message: PayLinkPaymentAcctTypesAndServicesListResponseMessage, reader: jspb.BinaryReader): PayLinkPaymentAcctTypesAndServicesListResponseMessage;
}

export namespace PayLinkPaymentAcctTypesAndServicesListResponseMessage {
  export type AsObject = {
    paylinkpaymenttypeslistList: Array<PayLinkPaymentAcctTypesMessage.AsObject>,
    paylinkpaymenttypesandsvclistList: Array<PayLinkPaymentAcctTypesAndServicesMessage.AsObject>,
  }
}

export class PaylinkCustomerAccountNoRequestMessage extends jspb.Message {
  getCustomeracctno(): string;
  setCustomeracctno(value: string): PaylinkCustomerAccountNoRequestMessage;

  getMerchantserviceid(): string;
  setMerchantserviceid(value: string): PaylinkCustomerAccountNoRequestMessage;

  getMerchantcustomerguid(): string;
  setMerchantcustomerguid(value: string): PaylinkCustomerAccountNoRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PaylinkCustomerAccountNoRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PaylinkCustomerAccountNoRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaylinkCustomerAccountNoRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaylinkCustomerAccountNoRequestMessage): PaylinkCustomerAccountNoRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PaylinkCustomerAccountNoRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaylinkCustomerAccountNoRequestMessage;
  static deserializeBinaryFromReader(message: PaylinkCustomerAccountNoRequestMessage, reader: jspb.BinaryReader): PaylinkCustomerAccountNoRequestMessage;
}

export namespace PaylinkCustomerAccountNoRequestMessage {
  export type AsObject = {
    customeracctno: string,
    merchantserviceid: string,
    merchantcustomerguid: string,
    countrycode: string,
    languageid: string,
  }
}

export class PaylinkCustomerAccountNoResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): PaylinkCustomerAccountNoResponseMessage;

  getMessage(): string;
  setMessage(value: string): PaylinkCustomerAccountNoResponseMessage;

  getCustomername(): string;
  setCustomername(value: string): PaylinkCustomerAccountNoResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaylinkCustomerAccountNoResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaylinkCustomerAccountNoResponseMessage): PaylinkCustomerAccountNoResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PaylinkCustomerAccountNoResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaylinkCustomerAccountNoResponseMessage;
  static deserializeBinaryFromReader(message: PaylinkCustomerAccountNoResponseMessage, reader: jspb.BinaryReader): PaylinkCustomerAccountNoResponseMessage;
}

export namespace PaylinkCustomerAccountNoResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    message: string,
    customername: string,
  }
}

export class MerchantBizCollecRequestMessage extends jspb.Message {
  getNatureofbusiness(): string;
  setNatureofbusiness(value: string): MerchantBizCollecRequestMessage;

  getCollectionserviceyesno(): string;
  setCollectionserviceyesno(value: string): MerchantBizCollecRequestMessage;

  getPayoutserviceyesno(): string;
  setPayoutserviceyesno(value: string): MerchantBizCollecRequestMessage;

  getApirequiredyesno(): string;
  setApirequiredyesno(value: string): MerchantBizCollecRequestMessage;

  getRequeststatus(): string;
  setRequeststatus(value: string): MerchantBizCollecRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantBizCollecRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantBizCollecRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantBizCollecRequestMessage): MerchantBizCollecRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantBizCollecRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantBizCollecRequestMessage;
  static deserializeBinaryFromReader(message: MerchantBizCollecRequestMessage, reader: jspb.BinaryReader): MerchantBizCollecRequestMessage;
}

export namespace MerchantBizCollecRequestMessage {
  export type AsObject = {
    natureofbusiness: string,
    collectionserviceyesno: string,
    payoutserviceyesno: string,
    apirequiredyesno: string,
    requeststatus: string,
    languageid: string,
  }
}

export class MerchantBizCollecResponseMessage extends jspb.Message {
  getNatureofbusiness(): string;
  setNatureofbusiness(value: string): MerchantBizCollecResponseMessage;

  getCollectionserviceyesno(): string;
  setCollectionserviceyesno(value: string): MerchantBizCollecResponseMessage;

  getPayoutserviceyesno(): string;
  setPayoutserviceyesno(value: string): MerchantBizCollecResponseMessage;

  getApirequiredyesno(): string;
  setApirequiredyesno(value: string): MerchantBizCollecResponseMessage;

  getRequeststatus(): string;
  setRequeststatus(value: string): MerchantBizCollecResponseMessage;

  getMakedate(): string;
  setMakedate(value: string): MerchantBizCollecResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantBizCollecResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantBizCollecResponseMessage): MerchantBizCollecResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantBizCollecResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantBizCollecResponseMessage;
  static deserializeBinaryFromReader(message: MerchantBizCollecResponseMessage, reader: jspb.BinaryReader): MerchantBizCollecResponseMessage;
}

export namespace MerchantBizCollecResponseMessage {
  export type AsObject = {
    natureofbusiness: string,
    collectionserviceyesno: string,
    payoutserviceyesno: string,
    apirequiredyesno: string,
    requeststatus: string,
    makedate: string,
  }
}

export class MerchantBizCollecListResponseMessage extends jspb.Message {
  getReqlistList(): Array<MerchantBizCollecResponseMessage>;
  setReqlistList(value: Array<MerchantBizCollecResponseMessage>): MerchantBizCollecListResponseMessage;
  clearReqlistList(): MerchantBizCollecListResponseMessage;
  addReqlist(value?: MerchantBizCollecResponseMessage, index?: number): MerchantBizCollecResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantBizCollecListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantBizCollecListResponseMessage): MerchantBizCollecListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantBizCollecListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantBizCollecListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantBizCollecListResponseMessage, reader: jspb.BinaryReader): MerchantBizCollecListResponseMessage;
}

export namespace MerchantBizCollecListResponseMessage {
  export type AsObject = {
    reqlistList: Array<MerchantBizCollecResponseMessage.AsObject>,
  }
}

export class PaymentLinkListRequestMessage extends jspb.Message {
  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): PaymentLinkListRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): PaymentLinkListRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PaymentLinkListRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinkListRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinkListRequestMessage): PaymentLinkListRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentLinkListRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinkListRequestMessage;
  static deserializeBinaryFromReader(message: PaymentLinkListRequestMessage, reader: jspb.BinaryReader): PaymentLinkListRequestMessage;
}

export namespace PaymentLinkListRequestMessage {
  export type AsObject = {
    beneficiarypaypartnerserviceid: string,
    beneficiarycountrycode: string,
    languageid: string,
  }
}

export class PaymentLinksForAMerchantRspenseDataMessage extends jspb.Message {
  getPaymentbylinktransrefno(): string;
  setPaymentbylinktransrefno(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getBeneficiarytranscurrecyiso(): string;
  setBeneficiarytranscurrecyiso(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getTransamount(): number;
  setTransamount(value: number): PaymentLinksForAMerchantRspenseDataMessage;

  getCanuserchangeamountyesno(): string;
  setCanuserchangeamountyesno(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getRequeststatus(): string;
  setRequeststatus(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getTransnarration(): string;
  setTransnarration(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getMaketimestr(): string;
  setMaketimestr(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getPaymenlinktype(): string;
  setPaymenlinktype(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getNoofdaystoexpire(): number;
  setNoofdaystoexpire(value: number): PaymentLinksForAMerchantRspenseDataMessage;

  getLinkexpirydate(): string;
  setLinkexpirydate(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getPaymentlinkendpoint(): string;
  setPaymentlinkendpoint(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PaymentLinksForAMerchantRspenseDataMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinksForAMerchantRspenseDataMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinksForAMerchantRspenseDataMessage): PaymentLinksForAMerchantRspenseDataMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentLinksForAMerchantRspenseDataMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinksForAMerchantRspenseDataMessage;
  static deserializeBinaryFromReader(message: PaymentLinksForAMerchantRspenseDataMessage, reader: jspb.BinaryReader): PaymentLinksForAMerchantRspenseDataMessage;
}

export namespace PaymentLinksForAMerchantRspenseDataMessage {
  export type AsObject = {
    paymentbylinktransrefno: string,
    beneficiarypaypartnerserviceid: string,
    beneficiarytranscurrecyiso: string,
    transamount: number,
    canuserchangeamountyesno: string,
    beneficiarycountrycode: string,
    requeststatus: string,
    transnarration: string,
    maketimestr: string,
    paymenlinktype: string,
    noofdaystoexpire: number,
    linkexpirydate: string,
    paymentlinkendpoint: string,
    languageid: string,
  }
}

export class PaymentLinksForAMerchantRspenseDataListMessage extends jspb.Message {
  getLinklistList(): Array<PaymentLinksForAMerchantRspenseDataMessage>;
  setLinklistList(value: Array<PaymentLinksForAMerchantRspenseDataMessage>): PaymentLinksForAMerchantRspenseDataListMessage;
  clearLinklistList(): PaymentLinksForAMerchantRspenseDataListMessage;
  addLinklist(value?: PaymentLinksForAMerchantRspenseDataMessage, index?: number): PaymentLinksForAMerchantRspenseDataMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PaymentLinksForAMerchantRspenseDataListMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinksForAMerchantRspenseDataListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinksForAMerchantRspenseDataListMessage): PaymentLinksForAMerchantRspenseDataListMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentLinksForAMerchantRspenseDataListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinksForAMerchantRspenseDataListMessage;
  static deserializeBinaryFromReader(message: PaymentLinksForAMerchantRspenseDataListMessage, reader: jspb.BinaryReader): PaymentLinksForAMerchantRspenseDataListMessage;
}

export namespace PaymentLinksForAMerchantRspenseDataListMessage {
  export type AsObject = {
    linklistList: Array<PaymentLinksForAMerchantRspenseDataMessage.AsObject>,
    languageid: string,
  }
}

export class PaymentLinkRefNoDataRequestMessage extends jspb.Message {
  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): PaymentLinkRefNoDataRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): PaymentLinkRefNoDataRequestMessage;

  getPaymentbylinktransrefno(): string;
  setPaymentbylinktransrefno(value: string): PaymentLinkRefNoDataRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PaymentLinkRefNoDataRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentLinkRefNoDataRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentLinkRefNoDataRequestMessage): PaymentLinkRefNoDataRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentLinkRefNoDataRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentLinkRefNoDataRequestMessage;
  static deserializeBinaryFromReader(message: PaymentLinkRefNoDataRequestMessage, reader: jspb.BinaryReader): PaymentLinkRefNoDataRequestMessage;
}

export namespace PaymentLinkRefNoDataRequestMessage {
  export type AsObject = {
    beneficiarypaypartnerserviceid: string,
    beneficiarycountrycode: string,
    paymentbylinktransrefno: string,
    languageid: string,
  }
}

export class MerchantFundTransferHistoryRequestMessage extends jspb.Message {
  getMerchantserviceid(): string;
  setMerchantserviceid(value: string): MerchantFundTransferHistoryRequestMessage;

  getPaypartnerservicecountrycode(): string;
  setPaypartnerservicecountrycode(value: string): MerchantFundTransferHistoryRequestMessage;

  getFromdate(): string;
  setFromdate(value: string): MerchantFundTransferHistoryRequestMessage;

  getTodate(): string;
  setTodate(value: string): MerchantFundTransferHistoryRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantFundTransferHistoryRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferHistoryRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferHistoryRequestMessage): MerchantFundTransferHistoryRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferHistoryRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferHistoryRequestMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferHistoryRequestMessage, reader: jspb.BinaryReader): MerchantFundTransferHistoryRequestMessage;
}

export namespace MerchantFundTransferHistoryRequestMessage {
  export type AsObject = {
    merchantserviceid: string,
    paypartnerservicecountrycode: string,
    fromdate: string,
    todate: string,
    countrycode: string,
  }
}

export class MerchantFundTransferTransHistoryResponseMessage extends jspb.Message {
  getValuedatestr(): string;
  setValuedatestr(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getTransamount(): string;
  setTransamount(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getTransstatus(): string;
  setTransstatus(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getAuthstatus(): string;
  setAuthstatus(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getCashortransfertype(): string;
  setCashortransfertype(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getTransinitiatedby(): string;
  setTransinitiatedby(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getMakerid(): string;
  setMakerid(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getAuthid(): string;
  setAuthid(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getMaketimestr(): string;
  setMaketimestr(value: string): MerchantFundTransferTransHistoryResponseMessage;

  getAuthtimestr(): string;
  setAuthtimestr(value: string): MerchantFundTransferTransHistoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferTransHistoryResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferTransHistoryResponseMessage): MerchantFundTransferTransHistoryResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferTransHistoryResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferTransHistoryResponseMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferTransHistoryResponseMessage, reader: jspb.BinaryReader): MerchantFundTransferTransHistoryResponseMessage;
}

export namespace MerchantFundTransferTransHistoryResponseMessage {
  export type AsObject = {
    valuedatestr: string,
    currencyiso: string,
    transamount: string,
    transnarration: string,
    transstatus: string,
    authstatus: string,
    cashortransfertype: string,
    transinitiatedby: string,
    makerid: string,
    authid: string,
    maketimestr: string,
    authtimestr: string,
  }
}

export class MerchantFundTransferTransHistoryListResponseMessage extends jspb.Message {
  getFundtranslistList(): Array<MerchantFundTransferTransHistoryResponseMessage>;
  setFundtranslistList(value: Array<MerchantFundTransferTransHistoryResponseMessage>): MerchantFundTransferTransHistoryListResponseMessage;
  clearFundtranslistList(): MerchantFundTransferTransHistoryListResponseMessage;
  addFundtranslist(value?: MerchantFundTransferTransHistoryResponseMessage, index?: number): MerchantFundTransferTransHistoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantFundTransferTransHistoryListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantFundTransferTransHistoryListResponseMessage): MerchantFundTransferTransHistoryListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantFundTransferTransHistoryListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantFundTransferTransHistoryListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantFundTransferTransHistoryListResponseMessage, reader: jspb.BinaryReader): MerchantFundTransferTransHistoryListResponseMessage;
}

export namespace MerchantFundTransferTransHistoryListResponseMessage {
  export type AsObject = {
    fundtranslistList: Array<MerchantFundTransferTransHistoryResponseMessage.AsObject>,
  }
}

