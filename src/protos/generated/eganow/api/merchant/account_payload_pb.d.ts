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

export class DirectorShareholderIDInfo extends jspb.Message {
  getIdNumber(): string;
  setIdNumber(value: string): DirectorShareholderIDInfo;

  getIdExpiryDate(): string;
  setIdExpiryDate(value: string): DirectorShareholderIDInfo;

  getPlaceOfIssue(): string;
  setPlaceOfIssue(value: string): DirectorShareholderIDInfo;

  getIdType(): eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes;
  setIdType(value: eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes): DirectorShareholderIDInfo;

  getIdFrontImage(): Uint8Array | string;
  getIdFrontImage_asU8(): Uint8Array;
  getIdFrontImage_asB64(): string;
  setIdFrontImage(value: Uint8Array | string): DirectorShareholderIDInfo;

  getIdBackImage(): Uint8Array | string;
  getIdBackImage_asU8(): Uint8Array;
  getIdBackImage_asB64(): string;
  setIdBackImage(value: Uint8Array | string): DirectorShareholderIDInfo;

  getPortraitImage(): Uint8Array | string;
  getPortraitImage_asU8(): Uint8Array;
  getPortraitImage_asB64(): string;
  setPortraitImage(value: Uint8Array | string): DirectorShareholderIDInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectorShareholderIDInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DirectorShareholderIDInfo): DirectorShareholderIDInfo.AsObject;
  static serializeBinaryToWriter(message: DirectorShareholderIDInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectorShareholderIDInfo;
  static deserializeBinaryFromReader(message: DirectorShareholderIDInfo, reader: jspb.BinaryReader): DirectorShareholderIDInfo;
}

export namespace DirectorShareholderIDInfo {
  export type AsObject = {
    idNumber: string,
    idExpiryDate: string,
    placeOfIssue: string,
    idType: eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes,
    idFrontImage: Uint8Array | string,
    idBackImage: Uint8Array | string,
    portraitImage: Uint8Array | string,
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

  getIndustryId(): string;
  setIndustryId(value: string): BusinessInfoResponse;

  getIndustryName(): string;
  setIndustryName(value: string): BusinessInfoResponse;

  getAllowForEdit(): boolean;
  setAllowForEdit(value: boolean): BusinessInfoResponse;

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
    industryId: string,
    industryName: string,
    allowForEdit: boolean,
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

  getStreetAddress(): string;
  setStreetAddress(value: string): BusinessContactInfoResponse;

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
    streetAddress: string,
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
  getContactId(): string;
  setContactId(value: string): UpdateBusinessContactPersonRequest;

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
    contactId: string,
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

  getContactId(): string;
  setContactId(value: string): BusinessContactPersonPayload;

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
    contactId: string,
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

export class AddDirectorShareholderRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): AddDirectorShareholderRequest;

  getLastName(): string;
  setLastName(value: string): AddDirectorShareholderRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): AddDirectorShareholderRequest;

  getEmail(): string;
  setEmail(value: string): AddDirectorShareholderRequest;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): AddDirectorShareholderRequest;

  getIdInfo(): DirectorShareholderIDInfo | undefined;
  setIdInfo(value?: DirectorShareholderIDInfo): AddDirectorShareholderRequest;
  hasIdInfo(): boolean;
  clearIdInfo(): AddDirectorShareholderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDirectorShareholderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDirectorShareholderRequest): AddDirectorShareholderRequest.AsObject;
  static serializeBinaryToWriter(message: AddDirectorShareholderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDirectorShareholderRequest;
  static deserializeBinaryFromReader(message: AddDirectorShareholderRequest, reader: jspb.BinaryReader): AddDirectorShareholderRequest;
}

export namespace AddDirectorShareholderRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
    mobileNumber: string,
    email: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
    idInfo?: DirectorShareholderIDInfo.AsObject,
  }
}

export class UpdateDirectorShareholderRequest extends jspb.Message {
  getDirectorId(): string;
  setDirectorId(value: string): UpdateDirectorShareholderRequest;

  getFirstName(): string;
  setFirstName(value: string): UpdateDirectorShareholderRequest;

  getLastName(): string;
  setLastName(value: string): UpdateDirectorShareholderRequest;

  getMobileNumber(): string;
  setMobileNumber(value: string): UpdateDirectorShareholderRequest;

  getEmail(): string;
  setEmail(value: string): UpdateDirectorShareholderRequest;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): UpdateDirectorShareholderRequest;

  getIdInfo(): DirectorShareholderIDInfo | undefined;
  setIdInfo(value?: DirectorShareholderIDInfo): UpdateDirectorShareholderRequest;
  hasIdInfo(): boolean;
  clearIdInfo(): UpdateDirectorShareholderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDirectorShareholderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDirectorShareholderRequest): UpdateDirectorShareholderRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDirectorShareholderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDirectorShareholderRequest;
  static deserializeBinaryFromReader(message: UpdateDirectorShareholderRequest, reader: jspb.BinaryReader): UpdateDirectorShareholderRequest;
}

export namespace UpdateDirectorShareholderRequest {
  export type AsObject = {
    directorId: string,
    firstName: string,
    lastName: string,
    mobileNumber: string,
    email: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
    idInfo?: DirectorShareholderIDInfo.AsObject,
  }
}

export class DirectorShareholderPayload extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): DirectorShareholderPayload;

  getLastName(): string;
  setLastName(value: string): DirectorShareholderPayload;

  getMobileNumber(): string;
  setMobileNumber(value: string): DirectorShareholderPayload;

  getEmail(): string;
  setEmail(value: string): DirectorShareholderPayload;

  getPosition(): eganow_api_merchant_onboarding_entity_pb.DirectorPosition;
  setPosition(value: eganow_api_merchant_onboarding_entity_pb.DirectorPosition): DirectorShareholderPayload;

  getDirectorShareholderType(): eganow_api_merchant_onboarding_entity_pb.DirectorOrShareholderOrOtherType;
  setDirectorShareholderType(value: eganow_api_merchant_onboarding_entity_pb.DirectorOrShareholderOrOtherType): DirectorShareholderPayload;

  getIdInfo(): DirectorShareholderPayload.DirectorShareholderIDInfoPayload | undefined;
  setIdInfo(value?: DirectorShareholderPayload.DirectorShareholderIDInfoPayload): DirectorShareholderPayload;
  hasIdInfo(): boolean;
  clearIdInfo(): DirectorShareholderPayload;

  getDirectorId(): string;
  setDirectorId(value: string): DirectorShareholderPayload;

  getPassedAmlCheck(): boolean;
  setPassedAmlCheck(value: boolean): DirectorShareholderPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectorShareholderPayload.AsObject;
  static toObject(includeInstance: boolean, msg: DirectorShareholderPayload): DirectorShareholderPayload.AsObject;
  static serializeBinaryToWriter(message: DirectorShareholderPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectorShareholderPayload;
  static deserializeBinaryFromReader(message: DirectorShareholderPayload, reader: jspb.BinaryReader): DirectorShareholderPayload;
}

export namespace DirectorShareholderPayload {
  export type AsObject = {
    firstName: string,
    lastName: string,
    mobileNumber: string,
    email: string,
    position: eganow_api_merchant_onboarding_entity_pb.DirectorPosition,
    directorShareholderType: eganow_api_merchant_onboarding_entity_pb.DirectorOrShareholderOrOtherType,
    idInfo?: DirectorShareholderPayload.DirectorShareholderIDInfoPayload.AsObject,
    directorId: string,
    passedAmlCheck: boolean,
  }

  export class DirectorShareholderIDInfoPayload extends jspb.Message {
    getIdNumber(): string;
    setIdNumber(value: string): DirectorShareholderIDInfoPayload;

    getIdExpiryDate(): string;
    setIdExpiryDate(value: string): DirectorShareholderIDInfoPayload;

    getPlaceOfIssue(): string;
    setPlaceOfIssue(value: string): DirectorShareholderIDInfoPayload;

    getIdType(): eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes;
    setIdType(value: eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes): DirectorShareholderIDInfoPayload;

    getIdFrontImage(): string;
    setIdFrontImage(value: string): DirectorShareholderIDInfoPayload;

    getIdBackImage(): string;
    setIdBackImage(value: string): DirectorShareholderIDInfoPayload;

    getPortraitImage(): string;
    setPortraitImage(value: string): DirectorShareholderIDInfoPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DirectorShareholderIDInfoPayload.AsObject;
    static toObject(includeInstance: boolean, msg: DirectorShareholderIDInfoPayload): DirectorShareholderIDInfoPayload.AsObject;
    static serializeBinaryToWriter(message: DirectorShareholderIDInfoPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DirectorShareholderIDInfoPayload;
    static deserializeBinaryFromReader(message: DirectorShareholderIDInfoPayload, reader: jspb.BinaryReader): DirectorShareholderIDInfoPayload;
  }

  export namespace DirectorShareholderIDInfoPayload {
    export type AsObject = {
      idNumber: string,
      idExpiryDate: string,
      placeOfIssue: string,
      idType: eganow_api_merchant_onboarding_entity_pb.CustomerIDTypes,
      idFrontImage: string,
      idBackImage: string,
      portraitImage: string,
    }
  }

}

export class DirectorShareholderListResponse extends jspb.Message {
  getDirectorsShareholdersList(): Array<DirectorShareholderPayload>;
  setDirectorsShareholdersList(value: Array<DirectorShareholderPayload>): DirectorShareholderListResponse;
  clearDirectorsShareholdersList(): DirectorShareholderListResponse;
  addDirectorsShareholders(value?: DirectorShareholderPayload, index?: number): DirectorShareholderPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectorShareholderListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DirectorShareholderListResponse): DirectorShareholderListResponse.AsObject;
  static serializeBinaryToWriter(message: DirectorShareholderListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectorShareholderListResponse;
  static deserializeBinaryFromReader(message: DirectorShareholderListResponse, reader: jspb.BinaryReader): DirectorShareholderListResponse;
}

export namespace DirectorShareholderListResponse {
  export type AsObject = {
    directorsShareholdersList: Array<DirectorShareholderPayload.AsObject>,
  }
}

export class AddBusinessDocumentRequest extends jspb.Message {
  getDocImage(): Uint8Array | string;
  getDocImage_asU8(): Uint8Array;
  getDocImage_asB64(): string;
  setDocImage(value: Uint8Array | string): AddBusinessDocumentRequest;

  getName(): string;
  setName(value: string): AddBusinessDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessDocumentRequest): AddBusinessDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessDocumentRequest;
  static deserializeBinaryFromReader(message: AddBusinessDocumentRequest, reader: jspb.BinaryReader): AddBusinessDocumentRequest;
}

export namespace AddBusinessDocumentRequest {
  export type AsObject = {
    docImage: Uint8Array | string,
    name: string,
  }
}

export class UpdateBusinessDocumentRequest extends jspb.Message {
  getDocId(): number;
  setDocId(value: number): UpdateBusinessDocumentRequest;

  getDocImage(): Uint8Array | string;
  getDocImage_asU8(): Uint8Array;
  getDocImage_asB64(): string;
  setDocImage(value: Uint8Array | string): UpdateBusinessDocumentRequest;

  getName(): string;
  setName(value: string): UpdateBusinessDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessDocumentRequest): UpdateBusinessDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessDocumentRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessDocumentRequest, reader: jspb.BinaryReader): UpdateBusinessDocumentRequest;
}

export namespace UpdateBusinessDocumentRequest {
  export type AsObject = {
    docId: number,
    docImage: Uint8Array | string,
    name: string,
  }
}

export class BusinessDocumentPayload extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): BusinessDocumentPayload;

  getName(): string;
  setName(value: string): BusinessDocumentPayload;

  getDocId(): number;
  setDocId(value: number): BusinessDocumentPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessDocumentPayload.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessDocumentPayload): BusinessDocumentPayload.AsObject;
  static serializeBinaryToWriter(message: BusinessDocumentPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessDocumentPayload;
  static deserializeBinaryFromReader(message: BusinessDocumentPayload, reader: jspb.BinaryReader): BusinessDocumentPayload;
}

export namespace BusinessDocumentPayload {
  export type AsObject = {
    url: string,
    name: string,
    docId: number,
  }
}

export class BusinessDocumentListResponse extends jspb.Message {
  getDocumentsList(): Array<BusinessDocumentPayload>;
  setDocumentsList(value: Array<BusinessDocumentPayload>): BusinessDocumentListResponse;
  clearDocumentsList(): BusinessDocumentListResponse;
  addDocuments(value?: BusinessDocumentPayload, index?: number): BusinessDocumentPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessDocumentListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessDocumentListResponse): BusinessDocumentListResponse.AsObject;
  static serializeBinaryToWriter(message: BusinessDocumentListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessDocumentListResponse;
  static deserializeBinaryFromReader(message: BusinessDocumentListResponse, reader: jspb.BinaryReader): BusinessDocumentListResponse;
}

export namespace BusinessDocumentListResponse {
  export type AsObject = {
    documentsList: Array<BusinessDocumentPayload.AsObject>,
  }
}

