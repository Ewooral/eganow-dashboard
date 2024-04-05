import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'

import clsx from 'clsx'
import {
  CCol,
  CRow,
  CFormLabel,
  CFormInput,
  CDatePicker,
  CFooter,
  CForm,
  CFormSelect,
  CButton,
  CSpinner,
  CFormText,
} from '@coreui/react-pro'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { flipObject_util, formatDate_to_text_util, formatEnum_util } from '@/util'
import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'
import { useSnackbar } from '@/store'
import { generateOptions } from '@/helpers'
import { CompanyRegistrationType } from '@/protos/generated/eganow/api/merchant/onboarding_entity_pb'
import { BusinessInfoFormData, BusinessInfoPaneProps } from '@/types/BusinessInfo'
/*
 *
 * Business Info Component
 *
 */
const BusinessInfo = (props: BusinessInfoPaneProps) => {
  /* *************************************************************************************** */
  const [industriesListOptions, setIndustriesListOptions] = useState([])
  const [regulatorsOptions, setRegulatorsOptions] = useState([])
  const [companyRegistrationTypeOptions, setCompanyRegistrationTypeOptions] = useState([])

  //snackbar from zustand store
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  /* UseForm */
  const { register, reset, getValues, handleSubmit, setValue,trigger, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  //apis
  const { updateBusinessInfo } = MerchantAccountSvc()

  const onSubmit = async (values: BusinessInfoFormData) => {
    console.log(values);
    
    try {
      if (props.type === 'edit') {
        //Getting all the param
        const response = await updateBusinessInfo(values)
        //Show response if error occurs and return error.
        if (!response) {
          //Throw response on error.
          throw new Error(response.value)
        }

        // setShowIndustries(false)
        props.setType('')

        props.businessInfoData.refetch()
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'User Management',
          messages: response.value,
          show: true,
        })
        //Resetting the form
        reset(defaultFormValues)
      }
    } catch (err) {
      //Show response on error.
      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: err.message,
        show: true,
      })
    }
  }

  // Function to handle changes in the DatePicker
  const handleDateChange = (name: string, date: object) => {
  

    
    const dateValue = date?.toISOString()
    const formattedDate = dateValue?.split('T')[0]
    setValue(name, formattedDate, { shouldValidate: true })
  }

  //this function shows the company type text with the id received from the api
  const getCompanyRegistrationTypeText = (id: number) => {
    const formattedEnum: object = formatEnum_util(CompanyRegistrationType, 3) //formats the enum
    const flippedEnum: any = flipObject_util(formattedEnum) //flips the key and value of formatted enu,
    const regulatorText: string = flippedEnum[id]?.toLowerCase() //gets the value
    return regulatorText
  }

  //this function generates the company type options
  const generateCompanyRegistrationTypeOptions = () => {
    const formattedEnum: object = formatEnum_util(CompanyRegistrationType, 3) //formats the enum
    setCompanyRegistrationTypeOptions(generateOptions(formattedEnum)) //gets the value
  }

  //this function gets the name in am array when its id is passed(used for the select options)
  function getNameById(id: number, array: []) {
    const result: any = array?.find((item: any) => item.id === id)
    return result ? result.name : null
  }

  //this creates and sets options for regulators and sectors
  useEffect(() => {
    setRegulatorsOptions(generateOptions(props?.regulators))
    setIndustriesListOptions(generateOptions(props?.industries))
  }, [props?.regulators, props?.industries])

  //this  populates the business info
  useEffect(() => {
    if (props?.businessInfoData?.data) {
      const {
        companyName,
        tradingName,
        companyRegistrationType,
        companyRegistrationNumber,
        dateOfIncorporation,
        email,
        licenseInfo: { licenseNumber, issuedDate, expiryDate },
        profilePicture,
        industryId,
        regulatorId,
        taxIdentificationNumber,
        vatNumber,
      } = props?.businessInfoData?.data

      

      setValue('registrationNumber', companyRegistrationNumber)
      setValue('registrationType', companyRegistrationType)
      setValue('dateOfIncorporation', dateOfIncorporation)
      setValue('registeredEmail', email)
      setValue('industryId', industryId)
      setValue('licenseExpiryDate', expiryDate)
      setValue('licenseIssueDate', issuedDate)
      setValue('licenseNumber', licenseNumber)
      setValue('businessName', companyName)
      setValue('regulatorId', regulatorId)
      setValue('taxIdentificationNumber', taxIdentificationNumber)
      setValue('tradingName', tradingName)
      setValue('vatNumber', vatNumber)
      setValue('type', 'completed')
    }
    generateCompanyRegistrationTypeOptions()
  }, [props?.businessInfoData?.data, props?.type])



  return (
    <div className="">
      {props.businessInfoData.isLoading ? (
        <div className=" d-flex justify-content-center">
          <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2 " />
        </div>
      ) : (
        <CForm noValidate>
          <CRow className="mb-4 px-4">
            <CCol xs={12} sm={6}>
              <fieldset className="p-3 border border-2 dark:border-white">
                <legend className="fs-6 float-none w-auto px-2 text-primary">Email</legend>
                <CFormLabel
                  htmlFor="registeredEmail"
                  className={classNames({
                    'text-error': !!formState.errors?.registeredEmail,
                  })}
                >
                  <strong>Registered Email</strong>
                </CFormLabel>
                {props.type === '' ? (
                  <p className="m-0 pb-1">{props?.businessInfoData?.data?.email}</p>
                ) : (
                  <CFormInput
                    className={clsx({
                      'hide-input': props.type === 'edit',
                    })}
                    type="text"
                    disabled
                    id="registeredEmail"
                    placeholder="Enter email."
                    {...register('registeredEmail')}
                    valid={
                      formState.dirtyFields?.registeredEmail && !!!formState.errors?.registeredEmail
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.registeredEmail && true}
                  />
                )}
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.registeredEmail ? false : true,
                  })}
                >
                  Email is required.
                </CFormText>
              </fieldset>
              <br />
              <fieldset className="p-3 border border-2">
                <legend className="fs-6 float-none w-auto px-2 text-primary">
                  Business Details
                </legend>
                <CCol xs={12}>
                  <CFormLabel
                    htmlFor="companyName"
                    className={classNames({
                      'text-error': !!formState.errors?.businessName,
                    })}
                  >
                    <strong>Business Name</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">{props?.businessInfoData?.data?.companyName}</p>
                  ) : (
                    <CFormInput
                      type="text"
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      id="businessName"
                      disabled={props.type === ''}
                      placeholder="Enter business name."
                      {...register('businessName')}
                      valid={
                        formState.dirtyFields?.businessName && !!!formState.errors?.businessName
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.businessName && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.businessName ? false : true,
                    })}
                  >
                    Business name is required.
                  </CFormText>
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="tradingName"
                    className={classNames({
                      'text-error': !!formState.errors?.tradingName,
                    })}
                  >
                    <strong>Trading Name</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">{props?.businessInfoData?.data?.tradingName}</p>
                  ) : (
                    <CFormInput
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      type="text"
                      id="tradingName"
                      disabled={props.type === ''}
                      placeholder="Enter trading name."
                      {...register('tradingName')}
                      valid={
                        formState.dirtyFields?.tradingName && !!!formState.errors?.tradingName
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.tradingName && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.tradingName ? false : true,
                    })}
                  >
                    Trading name is required.
                  </CFormText>
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="registrationType"
                    className={classNames({
                      'text-error': !!formState.errors?.registrationType,
                    })}
                  >
                    <strong>Type Of Company</strong>
                  </CFormLabel>

                  {props.type === '' ? (
                    <p className="m-0 pb-1">
                      {getCompanyRegistrationTypeText(
                        props?.businessInfoData?.data?.companyRegistrationType,
                      )}
                    </p>
                  ) : (
                    <CFormSelect
                      type="text"
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      disabled={props.type === ''}
                      id="registrationType"
                      options={[...companyRegistrationTypeOptions]}
                      {...register('registrationType')}
                      valid={
                        formState.dirtyFields?.registrationType &&
                        !!!formState.errors?.registrationType
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.registrationType && true}
                      // value={getValues('registrationType')}
                    />
                  )}

                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.registrationType ? false : true,
                    })}
                  >
                    Type of company is required.
                  </CFormText>
                </CCol>

                {/* {props.type === 'edit' && (
                  <CCol xs={12} className="mt-3">
                    <CFormLabel
                      htmlFor="typeOfCompany"
                      className={classNames({
                        'text-error': !!formState.errors?.registrationType,
                      })}
                    >
                      <strong>Business Sectors</strong>
                    </CFormLabel>
                    <CFormSelect
                      {...register('sectors')}
                      disabled={props.type === ''}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      valid={
                        formState.dirtyFields?.sectors && !!!formState.errors?.sectors
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.sectors && true}
                      options={sectorsOptions}
                      type="text"
                      id="sectors"
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.sectors ? false : true,
                      })}
                    >
                      Type of company is required.
                    </CFormText>
                  </CCol>
                )} */}

                {props.type === '' ? (
                  <CCol xs={12} className="mt-3">
                    <CFormLabel
                      htmlFor="typeOfCompany"
                      className={classNames({
                        'text-error': !!formState.errors?.industryId,
                      })}
                    >
                      <strong>Industry</strong>
                    </CFormLabel>
                    <p className="m-0 pb-1">
                      {' '}
                      {getNameById(props?.businessInfoData?.data?.industryId, props?.industries)
                        ? getNameById(props?.businessInfoData?.data?.industryId, props?.industries)
                        : props?.businessInfoData?.data?.regulatorId === undefined
                        ? ''
                        : '---N/A---'}
                    </p>
                  </CCol>
                ) : (
                  <CCol xs={12} className="mt-3">
                    <CFormLabel
                      htmlFor="typeOfCompany"
                      className={classNames({
                        'text-error': !!formState.errors?.industryId,
                      })}
                    >
                      <strong>Industry</strong>
                    </CFormLabel>
                    <CFormSelect
                      options={industriesListOptions}
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      type="text"
                      disabled={props.type === ''}
                      id="industryId"
                      {...register('industryId')}
                      valid={
                        formState.dirtyFields?.industryId && !!!formState.errors?.industryId
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.industryId && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.industryId ? false : true,
                      })}
                    >
                      Industry is required.
                    </CFormText>
                  </CCol>
                )}

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="companyRegistrationNumber"
                    className={classNames({
                      'text-error': !!formState.errors?.registrationNumber,
                    })}
                  >
                    <strong>Company Registration Number</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">
                      {props?.businessInfoData?.data?.companyRegistrationNumber}
                    </p>
                  ) : (
                    <CFormInput
                      type="text"
                      id="registrationNumber"
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      disabled={props.type === ''}
                      placeholder="Enter company registration number."
                      {...register('registrationNumber')}
                      valid={
                        formState.dirtyFields?.registrationNumber &&
                        !!!formState.errors?.registrationNumber
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.registrationNumber && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.registrationNumber ? false : true,
                    })}
                  >
                    Registration number is required.
                  </CFormText>
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="dateOfIncorporation"
                    className={classNames({
                      'text-error': !!formState.errors?.dateOfIncorporation,
                    })}
                  >
                    <strong>Date Of Incorporation</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">
                      {props?.businessInfoData?.data?.dateOfIncorporation === 'N/A'
                        ? props?.businessInfoData?.data?.dateOfIncorporation
                        : props?.businessInfoData?.data?.dateOfIncorporation === undefined
                        ? ''
                        : formatDate_to_text_util(
                            props?.businessInfoData?.data?.dateOfIncorporation,
                          )}
                    </p>
                  ) : (
                    <CDatePicker
                    inputReadOnly 
                      id="dateOfIncorporation"
                      date={
                        getValues('dateOfIncorporation') === 'N/A'
                          ? new Date()
                          : getValues('dateOfIncorporation')
                      }
                      disabled={props.type === ''}
                      className={clsx({
                        'hide-input ': props.type === '',
                      })}
                      onDateChange={(date) => handleDateChange('dateOfIncorporation', date)}
                      locale="en-US"
                      {...register('dateOfIncorporation')}
                      valid={
                        formState.dirtyFields?.dateOfIncorporation &&
                        !!!formState.errors?.dateOfIncorporation
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.dateOfIncorporation && true}
                    />
                  )}


                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.dateOfIncorporation ? false : true,
                    })}
                  >
                    Date is required.
                  </CFormText>
                </CCol>
                
              </fieldset>
            </CCol>

            <CCol xs={12} sm={6}>
              <fieldset className="p-3 border border-2">
                <legend className="fs-6 float-none w-auto px-2 text-primary">Tax Details</legend>
                <CCol xs={12}>
                  <CFormLabel
                    htmlFor="taxIdentificationNumber"
                    className={classNames({
                      'text-error': !!formState.errors?.taxIdentificationNumber,
                    })}
                  >
                    <strong>Tax Identification Number (TIN)</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">
                      {props?.businessInfoData?.data?.taxIdentificationNumber}
                    </p>
                  ) : (
                    <CFormInput
                      type="text"
                      id="taxIdentificationNumber"
                      className={clsx({
                        'hide-input ': props.type === '',
                      })}
                      placeholder="Enter company TIN number."
                      {...register('taxIdentificationNumber')}
                      disabled={props.type === ''}
                      valid={
                        formState.dirtyFields?.taxIdentificationNumber &&
                        !!!formState.errors?.taxIdentificationNumber
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.taxIdentificationNumber && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.taxIdentificationNumber ? false : true,
                    })}
                  >
                    TIN is required.
                  </CFormText>
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="VATRegistrationNumber"
                    className={classNames({
                      'text-error': !!formState.errors?.vatNumber,
                    })}
                  >
                    <strong>VAT Registration Number</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">{props?.businessInfoData?.data?.vatNumber}</p>
                  ) : (
                    <CFormInput
                      type="text"
                      id="vatNumber"
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      disabled={props.type === ''}
                      placeholder="Enter VAT registration number."
                      {...register('vatNumber')}
                      valid={
                        formState.dirtyFields?.vatNumber && !!!formState.errors?.vatNumber
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.vatNumber && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.vatNumber ? false : true,
                    })}
                    n
                  >
                    VAT is required.
                  </CFormText>
                </CCol>
              </fieldset>
              <br />
              <fieldset className="p-3 border border-2">
                <legend className="fs-6 float-none w-auto px-2 text-primary">
                  License Details
                </legend>
                <CCol xs={12}>
                  <CFormLabel htmlFor="businessRegulator">
                    <strong>Business Regulator</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className="m-0 pb-1">
                      {getNameById(props?.businessInfoData?.data?.regulatorId, props?.regulators)
                        ? getNameById(props?.businessInfoData?.data?.regulatorId, props?.regulators)
                        : props?.businessInfoData?.data?.regulatorId === undefined
                        ? ''
                        : '---N/A---'}
                    </p>
                  ) : (
                    <CFormSelect
                      options={regulatorsOptions}
                      disabled={props.type === ''}
                      type="text"
                      id="regulatorId"
                      placeholder="Enter business regulator."
                      {...register('regulatorId')}
                      className={clsx({
                        'hide-input': props.type === '',
                        'text-error': !!formState.errors?.regulatorId,
                      })}
                      valid={
                        formState.dirtyFields?.regulatorId && !!!formState.errors?.regulatorId
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.regulatorId && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.regulatorId ? false : true,
                    })}
                  >
                    Regulator is required.
                  </CFormText>
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="licenseNumber"
                    className={classNames({
                      'text-error': !!formState.errors?.licenseNumber,
                    })}
                  >
                    <strong>License Number</strong>
                  </CFormLabel>
                  {props.type === '' ? (
                    <p className=" m-0 pb-1">
                      {props?.businessInfoData?.data?.licenseInfo.licenseNumber}
                    </p>
                  ) : (
                    <CFormInput
                      type="text"
                      id="licenseNumber"
                      placeholder="Enter license number."
                      className={clsx({
                        'hide-input': props.type === '',
                      })}
                      disabled={props.type === ''}
                      {...register('licenseNumber')}
                      valid={
                        formState.dirtyFields?.licenseNumber && !!!formState.errors?.licenseNumber
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.licenseNumber && true}
                    />
                  )}
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.licenseNumber ? false : true,
                    })}
                  >
                    License number is required.
                  </CFormText>
                </CCol>

                <CRow className="g-3 mt-3">
                  <CCol xs={12} sm={6}>
                    <CFormLabel
                      htmlFor="licenseIssueDate"
                      className={classNames({
                        'text-error': !!formState.errors?.licenseIssueDate,
                      })}
                    >
                      <strong>License Issued Date</strong>
                    </CFormLabel>
                    {props.type === '' ? (
                      <p className="m-0 pb-1">
                        {props?.businessInfoData?.data?.licenseInfo.issuedDate === 'N/A'
                          ? props?.businessInfoData?.data?.licenseInfo.issuedDate
                          : props?.businessInfoData?.data?.licenseInfo.issuedDate === undefined
                          ? ''
                          : formatDate_to_text_util(
                              props?.businessInfoData?.data?.licenseInfo.issuedDate,
                            )}
                      </p>
                    ) : (
                      <CDatePicker
                      inputReadOnly
                        {...register('licenseIssueDate')}
                        onDateChange={(date) => handleDateChange('licenseIssueDate', date)}

                        disabled={props.type === ''}
                        date={
                          getValues('licenseIssueDate') === 'N/A'
                            ? new Date()
                            : getValues('licenseIssueDate')
                        }
                        valid={
                          formState.dirtyFields?.licenseIssueDate &&
                          !!!formState.errors?.licenseIssueDate
                            ? true
                            : false
                        }
                        invalid={!!formState.errors?.licenseIssueDate && true}
                        id="licenseIssueDate"
                        locale="en-US"
                      />
                    )}
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.licenseIssueDate ? false : true,
                      })}
                      
                    >
                      License issued date is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6}>
                    <CFormLabel
                      htmlFor="licenseExpiryDate"
                      className={classNames({
                        'text-error': !!formState.errors?.licenseExpiryDate,
                      })}
                    >
                      <strong>License Expiry Date</strong>
                    </CFormLabel>
                    {props.type === '' ? (
                      <p className="m-0 pb-1">
                        {props?.businessInfoData?.data?.licenseInfo.expiryDate === 'N/A'
                          ? props?.businessInfoData?.data?.licenseInfo.expiryDate
                          : props?.businessInfoData?.data?.licenseInfo.expiryDate === undefined
                          ? ''
                          : formatDate_to_text_util(
                              props?.businessInfoData?.data?.licenseInfo.expiryDate,
                            )}
                      </p>
                    ) : (
                      <CDatePicker
                      inputReadOnly
                        {...register('licenseExpiryDate')}
                        onDateChange={(date) => handleDateChange('licenseExpiryDate', date)}
                        disabled={props.type === ''}
                        date={
                          getValues('licenseExpiryDate') === 'N/A'
                            ? new Date()
                            : getValues('licenseExpiryDate')
                        }
                        valid={
                          formState.dirtyFields?.licenseExpiryDate &&
                          !!!formState.errors?.licenseExpiryDate
                            ? true
                            : false
                        }
                        invalid={!!formState.errors?.licenseExpiryDate && true}
                        id="licenseExpiryDate"
                        locale="en-US"
                      />
                    )}
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.licenseExpiryDate ? false : true,
                      })}
                    >
                      License expiry date is required.
                    </CFormText>
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
            {/* <CLoadingButton color="info" shape="rounded-pill" timeout={2000}>
          Save Changes
        </CLoadingButton> */}

            {props.type === 'edit' && (
              <CButton
                color="info"
                type="button"
                shape="rounded-pill"
                className="text-white"
                onClick={handleSubmit(onSubmit)}
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
      )}
    </div>
  )
}

export default BusinessInfo
