import * as jspb from 'google-protobuf'



export class CustomerAccount extends jspb.Message {
  getCustomerguid(): string;
  setCustomerguid(value: string): CustomerAccount;

  getCustomerid(): string;
  setCustomerid(value: string): CustomerAccount;

  getMobilenumber(): string;
  setMobilenumber(value: string): CustomerAccount;

  getEmailaddress(): string;
  setEmailaddress(value: string): CustomerAccount;

  getPersonalbusinessgroup(): string;
  setPersonalbusinessgroup(value: string): CustomerAccount;

  getPersonalbusinessgroupvalue(): number;
  setPersonalbusinessgroupvalue(value: number): CustomerAccount;

  getFirstname(): string;
  setFirstname(value: string): CustomerAccount;

  getLastname(): string;
  setLastname(value: string): CustomerAccount;

  getBusinessname(): string;
  setBusinessname(value: string): CustomerAccount;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerAccount;

  getCustomerpinhash(): string;
  setCustomerpinhash(value: string): CustomerAccount;

  getUserjwttoken(): string;
  setUserjwttoken(value: string): CustomerAccount;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerAccount;

  getCountrydialcode(): number;
  setCountrydialcode(value: number): CustomerAccount;

  getIssuccess(): boolean;
  setIssuccess(value: boolean): CustomerAccount;

  getMessage(): string;
  setMessage(value: string): CustomerAccount;

  getPasswordexistvalue(): string;
  setPasswordexistvalue(value: string): CustomerAccount;

  getRegistermodemobilewebussd(): string;
  setRegistermodemobilewebussd(value: string): CustomerAccount;

  getIdcardstatus(): string;
  setIdcardstatus(value: string): CustomerAccount;

  getOperatingcountryyesno(): string;
  setOperatingcountryyesno(value: string): CustomerAccount;

  getCustomerprofilepicimageurl(): string;
  setCustomerprofilepicimageurl(value: string): CustomerAccount;

  getMobilenumberoremailexist(): number;
  setMobilenumberoremailexist(value: number): CustomerAccount;

  getJwtnoofminutes(): number;
  setJwtnoofminutes(value: number): CustomerAccount;

  getApiversionno(): number;
  setApiversionno(value: number): CustomerAccount;

  getAppversionno(): string;
  setAppversionno(value: string): CustomerAccount;

  getAppupdaterequirementstatus(): string;
  setAppupdaterequirementstatus(value: string): CustomerAccount;

  getCustomerstatus(): string;
  setCustomerstatus(value: string): CustomerAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAccount.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAccount): CustomerAccount.AsObject;
  static serializeBinaryToWriter(message: CustomerAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAccount;
  static deserializeBinaryFromReader(message: CustomerAccount, reader: jspb.BinaryReader): CustomerAccount;
}

export namespace CustomerAccount {
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

