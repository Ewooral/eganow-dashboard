import * as yup from 'yup'

export const validationSchema = yup
  .object({
    itemname: yup.string().required(),
    description: yup.string().required(),
    level: yup.string().required(),
  })
  .required()
