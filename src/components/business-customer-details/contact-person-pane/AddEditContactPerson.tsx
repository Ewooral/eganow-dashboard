// @ts-nocheck
import { EmptyObject, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'

import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormText,
  CSpinner,
  CCol,
  CRow,
} from '@coreui/react-pro'

import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { GrSave } from 'react-icons/gr'
import { useSnackbar } from '@/store'
import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'
import { DirectorPosition } from '@/protos/generated/eganow/api/merchant/onboarding_entity_pb'
import { formatEnum_util } from '@/util'
import { generateOptions } from '@/helpers'

/*
 *
 * Add Edit User Component
 *
 */
const AddEditContactPerson = (props: UserProps) => {
  /* const { createUser, updateCustomer } = customerAccountGRPC()
  const userInfo = useCustomerInfoStore((state) => state.customerInfo)*/

  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)
  /* UseForm */
  const { register, reset, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  const [contactPersonPositionOptions, setcontactPersonPositionsOptions] = useState<
    UserTypeOptionsType[]
  >([])

  const { addBusinessContactPerson, updateBusinessContactPerson } = MerchantAccountSvc()

  useEffect(() => {
    if (props.data?.type === 'new') {
      setValue('userrole', 'customer_service')
      setValue('type', 'new')
    }

    if (props.data?.type === 'edit') {
      const { type, lastName, email, firstName, mobileNumber, position } = props?.data
      //Assigning user data to useForm values
      setValue('type', type)
      setValue('lastName', lastName)
      setValue('firstName', firstName)
      setValue('email', email)
      setValue('mobileNumber', mobileNumber)
      setValue('position', position)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data, props.data?.type])

  function generateContactPersonPositionsOptions() {
    const formattedEnum = formatEnum_util(DirectorPosition, 2)

    const generatedOptions = generateOptions(formattedEnum)

    setcontactPersonPositionsOptions(generatedOptions)
  }

  useEffect(() => {
    generateContactPersonPositionsOptions()
  }, [])

  const onSubmit = async (values: UserType) => {
    try {
      if (values.type === 'new') {
        //Getting all the param
        const response = await addBusinessContactPerson(values)

        //Show response if error occurs and return error.
        if (!response) {
          //Throw response on error.
          throw new Error(response.message)
        }

        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'User Management',
          messages: response.value,
          show: true,
        } as SnackbarDataType)
        //Resetting the form
        reset(defaultFormValues)
        //Refetch users
        props.callback()

        //Close modal after creating new user
        props.modalClose()
      }

      if (values.type === 'edit') {
        const editedData = {
          contactId: props?.data?.contactId,
          ...values,
        }
        // Getting all the param
        const response = await updateBusinessContactPerson(editedData)
        //Show response if error occurs and return error.
        if (!response) {
          //Throw response on error.
          throw new Error(response.message)
        }
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'User Management',
          messages: response.value,
          show: true,
        } as SnackbarDataType)
        //Refetch users
        props.callback()
        //Close modal after creating new user
        props.modalClose()
      }
    } catch (err) {
      //Show response on error.

      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: err.message,
        show: true,
      } as SnackbarDataType)
    }
  }
  /* *************************************************************************************** */

  return (
    <CModal
      alignment="center"
      visible={true}
      backdrop="static"
      onClose={props.modalClose}
      aria-labelledby="VerticallyCenteredExample"
      size="lg"
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">
          {/*  <CIcon icon={cilUserPlus} size="xl" className="mr-2" />{' '} */}
          <strong>
            {' '}
            {props.data?.type === 'new' ? 'Add new contact person' : 'Update contact person'}
          </strong>
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <fieldset className="p-3 border border-2">
          <legend className="fs-6 float-none w-auto px-2 text-primary">Contact Persons Info</legend>
          <CForm noValidate>
            <CRow className="g-3">
              <CCol xs={12} sm={6} className="mb-4">
                <CFormLabel
                  htmlFor="firstName"
                  className={classNames({
                    'text-error': !!formState.errors?.firstName,
                  })}
                >
                  <strong> First Name</strong>
                </CFormLabel>
                <CFormInput
                  id="firstName"
                  placeholder="Enter your first name."
                  {...register('firstName')}
                  valid={
                    formState.dirtyFields?.firstName && !!!formState.errors?.firstName
                      ? true
                      : false
                  }
                  invalid={!!formState.errors?.firstName && true}
                />
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.firstName ? false : true,
                  })}
                >
                  First name is required.
                </CFormText>
              </CCol>
              <CCol xs={12} sm={6} className="mb-4">
                <CFormLabel
                  htmlFor="lastName"
                  className={classNames({
                    'text-error': !!formState.errors?.lastName,
                  })}
                >
                  <strong> Last Name</strong>
                </CFormLabel>
                <CFormInput
                  id="lastName"
                  placeholder="Enter your last name."
                  {...register('lastName')}
                  valid={
                    formState.dirtyFields?.lastName && !!!formState.errors?.lastName ? true : false
                  }
                  invalid={!!formState.errors?.lastName && true}
                />
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.lastName ? false : true,
                  })}
                >
                  Last name is required.
                </CFormText>
              </CCol>
            </CRow>

            <CRow className="g-3">
              <CCol xs={12} sm={6} className="mb-4">
                <CFormLabel
                  htmlFor="email"
                  className={classNames({
                    'text-error': !!formState.errors?.email,
                  })}
                >
                  <strong> Email Address</strong>
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="email"
                  placeholder="Enter email address here."
                  {...register('email')}
                  valid={formState.dirtyFields?.email && !!!formState.errors?.email ? true : false}
                  invalid={!!formState.errors?.email && true}
                />

                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.email ? false : true,
                  })}
                >
                  Email address is required.
                </CFormText>
              </CCol>
              <CCol xs={12} sm={6} className="mb-4">
                <CFormLabel
                  htmlFor="lastName"
                  className={classNames({
                    'text-error': !!formState.errors?.mobileNumber,
                  })}
                >
                  <strong> Mobile No.</strong>
                </CFormLabel>
                <CFormInput
                  id="lastName"
                  placeholder="Enter your mobile no."
                  {...register('mobileNumber')}
                  valid={
                    formState.dirtyFields?.mobileNumber && !!!formState.errors?.mobileNumber
                      ? true
                      : false
                  }
                  invalid={!!formState.errors?.mobileNumber && true}
                />
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.mobileNumber ? false : true,
                  })}
                >
                  Mobile no is required.
                </CFormText>
              </CCol>
            </CRow>

            <CRow className="mb-4">
              <CCol>
                <CFormLabel
                  htmlFor="position"
                  className={classNames({
                    'text-error': !!formState.errors?.position,
                  })}
                >
                  <strong>Position</strong>
                </CFormLabel>
                {/* <select name="" id="" {...register('position')}>
                 
                  {contactPersonPositionOptions.map((item)=>{
                  return <option value={item.value}>{item.label}</option>
                  })}
                </select> */}
                <CFormSelect
                  {...register('position')}
                  valid={
                    formState.dirtyFields?.position && !!!formState.errors?.position ? true : false
                  }
                  invalid={!!formState.errors?.position && true}
                  options={contactPersonPositionOptions}
                />
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.position ? false : true,
                  })}
                >
                  Position is required.
                </CFormText>
              </CCol>
            </CRow>
          </CForm>
        </fieldset>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="info"
          shape="rounded-pill"
          className="text-white"
          onMouseUp={handleSubmit(onSubmit)}
          disabled={formState.isSubmitting}
        >
          {props.data?.type === 'new' ? 'Save' : 'Save Changes'}
          {formState.isSubmitting ? (
            <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
          ) : (
            <GrSave className="ms-2 mb-1" />
          )}
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default AddEditContactPerson
