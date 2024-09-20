import { useSnackbar } from '@/store'
import {
  CButton,
  CCol,
  CDateRangePicker,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormText,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CSpinner,
} from '@coreui/react-pro'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { GrSave } from 'react-icons/gr'

interface AddEditSchoolProps {
  modalClose: () => void
  data?: any
  callback?: () => void
}

const levelTypesArray: string[] = ['PRESCHOOL', 'PRIMARY', 'JUNIOR HIGH', 'SENIOR HIGH', 'TERTIARY']
function AddEditSchool(props: AddEditSchoolProps) {
  const [levelTypes, setLevelTypes] = useState<any>()
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  /* UseForm */
  const { register, reset, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  async function onSubmit(values: any) {
    try {
      console.log(values)
    } catch (error) {}
  }

  useEffect(() => {
    setLevelTypes(levelTypesArray)
  }, [levelTypes, setLevelTypes])

  return (
    <CModal
      alignment="center"
      visible={true}
      backdrop="static"
      onClose={props.modalClose}
      aria-labelledby="VerticallyCenteredExample"
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">
          {/*  <CIcon icon={cilUserPlus} size="xl" className="mr-2" />{' '} */}
          <strong> {props.data?.type === 'new' ? 'Add new school' : 'Update school'}</strong>
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <CForm noValidate>
          {/**school name */}
          <CCol xs={12} className="mb-3">
            <CFormLabel
              htmlFor="schoolName"
              className={classNames({
                'text-error': !!formState.errors?.schoolName,
              })}
            >
              <strong> School Name</strong>
            </CFormLabel>
            <CFormInput
              id="schoolName"
              type="text"
              placeholder="Enter your school name."
              {...register('schoolName')}
              valid={
                formState.dirtyFields?.schoolName && !!!formState.errors?.schoolName ? true : false
              }
              invalid={!!formState.errors?.schoolName && true}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.schoolName ? false : true,
              })}
            >
              School name is required.
            </CFormText>
          </CCol>

          <CRow className="g-3">
            {/** school types */}
            <CCol xs={12} className="mb-3">
              <CFormLabel
                htmlFor="levelType"
                className={classNames({
                  'text-error': !!formState.errors?.levelType,
                })}
              >
                <strong> Level type</strong>
              </CFormLabel>
              <CFormSelect
                // {...register('levelType')}
                onChange={(e) => {
                  setValue('levelType', e.target.value, { shouldValidate: true })
                }}
                valid={
                  formState.dirtyFields?.levelType && !!!formState.errors?.levelType ? true : false
                }
                invalid={!!formState.errors?.levelType && true}
                options={levelTypes}
              />
            </CCol>
          </CRow>
          {/**description */}
          <CCol xs={12} className="mb-3">
            <CFormLabel
              htmlFor="description"
              className={classNames({
                'text-error': !!formState.errors?.description,
              })}
            >
              <strong> Description</strong>
            </CFormLabel>
            <CFormTextarea
              id="description"
              placeholder="Enter your description."
              {...register('description')}
              valid={
                formState.dirtyFields?.description && !!!formState.errors?.description
                  ? true
                  : false
              }
              invalid={!!formState.errors?.description && true}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.description ? false : true,
              })}
            >
              description is required.
            </CFormText>
          </CCol>

          <CRow>
            <CCol xs={12} className="mb-3">
              <CFormLabel
                htmlFor="billingCycleName"
                className={classNames({
                  'text-error': !!formState.errors?.billingCycleName,
                })}
              >
                <strong> Billing cycle name</strong>
              </CFormLabel>
              <CFormInput
                id="schoolName"
                type="text"
                placeholder="Enter your billing cycle name."
                {...register('billingCycleName')}
                valid={
                  formState.dirtyFields?.billingCycleName && !!!formState.errors?.billingCycleName
                    ? true
                    : false
                }
                invalid={!!formState.errors?.billingCycleName && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.billingCycleName ? false : true,
                })}
              >
                Billing cycle name is required.
              </CFormText>
            </CCol>
            <CCol xs={12} className="mb-4">
              <CFormLabel htmlFor="billingCycle">
                <strong> Billing cycle range</strong>
              </CFormLabel>
              <CDateRangePicker
                locale="en-US"
                required
                invalid={!!formState.errors?.startDate && true}
                onStartDateChange={(date: any) => {
                  setValue('startDate', date)
                }}
                onEndDateChange={(date: any) => {
                  setValue('endDate', date)
                }}
              />
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton
          className=" eganow-secondary-btn px-3"
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

export default AddEditSchool
