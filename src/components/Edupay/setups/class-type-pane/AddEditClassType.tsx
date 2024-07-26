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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CSpinner,
} from '@coreui/react-pro'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { ClassTypevalidationSchema } from './classTypevalidationSchema'
import { classTypedefaultFormValues } from './classTypedefaultFormValues'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { GrSave } from 'react-icons/gr'

interface AddEditClassTypeProps {
  modalClose: () => void
  data?: any
  callback?: () => void
}
const schoolTypes = [
  { label: 'Select school type', value: '', disabled: true },
  { label: 'PRESCHOOL', value: 'PRESCHOOL' },
  { label: 'PRIMARY', value: 'PRIMARY' },
  { label: 'JUNIOR HIGH', value: 'JUNIOR HIGH' },
  { label: 'SENIOR HIGH', value: 'SENIOR HIGH' },
  { label: 'TERTIARY', value: 'TERTIARY' },
]
// const schoolTypes = ['PRESCHOOL', 'PRIMARY', 'JUNIOR HIGH', 'SENIOR HIGH', 'TERTIARY']
const schoolNames = [
  { label: 'Select school name', value: '', disabled: true },
  { label: 'PENTECOST UNIVERSITY', value: 'PENTECOST UNIVERSITY' },
  { label: 'SAINT PETERS MISSION SCHOOL', value: 'SAINT PETERS MISSION SCHOOL' },
  { label: 'OKUKU MONTESSORI PRESCHOOL', value: 'OKUKU MONTESSORI PRESCHOOL' },
]
function AddEditClassType(props: AddEditClassTypeProps) {
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  /* UseForm */
  const { register, reset, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: yupResolver(ClassTypevalidationSchema),
    mode: 'onChange',
    defaultValues: classTypedefaultFormValues,
  })

  async function onSubmit(values: any) {
    try {
      console.log(values)
      showSnackbar({
        text: 'Class type added successfully',
        severity: 'success',
      })
    } catch (error) {}
  }

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
          <strong> {props.data?.type === 'new' ? 'Add Class Type' : 'Update Class Type'}</strong>
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <fieldset className="p-3 border">
          <legend className="fs-6 float-none w-auto px-2 text-primary">Class Type Info</legend>
          <CForm noValidate onSubmit={handleSubmit(onSubmit)}>
            <CRow className="g-3">
              {/** Name */}
              <CCol xs={12} className="mb-4">
                <CFormLabel
                  htmlFor="name"
                  className={classNames({
                    'text-error': !!formState.errors?.name,
                  })}
                >
                  <strong>Name</strong>
                </CFormLabel>
                <CFormInput
                  id="name"
                  type="text"
                  placeholder="Enter the class/level/stage/grade name."
                  {...register('name')}
                  valid={formState.dirtyFields?.name && !!!formState.errors?.name ? true : false}
                  invalid={!!formState.errors?.name && true}
                />
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.name ? false : true,
                  })}
                >
                  Name is required.
                </CFormText>
              </CCol>

              {/** Type */}
              <CCol xs={12} className="mb-4">
                <CFormLabel
                  htmlFor="type"
                  className={classNames({
                    'text-error': !!formState.errors?.type,
                  })}
                >
                  <strong>Type</strong>
                </CFormLabel>

                <CFormSelect
                  id="type"
                  {...register('type')}
                  valid={formState.dirtyFields?.type && !!!formState.errors?.type ? true : false}
                  invalid={!!formState.errors?.type && true}
                  aria-label="Default select example"
                  defaultValue=""
                >
                  {schoolTypes.map((type) => (
                    <option key={type.value} value={type.value} disabled={type.disabled}>
                      {type.label}
                    </option>
                  ))}
                </CFormSelect>

                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.type ? false : true,
                  })}
                >
                  Type is required.
                </CFormText>
              </CCol>

              {/** School */}
              <CCol xs={12} className="mb-4">
                <CFormLabel
                  htmlFor="school"
                  className={classNames({
                    'text-error': !!formState.errors?.school,
                  })}
                >
                  <strong>School</strong>
                </CFormLabel>

                <CFormSelect
                  id="school"
                  {...register('school')}
                  valid={formState.dirtyFields?.school && !!!formState.errors?.school ? true : false}
                  invalid={!!formState.errors?.school && true}
                  aria-label="Default select example"
                  defaultValue=""
                >
                  {schoolNames.map((type) => (
                    <option key={type.value} value={type.value} disabled={type.disabled}>
                      {type.label}
                    </option>
                  ))}
                </CFormSelect>
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.school ? false : true,
                  })}
                >
                  School is required.
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

export default AddEditClassType
