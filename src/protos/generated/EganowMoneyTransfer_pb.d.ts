import * as jspb from 'google-protobuf'



export class MoneyTransferEmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyTransferEmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyTransferEmptyMessage): MoneyTransferEmptyMessage.AsObject;
  static serializeBinaryToWriter(message: MoneyTransferEmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyTransferEmptyMessage;
  static deserializeBinaryFromReader(message: MoneyTransferEmptyMessage, reader: jspb.BinaryReader): MoneyTransferEmptyMessage;
}

export namespace MoneyTransferEmptyMessage {
  export type AsObject = {
  }
}

export class MoneyTransferCountryMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): MoneyTransferCountryMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MoneyTransferCountryMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyTransferCountryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyTransferCountryMessage): MoneyTransferCountryMessage.AsObject;
  static serializeBinaryToWriter(message: MoneyTransferCountryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyTransferCountryMessage;
  static deserializeBinaryFromReader(message: MoneyTransferCountryMessage, reader: jspb.BinaryReader): MoneyTransferCountryMessage;
}

export namespace MoneyTransferCountryMessage {
  export type AsObject = {
    countrycode: string,
    languageid: string,
  }
}

export class EganowBeneficiaryResponseMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): EganowBeneficiaryResponseMessage;

  getAccountno(): string;
  setAccountno(value: string): EganowBeneficiaryResponseMessage;

  getAccountname(): string;
  setAccountname(value: string): EganowBeneficiaryResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): EganowBeneficiaryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EganowBeneficiaryResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EganowBeneficiaryResponseMessage): EganowBeneficiaryResponseMessage.AsObject;
  static serializeBinaryToWriter(message: EganowBeneficiaryResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EganowBeneficiaryResponseMessage;
  static deserializeBinaryFromReader(message: EganowBeneficiaryResponseMessage, reader: jspb.BinaryReader): EganowBeneficiaryResponseMessage;
}

export namespace EganowBeneficiaryResponseMessage {
  export type AsObject = {
    customerid: string,
    accountno: string,
    accountname: string,
    currencyiso: string,
  }
}

export class MoneyTransferRequestMessage extends jspb.Message {
  getSenderpaypartnerserviceid(): string;
  setSenderpaypartnerserviceid(value: string): MoneyTransferRequestMessage;

  getBeneficiarypaypartnerserviceid(): string;
  setBeneficiarypaypartnerserviceid(value: string): MoneyTransferRequestMessage;

  getSendertranscurrecyiso(): string;
  setSendertranscurrecyiso(value: string): MoneyTransferRequestMessage;

  getBeneficiarycurrecyiso(): string;
  setBeneficiarycurrecyiso(value: string): MoneyTransferRequestMessage;

  getBeneficiaryaccountno(): string;
  setBeneficiaryaccountno(value: string): MoneyTransferRequestMessage;

  getBeneficiaryaccountname(): string;
  setBeneficiaryaccountname(value: string): MoneyTransferRequestMessage;

  getTransamount(): number;
  setTransamount(value: number): MoneyTransferRequestMessage;

  getSenderaccountno(): string;
  setSenderaccountno(value: string): MoneyTransferRequestMessage;

  getSenderaccountname(): string;
  setSenderaccountname(value: string): MoneyTransferRequestMessage;

  getMobileorweborussd(): string;
  setMobileorweborussd(value: string): MoneyTransferRequestMessage;

  getCustomerid(): string;
  setCustomerid(value: string): MoneyTransferRequestMessage;

  getTransnarration(): string;
  setTransnarration(value: string): MoneyTransferRequestMessage;

  getSenderpaypartnergroupid(): number;
  setSenderpaypartnergroupid(value: number): MoneyTransferRequestMessage;

  getBeneficiarypaypartnergroupid(): number;
  setBeneficiarypaypartnergroupid(value: number): MoneyTransferRequestMessage;

  getRemembermysourcepaymentaccountyesno(): string;
  setRemembermysourcepaymentaccountyesno(value: string): MoneyTransferRequestMessage;

  getPurposeoftransferorpayment(): string;
  setPurposeoftransferorpayment(value: string): MoneyTransferRequestMessage;

  getSendercountrycode(): string;
  setSendercountrycode(value: string): MoneyTransferRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): MoneyTransferRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MoneyTransferRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyTransferRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyTransferRequestMessage): MoneyTransferRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MoneyTransferRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyTransferRequestMessage;
  static deserializeBinaryFromReader(message: MoneyTransferRequestMessage, reader: jspb.BinaryReader): MoneyTransferRequestMessage;
}

export namespace MoneyTransferRequestMessage {
  export type AsObject = {
    senderpaypartnerserviceid: string,
    beneficiarypaypartnerserviceid: string,
    sendertranscurrecyiso: string,
    beneficiarycurrecyiso: string,
    beneficiaryaccountno: string,
    beneficiaryaccountname: string,
    transamount: number,
    senderaccountno: string,
    senderaccountname: string,
    mobileorweborussd: string,
    customerid: string,
    transnarration: string,
    senderpaypartnergroupid: number,
    beneficiarypaypartnergroupid: number,
    remembermysourcepaymentaccountyesno: string,
    purposeoftransferorpayment: string,
    sendercountrycode: string,
    beneficiarycountrycode: string,
    languageid: string,
  }
}

export class MoneyTransferSuccessMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): MoneyTransferSuccessMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): MoneyTransferSuccessMessage;

  getMessage(): string;
  setMessage(value: string): MoneyTransferSuccessMessage;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): MoneyTransferSuccessMessage;

  getOtpiframe(): string;
  setOtpiframe(value: string): MoneyTransferSuccessMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyTransferSuccessMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyTransferSuccessMessage): MoneyTransferSuccessMessage.AsObject;
  static serializeBinaryToWriter(message: MoneyTransferSuccessMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyTransferSuccessMessage;
  static deserializeBinaryFromReader(message: MoneyTransferSuccessMessage, reader: jspb.BinaryReader): MoneyTransferSuccessMessage;
}

export namespace MoneyTransferSuccessMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
    otpiframe: string,
  }
}

export class CustomerExistingSourceAccountsRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerExistingSourceAccountsRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerExistingSourceAccountsRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerExistingSourceAccountsRequestMessage): CustomerExistingSourceAccountsRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerExistingSourceAccountsRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerExistingSourceAccountsRequestMessage;
  static deserializeBinaryFromReader(message: CustomerExistingSourceAccountsRequestMessage, reader: jspb.BinaryReader): CustomerExistingSourceAccountsRequestMessage;
}

export namespace CustomerExistingSourceAccountsRequestMessage {
  export type AsObject = {
    customerid: string,
  }
}

export class CustomerPaymentSourceAccountsRequestMessage extends jspb.Message {
  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): CustomerPaymentSourceAccountsRequestMessage;

  getSendingcurrencycode(): string;
  setSendingcurrencycode(value: string): CustomerPaymentSourceAccountsRequestMessage;

  getBeneficiarycurrencycode(): string;
  setBeneficiarycurrencycode(value: string): CustomerPaymentSourceAccountsRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentSourceAccountsRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentSourceAccountsRequestMessage): CustomerPaymentSourceAccountsRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentSourceAccountsRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentSourceAccountsRequestMessage;
  static deserializeBinaryFromReader(message: CustomerPaymentSourceAccountsRequestMessage, reader: jspb.BinaryReader): CustomerPaymentSourceAccountsRequestMessage;
}

export namespace CustomerPaymentSourceAccountsRequestMessage {
  export type AsObject = {
    beneficiarycountrycode: string,
    sendingcurrencycode: string,
    beneficiarycurrencycode: string,
  }
}

export class CustomerExistingSourceAccountsMessage extends jspb.Message {
  getSourceaccountname(): string;
  setSourceaccountname(value: string): CustomerExistingSourceAccountsMessage;

  getSourceaccountno(): string;
  setSourceaccountno(value: string): CustomerExistingSourceAccountsMessage;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): CustomerExistingSourceAccountsMessage;

  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): CustomerExistingSourceAccountsMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): CustomerExistingSourceAccountsMessage;

  getPaypartnergroupname(): string;
  setPaypartnergroupname(value: string): CustomerExistingSourceAccountsMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): CustomerExistingSourceAccountsMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CustomerExistingSourceAccountsMessage;

  getDisplaysourceaccountno(): string;
  setDisplaysourceaccountno(value: string): CustomerExistingSourceAccountsMessage;

  getSourceaccountstatus(): string;
  setSourceaccountstatus(value: string): CustomerExistingSourceAccountsMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): CustomerExistingSourceAccountsMessage;

  getLogourl(): string;
  setLogourl(value: string): CustomerExistingSourceAccountsMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerExistingSourceAccountsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerExistingSourceAccountsMessage): CustomerExistingSourceAccountsMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerExistingSourceAccountsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerExistingSourceAccountsMessage;
  static deserializeBinaryFromReader(message: CustomerExistingSourceAccountsMessage, reader: jspb.BinaryReader): CustomerExistingSourceAccountsMessage;
}

export namespace CustomerExistingSourceAccountsMessage {
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

export class CustomerExistingSourceAccountsListMessage extends jspb.Message {
  getCustexistingaccountsList(): Array<CustomerExistingSourceAccountsMessage>;
  setCustexistingaccountsList(value: Array<CustomerExistingSourceAccountsMessage>): CustomerExistingSourceAccountsListMessage;
  clearCustexistingaccountsList(): CustomerExistingSourceAccountsListMessage;
  addCustexistingaccounts(value?: CustomerExistingSourceAccountsMessage, index?: number): CustomerExistingSourceAccountsMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerExistingSourceAccountsListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerExistingSourceAccountsListMessage): CustomerExistingSourceAccountsListMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerExistingSourceAccountsListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerExistingSourceAccountsListMessage;
  static deserializeBinaryFromReader(message: CustomerExistingSourceAccountsListMessage, reader: jspb.BinaryReader): CustomerExistingSourceAccountsListMessage;
}

export namespace CustomerExistingSourceAccountsListMessage {
  export type AsObject = {
    custexistingaccountsList: Array<CustomerExistingSourceAccountsMessage.AsObject>,
  }
}

export class MoneyTransferVerifyDestinationAccountNoRequestMessage extends jspb.Message {
  getDestinationpaypartnertypeid(): string;
  setDestinationpaypartnertypeid(value: string): MoneyTransferVerifyDestinationAccountNoRequestMessage;

  getDestinationpaypartnerid(): string;
  setDestinationpaypartnerid(value: string): MoneyTransferVerifyDestinationAccountNoRequestMessage;

  getDestinationaccountno(): string;
  setDestinationaccountno(value: string): MoneyTransferVerifyDestinationAccountNoRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyTransferVerifyDestinationAccountNoRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyTransferVerifyDestinationAccountNoRequestMessage): MoneyTransferVerifyDestinationAccountNoRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MoneyTransferVerifyDestinationAccountNoRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyTransferVerifyDestinationAccountNoRequestMessage;
  static deserializeBinaryFromReader(message: MoneyTransferVerifyDestinationAccountNoRequestMessage, reader: jspb.BinaryReader): MoneyTransferVerifyDestinationAccountNoRequestMessage;
}

export namespace MoneyTransferVerifyDestinationAccountNoRequestMessage {
  export type AsObject = {
    destinationpaypartnertypeid: string,
    destinationpaypartnerid: string,
    destinationaccountno: string,
  }
}

export class CalculateTransChargeRequestMessage extends jspb.Message {
  getSourcepaypartnerserviceid(): string;
  setSourcepaypartnerserviceid(value: string): CalculateTransChargeRequestMessage;

  getDestinationpaypartnerserviceid(): string;
  setDestinationpaypartnerserviceid(value: string): CalculateTransChargeRequestMessage;

  getTransamount(): number;
  setTransamount(value: number): CalculateTransChargeRequestMessage;

  getSenderaccountno(): string;
  setSenderaccountno(value: string): CalculateTransChargeRequestMessage;

  getBeneficiaryaccountno(): string;
  setBeneficiaryaccountno(value: string): CalculateTransChargeRequestMessage;

  getSendercountrycode(): string;
  setSendercountrycode(value: string): CalculateTransChargeRequestMessage;

  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): CalculateTransChargeRequestMessage;

  getSenderpaypartnergroupcode(): number;
  setSenderpaypartnergroupcode(value: number): CalculateTransChargeRequestMessage;

  getBeneficiarypaypartnergroupcode(): number;
  setBeneficiarypaypartnergroupcode(value: number): CalculateTransChargeRequestMessage;

  getSendertranscurrecyiso(): string;
  setSendertranscurrecyiso(value: string): CalculateTransChargeRequestMessage;

  getBeneficiarycurrecyiso(): string;
  setBeneficiarycurrecyiso(value: string): CalculateTransChargeRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CalculateTransChargeRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTransChargeRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTransChargeRequestMessage): CalculateTransChargeRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CalculateTransChargeRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTransChargeRequestMessage;
  static deserializeBinaryFromReader(message: CalculateTransChargeRequestMessage, reader: jspb.BinaryReader): CalculateTransChargeRequestMessage;
}

export namespace CalculateTransChargeRequestMessage {
  export type AsObject = {
    sourcepaypartnerserviceid: string,
    destinationpaypartnerserviceid: string,
    transamount: number,
    senderaccountno: string,
    beneficiaryaccountno: string,
    sendercountrycode: string,
    beneficiarycountrycode: string,
    senderpaypartnergroupcode: number,
    beneficiarypaypartnergroupcode: number,
    sendertranscurrecyiso: string,
    beneficiarycurrecyiso: string,
    languageid: string,
  }
}

export class CalculateTransChargeResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): CalculateTransChargeResponseMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): CalculateTransChargeResponseMessage;

  getMessage(): string;
  setMessage(value: string): CalculateTransChargeResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): CalculateTransChargeResponseMessage;

  getChargeamount(): number;
  setChargeamount(value: number): CalculateTransChargeResponseMessage;

  getTaxamountcharged(): number;
  setTaxamountcharged(value: number): CalculateTransChargeResponseMessage;

  getTotaltranspluschargeamountplustax(): number;
  setTotaltranspluschargeamountplustax(value: number): CalculateTransChargeResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CalculateTransChargeResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CalculateTransChargeResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTransChargeResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTransChargeResponseMessage): CalculateTransChargeResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CalculateTransChargeResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTransChargeResponseMessage;
  static deserializeBinaryFromReader(message: CalculateTransChargeResponseMessage, reader: jspb.BinaryReader): CalculateTransChargeResponseMessage;
}

export namespace CalculateTransChargeResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    transamount: number,
    chargeamount: number,
    taxamountcharged: number,
    totaltranspluschargeamountplustax: number,
    countrycode: string,
    languageid: string,
  }
}

export class PayPartnerListRequestMessage extends jspb.Message {
  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PayPartnerListRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerListRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerListRequestMessage): PayPartnerListRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerListRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerListRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerListRequestMessage, reader: jspb.BinaryReader): PayPartnerListRequestMessage;
}

export namespace PayPartnerListRequestMessage {
  export type AsObject = {
    paypartnertypeid: number,
  }
}

export class PayPartnerIdRequestMessage extends jspb.Message {
  getPaypartnerid(): number;
  setPaypartnerid(value: number): PayPartnerIdRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerIdRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerIdRequestMessage): PayPartnerIdRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerIdRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerIdRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerIdRequestMessage, reader: jspb.BinaryReader): PayPartnerIdRequestMessage;
}

export namespace PayPartnerIdRequestMessage {
  export type AsObject = {
    paypartnerid: number,
  }
}

export class PayPartnerRequestMessage extends jspb.Message {
  getPaypartnerid(): string;
  setPaypartnerid(value: string): PayPartnerRequestMessage;

  getPaypartnername(): string;
  setPaypartnername(value: string): PayPartnerRequestMessage;

  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PayPartnerRequestMessage;

  getPaypartnertypedesc(): string;
  setPaypartnertypedesc(value: string): PayPartnerRequestMessage;

  getInternalorexternal(): string;
  setInternalorexternal(value: string): PayPartnerRequestMessage;

  getPaypartnerlogourl(): string;
  setPaypartnerlogourl(value: string): PayPartnerRequestMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): PayPartnerRequestMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): PayPartnerRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PayPartnerRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PayPartnerRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerRequestMessage): PayPartnerRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerRequestMessage, reader: jspb.BinaryReader): PayPartnerRequestMessage;
}

export namespace PayPartnerRequestMessage {
  export type AsObject = {
    paypartnerid: string,
    paypartnername: string,
    paypartnertypeid: number,
    paypartnertypedesc: string,
    internalorexternal: string,
    paypartnerlogourl: string,
    paypartnerserviceid: string,
    paypartnerservicename: string,
    countrycode: string,
    languageid: string,
  }
}

export class PayPartnerListResponseMessage extends jspb.Message {
  getPaypartnersmomoList(): Array<PayPartnerRequestMessage>;
  setPaypartnersmomoList(value: Array<PayPartnerRequestMessage>): PayPartnerListResponseMessage;
  clearPaypartnersmomoList(): PayPartnerListResponseMessage;
  addPaypartnersmomo(value?: PayPartnerRequestMessage, index?: number): PayPartnerRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerListResponseMessage): PayPartnerListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerListResponseMessage;
  static deserializeBinaryFromReader(message: PayPartnerListResponseMessage, reader: jspb.BinaryReader): PayPartnerListResponseMessage;
}

export namespace PayPartnerListResponseMessage {
  export type AsObject = {
    paypartnersmomoList: Array<PayPartnerRequestMessage.AsObject>,
  }
}

export class VerifyCustomerPinMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): VerifyCustomerPinMessage;

  getCustomerpin(): string;
  setCustomerpin(value: string): VerifyCustomerPinMessage;

  getCountrycode(): string;
  setCountrycode(value: string): VerifyCustomerPinMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCustomerPinMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCustomerPinMessage): VerifyCustomerPinMessage.AsObject;
  static serializeBinaryToWriter(message: VerifyCustomerPinMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCustomerPinMessage;
  static deserializeBinaryFromReader(message: VerifyCustomerPinMessage, reader: jspb.BinaryReader): VerifyCustomerPinMessage;
}

export namespace VerifyCustomerPinMessage {
  export type AsObject = {
    customerid: string,
    customerpin: string,
    countrycode: string,
  }
}

export class IsCustomerPinValidResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): IsCustomerPinValidResponseMessage;

  getMessage(): string;
  setMessage(value: string): IsCustomerPinValidResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCustomerPinValidResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: IsCustomerPinValidResponseMessage): IsCustomerPinValidResponseMessage.AsObject;
  static serializeBinaryToWriter(message: IsCustomerPinValidResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCustomerPinValidResponseMessage;
  static deserializeBinaryFromReader(message: IsCustomerPinValidResponseMessage, reader: jspb.BinaryReader): IsCustomerPinValidResponseMessage;
}

export namespace IsCustomerPinValidResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    message: string,
  }
}

export class BeneficiaryListByPayPartnerRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): BeneficiaryListByPayPartnerRequestMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): BeneficiaryListByPayPartnerRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BeneficiaryListByPayPartnerRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeneficiaryListByPayPartnerRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BeneficiaryListByPayPartnerRequestMessage): BeneficiaryListByPayPartnerRequestMessage.AsObject;
  static serializeBinaryToWriter(message: BeneficiaryListByPayPartnerRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeneficiaryListByPayPartnerRequestMessage;
  static deserializeBinaryFromReader(message: BeneficiaryListByPayPartnerRequestMessage, reader: jspb.BinaryReader): BeneficiaryListByPayPartnerRequestMessage;
}

export namespace BeneficiaryListByPayPartnerRequestMessage {
  export type AsObject = {
    countrycode: string,
    paypartnergroupcode: number,
    languageid: string,
  }
}

export class BeneficiaryListByProviderRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): BeneficiaryListByProviderRequestMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): BeneficiaryListByProviderRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BeneficiaryListByProviderRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeneficiaryListByProviderRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BeneficiaryListByProviderRequestMessage): BeneficiaryListByProviderRequestMessage.AsObject;
  static serializeBinaryToWriter(message: BeneficiaryListByProviderRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeneficiaryListByProviderRequestMessage;
  static deserializeBinaryFromReader(message: BeneficiaryListByProviderRequestMessage, reader: jspb.BinaryReader): BeneficiaryListByProviderRequestMessage;
}

export namespace BeneficiaryListByProviderRequestMessage {
  export type AsObject = {
    countrycode: string,
    paypartnerserviceid: string,
    languageid: string,
  }
}

export class EganowBeneficiaryMobileNoRequestMessage extends jspb.Message {
  getBeneficiarymobilenumber(): string;
  setBeneficiarymobilenumber(value: string): EganowBeneficiaryMobileNoRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): EganowBeneficiaryMobileNoRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): EganowBeneficiaryMobileNoRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EganowBeneficiaryMobileNoRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EganowBeneficiaryMobileNoRequestMessage): EganowBeneficiaryMobileNoRequestMessage.AsObject;
  static serializeBinaryToWriter(message: EganowBeneficiaryMobileNoRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EganowBeneficiaryMobileNoRequestMessage;
  static deserializeBinaryFromReader(message: EganowBeneficiaryMobileNoRequestMessage, reader: jspb.BinaryReader): EganowBeneficiaryMobileNoRequestMessage;
}

export namespace EganowBeneficiaryMobileNoRequestMessage {
  export type AsObject = {
    beneficiarymobilenumber: string,
    countrycode: string,
    languageid: string,
  }
}

export class BeneficiaryByPayPartnerResponseMessage extends jspb.Message {
  getBeneficiaryaccountname(): string;
  setBeneficiaryaccountname(value: string): BeneficiaryByPayPartnerResponseMessage;

  getBeneficiaryaccountno(): string;
  setBeneficiaryaccountno(value: string): BeneficiaryByPayPartnerResponseMessage;

  getDisplayaccountno(): string;
  setDisplayaccountno(value: string): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnername(): string;
  setPaypartnername(value: string): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnersymbol(): string;
  setPaypartnersymbol(value: string): BeneficiaryByPayPartnerResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): BeneficiaryByPayPartnerResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): BeneficiaryByPayPartnerResponseMessage;

  getBankinstitutionname(): string;
  setBankinstitutionname(value: string): BeneficiaryByPayPartnerResponseMessage;

  getBankinstitutioncode(): string;
  setBankinstitutioncode(value: string): BeneficiaryByPayPartnerResponseMessage;

  getBankbranchname(): string;
  setBankbranchname(value: string): BeneficiaryByPayPartnerResponseMessage;

  getBankbranchcode(): string;
  setBankbranchcode(value: string): BeneficiaryByPayPartnerResponseMessage;

  getDisplaybeneficiaryaccountno(): string;
  setDisplaybeneficiaryaccountno(value: string): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): BeneficiaryByPayPartnerResponseMessage;

  getPaypartnergroupname(): string;
  setPaypartnergroupname(value: string): BeneficiaryByPayPartnerResponseMessage;

  getCountryname(): string;
  setCountryname(value: string): BeneficiaryByPayPartnerResponseMessage;

  getLogourl(): string;
  setLogourl(value: string): BeneficiaryByPayPartnerResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeneficiaryByPayPartnerResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BeneficiaryByPayPartnerResponseMessage): BeneficiaryByPayPartnerResponseMessage.AsObject;
  static serializeBinaryToWriter(message: BeneficiaryByPayPartnerResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeneficiaryByPayPartnerResponseMessage;
  static deserializeBinaryFromReader(message: BeneficiaryByPayPartnerResponseMessage, reader: jspb.BinaryReader): BeneficiaryByPayPartnerResponseMessage;
}

export namespace BeneficiaryByPayPartnerResponseMessage {
  export type AsObject = {
    beneficiaryaccountname: string,
    beneficiaryaccountno: string,
    displayaccountno: string,
    paypartnerid: string,
    paypartnertypeid: number,
    paypartnername: string,
    paypartnersymbol: string,
    currencyiso: string,
    countrycode: string,
    bankinstitutionname: string,
    bankinstitutioncode: string,
    bankbranchname: string,
    bankbranchcode: string,
    displaybeneficiaryaccountno: string,
    paypartnergroupcode: number,
    paypartnerservicename: string,
    paypartnergroupname: string,
    countryname: string,
    logourl: string,
  }
}

export class BeneficiaryListByPayPartnerResponseMessage extends jspb.Message {
  getBeneficiarylistList(): Array<BeneficiaryByPayPartnerResponseMessage>;
  setBeneficiarylistList(value: Array<BeneficiaryByPayPartnerResponseMessage>): BeneficiaryListByPayPartnerResponseMessage;
  clearBeneficiarylistList(): BeneficiaryListByPayPartnerResponseMessage;
  addBeneficiarylist(value?: BeneficiaryByPayPartnerResponseMessage, index?: number): BeneficiaryByPayPartnerResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeneficiaryListByPayPartnerResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BeneficiaryListByPayPartnerResponseMessage): BeneficiaryListByPayPartnerResponseMessage.AsObject;
  static serializeBinaryToWriter(message: BeneficiaryListByPayPartnerResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeneficiaryListByPayPartnerResponseMessage;
  static deserializeBinaryFromReader(message: BeneficiaryListByPayPartnerResponseMessage, reader: jspb.BinaryReader): BeneficiaryListByPayPartnerResponseMessage;
}

export namespace BeneficiaryListByPayPartnerResponseMessage {
  export type AsObject = {
    beneficiarylistList: Array<BeneficiaryByPayPartnerResponseMessage.AsObject>,
  }
}

export class CustomerSourceAcctRequestMessage extends jspb.Message {
  getSourceaccountno(): string;
  setSourceaccountno(value: string): CustomerSourceAcctRequestMessage;

  getSourceaccountname(): string;
  setSourceaccountname(value: string): CustomerSourceAcctRequestMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): CustomerSourceAcctRequestMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): CustomerSourceAcctRequestMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CustomerSourceAcctRequestMessage;

  getOtpvalue(): string;
  setOtpvalue(value: string): CustomerSourceAcctRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerSourceAcctRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerSourceAcctRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSourceAcctRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSourceAcctRequestMessage): CustomerSourceAcctRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerSourceAcctRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSourceAcctRequestMessage;
  static deserializeBinaryFromReader(message: CustomerSourceAcctRequestMessage, reader: jspb.BinaryReader): CustomerSourceAcctRequestMessage;
}

export namespace CustomerSourceAcctRequestMessage {
  export type AsObject = {
    sourceaccountno: string,
    sourceaccountname: string,
    paypartnerserviceid: string,
    paypartnergroupcode: number,
    currencyiso: string,
    otpvalue: string,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerSourceAcctCardRequestMessage extends jspb.Message {
  getCardnumber(): string;
  setCardnumber(value: string): CustomerSourceAcctCardRequestMessage;

  getNameoncard(): string;
  setNameoncard(value: string): CustomerSourceAcctCardRequestMessage;

  getExpirydatemonth(): number;
  setExpirydatemonth(value: number): CustomerSourceAcctCardRequestMessage;

  getExpirydateyear(): number;
  setExpirydateyear(value: number): CustomerSourceAcctCardRequestMessage;

  getCvv(): string;
  setCvv(value: string): CustomerSourceAcctCardRequestMessage;

  getMobileorweb(): string;
  setMobileorweb(value: string): CustomerSourceAcctCardRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerSourceAcctCardRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerSourceAcctCardRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSourceAcctCardRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSourceAcctCardRequestMessage): CustomerSourceAcctCardRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerSourceAcctCardRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSourceAcctCardRequestMessage;
  static deserializeBinaryFromReader(message: CustomerSourceAcctCardRequestMessage, reader: jspb.BinaryReader): CustomerSourceAcctCardRequestMessage;
}

export namespace CustomerSourceAcctCardRequestMessage {
  export type AsObject = {
    cardnumber: string,
    nameoncard: string,
    expirydatemonth: number,
    expirydateyear: number,
    cvv: string,
    mobileorweb: string,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerSourceAcctCardResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): CustomerSourceAcctCardResponseMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): CustomerSourceAcctCardResponseMessage;

  getMessage(): string;
  setMessage(value: string): CustomerSourceAcctCardResponseMessage;

  getRedirectotpurl(): string;
  setRedirectotpurl(value: string): CustomerSourceAcctCardResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSourceAcctCardResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSourceAcctCardResponseMessage): CustomerSourceAcctCardResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerSourceAcctCardResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSourceAcctCardResponseMessage;
  static deserializeBinaryFromReader(message: CustomerSourceAcctCardResponseMessage, reader: jspb.BinaryReader): CustomerSourceAcctCardResponseMessage;
}

export namespace CustomerSourceAcctCardResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    redirectotpurl: string,
  }
}

export class CustomerBeneficiaryAcctRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerBeneficiaryAcctRequestMessage;

  getBeneficiaryaccountno(): string;
  setBeneficiaryaccountno(value: string): CustomerBeneficiaryAcctRequestMessage;

  getBeneficiaryaccountname(): string;
  setBeneficiaryaccountname(value: string): CustomerBeneficiaryAcctRequestMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): CustomerBeneficiaryAcctRequestMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): CustomerBeneficiaryAcctRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerBeneficiaryAcctRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerBeneficiaryAcctRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerBeneficiaryAcctRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerBeneficiaryAcctRequestMessage): CustomerBeneficiaryAcctRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerBeneficiaryAcctRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerBeneficiaryAcctRequestMessage;
  static deserializeBinaryFromReader(message: CustomerBeneficiaryAcctRequestMessage, reader: jspb.BinaryReader): CustomerBeneficiaryAcctRequestMessage;
}

export namespace CustomerBeneficiaryAcctRequestMessage {
  export type AsObject = {
    customerid: string,
    beneficiaryaccountno: string,
    beneficiaryaccountname: string,
    paypartnerserviceid: string,
    paypartnergroupcode: number,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRequestMessage): CustomerRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRequestMessage;
  static deserializeBinaryFromReader(message: CustomerRequestMessage, reader: jspb.BinaryReader): CustomerRequestMessage;
}

export namespace CustomerRequestMessage {
  export type AsObject = {
    customerid: string,
    countrycode: string,
  }
}

export class CustomerBalanceRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerBalanceRequestMessage;

  getMobileorweborussd(): string;
  setMobileorweborussd(value: string): CustomerBalanceRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerBalanceRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerBalanceRequestMessage): CustomerBalanceRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerBalanceRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerBalanceRequestMessage;
  static deserializeBinaryFromReader(message: CustomerBalanceRequestMessage, reader: jspb.BinaryReader): CustomerBalanceRequestMessage;
}

export namespace CustomerBalanceRequestMessage {
  export type AsObject = {
    customerid: string,
    mobileorweborussd: string,
  }
}

export class CustomerEganowWalletBalanceResponse extends jspb.Message {
  getAccountno(): string;
  setAccountno(value: string): CustomerEganowWalletBalanceResponse;

  getAccountname(): string;
  setAccountname(value: string): CustomerEganowWalletBalanceResponse;

  getAvailablebalance(): number;
  setAvailablebalance(value: number): CustomerEganowWalletBalanceResponse;

  getLastlogindatestring(): string;
  setLastlogindatestring(value: string): CustomerEganowWalletBalanceResponse;

  getLastloginlocation(): string;
  setLastloginlocation(value: string): CustomerEganowWalletBalanceResponse;

  getLastloginchannel(): string;
  setLastloginchannel(value: string): CustomerEganowWalletBalanceResponse;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CustomerEganowWalletBalanceResponse;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): CustomerEganowWalletBalanceResponse;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerEganowWalletBalanceResponse;

  getDisplayaccountno(): string;
  setDisplayaccountno(value: string): CustomerEganowWalletBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerEganowWalletBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerEganowWalletBalanceResponse): CustomerEganowWalletBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerEganowWalletBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerEganowWalletBalanceResponse;
  static deserializeBinaryFromReader(message: CustomerEganowWalletBalanceResponse, reader: jspb.BinaryReader): CustomerEganowWalletBalanceResponse;
}

export namespace CustomerEganowWalletBalanceResponse {
  export type AsObject = {
    accountno: string,
    accountname: string,
    availablebalance: number,
    lastlogindatestring: string,
    lastloginlocation: string,
    lastloginchannel: string,
    currencyiso: string,
    countryflagurl: string,
    countrycode: string,
    displayaccountno: string,
  }
}

export class MerchantCustomerAccountNoRequestMessage extends jspb.Message {
  getCustomeracctno(): string;
  setCustomeracctno(value: string): MerchantCustomerAccountNoRequestMessage;

  getMerchantserviceid(): string;
  setMerchantserviceid(value: string): MerchantCustomerAccountNoRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantCustomerAccountNoRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantCustomerAccountNoRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerAccountNoRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerAccountNoRequestMessage): MerchantCustomerAccountNoRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerAccountNoRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerAccountNoRequestMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerAccountNoRequestMessage, reader: jspb.BinaryReader): MerchantCustomerAccountNoRequestMessage;
}

export namespace MerchantCustomerAccountNoRequestMessage {
  export type AsObject = {
    customeracctno: string,
    merchantserviceid: string,
    countrycode: string,
    languageid: string,
  }
}

export class MerchantCustomerAccountNoResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): MerchantCustomerAccountNoResponseMessage;

  getMessage(): string;
  setMessage(value: string): MerchantCustomerAccountNoResponseMessage;

  getCustomername(): string;
  setCustomername(value: string): MerchantCustomerAccountNoResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCustomerAccountNoResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCustomerAccountNoResponseMessage): MerchantCustomerAccountNoResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantCustomerAccountNoResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCustomerAccountNoResponseMessage;
  static deserializeBinaryFromReader(message: MerchantCustomerAccountNoResponseMessage, reader: jspb.BinaryReader): MerchantCustomerAccountNoResponseMessage;
}

export namespace MerchantCustomerAccountNoResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    message: string,
    customername: string,
  }
}

export class CustomerEganowWalletBalanceListResponse extends jspb.Message {
  getBallistList(): Array<CustomerEganowWalletBalanceResponse>;
  setBallistList(value: Array<CustomerEganowWalletBalanceResponse>): CustomerEganowWalletBalanceListResponse;
  clearBallistList(): CustomerEganowWalletBalanceListResponse;
  addBallist(value?: CustomerEganowWalletBalanceResponse, index?: number): CustomerEganowWalletBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerEganowWalletBalanceListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerEganowWalletBalanceListResponse): CustomerEganowWalletBalanceListResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerEganowWalletBalanceListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerEganowWalletBalanceListResponse;
  static deserializeBinaryFromReader(message: CustomerEganowWalletBalanceListResponse, reader: jspb.BinaryReader): CustomerEganowWalletBalanceListResponse;
}

export namespace CustomerEganowWalletBalanceListResponse {
  export type AsObject = {
    ballistList: Array<CustomerEganowWalletBalanceResponse.AsObject>,
  }
}

export class CustomerLastNTransRequestMessage extends jspb.Message {
  getAccountno(): string;
  setAccountno(value: string): CustomerLastNTransRequestMessage;

  getRecentnooftrans(): number;
  setRecentnooftrans(value: number): CustomerLastNTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLastNTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLastNTransRequestMessage): CustomerLastNTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerLastNTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLastNTransRequestMessage;
  static deserializeBinaryFromReader(message: CustomerLastNTransRequestMessage, reader: jspb.BinaryReader): CustomerLastNTransRequestMessage;
}

export namespace CustomerLastNTransRequestMessage {
  export type AsObject = {
    accountno: string,
    recentnooftrans: number,
  }
}

export class CustomerLastNTransResponseMessage extends jspb.Message {
  getAccountno(): string;
  setAccountno(value: string): CustomerLastNTransResponseMessage;

  getAccountname(): string;
  setAccountname(value: string): CustomerLastNTransResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): CustomerLastNTransResponseMessage;

  getDrcr(): string;
  setDrcr(value: string): CustomerLastNTransResponseMessage;

  getValuedatestring(): string;
  setValuedatestring(value: string): CustomerLastNTransResponseMessage;

  getTransstatus(): string;
  setTransstatus(value: string): CustomerLastNTransResponseMessage;

  getTransactionreference(): string;
  setTransactionreference(value: string): CustomerLastNTransResponseMessage;

  getTranschannel(): string;
  setTranschannel(value: string): CustomerLastNTransResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CustomerLastNTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLastNTransResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLastNTransResponseMessage): CustomerLastNTransResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerLastNTransResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLastNTransResponseMessage;
  static deserializeBinaryFromReader(message: CustomerLastNTransResponseMessage, reader: jspb.BinaryReader): CustomerLastNTransResponseMessage;
}

export namespace CustomerLastNTransResponseMessage {
  export type AsObject = {
    accountno: string,
    accountname: string,
    transamount: number,
    drcr: string,
    valuedatestring: string,
    transstatus: string,
    transactionreference: string,
    transchannel: string,
    currencyiso: string,
  }
}

export class CustomerLastNTransListResponseMessage extends jspb.Message {
  getTranslistList(): Array<CustomerLastNTransResponseMessage>;
  setTranslistList(value: Array<CustomerLastNTransResponseMessage>): CustomerLastNTransListResponseMessage;
  clearTranslistList(): CustomerLastNTransListResponseMessage;
  addTranslist(value?: CustomerLastNTransResponseMessage, index?: number): CustomerLastNTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLastNTransListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLastNTransListResponseMessage): CustomerLastNTransListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerLastNTransListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLastNTransListResponseMessage;
  static deserializeBinaryFromReader(message: CustomerLastNTransListResponseMessage, reader: jspb.BinaryReader): CustomerLastNTransListResponseMessage;
}

export namespace CustomerLastNTransListResponseMessage {
  export type AsObject = {
    translistList: Array<CustomerLastNTransResponseMessage.AsObject>,
  }
}

export class CustTransRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): CustTransRequestMessage;

  getTopn(): number;
  setTopn(value: number): CustTransRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustTransRequestMessage): CustTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustTransRequestMessage;
  static deserializeBinaryFromReader(message: CustTransRequestMessage, reader: jspb.BinaryReader): CustTransRequestMessage;
}

export namespace CustTransRequestMessage {
  export type AsObject = {
    countrycode: string,
    topn: number,
    languageid: string,
  }
}

export class CustTransResponseMessage extends jspb.Message {
  getValuedate(): string;
  setValuedate(value: string): CustTransResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): CustTransResponseMessage;

  getFeeamount(): number;
  setFeeamount(value: number): CustTransResponseMessage;

  getTotalamount(): number;
  setTotalamount(value: number): CustTransResponseMessage;

  getTranscurrencyiso(): string;
  setTranscurrencyiso(value: string): CustTransResponseMessage;

  getCashinout(): string;
  setCashinout(value: string): CustTransResponseMessage;

  getAccountname(): string;
  setAccountname(value: string): CustTransResponseMessage;

  getTransstatus(): string;
  setTransstatus(value: string): CustTransResponseMessage;

  getTransactionnarration(): string;
  setTransactionnarration(value: string): CustTransResponseMessage;

  getSenderaccountno(): string;
  setSenderaccountno(value: string): CustTransResponseMessage;

  getSenderaccountname(): string;
  setSenderaccountname(value: string): CustTransResponseMessage;

  getBeneficiaryaccountno(): string;
  setBeneficiaryaccountno(value: string): CustTransResponseMessage;

  getBeneficiaryaccountname(): string;
  setBeneficiaryaccountname(value: string): CustTransResponseMessage;

  getSenderacctprovider(): string;
  setSenderacctprovider(value: string): CustTransResponseMessage;

  getBeneficiaryacctprovider(): string;
  setBeneficiaryacctprovider(value: string): CustTransResponseMessage;

  getSenderlogourl(): string;
  setSenderlogourl(value: string): CustTransResponseMessage;

  getBeneficiarylogourl(): string;
  setBeneficiarylogourl(value: string): CustTransResponseMessage;

  getMobileorweborussd(): string;
  setMobileorweborussd(value: string): CustTransResponseMessage;

  getMakedatetime(): string;
  setMakedatetime(value: string): CustTransResponseMessage;

  getJournalrefno(): string;
  setJournalrefno(value: string): CustTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustTransResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustTransResponseMessage): CustTransResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustTransResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustTransResponseMessage;
  static deserializeBinaryFromReader(message: CustTransResponseMessage, reader: jspb.BinaryReader): CustTransResponseMessage;
}

export namespace CustTransResponseMessage {
  export type AsObject = {
    valuedate: string,
    transamount: number,
    feeamount: number,
    totalamount: number,
    transcurrencyiso: string,
    cashinout: string,
    accountname: string,
    transstatus: string,
    transactionnarration: string,
    senderaccountno: string,
    senderaccountname: string,
    beneficiaryaccountno: string,
    beneficiaryaccountname: string,
    senderacctprovider: string,
    beneficiaryacctprovider: string,
    senderlogourl: string,
    beneficiarylogourl: string,
    mobileorweborussd: string,
    makedatetime: string,
    journalrefno: string,
  }
}

export class CustTransListResponseMessage extends jspb.Message {
  getTranslistList(): Array<CustTransResponseMessage>;
  setTranslistList(value: Array<CustTransResponseMessage>): CustTransListResponseMessage;
  clearTranslistList(): CustTransListResponseMessage;
  addTranslist(value?: CustTransResponseMessage, index?: number): CustTransResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustTransListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustTransListResponseMessage): CustTransListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustTransListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustTransListResponseMessage;
  static deserializeBinaryFromReader(message: CustTransListResponseMessage, reader: jspb.BinaryReader): CustTransListResponseMessage;
}

export namespace CustTransListResponseMessage {
  export type AsObject = {
    translistList: Array<CustTransResponseMessage.AsObject>,
  }
}

export class CustStatementResponseMessage extends jspb.Message {
  getValuedatestr(): string;
  setValuedatestr(value: string): CustStatementResponseMessage;

  getTransamount(): number;
  setTransamount(value: number): CustStatementResponseMessage;

  getBalance(): number;
  setBalance(value: number): CustStatementResponseMessage;

  getDebitorcredit(): string;
  setDebitorcredit(value: string): CustStatementResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CustStatementResponseMessage;

  getTransnarration(): string;
  setTransnarration(value: string): CustStatementResponseMessage;

  getMainorfeeortransfer(): string;
  setMainorfeeortransfer(value: string): CustStatementResponseMessage;

  getInitiatedbybackofficeormobileorweborussd(): string;
  setInitiatedbybackofficeormobileorweborussd(value: string): CustStatementResponseMessage;

  getPersonsenttoorrecivedfrom(): string;
  setPersonsenttoorrecivedfrom(value: string): CustStatementResponseMessage;

  getServicesenttoorrecivedlogourl(): string;
  setServicesenttoorrecivedlogourl(value: string): CustStatementResponseMessage;

  getServicesenttoorrecivedfrom(): string;
  setServicesenttoorrecivedfrom(value: string): CustStatementResponseMessage;

  getSenttoorreceivedfromlable(): string;
  setSenttoorreceivedfromlable(value: string): CustStatementResponseMessage;

  getJournalrefno(): string;
  setJournalrefno(value: string): CustStatementResponseMessage;

  getMakedatetime(): string;
  setMakedatetime(value: string): CustStatementResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustStatementResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustStatementResponseMessage): CustStatementResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustStatementResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustStatementResponseMessage;
  static deserializeBinaryFromReader(message: CustStatementResponseMessage, reader: jspb.BinaryReader): CustStatementResponseMessage;
}

export namespace CustStatementResponseMessage {
  export type AsObject = {
    valuedatestr: string,
    transamount: number,
    balance: number,
    debitorcredit: string,
    currencyiso: string,
    transnarration: string,
    mainorfeeortransfer: string,
    initiatedbybackofficeormobileorweborussd: string,
    personsenttoorrecivedfrom: string,
    servicesenttoorrecivedlogourl: string,
    servicesenttoorrecivedfrom: string,
    senttoorreceivedfromlable: string,
    journalrefno: string,
    makedatetime: string,
  }
}

export class CustStatementListResponseMessage extends jspb.Message {
  getTranslistList(): Array<CustStatementResponseMessage>;
  setTranslistList(value: Array<CustStatementResponseMessage>): CustStatementListResponseMessage;
  clearTranslistList(): CustStatementListResponseMessage;
  addTranslist(value?: CustStatementResponseMessage, index?: number): CustStatementResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustStatementListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustStatementListResponseMessage): CustStatementListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustStatementListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustStatementListResponseMessage;
  static deserializeBinaryFromReader(message: CustStatementListResponseMessage, reader: jspb.BinaryReader): CustStatementListResponseMessage;
}

export namespace CustStatementListResponseMessage {
  export type AsObject = {
    translistList: Array<CustStatementResponseMessage.AsObject>,
  }
}

