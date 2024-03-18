import * as jspb from 'google-protobuf'

import * as eganow_api_merchant_onboarding_entity_pb from '../../../eganow/api/merchant/onboarding_entity_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';


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

  getIdDetails(): AddBusinessContactRequest.IdentityDocumentDetails | undefined;
  setIdDetails(value?: AddBusinessContactRequest.IdentityDocumentDetails): AddBusinessContactRequest;
  hasIdDetails(): boolean;
  clearIdDetails(): AddBusinessContactRequest;

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
    idDetails?: AddBusinessContactRequest.IdentityDocumentDetails.AsObject,
  }

  export class IdentityDocumentDetails extends jspb.Message {
    getIdType(): eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes;
    setIdType(value: eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes): IdentityDocumentDetails;

    getIdNumber(): string;
    setIdNumber(value: string): IdentityDocumentDetails;

    getIdExpiryDate(): string;
    setIdExpiryDate(value: string): IdentityDocumentDetails;

    getPlaceOfIssue(): string;
    setPlaceOfIssue(value: string): IdentityDocumentDetails;

    getRawCardImage(): Uint8Array | string;
    getRawCardImage_asU8(): Uint8Array;
    getRawCardImage_asB64(): string;
    setRawCardImage(value: Uint8Array | string): IdentityDocumentDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdentityDocumentDetails.AsObject;
    static toObject(includeInstance: boolean, msg: IdentityDocumentDetails): IdentityDocumentDetails.AsObject;
    static serializeBinaryToWriter(message: IdentityDocumentDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdentityDocumentDetails;
    static deserializeBinaryFromReader(message: IdentityDocumentDetails, reader: jspb.BinaryReader): IdentityDocumentDetails;
  }

  export namespace IdentityDocumentDetails {
    export type AsObject = {
      idType: eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes,
      idNumber: string,
      idExpiryDate: string,
      placeOfIssue: string,
      rawCardImage: Uint8Array | string,
    }
  }

}

