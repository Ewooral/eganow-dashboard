// @ts-nocheck
import dynamic from 'next/dynamic'
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
/* Components */
const AddEditContactPerson = dynamic(
  () => import('@/components/business-details/contact-person-pane/AddEditContactPerson'),
)
import Snackbar from '@/components/Snackbar'
import { CCol, CRow, CSmartTable, CBadge, CButton } from '@coreui/react-pro'
import { CONTACT_PERSON_POSITION } from '@/constants'
import { useSnackbar, usePopoverStore } from '@/store'
import { SnackbarDataType } from '@/types/UI'
import DeleteModal from '@/components/DeleteModal'
import Confirm from '@/components/Confirm'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import merchantContactPersonAPI from '@/api/merchantContactPersonAPI'

//Table columns
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
  {
    key: 'action',
    label: 'Action',
    _style: { width: '1%' },
    filter: false,
    sorter: false,
  },
]

/*
 *
 * Contact Person Component
 *
 */
const ContactPerson = (props) => {
  const ITEMS_PER_PAGE= 10;
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)
  const { showSnackbar } = useSnackbar()
  const { deleteBusinessContactPerson } = merchantContactPersonAPI()
  const contactPersons = props?.contactPersons?.data?.data
  const updateSectionStatus = usePopoverStore((state) => state.updateSectionStatus)


  function handleModal(e: React.ChangeEvent<HTMLInputElement>, items): void {
    const { type } = e.currentTarget.dataset

    if (type === 'new') {
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
      const message = `Are you sure, you want to remove ${items.firstName} ${items.lastName} as a contact person?`

      setDynamicComponent(
        <Confirm
          title="Delete Contact Person"
          onClick={handleDelete}
          data={items.contactId}
          modalClose={modalClose}
          message={message}
        />,
      )
    }
  }

  function modalClose() {
    setDynamicComponent(null)
  }

  function handleRefresh() {
    //Rehydrating users
    props.contactPersons.refetch()
  }

  async function handleDelete(event, id) {
    try {
      const response = await deleteBusinessContactPerson(id)
      //Show response on success.
      showSnackbar({
        type: 'success',
        title: 'Contact Person',
        messages: response.message,
        show: true,
      } as SnackbarDataType)
      //Refresh list
      handleRefresh()
      //Closing modal
      modalClose()
      updateSectionStatus("contact-person", "PENDING")
    } catch (error) {
      showSnackbar({
        type: 'danger',
        title: 'Contact Person',
        messages: error.message,
        show: true,
      } as SnackbarDataType)
    }
  }

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <fieldset className="p-3 border border-1">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              List of Contact Persons
            </legend>

            {props.isEditable ? (
              <CButton
                color="info"
                shape="rounded-pill"
                data-type="new"
                className="float-end text-white"
                onMouseUp={handleModal}
              >
                Add new
              </CButton>
            ) : null}

            <CSmartTable
              activePage={1}
              cleaner
              clickableRows
              columns={columns}
              loading={props?.contactPersons.isFetching}
              columnFilter
              columnSorter
              /* footer */
              items={contactPersons}
              itemsPerPageSelect
              itemsPerPage={ITEMS_PER_PAGE}
              pagination
              scopedColumns={{
                action: (item) => {
                  return (
                    <td className="">
                      {props.isEditable ? (
                        <div className="d-flex align-items-center">
                          <FiEdit
                            className="me-1"
                            variant="outline"
                            color="blue"
                            shape="square"
                            size={20}
                            data-type="edit"
                            onClick={(e) => {
                              handleModal(e, item)
                            }}
                          />
                          |
                          <MdDeleteOutline
                            color="red"
                            variant="outline"
                            shape="square"
                            size={25}
                            data-type="delete"
                            onClick={(e) => {
                              handleModal(e, item)
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
              selectable
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
          </fieldset>
        </CCol>
      </CRow>
      {/* Dynamic Modal Component */}
      {dynamicComponent}
    </>
  )
}

export default ContactPerson
