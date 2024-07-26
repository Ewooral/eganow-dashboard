import * as yup from 'yup'

export const validationSchema = yup
  .object({
    name: yup.string().required(),
    classType: yup.string().required(),
  })
  .required()
