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
  CFormText,
  CSpinner,
  CFormTextarea,
  CFormSelect,
} from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilUserPlus, cilVoiceOverRecord } from '@coreui/icons'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { GrSave } from 'react-icons/gr'
import { useCustomerInfoStore, useSnackbar } from '@/store'
/* import agentMobileWebSvcGRPC from '@/api/agentMobileWebSvcGRPC' */

import ViewAgentPIN from '@/components/add-or-edit-agents/ViewAgentPIN'
/*
 *
 * Add Edit Agent Component
 *
 */
const AddEditAgents = (props: AgentModalProps) => {
  /* const { createAgents, updateAgent } = agentMobileWebSvcGRPC() */
  /*  const userInfo = useCustomerInfoStore((state) => state.customerInfo) */
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)
  /* UseForm */
  const { register, reset, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  /*  useEffect(() => {
    if (props.data?.type === 'edit') {
      const { type, mobilenumber, agentname, agentid } = props.data
      //Assigning user data to useForm values
    
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]) */

  const onSubmit = async (values: UserType) => {
    /*  try {
      if (values.type === 'new') {
        //Getting all the param
        const response = await createAgents(values)
        //Show response if error occurs and return error.
        if (!response.status) {
          //Throw response on error.
          throw new Error(response.message)
        }
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'Agent Management',
          messages: response.message,
          show: true,
        } as SnackbarDataType)
        //Resetting the form
        reset(defaultFormValues)

        //Refetch users
        props.callback('new', [
          {
            agentname: values.agentname,
            agentid: '---N/A---',
            mobilenumber: values.mobilenumber,
            pin: response.pin,
          },
        ])
      }

      if (values.type === 'edit') {
        //Getting all the param
        const response = await updateAgent(values)
        //Show response if error occurs and return error.
        if (!response.status) {
          //Throw response on error.
          throw new Error(response.message)
        }
        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'Agent Management',
          messages: response.message,
          show: true,
        } as SnackbarDataType)
        //Refetch users
        props.callback('edit')
        //Close modal after creating new user
        props.modalClose()
      }
    } catch (err) {
      //Show response on error.
      showSnackbar({
        type: 'danger',
        title: 'Agent Management',
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
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample" style={{ color: '#CC0229' }}>
          <FaMoneyBillTransfer className="fs-2 mr-2" />{' '}
          <strong>
            {' '}
            {props.data?.type === 'new' ? 'Internal Transfer' : 'Update Internal Transfer'}
          </strong>
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm noValidate>
          <div className="mb-4">
            <CFormLabel
              htmlFor="agentname"
              className={classNames({
                'text-error': !!formState.errors?.agentname,
              })}
            >
              <strong>Service Type</strong>
            </CFormLabel>
            <CFormSelect
              id="status"
              name="status"
              value={'SUCCESSFUL'}
              onChange={() => {}}
              options={[{ label: 'JM 2024 CAMPAIGN', value: 'SUCCESSFUL' }]}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.agentname ? false : true,
              })}
            >
              Agent full name is required.
            </CFormText>
          </div>

          <div className="mb-4">
            <CFormLabel
              htmlFor="agentname"
              className={classNames({
                'text-error': !!formState.errors?.agentname,
              })}
            >
              <strong>Transaction Type</strong>
            </CFormLabel>
            <CFormSelect
              id="status"
              name="status"
              value={'TRANSFER COLLECTION TO PAYOUT'}
              onChange={() => {}}
              options={[
                { label: 'Select transaction type', value: '' },
                {
                  label: 'TRANSFER COLLECTION TO PAYOUT',
                  value: 'TRANSFER COLLECTION TO PAYOUT',
                },
                {
                  label: 'TRANSFER PAYOUT TO COLLECTION',
                  value: 'TRANSFER_PAYOUT_TO_COLLECTION',
                },
                {
                  label: 'TRANSFER MERCHANT FEE TO COLLECTION',
                  value: 'TRANSFER_MERCHANT_FEE_TO_COLLECTION',
                },
                {
                  label: 'TRANSFER MERCHANT FEE TO PAYOUT',
                  value: 'TRANSFER_MERCHANT_FEE_TO_PAYOUT',
                },
              ]}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.agentname ? false : true,
              })}
            >
              Agent full name is required.
            </CFormText>
          </div>

          <div className="mb-4">
            <CFormLabel
              htmlFor="mobilenumber"
              className={classNames({
                'text-error': !!formState.errors?.mobilenumber,
              })}
            >
              <strong>Transfer Amount</strong>
            </CFormLabel>
            <CFormInput
              type="number"
              id="mobilenumber"
              max={10}
              placeholder="Enter transfer amount here."
              {...register('mobilenumber')}
              valid={
                formState.dirtyFields?.mobilenumber && !!!formState.errors?.mobilenumber
                  ? true
                  : false
              }
              invalid={!!formState.errors?.mobilenumber && true}
            />

            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.mobilenumber ? false : true,
              })}
            >
              Transfer Amount is required.
            </CFormText>
          </div>

          <div className="mb-4">
            <CFormLabel
              htmlFor="mobilenumber"
              className={classNames({
                'text-error': !!formState.errors?.mobilenumber,
              })}
            >
              <strong>Transaction Naration</strong>
            </CFormLabel>
            <CForm>
              <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
            </CForm>
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.mobilenumber ? false : true,
              })}
            >
              Transfer Amount is required.
            </CFormText>
          </div>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="danger"
          onMouseUp={handleSubmit(onSubmit)}
          disabled={formState.isSubmitting}
          className='text-white'
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

export default AddEditAgents
