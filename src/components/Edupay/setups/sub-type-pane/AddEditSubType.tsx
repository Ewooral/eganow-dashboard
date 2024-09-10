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
import { validationSchema } from './subTypeValidationSchema'
import { subTypeDefaultFormValues } from './subTypeDefaultFormValues'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { GrSave } from 'react-icons/gr'

interface AddEditSchoolProps {
  modalClose: () => void
  data?: any
  callback?: () => void
}

const schoolTypes = [
  { label: 'Select Class type', value: '', disabled: true },
  { label: 'PRESCHOOL', value: 'PRESCHOOL' },
  { label: 'PRIMARY', value: 'PRIMARY' },
  { label: 'JUNIOR HIGH', value: 'JUNIOR HIGH' },
  { label: 'SENIOR HIGH', value: 'SENIOR HIGH' },
  { label: 'TERTIARY', value: 'TERTIARY' },
]

// const schoolTypes = ['PRESCHOOL', 'PRIMARY', 'JUNIOR HIGH', 'SENIOR HIGH', 'TERTIARY']
function AddEditSubType(props: AddEditSchoolProps) {
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  /* UseForm */
  const { register, reset, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: subTypeDefaultFormValues,
  })

  async function onSubmit(values: any) {
    try {
      console.log(values)
    } catch (error) {}
  }

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
          <strong> {props.data?.type === 'new' ? 'Add new Sub Type' : 'Update Sub Type'}</strong>
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm noValidate onSubmit={handleSubmit(onSubmit)}>
          <CRow className="g-3">
            {/** Name */}
            <CCol xs={12} className="mb-3">
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
                placeholder="Enter the name."
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
            <CCol xs={12} className="mb-3">
              <CFormLabel
                htmlFor="name"
                className={classNames({
                  'text-error': !!formState.errors?.name,
                })}
              >
                <strong>Class Type</strong>
              </CFormLabel>

              <CFormSelect
                id="name"
                {...register('name')}
                valid={formState.dirtyFields?.name && !!!formState.errors?.name ? true : false}
                invalid={!!formState.errors?.name && true}
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
                  'd-none': !!formState.errors?.name ? false : true,
                })}
              >
                Class Type is required.
              </CFormText>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>{' '}
      <CModalFooter>
        <CButton
          className="eganow-secondary-btn px-3"
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

export default AddEditSubType
