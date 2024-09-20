
import * as yup from 'yup';

export const customerInfoSchema = yup.object({
    streetAddress : yup.string().required(),
    city : yup.string().required(),
    state : yup.string().required(),
    postalCode : yup.string().required(),
    digitalAddress : yup.string().required(),
    postalAddress : yup.string().required(),
    officeOwnership : yup.string().required(),
    firstOccupancyDate : yup.string().required(),
    officeMobileNumber : yup.string().required(),
})