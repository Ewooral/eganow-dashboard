// @ts-nocheck
import dynamic from 'next/dynamic'
import React, { FC, useEffect, useState } from 'react'
/*  */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
/* Components */
const AddEditContactPerson = dynamic(
  () =>
    import(
      '@/components/Biz-collect/business-customer-details/contact-person-pane/AddEditContactPerson'
    ),
)
import Snackbar from '@/components/Snackbar'
/* import { validationSchema } from './validationSchema'
import { defaultFormValues } from './defaultFormValues'
 */
import { CCol, CRow, CSmartTable, CBadge, CButton, CCard } from '@coreui/react-pro'
import { CONTACT_PERSON_POSITION } from '@/constants'
import { useSnackbar } from '@/store'
import { SnackbarDataType } from '@/types/UI'
import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'
import { DirectorPosition } from '@/protos/generated/eganow/api/merchant/onboarding_entity_pb'
import { flipObject_util, formatEnum_util } from '@/util'
import DeleteModal from '@/components/DeleteModal'
import Confirm from '@/components/Confirm'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline, MdOutlineAdd, MdOutlineDelete } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
/*
 *
 * Contact Person Component
 *
 */
const ContactPerson = (props) => {
  // const [details, setDetails] = React.useState([])
  const [showDirectorPositionsText, setShowDirectorPositionsText] = React.useState('')

  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)

  useEffect(() => {
    const formattedEnum = formatEnum_util(DirectorPosition, 2)
    const flippedEnum = flipObject_util(formattedEnum)
    setShowDirectorPositionsText(flippedEnum)
  }, [props?.data?.data?.contactsList])

  //snackbar component from zustand store
  const { showSnackbar } = useSnackbar()

  //api for delete business contact person
  const { deleteBusinessContactPerson } = MerchantAccountSvc()

  const columns = [
    {
      key: 'firstName',
      label: 'First Name',
      _style: { width: '20%', minWidth: '100px' },
    },
    {
      key: 'lastName',
      label: 'Last Name',
      _style: { width: '20%', minWidth: '100px' },
    },
    {
      key: 'mobileNumber',
      _style: { width: '20%', minWidth: '100px' },
    },
    {
      key: 'email',
      _style: { width: '20%' },
    },
    {
      key: 'position',
      _style: { width: '20%' },
    },
    // {
    //   key: 'contactId',
    //   _style: { width: '20%' },
    // },
    {
      key: 'action',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]

  const getBadge = (status) => {
    switch (status) {
      case 'SHAREHOLDER':
        return 'success'
      case 'DIRECTOR':
        return 'secondary'
      case 'CEO':
        return 'warning'
      case 'MANAGEMENT':
        return 'danger'
      default:
        return 'primary'
    }
  }

  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index)
  //   let newDetails = details.slice()
  //   if (position !== -1) {
  //     newDetails.splice(position, 1)
  //   } else {
  //     newDetails = [...details, index]
  //   }
  //   setDetails(newDetails)
  // }

  //setting the contactlist data to contactPersons variable
  const contactPersons = props?.data?.data?.contactsList

  function handleModal() {
    //Setting default data & spreading the contact persons data
    const userData = {
      type: 'new',
      ...contactPersons,
    }
    //Open the AddEditUser component
    setDynamicComponent(
      <AddEditContactPerson modalClose={modalClose} data={userData} callback={handleRefresh} />,
    )
  }

  async function handleClick(e: React.ChangeEvent<HTMLInputElement>, items): void {
    const { type } = e.currentTarget.dataset

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

      // setDynamicComponent(
      //   <DeleteModal handleDelete={handleDelete} item={items} modalClose={modalClose} />,
      // )

      const message = `Are you sure want to remove ${items.firstName} ${items.lastName} ?`

      setDynamicComponent(
        <Confirm
          onClick={handleDelete}
          data={items.contactId}
          modalClose={modalClose}
          message={message}
        />,
      )
    }
  }

  async function handleDelete(event, items) {
    try {
      const response = await deleteBusinessContactPerson(items)
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
      handleRefresh()
    } catch (error) {
      console.log(error)

      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: error.message,
        show: true,
      } as SnackbarDataType)
    }

    setDynamicComponent(<Snackbar modalClose={modalClose} />)
  }

  function modalClose() {
    setDynamicComponent(null)
  }

  function handleRefresh() {
    //Rehydrating users
    props.data.refetch()
  }

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <div className="d-flex justify-content-end align-items-center mb-5">
            {props?.allowToEdit && (
              <CButton
                className="eganow-primary-btn px-4 d-flex align-items-center gap-1"
                onMouseUp={handleModal}
              >
                <MdOutlineAdd size={20} className="" />{' '}
                <span className="m-0 p-0 ">Add contact person</span>
              </CButton>
            )}
          </div>
          <CCard className="p-3 border shadow-none">
            <strong className="fs-4">List of Contact Persons</strong>

            <CSmartTable
              activePage={1}
              cleaner
              clickableRows
              columns={columns}
              loading={props.data.isFetching}
              // columnFilter
              columnSorter
              // footer
              items={contactPersons}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedColumns={{
                position: (item) => (
                  <td>
                    {/* <CBadge color={getBadge(showDirectorPositionsText[item.position])}> */}
                    {showDirectorPositionsText[item.position]}
                    {/* </CBadge> */}
                  </td>
                ),
                action: (item) => {
                  return (
                    <td className="">
                      {props?.allowToEdit ? (
                        <div className="d-flex align-items-center">
                          <CiEdit
                            className="me-1 text-info"
                            variant="outline"
                            color="info"
                            shape="square"
                            size={20}
                            data-type="edit"
                            onClick={(e) => {
                              handleClick(e, item)
                            }}
                          />
                          |
                          <MdOutlineDelete
                            color="red"
                            variant="outline"
                            shape="square"
                            size={20}
                            data-type="delete"
                            onClick={(e) => {
                              handleClick(e, item)
                            }}
                          />
                        </div>
                      ) : (
                        'N/A'
                      )}
                    </td>
                  )
                },
              }}
              // selectable
              sorterValue={{ column: 'status', state: 'asc' }}
              tableFilter
              tableProps={{
                className: 'add-this-class',
                responsive: true,
                striped: false,
                hover: true,
                small: true,
                borderColor: 'light',
              }}
              tableBodyProps={{
                className: 'align-middle',
              }}
            />
          </CCard>
        </CCol>
      </CRow>
      {/* Dynamic Modal Component */}
      {dynamicComponent}
    </>
  )
}

export default ContactPerson
