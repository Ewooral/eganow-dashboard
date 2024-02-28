import * as jspb from 'google-protobuf'



export class EmptyCommonDataMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyCommonDataMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyCommonDataMessage): EmptyCommonDataMessage.AsObject;
  static serializeBinaryToWriter(message: EmptyCommonDataMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyCommonDataMessage;
  static deserializeBinaryFromReader(message: EmptyCommonDataMessage, reader: jspb.BinaryReader): EmptyCommonDataMessage;
}

export namespace EmptyCommonDataMessage {
  export type AsObject = {
  }
}

export class LanguageRequestMessage extends jspb.Message {
  getLanguageid(): string;
  setLanguageid(value: string): LanguageRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageRequestMessage): LanguageRequestMessage.AsObject;
  static serializeBinaryToWriter(message: LanguageRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageRequestMessage;
  static deserializeBinaryFromReader(message: LanguageRequestMessage, reader: jspb.BinaryReader): LanguageRequestMessage;
}

export namespace LanguageRequestMessage {
  export type AsObject = {
    languageid: string,
  }
}

export class SuccessCommonMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SuccessCommonMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): SuccessCommonMessage;

  getMessage(): string;
  setMessage(value: string): SuccessCommonMessage;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): SuccessCommonMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessCommonMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessCommonMessage): SuccessCommonMessage.AsObject;
  static serializeBinaryToWriter(message: SuccessCommonMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessCommonMessage;
  static deserializeBinaryFromReader(message: SuccessCommonMessage, reader: jspb.BinaryReader): SuccessCommonMessage;
}

export namespace SuccessCommonMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
  }
}

export class CountryRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): CountryRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CountryRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CountryRequestMessage): CountryRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CountryRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryRequestMessage;
  static deserializeBinaryFromReader(message: CountryRequestMessage, reader: jspb.BinaryReader): CountryRequestMessage;
}

export namespace CountryRequestMessage {
  export type AsObject = {
    countrycode: string,
    languageid: string,
  }
}

export class SendingAmountRequestMessage extends jspb.Message {
  getBeneficiarycountrycode(): string;
  setBeneficiarycountrycode(value: string): SendingAmountRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): SendingAmountRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendingAmountRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SendingAmountRequestMessage): SendingAmountRequestMessage.AsObject;
  static serializeBinaryToWriter(message: SendingAmountRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendingAmountRequestMessage;
  static deserializeBinaryFromReader(message: SendingAmountRequestMessage, reader: jspb.BinaryReader): SendingAmountRequestMessage;
}

export namespace SendingAmountRequestMessage {
  export type AsObject = {
    beneficiarycountrycode: string,
    languageid: string,
  }
}

export class CountryResponseMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): CountryResponseMessage;

  getCountryname(): string;
  setCountryname(value: string): CountryResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CountryResponseMessage;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): CountryResponseMessage;

  getMobilenominlen(): number;
  setMobilenominlen(value: number): CountryResponseMessage;

  getMobilenomaxlen(): number;
  setMobilenomaxlen(value: number): CountryResponseMessage;

  getCountrydialcode(): string;
  setCountrydialcode(value: string): CountryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CountryResponseMessage): CountryResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CountryResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryResponseMessage;
  static deserializeBinaryFromReader(message: CountryResponseMessage, reader: jspb.BinaryReader): CountryResponseMessage;
}

export namespace CountryResponseMessage {
  export type AsObject = {
    countrycode: string,
    countryname: string,
    currencyiso: string,
    countryflagurl: string,
    mobilenominlen: number,
    mobilenomaxlen: number,
    countrydialcode: string,
  }
}

export class CountryListResponseMessage extends jspb.Message {
  getCountrylistList(): Array<CountryResponseMessage>;
  setCountrylistList(value: Array<CountryResponseMessage>): CountryListResponseMessage;
  clearCountrylistList(): CountryListResponseMessage;
  addCountrylist(value?: CountryResponseMessage, index?: number): CountryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CountryListResponseMessage): CountryListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CountryListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryListResponseMessage;
  static deserializeBinaryFromReader(message: CountryListResponseMessage, reader: jspb.BinaryReader): CountryListResponseMessage;
}

export namespace CountryListResponseMessage {
  export type AsObject = {
    countrylistList: Array<CountryResponseMessage.AsObject>,
  }
}

export class PaymentAcctTypesMessage extends jspb.Message {
  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PaymentAcctTypesMessage;

  getPaypartnergroupid(): number;
  setPaypartnergroupid(value: number): PaymentAcctTypesMessage;

  getAppname(): string;
  setAppname(value: string): PaymentAcctTypesMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PaymentAcctTypesMessage;

  getCountryname(): string;
  setCountryname(value: string): PaymentAcctTypesMessage;

  getPaypartnergroupurl(): string;
  setPaypartnergroupurl(value: string): PaymentAcctTypesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAcctTypesMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAcctTypesMessage): PaymentAcctTypesMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentAcctTypesMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAcctTypesMessage;
  static deserializeBinaryFromReader(message: PaymentAcctTypesMessage, reader: jspb.BinaryReader): PaymentAcctTypesMessage;
}

export namespace PaymentAcctTypesMessage {
  export type AsObject = {
    paypartnertypeid: number,
    paypartnergroupid: number,
    appname: string,
    countrycode: string,
    countryname: string,
    paypartnergroupurl: string,
  }
}

export class PaymentAcctTypesListResponseMessage extends jspb.Message {
  getPaymenttypelistList(): Array<PaymentAcctTypesMessage>;
  setPaymenttypelistList(value: Array<PaymentAcctTypesMessage>): PaymentAcctTypesListResponseMessage;
  clearPaymenttypelistList(): PaymentAcctTypesListResponseMessage;
  addPaymenttypelist(value?: PaymentAcctTypesMessage, index?: number): PaymentAcctTypesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAcctTypesListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAcctTypesListResponseMessage): PaymentAcctTypesListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentAcctTypesListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAcctTypesListResponseMessage;
  static deserializeBinaryFromReader(message: PaymentAcctTypesListResponseMessage, reader: jspb.BinaryReader): PaymentAcctTypesListResponseMessage;
}

export namespace PaymentAcctTypesListResponseMessage {
  export type AsObject = {
    paymenttypelistList: Array<PaymentAcctTypesMessage.AsObject>,
  }
}

export class PaymentAcctTypesAndServicesMessage extends jspb.Message {
  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PaymentAcctTypesAndServicesMessage;

  getPaypartnertypedesc(): string;
  setPaypartnertypedesc(value: string): PaymentAcctTypesAndServicesMessage;

  getAppname(): string;
  setAppname(value: string): PaymentAcctTypesAndServicesMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): PaymentAcctTypesAndServicesMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): PaymentAcctTypesAndServicesMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PaymentAcctTypesAndServicesMessage;

  getCountryname(): string;
  setCountryname(value: string): PaymentAcctTypesAndServicesMessage;

  getPaypartnergroupid(): number;
  setPaypartnergroupid(value: number): PaymentAcctTypesAndServicesMessage;

  getPartnergatewaycode(): string;
  setPartnergatewaycode(value: string): PaymentAcctTypesAndServicesMessage;

  getLogourl(): string;
  setLogourl(value: string): PaymentAcctTypesAndServicesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAcctTypesAndServicesMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAcctTypesAndServicesMessage): PaymentAcctTypesAndServicesMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentAcctTypesAndServicesMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAcctTypesAndServicesMessage;
  static deserializeBinaryFromReader(message: PaymentAcctTypesAndServicesMessage, reader: jspb.BinaryReader): PaymentAcctTypesAndServicesMessage;
}

export namespace PaymentAcctTypesAndServicesMessage {
  export type AsObject = {
    paypartnertypeid: number,
    paypartnertypedesc: string,
    appname: string,
    paypartnerserviceid: string,
    paypartnerservicename: string,
    countrycode: string,
    countryname: string,
    paypartnergroupid: number,
    partnergatewaycode: string,
    logourl: string,
  }
}

export class PaymentAcctTypesAndServicesListResponseMessage extends jspb.Message {
  getPaymenttypeslistList(): Array<PaymentAcctTypesMessage>;
  setPaymenttypeslistList(value: Array<PaymentAcctTypesMessage>): PaymentAcctTypesAndServicesListResponseMessage;
  clearPaymenttypeslistList(): PaymentAcctTypesAndServicesListResponseMessage;
  addPaymenttypeslist(value?: PaymentAcctTypesMessage, index?: number): PaymentAcctTypesMessage;

  getPaymenttypesandsvclistList(): Array<PaymentAcctTypesAndServicesMessage>;
  setPaymenttypesandsvclistList(value: Array<PaymentAcctTypesAndServicesMessage>): PaymentAcctTypesAndServicesListResponseMessage;
  clearPaymenttypesandsvclistList(): PaymentAcctTypesAndServicesListResponseMessage;
  addPaymenttypesandsvclist(value?: PaymentAcctTypesAndServicesMessage, index?: number): PaymentAcctTypesAndServicesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAcctTypesAndServicesListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAcctTypesAndServicesListResponseMessage): PaymentAcctTypesAndServicesListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PaymentAcctTypesAndServicesListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAcctTypesAndServicesListResponseMessage;
  static deserializeBinaryFromReader(message: PaymentAcctTypesAndServicesListResponseMessage, reader: jspb.BinaryReader): PaymentAcctTypesAndServicesListResponseMessage;
}

export namespace PaymentAcctTypesAndServicesListResponseMessage {
  export type AsObject = {
    paymenttypeslistList: Array<PaymentAcctTypesMessage.AsObject>,
    paymenttypesandsvclistList: Array<PaymentAcctTypesAndServicesMessage.AsObject>,
  }
}

export class OtherFinServiceCategoryResponseMessage extends jspb.Message {
  getServicecategoryid(): string;
  setServicecategoryid(value: string): OtherFinServiceCategoryResponseMessage;

  getServicecategoryname(): string;
  setServicecategoryname(value: string): OtherFinServiceCategoryResponseMessage;

  getEganowmoduleid(): number;
  setEganowmoduleid(value: number): OtherFinServiceCategoryResponseMessage;

  getEganowmoduledesc(): string;
  setEganowmoduledesc(value: string): OtherFinServiceCategoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OtherFinServiceCategoryResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OtherFinServiceCategoryResponseMessage): OtherFinServiceCategoryResponseMessage.AsObject;
  static serializeBinaryToWriter(message: OtherFinServiceCategoryResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OtherFinServiceCategoryResponseMessage;
  static deserializeBinaryFromReader(message: OtherFinServiceCategoryResponseMessage, reader: jspb.BinaryReader): OtherFinServiceCategoryResponseMessage;
}

export namespace OtherFinServiceCategoryResponseMessage {
  export type AsObject = {
    servicecategoryid: string,
    servicecategoryname: string,
    eganowmoduleid: number,
    eganowmoduledesc: string,
  }
}

export class OtherFinServiceCategoryListResponseMessage extends jspb.Message {
  getServicecategorylistList(): Array<OtherFinServiceCategoryResponseMessage>;
  setServicecategorylistList(value: Array<OtherFinServiceCategoryResponseMessage>): OtherFinServiceCategoryListResponseMessage;
  clearServicecategorylistList(): OtherFinServiceCategoryListResponseMessage;
  addServicecategorylist(value?: OtherFinServiceCategoryResponseMessage, index?: number): OtherFinServiceCategoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OtherFinServiceCategoryListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OtherFinServiceCategoryListResponseMessage): OtherFinServiceCategoryListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: OtherFinServiceCategoryListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OtherFinServiceCategoryListResponseMessage;
  static deserializeBinaryFromReader(message: OtherFinServiceCategoryListResponseMessage, reader: jspb.BinaryReader): OtherFinServiceCategoryListResponseMessage;
}

export namespace OtherFinServiceCategoryListResponseMessage {
  export type AsObject = {
    servicecategorylistList: Array<OtherFinServiceCategoryResponseMessage.AsObject>,
  }
}

export class CurrenciesRequestMessage extends jspb.Message {
  getCurrencyiso(): string;
  setCurrencyiso(value: string): CurrenciesRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CurrenciesRequestMessage;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): CurrenciesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrenciesRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CurrenciesRequestMessage): CurrenciesRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CurrenciesRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrenciesRequestMessage;
  static deserializeBinaryFromReader(message: CurrenciesRequestMessage, reader: jspb.BinaryReader): CurrenciesRequestMessage;
}

export namespace CurrenciesRequestMessage {
  export type AsObject = {
    currencyiso: string,
    countrycode: string,
    countryflagurl: string,
  }
}

export class CurrenciesListRequestMessage extends jspb.Message {
  getCurrencylistList(): Array<CurrenciesRequestMessage>;
  setCurrencylistList(value: Array<CurrenciesRequestMessage>): CurrenciesListRequestMessage;
  clearCurrencylistList(): CurrenciesListRequestMessage;
  addCurrencylist(value?: CurrenciesRequestMessage, index?: number): CurrenciesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrenciesListRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CurrenciesListRequestMessage): CurrenciesListRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CurrenciesListRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrenciesListRequestMessage;
  static deserializeBinaryFromReader(message: CurrenciesListRequestMessage, reader: jspb.BinaryReader): CurrenciesListRequestMessage;
}

export namespace CurrenciesListRequestMessage {
  export type AsObject = {
    currencylistList: Array<CurrenciesRequestMessage.AsObject>,
  }
}

export class CurrenExchRateRequestMessage extends jspb.Message {
  getSendercurrencyiso(): string;
  setSendercurrencyiso(value: string): CurrenExchRateRequestMessage;

  getBeneficiarycurrencyiso(): string;
  setBeneficiarycurrencyiso(value: string): CurrenExchRateRequestMessage;

  getExchangerate(): number;
  setExchangerate(value: number): CurrenExchRateRequestMessage;

  getIssuccess(): boolean;
  setIssuccess(value: boolean): CurrenExchRateRequestMessage;

  getMessage(): string;
  setMessage(value: string): CurrenExchRateRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CurrenExchRateRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrenExchRateRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CurrenExchRateRequestMessage): CurrenExchRateRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CurrenExchRateRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrenExchRateRequestMessage;
  static deserializeBinaryFromReader(message: CurrenExchRateRequestMessage, reader: jspb.BinaryReader): CurrenExchRateRequestMessage;
}

export namespace CurrenExchRateRequestMessage {
  export type AsObject = {
    sendercurrencyiso: string,
    beneficiarycurrencyiso: string,
    exchangerate: number,
    issuccess: boolean,
    message: string,
    languageid: string,
  }
}

export class OTPTransRequestMessage extends jspb.Message {
  getMobilenoorbankormerchantaccountno(): string;
  setMobilenoorbankormerchantaccountno(value: string): OTPTransRequestMessage;

  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): OTPTransRequestMessage;

  getPaypartnergroupcode(): number;
  setPaypartnergroupcode(value: number): OTPTransRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): OTPTransRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): OTPTransRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OTPTransRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OTPTransRequestMessage): OTPTransRequestMessage.AsObject;
  static serializeBinaryToWriter(message: OTPTransRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OTPTransRequestMessage;
  static deserializeBinaryFromReader(message: OTPTransRequestMessage, reader: jspb.BinaryReader): OTPTransRequestMessage;
}

export namespace OTPTransRequestMessage {
  export type AsObject = {
    mobilenoorbankormerchantaccountno: string,
    paypartnerserviceid: string,
    paypartnergroupcode: number,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerPasswordResetInAppRequestMessage extends jspb.Message {
  getPasswordcurrent(): string;
  setPasswordcurrent(value: string): CustomerPasswordResetInAppRequestMessage;

  getPasswordnew(): string;
  setPasswordnew(value: string): CustomerPasswordResetInAppRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerPasswordResetInAppRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPasswordResetInAppRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPasswordResetInAppRequestMessage): CustomerPasswordResetInAppRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerPasswordResetInAppRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPasswordResetInAppRequestMessage;
  static deserializeBinaryFromReader(message: CustomerPasswordResetInAppRequestMessage, reader: jspb.BinaryReader): CustomerPasswordResetInAppRequestMessage;
}

export namespace CustomerPasswordResetInAppRequestMessage {
  export type AsObject = {
    passwordcurrent: string,
    passwordnew: string,
    languageid: string,
  }
}

export class DeleteAccountMessage extends jspb.Message {
  getSource1orbeneficiary2(): number;
  setSource1orbeneficiary2(value: number): DeleteAccountMessage;

  getAccountnumber(): string;
  setAccountnumber(value: string): DeleteAccountMessage;

  getLanguageid(): string;
  setLanguageid(value: string): DeleteAccountMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountMessage): DeleteAccountMessage.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountMessage;
  static deserializeBinaryFromReader(message: DeleteAccountMessage, reader: jspb.BinaryReader): DeleteAccountMessage;
}

export namespace DeleteAccountMessage {
  export type AsObject = {
    source1orbeneficiary2: number,
    accountnumber: string,
    languageid: string,
  }
}

export class ImageRepoCred extends jspb.Message {
  getApiname(): string;
  setApiname(value: string): ImageRepoCred;

  getApikey(): string;
  setApikey(value: string): ImageRepoCred;

  getApisecret(): string;
  setApisecret(value: string): ImageRepoCred;

  getPublicidandfilename(): string;
  setPublicidandfilename(value: string): ImageRepoCred;

  getFilename(): string;
  setFilename(value: string): ImageRepoCred;

  getUploadpreset(): string;
  setUploadpreset(value: string): ImageRepoCred;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageRepoCred.AsObject;
  static toObject(includeInstance: boolean, msg: ImageRepoCred): ImageRepoCred.AsObject;
  static serializeBinaryToWriter(message: ImageRepoCred, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageRepoCred;
  static deserializeBinaryFromReader(message: ImageRepoCred, reader: jspb.BinaryReader): ImageRepoCred;
}

export namespace ImageRepoCred {
  export type AsObject = {
    apiname: string,
    apikey: string,
    apisecret: string,
    publicidandfilename: string,
    filename: string,
    uploadpreset: string,
  }
}

export class CustomerProfileInfoResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): CustomerProfileInfoResponseMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): CustomerProfileInfoResponseMessage;

  getMessage(): string;
  setMessage(value: string): CustomerProfileInfoResponseMessage;

  getCustomerid(): string;
  setCustomerid(value: string): CustomerProfileInfoResponseMessage;

  getMobilenumber(): string;
  setMobilenumber(value: string): CustomerProfileInfoResponseMessage;

  getEmailaddress(): string;
  setEmailaddress(value: string): CustomerProfileInfoResponseMessage;

  getPersonalbusinessgroup(): string;
  setPersonalbusinessgroup(value: string): CustomerProfileInfoResponseMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerProfileInfoResponseMessage;

  getFirstname(): string;
  setFirstname(value: string): CustomerProfileInfoResponseMessage;

  getLastname(): string;
  setLastname(value: string): CustomerProfileInfoResponseMessage;

  getBusinessname(): string;
  setBusinessname(value: string): CustomerProfileInfoResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerProfileInfoResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerProfileInfoResponseMessage;

  getOperatingcountryyesno(): string;
  setOperatingcountryyesno(value: string): CustomerProfileInfoResponseMessage;

  getCustomerprofilepicimageurl(): string;
  setCustomerprofilepicimageurl(value: string): CustomerProfileInfoResponseMessage;

  getLoginerrorcode(): string;
  setLoginerrorcode(value: string): CustomerProfileInfoResponseMessage;

  getKycdataenc(): string;
  setKycdataenc(value: string): CustomerProfileInfoResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerProfileInfoResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerProfileInfoResponseMessage): CustomerProfileInfoResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerProfileInfoResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerProfileInfoResponseMessage;
  static deserializeBinaryFromReader(message: CustomerProfileInfoResponseMessage, reader: jspb.BinaryReader): CustomerProfileInfoResponseMessage;
}

export namespace CustomerProfileInfoResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    customerid: string,
    mobilenumber: string,
    emailaddress: string,
    personalbusinessgroup: string,
    personalbusinessgroupvalue: number,
    firstname: string,
    lastname: string,
    businessname: string,
    countrycode: string,
    languageid: string,
    operatingcountryyesno: string,
    customerprofilepicimageurl: string,
    loginerrorcode: string,
    kycdataenc: string,
  }
}

export class CustProfilePicInfo extends jspb.Message {
  getProfileimageinbase64(): string;
  setProfileimageinbase64(value: string): CustProfilePicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustProfilePicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustProfilePicInfo): CustProfilePicInfo.AsObject;
  static serializeBinaryToWriter(message: CustProfilePicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustProfilePicInfo;
  static deserializeBinaryFromReader(message: CustProfilePicInfo, reader: jspb.BinaryReader): CustProfilePicInfo;
}

export namespace CustProfilePicInfo {
  export type AsObject = {
    profileimageinbase64: string,
  }
}

export class TransLimitResponseMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): TransLimitResponseMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): TransLimitResponseMessage;

  getDailycrcashinlimitamountforbasic(): number;
  setDailycrcashinlimitamountforbasic(value: number): TransLimitResponseMessage;

  getDailycrcashinlimitamountforstandard(): number;
  setDailycrcashinlimitamountforstandard(value: number): TransLimitResponseMessage;

  getDailycrcashinlimitamountforenhanced(): number;
  setDailycrcashinlimitamountforenhanced(value: number): TransLimitResponseMessage;

  getDailydrcashinlimitamountforbasic(): number;
  setDailydrcashinlimitamountforbasic(value: number): TransLimitResponseMessage;

  getDailydrcashinlimitamountforstandard(): number;
  setDailydrcashinlimitamountforstandard(value: number): TransLimitResponseMessage;

  getDailydrcashinlimitamountforenhanced(): number;
  setDailydrcashinlimitamountforenhanced(value: number): TransLimitResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransLimitResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TransLimitResponseMessage): TransLimitResponseMessage.AsObject;
  static serializeBinaryToWriter(message: TransLimitResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransLimitResponseMessage;
  static deserializeBinaryFromReader(message: TransLimitResponseMessage, reader: jspb.BinaryReader): TransLimitResponseMessage;
}

export namespace TransLimitResponseMessage {
  export type AsObject = {
    countrycode: string,
    currencyiso: string,
    dailycrcashinlimitamountforbasic: number,
    dailycrcashinlimitamountforstandard: number,
    dailycrcashinlimitamountforenhanced: number,
    dailydrcashinlimitamountforbasic: number,
    dailydrcashinlimitamountforstandard: number,
    dailydrcashinlimitamountforenhanced: number,
  }
}

export class IdCardDataMessage extends jspb.Message {
  getKyctypeid(): number;
  setKyctypeid(value: number): IdCardDataMessage;

  getKycverifystatus(): string;
  setKycverifystatus(value: string): IdCardDataMessage;

  getKyctypename(): string;
  setKyctypename(value: string): IdCardDataMessage;

  getIdcardno(): string;
  setIdcardno(value: string): IdCardDataMessage;

  getDateofbirth(): string;
  setDateofbirth(value: string): IdCardDataMessage;

  getIdcardexpirydate(): string;
  setIdcardexpirydate(value: string): IdCardDataMessage;

  getIdcardtype(): string;
  setIdcardtype(value: string): IdCardDataMessage;

  getIdremarksnote(): string;
  setIdremarksnote(value: string): IdCardDataMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdCardDataMessage.AsObject;
  static toObject(includeInstance: boolean, msg: IdCardDataMessage): IdCardDataMessage.AsObject;
  static serializeBinaryToWriter(message: IdCardDataMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdCardDataMessage;
  static deserializeBinaryFromReader(message: IdCardDataMessage, reader: jspb.BinaryReader): IdCardDataMessage;
}

export namespace IdCardDataMessage {
  export type AsObject = {
    kyctypeid: number,
    kycverifystatus: string,
    kyctypename: string,
    idcardno: string,
    dateofbirth: string,
    idcardexpirydate: string,
    idcardtype: string,
    idremarksnote: string,
  }
}

