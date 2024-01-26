import * as jspb from 'google-protobuf'



export class EmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyMessage): EmptyMessage.AsObject;
  static serializeBinaryToWriter(message: EmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyMessage;
  static deserializeBinaryFromReader(message: EmptyMessage, reader: jspb.BinaryReader): EmptyMessage;
}

export namespace EmptyMessage {
  export type AsObject = {
  }
}

export class LanguageOnlyMessage extends jspb.Message {
  getLanguageid(): string;
  setLanguageid(value: string): LanguageOnlyMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageOnlyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageOnlyMessage): LanguageOnlyMessage.AsObject;
  static serializeBinaryToWriter(message: LanguageOnlyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageOnlyMessage;
  static deserializeBinaryFromReader(message: LanguageOnlyMessage, reader: jspb.BinaryReader): LanguageOnlyMessage;
}

export namespace LanguageOnlyMessage {
  export type AsObject = {
    languageid: string,
  }
}

export class CustomerTempOTRequestMessage extends jspb.Message {
  getMobilenumber(): string;
  setMobilenumber(value: string): CustomerTempOTRequestMessage;

  getEmailaddress(): string;
  setEmailaddress(value: string): CustomerTempOTRequestMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerTempOTRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerTempOTRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerTempOTRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTempOTRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTempOTRequestMessage): CustomerTempOTRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerTempOTRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTempOTRequestMessage;
  static deserializeBinaryFromReader(message: CustomerTempOTRequestMessage, reader: jspb.BinaryReader): CustomerTempOTRequestMessage;
}

export namespace CustomerTempOTRequestMessage {
  export type AsObject = {
    mobilenumber: string,
    emailaddress: string,
    personalbusinessgroupvalue: number,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerTempVerifyOTRequestMessage extends jspb.Message {
  getMobilenumber(): string;
  setMobilenumber(value: string): CustomerTempVerifyOTRequestMessage;

  getEmailaddress(): string;
  setEmailaddress(value: string): CustomerTempVerifyOTRequestMessage;

  getOtpvalue(): string;
  setOtpvalue(value: string): CustomerTempVerifyOTRequestMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerTempVerifyOTRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerTempVerifyOTRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerTempVerifyOTRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTempVerifyOTRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTempVerifyOTRequestMessage): CustomerTempVerifyOTRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerTempVerifyOTRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTempVerifyOTRequestMessage;
  static deserializeBinaryFromReader(message: CustomerTempVerifyOTRequestMessage, reader: jspb.BinaryReader): CustomerTempVerifyOTRequestMessage;
}

export namespace CustomerTempVerifyOTRequestMessage {
  export type AsObject = {
    mobilenumber: string,
    emailaddress: string,
    otpvalue: string,
    personalbusinessgroupvalue: number,
    countrycode: string,
    languageid: string,
  }
}

export class SuccessMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SuccessMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): SuccessMessage;

  getMessage(): string;
  setMessage(value: string): SuccessMessage;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): SuccessMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessMessage): SuccessMessage.AsObject;
  static serializeBinaryToWriter(message: SuccessMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessMessage;
  static deserializeBinaryFromReader(message: SuccessMessage, reader: jspb.BinaryReader): SuccessMessage;
}

export namespace SuccessMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
  }
}

export class CustomerAccountMessage extends jspb.Message {
  getMobilenumber(): string;
  setMobilenumber(value: string): CustomerAccountMessage;

  getEmailaddress(): string;
  setEmailaddress(value: string): CustomerAccountMessage;

  getFirstname(): string;
  setFirstname(value: string): CustomerAccountMessage;

  getLastname(): string;
  setLastname(value: string): CustomerAccountMessage;

  getPassword(): string;
  setPassword(value: string): CustomerAccountMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerAccountMessage;

  getBusinessname(): string;
  setBusinessname(value: string): CustomerAccountMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerAccountMessage;

  getMobileorweb(): string;
  setMobileorweb(value: string): CustomerAccountMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerAccountMessage;

  getCustomersixdigitpin(): string;
  setCustomersixdigitpin(value: string): CustomerAccountMessage;

  getCountrycodeforfirsteganowwallet(): string;
  setCountrycodeforfirsteganowwallet(value: string): CustomerAccountMessage;

  getOtpvalue(): string;
  setOtpvalue(value: string): CustomerAccountMessage;

  getBusinesscontactpersonmobilenumber(): string;
  setBusinesscontactpersonmobilenumber(value: string): CustomerAccountMessage;

  getMobilenodialcode(): string;
  setMobilenodialcode(value: string): CustomerAccountMessage;

  getSecurityquestionone(): string;
  setSecurityquestionone(value: string): CustomerAccountMessage;

  getSecurityanswerone(): string;
  setSecurityanswerone(value: string): CustomerAccountMessage;

  getSecurityquestiontwo(): string;
  setSecurityquestiontwo(value: string): CustomerAccountMessage;

  getSecurityanswertwo(): string;
  setSecurityanswertwo(value: string): CustomerAccountMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAccountMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAccountMessage): CustomerAccountMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerAccountMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAccountMessage;
  static deserializeBinaryFromReader(message: CustomerAccountMessage, reader: jspb.BinaryReader): CustomerAccountMessage;
}

export namespace CustomerAccountMessage {
  export type AsObject = {
    mobilenumber: string,
    emailaddress: string,
    firstname: string,
    lastname: string,
    password: string,
    personalbusinessgroupvalue: number,
    businessname: string,
    countrycode: string,
    mobileorweb: string,
    languageid: string,
    customersixdigitpin: string,
    countrycodeforfirsteganowwallet: string,
    otpvalue: string,
    businesscontactpersonmobilenumber: string,
    mobilenodialcode: string,
    securityquestionone: string,
    securityanswerone: string,
    securityquestiontwo: string,
    securityanswertwo: string,
  }
}

export class LoginRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): LoginRequestMessage;

  getPasswordorpin(): string;
  setPasswordorpin(value: string): LoginRequestMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): LoginRequestMessage;

  getMobileorweb(): string;
  setMobileorweb(value: string): LoginRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): LoginRequestMessage;

  getPassword1orpin2orhpin3option(): number;
  setPassword1orpin2orhpin3option(value: number): LoginRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): LoginRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequestMessage): LoginRequestMessage.AsObject;
  static serializeBinaryToWriter(message: LoginRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequestMessage;
  static deserializeBinaryFromReader(message: LoginRequestMessage, reader: jspb.BinaryReader): LoginRequestMessage;
}

export namespace LoginRequestMessage {
  export type AsObject = {
    customerid: string,
    passwordorpin: string,
    personalbusinessgroupvalue: number,
    mobileorweb: string,
    countrycode: string,
    password1orpin2orhpin3option: number,
    languageid: string,
  }
}

export class LoginResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): LoginResponseMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): LoginResponseMessage;

  getMessage(): string;
  setMessage(value: string): LoginResponseMessage;

  getCustomerid(): string;
  setCustomerid(value: string): LoginResponseMessage;

  getMobilenumber(): string;
  setMobilenumber(value: string): LoginResponseMessage;

  getEmailaddress(): string;
  setEmailaddress(value: string): LoginResponseMessage;

  getPersonalbusinessgroup(): string;
  setPersonalbusinessgroup(value: string): LoginResponseMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): LoginResponseMessage;

  getFirstname(): string;
  setFirstname(value: string): LoginResponseMessage;

  getLastname(): string;
  setLastname(value: string): LoginResponseMessage;

  getBusinessname(): string;
  setBusinessname(value: string): LoginResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): LoginResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): LoginResponseMessage;

  getOperatingcountryyesno(): string;
  setOperatingcountryyesno(value: string): LoginResponseMessage;

  getCustomerprofilepicimageurl(): string;
  setCustomerprofilepicimageurl(value: string): LoginResponseMessage;

  getUserjwttoken(): string;
  setUserjwttoken(value: string): LoginResponseMessage;

  getLoginerrorcode(): string;
  setLoginerrorcode(value: string): LoginResponseMessage;

  getKycdataenc(): string;
  setKycdataenc(value: string): LoginResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponseMessage): LoginResponseMessage.AsObject;
  static serializeBinaryToWriter(message: LoginResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponseMessage;
  static deserializeBinaryFromReader(message: LoginResponseMessage, reader: jspb.BinaryReader): LoginResponseMessage;
}

export namespace LoginResponseMessage {
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
    userjwttoken: string,
    loginerrorcode: string,
    kycdataenc: string,
  }
}

export class CustomerPasswordResetRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerPasswordResetRequestMessage;

  getPassword(): string;
  setPassword(value: string): CustomerPasswordResetRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerPasswordResetRequestMessage;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerPasswordResetRequestMessage;

  getOtpvalue(): string;
  setOtpvalue(value: string): CustomerPasswordResetRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerPasswordResetRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPasswordResetRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPasswordResetRequestMessage): CustomerPasswordResetRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerPasswordResetRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPasswordResetRequestMessage;
  static deserializeBinaryFromReader(message: CustomerPasswordResetRequestMessage, reader: jspb.BinaryReader): CustomerPasswordResetRequestMessage;
}

export namespace CustomerPasswordResetRequestMessage {
  export type AsObject = {
    customerid: string,
    password: string,
    languageid: string,
    personalbusinessgroupvalue: number,
    otpvalue: string,
    countrycode: string,
  }
}

export class CustomerResetPasswordRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerResetPasswordRequestMessage;

  getSecurityquestionnumber(): number;
  setSecurityquestionnumber(value: number): CustomerResetPasswordRequestMessage;

  getSecurityanswer(): string;
  setSecurityanswer(value: string): CustomerResetPasswordRequestMessage;

  getUsersixdigitpin(): number;
  setUsersixdigitpin(value: number): CustomerResetPasswordRequestMessage;

  getNewpassword(): string;
  setNewpassword(value: string): CustomerResetPasswordRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerResetPasswordRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerResetPasswordRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerResetPasswordRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerResetPasswordRequestMessage): CustomerResetPasswordRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerResetPasswordRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerResetPasswordRequestMessage;
  static deserializeBinaryFromReader(message: CustomerResetPasswordRequestMessage, reader: jspb.BinaryReader): CustomerResetPasswordRequestMessage;
}

export namespace CustomerResetPasswordRequestMessage {
  export type AsObject = {
    customerid: string,
    securityquestionnumber: number,
    securityanswer: string,
    usersixdigitpin: number,
    newpassword: string,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerPINResetRequestMessageOld extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerPINResetRequestMessageOld;

  getPin(): number;
  setPin(value: number): CustomerPINResetRequestMessageOld;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerPINResetRequestMessageOld;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerPINResetRequestMessageOld;

  getOtpvalue(): string;
  setOtpvalue(value: string): CustomerPINResetRequestMessageOld;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerPINResetRequestMessageOld;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPINResetRequestMessageOld.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPINResetRequestMessageOld): CustomerPINResetRequestMessageOld.AsObject;
  static serializeBinaryToWriter(message: CustomerPINResetRequestMessageOld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPINResetRequestMessageOld;
  static deserializeBinaryFromReader(message: CustomerPINResetRequestMessageOld, reader: jspb.BinaryReader): CustomerPINResetRequestMessageOld;
}

export namespace CustomerPINResetRequestMessageOld {
  export type AsObject = {
    customerid: string,
    pin: number,
    languageid: string,
    personalbusinessgroupvalue: number,
    otpvalue: string,
    countrycode: string,
  }
}

export class CustomerPINResetRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerPINResetRequestMessage;

  getSecurityquestionnumber(): number;
  setSecurityquestionnumber(value: number): CustomerPINResetRequestMessage;

  getSecurityanswer(): string;
  setSecurityanswer(value: string): CustomerPINResetRequestMessage;

  getNewusersixdigitpin(): number;
  setNewusersixdigitpin(value: number): CustomerPINResetRequestMessage;

  getPassword(): string;
  setPassword(value: string): CustomerPINResetRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerPINResetRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerPINResetRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPINResetRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPINResetRequestMessage): CustomerPINResetRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerPINResetRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPINResetRequestMessage;
  static deserializeBinaryFromReader(message: CustomerPINResetRequestMessage, reader: jspb.BinaryReader): CustomerPINResetRequestMessage;
}

export namespace CustomerPINResetRequestMessage {
  export type AsObject = {
    customerid: string,
    securityquestionnumber: number,
    securityanswer: string,
    newusersixdigitpin: number,
    password: string,
    countrycode: string,
    languageid: string,
  }
}

export class OTRequestMessage extends jspb.Message {
  getCustomermobilenooremail(): string;
  setCustomermobilenooremail(value: string): OTRequestMessage;

  getPersonalbusinessvalue(): number;
  setPersonalbusinessvalue(value: number): OTRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): OTRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): OTRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OTRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OTRequestMessage): OTRequestMessage.AsObject;
  static serializeBinaryToWriter(message: OTRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OTRequestMessage;
  static deserializeBinaryFromReader(message: OTRequestMessage, reader: jspb.BinaryReader): OTRequestMessage;
}

export namespace OTRequestMessage {
  export type AsObject = {
    customermobilenooremail: string,
    personalbusinessvalue: number,
    countrycode: string,
    languageid: string,
  }
}

export class VerifyOTPRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): VerifyOTPRequestMessage;

  getOtpvalue(): string;
  setOtpvalue(value: string): VerifyOTPRequestMessage;

  getPersonalbusinessvalue(): number;
  setPersonalbusinessvalue(value: number): VerifyOTPRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): VerifyOTPRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): VerifyOTPRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPRequestMessage): VerifyOTPRequestMessage.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPRequestMessage;
  static deserializeBinaryFromReader(message: VerifyOTPRequestMessage, reader: jspb.BinaryReader): VerifyOTPRequestMessage;
}

export namespace VerifyOTPRequestMessage {
  export type AsObject = {
    customerid: string,
    otpvalue: string,
    personalbusinessvalue: number,
    countrycode: string,
    languageid: string,
  }
}

export class CountryModel extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): CountryModel;

  getCountrydialcode(): number;
  setCountrydialcode(value: number): CountryModel;

  getCountryname(): string;
  setCountryname(value: string): CountryModel;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): CountryModel;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): CountryModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryModel.AsObject;
  static toObject(includeInstance: boolean, msg: CountryModel): CountryModel.AsObject;
  static serializeBinaryToWriter(message: CountryModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryModel;
  static deserializeBinaryFromReader(message: CountryModel, reader: jspb.BinaryReader): CountryModel;
}

export namespace CountryModel {
  export type AsObject = {
    countrycode: string,
    countrydialcode: number,
    countryname: string,
    currencyiso: string,
    countryflagurl: string,
  }
}

export class CountryListMessage extends jspb.Message {
  getCountrylistList(): Array<CountryModel>;
  setCountrylistList(value: Array<CountryModel>): CountryListMessage;
  clearCountrylistList(): CountryListMessage;
  addCountrylist(value?: CountryModel, index?: number): CountryModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CountryListMessage): CountryListMessage.AsObject;
  static serializeBinaryToWriter(message: CountryListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryListMessage;
  static deserializeBinaryFromReader(message: CountryListMessage, reader: jspb.BinaryReader): CountryListMessage;
}

export namespace CountryListMessage {
  export type AsObject = {
    countrylistList: Array<CountryModel.AsObject>,
  }
}

export class BusinessUserMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): BusinessUserMessage;

  getMobilenumber(): string;
  setMobilenumber(value: string): BusinessUserMessage;

  getSurnamelastname(): string;
  setSurnamelastname(value: string): BusinessUserMessage;

  getFirstname(): string;
  setFirstname(value: string): BusinessUserMessage;

  getPostinglimitamount(): number;
  setPostinglimitamount(value: number): BusinessUserMessage;

  getAuthlimitamount(): number;
  setAuthlimitamount(value: number): BusinessUserMessage;

  getCaninitiatetransyesno(): string;
  setCaninitiatetransyesno(value: string): BusinessUserMessage;

  getCanauthorizetransyesno(): string;
  setCanauthorizetransyesno(value: string): BusinessUserMessage;

  getCaninitiatecustomerservice(): string;
  setCaninitiatecustomerservice(value: string): BusinessUserMessage;

  getCanauthorizecustomerservice(): string;
  setCanauthorizecustomerservice(value: string): BusinessUserMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BusinessUserMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessUserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessUserMessage): BusinessUserMessage.AsObject;
  static serializeBinaryToWriter(message: BusinessUserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessUserMessage;
  static deserializeBinaryFromReader(message: BusinessUserMessage, reader: jspb.BinaryReader): BusinessUserMessage;
}

export namespace BusinessUserMessage {
  export type AsObject = {
    customerid: string,
    mobilenumber: string,
    surnamelastname: string,
    firstname: string,
    postinglimitamount: number,
    authlimitamount: number,
    caninitiatetransyesno: string,
    canauthorizetransyesno: string,
    caninitiatecustomerservice: string,
    canauthorizecustomerservice: string,
    languageid: string,
  }
}

export class BusinessUserResponseMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): BusinessUserResponseMessage;

  getMobilenumber(): string;
  setMobilenumber(value: string): BusinessUserResponseMessage;

  getSurnamelastname(): string;
  setSurnamelastname(value: string): BusinessUserResponseMessage;

  getFirstname(): string;
  setFirstname(value: string): BusinessUserResponseMessage;

  getPostinglimitamount(): number;
  setPostinglimitamount(value: number): BusinessUserResponseMessage;

  getAuthlimitamount(): number;
  setAuthlimitamount(value: number): BusinessUserResponseMessage;

  getCaninitiatetransyesno(): string;
  setCaninitiatetransyesno(value: string): BusinessUserResponseMessage;

  getCanauthorizetransyesno(): string;
  setCanauthorizetransyesno(value: string): BusinessUserResponseMessage;

  getUserstatus(): string;
  setUserstatus(value: string): BusinessUserResponseMessage;

  getMakeid(): string;
  setMakeid(value: string): BusinessUserResponseMessage;

  getAuthid(): string;
  setAuthid(value: string): BusinessUserResponseMessage;

  getMakedate(): string;
  setMakedate(value: string): BusinessUserResponseMessage;

  getAuthdate(): string;
  setAuthdate(value: string): BusinessUserResponseMessage;

  getCaninitiatecustomerservice(): string;
  setCaninitiatecustomerservice(value: string): BusinessUserResponseMessage;

  getCanauthorizecustomerservice(): string;
  setCanauthorizecustomerservice(value: string): BusinessUserResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BusinessUserResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessUserResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessUserResponseMessage): BusinessUserResponseMessage.AsObject;
  static serializeBinaryToWriter(message: BusinessUserResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessUserResponseMessage;
  static deserializeBinaryFromReader(message: BusinessUserResponseMessage, reader: jspb.BinaryReader): BusinessUserResponseMessage;
}

export namespace BusinessUserResponseMessage {
  export type AsObject = {
    customerid: string,
    mobilenumber: string,
    surnamelastname: string,
    firstname: string,
    postinglimitamount: number,
    authlimitamount: number,
    caninitiatetransyesno: string,
    canauthorizetransyesno: string,
    userstatus: string,
    makeid: string,
    authid: string,
    makedate: string,
    authdate: string,
    caninitiatecustomerservice: string,
    canauthorizecustomerservice: string,
    languageid: string,
  }
}

export class BusinessUserResponseListMessage extends jspb.Message {
  getUserlistList(): Array<BusinessUserResponseMessage>;
  setUserlistList(value: Array<BusinessUserResponseMessage>): BusinessUserResponseListMessage;
  clearUserlistList(): BusinessUserResponseListMessage;
  addUserlist(value?: BusinessUserResponseMessage, index?: number): BusinessUserResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessUserResponseListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessUserResponseListMessage): BusinessUserResponseListMessage.AsObject;
  static serializeBinaryToWriter(message: BusinessUserResponseListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessUserResponseListMessage;
  static deserializeBinaryFromReader(message: BusinessUserResponseListMessage, reader: jspb.BinaryReader): BusinessUserResponseListMessage;
}

export namespace BusinessUserResponseListMessage {
  export type AsObject = {
    userlistList: Array<BusinessUserResponseMessage.AsObject>,
  }
}

export class BizUserToApproveMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): BizUserToApproveMessage;

  getFirstname(): string;
  setFirstname(value: string): BizUserToApproveMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BizUserToApproveMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BizUserToApproveMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BizUserToApproveMessage): BizUserToApproveMessage.AsObject;
  static serializeBinaryToWriter(message: BizUserToApproveMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BizUserToApproveMessage;
  static deserializeBinaryFromReader(message: BizUserToApproveMessage, reader: jspb.BinaryReader): BizUserToApproveMessage;
}

export namespace BizUserToApproveMessage {
  export type AsObject = {
    customerid: string,
    firstname: string,
    languageid: string,
  }
}

export class BizUserSearchRequestMessage extends jspb.Message {
  getUserstatus(): string;
  setUserstatus(value: string): BizUserSearchRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): BizUserSearchRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BizUserSearchRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BizUserSearchRequestMessage): BizUserSearchRequestMessage.AsObject;
  static serializeBinaryToWriter(message: BizUserSearchRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BizUserSearchRequestMessage;
  static deserializeBinaryFromReader(message: BizUserSearchRequestMessage, reader: jspb.BinaryReader): BizUserSearchRequestMessage;
}

export namespace BizUserSearchRequestMessage {
  export type AsObject = {
    userstatus: string,
    languageid: string,
  }
}

export class CustomerSecurityQuestion extends jspb.Message {
  getQuestionid(): number;
  setQuestionid(value: number): CustomerSecurityQuestion;

  getSecurityquestion(): string;
  setSecurityquestion(value: string): CustomerSecurityQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSecurityQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSecurityQuestion): CustomerSecurityQuestion.AsObject;
  static serializeBinaryToWriter(message: CustomerSecurityQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSecurityQuestion;
  static deserializeBinaryFromReader(message: CustomerSecurityQuestion, reader: jspb.BinaryReader): CustomerSecurityQuestion;
}

export namespace CustomerSecurityQuestion {
  export type AsObject = {
    questionid: number,
    securityquestion: string,
  }
}

export class CustomerSecurityQuestionsList extends jspb.Message {
  getSecurityquestionslistList(): Array<CustomerSecurityQuestion>;
  setSecurityquestionslistList(value: Array<CustomerSecurityQuestion>): CustomerSecurityQuestionsList;
  clearSecurityquestionslistList(): CustomerSecurityQuestionsList;
  addSecurityquestionslist(value?: CustomerSecurityQuestion, index?: number): CustomerSecurityQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSecurityQuestionsList.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSecurityQuestionsList): CustomerSecurityQuestionsList.AsObject;
  static serializeBinaryToWriter(message: CustomerSecurityQuestionsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSecurityQuestionsList;
  static deserializeBinaryFromReader(message: CustomerSecurityQuestionsList, reader: jspb.BinaryReader): CustomerSecurityQuestionsList;
}

export namespace CustomerSecurityQuestionsList {
  export type AsObject = {
    securityquestionslistList: Array<CustomerSecurityQuestion.AsObject>,
  }
}

export class CustomerSecurityQuestionsForUpdateMessage extends jspb.Message {
  getSecurityquestionone(): string;
  setSecurityquestionone(value: string): CustomerSecurityQuestionsForUpdateMessage;

  getSecurityanswerone(): string;
  setSecurityanswerone(value: string): CustomerSecurityQuestionsForUpdateMessage;

  getSecurityquestiontwo(): string;
  setSecurityquestiontwo(value: string): CustomerSecurityQuestionsForUpdateMessage;

  getSecurityanswertwo(): string;
  setSecurityanswertwo(value: string): CustomerSecurityQuestionsForUpdateMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerSecurityQuestionsForUpdateMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSecurityQuestionsForUpdateMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSecurityQuestionsForUpdateMessage): CustomerSecurityQuestionsForUpdateMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerSecurityQuestionsForUpdateMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSecurityQuestionsForUpdateMessage;
  static deserializeBinaryFromReader(message: CustomerSecurityQuestionsForUpdateMessage, reader: jspb.BinaryReader): CustomerSecurityQuestionsForUpdateMessage;
}

export namespace CustomerSecurityQuestionsForUpdateMessage {
  export type AsObject = {
    securityquestionone: string,
    securityanswerone: string,
    securityquestiontwo: string,
    securityanswertwo: string,
    languageid: string,
  }
}

export class CustomerToGetSecurityQuestionForVerificationRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): CustomerToGetSecurityQuestionForVerificationRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerToGetSecurityQuestionForVerificationRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerToGetSecurityQuestionForVerificationRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerToGetSecurityQuestionForVerificationRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerToGetSecurityQuestionForVerificationRequestMessage): CustomerToGetSecurityQuestionForVerificationRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerToGetSecurityQuestionForVerificationRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerToGetSecurityQuestionForVerificationRequestMessage;
  static deserializeBinaryFromReader(message: CustomerToGetSecurityQuestionForVerificationRequestMessage, reader: jspb.BinaryReader): CustomerToGetSecurityQuestionForVerificationRequestMessage;
}

export namespace CustomerToGetSecurityQuestionForVerificationRequestMessage {
  export type AsObject = {
    customerid: string,
    countrycode: string,
    languageid: string,
  }
}

export class CustomerToGetSecurityQuestionForVerificationResponseMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): CustomerToGetSecurityQuestionForVerificationResponseMessage;

  getMessage(): string;
  setMessage(value: string): CustomerToGetSecurityQuestionForVerificationResponseMessage;

  getSecurityquestionnumber(): number;
  setSecurityquestionnumber(value: number): CustomerToGetSecurityQuestionForVerificationResponseMessage;

  getSecurityquestion(): string;
  setSecurityquestion(value: string): CustomerToGetSecurityQuestionForVerificationResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerToGetSecurityQuestionForVerificationResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerToGetSecurityQuestionForVerificationResponseMessage): CustomerToGetSecurityQuestionForVerificationResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerToGetSecurityQuestionForVerificationResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerToGetSecurityQuestionForVerificationResponseMessage;
  static deserializeBinaryFromReader(message: CustomerToGetSecurityQuestionForVerificationResponseMessage, reader: jspb.BinaryReader): CustomerToGetSecurityQuestionForVerificationResponseMessage;
}

export namespace CustomerToGetSecurityQuestionForVerificationResponseMessage {
  export type AsObject = {
    issuccess: boolean,
    message: string,
    securityquestionnumber: number,
    securityquestion: string,
  }
}

export class CustomerSecurityQuestionToVerifyRequestMessage extends jspb.Message {
  getSecurityquestionnumber(): number;
  setSecurityquestionnumber(value: number): CustomerSecurityQuestionToVerifyRequestMessage;

  getSecurityanswer(): string;
  setSecurityanswer(value: string): CustomerSecurityQuestionToVerifyRequestMessage;

  getCustomerid(): string;
  setCustomerid(value: string): CustomerSecurityQuestionToVerifyRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerSecurityQuestionToVerifyRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerSecurityQuestionToVerifyRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerSecurityQuestionToVerifyRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerSecurityQuestionToVerifyRequestMessage): CustomerSecurityQuestionToVerifyRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerSecurityQuestionToVerifyRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerSecurityQuestionToVerifyRequestMessage;
  static deserializeBinaryFromReader(message: CustomerSecurityQuestionToVerifyRequestMessage, reader: jspb.BinaryReader): CustomerSecurityQuestionToVerifyRequestMessage;
}

export namespace CustomerSecurityQuestionToVerifyRequestMessage {
  export type AsObject = {
    securityquestionnumber: number,
    securityanswer: string,
    customerid: string,
    countrycode: string,
    languageid: string,
  }
}

export class ValidateAnswerAndPinRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): ValidateAnswerAndPinRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): ValidateAnswerAndPinRequestMessage;

  getSecurityquestionnumber(): number;
  setSecurityquestionnumber(value: number): ValidateAnswerAndPinRequestMessage;

  getSecurityanswer(): string;
  setSecurityanswer(value: string): ValidateAnswerAndPinRequestMessage;

  getCustomersixdigitpin(): number;
  setCustomersixdigitpin(value: number): ValidateAnswerAndPinRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): ValidateAnswerAndPinRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateAnswerAndPinRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateAnswerAndPinRequestMessage): ValidateAnswerAndPinRequestMessage.AsObject;
  static serializeBinaryToWriter(message: ValidateAnswerAndPinRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateAnswerAndPinRequestMessage;
  static deserializeBinaryFromReader(message: ValidateAnswerAndPinRequestMessage, reader: jspb.BinaryReader): ValidateAnswerAndPinRequestMessage;
}

export namespace ValidateAnswerAndPinRequestMessage {
  export type AsObject = {
    customerid: string,
    countrycode: string,
    securityquestionnumber: number,
    securityanswer: string,
    customersixdigitpin: number,
    languageid: string,
  }
}

export class ValidateAnswerAndPasswordRequestMessage extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): ValidateAnswerAndPasswordRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): ValidateAnswerAndPasswordRequestMessage;

  getSecurityquestionnumber(): number;
  setSecurityquestionnumber(value: number): ValidateAnswerAndPasswordRequestMessage;

  getSecurityanswer(): string;
  setSecurityanswer(value: string): ValidateAnswerAndPasswordRequestMessage;

  getPassword(): string;
  setPassword(value: string): ValidateAnswerAndPasswordRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): ValidateAnswerAndPasswordRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateAnswerAndPasswordRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateAnswerAndPasswordRequestMessage): ValidateAnswerAndPasswordRequestMessage.AsObject;
  static serializeBinaryToWriter(message: ValidateAnswerAndPasswordRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateAnswerAndPasswordRequestMessage;
  static deserializeBinaryFromReader(message: ValidateAnswerAndPasswordRequestMessage, reader: jspb.BinaryReader): ValidateAnswerAndPasswordRequestMessage;
}

export namespace ValidateAnswerAndPasswordRequestMessage {
  export type AsObject = {
    customerid: string,
    countrycode: string,
    securityquestionnumber: number,
    securityanswer: string,
    password: string,
    languageid: string,
  }
}

