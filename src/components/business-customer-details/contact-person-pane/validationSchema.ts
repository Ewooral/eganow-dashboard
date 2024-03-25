import * as yup from 'yup'

export const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mobileNumber: yup.string().required(),
    position: yup.string().required(),
  })
  .required()
