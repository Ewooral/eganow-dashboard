import * as yup from 'yup'

export const validationSchema = yup
  .object({
    mobilenumber: yup.number().required(),
    agentname: yup.string().required(),
  })
  .required()
