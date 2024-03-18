// @ts-nocheck
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

/* import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
 */
import {
  CCol,
  CRow,
  CFormLabel,
  CFormInput,
  CDatePicker,
  CLoadingButton,
  CFooter,
  CFormTextarea,
  CForm,
} from '@coreui/react-pro'

import CountryInput from '@/components/country/CountryInput'
/*
 *
 * Customer Info Component
 *
 */
const CustomerInfo = (props) => {
  /* *************************************************************************************** */

  return (
    <CForm className="px-4">
      <CRow className="mb-4">
        <CCol sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>
            <CFormLabel htmlFor="prospectiveCustomerNo" className="form-label">
              <strong>Business Address</strong>
            </CFormLabel>
            <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>

            <CFormLabel htmlFor="companyName" className="form-label mt-3">
              <strong>City/ Town</strong>
            </CFormLabel>
            <CFormInput type="text" id="companyName" placeholder="Enter company name." />

            <CFormLabel htmlFor="typeOfCompany" className="form-label mt-3">
              <strong>State/ Province/ Region</strong>
            </CFormLabel>
            <CFormInput type="text" id="typeOfCompany" placeholder="Enter company name." />

            <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
              <strong>Postal/ Zip Code</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="companyRegistrationNumber"
              placeholder="Enter company registration number."
            />

            <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
              <strong>Digital Address</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="companyRegistrationNumber"
              placeholder="Enter company registration number."
            />

            <CFormLabel htmlFor="postalAddress" className="form-label mt-3">
              <strong>Postal Address</strong>
            </CFormLabel>
            <CFormTextarea id="postalAddress" rows={3}></CFormTextarea>
          </fieldset>
        </CCol>

        <CCol sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>
            <CFormLabel htmlFor="businessRegulator" className="form-label">
              <strong>Office Ownership</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="businessRegulator"
              placeholder="Enter business regulator."
            />

            <CFormLabel htmlFor="licenseIssuedDate" className="form-label mt-3">
              <strong>First Occupancy Date</strong>
            </CFormLabel>
            <CDatePicker id="licenseIssuedDate" date="2022/2/16" locale="en-US" />

            <CFormLabel htmlFor="licenseNumber" className="form-label mt-3">
              <strong>Office Telephone/ Mobile Number</strong>
            </CFormLabel>
            <CFormInput type="text" id="licenseNumber" placeholder="Enter license number." />

            <CFormLabel htmlFor="licenseExpiryDate" className="form-label mt-3">
              <strong>Country</strong>
            </CFormLabel>
            <CountryInput
              className="mb-3"
              name="country"
              handleForm={{ control: props.control }}
              callback={() => {}}
              shouldValidate={false}
            />
          </fieldset>
        </CCol>
      </CRow>

      <CFooter
        className="position-absolute bg-white dark:bg-dark w-100 float-right justify-content-end p-4"
        style={{
          left: '0',
          bottom: '0',
        }}
      >
        <CLoadingButton color="info" shape="rounded-pill" timeout={2000}>
          Save Changes
        </CLoadingButton>
      </CFooter>
    </CForm>
  )
}

export default CustomerInfo
