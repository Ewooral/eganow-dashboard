import * as yup from 'yup'

export const validationSchema = yup
  .object({
    emailaddress: yup.string().email().required(),
    fullname: yup.string().required(),
    membertype: yup.string().required(),
    userrole: yup.string().required(),
  })
  .required()
