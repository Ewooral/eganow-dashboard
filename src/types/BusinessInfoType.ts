export type BusinessInfoFormData = {
  businessName: string
  tradingName: string
  registrationNumber: string
  registrationType: string
  dateOfIncorporation: string
  registeredEmail: string
  industryId: string
  licenseExpiryDate: string
  licenseIssueDate: string
  licenseNumber: string
  regulatorId: string
  taxIdentificationNumber: string
  vatNumber: string
  sectors: string
}

export type BusinessInfoPaneProps = {
  businessInfoData: any
  sectors?: object[] | null
  regulators?: object[] | null
  type: string
  setType: (type: string) => void
}


export type BusinessContactPersonType = {
  contactId: String | null
  firstName: String
  lastName: String
  email: String
  mobileNumber: String
  position: Number
}

export type BusinessDirectorOrShareholderType = {
  directorId: String | null
  firstName: String
  lastName: String
  email: String
  mobileNumber: String
  position: Number
  identification: {
    number: String
    expiryDate: String
    placeOfIssue: String
    type: 1 | 2
    frontImage: String
    backImage: String
    portraitImage: String
  }
}