
import { useSnackbar } from '@/store'
import {
  CButton,
  CCol,
  CFormCheck,
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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineAdd, MdOutlineDelete } from 'react-icons/md'
import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
import { RiBillLine } from 'react-icons/ri'
import { log } from 'console'

const billingItems = ['Tuition', 'Food', 'Uniform']

function AddEditBill(props: any) {
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)
  const [items, setItems] = useState<any>([])

  // Calculate total amount of billing items
  const totalAmount = items.reduce((total: number, item: { amount: any }) => total + Number(item.amount), 0)

  console.log(totalAmount)

  // UseForm
  const { register, reset, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  useEffect(() => {
    const data = props.data
    if (data.type !== 'new') {
      //@ts-ignore
      setValue('itemname', data.Item_name)
      //@ts-ignore
      setValue('description', data.description)
      //@ts-ignore
      setValue('level', data.type)
    }
  }, [props.data, setValue]) // Add dependencies to avoid infinite re-renders

  async function onSubmit(values: any) {
    try {
      const data = {
        ...values,
        items: items.map((item: { amount: number }) => ({ ...item, amount: Number(item.amount) })),
      }
      console.log(data)
      props.modalClose()
      showSnackbar({ message: 'Bill added successfully!', type: 'success' })
    } catch (error) {
      showSnackbar({ message: 'Failed to add bill. Please try again.', type: 'error' })
    }
  }

  function addBillingItems() {
    // Adding unique id for each item
    // const itemName = getValues('billingItem')
    setItems([
      ...items,
      { id: Date.now(), itemName: getValues('billingItem'), amount: getValues('itemAmount') },
    ])

    setValue('billingItem', '')
    setValue('itemAmount', '')
  }

  function removeItem(id: number) {
    setItems(items.filter((item: { id: number }) => item.id !== id))
  }

  return (
    <CModal
      alignment="center"
      visible={true}
      backdrop="static"
      onClose={props.modalClose}
      aria-labelledby="VerticallyCenteredExample"
      size="xl"
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">
          <strong>{props.data?.type === 'new' ? 'Add New Bill' : 'Update Bill'}</strong>
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <CRow>
          <CCol xs={12} sm={5} className="">
            <CRow>
              <CCol xs={12} sm={12} className="mb-3">
                <CFormLabel
                  htmlFor="level"
                  className={classNames({
                    'text-error': !!formState.errors?.school,
                  })}
                >
                  <strong>School</strong>
                </CFormLabel>
                <CFormSelect
                  {...register('school')}
                  valid={
                    formState.dirtyFields?.school && !!!formState.errors?.school ? true : false
                  }
                  onChange={(e) => {
                    setValue('school', e.target.value, { shouldValidate: true })
                  }}
                  invalid={!!formState.errors?.school && true}
                >
                  <option value="">Select a school</option>
                  {/* Dynamic options can be added here */}
                  <option value="Alsyd Academy">Alsyd Academy</option>
                  <option value="Galaxy internation School">Galaxy internation School</option>
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
              <CCol xs={12} sm={6} className="mb-3">
                <CFormLabel
                  htmlFor="currency"
                  className={classNames({
                    'text-error': !!formState.errors?.currency,
                  })}
                >
                  <strong>Currency</strong>
                </CFormLabel>
                <CFormSelect
                  {...register('currency')}
                  valid={
                    formState.dirtyFields?.currency && !!!formState.errors?.currency ? true : false
                  }
                  onChange={(e) => {
                    setValue('currency', e.target.value, { shouldValidate: true })
                  }}
                  invalid={!!formState.errors?.currency && true}
                >
                  <option value="">Select a currency</option>
                  {/* Dynamic options can be added here */}
                  <option value="USD">USD</option>
                  <option value="GHS">GHS</option>
                </CFormSelect>
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.currency ? false : true,
                  })}
                >
                  Currency is required.
                </CFormText>
              </CCol>
              <CCol sm={6}>
                <CFormLabel
                  htmlFor="levelType"
                  className={classNames({
                    'text-error': !!formState.errors?.levelType,
                  })}
                >
                  <strong>Type</strong>
                </CFormLabel>
                <div>
                  <CFormCheck
                    type="radio"
                    {...register('levelType')}
                    inline
                    value="main"
                    label="Main"
                    // defaultChecked
                  />
                  <CFormCheck
                    inline
                    {...register('levelType')}
                    type="radio"
                    value="sub"
                    label="Sub"
                  />{' '}
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs={12} sm={12} className="mb-3">
                <CFormLabel
                  htmlFor="classificationType"
                  className={classNames({
                    'text-error': !!formState.errors?.classificationType,
                  })}
                >
                  <strong>Classification type</strong>
                </CFormLabel>
                <CFormSelect
                  {...register('classificationType')}
                  valid={
                    formState.dirtyFields?.classificationType &&
                    !!!formState.errors?.classificationType
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    setValue('classificationType', e.target.value, { shouldValidate: true })
                  }}
                  invalid={!!formState.errors?.classificationType && true}
                >
                  <option value="">Select a classification type</option>
                  {/* Dynamic options can be added here */}
                  <option value="class 1">Class 1</option>
                  <option value="class 2">Class 2</option>
                  <option value="class 3">Class 3</option>
                  <option value="class 4">Class 4</option>
                  <option value="form 1">Form 1</option>
                  <option value="form 2">Form 2</option>
                  <option value="form 3">Form 3</option>
                </CFormSelect>
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.classificationType ? false : true,
                  })}
                >
                  Classification type is required.
                </CFormText>
              </CCol>

              {getValues('levelType') === 'sub' && (
                <CCol xs={12} sm={12} className="mb-3">
                  <CFormLabel
                    htmlFor="subClassificationType"
                    className={classNames({
                      'text-error': !!formState.errors?.subClassificationType,
                    })}
                  >
                    <strong>Sub classification type</strong>
                  </CFormLabel>
                  <CFormSelect
                    {...register('subClassificationType')}
                    valid={
                      formState.dirtyFields?.subClassificationType &&
                      !!!formState.errors?.subClassificationType
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      setValue('subClassificationType', e.target.value, { shouldValidate: true })
                    }}
                    invalid={!!formState.errors?.subClassificationType && true}
                  >
                    <option value="">Select a sub classification type</option>
                    {/* Dynamic options can be added here */}
                    <option value="form 1 A">Form 1 A</option>
                    <option value="form 1 B">Form 1 B</option>
                    <option value="form 2 A">Form 2 A</option>
                    <option value="form 2 B">Form 2 B</option>
                  </CFormSelect>
                  <CFormText
                    component="span"
                    className={classNames({
                      'text-error': true,
                      'd-none': !!formState.errors?.subClassificationType ? false : true,
                    })}
                  >
                    Sub classification type is required.
                  </CFormText>
                </CCol>
              )}
            </CRow>
            <hr />
            <CRow className="">
              <strong>Add billing items:</strong>
              <CCol xs={12} sm={12} className="mb-3">
                <CFormSelect
                  {...register('billingItem')}
                  valid={
                    formState.dirtyFields?.billingItem && !!!formState.errors?.billingItem
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    setValue('billingItem', e.target.value, { shouldValidate: true })
                  }}
                  invalid={!!formState.errors?.billingItem && true}
                >
                  <option value="">Select a billing item</option>
                  {billingItems.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </CFormSelect>
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.billingItem ? false : true,
                  })}
                >
                  Billing item is required.
                </CFormText>
              </CCol>
              <CCol xs={12} sm={12} className="mb-3">
                <CFormInput
                  id="itemAmount"
                  type="text"
                  placeholder="Enter item amount."
                  {...register('itemAmount')}
                  valid={
                    formState.dirtyFields?.itemAmount && !!!formState.errors?.itemAmount
                      ? true
                      : false
                  }
                  invalid={!!formState.errors?.itemAmount && true}
                />
                <CFormText
                  component="span"
                  className={classNames({
                    'text-error': true,
                    'd-none': !!formState.errors?.itemAmount ? false : true,
                  })}
                >
                  Item amount is required.
                </CFormText>
              </CCol>

              <CCol sm={2} className="">
                <CButton className="eganow-outline-btn px-2" onClick={addBillingItems}>
                  Add
                </CButton>
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={12} sm={7} className="">
            {items.length > 0 ? (
              <div className="h-100 w-100  p-2 border-sm-start border-start-danger px-3">
                <div className="d-flex justify-content-end">
                  <div className="mb-4 rounded border p-2">
                    <div className="text-end">
                      <span className="text-secondary text-right">School: </span>
                      <strong className="text-right"> {getValues('school')}</strong>
                    </div>
                    <div className="text-end">
                      <span className="text-secondary">Classification type: </span>
                      <strong> {getValues('classificationType')}</strong>
                    </div>
                    {getValues('subClassificationType') && (
                      <div className="text-end">
                        <span className="text-secondary">Sub classification type: </span>
                        <strong> {getValues('subClassificationType')}</strong>
                      </div>
                    )}
                  </div>
                </div>
                <CTable className="border rounded shadow">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {items?.map((item:any) => (
                      <CTableRow color="success" key={item.id}>
                        <CTableHeaderCell>{item.itemName}</CTableHeaderCell>
                        <CTableDataCell>{item.amount}</CTableDataCell>
                        <CTableDataCell onClick={() => removeItem(item.id)}>
                          <MdOutlineDelete
                            color="red"
                            size={20}
                            role="button"
                            data-type="delete"
                            onClick={() => removeItem(item.id)}
                          />
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>

                <CTableDataCell className="py-1">
                  <strong>Total Bill:</strong> <span> {totalAmount}</span>
                </CTableDataCell>
              </div>
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center my-5">
                <RiBillLine className="fs-1 fw-bold me-2 text-secondary" />
                <strong className="py-1 fs-5">No billing items added</strong>
                <span className="text-secondary fs-6">Bill will be shown here</span>
              </div>
            )}
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton
          className="eganow-secondary-btn px-3"
          onMouseUp={handleSubmit(onSubmit)}
          disabled={formState.isSubmitting}
        >
          {props.data?.type === 'new' ? 'Add Bill' : 'Update Bill'}
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default AddEditBill
