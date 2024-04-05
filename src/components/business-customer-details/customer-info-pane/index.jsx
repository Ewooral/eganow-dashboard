// @ts-nocheck
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultFormValues } from './defaultFormValues'
import { customerInfoSchema } from './validationSchema'
import { useSnackbar } from '@/store'
import classNames from 'classnames'

// IMPORTING API
import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'

// IMPORT ENUM
import { OfficeOwnership } from '@/protos/generated/eganow/api/merchant/onboarding_entity_pb'

import { generateOptions } from '@/helpers'


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
import { flipObject_util, formatEnum_util } from '@/util'
/*
 *
 * Customer Info Component
 *
 */


const CustomerInfo = (props) => {
  // INITIALIZE USE SNACKBAR FROM GLOBAL STATE
  const showSnackbar = useSnackbar((state) => state.showSnackbar)

  // INITIALIZING API
  const { updateBusinessContactInfo } = MerchantAccountSvc()

  // ENUM ARRAY LIST FORMATTER
  const ownerOfficeList = () => {
    let formatEnum = formatEnum_util(OfficeOwnership, 2)
    let enums = generateOptions(formatEnum)
    return enums
  }

  //GET SELECTED OWNER OFFICE FROM API
  const getOfficeOwner = (id) => {
    const formattedEnum = formatEnum_util(OfficeOwnership, 2) //formats the enum
    const flippedEnum = flipObject_util(formattedEnum) //flips the key and value of formatted enum
    return flippedEnum[id]
    // return selectOwnerOffice
  }


  // USEFORM OBJECT
  const { register, handleSubmit, setValue, watch, formState, getValues, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(customerInfoSchema),
    defaultValues: defaultFormValues,
  })


  // SET FORM FIELD VALUE WHEN COMPONENTS MOUNTS
  useEffect(() => {
    if (props?.contactInfo?.data) {
      const { data } = props.contactInfo //destructing data from props
      setValue('streetAddress', data?.streetAddress)
      setValue('city', data?.city)
      setValue('officeMobileNumber', data?.mobileNumber)
      setValue('postalCode', data?.postalZipCode)
      setValue('state', data?.provinceState)
      setValue('digitalAddress', data?.digitalAddress)
      setValue('postalAddress', data?.postalAddress)
      setValue('firstOccupancyDate', data?.firstOccupancyDate)
      setValue('officeOwnership',data?.officeOwnership)
    }
  }, [props?.contactInfo?.data, props?.type])


  // FUNCTION TO HANDLE CHANGES IN THE DATE PICKER
  const handleDateChange = (date) => {
    const dateValue = date?.toISOString(); //CONVERT DATE OBJECT TO STRING 
    const formattedDate = dateValue?.split("T")[0]; //REMOVE TIMESTAMP FROM STRING
    setValue('firstOccupancyDate', formattedDate, { shouldValidate: true });
  };


  // SUBMIT FUNCTION FOR THE FORM 
  const onSubmit = async (data) => {
    try {
      if (props.type === 'edit') {
        const response = await updateBusinessContactInfo(data)
        if (!response) {
          //THROW RESPONSE ON ERROR.
          throw new Error(response.value)
        }
        props.setType('')
        props?.contactInfo?.refetch()
        // SHOW SNACK BAR ON SUCCESS
        showSnackbar({
          type: 'success',
          title: 'User Management',
          messages: response?.value,
          show: true,
        })
        reset(defaultFormValues)
      }
    } catch (err) {
      //SHOW RESPONSE ON ERROR.
      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: err?.message,
        show: true,
      })
    }
  }


  return (
    <div>
      {
        props?.contactInfo?.isLoading ? (
          <div className=" d-flex justify-content-center">
          <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2 " />
        </div>
        ) : (
          <CForm onSubmit={handleSubmit(onSubmit)}>
      <CRow className="mb-4 px-4">
        <CCol sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Info</legend>

            {/* STREET ADDRESS FIELD */}
            <CCol>
              <CFormLabel htmlFor="streetAddress" className={classNames({
                'text-error': !!formState.errors?.streetAddress,
              })}>
                <strong>Business Address</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.streetAddress}</p> :
                  <div>
                    <CFormTextarea id="streetAddress"
                      {...register('streetAddress')}
                      placeholder='Enter your business street address'
                      rows={'auto'}
                      valid={formState.dirtyFields?.streetAddress && !!!formState.errors?.streetAddress ? true : false}
                      invalid={!!formState.errors?.streetAddress && true}
                      style={{ resize: 'none' }}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
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
                  </div>
              }
            </CCol>


            {/* CITY OR TOWN FIELD */}
            <CCol>
              <CFormLabel htmlFor="companyName" className="form-label mt-3">
                <strong>City/ Town</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.city}</p> :
                  <div>
                    <CFormInput type="text" {...register('city')}
                      id="companyName" placeholder="Enter city or town"
                      valid={
                        formState.dirtyFields?.city &&
                          !!!formState.errors?.city
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.city && true}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
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
                  </div>
              }
            </CCol>


            {/* STATE PROVINCE FIELD */}
            <CCol>
              <CFormLabel htmlFor="state" className="form-label mt-3">
                <strong>State/ Province/ Region</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.provinceState}</p> :
                  <div>
                    <CFormInput type="text" id="state"
                      {...register('state')} placeholder="Enter state/province/region"
                      valid={
                        formState.dirtyFields?.state &&
                          !!!formState.errors?.state
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.state && true}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
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
                  </div>
              }
            </CCol>


            {/* POSTAL OR ZIP CODE FIELD */}
            <CCol>
              <CFormLabel htmlFor="postalCode" className="form-label mt-3">
                <strong>Postal/ Zip Code</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.postalZipCode}</p> :
                  <div>
                    <CFormInput
                      type="text"
                      {...register('postalCode')}
                      id="postalCode"
                      placeholder="Enter zip code or postal code"
                      valid={
                        formState.dirtyFields?.postalCode &&
                          !!!formState.errors?.postalCode
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.postalCode && true}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
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
                  </div>
              }
            </CCol>


            {/* DIGITAL ADDRESS FIELD */}
            <CCol>
              <CFormLabel htmlFor="companyRegistrationNumber" className="form-label mt-3">
                <strong>Digital Address</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.digitalAddress}</p> :
                  <div>
                    <CFormInput
                      type="text"
                      {...register('digitalAddress')}
                      id="companyRegistrationNumber"
                      placeholder="Enter digital address"
                      valid={
                        formState.dirtyFields?.digitalAddress &&
                          !!!formState.errors?.digitalAddress
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.digitalAddress && true}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
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
                  </div>
              }
            </CCol>


            {/* POSTAL ADDRESS FIELD */}
            <CCol>
              <CFormLabel htmlFor="postalAddress" className="form-label mt-3">
                <strong>Postal Address</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.postalAddress}</p> :
                  <div>
                    <CFormTextarea
                      id="postalAddress" {...register('postalAddress')} rows={3}
                      placeholder='Enter postal address'
                      valid={
                        formState.dirtyFields?.postalAddress &&
                          !!!formState.errors?.postalAddress
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.postalAddress && true}
                      style={{ resize: 'none' }}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
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
                  </div>
              }
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
              {
                !props.type ? <p>{getOfficeOwner(props?.contactInfo?.data?.officeOwnership)}</p> :
                  <div>
                    <CFormSelect
                      {...register('officeOwnership')}
                      id="officeOwnership"
                      type='text'
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      options={[...ownerOfficeList()]}
                      valid={
                        formState.dirtyFields?.officeOwnership &&
                          !!!formState.errors?.officeOwnership
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.officeOwnership && true}
                      // value={getValues('officeOwnership')}
                      
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
                  </div>
              }
            </CCol>


            {/* FIRST OCCUPANCY DATE FIELD */}
            <CCol>
              <CFormLabel htmlFor="licenseIssuedDate" className="form-label mt-3">
                <strong>First Occupancy Date</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.firstOccupancyDate}</p> :
                  <div>
                    <CDatePicker
                      {...register('firstOccupancyDate')}
                      id="licenseIssuedDate" date=""
                      onDateChange={handleDateChange}
                      format='yyyy/MM/dd'
                      locale="en-US"
                      valid={formState.dirtyFields?.firstOccupancyDate && !formState.errors?.firstOccupancyDate}
                      invalid={!!formState.errors?.firstOccupancyDate}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}
                      inputReadOnly={true}
                      visible
                      disabled={props.type === ''}
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
                  </div>
              }
            </CCol>


            {/* OFFICE PHONE NUMBER FIELD */}
            <CCol>
              <CFormLabel htmlFor="mobileNumber" className="form-label mt-3">
                <strong>Office Telephone/ Mobile Number</strong>
              </CFormLabel>
              {
                !props.type ? <p>{props?.contactInfo?.data?.mobileNumber}</p> :
                  <div>
                    <CFormInput type="text" {...register('officeMobileNumber')}
                      id="mobileNumber" placeholder="Enter mobile number."
                      valid={
                        formState.dirtyFields?.officeMobileNumber &&
                          !!!formState.errors?.officeMobileNumber
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.officeMobileNumber && true}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      readOnly={props.type === '' ? true : false}
                      plainText={props.type === '' ? true : false}

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
                  </div>
              }
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
        {props.type === 'edit' && (
          <CButton
            color="info"
            type="submit"
            shape="rounded-pill"
            className="text-white"
            // onClick={handleSubmit(onSubmit)}
            disabled={formState.isSubmitting}
          >
            {/* {props.data?.type === 'new' ? 'Save' : 'Save Changes'} */}
            {formState.isSubmitting ? (
              <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
            ) : (
              'save changes'
            )}
          </CButton>
        )}
      </CFooter>
    </CForm>
        )
      }
    </div>
    
  )
}

export default CustomerInfo
