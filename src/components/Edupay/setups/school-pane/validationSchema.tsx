import * as yup from 'yup'

export const validationSchema = yup
  .object({
    schoolName: yup.string().required(),
    description: yup.string().required(),
    schoolType: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
  })
  .required()
