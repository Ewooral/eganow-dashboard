import * as jspb from 'google-protobuf'

import * as eganow_api_merchant_onboarding_entity_pb from '../../../eganow/api/merchant/onboarding_entity_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


export class AddBusinessInfoRequest extends jspb.Message {
  getPostalZipCode(): string;
  setPostalZipCode(value: string): AddBusinessInfoRequest;

  getStreetAddress(): string;
  setStreetAddress(value: string): AddBusinessInfoRequest;

  getCity(): string;
  setCity(value: string): AddBusinessInfoRequest;

  getProvinceState(): string;
  setProvinceState(value: string): AddBusinessInfoRequest;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): AddBusinessInfoRequest;

  getFirstOccupancyDate(): string;
  setFirstOccupancyDate(value: string): AddBusinessInfoRequest;

  getOfficeOwnership(): eganow_api_merchant_onboarding_entity_pb.OfficeOwnership;
  setOfficeOwnership(value: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership): AddBusinessInfoRequest;

  getPostalAddress(): string;
  setPostalAddress(value: string): AddBusinessInfoRequest;

  getOfficeMobileNumber(): string;
  setOfficeMobileNumber(value: string): AddBusinessInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessInfoRequest): AddBusinessInfoRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessInfoRequest;
  static deserializeBinaryFromReader(message: AddBusinessInfoRequest, reader: jspb.BinaryReader): AddBusinessInfoRequest;
}

export namespace AddBusinessInfoRequest {
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

export class UpdateBusinessInfoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateBusinessInfoRequest;

  getTradingName(): string;
  setTradingName(value: string): UpdateBusinessInfoRequest;

  getPostalZipCode(): string;
  setPostalZipCode(value: string): UpdateBusinessInfoRequest;

  getStreetAddress(): string;
  setStreetAddress(value: string): UpdateBusinessInfoRequest;

  getCity(): string;
  setCity(value: string): UpdateBusinessInfoRequest;

  getProvinceState(): string;
  setProvinceState(value: string): UpdateBusinessInfoRequest;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): UpdateBusinessInfoRequest;

  getDateOfIncorporation(): string;
  setDateOfIncorporation(value: string): UpdateBusinessInfoRequest;

  getIndustryId(): string;
  setIndustryId(value: string): UpdateBusinessInfoRequest;

  getRegistrationNumber(): string;
  setRegistrationNumber(value: string): UpdateBusinessInfoRequest;

  getEmail(): string;
  setEmail(value: string): UpdateBusinessInfoRequest;

  getIsRegulated(): boolean;
  setIsRegulated(value: boolean): UpdateBusinessInfoRequest;

  getRegulatorId(): string;
  setRegulatorId(value: string): UpdateBusinessInfoRequest;

  getCompanyRegistrationType(): eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType;
  setCompanyRegistrationType(value: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType): UpdateBusinessInfoRequest;

  getLicenseInfo(): UpdateBusinessInfoRequest.LicenseInfo | undefined;
  setLicenseInfo(value?: UpdateBusinessInfoRequest.LicenseInfo): UpdateBusinessInfoRequest;
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
    postalZipCode: string,
    streetAddress: string,
    city: string,
    provinceState: string,
    digitalAddress: string,
    dateOfIncorporation: string,
    industryId: string,
    registrationNumber: string,
    email: string,
    isRegulated: boolean,
    regulatorId: string,
    companyRegistrationType: eganow_api_merchant_onboarding_entity_pb.CompanyRegistrationType,
    licenseInfo?: UpdateBusinessInfoRequest.LicenseInfo.AsObject,
    officeMobileNumber: string,
    taxIdentificationNumber: string,
    vatNumber: string,
  }

  export class LicenseInfo extends jspb.Message {
    getLicenseNumber(): string;
    setLicenseNumber(value: string): LicenseInfo;

    getIssuedDate(): string;
    setIssuedDate(value: string): LicenseInfo;

    getExpiryDate(): string;
    setExpiryDate(value: string): LicenseInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseInfo.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseInfo): LicenseInfo.AsObject;
    static serializeBinaryToWriter(message: LicenseInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseInfo;
    static deserializeBinaryFromReader(message: LicenseInfo, reader: jspb.BinaryReader): LicenseInfo;
  }

  export namespace LicenseInfo {
    export type AsObject = {
      licenseNumber: string,
      issuedDate: string,
      expiryDate: string,
    }
  }

}

export class BusinessInfoResponse extends jspb.Message {
  getCity(): string;
  setCity(value: string): BusinessInfoResponse;

  getProvinceState(): string;
  setProvinceState(value: string): BusinessInfoResponse;

  getDigitalAddress(): string;
  setDigitalAddress(value: string): BusinessInfoResponse;

  getPostalAddress(): string;
  setPostalAddress(value: string): BusinessInfoResponse;

  getPostalZipCode(): string;
  setPostalZipCode(value: string): BusinessInfoResponse;

  getFirstOccupancyDate(): string;
  setFirstOccupancyDate(value: string): BusinessInfoResponse;

  getOfficeOwnership(): eganow_api_merchant_onboarding_entity_pb.OfficeOwnership;
  setOfficeOwnership(value: eganow_api_merchant_onboarding_entity_pb.OfficeOwnership): BusinessInfoResponse;

  getMobileNumber(): string;
  setMobileNumber(value: string): BusinessInfoResponse;

  getEmail(): string;
  setEmail(value: string): BusinessInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessInfoResponse): BusinessInfoResponse.AsObject;
  static serializeBinaryToWriter(message: BusinessInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessInfoResponse;
  static deserializeBinaryFromReader(message: BusinessInfoResponse, reader: jspb.BinaryReader): BusinessInfoResponse;
}

export namespace BusinessInfoResponse {
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

export class AddBusinessContactRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AddBusinessContactRequest;

  getFirstName(): string;
  setFirstName(value: string): AddBusinessContactRequest;

  getLastName(): string;
  setLastName(value: string): AddBusinessContactRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): AddBusinessContactRequest;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): AddBusinessContactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessContactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessContactRequest): AddBusinessContactRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessContactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessContactRequest;
  static deserializeBinaryFromReader(message: AddBusinessContactRequest, reader: jspb.BinaryReader): AddBusinessContactRequest;
}

export namespace AddBusinessContactRequest {
  export type AsObject = {
    email: string,
    firstName: string,
    lastName: string,
    mobileNumber: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
  }
}

export class UpdateBusinessContactRequest extends jspb.Message {
  getContactId(): number;
  setContactId(value: number): UpdateBusinessContactRequest;

  getFirstName(): string;
  setFirstName(value: string): UpdateBusinessContactRequest;

  getLastName(): string;
  setLastName(value: string): UpdateBusinessContactRequest;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): UpdateBusinessContactRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): UpdateBusinessContactRequest;

  getEmail(): string;
  setEmail(value: string): UpdateBusinessContactRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessContactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessContactRequest): UpdateBusinessContactRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessContactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessContactRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessContactRequest, reader: jspb.BinaryReader): UpdateBusinessContactRequest;
}

export namespace UpdateBusinessContactRequest {
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

