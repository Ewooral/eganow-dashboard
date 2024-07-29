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

const schoolTypes = ['PRESCHOOL', 'PRIMARY', 'JUNIOR HIGH', 'SENIOR HIGH', 'TERTIARY']

function AddEditSchool(props: AddEditSchoolProps) {
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  /* UseForm */
  const { register, reset, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  useEffect(() => {
    const data = props.data
    console.log(data)
    if (data.type != 'new') {
      setValue('itemname', data.Item_name)
      setValue('description', data.description)
      setValue('level', data.type)
    }
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
      // size="md"
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">
          {/*  <CIcon icon={cilUserPlus} size="xl" className="mr-2" />{' '} */}
          <strong> {props.data?.type === 'new' ? 'Add New Bill Item' : 'Update Bill Item'}</strong>
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <CForm noValidate>
          <CRow className="g-3">
            {/**school name */}
            <CCol xs={12} sm={12} className="mb-3">
              <CFormLabel
                htmlFor="itemname"
                className={classNames({
                  'text-error': !!formState.errors?.itemname,
                })}
              >
                <strong>Item name</strong>
              </CFormLabel>
              <CFormInput
                id="schoolName"
                type="text"
                placeholder="Enter your school name."
                {...register('itemname')}
                valid={
                  formState.dirtyFields?.itemname && !!!formState.errors?.itemname ? true : false
                }
                invalid={!!formState.errors?.itemname && true}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.itemname ? false : true,
                })}
              >
                Item name is required.
              </CFormText>
            </CCol>

            {/**description */}
            <CCol xs={12} sm={12} className="mb-3">
              <CForm>
                <CFormLabel
                  htmlFor="description"
                  className={classNames({
                    'text-error': !!formState.errors?.description,
                  })}
                >
                  <strong>Description</strong>
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
                  rows={2}
                ></CFormTextarea>
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.description ? false : true,
                  })}
                >
                  description is required.
                </CFormText>
              </CForm>
            </CCol>
          </CRow>

          <CRow className="g-3">
            {/** school types */}
            <CCol xs={12} sm={12} className="mb-3">
              <CFormLabel
                htmlFor="level"
                className={classNames({
                  'text-error': !!formState.errors?.level,
                })}
              >
                <strong>Level</strong>
              </CFormLabel>
              <CFormSelect
                // {...register('level')}
                // value={schoolTypes[3]}

                valid={formState.dirtyFields?.level && !!!formState.errors?.level ? true : false}
                onChange={(e) => {
                  setValue('level', e.target.value, { shouldValidate: true })
                }}
                invalid={!!formState.errors?.level && true}
                options={['Select an option', ...schoolTypes]}
              />
              <CFormText
                component="span"
                className={classNames({
                  'text-error': true,
                  'd-none': !!formState.errors?.level ? false : true,
                })}
              >
                level is required.
              </CFormText>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
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

export default AddEditSchool
