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
    // customerMobileNo: yup.object({
    //   dialCode: yup.string().required(),
    //   dialNumber: yup
    //     .string() // Change to string to enforce length checks
    //     .required("Mobile number is required")
    //     .matches(/^\d+$/, "Only numbers are allowed") // Ensure only digits
    //     .test("min-length", "Mobile number must be at least 8 digits", (value) => value?.length >= 8)
    //     .test("max-length", "Mobile number cannot exceed 12 digits", (value) => value?.length <= 12),
    // }),

    password: yup.string().required().matches(PASSWORD_REGEX,'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')],'Passwords must match'),

    businessMobileNo: yup.object({
      dialCode: yup.string().required(),
      dialNumber: yup
        .string() // Change to string for validation
        .required("Business mobile number is required")
        .matches(/^\d+$/, "Only numbers are allowed") // Ensure only digits
        .test("min-length", "Business mobile number must be at least 8 digits", (value) => value?.length >= 8)
        .test("max-length", "Business mobile number cannot exceed 12 digits", (value) => value?.length <= 12),
    }),

    businessName: yup.string().required(),
    tradingName: yup.string().required(),
  })
  .required()
