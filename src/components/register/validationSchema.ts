import { PASSWORD_REGEX, NUMBER_ONLY_REGEX } from '@/constants'
import * as yup from 'yup'

export const validationSchema = yup
  .object({
    emailAddress: yup.string().email().required(),

    otpValue: yup.string().required().matches(NUMBER_ONLY_REGEX).min(6).max(6),

    firstName: yup.string().required(),
    lastName: yup.string().required(),
    customerMobileNo: yup.object({
      dialCode: yup.string().required(),
      dialNumber: yup.number(),
    }),
    businessContactPersonNumber: yup.object({
      dialCode: yup.string().required(),
      dialNumber: yup.number().required(),
    }),

    country: yup.object({
      code: yup.string().required(),
      name: yup.string().required(),
    }),

    languageId: yup.string().required(),
    password: yup.string().required().matches(PASSWORD_REGEX),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')]),
    businessName: yup.string().required(),
    
    /* countryCode: yup.string().required(), */
    /*  securityQuestionOne: yup.string().required(),
    securityAnswerOne: yup.string().required(),
    securityQuestionTwo: yup
      .string()
      .required()
      .notOneOf([yup.ref('securityQuestionOne')]),
    securityAnswerTwo: yup.string().required(), */

    customerSixDigitPIN: yup.string().required().matches(NUMBER_ONLY_REGEX).min(6).max(6),
    confirmCustomerSixDigitPIN: yup
      .string()
      .required()
      .oneOf([yup.ref('customerSixDigitPIN')]),
  })
  .required()
