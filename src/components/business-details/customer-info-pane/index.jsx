// @ts-nocheck
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultFormValues } from './defaultFormValues'
import { customerInfoSchema } from './validationSchema'
import { useSnackbar } from '@/store'
import { generateOptions } from '@/helpers'
// IMPORTING API
import merchantBusinessInfoAPI from '@/api/merchantBusinessInfoAPI'

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
  CButton,
  CSpinner,
} from '@coreui/react-pro'

import CountryInput from '@/components/country/CountryInput'
import clsx from 'clsx'
import { useEffect } from 'react'
import { type } from 'os'
import { flipObject_util, formatDate_util, formatEnum_util, getIdByValue_util } from '@/util'
import { DATE_FORMAT, OFFICE_OWNERSHIP_OPTIONS } from '@/constants'
/*
 *
 * Customer Info Component
 *
 */
const CustomerInfo = (props) => {
  const showSnackbar = useSnackbar((state) => state.showSnackbar)
  const { updateBusinessContactInfo } = merchantBusinessInfoAPI()
  const { register, handleSubmit, setValue, watch, formState, getValues, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(customerInfoSchema),
    defaultValues: defaultFormValues,
  })
  // SET FORM FIELD VALUE WHEN COMPONENTS MOUNTS
  useEffect(() => {
    if (props?.contactInfo?.data) {
      const { data } = props.contactInfo?.data //destructing data from props
      setValue('streetAddress', data?.streetAddress)
      setValue('city', data?.city)
      setValue('officeMobileNumber', data?.mobileNumber)
      setValue('postalZipCode', data?.postalZipCode)
      setValue('provinceState', data?.provinceState)
      setValue('digitalAddress', data?.digitalAddress)
      setValue('postalAddress', data?.postalAddress)
      setValue('firstOccupancyDate', data?.firstOccupancyDate)
      setValue('officeOwnership', data?.officeOwnership)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.contactInfo?.data])

  // FUNCTION TO HANDLE CHANGES IN THE DATE PICKER
  function handleDateChange(date) {
    const dateValue = date?.toISOString() //CONVERT DATE OBJECT TO STRING
    const formattedDate = dateValue?.split('T')[0] //REMOVE TIMESTAMP FROM STRING
    setValue('firstOccupancyDate', formattedDate, { shouldValidate: true })
  }

  // SUBMIT FUNCTION FOR THE FORM
  async function onSubmit(data) {
    try {
      const response = await updateBusinessContactInfo({
        ...data,
        officeOwnership: data.officeOwnership,
      })
      //Cancel edit mode
      props.setIsEditable(false)
      //Refetching new data
      props.contactInfo.refetch()
      //Show response on success.
      showSnackbar({
        type: 'success',
        title: 'User Management',
        messages: response?.message,
        show: true,
      })
    } catch (err) {
      //Show response on error.
      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: 'Problem updating contact information.',
        show: true,
      })
    }
  }

  return (
    <div>
      {props?.contactInfo?.isLoading ? (
        <div className=" d-flex justify-content-center">
          <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2 " />
        </div>
      ) : (
        <CForm onSubmit={handleSubmit(onSubmit)}>
          <CRow className="mb-4 px-4">
            <CCol sm={6}>
              <fieldset className="p-3 border border-1">
                <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>
                <CCol>
                  <CFormLabel
                    htmlFor="streetAddress"
                    className={clsx({
                      'text-error': !!formState.errors?.streetAddress,
                    })}
                  >
                    <strong>Business Address</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormTextarea
                        id="streetAddress"
                        rows={'auto'}
                        style={{ resize: 'none' }}
                        placeholder="Enter your business street address"
                        {...register('streetAddress')}
                        invalid={!!formState.errors?.streetAddress && true}
                      ></CFormTextarea>
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.streetAddress ? false : true,
                        })}
                      >
                        Street Address is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.streetAddress}</p>
                  )}
                </CCol>

                {/* CITY OR TOWN FIELD */}
                <CCol>
                  <CFormLabel htmlFor="companyName" className="form-label mt-3">
                    <strong>City/ Town</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="companyName"
                        type="text"
                        placeholder="Enter city or town"
                        {...register('city')}
                        invalid={!!formState.errors?.city && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.city ? false : true,
                        })}
                      >
                        City or Town is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.city}</p>
                  )}
                </CCol>

                {/* provinceState PROVINCE FIELD */}
                <CCol>
                  <CFormLabel htmlFor="provinceState" className="form-label mt-3">
                    <strong>State/ Province/ Region</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="provinceState"
                        type="text"
                        placeholder="Enter state/province/region"
                        {...register('provinceState')}
                        invalid={!!formState.errors?.provinceState && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.provinceState ? false : true,
                        })}
                        n
                      >
                        State/ Province/ Region is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.provinceState}</p>
                  )}
                </CCol>

                {/* POSTAL OR ZIP CODE FIELD */}
                <CCol>
                  <CFormLabel htmlFor="postalZipCode" className="form-label mt-3">
                    <strong>Postal/ Zip Code</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="postalZipCode"
                        type="text"
                        placeholder="Enter zip code or postal code"
                        {...register('postalZipCode')}
                        invalid={!!formState.errors?.postalZipCode && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.postalZipCode ? false : true,
                        })}
                      >
                        Postal/ Zip Code is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.postalZipCode}</p>
                  )}
                </CCol>

                {/* DIGITAL ADDRESS FIELD */}
                <CCol>
                  <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
                    <strong>Digital Address</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="companyRegistrationNumber"
                        type="text"
                        placeholder="Enter digital address"
                        {...register('digitalAddress')}
                        invalid={!!formState.errors?.digitalAddress && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.digitalAddress ? false : true,
                        })}
                      >
                        Digital Address is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.digitalAddress}</p>
                  )}
                </CCol>

                {/* POSTAL ADDRESS FIELD */}
                <CCol>
                  <CFormLabel htmlFor="postalAddress" className="form-label mt-3">
                    <strong>Postal Address</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormTextarea
                        id="postalAddress"
                        rows={3}
                        placeholder="Enter postal address"
                        style={{ resize: 'none' }}
                        {...register('postalAddress')}
                        invalid={!!formState.errors?.postalAddress && true}
                      ></CFormTextarea>
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.postalAddress ? false : true,
                        })}
                      >
                        Postal Address is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.postalAddress}</p>
                  )}
                </CCol>
              </fieldset>
            </CCol>

            <CCol sm={6}>
              <fieldset className="p-3 border border-1">
                <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>
                {/* OFFICE OWNERSHIP FIELD */}
                <CCol>
                  <CFormLabel htmlFor="officeOwnership" className="form-label">
                    <strong>Office Ownership</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <div>
                      <CFormSelect
                        id="officeOwnership"
                        type="text"
                        options={OFFICE_OWNERSHIP_OPTIONS}
                        {...register('officeOwnership')}
                        invalid={!!formState.errors?.officeOwnership && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.officeOwnership ? false : true,
                        })}
                      >
                        Office Ownership is required.
                      </CFormText>
                    </div>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.officeOwnership}</p>
                  )}
                </CCol>

                {/* FIRST OCCUPANCY DATE FIELD */}
                <CCol>
                  <CFormLabel htmlFor="licenseIssuedDate" className="form-label mt-3">
                    <strong>First Occupancy Date</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CDatePicker
                        id="licenseIssuedDate"
                        date=""
                        onDateChange={handleDateChange}
                        format={DATE_FORMAT}
                        placeholder={props?.contactInfo?.data?.data.firstOccupancyDate}
                        {...register('firstOccupancyDate')}
                        invalid={!!formState.errors?.firstOccupancyDate}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.firstOccupancyDate ? false : true,
                        })}
                      >
                        Date is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">
                      {formatDate_util(
                        props?.contactInfo?.data?.data.firstOccupancyDate,
                        DATE_FORMAT,
                      )}
                    </p>
                  )}
                </CCol>

                {/* OFFICE PHONE NUMBER FIELD */}
                <CCol>
                  <CFormLabel htmlFor="mobileNumber" className="form-label mt-3">
                    <strong>Office Telephone/ Mobile Number</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="mobileNumber"
                        type="text"
                        placeholder="Enter mobile number."
                        {...register('officeMobileNumber')}
                        invalid={!!formState.errors?.officeMobileNumber && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.officeMobileNumber ? false : true,
                        })}
                      >
                        Phone number is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0">{props?.contactInfo?.data?.data.mobileNumber}</p>
                  )}
                </CCol>
              </fieldset>
            </CCol>
          </CRow>
          {props.isEditable ? (
            <CFooter className="position-sticky left-0 bottom-0 w-100 float-right justify-content-end p-4">
              <CButton
                color="info"
                type="submit"
                shape="rounded-pill"
                className="text-white"
                onClick={handleSubmit(onSubmit)}
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
                ) : (
                  'Save Changes'
                )}
              </CButton>
            </CFooter>
          ) : null}
        </CForm>
      )}
    </div>
  )
}

export default CustomerInfo
