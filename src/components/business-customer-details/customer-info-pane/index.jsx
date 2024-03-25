// @ts-nocheck
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultFormValues } from './defaultFormValues'
import { customerInfoSchema } from './validationSchema'
import classNames from 'classnames'

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
  CFormSelect,
  CFormText,
} from '@coreui/react-pro'

import CountryInput from '@/components/country/CountryInput'
/*
 *
 * Customer Info Component
 *
 */


const CustomerInfo = (props) => {


  // USEFORM OBJECT
  const { register, handleSubmit, setValue, watch, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(customerInfoSchema)
  })


  // FUNCTION TO HANDLE CHANGES IN THE DATE PICKER
  const handleDateChange = (date) => {
    const dateValue = date?.toISOString(); //CONVERT DATE OBJECT TO STRING 
    const formattedDate = dateValue?.split("T")[0]; //REMOVE TIMESTAMP FROM STRING
    setValue('firstOccupancyDate', formattedDate, { shouldValidate: true });
  };


  // SUBMIT FUNCTION FOR THE FORM 
  const onsubmit = (data) => {
    console.log(data)
  }


  return (
    <CForm onSubmit={handleSubmit(onsubmit)}>
      <CRow className="mb-4 px-4">
        <CCol sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>

            {/* STREET ADDRESS FIELD */}
            <CCol>
              <CFormLabel htmlFor="prospectiveCustomerNo" className={classNames({
                'text-error': !!formState.errors?.streetAddress,
              })}>
                <strong>Business Address</strong>
              </CFormLabel>
              <CFormTextarea id="exampleFormControlTextarea1"
                {...register('streetAddress')}
                rows={3}
                valid={
                  formState.dirtyFields?.streetAddress &&
                    !!!formState.errors?.streetAddress
                    ? true
                    : false
                }
                invalid={!!formState.errors?.streetAddress && true}
              ></CFormTextarea>
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.streetAddress ? false : true,
                })}
                n
              >
                Street Address is required.
              </CFormText>
            </CCol>


            {/* CITY OR TOWN FIELD */}
            <CCol>
              <CFormLabel htmlFor="companyName" className="form-label mt-3">
                <strong>City/ Town</strong>
              </CFormLabel>
              <CFormInput type="text" {...register('city')}
                id="companyName" placeholder="Enter company name."
                valid={
                  formState.dirtyFields?.city &&
                    !!!formState.errors?.city
                    ? true
                    : false
                }
                invalid={!!formState.errors?.city && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.city ? false : true,
                })}
                n
              >
                City or Town is required.
              </CFormText>
            </CCol>


            {/* STATE PROVINCE FIELD */}
            <CCol>
              <CFormLabel htmlFor="typeOfCompany" className="form-label mt-3">
                <strong>State/ Province/ Region</strong>
              </CFormLabel>
              <CFormInput type="text" id="typeOfCompany"
                {...register('state')} placeholder="Enter company name."
                valid={
                  formState.dirtyFields?.state &&
                    !!!formState.errors?.state
                    ? true
                    : false
                }
                invalid={!!formState.errors?.state && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.state ? false : true,
                })}
                n
              >
                State/ Province/ Region is required.
              </CFormText>
            </CCol>


            {/* POSTAL OR ZIP CODE FIELD */}
            <CCol>
              <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
                <strong>Postal/ Zip Code</strong>
              </CFormLabel>
              <CFormInput
                type="text"
                {...register('postalCode')}
                id="companyRegistrationNumber"
                placeholder="Enter company registration number."
                valid={
                  formState.dirtyFields?.postalCode &&
                    !!!formState.errors?.postalCode
                    ? true
                    : false
                }
                invalid={!!formState.errors?.postalCode && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.postalCode ? false : true,
                })}

              >
                Postal/ Zip Code is required.
              </CFormText>
            </CCol>


            {/* DIGITAL ADDRESS FIELD */}
            <CCol>
              <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
                <strong>Digital Address</strong>
              </CFormLabel>
              <CFormInput
                type="text"
                {...register('digitalAddress')}
                id="companyRegistrationNumber"
                placeholder="Enter company registration number."
                valid={
                  formState.dirtyFields?.digitalAddress &&
                    !!!formState.errors?.digitalAddress
                    ? true
                    : false
                }
                invalid={!!formState.errors?.digitalAddress && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.digitalAddress ? false : true,
                })}
              >
                Digital Address is required.
              </CFormText>
            </CCol>


            {/* POSTAL ADDRESS FIELD */}
            <CCol>
              <CFormLabel htmlFor="postalAddress" className="form-label mt-3">
                <strong>Postal Address</strong>
              </CFormLabel>
              <CFormTextarea
                id="postalAddress" {...register('postalAddress')} rows={3}
                valid={
                  formState.dirtyFields?.postalAddress &&
                    !!!formState.errors?.postalAddress
                    ? true
                    : false
                }
                invalid={!!formState.errors?.postalAddress && true}
              ></CFormTextarea>
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.postalAddress ? false : true,
                })}

              >
                Postal Address is required.
              </CFormText>
            </CCol>

          </fieldset>
        </CCol>

        <CCol sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>

            {/* OFFICE OWNERSHIP FIELD */}
            <CCol>
              <CFormLabel htmlFor="officeOwnership" className="form-label">
                <strong>Office Ownership</strong>
              </CFormLabel>
              <CFormSelect
                {...register('officeOwnership')}
                id="officeOwnership"
                type='text'
                options={[
                  { label: 'Select an ownership', value: '' },
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true }
                ]}
                valid={
                  formState.dirtyFields?.officeOwnership &&
                    !!!formState.errors?.officeOwnership
                    ? true
                    : false
                }
                invalid={!!formState.errors?.officeOwnership && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.officeOwnership ? false : true,
                })}
              >
                Office Ownership is required.
              </CFormText>
            </CCol>


            {/* FIRST OCCUPANCY DATE FIELD */}
            <CCol>
              <CFormLabel htmlFor="licenseIssuedDate" className="form-label mt-3">
                <strong>First Occupancy Date</strong>
              </CFormLabel>
              <CDatePicker
                {...register('firstOccupancyDate')}
                id="licenseIssuedDate" date="2022/2/16"
                onDateChange={handleDateChange}
                format='yyyy/MM/dd'
                locale="en-US"
                valid={formState.dirtyFields?.firstOccupancyDate && !formState.errors?.firstOccupancyDate}
                invalid={!!formState.errors?.firstOccupancyDate}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.firstOccupancyDate ? false : true,
                })}

              >
                Date is required.
              </CFormText>
            </CCol>


            {/* OFFICE PHONE NUMBER FIELD */}
            <CCol>
              <CFormLabel htmlFor="mobileNumber" className="form-label mt-3">
                <strong>Office Telephone/ Mobile Number</strong>
              </CFormLabel>
              <CFormInput type="text" {...register('officeMobileNumber')}
                id="mobileNumber" placeholder="Enter mobile number."
                valid={
                  formState.dirtyFields?.officeMobileNumber &&
                    !!!formState.errors?.officeMobileNumber
                    ? true
                    : false
                }
                invalid={!!formState.errors?.officeMobileNumber && true}

              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.officeMobileNumber ? false : true,
                })}

              >
                Phone number is required.
              </CFormText>
            </CCol>

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
        <CLoadingButton type='submit' color="info" shape="rounded-pill" timeout={2000}>
          Save Changes
        </CLoadingButton>
      </CFooter>
    </CForm>
  )
}

export default CustomerInfo
