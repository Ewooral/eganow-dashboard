import { REGULATOR_ID } from "@/constants";
import * as yup from "yup";

export const validationSchema = yup.object({
  registeredEmail: yup.string().email().required(),
  registrationNumber: yup.string().required(),
  registrationType: yup.string().required(),
  dateOfIncorporation: yup.string().required(),
  industryId: yup.string().required(),
  regulatorId: yup.string().required(),
  licenseExpiryDate: yup
    .string()
    .when("regulatorId", {
      is: (value:string) => value !== REGULATOR_ID[0],
      then: (schema) => schema.required(),
    }),
  licenseIssueDate: yup
    .string()
    .when("regulatorId", {
      is: (value:string) => value !== REGULATOR_ID[0],
      then: (schema) => schema.required(),
    }),
  licenseNumber: yup
    .string()
    .when("regulatorId", {
      is: (value:string) => value !== REGULATOR_ID[0],
      then: (schema) => schema.required(),
    }),
  businessName: yup.string().required(),
  taxIdentificationNumber: yup.string().required(),
  tradingName: yup.string().required(),
  vatNumber: yup.string().required(),
});
