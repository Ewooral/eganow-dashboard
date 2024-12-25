
import * as yup from 'yup';

export const customerInfoSchema = yup.object({
  streetAddress: yup.string().required(),
  city: yup.string().required(),
  provinceState: yup.string().required(),
  postalZipCode: yup.string().required(),
  digitalAddress: yup.string().required(),
  postalAddress: yup.string().required(),
  officeOwnership: yup.string().required(),
  firstOccupancyDate: yup.string().required(),
  officeMobileNumber: yup.string().required(),
})