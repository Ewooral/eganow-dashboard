
import * as yup from 'yup'

export const validationSchema = yup
  .object({
    registeredEmail: yup.string().email().required(),
    registrationNumber: yup.string().required(),
    registrationType: yup.string().required(),
    dateOfIncorporation: yup.string().required(),
    industryId: yup.string().required(),
    licenseExpiryDate: yup.string().required(),
    licenseIssueDate: yup.string().required(),
    licenseNumber: yup.string().required(),
    businessName: yup.string().required(),
    regulatorId: yup.string().required(),
    taxIdentificationNumber: yup.string().required(),
    tradingName: yup.string().required(),
    vatNumber: yup.string().required(),
    sectors: yup.string().required(),
  })
  .required()
