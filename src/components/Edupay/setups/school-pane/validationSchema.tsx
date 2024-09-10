import * as yup from 'yup'

export const validationSchema = yup
  .object({
    schoolName: yup.string().required(),
    description: yup.string().required(),
    levelType: yup.string().required(),
    billingCycleName: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
  })
  .required()
