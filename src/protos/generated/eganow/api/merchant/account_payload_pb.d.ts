import * as jspb from 'google-protobuf'

import * as eganow_api_merchant_onboarding_entity_pb from '../../../eganow/api/merchant/onboarding_entity_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class BusinessLicenseInfo extends jspb.Message {
  getLicenseNumber(): string;
  setLicenseNumber(value: string): BusinessLicenseInfo;

  getIssuedDate(): string;
  setIssuedDate(value: string): BusinessLicenseInfo;

  getExpiryDate(): string;
  setExpiryDate(value: string): BusinessLicenseInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessLicenseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessLicenseInfo): BusinessLicenseInfo.AsObject;
  static serializeBinaryToWriter(message: BusinessLicenseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessLicenseInfo;
  static deserializeBinaryFromReader(message: BusinessLicenseInfo, reader: jspb.BinaryReader): BusinessLicenseInfo;
}

export namespace BusinessLicenseInfo {
  export type AsObject = {
    licenseNumber: string,
    issuedDate: string,
    expiryDate: string,
  }
}

export class AddBusinessInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddBusinessInfoRequest;

  getTradingName(): string;
  setTradingName(value: string): AddBusinessInfoRequest;

  getDateOfIncorporation(): string;
  setDateOfIncorporation(value: string): AddBusinessInfoRequest;

  getIndustryId(): string;
  setIndustryId(value: string): AddBusinessInfoRequest;

  getCompanyRegistrationNumber(): string;
  setCompanyRegistrationNumber(value: string): AddBusinessInfoRequest;

  getEmail(): string;
  setEmail(value: string): AddBusinessInfoRequest;

  getRegulatorId(): string;
  setRegulatorId(value: string): AddBusinessInfoRequest;

  getCompanyRegistrationType(): eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType;
  setCompanyRegistrationType(value: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType): AddBusinessInfoRequest;

  getLicenseInfo(): BusinessLicenseInfo | undefined;
  setLicenseInfo(value?: BusinessLicenseInfo): AddBusinessInfoRequest;
  hasLicenseInfo(): boolean;
  clearLicenseInfo(): AddBusinessInfoRequest;

  getOfficeMobileNumber(): string;
  setOfficeMobileNumber(value: string): AddBusinessInfoRequest;

  getTaxIdentificationNumber(): string;
  setTaxIdentificationNumber(value: string): AddBusinessInfoRequest;

  getVatNumber(): string;
  setVatNumber(value: string): AddBusinessInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessInfoRequest): AddBusinessInfoRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessInfoRequest;
  static deserializeBinaryFromReader(message: AddBusinessInfoRequest, reader: jspb.BinaryReader): AddBusinessInfoRequest;
}

export namespace AddBusinessInfoRequest {
  export type AsObject = {
    name: string,
    tradingName: string,
    dateOfIncorporation: string,
    industryId: string,
    companyRegistrationNumber: string,
    email: string,
    regulatorId: string,
    companyRegistrationType: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType,
    licenseInfo?: BusinessLicenseInfo.AsObject,
    officeMobileNumber: string,
    taxIdentificationNumber: string,
    vatNumber: string,
  }
}

export class UpdateBusinessInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateBusinessInfoRequest;

  getTradingName(): string;
  setTradingName(value: string): UpdateBusinessInfoRequest;

  getDateOfIncorporation(): string;
  setDateOfIncorporation(value: string): UpdateBusinessInfoRequest;

  getIndustryId(): string;
  setIndustryId(value: string): UpdateBusinessInfoRequest;

  getCompanyRegistrationNumber(): string;
  setCompanyRegistrationNumber(value: string): UpdateBusinessInfoRequest;

  getEmail(): string;
  setEmail(value: string): UpdateBusinessInfoRequest;

  getRegulatorId(): string;
  setRegulatorId(value: string): UpdateBusinessInfoRequest;

  getCompanyRegistrationType(): eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType;
  setCompanyRegistrationType(value: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType): UpdateBusinessInfoRequest;

  getLicenseInfo(): BusinessLicenseInfo | undefined;
  setLicenseInfo(value?: BusinessLicenseInfo): UpdateBusinessInfoRequest;
  hasLicenseInfo(): boolean;
  clearLicenseInfo(): UpdateBusinessInfoRequest;

  getOfficeMobileNumber(): string;
  setOfficeMobileNumber(value: string): UpdateBusinessInfoRequest;

  getTaxIdentificationNumber(): string;
  setTaxIdentificationNumber(value: string): UpdateBusinessInfoRequest;

  getVatNumber(): string;
  setVatNumber(value: string): UpdateBusinessInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessInfoRequest): UpdateBusinessInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessInfoRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessInfoRequest, reader: jspb.BinaryReader): UpdateBusinessInfoRequest;
}

export namespace UpdateBusinessInfoRequest {
  export type AsObject = {
    name: string,
    tradingName: string,
    dateOfIncorporation: string,
    industryId: string,
    companyRegistrationNumber: string,
    email: string,
    regulatorId: string,
    companyRegistrationType: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType,
    licenseInfo?: BusinessLicenseInfo.AsObject,
    officeMobileNumber: string,
    taxIdentificationNumber: string,
    vatNumber: string,
  }
}

export class BusinessInfoResponse extends jspb.Message {
  getCompanyName(): string;
  setCompanyName(value: string): BusinessInfoResponse;

  getTradingName(): string;
  setTradingName(value: string): BusinessInfoResponse;

  getDateOfIncorporation(): string;
  setDateOfIncorporation(value: string): BusinessInfoResponse;

  getCompanyRegistrationNumber(): string;
  setCompanyRegistrationNumber(value: string): BusinessInfoResponse;

  getEmail(): string;
  setEmail(value: string): BusinessInfoResponse;

  getRegulatorId(): string;
  setRegulatorId(value: string): BusinessInfoResponse;

  getCompanyRegistrationType(): eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType;
  setCompanyRegistrationType(value: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType): BusinessInfoResponse;

  getLicenseInfo(): BusinessLicenseInfo | undefined;
  setLicenseInfo(value?: BusinessLicenseInfo): BusinessInfoResponse;
  hasLicenseInfo(): boolean;
  clearLicenseInfo(): BusinessInfoResponse;

  getTaxIdentificationNumber(): string;
  setTaxIdentificationNumber(value: string): BusinessInfoResponse;

  getVatNumber(): string;
  setVatNumber(value: string): BusinessInfoResponse;

  getProfilePicture(): string;
  setProfilePicture(value: string): BusinessInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessInfoResponse): BusinessInfoResponse.AsObject;
  static serializeBinaryToWriter(message: BusinessInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessInfoResponse;
  static deserializeBinaryFromReader(message: BusinessInfoResponse, reader: jspb.BinaryReader): BusinessInfoResponse;
}

export namespace BusinessInfoResponse {
  export type AsObject = {
    companyName: string,
    tradingName: string,
    dateOfIncorporation: string,
    companyRegistrationNumber: string,
    email: string,
    regulatorId: string,
    companyRegistrationType: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType,
    licenseInfo?: BusinessLicenseInfo.AsObject,
    taxIdentificationNumber: string,
    vatNumber: string,
    profilePicture: string,
  }
}

export class AddBusinessContactInfoRequest extends jspb.Message {
  getPostalZipCode(): string;
  setPostalZipCode(value: string): AddBusinessContactInfoRequest;

  getStreetAddress(): string;
  setStreetAddress(value: string): AddBusinessContactInfoRequest;

  getCity(): string;
  setCity(value: string): AddBusinessContactInfoRequest;

  getProvinceState(): string;
  setProvinceState(value: string): AddBusinessContactInfoRequest;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): AddBusinessContactInfoRequest;

  getFirstOccupancyDate(): string;
  setFirstOccupancyDate(value: string): AddBusinessContactInfoRequest;

  getOfficeOwnership(): eganow_api_merchant_onboarding_entity_pb.OfficeOwnership;
  setOfficeOwnership(value: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership): AddBusinessContactInfoRequest;

  getPostalAddress(): string;
  setPostalAddress(value: string): AddBusinessContactInfoRequest;

  getOfficeMobileNumber(): string;
  setOfficeMobileNumber(value: string): AddBusinessContactInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessContactInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessContactInfoRequest): AddBusinessContactInfoRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessContactInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessContactInfoRequest;
  static deserializeBinaryFromReader(message: AddBusinessContactInfoRequest, reader: jspb.BinaryReader): AddBusinessContactInfoRequest;
}

export namespace AddBusinessContactInfoRequest {
  export type AsObject = {
    postalZipCode: string,
    streetAddress: string,
    city: string,
    provinceState: string,
    digitalAddress: string,
    firstOccupancyDate: string,
    officeOwnership: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership,
    postalAddress: string,
    officeMobileNumber: string,
  }
}

export class UpdateBusinessContactInfoRequest extends jspb.Message {
  getPostalZipCode(): string;
  setPostalZipCode(value: string): UpdateBusinessContactInfoRequest;

  getStreetAddress(): string;
  setStreetAddress(value: string): UpdateBusinessContactInfoRequest;

  getCity(): string;
  setCity(value: string): UpdateBusinessContactInfoRequest;

  getProvinceState(): string;
  setProvinceState(value: string): UpdateBusinessContactInfoRequest;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): UpdateBusinessContactInfoRequest;

  getFirstOccupancyDate(): string;
  setFirstOccupancyDate(value: string): UpdateBusinessContactInfoRequest;

  getOfficeOwnership(): eganow_api_merchant_onboarding_entity_pb.OfficeOwnership;
  setOfficeOwnership(value: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership): UpdateBusinessContactInfoRequest;

  getPostalAddress(): string;
  setPostalAddress(value: string): UpdateBusinessContactInfoRequest;

  getOfficeMobileNumber(): string;
  setOfficeMobileNumber(value: string): UpdateBusinessContactInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessContactInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessContactInfoRequest): UpdateBusinessContactInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessContactInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessContactInfoRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessContactInfoRequest, reader: jspb.BinaryReader): UpdateBusinessContactInfoRequest;
}

export namespace UpdateBusinessContactInfoRequest {
  export type AsObject = {
    postalZipCode: string,
    streetAddress: string,
    city: string,
    provinceState: string,
    digitalAddress: string,
    firstOccupancyDate: string,
    officeOwnership: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership,
    postalAddress: string,
    officeMobileNumber: string,
  }
}

export class BusinessContactInfoResponse extends jspb.Message {
  getCity(): string;
  setCity(value: string): BusinessContactInfoResponse;

  getProvinceState(): string;
  setProvinceState(value: string): BusinessContactInfoResponse;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): BusinessContactInfoResponse;

  getPostalAddress(): string;
  setPostalAddress(value: string): BusinessContactInfoResponse;

  getPostalZipCode(): string;
  setPostalZipCode(value: string): BusinessContactInfoResponse;

  getFirstOccupancyDate(): string;
  setFirstOccupancyDate(value: string): BusinessContactInfoResponse;

  getOfficeOwnership(): eganow_api_merchant_onboarding_entity_pb.OfficeOwnership;
  setOfficeOwnership(value: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership): BusinessContactInfoResponse;

  getMobileNumber(): string;
  setMobileNumber(value: string): BusinessContactInfoResponse;

  getEmail(): string;
  setEmail(value: string): BusinessContactInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessContactInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessContactInfoResponse): BusinessContactInfoResponse.AsObject;
  static serializeBinaryToWriter(message: BusinessContactInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessContactInfoResponse;
  static deserializeBinaryFromReader(message: BusinessContactInfoResponse, reader: jspb.BinaryReader): BusinessContactInfoResponse;
}

export namespace BusinessContactInfoResponse {
  export type AsObject = {
    city: string,
    provinceState: string,
    digitalAddress: string,
    postalAddress: string,
    postalZipCode: string,
    firstOccupancyDate: string,
    officeOwnership: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership,
    mobileNumber: string,
    email: string,
  }
}

export class AddBusinessContactPersonRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AddBusinessContactPersonRequest;

  getFirstName(): string;
  setFirstName(value: string): AddBusinessContactPersonRequest;

  getLastName(): string;
  setLastName(value: string): AddBusinessContactPersonRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): AddBusinessContactPersonRequest;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): AddBusinessContactPersonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessContactPersonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessContactPersonRequest): AddBusinessContactPersonRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessContactPersonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessContactPersonRequest;
  static deserializeBinaryFromReader(message: AddBusinessContactPersonRequest, reader: jspb.BinaryReader): AddBusinessContactPersonRequest;
}

export namespace AddBusinessContactPersonRequest {
  export type AsObject = {
    email: string,
    firstName: string,
    lastName: string,
    mobileNumber: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
  }
}

export class UpdateBusinessContactPersonRequest extends jspb.Message {
  getContactId(): number;
  setContactId(value: number): UpdateBusinessContactPersonRequest;

  getFirstName(): string;
  setFirstName(value: string): UpdateBusinessContactPersonRequest;

  getLastName(): string;
  setLastName(value: string): UpdateBusinessContactPersonRequest;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): UpdateBusinessContactPersonRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): UpdateBusinessContactPersonRequest;

  getEmail(): string;
  setEmail(value: string): UpdateBusinessContactPersonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessContactPersonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessContactPersonRequest): UpdateBusinessContactPersonRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessContactPersonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessContactPersonRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessContactPersonRequest, reader: jspb.BinaryReader): UpdateBusinessContactPersonRequest;
}

export namespace UpdateBusinessContactPersonRequest {
  export type AsObject = {
    contactId: number,
    firstName: string,
    lastName: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
    mobileNumber: string,
    email: string,
  }
}

export class BusinessContactPersonPayload extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): BusinessContactPersonPayload;

  getLastName(): string;
  setLastName(value: string): BusinessContactPersonPayload;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): BusinessContactPersonPayload;

  getMobileNumber(): string;
  setMobileNumber(value: string): BusinessContactPersonPayload;

  getEmail(): string;
  setEmail(value: string): BusinessContactPersonPayload;

  getContactId(): number;
  setContactId(value: number): BusinessContactPersonPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessContactPersonPayload.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessContactPersonPayload): BusinessContactPersonPayload.AsObject;
  static serializeBinaryToWriter(message: BusinessContactPersonPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessContactPersonPayload;
  static deserializeBinaryFromReader(message: BusinessContactPersonPayload, reader: jspb.BinaryReader): BusinessContactPersonPayload;
}

export namespace BusinessContactPersonPayload {
  export type AsObject = {
    firstName: string,
    lastName: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
    mobileNumber: string,
    email: string,
    contactId: number,
  }
}

export class BusinessContactListResponse extends jspb.Message {
  getContactsList(): Array<BusinessContactPersonPayload>;
  setContactsList(value: Array<BusinessContactPersonPayload>): BusinessContactListResponse;
  clearContactsList(): BusinessContactListResponse;
  addContacts(value?: BusinessContactPersonPayload, index?: number): BusinessContactPersonPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessContactListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessContactListResponse): BusinessContactListResponse.AsObject;
  static serializeBinaryToWriter(message: BusinessContactListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessContactListResponse;
  static deserializeBinaryFromReader(message: BusinessContactListResponse, reader: jspb.BinaryReader): BusinessContactListResponse;
}

export namespace BusinessContactListResponse {
  export type AsObject = {
    contactsList: Array<BusinessContactPersonPayload.AsObject>,
  }
}

