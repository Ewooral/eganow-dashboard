// @ts-nocheck
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import merchantDirectorShareholderAPI from '@/api/merchantDirectorShareholderAPI'
import { useSnackbar } from '@/store'
import { isEmpty_util } from '@/util'
/* Components */
const AddEditDirectorsShareholders = dynamic(
  () =>
    import(
      '@/components/business-details/directors-shareholders-pane/AddEditDirectorsShareholders'
    ),
)
import Snackbar from '@/components/Snackbar'
import { flipObject_util, formatEnum_util } from '@/util'
// CORE UI IMPORTS
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
  CButtonGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react-pro'
import { log } from 'console'
import DeleteModal from '@/components/DeleteModal'
import Confirm from '@/components/Confirm'

// ID IMAGE COMPONENT
export const IDImageColumn = (cardname: string) => {
  return (
    <td className="">
      <Zoom>
        <Image
          src={isEmpty_util(cardname) ? '/images/imageplaceholder.jpg' : cardname}
          width={50}
          height={30}
          alt={cardname.length}
          className="mx-auto rounded grow-img"
        />
      </Zoom>
    </td>
  )
}

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
    _style: { width: '20%', minWidth: '100px' },
  },
  {
    key: 'position',
    label: 'Position',
    _style: { width: '20%', minWidth: '100px' },
  },
  {
    key: 'identification',
    label: 'ID Type',
    _style: { width: '20%', minWidth: '100px' },
    filter: false,
    sorter: false,
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
const DirectorsShareholders = (props) => {
  const ITEMS_PER_PAGE = 10
  const [idTypeText, setIdTypeText] = React.useState('')
  const [positionColumn, setPositionColumn] = React.useState('')
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)
  const { deleteDirector } = merchantDirectorShareholderAPI()
  //snackbar component from zustand store
  const { showSnackbar } = useSnackbar()
  // ASSIGNING LIST OF DIRECTORS FROM PROPS
  const directorsList = props?.directors?.data?.data

  //Handle edit or delete events
  async function handleModal(e: React.ChangeEvent<HTMLInputElement>, items): void {
    const { type } = e.currentTarget.dataset
    /*  New Users */
    if (type === 'new') {
      //Setting default data
      const userData = {
        type: 'new',
      }
      //Open the AddEditUser component
      setDynamicComponent(
        <AddEditDirectorsShareholders
          modalClose={modalClose}
          data={userData}
          callback={handleRefresh}
        />,
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
        <AddEditDirectorsShareholders
          modalClose={modalClose}
          data={userData}
          callback={handleRefresh}
        />,
      )
    }
    /*  Deleting Users */
    if (type === 'delete') {
      const message = `Are you sure want to remove ${items.firstName} ${items.lastName} ?`
      setDynamicComponent(
        <Confirm
          onClick={handleDelete}
          data={items?.directorId}
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
    props.directors.refetch()
  }

  async function handleDelete(event, items) {
    try {
      const response = await deleteDirector(items)
      //Show response on success.
      showSnackbar({
        type: 'success',
        title: 'Directors & Shareholders',
        messages: response.message,
        show: true,
      } as SnackbarDataType)
      handleRefresh()
    } catch (error) {
      showSnackbar({
        type: 'danger',
        title: 'Directors & Shareholders',
        messages: error.message,
        show: true,
      } as SnackbarDataType)
    }
    setDynamicComponent(<Snackbar modalClose={modalClose} />)
  }

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <fieldset className="p-3 border border-1">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              List of Directors & Shareholders
            </legend>

            {props?.isEditable && (
              <CButtonGroup
                role="group"
                aria-label="Button group with nested dropdown"
                className="float-end"
              >
                <CButton
                  onMouseUp={handleModal}
                  data-type="new"
                  color="info"
                  className="text-white rounded-pill"
                >
                  Add new
                </CButton>
                {/* <CDropdown variant="btn-group">
                <CDropdownToggle color="info"></CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Batch Remove</CDropdownItem>
                </CDropdownMenu>
              </CDropdown> */}
              </CButtonGroup>
            )}

            <CSmartTable
              activePage={1}
              cleaner
              clickableRows
              columns={columns}
              columnFilter
              columnSorter
              /* footer */
              items={directorsList}
              loading={props.directors.isFetching}
              itemsPerPageSelect
              itemsPerPage={ITEMS_PER_PAGE}
              pagination
              scopedColumns={{
                identification: (items) => IDImageColumn(items.identification.frontImage),
                action: (item) => {
                  return (
                    <td>
                      {props?.isEditable ? (
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

export default DirectorsShareholders
