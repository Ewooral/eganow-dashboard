// @ts-nocheck
import dynamic from 'next/dynamic'
import React, { FC, useEffect, useState } from 'react'
/*  */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
/* Components */
const AddEditContactPerson = dynamic(
  () => import('@/components/business-customer-details/contact-person-pane/AddEditContactPerson'),
)
import Snackbar from '@/components/Snackbar'
/* import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
 */
import {
  CCol,
  CRow,
  CFormLabel,
  CFormInput,
  CDatePicker,
  CLoadingButton,
  CAvatar,
  CFormTextarea,
  CSmartTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from '@coreui/react-pro'
/*
 *
 * Contact Person Component
 *
 */
const ContactPerson = (props) => {
  const [details, setDetails] = React.useState([])
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)

  const columns = [
    {
      key: 'firstName',
      label: 'First Name',
      _style: { width: '20%', minWidth: '15rem' },
    },
    {
      key: 'lastName',
      label: 'Last Name',
      _style: { width: '20%', minWidth: '15rem' },
    },
    {
      key: 'mobileNo',
      _style: { width: '20%', minWidth: '10rem' },
    },
    {
      key: 'emailAddress',
      _style: { width: '20%' },
    },
    {
      key: 'position',
      _style: { width: '20%' },
    },
    {
      key: 'contact',
      _style: { width: '20%' },
    },
    {
      key: 'action',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]

  const usersData = [
    {
      id: 1,
      firstName: 'Ben',
      lastName: 'Doe',
      mobileNo: '0246174487',
      emailAddress: 'member@gmail.com',
      position: 'GENERAL_MANAGER',
      contact: 'CONTACT_PERSONS',
    },
    {
      id: 2,
      firstName: 'Samppa',
      lastName: 'Nori',
      mobileNo: '21548458',
      emailAddress: 'member@gmail.com',
      position: 'CEO',
      contact: 'CONTACT_PERSONS',
    },
    {
      id: 3,
      firstName: 'Samppa',
      lastName: 'Nori',
      mobileNo: '21548458',
      emailAddress: 'member@gmail.com',
      position: 'SALES_MANAGER',
      contact: 'CONTACT_PERSONS',
      _selected: true,
    },
    {
      id: 1,
      firstName: 'Samppa',
      lastName: 'Nori',
      mobileNo: '21548458',
      emailAddress: 'member@gmail.com',
      position: 'GENERAL_MANAGER',
      contact: 'CONTACT_PERSONS',
    },
    {
      id: 2,
      firstName: 'Samppa',
      lastName: 'Nori',
      mobileNo: '21548458',
      emailAddress: 'member@gmail.com',
      position: 'CEO',
      contact: 'CONTACT_PERSONS',
    },
    {
      id: 3,
      firstName: 'Samppa',
      lastName: 'Nori',
      mobileNo: '21548458',
      emailAddress: 'member@gmail.com',
      position: 'SALES_MANAGER',
      contact: 'CONTACT_PERSONS',
      _selected: true,
    },
  ]

  const getBadge = (status) => {
    switch (status) {
      case 'GENERAL_MANAGER':
        return 'success'
      case 'SALES_PERSON':
        return 'secondary'
      case 'SALES_MANAGER':
        return 'warning'
      case 'CEO':
        return 'danger'
      default:
        return 'primary'
    }
  }

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  function handleModal() {
    //Setting default data
    const userData = {
      type: 'new',
    }
    //Open the AddEditUser component
    setDynamicComponent(
      <AddEditContactPerson modalClose={modalClose} data={userData} callback={handleRefresh} />,
    )
  }

  function handleClick(e: React.ChangeEvent<HTMLInputElement>, items): void {
    const { type } = e.target.dataset
    /*  Editing Users */
    if (type === 'edit') {
      //Setting default data
      const userData = {
        type: 'edit',
        ...items,
      }
      //Open the AddEditUser component
      setDynamicComponent(
        <AddEditContactPerson modalClose={modalClose} data={userData} callback={handleRefresh} />,
      )
    }
    /*  Deleting Users */
    if (type === 'delete') {
      //Open the AddEditUser component
      setDynamicComponent(<Snackbar modalClose={modalClose} />)
    }
  }

  function modalClose() {
    setDynamicComponent(null)
  }

  function handleRefresh() {
    //Rehydrating users
    //refetch()
  }

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              List of Contact Persons
            </legend>

            <CButton
              color="info"
              shape="rounded-pill"
              className="float-end"
              onMouseUp={handleModal}
            >
              Add new
            </CButton>

            <CSmartTable
              activePage={1}
              cleaner
              clickableRows
              columns={columns}
              columnFilter
              columnSorter
              footer
              items={usersData}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedColumns={{
                position: (item) => (
                  <td>
                    <CBadge color={getBadge(item.position)}>{item.position}</CBadge>
                  </td>
                ),
                action: (item) => {
                  return (
                    <td className="py-2 d-flex">
                      <CButton
                        className="me-1"
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}
                      >
                        Edit
                      </CButton>
                      <CButton
                        color="danger"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}
                      >
                        Remove
                      </CButton>
                    </td>
                  )
                },
              }}
              selectable
              sorterValue={{ column: 'status', state: 'asc' }}
              tableFilter
              tableProps={{
                className: 'add-this-class',
                responsive: true,
                striped: true,
                hover: true,
              }}
              tableBodyProps={{
                className: 'align-middle',
              }}
            />
          </fieldset>
        </CCol>
      </CRow>
      {/* Dynamic Modal Component */}
      {dynamicComponent}
    </>
  )
}

export default ContactPerson
