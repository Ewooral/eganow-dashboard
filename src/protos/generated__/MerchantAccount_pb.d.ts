import * as jspb from 'google-protobuf'



export class PayPartnerMerchantEmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerMerchantEmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerMerchantEmptyMessage): PayPartnerMerchantEmptyMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerMerchantEmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerMerchantEmptyMessage;
  static deserializeBinaryFromReader(message: PayPartnerMerchantEmptyMessage, reader: jspb.BinaryReader): PayPartnerMerchantEmptyMessage;
}

export namespace PayPartnerMerchantEmptyMessage {
  export type AsObject = {
  }
}

export class PayPartnerMerchantCountryMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): PayPartnerMerchantCountryMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PayPartnerMerchantCountryMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerMerchantCountryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerMerchantCountryMessage): PayPartnerMerchantCountryMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerMerchantCountryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerMerchantCountryMessage;
  static deserializeBinaryFromReader(message: PayPartnerMerchantCountryMessage, reader: jspb.BinaryReader): PayPartnerMerchantCountryMessage;
}

export namespace PayPartnerMerchantCountryMessage {
  export type AsObject = {
    countrycode: string,
    languageid: string,
  }
}

export class SuccessMessagePayPartnerMerchant extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SuccessMessagePayPartnerMerchant;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): SuccessMessagePayPartnerMerchant;

  getMessage(): string;
  setMessage(value: string): SuccessMessagePayPartnerMerchant;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): SuccessMessagePayPartnerMerchant;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): SuccessMessagePayPartnerMerchant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessMessagePayPartnerMerchant.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessMessagePayPartnerMerchant): SuccessMessagePayPartnerMerchant.AsObject;
  static serializeBinaryToWriter(message: SuccessMessagePayPartnerMerchant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessMessagePayPartnerMerchant;
  static deserializeBinaryFromReader(message: SuccessMessagePayPartnerMerchant, reader: jspb.BinaryReader): SuccessMessagePayPartnerMerchant;
}

export namespace SuccessMessagePayPartnerMerchant {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
    paypartnerid: string,
  }
}

export class MerchantServiceCategoryResponseMessage extends jspb.Message {
  getServicecategoryid(): string;
  setServicecategoryid(value: string): MerchantServiceCategoryResponseMessage;

  getServicecategoryname(): string;
  setServicecategoryname(value: string): MerchantServiceCategoryResponseMessage;

  getEganowmoduleid(): number;
  setEganowmoduleid(value: number): MerchantServiceCategoryResponseMessage;

  getEganowmoduledesc(): string;
  setEganowmoduledesc(value: string): MerchantServiceCategoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceCategoryResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceCategoryResponseMessage): MerchantServiceCategoryResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceCategoryResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceCategoryResponseMessage;
  static deserializeBinaryFromReader(message: MerchantServiceCategoryResponseMessage, reader: jspb.BinaryReader): MerchantServiceCategoryResponseMessage;
}

export namespace MerchantServiceCategoryResponseMessage {
  export type AsObject = {
    servicecategoryid: string,
    servicecategoryname: string,
    eganowmoduleid: number,
    eganowmoduledesc: string,
  }
}

export class MerchantServiceCategoryListResponseMessage extends jspb.Message {
  getServicecategorylistList(): Array<MerchantServiceCategoryResponseMessage>;
  setServicecategorylistList(value: Array<MerchantServiceCategoryResponseMessage>): MerchantServiceCategoryListResponseMessage;
  clearServicecategorylistList(): MerchantServiceCategoryListResponseMessage;
  addServicecategorylist(value?: MerchantServiceCategoryResponseMessage, index?: number): MerchantServiceCategoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceCategoryListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceCategoryListResponseMessage): MerchantServiceCategoryListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceCategoryListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceCategoryListResponseMessage;
  static deserializeBinaryFromReader(message: MerchantServiceCategoryListResponseMessage, reader: jspb.BinaryReader): MerchantServiceCategoryListResponseMessage;
}

export namespace MerchantServiceCategoryListResponseMessage {
  export type AsObject = {
    servicecategorylistList: Array<MerchantServiceCategoryResponseMessage.AsObject>,
  }
}

export class MerchantServiceCategoryRequestMessage extends jspb.Message {
  getServicecategoryid(): string;
  setServicecategoryid(value: string): MerchantServiceCategoryRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceCategoryRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceCategoryRequestMessage): MerchantServiceCategoryRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceCategoryRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceCategoryRequestMessage;
  static deserializeBinaryFromReader(message: MerchantServiceCategoryRequestMessage, reader: jspb.BinaryReader): MerchantServiceCategoryRequestMessage;
}

export namespace MerchantServiceCategoryRequestMessage {
  export type AsObject = {
    servicecategoryid: string,
  }
}

export class PayPartnerMerchantRequestMessage extends jspb.Message {
  getPaypartnersymbol(): string;
  setPaypartnersymbol(value: string): PayPartnerMerchantRequestMessage;

  getPaypartnername(): string;
  setPaypartnername(value: string): PayPartnerMerchantRequestMessage;

  getRegulatorid(): string;
  setRegulatorid(value: string): PayPartnerMerchantRequestMessage;

  getLicenseno(): string;
  setLicenseno(value: string): PayPartnerMerchantRequestMessage;

  getIssuedate(): string;
  setIssuedate(value: string): PayPartnerMerchantRequestMessage;

  getExpirydate(): string;
  setExpirydate(value: string): PayPartnerMerchantRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerMerchantRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerMerchantRequestMessage): PayPartnerMerchantRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerMerchantRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerMerchantRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerMerchantRequestMessage, reader: jspb.BinaryReader): PayPartnerMerchantRequestMessage;
}

export namespace PayPartnerMerchantRequestMessage {
  export type AsObject = {
    paypartnersymbol: string,
    paypartnername: string,
    regulatorid: string,
    licenseno: string,
    issuedate: string,
    expirydate: string,
  }
}

export class PayPartnerMerchantModelMessage extends jspb.Message {
  getPaypartnerid(): string;
  setPaypartnerid(value: string): PayPartnerMerchantModelMessage;

  getPaypartnername(): string;
  setPaypartnername(value: string): PayPartnerMerchantModelMessage;

  getPaypartnertypeid(): number;
  setPaypartnertypeid(value: number): PayPartnerMerchantModelMessage;

  getPaypartnerormerchant(): string;
  setPaypartnerormerchant(value: string): PayPartnerMerchantModelMessage;

  getPaypartnersymbol(): string;
  setPaypartnersymbol(value: string): PayPartnerMerchantModelMessage;

  getInternalorexternal(): string;
  setInternalorexternal(value: string): PayPartnerMerchantModelMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PayPartnerMerchantModelMessage;

  getCountryname(): string;
  setCountryname(value: string): PayPartnerMerchantModelMessage;

  getPaypartnerstatus(): string;
  setPaypartnerstatus(value: string): PayPartnerMerchantModelMessage;

  getRegulatorid(): string;
  setRegulatorid(value: string): PayPartnerMerchantModelMessage;

  getRegulatorname(): string;
  setRegulatorname(value: string): PayPartnerMerchantModelMessage;

  getLicenseno(): string;
  setLicenseno(value: string): PayPartnerMerchantModelMessage;

  getIssuedate(): string;
  setIssuedate(value: string): PayPartnerMerchantModelMessage;

  getExpirydate(): string;
  setExpirydate(value: string): PayPartnerMerchantModelMessage;

  getMakerid(): string;
  setMakerid(value: string): PayPartnerMerchantModelMessage;

  getMakedate(): string;
  setMakedate(value: string): PayPartnerMerchantModelMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerMerchantModelMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerMerchantModelMessage): PayPartnerMerchantModelMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerMerchantModelMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerMerchantModelMessage;
  static deserializeBinaryFromReader(message: PayPartnerMerchantModelMessage, reader: jspb.BinaryReader): PayPartnerMerchantModelMessage;
}

export namespace PayPartnerMerchantModelMessage {
  export type AsObject = {
    paypartnerid: string,
    paypartnername: string,
    paypartnertypeid: number,
    paypartnerormerchant: string,
    paypartnersymbol: string,
    internalorexternal: string,
    countrycode: string,
    countryname: string,
    paypartnerstatus: string,
    regulatorid: string,
    regulatorname: string,
    licenseno: string,
    issuedate: string,
    expirydate: string,
    makerid: string,
    makedate: string,
  }
}

export class PayPartnerMerchantModelForUpdateMessage extends jspb.Message {
  getPaypartnername(): string;
  setPaypartnername(value: string): PayPartnerMerchantModelForUpdateMessage;

  getRegulatorid(): string;
  setRegulatorid(value: string): PayPartnerMerchantModelForUpdateMessage;

  getLicenseno(): string;
  setLicenseno(value: string): PayPartnerMerchantModelForUpdateMessage;

  getIssuedate(): string;
  setIssuedate(value: string): PayPartnerMerchantModelForUpdateMessage;

  getExpirydate(): string;
  setExpirydate(value: string): PayPartnerMerchantModelForUpdateMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PayPartnerMerchantModelForUpdateMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerMerchantModelForUpdateMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerMerchantModelForUpdateMessage): PayPartnerMerchantModelForUpdateMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerMerchantModelForUpdateMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerMerchantModelForUpdateMessage;
  static deserializeBinaryFromReader(message: PayPartnerMerchantModelForUpdateMessage, reader: jspb.BinaryReader): PayPartnerMerchantModelForUpdateMessage;
}

export namespace PayPartnerMerchantModelForUpdateMessage {
  export type AsObject = {
    paypartnername: string,
    regulatorid: string,
    licenseno: string,
    issuedate: string,
    expirydate: string,
    languageid: string,
  }
}

export class PayPartnerMerchantWithServiceAndPackageRequestMessage extends jspb.Message {
  getPaypartnersymbol(): string;
  setPaypartnersymbol(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getPaypartnername(): string;
  setPaypartnername(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getServicecategoryid(): string;
  setServicecategoryid(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getSettlementaccounttypebankormomo(): string;
  setSettlementaccounttypebankormomo(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getSettlementacctno(): string;
  setSettlementacctno(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getSettlementacctname(): string;
  setSettlementacctname(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getSettlementbankorwalletname(): string;
  setSettlementbankorwalletname(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getSettlementbankcode(): string;
  setSettlementbankcode(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getSettlementbankbranchname(): string;
  setSettlementbankbranchname(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getAvailableoneganowyesno(): string;
  setAvailableoneganowyesno(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getRegulatorid(): string;
  setRegulatorid(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getLicenseno(): string;
  setLicenseno(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getIssuedate(): string;
  setIssuedate(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getExpirydate(): string;
  setExpirydate(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getTin(): string;
  setTin(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): PayPartnerMerchantWithServiceAndPackageRequestMessage;

  getPackagesList(): Array<PayPartnerServicesPackagesRequestMessage>;
  setPackagesList(value: Array<PayPartnerServicesPackagesRequestMessage>): PayPartnerMerchantWithServiceAndPackageRequestMessage;
  clearPackagesList(): PayPartnerMerchantWithServiceAndPackageRequestMessage;
  addPackages(value?: PayPartnerServicesPackagesRequestMessage, index?: number): PayPartnerServicesPackagesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerMerchantWithServiceAndPackageRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerMerchantWithServiceAndPackageRequestMessage): PayPartnerMerchantWithServiceAndPackageRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerMerchantWithServiceAndPackageRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerMerchantWithServiceAndPackageRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerMerchantWithServiceAndPackageRequestMessage, reader: jspb.BinaryReader): PayPartnerMerchantWithServiceAndPackageRequestMessage;
}

export namespace PayPartnerMerchantWithServiceAndPackageRequestMessage {
  export type AsObject = {
    paypartnersymbol: string,
    paypartnername: string,
    paypartnerservicename: string,
    servicecategoryid: string,
    settlementaccounttypebankormomo: string,
    settlementacctno: string,
    settlementacctname: string,
    settlementbankorwalletname: string,
    settlementbankcode: string,
    settlementbankbranchname: string,
    availableoneganowyesno: string,
    regulatorid: string,
    licenseno: string,
    issuedate: string,
    expirydate: string,
    countrycode: string,
    tin: string,
    languageid: string,
    packagesList: Array<PayPartnerServicesPackagesRequestMessage.AsObject>,
  }
}

export class MerchantServiceWithPackagesRequestMessage extends jspb.Message {
  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): MerchantServiceWithPackagesRequestMessage;

  getServicecategoryid(): string;
  setServicecategoryid(value: string): MerchantServiceWithPackagesRequestMessage;

  getSettlementaccounttypebankormomo(): string;
  setSettlementaccounttypebankormomo(value: string): MerchantServiceWithPackagesRequestMessage;

  getSettlementacctno(): string;
  setSettlementacctno(value: string): MerchantServiceWithPackagesRequestMessage;

  getSettlementacctname(): string;
  setSettlementacctname(value: string): MerchantServiceWithPackagesRequestMessage;

  getSettlementbankorwalletname(): string;
  setSettlementbankorwalletname(value: string): MerchantServiceWithPackagesRequestMessage;

  getSettlementbankcode(): string;
  setSettlementbankcode(value: string): MerchantServiceWithPackagesRequestMessage;

  getSettlementbankbranchname(): string;
  setSettlementbankbranchname(value: string): MerchantServiceWithPackagesRequestMessage;

  getAvailableoneganowyesno(): string;
  setAvailableoneganowyesno(value: string): MerchantServiceWithPackagesRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantServiceWithPackagesRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): MerchantServiceWithPackagesRequestMessage;

  getPackagesList(): Array<PayPartnerServicesPackagesRequestMessage>;
  setPackagesList(value: Array<PayPartnerServicesPackagesRequestMessage>): MerchantServiceWithPackagesRequestMessage;
  clearPackagesList(): MerchantServiceWithPackagesRequestMessage;
  addPackages(value?: PayPartnerServicesPackagesRequestMessage, index?: number): PayPartnerServicesPackagesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServiceWithPackagesRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServiceWithPackagesRequestMessage): MerchantServiceWithPackagesRequestMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServiceWithPackagesRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServiceWithPackagesRequestMessage;
  static deserializeBinaryFromReader(message: MerchantServiceWithPackagesRequestMessage, reader: jspb.BinaryReader): MerchantServiceWithPackagesRequestMessage;
}

export namespace MerchantServiceWithPackagesRequestMessage {
  export type AsObject = {
    paypartnerservicename: string,
    servicecategoryid: string,
    settlementaccounttypebankormomo: string,
    settlementacctno: string,
    settlementacctname: string,
    settlementbankorwalletname: string,
    settlementbankcode: string,
    settlementbankbranchname: string,
    availableoneganowyesno: string,
    countrycode: string,
    languageid: string,
    packagesList: Array<PayPartnerServicesPackagesRequestMessage.AsObject>,
  }
}

export class PayPartnerServicesPackagesRequestMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): PayPartnerServicesPackagesRequestMessage;

  getPackagename(): string;
  setPackagename(value: string): PayPartnerServicesPackagesRequestMessage;

  getIspackagefeefixedyesno(): string;
  setIspackagefeefixedyesno(value: string): PayPartnerServicesPackagesRequestMessage;

  getPackagefeeamt(): number;
  setPackagefeeamt(value: number): PayPartnerServicesPackagesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerServicesPackagesRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerServicesPackagesRequestMessage): PayPartnerServicesPackagesRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerServicesPackagesRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerServicesPackagesRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerServicesPackagesRequestMessage, reader: jspb.BinaryReader): PayPartnerServicesPackagesRequestMessage;
}

export namespace PayPartnerServicesPackagesRequestMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    packagename: string,
    ispackagefeefixedyesno: string,
    packagefeeamt: number,
  }
}

export class PaypartnerChargesRequestMessage extends jspb.Message {
  getDrpayoutcrcollection(): string;
  setDrpayoutcrcollection(value: string): PaypartnerChargesRequestMessage;

  getLowerlimit(): number;
  setLowerlimit(value: number): PaypartnerChargesRequestMessage;

  getUpperlimit(): number;
  setUpperlimit(value: number): PaypartnerChargesRequestMessage;

  getFlatratetypepaypartner(): string;
  setFlatratetypepaypartner(value: string): PaypartnerChargesRequestMessage;

  getFlatratevaluepaypartner(): number;
  setFlatratevaluepaypartner(value: number): PaypartnerChargesRequestMessage;

  getFlatratetypeeganow(): string;
  setFlatratetypeeganow(value: string): PaypartnerChargesRequestMessage;

  getFlatratevalueeganow(): number;
  setFlatratevalueeganow(value: number): PaypartnerChargesRequestMessage;

  getLastone(): string;
  setLastone(value: string): PaypartnerChargesRequestMessage;

  getChargepercentagepaidbycustomer(): number;
  setChargepercentagepaidbycustomer(value: number): PaypartnerChargesRequestMessage;

  getChargepercentagepaidbypaypartner(): number;
  setChargepercentagepaidbypaypartner(value: number): PaypartnerChargesRequestMessage;

  getChargesettlementinstantordeferred(): string;
  setChargesettlementinstantordeferred(value: string): PaypartnerChargesRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaypartnerChargesRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PaypartnerChargesRequestMessage): PaypartnerChargesRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PaypartnerChargesRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaypartnerChargesRequestMessage;
  static deserializeBinaryFromReader(message: PaypartnerChargesRequestMessage, reader: jspb.BinaryReader): PaypartnerChargesRequestMessage;
}

export namespace PaypartnerChargesRequestMessage {
  export type AsObject = {
    drpayoutcrcollection: string,
    lowerlimit: number,
    upperlimit: number,
    flatratetypepaypartner: string,
    flatratevaluepaypartner: number,
    flatratetypeeganow: string,
    flatratevalueeganow: number,
    lastone: string,
    chargepercentagepaidbycustomer: number,
    chargepercentagepaidbypaypartner: number,
    chargesettlementinstantordeferred: string,
  }
}

export class PayPartnerServiceRequestMessage extends jspb.Message {
  getPaypartnerid(): string;
  setPaypartnerid(value: string): PayPartnerServiceRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerServiceRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerServiceRequestMessage): PayPartnerServiceRequestMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerServiceRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerServiceRequestMessage;
  static deserializeBinaryFromReader(message: PayPartnerServiceRequestMessage, reader: jspb.BinaryReader): PayPartnerServiceRequestMessage;
}

export namespace PayPartnerServiceRequestMessage {
  export type AsObject = {
    paypartnerid: string,
  }
}

export class PayPartnerServiceForPayPartnerResponseMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getPaypartnerid(): string;
  setPaypartnerid(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getServicecategoryid(): string;
  setServicecategoryid(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getInternalorexternal(): string;
  setInternalorexternal(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getLabelcustomeruniqueid(): string;
  setLabelcustomeruniqueid(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getLabelcolumnone(): string;
  setLabelcolumnone(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getLabelcolumntwo(): string;
  setLabelcolumntwo(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getLabelcolumnthree(): string;
  setLabelcolumnthree(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getIscolumnonerequiredyesnona(): string;
  setIscolumnonerequiredyesnona(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getIscolumntworequiredyesnona(): string;
  setIscolumntworequiredyesnona(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  getIscolumnthreerequiredyesnona(): string;
  setIscolumnthreerequiredyesnona(value: string): PayPartnerServiceForPayPartnerResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerServiceForPayPartnerResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerServiceForPayPartnerResponseMessage): PayPartnerServiceForPayPartnerResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerServiceForPayPartnerResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerServiceForPayPartnerResponseMessage;
  static deserializeBinaryFromReader(message: PayPartnerServiceForPayPartnerResponseMessage, reader: jspb.BinaryReader): PayPartnerServiceForPayPartnerResponseMessage;
}

export namespace PayPartnerServiceForPayPartnerResponseMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    paypartnerservicename: string,
    paypartnerid: string,
    servicecategoryid: string,
    internalorexternal: string,
    labelcustomeruniqueid: string,
    labelcolumnone: string,
    labelcolumntwo: string,
    labelcolumnthree: string,
    iscolumnonerequiredyesnona: string,
    iscolumntworequiredyesnona: string,
    iscolumnthreerequiredyesnona: string,
  }
}

export class PayPartnerServicesListResponseMessage extends jspb.Message {
  getMerchantservicelistList(): Array<PayPartnerServiceForPayPartnerResponseMessage>;
  setMerchantservicelistList(value: Array<PayPartnerServiceForPayPartnerResponseMessage>): PayPartnerServicesListResponseMessage;
  clearMerchantservicelistList(): PayPartnerServicesListResponseMessage;
  addMerchantservicelist(value?: PayPartnerServiceForPayPartnerResponseMessage, index?: number): PayPartnerServiceForPayPartnerResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayPartnerServicesListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayPartnerServicesListResponseMessage): PayPartnerServicesListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: PayPartnerServicesListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayPartnerServicesListResponseMessage;
  static deserializeBinaryFromReader(message: PayPartnerServicesListResponseMessage, reader: jspb.BinaryReader): PayPartnerServicesListResponseMessage;
}

export namespace PayPartnerServicesListResponseMessage {
  export type AsObject = {
    merchantservicelistList: Array<PayPartnerServiceForPayPartnerResponseMessage.AsObject>,
  }
}

export class RegulatorsRequestMessage extends jspb.Message {
  getRegulatorid(): string;
  setRegulatorid(value: string): RegulatorsRequestMessage;

  getRegulatorname(): string;
  setRegulatorname(value: string): RegulatorsRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): RegulatorsRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegulatorsRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RegulatorsRequestMessage): RegulatorsRequestMessage.AsObject;
  static serializeBinaryToWriter(message: RegulatorsRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegulatorsRequestMessage;
  static deserializeBinaryFromReader(message: RegulatorsRequestMessage, reader: jspb.BinaryReader): RegulatorsRequestMessage;
}

export namespace RegulatorsRequestMessage {
  export type AsObject = {
    regulatorid: string,
    regulatorname: string,
    countrycode: string,
  }
}

export class RegulatorsListRequestMessage extends jspb.Message {
  getRegulatorslistList(): Array<RegulatorsRequestMessage>;
  setRegulatorslistList(value: Array<RegulatorsRequestMessage>): RegulatorsListRequestMessage;
  clearRegulatorslistList(): RegulatorsListRequestMessage;
  addRegulatorslist(value?: RegulatorsRequestMessage, index?: number): RegulatorsRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegulatorsListRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RegulatorsListRequestMessage): RegulatorsListRequestMessage.AsObject;
  static serializeBinaryToWriter(message: RegulatorsListRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegulatorsListRequestMessage;
  static deserializeBinaryFromReader(message: RegulatorsListRequestMessage, reader: jspb.BinaryReader): RegulatorsListRequestMessage;
}

export namespace RegulatorsListRequestMessage {
  export type AsObject = {
    regulatorslistList: Array<RegulatorsRequestMessage.AsObject>,
  }
}

export class EganowModuleRequestMessage extends jspb.Message {
  getEganowmoduleid(): number;
  setEganowmoduleid(value: number): EganowModuleRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EganowModuleRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EganowModuleRequestMessage): EganowModuleRequestMessage.AsObject;
  static serializeBinaryToWriter(message: EganowModuleRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EganowModuleRequestMessage;
  static deserializeBinaryFromReader(message: EganowModuleRequestMessage, reader: jspb.BinaryReader): EganowModuleRequestMessage;
}

export namespace EganowModuleRequestMessage {
  export type AsObject = {
    eganowmoduleid: number,
  }
}

export class EganowmoduleModelRequestMessage extends jspb.Message {
  getEganowmoduleid(): string;
  setEganowmoduleid(value: string): EganowmoduleModelRequestMessage;

  getEganowmoduledesc(): string;
  setEganowmoduledesc(value: string): EganowmoduleModelRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EganowmoduleModelRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EganowmoduleModelRequestMessage): EganowmoduleModelRequestMessage.AsObject;
  static serializeBinaryToWriter(message: EganowmoduleModelRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EganowmoduleModelRequestMessage;
  static deserializeBinaryFromReader(message: EganowmoduleModelRequestMessage, reader: jspb.BinaryReader): EganowmoduleModelRequestMessage;
}

export namespace EganowmoduleModelRequestMessage {
  export type AsObject = {
    eganowmoduleid: string,
    eganowmoduledesc: string,
  }
}

export class EganowModuleListRequestMessage extends jspb.Message {
  getModulelistList(): Array<EganowmoduleModelRequestMessage>;
  setModulelistList(value: Array<EganowmoduleModelRequestMessage>): EganowModuleListRequestMessage;
  clearModulelistList(): EganowModuleListRequestMessage;
  addModulelist(value?: EganowmoduleModelRequestMessage, index?: number): EganowmoduleModelRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EganowModuleListRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EganowModuleListRequestMessage): EganowModuleListRequestMessage.AsObject;
  static serializeBinaryToWriter(message: EganowModuleListRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EganowModuleListRequestMessage;
  static deserializeBinaryFromReader(message: EganowModuleListRequestMessage, reader: jspb.BinaryReader): EganowModuleListRequestMessage;
}

export namespace EganowModuleListRequestMessage {
  export type AsObject = {
    modulelistList: Array<EganowmoduleModelRequestMessage.AsObject>,
  }
}

export class MerchantServicesMessage extends jspb.Message {
  getPaypartnerserviceid(): string;
  setPaypartnerserviceid(value: string): MerchantServicesMessage;

  getPaypartnerservicename(): string;
  setPaypartnerservicename(value: string): MerchantServicesMessage;

  getCountrycode(): string;
  setCountrycode(value: string): MerchantServicesMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): MerchantServicesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServicesMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServicesMessage): MerchantServicesMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServicesMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServicesMessage;
  static deserializeBinaryFromReader(message: MerchantServicesMessage, reader: jspb.BinaryReader): MerchantServicesMessage;
}

export namespace MerchantServicesMessage {
  export type AsObject = {
    paypartnerserviceid: string,
    paypartnerservicename: string,
    countrycode: string,
    currencyiso: string,
  }
}

export class MerchantServicesListMessage extends jspb.Message {
  getServicelistList(): Array<MerchantServicesMessage>;
  setServicelistList(value: Array<MerchantServicesMessage>): MerchantServicesListMessage;
  clearServicelistList(): MerchantServicesListMessage;
  addServicelist(value?: MerchantServicesMessage, index?: number): MerchantServicesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantServicesListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantServicesListMessage): MerchantServicesListMessage.AsObject;
  static serializeBinaryToWriter(message: MerchantServicesListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantServicesListMessage;
  static deserializeBinaryFromReader(message: MerchantServicesListMessage, reader: jspb.BinaryReader): MerchantServicesListMessage;
}

export namespace MerchantServicesListMessage {
  export type AsObject = {
    servicelistList: Array<MerchantServicesMessage.AsObject>,
  }
}

