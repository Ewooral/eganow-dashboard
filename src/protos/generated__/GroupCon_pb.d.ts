import * as jspb from 'google-protobuf'



export class EmptyGroupMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyGroupMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyGroupMessage): EmptyGroupMessage.AsObject;
  static serializeBinaryToWriter(message: EmptyGroupMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyGroupMessage;
  static deserializeBinaryFromReader(message: EmptyGroupMessage, reader: jspb.BinaryReader): EmptyGroupMessage;
}

export namespace EmptyGroupMessage {
  export type AsObject = {
  }
}

export class LanguageGroupRequestMessage extends jspb.Message {
  getLanguageid(): string;
  setLanguageid(value: string): LanguageGroupRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageGroupRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageGroupRequestMessage): LanguageGroupRequestMessage.AsObject;
  static serializeBinaryToWriter(message: LanguageGroupRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageGroupRequestMessage;
  static deserializeBinaryFromReader(message: LanguageGroupRequestMessage, reader: jspb.BinaryReader): LanguageGroupRequestMessage;
}

export namespace LanguageGroupRequestMessage {
  export type AsObject = {
    languageid: string,
  }
}

export class SuccessGroupMessage extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): SuccessGroupMessage;

  getMessagesuccessfulorfailed(): string;
  setMessagesuccessfulorfailed(value: string): SuccessGroupMessage;

  getMessage(): string;
  setMessage(value: string): SuccessGroupMessage;

  getRegistrationerrorcode(): string;
  setRegistrationerrorcode(value: string): SuccessGroupMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessGroupMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessGroupMessage): SuccessGroupMessage.AsObject;
  static serializeBinaryToWriter(message: SuccessGroupMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessGroupMessage;
  static deserializeBinaryFromReader(message: SuccessGroupMessage, reader: jspb.BinaryReader): SuccessGroupMessage;
}

export namespace SuccessGroupMessage {
  export type AsObject = {
    issuccess: boolean,
    messagesuccessfulorfailed: string,
    message: string,
    registrationerrorcode: string,
  }
}

export class CountryGroupRequestMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): CountryGroupRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CountryGroupRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryGroupRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CountryGroupRequestMessage): CountryGroupRequestMessage.AsObject;
  static serializeBinaryToWriter(message: CountryGroupRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryGroupRequestMessage;
  static deserializeBinaryFromReader(message: CountryGroupRequestMessage, reader: jspb.BinaryReader): CountryGroupRequestMessage;
}

export namespace CountryGroupRequestMessage {
  export type AsObject = {
    countrycode: string,
    languageid: string,
  }
}

export class GroupCountryCodeRequestMessage extends jspb.Message {
  getGrouptype(): string;
  setGrouptype(value: string): GroupCountryCodeRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): GroupCountryCodeRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCountryCodeRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCountryCodeRequestMessage): GroupCountryCodeRequestMessage.AsObject;
  static serializeBinaryToWriter(message: GroupCountryCodeRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCountryCodeRequestMessage;
  static deserializeBinaryFromReader(message: GroupCountryCodeRequestMessage, reader: jspb.BinaryReader): GroupCountryCodeRequestMessage;
}

export namespace GroupCountryCodeRequestMessage {
  export type AsObject = {
    grouptype: string,
    countrycode: string,
  }
}

export class GroupCategoryResponseMessage extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): GroupCategoryResponseMessage;

  getCategoryname(): string;
  setCategoryname(value: string): GroupCategoryResponseMessage;

  getGrouptype(): string;
  setGrouptype(value: string): GroupCategoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCategoryResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCategoryResponseMessage): GroupCategoryResponseMessage.AsObject;
  static serializeBinaryToWriter(message: GroupCategoryResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCategoryResponseMessage;
  static deserializeBinaryFromReader(message: GroupCategoryResponseMessage, reader: jspb.BinaryReader): GroupCategoryResponseMessage;
}

export namespace GroupCategoryResponseMessage {
  export type AsObject = {
    categoryid: string,
    categoryname: string,
    grouptype: string,
  }
}

export class GroupCategoryListMessage extends jspb.Message {
  getCategorylistList(): Array<GroupCategoryResponseMessage>;
  setCategorylistList(value: Array<GroupCategoryResponseMessage>): GroupCategoryListMessage;
  clearCategorylistList(): GroupCategoryListMessage;
  addCategorylist(value?: GroupCategoryResponseMessage, index?: number): GroupCategoryResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCategoryListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCategoryListMessage): GroupCategoryListMessage.AsObject;
  static serializeBinaryToWriter(message: GroupCategoryListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCategoryListMessage;
  static deserializeBinaryFromReader(message: GroupCategoryListMessage, reader: jspb.BinaryReader): GroupCategoryListMessage;
}

export namespace GroupCategoryListMessage {
  export type AsObject = {
    categorylistList: Array<GroupCategoryResponseMessage.AsObject>,
  }
}

export class ProjectTemplateResponseMessage extends jspb.Message {
  getTemplateid(): string;
  setTemplateid(value: string): ProjectTemplateResponseMessage;

  getTemplatename(): string;
  setTemplatename(value: string): ProjectTemplateResponseMessage;

  getGrouptype(): string;
  setGrouptype(value: string): ProjectTemplateResponseMessage;

  getRemarks(): string;
  setRemarks(value: string): ProjectTemplateResponseMessage;

  getTemplateiconurl(): string;
  setTemplateiconurl(value: string): ProjectTemplateResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectTemplateResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectTemplateResponseMessage): ProjectTemplateResponseMessage.AsObject;
  static serializeBinaryToWriter(message: ProjectTemplateResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectTemplateResponseMessage;
  static deserializeBinaryFromReader(message: ProjectTemplateResponseMessage, reader: jspb.BinaryReader): ProjectTemplateResponseMessage;
}

export namespace ProjectTemplateResponseMessage {
  export type AsObject = {
    templateid: string,
    templatename: string,
    grouptype: string,
    remarks: string,
    templateiconurl: string,
  }
}

export class ProjectTemplateListMessage extends jspb.Message {
  getTemplatelistList(): Array<ProjectTemplateResponseMessage>;
  setTemplatelistList(value: Array<ProjectTemplateResponseMessage>): ProjectTemplateListMessage;
  clearTemplatelistList(): ProjectTemplateListMessage;
  addTemplatelist(value?: ProjectTemplateResponseMessage, index?: number): ProjectTemplateResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectTemplateListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectTemplateListMessage): ProjectTemplateListMessage.AsObject;
  static serializeBinaryToWriter(message: ProjectTemplateListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectTemplateListMessage;
  static deserializeBinaryFromReader(message: ProjectTemplateListMessage, reader: jspb.BinaryReader): ProjectTemplateListMessage;
}

export namespace ProjectTemplateListMessage {
  export type AsObject = {
    templatelistList: Array<ProjectTemplateResponseMessage.AsObject>,
  }
}

export class GroupCountryMessage extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): GroupCountryMessage;

  getCountrydialcode(): string;
  setCountrydialcode(value: string): GroupCountryMessage;

  getCountryname(): string;
  setCountryname(value: string): GroupCountryMessage;

  getCurrencyiso(): string;
  setCurrencyiso(value: string): GroupCountryMessage;

  getMobilenominlen(): number;
  setMobilenominlen(value: number): GroupCountryMessage;

  getMobilenomaxlen(): number;
  setMobilenomaxlen(value: number): GroupCountryMessage;

  getCountryflagurl(): string;
  setCountryflagurl(value: string): GroupCountryMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCountryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCountryMessage): GroupCountryMessage.AsObject;
  static serializeBinaryToWriter(message: GroupCountryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCountryMessage;
  static deserializeBinaryFromReader(message: GroupCountryMessage, reader: jspb.BinaryReader): GroupCountryMessage;
}

export namespace GroupCountryMessage {
  export type AsObject = {
    countrycode: string,
    countrydialcode: string,
    countryname: string,
    currencyiso: string,
    mobilenominlen: number,
    mobilenomaxlen: number,
    countryflagurl: string,
  }
}

export class GroupCountryListMessage extends jspb.Message {
  getCountrylistList(): Array<GroupCountryMessage>;
  setCountrylistList(value: Array<GroupCountryMessage>): GroupCountryListMessage;
  clearCountrylistList(): GroupCountryListMessage;
  addCountrylist(value?: GroupCountryMessage, index?: number): GroupCountryMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCountryListMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCountryListMessage): GroupCountryListMessage.AsObject;
  static serializeBinaryToWriter(message: GroupCountryListMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCountryListMessage;
  static deserializeBinaryFromReader(message: GroupCountryListMessage, reader: jspb.BinaryReader): GroupCountryListMessage;
}

export namespace GroupCountryListMessage {
  export type AsObject = {
    countrylistList: Array<GroupCountryMessage.AsObject>,
  }
}

export class NewGroupRequestMessage extends jspb.Message {
  getGroupname(): string;
  setGroupname(value: string): NewGroupRequestMessage;

  getAboutthegroup(): string;
  setAboutthegroup(value: string): NewGroupRequestMessage;

  getGrouptype(): string;
  setGrouptype(value: string): NewGroupRequestMessage;

  getCountrycode(): string;
  setCountrycode(value: string): NewGroupRequestMessage;

  getCategoryid(): string;
  setCategoryid(value: string): NewGroupRequestMessage;

  getTemplateid(): string;
  setTemplateid(value: string): NewGroupRequestMessage;

  getProjectname(): string;
  setProjectname(value: string): NewGroupRequestMessage;

  getAbouttheproject(): string;
  setAbouttheproject(value: string): NewGroupRequestMessage;

  getProjectdurationinmonths(): number;
  setProjectdurationinmonths(value: number): NewGroupRequestMessage;

  getInsurancepackageid(): string;
  setInsurancepackageid(value: string): NewGroupRequestMessage;

  getContributiontypeweeklyormonthly(): string;
  setContributiontypeweeklyormonthly(value: string): NewGroupRequestMessage;

  getContributionfrequencyinweeksormonths(): number;
  setContributionfrequencyinweeksormonths(value: number): NewGroupRequestMessage;

  getContributionamountpermember(): number;
  setContributionamountpermember(value: number): NewGroupRequestMessage;

  getTargetamounttoraise(): number;
  setTargetamounttoraise(value: number): NewGroupRequestMessage;

  getGroupiconimageinbasesixtyfour(): string;
  setGroupiconimageinbasesixtyfour(value: string): NewGroupRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): NewGroupRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewGroupRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: NewGroupRequestMessage): NewGroupRequestMessage.AsObject;
  static serializeBinaryToWriter(message: NewGroupRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewGroupRequestMessage;
  static deserializeBinaryFromReader(message: NewGroupRequestMessage, reader: jspb.BinaryReader): NewGroupRequestMessage;
}

export namespace NewGroupRequestMessage {
  export type AsObject = {
    groupname: string,
    aboutthegroup: string,
    grouptype: string,
    countrycode: string,
    categoryid: string,
    templateid: string,
    projectname: string,
    abouttheproject: string,
    projectdurationinmonths: number,
    insurancepackageid: string,
    contributiontypeweeklyormonthly: string,
    contributionfrequencyinweeksormonths: number,
    contributionamountpermember: number,
    targetamounttoraise: number,
    groupiconimageinbasesixtyfour: string,
    languageid: string,
  }
}

export class CustomerGroupResponseMessage extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): CustomerGroupResponseMessage;

  getGroupname(): string;
  setGroupname(value: string): CustomerGroupResponseMessage;

  getAboutthegroup(): string;
  setAboutthegroup(value: string): CustomerGroupResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): CustomerGroupResponseMessage;

  getCountryname(): string;
  setCountryname(value: string): CustomerGroupResponseMessage;

  getGrouptype(): string;
  setGrouptype(value: string): CustomerGroupResponseMessage;

  getCategoryname(): string;
  setCategoryname(value: string): CustomerGroupResponseMessage;

  getCategoryid(): string;
  setCategoryid(value: string): CustomerGroupResponseMessage;

  getGroupstatus(): string;
  setGroupstatus(value: string): CustomerGroupResponseMessage;

  getTotalgroupmembers(): number;
  setTotalgroupmembers(value: number): CustomerGroupResponseMessage;

  getGroupdescription(): string;
  setGroupdescription(value: string): CustomerGroupResponseMessage;

  getVerifiedstatus(): string;
  setVerifiedstatus(value: string): CustomerGroupResponseMessage;

  getGroupiconurl(): string;
  setGroupiconurl(value: string): CustomerGroupResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): CustomerGroupResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerGroupResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerGroupResponseMessage): CustomerGroupResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerGroupResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerGroupResponseMessage;
  static deserializeBinaryFromReader(message: CustomerGroupResponseMessage, reader: jspb.BinaryReader): CustomerGroupResponseMessage;
}

export namespace CustomerGroupResponseMessage {
  export type AsObject = {
    groupid: string,
    groupname: string,
    aboutthegroup: string,
    countrycode: string,
    countryname: string,
    grouptype: string,
    categoryname: string,
    categoryid: string,
    groupstatus: string,
    totalgroupmembers: number,
    groupdescription: string,
    verifiedstatus: string,
    groupiconurl: string,
    languageid: string,
  }
}

export class CustomerGroupListResponseMessage extends jspb.Message {
  getGrouplistList(): Array<CustomerGroupResponseMessage>;
  setGrouplistList(value: Array<CustomerGroupResponseMessage>): CustomerGroupListResponseMessage;
  clearGrouplistList(): CustomerGroupListResponseMessage;
  addGrouplist(value?: CustomerGroupResponseMessage, index?: number): CustomerGroupResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerGroupListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerGroupListResponseMessage): CustomerGroupListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: CustomerGroupListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerGroupListResponseMessage;
  static deserializeBinaryFromReader(message: CustomerGroupListResponseMessage, reader: jspb.BinaryReader): CustomerGroupListResponseMessage;
}

export namespace CustomerGroupListResponseMessage {
  export type AsObject = {
    grouplistList: Array<CustomerGroupResponseMessage.AsObject>,
  }
}

export class ProjectOrGroupMembersRequestMessage extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): ProjectOrGroupMembersRequestMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): ProjectOrGroupMembersRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): ProjectOrGroupMembersRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectOrGroupMembersRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectOrGroupMembersRequestMessage): ProjectOrGroupMembersRequestMessage.AsObject;
  static serializeBinaryToWriter(message: ProjectOrGroupMembersRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectOrGroupMembersRequestMessage;
  static deserializeBinaryFromReader(message: ProjectOrGroupMembersRequestMessage, reader: jspb.BinaryReader): ProjectOrGroupMembersRequestMessage;
}

export namespace ProjectOrGroupMembersRequestMessage {
  export type AsObject = {
    groupid: string,
    groupcountrycode: string,
    languageid: string,
  }
}

export class ProjectResponseMessage extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): ProjectResponseMessage;

  getProjectname(): string;
  setProjectname(value: string): ProjectResponseMessage;

  getAbouttheproject(): string;
  setAbouttheproject(value: string): ProjectResponseMessage;

  getProjectdescription(): string;
  setProjectdescription(value: string): ProjectResponseMessage;

  getTargetamounttoraise(): number;
  setTargetamounttoraise(value: number): ProjectResponseMessage;

  getAmountraised(): number;
  setAmountraised(value: number): ProjectResponseMessage;

  getBalancetoraise(): number;
  setBalancetoraise(value: number): ProjectResponseMessage;

  getCashedoutamount(): number;
  setCashedoutamount(value: number): ProjectResponseMessage;

  getCashbalance(): number;
  setCashbalance(value: number): ProjectResponseMessage;

  getPlatformfeeamount(): number;
  setPlatformfeeamount(value: number): ProjectResponseMessage;

  getTaxamount(): number;
  setTaxamount(value: number): ProjectResponseMessage;

  getContributionamountpermember(): number;
  setContributionamountpermember(value: number): ProjectResponseMessage;

  getStartdate(): string;
  setStartdate(value: string): ProjectResponseMessage;

  getEnddate(): string;
  setEnddate(value: string): ProjectResponseMessage;

  getContributiontypeweeklyormonthly(): string;
  setContributiontypeweeklyormonthly(value: string): ProjectResponseMessage;

  getNoofmembersinproject(): number;
  setNoofmembersinproject(value: number): ProjectResponseMessage;

  getCountrycode(): string;
  setCountrycode(value: string): ProjectResponseMessage;

  getCountryname(): string;
  setCountryname(value: string): ProjectResponseMessage;

  getGroupid(): string;
  setGroupid(value: string): ProjectResponseMessage;

  getProjecticonurl(): string;
  setProjecticonurl(value: string): ProjectResponseMessage;

  getProjectvideourl(): string;
  setProjectvideourl(value: string): ProjectResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): ProjectResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectResponseMessage): ProjectResponseMessage.AsObject;
  static serializeBinaryToWriter(message: ProjectResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectResponseMessage;
  static deserializeBinaryFromReader(message: ProjectResponseMessage, reader: jspb.BinaryReader): ProjectResponseMessage;
}

export namespace ProjectResponseMessage {
  export type AsObject = {
    projectid: string,
    projectname: string,
    abouttheproject: string,
    projectdescription: string,
    targetamounttoraise: number,
    amountraised: number,
    balancetoraise: number,
    cashedoutamount: number,
    cashbalance: number,
    platformfeeamount: number,
    taxamount: number,
    contributionamountpermember: number,
    startdate: string,
    enddate: string,
    contributiontypeweeklyormonthly: string,
    noofmembersinproject: number,
    countrycode: string,
    countryname: string,
    groupid: string,
    projecticonurl: string,
    projectvideourl: string,
    languageid: string,
  }
}

export class ProjectListResponseMessage extends jspb.Message {
  getGrouplistList(): Array<ProjectResponseMessage>;
  setGrouplistList(value: Array<ProjectResponseMessage>): ProjectListResponseMessage;
  clearGrouplistList(): ProjectListResponseMessage;
  addGrouplist(value?: ProjectResponseMessage, index?: number): ProjectResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectListResponseMessage): ProjectListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: ProjectListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectListResponseMessage;
  static deserializeBinaryFromReader(message: ProjectListResponseMessage, reader: jspb.BinaryReader): ProjectListResponseMessage;
}

export namespace ProjectListResponseMessage {
  export type AsObject = {
    grouplistList: Array<ProjectResponseMessage.AsObject>,
  }
}

export class InviteRequestMessage extends jspb.Message {
  getInviteemobileno(): string;
  setInviteemobileno(value: string): InviteRequestMessage;

  getInviteeemail(): string;
  setInviteeemail(value: string): InviteRequestMessage;

  getInviteemobilecountrycode(): string;
  setInviteemobilecountrycode(value: string): InviteRequestMessage;

  getGroupid(): string;
  setGroupid(value: string): InviteRequestMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): InviteRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): InviteRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InviteRequestMessage): InviteRequestMessage.AsObject;
  static serializeBinaryToWriter(message: InviteRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteRequestMessage;
  static deserializeBinaryFromReader(message: InviteRequestMessage, reader: jspb.BinaryReader): InviteRequestMessage;
}

export namespace InviteRequestMessage {
  export type AsObject = {
    inviteemobileno: string,
    inviteeemail: string,
    inviteemobilecountrycode: string,
    groupid: string,
    groupcountrycode: string,
    languageid: string,
  }
}

export class InviteResponseMessage extends jspb.Message {
  getInviteemobileno(): string;
  setInviteemobileno(value: string): InviteResponseMessage;

  getInviteeemail(): string;
  setInviteeemail(value: string): InviteResponseMessage;

  getInviteemobilecountrycode(): string;
  setInviteemobilecountrycode(value: string): InviteResponseMessage;

  getGroupid(): string;
  setGroupid(value: string): InviteResponseMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): InviteResponseMessage;

  getGroupname(): string;
  setGroupname(value: string): InviteResponseMessage;

  getAboutthegroup(): string;
  setAboutthegroup(value: string): InviteResponseMessage;

  getCountryname(): string;
  setCountryname(value: string): InviteResponseMessage;

  getGrouptype(): string;
  setGrouptype(value: string): InviteResponseMessage;

  getCategoryname(): string;
  setCategoryname(value: string): InviteResponseMessage;

  getCategoryid(): string;
  setCategoryid(value: string): InviteResponseMessage;

  getInvitebyname(): string;
  setInvitebyname(value: string): InviteResponseMessage;

  getGroupstatus(): string;
  setGroupstatus(value: string): InviteResponseMessage;

  getTotalgroupmembers(): number;
  setTotalgroupmembers(value: number): InviteResponseMessage;

  getGroupdescription(): string;
  setGroupdescription(value: string): InviteResponseMessage;

  getVerifiedstatus(): string;
  setVerifiedstatus(value: string): InviteResponseMessage;

  getGroupiconurl(): string;
  setGroupiconurl(value: string): InviteResponseMessage;

  getLanguageid(): string;
  setLanguageid(value: string): InviteResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InviteResponseMessage): InviteResponseMessage.AsObject;
  static serializeBinaryToWriter(message: InviteResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteResponseMessage;
  static deserializeBinaryFromReader(message: InviteResponseMessage, reader: jspb.BinaryReader): InviteResponseMessage;
}

export namespace InviteResponseMessage {
  export type AsObject = {
    inviteemobileno: string,
    inviteeemail: string,
    inviteemobilecountrycode: string,
    groupid: string,
    groupcountrycode: string,
    groupname: string,
    aboutthegroup: string,
    countryname: string,
    grouptype: string,
    categoryname: string,
    categoryid: string,
    invitebyname: string,
    groupstatus: string,
    totalgroupmembers: number,
    groupdescription: string,
    verifiedstatus: string,
    groupiconurl: string,
    languageid: string,
  }
}

export class InviteListResponseMessage extends jspb.Message {
  getInvitelistList(): Array<InviteResponseMessage>;
  setInvitelistList(value: Array<InviteResponseMessage>): InviteListResponseMessage;
  clearInvitelistList(): InviteListResponseMessage;
  addInvitelist(value?: InviteResponseMessage, index?: number): InviteResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InviteListResponseMessage): InviteListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: InviteListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteListResponseMessage;
  static deserializeBinaryFromReader(message: InviteListResponseMessage, reader: jspb.BinaryReader): InviteListResponseMessage;
}

export namespace InviteListResponseMessage {
  export type AsObject = {
    invitelistList: Array<InviteResponseMessage.AsObject>,
  }
}

export class AcceptInviteRequestMessage extends jspb.Message {
  getInviteid(): string;
  setInviteid(value: string): AcceptInviteRequestMessage;

  getInviteemobileno(): string;
  setInviteemobileno(value: string): AcceptInviteRequestMessage;

  getInviteeemail(): string;
  setInviteeemail(value: string): AcceptInviteRequestMessage;

  getInviteemobilecountrycode(): string;
  setInviteemobilecountrycode(value: string): AcceptInviteRequestMessage;

  getGroupid(): string;
  setGroupid(value: string): AcceptInviteRequestMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): AcceptInviteRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): AcceptInviteRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptInviteRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptInviteRequestMessage): AcceptInviteRequestMessage.AsObject;
  static serializeBinaryToWriter(message: AcceptInviteRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptInviteRequestMessage;
  static deserializeBinaryFromReader(message: AcceptInviteRequestMessage, reader: jspb.BinaryReader): AcceptInviteRequestMessage;
}

export namespace AcceptInviteRequestMessage {
  export type AsObject = {
    inviteid: string,
    inviteemobileno: string,
    inviteeemail: string,
    inviteemobilecountrycode: string,
    groupid: string,
    groupcountrycode: string,
    languageid: string,
  }
}

export class RejectInviteRequestMessage extends jspb.Message {
  getInviteid(): string;
  setInviteid(value: string): RejectInviteRequestMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): RejectInviteRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): RejectInviteRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectInviteRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RejectInviteRequestMessage): RejectInviteRequestMessage.AsObject;
  static serializeBinaryToWriter(message: RejectInviteRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectInviteRequestMessage;
  static deserializeBinaryFromReader(message: RejectInviteRequestMessage, reader: jspb.BinaryReader): RejectInviteRequestMessage;
}

export namespace RejectInviteRequestMessage {
  export type AsObject = {
    inviteid: string,
    groupcountrycode: string,
    languageid: string,
  }
}

export class GroupMembersRequestMessage extends jspb.Message {
  getInviteid(): string;
  setInviteid(value: string): GroupMembersRequestMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): GroupMembersRequestMessage;

  getLanguageid(): string;
  setLanguageid(value: string): GroupMembersRequestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMembersRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMembersRequestMessage): GroupMembersRequestMessage.AsObject;
  static serializeBinaryToWriter(message: GroupMembersRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMembersRequestMessage;
  static deserializeBinaryFromReader(message: GroupMembersRequestMessage, reader: jspb.BinaryReader): GroupMembersRequestMessage;
}

export namespace GroupMembersRequestMessage {
  export type AsObject = {
    inviteid: string,
    groupcountrycode: string,
    languageid: string,
  }
}

export class GroupMembersResponseMessage extends jspb.Message {
  getMemberid(): string;
  setMemberid(value: string): GroupMembersResponseMessage;

  getMembername(): string;
  setMembername(value: string): GroupMembersResponseMessage;

  getGroupid(): string;
  setGroupid(value: string): GroupMembersResponseMessage;

  getGroupcountrycode(): string;
  setGroupcountrycode(value: string): GroupMembersResponseMessage;

  getGrouptype(): string;
  setGrouptype(value: string): GroupMembersResponseMessage;

  getMemberstatus(): string;
  setMemberstatus(value: string): GroupMembersResponseMessage;

  getAdminormember(): string;
  setAdminormember(value: string): GroupMembersResponseMessage;

  getCustomerprofilepicimageurl(): string;
  setCustomerprofilepicimageurl(value: string): GroupMembersResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMembersResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMembersResponseMessage): GroupMembersResponseMessage.AsObject;
  static serializeBinaryToWriter(message: GroupMembersResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMembersResponseMessage;
  static deserializeBinaryFromReader(message: GroupMembersResponseMessage, reader: jspb.BinaryReader): GroupMembersResponseMessage;
}

export namespace GroupMembersResponseMessage {
  export type AsObject = {
    memberid: string,
    membername: string,
    groupid: string,
    groupcountrycode: string,
    grouptype: string,
    memberstatus: string,
    adminormember: string,
    customerprofilepicimageurl: string,
  }
}

export class GroupMembersListResponseMessage extends jspb.Message {
  getGrouplistList(): Array<GroupMembersResponseMessage>;
  setGrouplistList(value: Array<GroupMembersResponseMessage>): GroupMembersListResponseMessage;
  clearGrouplistList(): GroupMembersListResponseMessage;
  addGrouplist(value?: GroupMembersResponseMessage, index?: number): GroupMembersResponseMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMembersListResponseMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMembersListResponseMessage): GroupMembersListResponseMessage.AsObject;
  static serializeBinaryToWriter(message: GroupMembersListResponseMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMembersListResponseMessage;
  static deserializeBinaryFromReader(message: GroupMembersListResponseMessage, reader: jspb.BinaryReader): GroupMembersListResponseMessage;
}

export namespace GroupMembersListResponseMessage {
  export type AsObject = {
    grouplistList: Array<GroupMembersResponseMessage.AsObject>,
  }
}

