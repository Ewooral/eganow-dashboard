import * as jspb from 'google-protobuf'



export class MerchantAccount extends jspb.Message {
  getCustomerguid(): string;
  setCustomerguid(value: string): MerchantAccount;

  getCustomerid(): string;
  setCustomerid(value: string): MerchantAccount;

  getMobilenumber(): string;
  setMobilenumber(value: string): MerchantAccount;

  getEmailaddress(): string;
  setEmailaddress(value: string): MerchantAccount;

  getPersonalbusinessgroup(): string;
  setPersonalbusinessgroup(value: string): MerchantAccount;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): MerchantAccount;

  getFirstname(): string;
  setFirstname(value: string): MerchantAccount;

  getLastname(): string;
  setLastname(value: string): MerchantAccount;

  getBusinessname(): string;
  setBusinessname(value: string): MerchantAccount;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantAccount;

  getCustomerpinhash(): string;
  setCustomerpinhash(value: string): MerchantAccount;

  getUserjwttoken(): string;
  setUserjwttoken(value: string): MerchantAccount;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantAccount;

  getCountrydialcode(): number;
  setCountrydialcode(value: number): MerchantAccount;

  getIssuccess(): boolean;
  setIssuccess(value: boolean): MerchantAccount;

  getMessage(): string;
  setMessage(value: string): MerchantAccount;

  getPasswordexistvalue(): string;
  setPasswordexistvalue(value: string): MerchantAccount;

  getRegistermodemobilewebussd(): string;
  setRegistermodemobilewebussd(value: string): MerchantAccount;

  getIdcardstatus(): string;
  setIdcardstatus(value: string): MerchantAccount;

  getOperatingcountryyesno(): string;
  setOperatingcountryyesno(value: string): MerchantAccount;

  getCustomerprofilepicimageurl(): string;
  setCustomerprofilepicimageurl(value: string): MerchantAccount;

  getMobilenumberoremailexist(): number;
  setMobilenumberoremailexist(value: number): MerchantAccount;

  getJwtnoofminutes(): number;
  setJwtnoofminutes(value: number): MerchantAccount;

  getApiversionno(): number;
  setApiversionno(value: number): MerchantAccount;

  getAppversionno(): string;
  setAppversionno(value: string): MerchantAccount;

  getAppupdaterequirementstatus(): string;
  setAppupdaterequirementstatus(value: string): MerchantAccount;

  getCustomerstatus(): string;
  setCustomerstatus(value: string): MerchantAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantAccount): MerchantAccount.AsObject;
  static serializeBinaryToWriter(message: MerchantAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantAccount;
  static deserializeBinaryFromReader(message: MerchantAccount, reader: jspb.BinaryReader): MerchantAccount;
}

export namespace MerchantAccount {
  export type AsObject = {
    customerguid: string,
    customerid: string,
    mobilenumber: string,
    emailaddress: string,
    personalbusinessgroup: string,
    personalbusinessgroupvalue: number,
    firstname: string,
    lastname: string,
    businessname: string,
    languageid: string,
    customerpinhash: string,
    userjwttoken: string,
    countrycode: string,
    countrydialcode: number,
    issuccess: boolean,
    message: string,
    passwordexistvalue: string,
    registermodemobilewebussd: string,
    idcardstatus: string,
    operatingcountryyesno: string,
    customerprofilepicimageurl: string,
    mobilenumberoremailexist: number,
    jwtnoofminutes: number,
    apiversionno: number,
    appversionno: string,
    appupdaterequirementstatus: string,
    customerstatus: string,
  }
}

export class BusinessContactPerson extends jspb.Message {
  getRecid(): string;
  setRecid(value: string): BusinessContactPerson;

  getCustomerguidprospective(): string;
  setCustomerguidprospective(value: string): BusinessContactPerson;

  getFirstname(): string;
  setFirstname(value: string): BusinessContactPerson;

  getLastname(): string;
  setLastname(value: string): BusinessContactPerson;

  getPosition(): string;
  setPosition(value: string): BusinessContactPerson;

  getMobilenumber(): string;
  setMobilenumber(value: string): BusinessContactPerson;

  getEmailaddress(): string;
  setEmailaddress(value: string): BusinessContactPerson;

  getMakerid(): string;
  setMakerid(value: string): BusinessContactPerson;

  getMakedate(): string;
  setMakedate(value: string): BusinessContactPerson;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessContactPerson.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessContactPerson): BusinessContactPerson.AsObject;
  static serializeBinaryToWriter(message: BusinessContactPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessContactPerson;
  static deserializeBinaryFromReader(message: BusinessContactPerson, reader: jspb.BinaryReader): BusinessContactPerson;
}

export namespace BusinessContactPerson {
  export type AsObject = {
    recid: string,
    customerguidprospective: string,
    firstname: string,
    lastname: string,
    position: string,
    mobilenumber: string,
    emailaddress: string,
    makerid: string,
    makedate: string,
  }
}

export enum CompanyRegistrationType { 
  COMPANY_REGISTRATION_TYPE_UNKNOWN = 0,
  COMPANY_REGISTRATION_TYPE_BUSINESS = 1,
  COMPANY_REGISTRATION_TYPE_PERSONAL = 2,
  COMPANY_REGISTRATION_TYPE_LIMITED_LIABILITY = 3,
}
export enum DirectorPosition { 
  DIRECTOR_POSITION_UNKNOWN = 0,
  DIRECTOR_POSITION_DIRECTOR = 1,
  DIRECTOR_POSITION_SHAREHOLDER = 2,
  DIRECTOR_POSITION_CEO = 3,
  DIRECTOR_POSITION_MANAGEMENT = 4,
  DIRECTOR_POSITION_ENGINEER = 5,
  DIRECTOR_POSITION_MID = 6,
  DIRECTOR_POSITION_CONTACT = 7,
  DIRECTOR_POSITION_SIGNATORY = 9,
  DIRECTOR_POSITION_GENERAL_MANAGER = 10,
  DIRECTOR_POSITION_DIRECTOR_SHAREHOLDER = 11,
  DIRECTOR_POSITION_SALES_MANAGER = 12,
}
export enum CustomerIDTypes { 
  CUSTOMER_ID_TYPES_UNKNOWN = 0,
  CUSTOMER_ID_TYPES_PASSPORT = 1,
  CUSTOMER_ID_TYPES_DRIVERS_LICENSE = 2,
  CUSTOMER_ID_TYPES_ID = 3,
  CUSTOMER_ID_TYPES_BANKID = 4,
}
export enum OfficeOwnership { 
  OFFICE_OWNERSHIP_UNKNOWN = 0,
  OFFICE_OWNERSHIP_OWNED = 1,
  OFFICE_OWNERSHIP_RENT = 2,
  OFFICE_OWNERSHIP_LEASED = 3,
}
export enum BusinessCustomerPortalStatus { 
  BUSINESS_CUSTOMER_PORTAL_STATUS_UNKNOWN = 0,
  BUSINESS_CUSTOMER_PORTAL_STATUS_EDITING = 1,
  BUSINESS_CUSTOMER_PORTAL_STATUS_REVIEWING = 2,
  BUSINESS_CUSTOMER_PORTAL_STATUS_COMPLIANCE_PASSED = 3,
  BUSINESS_CUSTOMER_PORTAL_STATUS_ACTIVE = 4,
}
export enum DirectorOrShareholderOrOtherType { 
  DIRECTOR_OR_SHAREHOLDER_OR_OTHER_TYPE_UNKNOWN = 0,
  DIRECTOR_OR_SHAREHOLDER_OR_OTHER_TYPE_CONTACT_PERSON = 1,
  DIRECTOR_OR_SHAREHOLDER_OR_OTHER_TYPE_DIRECTOR_SHAREHOLDER = 2,
}
export enum CustomerStatus { 
  CUSTOMER_STATUS_UNKNOWN = 0,
  CUSTOMER_STATUS_ACTIVE = 1,
  CUSTOMER_STATUS_PENDING = 2,
}
