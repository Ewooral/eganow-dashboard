import { PASSWORD_REGEX, NUMBER_ONLY_REGEX } from '@/constants'
import * as yup from 'yup'

export const validationSchema = yup
  .object({
    country: yup.object({
      flag: yup.string().required(),
      code: yup.string().required(),
      name: yup.string().required(),
    }),

    emailAddress: yup.string().email().required(),

    otpValue: yup.string().required().matches(NUMBER_ONLY_REGEX).min(6).max(6),

    firstName: yup.string().required(),
    lastName: yup.string().required(),
    customerMobileNo: yup.object({
      dialCode: yup.string().required(),
      dialNumber: yup.number().min(10).required(),
    }),

    password: yup.string().required().matches(PASSWORD_REGEX),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')]),

    businessMobileNo: yup.object({
      dialCode: yup.string().required(),
      dialNumber: yup.number().min(10).required(),
    }),

    businessName: yup.string().required(),
    tradingName: yup.string().required(),
  })
  .required()
