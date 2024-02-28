import { PASSWORD_REGEX, NUMBER_ONLY_REGEX } from '@/constants'
import * as yup from 'yup'

export const validationSchema = yup
  .object({
    country: yup.object({
      code: yup.string().required(),
      name: yup.string().required(),
    }),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required()
