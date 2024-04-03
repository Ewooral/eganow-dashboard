// @ts-nocheck
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
/*  */

import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'

import { useSnackbar } from '@/store'

/* Components */
const AddEditDirectorsShareholders = dynamic(
  () =>
    import(
      '@/components/business-customer-details/directors-shareholders-pane/AddEditDirectorsShareholders'
    ),
)
import Snackbar from '@/components/Snackbar'

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

// ID IMAGE COMPONENT
export const IDImageColumn = (cardname: string) => {
  return (
    <td className="text-center">
      <Zoom>
        <Image
          src={cardname}
          width={70}
          height={40}
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
  const [details, setDetails] = React.useState([])
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)

  const { deleteDirector } = MerchantAccountSvc()

  //snackbar component from zustand store
  const { showSnackbar } = useSnackbar()

  // ASSIGNING LIST OF DIRECTORS FROM PROPS
  const directorsList = props?.directors?.data?.directorsShareholdersList

  
  
  // TABLE COLUMNS
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
      key: 'mobileNumber',
      _style: { width: '5%', minWidth: '10rem' },
    },
    {
      key: 'email',
      _style: { width: '5%', minWidth: '10rem' },
    },
    {
      key: 'position',
      _style: { width: '5%', minWidth: '10rem' },
    },
    {
      key: 'idType',
      label : 'Id Type',
      _style: { width: '5%', minWidth: '10rem' },
    },
    // {
    //   key: 'idExpiryDate',
    //   _style: { width: '8%', minWidth: '10rem' },
    // },
    {
      key: 'idImage',
      _style: { width: '2%', minWidth: '6rem' },
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
      key: 'directorShareholderType',
      _style: { width: '10%', minWidth: '14rem' },
    },
    // {
    //   key: 'amlStatusCheck',
    //   _style: { width: '9%', minWidth: '12rem' },
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
      //Open the AddEditUser component
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
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              List of Directors & Shareholders
            </legend>

            <CButtonGroup
              role="group"
              aria-label="Button group with nested dropdown"
              className="float-end"
            >
              <CButton onMouseUp={handleModal} color="info">
                Add new
              </CButton>
              <CDropdown variant="btn-group">
                <CDropdownToggle color="info"></CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Batch Remove</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CButtonGroup>

            <CSmartTable
              activePage={1}
              cleaner
              clickableRows
              columns={columns}
              columnFilter
              columnSorter
              footer
              items={directorsList}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedColumns={{
                position: (item) => (
                  <td>
                    <CBadge color={getBadge(item.position)}>{item.position}</CBadge>
                  </td>
                ),
                idImage: (items) => IDImageColumn(items.idInfo.idFrontImage),
                idType : (items)=>{
                  return (
                    <td>
                      {items.idInfo.idType}
                    </td>
                  )
                } ,
                action: (item) => {
                  return (
                    <td className="py-2 d-flex">
                      <CButton
                        className="me-1"
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        data-type='edit'
                        onClick={(e) => {
                          handleClick(e,item)
                        }}
                      >
                        Edit
                      </CButton>
                      <CButton
                        color="danger"
                        variant="outline"
                        shape="square"
                        size="sm"
                        data-type='delete'
                        onClick={(e) => {
                          handleClick(e,item?.directorId)
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

export default DirectorsShareholders
