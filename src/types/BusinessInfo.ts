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
