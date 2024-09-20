import * as yup from 'yup'

export const validationSchema = yup
  .object({
    school: yup.string().required(),
    classificationType: yup.string().required(),
    subClassificationType: yup.string(),
    currency: yup.string().required(),
    billingItem: yup.string(),
    itemAmount: yup.string(),
    levelType: yup.string(),
  })
  .required()
