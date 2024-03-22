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
  CForm,
} from '@coreui/react-pro'

/*
 *
 * Business Info Component
 *
 */
const BusinessInfo = (props) => {
  /* *************************************************************************************** */

  return (
    <CForm>
      <CRow className="mb-4 px-4">
        <CCol xs={12} sm={6}>
          <fieldset className="p-3 border border-2 dark:border-white">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Email</legend>
            <CFormLabel htmlFor="registeredEmail" className="form-label">
              <strong>Registered Email</strong>
            </CFormLabel>
            <CFormInput type="text" id="registeredEmail" placeholder="Enter email." />
          </fieldset>
          <br />
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Company Details</legend>
            <CFormLabel htmlFor="prospectiveCustomerNo" className="form-label">
              <strong>Prospective Customer No.</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="prospectiveCustomerNo"
              placeholder="Enter prospective customer No."
            />

            <CFormLabel htmlFor="companyName" className="form-label mt-3">
              <strong>Company Name</strong>
            </CFormLabel>
            <CFormInput type="text" id="companyName" placeholder="Enter company name." />

            <CFormLabel htmlFor="tradingName" className="form-label mt-3">
              <strong>Trading Name</strong>
            </CFormLabel>
            <CFormInput type="text" id="tradingName" placeholder="Enter company name." />

            <CFormLabel htmlFor="typeOfCompany" className="form-label mt-3">
              <strong>Type Of Company</strong>
            </CFormLabel>
            <CFormInput type="text" id="typeOfCompany" placeholder="Enter company name." />

            <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
              <strong>Company Registration Number</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="companyRegistrationNumber"
              placeholder="Enter company registration number."
            />

            <CFormLabel htmlFor="dateOfIncorporation" className="form-label mt-3">
              <strong>Date Of Incorporation</strong>
            </CFormLabel>
            <CDatePicker id="dateOfIncorporation" date="2022/2/16" label="Date" locale="en-US" />
          </fieldset>
        </CCol>

        <CCol xs={12} sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Tax Details</legend>
            <CFormLabel htmlFor="taxIdentificationNumber" className="form-label">
              <strong>Tax Identification Number (TIN)</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="taxIdentificationNumber"
              placeholder="Enter company TIN number."
            />

            <CFormLabel htmlFor="VATRegistrationNumber" className="form-label mt-3">
              <strong>VAT Registration Number</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="VATRegistrationNumber"
              placeholder="Enter VAT registration number."
            />
          </fieldset>
          <br />
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">License Details</legend>
            <CFormLabel htmlFor="businessRegulator" className="form-label">
              <strong>Business Regulator</strong>
            </CFormLabel>
            <CFormInput
              type="text"
              id="businessRegulator"
              placeholder="Enter business regulator."
            />

            <CFormLabel htmlFor="licenseNumber" className="form-label mt-3">
              <strong>License Number</strong>
            </CFormLabel>
            <CFormInput type="text" id="licenseNumber" placeholder="Enter license number." />

            <CRow className="g-3">
              <CCol xs={12} sm={6}>
                <CFormLabel htmlFor="licenseIssuedDate" className="form-label mt-3">
                  <strong>License Issued Date</strong>
                </CFormLabel>
                <CDatePicker id="licenseIssuedDate" date="2022/2/16" label="Date" locale="en-US" />
              </CCol>
              <CCol xs={12} sm={6}>
                <CFormLabel htmlFor="licenseExpiryDate" className="form-label mt-3">
                  <strong>License Expiry Date</strong>
                </CFormLabel>
                <CDatePicker id="licenseExpiryDate" date="2022/2/16" label="Date" locale="en-US" />
              </CCol>
            </CRow>
          </fieldset>
        </CCol>
      </CRow>

      <CFooter
        className="position-sticky bg-white dark:bg-dark w-100 float-right justify-content-end p-4"
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

export default BusinessInfo
