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
  CDatePicker,
  CImage,
  CNav,
  CNavItem,
  CNavLink,
  CLoadingButton,
  CTabPane,
  CTabContent,
} from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilUserPlus } from '@coreui/icons'

import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { GrSave } from 'react-icons/gr'

const userRoleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Customer Service', value: 'customer_service' },
]
/*
 *
 * Add Edit User Component
 *
 */
const AddEditDirectorsShareholders = (props: UserProps) => {
   const [activeKey, setActiveKey] = useState(1)
  /* const { createUser, updateCustomer } = customerAccountGRPC()
  const userInfo = useCustomerInfoStore((state) => state.customerInfo)
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar) */
  /* UseForm */
  const { register, reset, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  const [memberTypeOptions, setMemberTypeOptions] = useState<UserTypeOptionsType[]>([])

  /*   useEffect(() => {
    if (props.data?.type === 'new') {
      setValue('createdbyupdatedbymail', userInfo.emailaddress)
      setValue('membertype', userInfo.membertype)
      setValue('userrole', 'customer_service')
      // Setting Role Option
      createMemberTypeOptions(userInfo.membertype)
    }

    if (props.data?.type === 'edit') {
      const { type, fullname, emailaddress, status, userrole, membertype } = props.data
      //Assigning user data to useForm values
      setValue('type', type)
      setValue('fullname', fullname)
      setValue('emailaddress', emailaddress)
      setValue('status', status)
      setValue('membertype', membertype)
      setValue('userrole', userrole)
      setValue('createdbyupdatedbymail', userInfo.emailaddress)
      //Creating the customer option
      createMemberTypeOptions(membertype)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data, userInfo.userrole, userInfo.emailaddress])
 */
  
  const onSubmit = async (values: UserType) => {
    /*  try {
      if (values.type === 'new') {
        //Getting all the param
        const response = await createUser(values)
        //Show response if error occurs and return error.
        if (!response.status) {
          //Throw response on error.
          throw new Error(response.message)
        }
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'User Management',
          messages: response.message,
          show: true,
        } as SnackbarDataType)
        //Resetting the form
        reset(defaultFormValues)
        //Refetch users
        props.callback()
      }

      if (values.type === 'edit') {
        //Getting all the param
        const response = await updateCustomer(values)
        //Show response if error occurs and return error.
        if (!response.status) {
          //Throw response on error.
          throw new Error(response.message)
        }
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'User Management',
          messages: response.message,
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
    } */
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
      className='rounded-5'
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">
          {/*  <CIcon icon={cilUserPlus} size="xl" className="mr-2" />{' '} */}
          <strong>
            {' '}
            {props.data?.type === 'new'
              ? 'Add new director/ shareholder'
              : 'Update director/ shareholder'}
          </strong>
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <CNav variant="tabs" className="w-100">
          <CNavItem>
            <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
              <strong>Director/ Shareholder</strong>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
              <strong>Passport & ID Card</strong>
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent className="border border-top-0 p-4">
          <CTabPane
            role="tabpanel"
            aria-labelledby="director-shareholder-tab"
            visible={activeKey === 1}
          >
              <CForm noValidate>
                <CRow className="g-3">
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="fullname"
                      className={classNames({
                        'text-error': !!formState.errors?.fullname,
                      })}
                    >
                      <strong> First Name</strong>
                    </CFormLabel>
                    <CFormInput
                      id="fullname"
                      placeholder="Enter your full name."
                      {...register('fullname')}
                      valid={
                        formState.dirtyFields?.fullname && !!!formState.errors?.fullname
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.fullname && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.fullname ? false : true,
                      })}
                    >
                      Full name is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="fullname"
                      className={classNames({
                        'text-error': !!formState.errors?.fullname,
                      })}
                    >
                      <strong> First Name</strong>
                    </CFormLabel>
                    <CFormInput
                      id="fullname"
                      placeholder="Enter your full name."
                      {...register('fullname')}
                      valid={
                        formState.dirtyFields?.fullname && !!!formState.errors?.fullname
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.fullname && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.fullname ? false : true,
                      })}
                    >
                      Full name is required.
                    </CFormText>
                  </CCol>
                </CRow>

                <CRow className="g-3">
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="emailaddress"
                      className={classNames({
                        'text-error': !!formState.errors?.emailaddress,
                      })}
                    >
                      <strong> Email Address</strong>
                    </CFormLabel>
                    <CFormInput
                      type="email"
                      id="emailaddress"
                      placeholder="Enter email address here."
                      {...register('emailaddress')}
                      valid={
                        formState.dirtyFields?.emailaddress && !!!formState.errors?.emailaddress
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.emailaddress && true}
                    />

                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.emailaddress ? false : true,
                      })}
                    >
                      Email address is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="fullname"
                      className={classNames({
                        'text-error': !!formState.errors?.fullname,
                      })}
                    >
                      <strong> Mobile No.</strong>
                    </CFormLabel>
                    <CFormInput
                      id="fullname"
                      placeholder="Enter your full name."
                      {...register('fullname')}
                      valid={
                        formState.dirtyFields?.fullname && !!!formState.errors?.fullname
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.fullname && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.fullname ? false : true,
                      })}
                    >
                      Full name is required.
                    </CFormText>
                  </CCol>
                </CRow>

                <CRow className="g-3">
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>ID Type</strong>
                    </CFormLabel>
                    <CFormSelect
                      {...register('membertype')}
                      valid={
                        formState.dirtyFields?.membertype && !!!formState.errors?.membertype
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.membertype && true}
                      options={memberTypeOptions}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>ID Number</strong>
                    </CFormLabel>
                    <CFormInput
                      id="fullname"
                      placeholder="Enter your full name."
                      {...register('fullname')}
                      valid={
                        formState.dirtyFields?.fullname && !!!formState.errors?.fullname
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.fullname && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                </CRow>

                <CRow className="g-3">
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>ID Expiry Date</strong>
                    </CFormLabel>
                    <CDatePicker
                      id="licenseIssuedDate"
                      date="2022/2/16"
                      label="Date"
                      locale="en-US"
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>ID Place Of Issue</strong>
                    </CFormLabel>
                    <CFormInput
                      id="fullname"
                      placeholder="Enter your full name."
                      {...register('fullname')}
                      valid={
                        formState.dirtyFields?.fullname && !!!formState.errors?.fullname
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.fullname && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                </CRow>

                <CRow className="g-3">
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>Director Or Shareholder (BO)</strong>
                    </CFormLabel>
                    <CFormSelect
                      {...register('membertype')}
                      valid={
                        formState.dirtyFields?.membertype && !!!formState.errors?.membertype
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.membertype && true}
                      options={memberTypeOptions}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>AML Status Check</strong>
                    </CFormLabel>
                    <CFormInput
                      id="fullname"
                      placeholder="Enter your full name."
                      {...register('fullname')}
                      valid={
                        formState.dirtyFields?.fullname && !!!formState.errors?.fullname
                          ? true
                          : false
                      }
                      invalid={!!formState.errors?.fullname && true}
                    />
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                </CRow>
              </CForm>
          </CTabPane>

          <CTabPane
            role="tabpanel"
            aria-labelledby="passport-id-card-tab"
            visible={activeKey === 2}
          >
              <CForm noValidate>
                <CRow className="g-3">
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>Passport Image</strong>
                    </CFormLabel>

                    <div>
                      <CImage rounded thumbnail src="/images/passport.png" />
                    </div>

                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                  <CCol xs={12} sm={6} className="mb-4">
                    <CFormLabel
                      htmlFor="membertype"
                      className={classNames({
                        'text-error': !!formState.errors?.membertype,
                      })}
                    >
                      <strong>ID Card Image</strong>
                    </CFormLabel>
                    <div>
                      <CImage rounded thumbnail src="/images/id-card.jpg" />
                    </div>
                    <CFormText
                      component="span"
                      className={classNames({
                        'text-error': true,
                        'd-none': !!formState.errors?.membertype ? false : true,
                      })}
                    >
                      Member type is required.
                    </CFormText>
                  </CCol>
                </CRow>
              </CForm>
          </CTabPane>
        </CTabContent>
      </CModalBody>

      <CModalFooter>
        <CButton
          color="info"
          shape="rounded-pill"
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

export default AddEditDirectorsShareholders
