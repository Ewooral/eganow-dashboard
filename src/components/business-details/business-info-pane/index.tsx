// @ts-nocheck
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
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
  CPlaceholder,
  CCardTitle,
} from '@coreui/react-pro'
import { useEffect, useState, useMemo } from 'react'
import {
  isEmpty_util,
  flipObject_util,
  formatDate_util,
  formatEnum_util,
  removeUnderscores_util,
  getNameById_util,
} from '@/util'
import { useSnackbar } from '@/store'
import { generateOptions } from '@/helpers'
import { BusinessInfoFormData, BusinessInfoPaneProps } from '@/types/BusinessInfoType'
import Placeholder from './Placeholder'
import merchantBusinessInfoAPI from '@/api/merchantBusinessInfoAPI'
import { COMPANY_REGISTRATION_TYPE_OPTIONS, DATE_FORMAT, NOT_APPLICABLE, REGULATOR_ID } from '@/constants'
/*
 *
 * Business Info Component
 *
 */
const BusinessInfo = (props: BusinessInfoPaneProps) => {
  const { updateBusinessInfo } = merchantBusinessInfoAPI()
  const [industriesListOptions, setIndustriesListOptions] = useState([])
  const [regulatorsOptions, setRegulatorsOptions] = useState([])

  //Snackbar from zustand store
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)
  //UseForm
  const { register, reset, getValues, watch, handleSubmit, setValue, clearErrors, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })
  //Create dateOfIncorporation
  const dateOfIncorporation = useMemo(
    () =>
      isEmpty_util(props?.businessInfoData?.data?.data.dateOfIncorporation)
        ? NOT_APPLICABLE
        : formatDate_util(props?.businessInfoData?.data?.data.dateOfIncorporation, DATE_FORMAT),
    [props?.businessInfoData?.data?.data.dateOfIncorporation],
  )
  //Create issuedDate
  const licenseIssueDate = useMemo(
    () =>
      isEmpty_util(props?.businessInfoData?.data?.data.licenseInfo.issuedDate)
        ? NOT_APPLICABLE
        : formatDate_util(props?.businessInfoData?.data?.data.licenseInfo.issuedDate, DATE_FORMAT),
    [props?.businessInfoData?.data?.data.licenseInfo.issuedDate],
  )
  //Create licenseExpiryDate
  const licenseExpiryDate = useMemo(
    () =>
      isEmpty_util(props?.businessInfoData?.data?.data.licenseInfo.expiryDate)
        ? NOT_APPLICABLE
        : formatDate_util(props?.businessInfoData?.data?.data.licenseInfo.expiryDate, DATE_FORMAT),
    [props?.businessInfoData?.data?.data.licenseInfo.expiryDate],
  )
  //This creates and sets options for regulators and sectors
  useEffect(() => {
    setRegulatorsOptions(generateOptions(props?.regulators))
    setIndustriesListOptions(generateOptions(props?.industries))
  }, [props?.regulators, props?.industries])
  //This  populates the business info
  useEffect(() => {

    if (props.businessInfoData?.data?.data) {
      const {
        companyName,
        tradingName,
        companyRegistrationType,
        companyRegistrationNo,
        dateOfIncorporation,
        email,
        licenseInfo,
        profilePicture,
        industryId,
        regulatorId,
        taxIdentificationNumber,
        vatNumber,
      } = props.businessInfoData?.data?.data

      setValue('registrationNumber', companyRegistrationNo)
      setValue('registrationType', companyRegistrationType)
      setValue('dateOfIncorporation', dateOfIncorporation)
      setValue('registeredEmail', email)
      setValue('industryId', industryId)

      setValue('licenseExpiryDate', licenseInfo?.expiryDate)
      setValue('licenseIssueDate', licenseInfo?.issuedDate)
      setValue('licenseNumber', licenseInfo?.number)

      setValue('businessName', companyName)
      setValue('regulatorId', regulatorId)
      setValue('taxIdentificationNumber', taxIdentificationNumber)
      setValue('tradingName', tradingName)
      setValue('vatNumber', vatNumber)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.businessInfoData?.data, props?.type])

  function handleDateChange(name: string, date: object) {
    const dateValue = date?.toISOString()
    const formattedDate = dateValue?.split('T')[0]
    setValue(name, formattedDate, { shouldValidate: true })
  }

  // CHECKING AND SETTING NOT-REGULATED BUSINESS 
  const regulatorId = watch("regulatorId");
  const notRegulated: boolean = regulatorId === REGULATOR_ID[0]

  
  async function onSubmit(values: BusinessInfoFormData) {
    try {
      //Getting all the param
      const response = await updateBusinessInfo({
        companyName: values.businessName,
        tradingName: values.tradingName,
        dateOfIncorporation: values.dateOfIncorporation,
        industryId: values.industryId,
        companyRegistrationNo: values.registrationNumber,
        companyRegistrationType: values.registrationType,
        email: values.registeredEmail,
        licenseInfo: {
          number: notRegulated ? null : values.licenseNumber,
          issuedDate: notRegulated ? null : values.licenseIssueDate,
          expiryDate: notRegulated ? null : values.licenseExpiryDate,
        },
        regulatorId: values.regulatorId,
        taxIdentificationNumber: values.taxIdentificationNumber,
        vatNumber: values.vatNumber,
      })
      //Cancel edit mode 
      props.setIsEditable(false)
      //Refetching new data
      props.businessInfoData.refetch()
      //Show response on success.
      showSnackbar({
        type: 'success',
        title: 'Business Details',
        messages: response.message,
        show: true,
      })
    } catch (err) {
      //Show response on error.
      showSnackbar({
        type: 'danger',
        title: 'Business Details',
        messages: 'Problem updating your business details.',
        show: true,
      })
    }
  }

  return (
    <div>
      {props.businessInfoData.isLoading ? (
        <Placeholder />
      ) : (
        <CForm noValidate>
          <CRow className="mb-4 px-4">
            <CCol xs={12} sm={6}>
              <fieldset className="p-3 border border-1 dark:border-white">
                <legend className="fs-6 float-none w-auto px-2 text-primary">Email</legend>
                <CFormLabel
                  htmlFor="registeredEmail"
                  className={clsx({
                    'text-error': !!formState.errors?.registeredEmail,
                  })}
                >
                  <strong>Registered Email</strong>
                </CFormLabel>
                {props.isEditable ? (
                  <>
                    <CFormInput
                      id="registeredEmail"
                      type="text"
                      className={clsx({
                        'hide-input': !props.allowToEdit,
                      })}
                      disabled={!props.allowToEdit}
                      placeholder="Enter email."
                      {...register('registeredEmail')}
                      invalid={!!formState.errors?.registeredEmail && true}
                    />
                    <CFormText
                      component="span"
                      className={clsx({
                        'text-error': true,
                        'd-none': !!formState.errors?.registeredEmail ? false : true,
                      })}
                    >
                      Email is required.
                    </CFormText>
                  </>
                ) : (
                  <p className="m-0 pb-1">{props.businessInfoData?.data?.data.email}</p>
                )}
              </fieldset>

              <br />

              <fieldset className="p-3 border border-1">
                <legend className="fs-6 float-none w-auto px-2 text-primary">
                  Business Details
                </legend>
                <CCol xs={12}>
                  <CFormLabel
                    htmlFor="companyName"
                    className={clsx({
                      'text-error': !!formState.errors?.businessName,
                    })}
                  >
                    <strong>Business Name</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        type="text"
                        id="businessName"
                        className={clsx({
                          'hide-input': !props.allowToEdit,
                        })}
                        disabled={!props.allowToEdit}
                        placeholder="Enter business name."
                        {...register('businessName')}
                        invalid={!!formState.errors?.businessName && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.businessName ? false : true,
                        })}
                      >
                        Business name is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">{props?.businessInfoData?.data?.data.companyName}</p>
                  )}
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="tradingName"
                    className={clsx({
                      'text-error': !!formState.errors?.tradingName,
                    })}
                  >
                    <strong>Trading Name</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        type="text"
                        id="tradingName"
                        placeholder="Enter trading name."
                        {...register('tradingName')}
                        invalid={!!formState.errors?.tradingName && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.tradingName ? false : true,
                        })}
                      >
                        Trading name is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">{props?.businessInfoData?.data?.data.tradingName}</p>
                  )}
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="registrationType"
                    className={clsx({
                      'text-error': !!formState.errors?.registrationType,
                    })}
                  >
                    <strong>Type Of Company</strong>
                  </CFormLabel>

                  {props.isEditable ? (
                    <>
                      <CFormSelect
                        id="registrationType"
                        type="text"
                        options={COMPANY_REGISTRATION_TYPE_OPTIONS}
                        {...register('registrationType')}
                        invalid={!!formState.errors?.registrationType && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.registrationType ? false : true,
                        })}
                      >
                        Type of company is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">
                      {removeUnderscores_util(
                        props?.businessInfoData?.data?.data.companyRegistrationType,
                      )}
                    </p>
                  )}
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="typeOfCompany"
                    className={clsx({
                      'text-error': !!formState.errors?.industryId,
                    })}
                  >
                    <strong>Industry</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormSelect
                        id="industryId"
                        type="text"
                        options={industriesListOptions}
                        {...register('industryId')}
                        invalid={!!formState.errors?.industryId && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.industryId ? false : true,
                        })}
                      >
                        Industry is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">
                      {getNameById_util(
                        props?.businessInfoData?.data?.data.industryId,
                        props?.industries,
                      )}
                    </p>
                  )}
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="companyRegistrationNumber"
                    className={clsx({
                      'text-error': !!formState.errors?.registrationNumber,
                    })}
                  >
                    <strong>Company Registration Number</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="registrationNumber"
                        type="text"
                        placeholder="Enter company registration number."
                        {...register('registrationNumber')}
                        invalid={!!formState.errors?.registrationNumber && true}
                      />
                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.registrationNumber ? false : true,
                        })}
                      >
                        Registration number is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">
                      {props?.businessInfoData?.data?.data.companyRegistrationNo}
                    </p>
                  )}
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="dateOfIncorporation"
                    className={clsx({
                      'text-error': !!formState.errors?.dateOfIncorporation,
                    })}
                  >
                    <strong>Date Of Incorporation</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CDatePicker
                        inputReadOnly
                        id="dateOfIncorporation"
                        locale="en-US"
                        date={
                          getValues('dateOfIncorporation') === 'N/A'
                            ? new Date()
                            : getValues('dateOfIncorporation')
                        }
                        onDateChange={(date) => handleDateChange('dateOfIncorporation', date)}
                        {...register('dateOfIncorporation')}
                        invalid={!!formState.errors?.dateOfIncorporation && true}
                      />

                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.dateOfIncorporation ? false : true,
                        })}
                      >
                        Date is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">{dateOfIncorporation}</p>
                  )}
                </CCol>
              </fieldset>
            </CCol>

            <CCol xs={12} sm={6}>
              <fieldset className="p-3 border border-1">
                <legend className="fs-6 float-none w-auto px-2 text-primary">Tax Details</legend>
                <CCol xs={12}>
                  <CFormLabel
                    htmlFor="taxIdentificationNumber"
                    className={clsx({
                      'text-error': !!formState.errors?.taxIdentificationNumber,
                    })}
                  >
                    <strong>Tax Identification Number (TIN)</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        id="taxIdentificationNumber"
                        type="text"
                        placeholder="Enter company TIN number."
                        {...register('taxIdentificationNumber')}
                        invalid={!!formState.errors?.taxIdentificationNumber && true}
                      />

                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.taxIdentificationNumber ? false : true,
                        })}
                      >
                        TIN is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">
                      {props?.businessInfoData?.data?.data.taxIdentificationNumber}
                    </p>
                  )}
                </CCol>

                <CCol xs={12} className="mt-3">
                  <CFormLabel
                    htmlFor="VATRegistrationNumber"
                    className={clsx({
                      'text-error': !!formState.errors?.vatNumber,
                    })}
                  >
                    <strong>VAT Registration Number</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormInput
                        type="text"
                        id="vatNumber"
                        placeholder="Enter VAT registration number."
                        {...register('vatNumber')}
                        invalid={!!formState.errors?.vatNumber && true}
                      />

                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.vatNumber ? false : true,
                        })}
                      >
                        VAT is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">{props?.businessInfoData?.data?.data.vatNumber}</p>
                  )}
                </CCol>
              </fieldset>
              <br />
              <fieldset className="p-3 border border-1">
                <legend className="fs-6 float-none w-auto px-2 text-primary">
                  License Details
                </legend>
                <CCol xs={12}>
                  <CFormLabel htmlFor="businessRegulator">
                    <strong>Business Regulator</strong>
                  </CFormLabel>
                  {props.isEditable ? (
                    <>
                      <CFormSelect
                        id="regulatorId"
                        type="text"
                        options={regulatorsOptions}
                        placeholder="Enter business regulator."
                        {...register('regulatorId')}
                        invalid={!!formState.errors?.regulatorId && true}
                      />

                      <CFormText
                        component="span"
                        className={clsx({
                          'text-error': true,
                          'd-none': !!formState.errors?.regulatorId ? false : true,
                        })}
                      >
                        Regulator is required.
                      </CFormText>
                    </>
                  ) : (
                    <p className="m-0 pb-1">
                      {getNameById_util(
                        props?.businessInfoData?.data?.data.regulatorId,
                        props?.regulators,
                      )}
                    </p>
                  )}
                </CCol>

                {
                  notRegulated ? "" :

                    <>
                      {/* license number */}
                      <CCol xs={12} className="mt-3">
                        <CFormLabel
                          htmlFor="licenseNumber"
                          className={clsx({
                            'text-error': !!formState.errors?.licenseNumber,
                          })}
                        >
                          <strong>License Number</strong>
                        </CFormLabel>
                        {props.isEditable ? (
                          <>
                            <CFormInput
                              type="text"
                              id="licenseNumber"
                              placeholder="Enter license number."
                              {...register('licenseNumber')}
                              invalid={!!formState.errors?.licenseNumber && true}
                            />
                            <CFormText
                              component="span"
                              className={clsx({
                                'text-error': true,
                                'd-none': !!formState.errors?.licenseNumber ? false : true,
                              })}
                            >
                              License number is required.
                            </CFormText>
                          </>
                        ) : (
                          <p className=" m-0 ">
                            {props?.businessInfoData?.data?.data.licenseInfo?.number}
                          </p>
                        )}
                      </CCol>


                      <CRow className=" mt-3">
                        <CCol xs={12} sm={6}>
                          <CFormLabel
                            htmlFor="licenseIssueDate"
                            className={clsx({
                              'text-error': !!formState.errors?.licenseIssueDate,
                            })}
                          >
                            <strong>License Issued Date</strong>
                          </CFormLabel>
                          {props.isEditable ? (
                            <>
                              <CDatePicker
                                inputReadOnly
                                id="licenseIssueDate"
                                locale="en-US"
                                date={
                                  getValues('licenseIssueDate') === 'N/A'
                                    ? new Date()
                                    : getValues('licenseIssueDate')
                                }
                                onDateChange={(date) => handleDateChange('licenseIssueDate', date)}
                                {...register('licenseIssueDate')}
                                invalid={!!formState.errors?.licenseIssueDate && true}
                              />
                              <CFormText
                                component="span"
                                className={clsx({
                                  'text-error': true,
                                  'd-none': !!formState.errors?.licenseIssueDate ? false : true,
                                })}
                              >
                                License issued date is required.
                              </CFormText>
                            </>
                          ) : (
                            <p className="m-0 pb-1">{licenseIssueDate}</p>
                          )}
                        </CCol>
                        <CCol xs={12} sm={6}>
                          <CFormLabel
                            htmlFor="licenseExpiryDate"
                            className={clsx({
                              'text-error': !!formState.errors?.licenseExpiryDate,
                            })}
                          >
                            <strong>License Expiry Date</strong>
                          </CFormLabel>
                          {props.isEditable ? (
                            <>
                              <CDatePicker
                                inputReadOnly
                                id="licenseExpiryDate"
                                locale="en-US"
                                minDate={new Date()}
                                date={
                                  getValues('licenseExpiryDate') === 'N/A'
                                    ? new Date()
                                    : getValues('licenseExpiryDate')
                                }
                                {...register('licenseExpiryDate')}
                                onDateChange={(date) => handleDateChange('licenseExpiryDate', date)}
                                invalid={!!formState.errors?.licenseExpiryDate && true}
                              />

                              <CFormText
                                component="span"
                                className={clsx({
                                  'text-error': true,
                                  'd-none': !!formState.errors?.licenseExpiryDate ? false : true,
                                })}
                              >
                                License expiry date is required.
                              </CFormText>
                            </>
                          ) : (
                            <p className="m-0 pb-1">{licenseExpiryDate}</p>
                          )}
                        </CCol>
                      </CRow>
                    </>
                }
              </fieldset>
            </CCol>
          </CRow>
          {props.isEditable ? (
            <CFooter className="position-sticky left-0 bottom-0 w-100 float-right justify-content-end p-4">
              <CButton
                color="info"
                type="button"
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

export default BusinessInfo
