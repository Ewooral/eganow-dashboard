// @ts-nocheck
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
/*  */
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline, MdOutlineAdd, MdOutlineDelete } from 'react-icons/md'

import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'

import { useSnackbar } from '@/store'

import { isEmpty_util } from '@/util'

/* Components */
const AddEditDirectorsShareholders = dynamic(
  () =>
    import(
      '@/components/Biz-collect/business-customer-details/directors-shareholders-pane/AddEditDirectorsShareholders'
    ),
)
import Snackbar from '@/components/Snackbar'

import {
  DirectorOrShareholderOrOtherType,
  DirectorPosition,
  CustomerIDTypes,
} from '@/protos/generated/eganow/api/merchant/onboarding_entity_pb'
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
  CCard,
} from '@coreui/react-pro'
import { log } from 'console'
import DeleteModal from '@/components/DeleteModal'
import Confirm from '@/components/Confirm'
import { CiEdit } from 'react-icons/ci'

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
/*
 *
 * Contact Person Component
 *
 */
const DirectorsShareholders = (props) => {
  const [idTypeText, setIdTypeText] = React.useState('')
  const [positionColumn, setPositionColumn] = React.useState('')
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)

  const { deleteDirector } = MerchantAccountSvc()

  //snackbar component from zustand store
  const { showSnackbar } = useSnackbar()

  // ASSIGNING LIST OF DIRECTORS FROM PROPS
  const directorsList = props?.directors?.data?.directorsShareholdersList

  // HANDLE ID TYPE VALUE
  const idTypeName = () => {
    const formatEnum = formatEnum_util(CustomerIDTypes, 3)
    const flippedEnum = flipObject_util(formatEnum)
    setIdTypeText(flippedEnum)
  }

  // HANDLE DIRECTOR POSITION VALUE
  const positionCol = () => {
    const formatEnum = formatEnum_util(DirectorPosition, 2)
    const flippedEnum = flipObject_util(formatEnum)

    setPositionColumn(flippedEnum)
  }

  useEffect(() => {
    idTypeName()
    positionCol()
  }, [])

  // TABLE COLUMNS
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
      key: 'idType',
      label: 'Id Type',
      _style: { width: '20%', minWidth: '150px' },
    },

    {
      key: 'idImage',
      _style: { width: '20%', minWidth: '100px' },
      filter: false,
      sorter: false,
    },
    // {
    //   key: 'idPlaceOfIssue',
    //   _style: { width: '8%', minWidth: '12rem' },
    // },
    // {
    //   key: 'passportImage',
    //   _style: { width: '2%', minWidth: '9rem' },
    //   filter: false,
    //   sorter: false,
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

  function handleModal() {
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

  // HANDLE EDIT OR DELETE EVENTS
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

  async function handleDelete(event, items) {
    try {
      const response = await deleteDirector(items)
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
    props.directors.refetch()
  }

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <div className="d-flex justify-content-end align-items-center mb-5">
            {props?.allowToEdit && (
              <button
                className="eganow-primary-btn px-4 d-flex align-items-center gap-1"
                onMouseUp={handleModal}
              >
                <MdOutlineAdd size={20} className="" />{' '}
                <span className="m-0 p-0 ">Add director/shareholder</span>
              </button>
            )}
          </div>
          <CCard className="p-3 border shadow-none">
            <strong className="fs-5 mb-3">List of Directors & Shareholders</strong>

            <CSmartTable
              activePage={1}
              cleaner
              clickableRows
              columns={columns}
              // columnFilter
              columnSorter
              // footer
              items={directorsList}
              loading={props.directors.isFetching}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedColumns={{
                position: (item) => (
                  <td>
                    {/* <CBadge color={getBadge(positionColumn[item.position])}> */}
                    {positionColumn[item.position]}
                    {/* </CBadge> */}
                  </td>
                ),
                idImage: (items) => IDImageColumn(items.idInfo.idFrontImage),
                idType: (items) => {
                  return (
                    <td className="text-capitalize">
                      {/* <CBadge color={getBadge(idTypeText[items.idInfo.idType])}> */}
                      {idTypeText[items.idInfo.idType]}
                      {/* </CBadge> */}
                    </td>
                  )
                },
                action: (item) => {
                  return (
                    <td>
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

export default DirectorsShareholders
