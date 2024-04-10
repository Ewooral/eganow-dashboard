// @ts-nocheck
import { EmptyObject, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'

import { BiErrorCircle } from "react-icons/bi";


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


import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { GrSave } from 'react-icons/gr'

import { DirectorOrShareholderOrOtherType, DirectorPosition, CustomerIDTypes } from '@/protos/generated/eganow/api/merchant/onboarding_entity_pb'
import { formatEnum_util } from '@/util'
import { generateOptions } from '@/helpers'

// IMPORT APi
import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'

import { useSnackbar } from '@/store'

// IMPORTING THE IMAGE UPLOAD BUTTON
import ImageUpload from '@/components/ImageUpload'
/*
 *
 * Add Edit User Component
 *
 */

const AddEditDirectorsShareholders = (props: UserProps) => {
  const [activeKey, setActiveKey] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false);

  const currentDate = new Date()


  // ADD AND UPDATE DIRECTORS APIs INIT 
  const { addDirectorOrShareholder, updateDirectorOrShareholder } = MerchantAccountSvc()

  //snackbar component from zustand store
  const { showSnackbar } = useSnackbar()

  // USERFORM OBJECT
  const { register, reset, handleSubmit, setValue, formState, getValues } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })


  // ENUM ARRAY LIST FORMATTED FOR ID TYPE
  const idTypesList = () => {
    let formatEnum = formatEnum_util(CustomerIDTypes, 3)
    let enums = generateOptions(formatEnum)
    return enums
  }
  // ENUM ARRAY LIST FORMATTED FOR DIRECTOR POSITIONS
  const directorPositionList = () => {
    let formatEnum = formatEnum_util(DirectorPosition, 2)
    let enums = generateOptions(formatEnum)
    return enums
  }
  // ENUM ARRAY LIST FORMATTED FOR DIRECTOR SHARE HOLDER 
  const directorShareholderList = () => {
    let formatEnum = formatEnum_util(DirectorOrShareholderOrOtherType, 6)
    let enums = generateOptions(formatEnum)
    return enums
  }


  // FUNCTION TO HANDLE CHANGES IN THE DATE PICKER
  const handleDateChange = (date) => {
    const dateValue = date?.toISOString(); //CONVERT DATE OBJECT TO STRING 
    const formattedDate = dateValue?.split("T")[0]; //REMOVE TIMESTAMP FROM STRING
    setValue('expiryDate', formattedDate, { shouldValidate: true });
  };



  useEffect(() => {
    if (props.data?.type === 'edit') {
      const { type, firstName, lastName, email, mobileNumber, idInfo: { idNumber, idExpiryDate, placeOfIssue, idType, idFrontImage, idBackImage, portraitImage }, position, directorShareholderType, directorId } = props.data

      //Assigning user data to useForm values
      setValue('type', type)
      setValue('firstName', firstName)
      setValue('lastName', lastName)
      setValue('emailAddress', email)
      setValue('mobileNumber', mobileNumber)
      setValue('idType', idType)
      setValue('idNumber', idNumber)
      setValue('expiryDate', idExpiryDate)
      setValue('placeOfIssue', placeOfIssue)
      setValue('position', position)
      setValue('stakeHolderType', directorShareholderType)
      setValue('directorId', directorId)
      setValue('frontImage', idFrontImage)
      setValue('backImage', idBackImage)
      setValue('portraitImage', portraitImage)

    }

  }, [props?.data])


  // HANDLE FORM SUBMIT ( ADDING NEW RECORD OR UPDATING EXISTING RECORD)
  const onSubmit = async (values) => {

    try {
      // IF ADD NEW BUTTON IS CLICKED
      if (values.type === 'new') {
        //Getting all the param
        const response = await addDirectorOrShareholder(values)
        //Show response if error occurs and return error.
        if (!response) {
          //Throw response on error.
          throw new Error(response.value)
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
        setFormSubmitted(true)
        setActiveKey(1)
        
        //Refetch users
        props.callback()
      }

      // IF THE EDIT BUTTON IS CLICKED
      if (values.type === 'edit') {
        //PASSING VALUES TO API
        const response = await updateDirectorOrShareholder(values)
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
      className='rounded-5'
      scrollable
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
          <CNavItem >

            <CNavLink className={classNames({
              'text-error': formState.errors?.backImage ? true : false,
              'd-flex' : true,
              'align-items-center' : true,
              'gap-1': true,

            })} href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
              {formState.errors?.backImage && <BiErrorCircle />}
              <strong >Passport & ID Card</strong>
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
                {/* FIRST NAME */}
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

                {/* LAST NAME */}
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
                      formState.dirtyFields?.lastName && !!!formState.errors?.lastName
                        ? true
                        : false
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
                {/* EMAIL */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="emailAddress"
                    className={classNames({
                      'text-error': !!formState.errors?.emailAddress,
                    })}
                  >
                    <strong> Email Address</strong>
                  </CFormLabel>
                  <CFormInput
                    type="email"
                    id="emailAddress"
                    placeholder="Enter email address here."
                    {...register('emailAddress')}
                    valid={
                      formState.dirtyFields?.emailAddress && !!!formState.errors?.emailAddress
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.emailAddress && true}
                  />

                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.emailAddress ? false : true,
                    })}
                  >
                    Email address is required.
                  </CFormText>
                </CCol>

                {/* MOBILE NUMBER */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="mobileNumber"
                    className={classNames({
                      'text-error': !!formState.errors?.mobileNumber,
                    })}
                  >
                    <strong> Mobile No.</strong>
                  </CFormLabel>
                  <CFormInput
                    id="mobileNumber"
                    placeholder="Enter your full name."
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
                    Phone number is required.
                  </CFormText>
                </CCol>
              </CRow>

              <CRow className="g-3">
                {/*SELECT ID TYPE */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="idType"
                    className={classNames({
                      'text-error': !!formState.errors?.idType,
                    })}
                  >
                    <strong>ID Type</strong>
                  </CFormLabel>
                  <CFormSelect
                    {...register('idType')}
                    valid={
                      formState.dirtyFields?.idType && !!!formState.errors?.idType
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.idType && true}
                    options={idTypesList()}
                  />
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.idType ? false : true,
                    })}
                  >
                    ID type is required.
                  </CFormText>
                </CCol>

                {/* ID NUMBER  */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="id_Number"
                    className={classNames({
                      'text-error': !!formState.errors?.idNumber,
                    })}
                  >
                    <strong>ID Number</strong>
                  </CFormLabel>
                  <CFormInput
                    id="idNumber"
                    placeholder="Enter your Id number."
                    {...register('idNumber')}
                    valid={
                      formState.dirtyFields?.idNumber && !!!formState.errors?.idNumber
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.idNumber && true}
                  />
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.idNumber ? false : true,
                    })}
                  >
                    Id number is required.
                  </CFormText>
                </CCol>
              </CRow>

              <CRow className="g-3">
                {/* EXPIRY DATE OF ID */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="expiryDate"
                    className={classNames({
                      'text-error': !!formState.errors?.expiryDate,
                    })}
                  >
                    <strong>ID Expiry Date</strong>
                  </CFormLabel>
                  <CDatePicker
                    id="expiryDate"
                    date={''}
                    locale="en-US"
                    {...register('expiryDate')}
                    onDateChange={handleDateChange}
                    inputReadOnly
                    invalid={!!formState.errors?.expiryDate}
                    minDate={currentDate}
                    
                    
                  />
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.expiryDate ? false : true,
                    })}
                  >
                    Expiry date is required.
                  </CFormText>
                </CCol>

                {/* PLACE OF ISSUE */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="placeOfIssue"
                    className={classNames({
                      'text-error': !!formState.errors?.placeOfIssue,
                    })}
                  >
                    <strong>ID Place Of Issue</strong>
                  </CFormLabel>
                  <CFormInput
                    id="placeOfIssue"
                    placeholder="Enter your full name."
                    {...register('placeOfIssue')}
                    valid={
                      formState.dirtyFields?.placeOfIssue && !!!formState.errors?.placeOfIssue
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.placeOfIssue && true}
                  />
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.placeOfIssue ? false : true,
                    })}
                  >
                    Place of issue is required.
                  </CFormText>
                </CCol>
              </CRow>

              <CRow className="g-3">
                {/* DIRECTOR POSITION */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="position"
                    className={classNames({
                      'text-error': !!formState.errors?.position,
                    })}
                  >
                    <strong>Position</strong>
                  </CFormLabel>
                  <CFormSelect
                    {...register('position')}
                    valid={
                      formState.dirtyFields?.position && !!!formState.errors?.position
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.position && true}
                    options={directorPositionList()}
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

                {/* <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="stakeHolderType"
                    className={classNames({
                      'text-error': !!formState.errors?.stakeHolderType,
                    })}
                  >
                    <strong>Director Or Shareholder (BO)</strong>
                  </CFormLabel>
                  <CFormSelect
                    {...register('stakeHolderType')}
                    valid={
                      formState.dirtyFields?.stakeHolderType && !!!formState.errors?.stakeHolderType
                        ? true
                        : false
                    }
                    invalid={!!formState.errors?.stakeHolderType && true}
                    options={directorShareholderList()}
                  />
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.stakeHolderType ? false : true,
                    })}
                  >
                    Type is required.
                  </CFormText>
                </CCol> */}
              </CRow>

            </CForm>
          </CTabPane>


          {/* IMAGE UPLOAD TAB */}
          <CTabPane
            role="tabpanel"
            aria-labelledby="passport-id-card-tab"
            visible={activeKey === 2}
          >
            <CForm noValidate>
              <CRow className="g-3">
                {/* FRONT IMAGE */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="membertype"
                    className={classNames({
                      'text-error': !!formState.errors?.frontImage,
                    })}
                  >
                    <strong>Front Image</strong>
                  </CFormLabel>

                  {/* FRONT IMAGE */}
                  <ImageUpload imgUrl={props?.data?.idInfo?.idFrontImage} setValue={setValue} fieldName={'frontImage'} formSubmitted={formSubmitted} />

                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.frontImage ? false : true,
                    })}
                  >
                    Front is required.
                  </CFormText>
                </CCol>


                {/* BACK IMAGE */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="membertype"
                    className={classNames({
                      'text-error': !!formState.errors?.backImage,
                    })}
                  >
                    <strong>Back Image</strong>
                  </CFormLabel>
                  <div>
                    {/* BACK IMAGE */}
                    <ImageUpload imgUrl={props?.data?.idInfo?.idBackImage} setValue={setValue} fieldName={'backImage'} formSubmitted={formSubmitted} />

                  </div>
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.backImage ? false : true,
                    })}
                  >
                    Back image is required.
                  </CFormText>
                </CCol>


                {/* PORTRAIT IMAGE */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="membertype"
                    className={classNames({
                      'text-error': !!formState.errors?.portraitImage,
                    })}
                  >
                    <strong>Portrait Image</strong>
                  </CFormLabel>
                  <div>
                    {/* PORTRAIT IMAGE  */}
                    <ImageUpload imgUrl={props?.data?.idInfo?.portraitImage} setValue={setValue} fieldName={'portraitImage'} formSubmitted={formSubmitted} />

                  </div>
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.portraitImage ? false : true,
                    })}
                  >
                    Portrait image is required.
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
          className='text-white'
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
