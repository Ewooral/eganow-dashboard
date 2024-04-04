import * as yup from 'yup'

export const validationSchema = yup
  .object({
    emailAddress: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mobileNumber: yup.string().required(),
    idType: yup.string().required(),
    idNumber: yup.string().required(),
    expiryDate: yup.string().required(),
    placeOfIssue: yup.string().required(),
    position: yup.string().required(),
    stakeHolderType: yup.string().required(),
    frontImage : yup.string().required(),
    backImage : yup.string().required(),
    portraitImage : yup.string().required(),
  })
  .required()
