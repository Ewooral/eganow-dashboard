// @ts-nocheck
import { Controller, EmptyObject, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
import { BiErrorCircle } from 'react-icons/bi'
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
import clsx from 'clsx'
import { GrSave } from 'react-icons/gr'
import { formatEnum_util,toDataUrl_util } from '@/util'
import { generateOptions } from '@/helpers'
// IMPORT APi
import merchantDirectorShareholderAPI from '@/api/merchantDirectorShareholderAPI'
import {
  EMPTY_DEFAULT_OPTION,
  CUSTOMER_ID_TYPES_OPTIONS,
  DIRECTOR_POSITION_OPTIONS,
} from '@/constants'
import { useSnackbar } from '@/store'
// IMPORTING THE IMAGE UPLOAD BUTTON
import ImageUpload from '@/components/ImageUpload'
import { log } from 'console'
/*
 *
 * Add Edit User Component
 *
 */

const AddEditDirectorsShareholders = (props: UserProps) => {
  const CURRENT_DATE = new Date()
  const [activeKey, setActiveKey] = useState(1)
  const [showBackImageUpload, setShowBackImageUpload] = useState(true)
  // ADD AND UPDATE DIRECTORS APIs INIT
  const { addDirectorOrShareholder, updateDirectorOrShareholder } = merchantDirectorShareholderAPI()
  //snackbar component from zustand store
  const { showSnackbar } = useSnackbar()

  //USEFORM OBJECT
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState,
    control,
    watch,
    unregister,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  const frontImageWatch = watch('frontImage')
  const backImageWatch = watch('backImage')
  const portraitImageWatch = watch('portraitImage')
  const idTypeWatch = watch('idType')

  const twoImagesIdType = ["PASSPORT","DRIVERS_LICENSE","BANKID"]

  // FUNCTION TO HANDLE CHANGES IN THE DATE PICKER
  const handleDateChange = (date) => {
    const dateValue = date?.toISOString() //CONVERT DATE OBJECT TO STRING
    const formattedDate = dateValue?.split('T')[0] //REMOVE TIMESTAMP FROM STRING
    setValue('expiryDate', formattedDate, { shouldValidate: true })
  }

  useEffect(() => {
    if (props.data?.type === 'edit') {
      const {
        directorId,
        firstName,
        lastName,
        email,
        mobileNumber,
        identification,
        position,
        directorOrShareholderOrOtherType,
      } = props?.data

      console.log(identification)

      //Assigning user data to useForm values
      setValue('directorId', directorId)
      setValue('firstName', firstName)
      setValue('lastName', lastName)
      setValue('emailAddress', email)
      setValue('mobileNumber', mobileNumber)

      setValue('idType', identification.type)
      setValue('idNumber', identification.number)
      setValue('expiryDate', identification.expiryDate)
      setValue('placeOfIssue', identification.placeOfIssue)

      setValue('position', position)
      setValue('stakeHolderType', directorOrShareholderOrOtherType)

      toDataUrl_util(identification.frontImage, function(myBase64) {
          setValue('frontImage', myBase64)
      });
      toDataUrl_util(identification.backImage, function(myBase64) {
          setValue('backImage', myBase64)
      });
      toDataUrl_util(identification.portraitImage, function(myBase64) {
          setValue('portraitImage', myBase64)
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.data])


  // HANDLE FORM SUBMIT ( ADDING NEW RECORD OR UPDATING EXISTING RECORD)
  const onSubmit = async (values) => {

    try {
      const param = {
          directorId: values.directorId,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
          mobileNumber: values.mobileNumber,
          position: values.position,
          identification: {
            number: values.idNumber,
            expiryDate: values.expiryDate,
            placeOfIssue: values.placeOfIssue,
            type: values.idType,
            frontImage:  values.frontImage,
            backImage: twoImagesIdType.includes(values.idType) ?null : values.backImage,
            portraitImage: values.portraitImage,
          },
        }

      if (props.data?.type === 'new') {
        //Getting all the param
        const response = await addDirectorOrShareholder(param)
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'Director Or Shareholder',
          messages: response.message,
          show: true,
        } as SnackbarDataType)
        //Resetting the form
        reset(defaultFormValues)
        //Setting tab key to default
        setActiveKey(1)
        //Refetch users
        props.callback()
      }

      // IF THE EDIT BUTTON IS CLICKED
      if (props.data?.type === 'edit') {
      
        console.log(param)
        //PASSING VALUES TO API
        const response = await updateDirectorOrShareholder(param)
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'Director Or Shareholder',
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
        title: 'Director Or Shareholder',
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
      className="rounded-5"
      scrollable
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">
          {/*  <CIcon icon={cilUserPlus} size="xl" className="mr-2" />{' '} */}
          <strong>
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
            <CNavLink
              className={clsx({
                'text-error':
                  formState.errors?.frontImage && formState.errors.portraitImage ? true : false,
                'd-flex': true,
                'align-items-center': true,
                'gap-1': true,
              })}
              href="#"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              {formState.errors?.backImage && <BiErrorCircle />}
              <strong>UPLOAD IMAGES</strong>
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
                    className={clsx({
                      'text-error': !!formState.errors?.firstName,
                    })}
                  >
                    <strong> First Name</strong>
                  </CFormLabel>
                  <CFormInput
                    id="firstName"
                    placeholder="Enter your first name."
                    {...register('firstName')}
                    invalid={!!formState.errors?.firstName && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.lastName,
                    })}
                  >
                    <strong> Last Name</strong>
                  </CFormLabel>
                  <CFormInput
                    id="lastName"
                    placeholder="Enter your last name."
                    {...register('lastName')}
                    invalid={!!formState.errors?.lastName && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
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
                    invalid={!!formState.errors?.emailAddress && true}
                  />

                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.mobileNumber,
                    })}
                  >
                    <strong> Mobile No.</strong>
                  </CFormLabel>
                  <CFormInput
                    id="mobileNumber"
                    placeholder="Enter your full name."
                    {...register('mobileNumber')}
                    invalid={!!formState.errors?.mobileNumber && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.idType,
                    })}
                  >
                    <strong>ID Type</strong>
                  </CFormLabel>
                  <CFormSelect
                    options={EMPTY_DEFAULT_OPTION.concat(CUSTOMER_ID_TYPES_OPTIONS)}
                    {...register('idType')}
                    invalid={!!formState.errors?.idType && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.idNumber,
                    })}
                  >
                    <strong>ID Number</strong>
                  </CFormLabel>
                  <CFormInput
                    id="idNumber"
                    placeholder="Enter your Id number."
                    {...register('idNumber')}
                    invalid={!!formState.errors?.idNumber && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
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
                    minDate={CURRENT_DATE}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.placeOfIssue,
                    })}
                  >
                    <strong>ID Place Of Issue</strong>
                  </CFormLabel>
                  <CFormInput
                    id="placeOfIssue"
                    placeholder="Enter your full name."
                    {...register('placeOfIssue')}
                    invalid={!!formState.errors?.placeOfIssue && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.position,
                    })}
                  >
                    <strong>Position</strong>
                  </CFormLabel>
                  <CFormSelect
                    options={EMPTY_DEFAULT_OPTION.concat(DIRECTOR_POSITION_OPTIONS)}
                    {...register('position')}
                    invalid={!!formState.errors?.position && true}
                  />
                  <CFormText
                    component="span"
                    className={clsx({
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
                    className={clsx({
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
                    className={clsx({
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
                    className={clsx({
                      'text-error': !!formState.errors?.frontImage,
                    })}
                  >
                    <strong>Front Image</strong>
                  </CFormLabel>

                  {/* FRONT IMAGE */}
                  <ImageUpload
                    imgUrl={props?.data?.idInfo?.idFrontImage}
                    value={frontImageWatch}
                    setValue={(value) => setValue('frontImage', value, { shouldValidate: true })}
                  />

                  <CFormText
                    component="span"
                    className={clsx({
                      'text-error': true,
                      'd-none': !!formState.errors?.frontImage ? false : true,
                    })}
                  >
                    Front is required.
                  </CFormText>
                </CCol>

                {/* BACK IMAGE */}
                {(['BANKID', 'ID'].includes(idTypeWatch))? (
                  <CCol xs={12} sm={6} className={`mb-4`}>
                    <CFormLabel
                      htmlFor="membertype"
                      className={clsx({
                        'text-error': !!formState.errors?.backImage,
                      })}
                    >
                      <strong>Back Image</strong>
                    </CFormLabel>
                    <div>
                      {/* BACK IMAGE */}
                      <ImageUpload
                        imgUrl={props?.data?.idInfo?.idBackImage}
                        value={backImageWatch}
                        setValue={(value) => setValue('backImage', value, { shouldValidate: true })}
                      />
                    </div>
                    <CFormText
                      component="span"
                      className={clsx({
                        'text-error': true,
                        'd-none': !!formState.errors?.backImage ? false : true,
                      })}
                    >
                      Back image is required.
                    </CFormText>
                  </CCol>
                ) : null}

                {/* PORTRAIT IMAGE */}
                <CCol xs={12} sm={6} className="mb-4">
                  <CFormLabel
                    htmlFor="membertype"
                    className={clsx({
                      'text-error': !!formState.errors?.portraitImage,
                    })}
                  >
                    <strong>Passport Picture</strong>
                  </CFormLabel>
                  <div>
                    {/* PORTRAIT IMAGE  */}
                    <ImageUpload
                      imgUrl={props?.data?.idInfo?.portraitImage}
                      value={portraitImageWatch}
                      setValue={(value) =>
                        setValue('portraitImage', value, { shouldValidate: true })
                      }
                    />
                  </div>
                  <CFormText
                    component="span"
                    className={clsx({
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
          className="text-white"
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
