import Confirm from '@/components/Confirm'
import AddEditBill from '@/components/Edupay/billings/create-a-bill/AddEditBill'
import AddBill from '@/components/Edupay/billings/create-a-bill/AddEditBill'
import EdupayLayout from '@/components/Edupay/EdupayLayout'
import Snackbar from '@/components/Snackbar'
import { EGANOW_AUTH_COOKIE } from '@/constants'
import { useSnackbar } from '@/store'
import { CCard, CSmartTable } from '@coreui/react-pro'
import React, { FC, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineAdd, MdOutlineDelete } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'

export const getServerSideProps = async ({ req }: any) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE])
  //Response
  return {
    props: {
      cookies,
    },
  }
}
function CreateBill(props: any) {
  const [dynamicComponent, setDynamicComponent] = useState<any | null>(null)

  //snackbar component from zustand store
  // const { showSnackbar } = useSnackbar()

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

  const getBadge = (status: any) => {
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

  function handleModal() {
    //Setting default data & spreading the contact persons data
    const userData = {
      type: 'new',
      //   ...contactPersons,
    }
    //Open the addbill component
    setDynamicComponent(
      //@ts-ignore
      <AddEditBill modalClose={modalClose} data={userData} callback={handleRefresh} />,
    )
  }

  async function handleClick(e: React.ChangeEvent<HTMLInputElement>, items: any):  Promise<void>  {
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
        //@ts-ignore
        <AddEditBill modalClose={modalClose} data={userData} callback={handleRefresh} />,
      )
    }
    /*  Deleting Users */
    // if (type === 'delete') {
    //   //Open the AddEditUser component

    //   // setDynamicComponent(
    //   //   <DeleteModal handleDelete={handleDelete} item={items} modalClose={modalClose} />,
    //   // )

    //   const message = `Are you sure want to remove ${items.firstName} ${items.lastName} ?`

    //   setDynamicComponent(
    //     <Confirm
    //       onClick={handleDelete}
    //       data={items.contactId}
    //       modalClose={modalClose}
    //       message={message}
    //     />,
    //   )
    // }
  }

  // async function handleDelete(event, items) {
  //   try {
  //     const response = await deleteBusinessContactPerson(items)
  //     //Show response if error occurs and return error.
  //     if (!response) {
  //       //Throw response on error.
  //       throw new Error(response.message)
  //     }

  //     //Show response on success.
  //     showSnackbar({
  //       type: 'success',
  //       title: 'User Management',
  //       messages: response.value,
  //       show: true,
  //     } as SnackbarDataType)
  //     handleRefresh()
  //   } catch (error) {
  //     console.log(error)

  //     showSnackbar({
  //       type: 'danger',
  //       title: 'User Management',
  //       messages: error.message,
  //       show: true,
  //     } as SnackbarDataType)
  //   }

  //   setDynamicComponent(<Snackbar modalClose={modalClose} />)
  // }

  function modalClose() {
    setDynamicComponent(null)
  }

  function handleRefresh() {
    //Rehydrating users
    props.data.refetch()
  }
  return (
    <div>
      <EdupayLayout {...props}>
        <div className="d-flex justify-content-between align-items-center flex-wrap rounded pt-2">
          <div className="flex-grow-1">
            <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
              <RiBillLine className="fs-1 fw-bold me-2" />
              Create bill
            </h1>
            <small className="text-secondary">Create a bill for a class.</small>
          </div>

          <div className="flex gap-2">
            <button
              className="eganow-primary-btn px-4 d-flex align-items-center gap-1"
              onMouseUp={handleModal}
            >
              <MdOutlineAdd size={20} className="" /> <span className="m-0 p-0 ">Add bill</span>
            </button>
          </div>
        </div>

        <hr />

        <CCard className="p-3 border shadow mt-5">
          <strong className="fs-5 mb-3">List of bills</strong>

          <CSmartTable
            activePage={1}
            cleaner
            clickableRows
            columns={columns}
            // loading={props.data.isFetching}
            // columnFilter
            columnSorter
            // footer
            items={[]}
            itemsPerPageSelect
            itemsPerPage={5}
            noItemsLabel={
              <div className="d-flex flex-column align-items-center justify-content-center my-5">
                <RiBillLine className="fs-1 fw-bold me-2 text-secondary" />
                <strong className="py-1 fs-5">No bills found</strong>
                <span className="text-secondary fs-6">Bills will be shown here</span>
              </div>
            }
            pagination
            scopedColumns={{
              position: (item: any) => (
                <td>
                  {/* <CBadge color={getBadge(showDirectorPositionsText[item.position])}> */}
                  {/* {showDirectorPositionsText[item.position]} */}
                  {/* </CBadge> */}
                </td>
              ),
              action: (item: any) => {
                return (
                  <td className="">
                    {props?.allowToEdit ? (
                      <div className="d-flex align-items-center">
                        <CiEdit
                          className="me-1 text-info"
                          color="info"
                          size={20}
                          data-type="edit"
                          onClick={(e:any) => {
                            handleClick(e, item)
                          }}
                        />
                        |
                        <MdOutlineDelete
                          color="red"
                          size={20}
                          data-type="delete"
                          onClick={(e:any) => {
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
      </EdupayLayout>
     
      {dynamicComponent}
    </div>
  )
}

export default CreateBill
