import { CButton, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import React, { FC, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { IoAddOutline } from 'react-icons/io5'
import { MdDeleteOutline, MdOutlineDelete } from 'react-icons/md'
// import AddSchool from './AddEditSchool'
import Confirm from '@/components/Confirm'
import AddEditClassType from './AddEditClassType'
import { CiEdit } from 'react-icons/ci'
// import AddEditSchool from './AddEditSchool'

const columns = [
  { key: 'name', label: 'Name', _style: { width: '30%' } },
  { key: 'type', label: 'Type', _style: { width: '30%' } },
  { key: 'school', label: 'School', _style: { width: '30%' } },
  { key: 'action', label: 'Action', _style: { width: '10%' } },
]

const data = [
  { id: 1, name: 'YEAR THREE', type: 'TERTIARY', school: 'PENTECOST UNIVERSITY' },
  { id: 2, name: 'FORM TWO', type: 'SENIOR HIGH', school: 'SAINT PETERS MISSION SCHOOL' },
  // Add more data as needed
]
function ClassTypePane(props: any) {
  const [dynamicComponent, setDynamicComponent] = useState<any>()

  async function handleClick(e: React.ChangeEvent<HTMLInputElement>, items: any) {
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
        <AddEditClassType modalClose={modalClose} data={userData} callback={handleRefresh} />,
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

  function handleDelete() {}

  function handleRefresh() {}

  function handleModal() {
    //Setting default data & spreading the contact persons data
    const userData = {
      type: 'new',
      // ...contactPersons,
    }
    //Open the AddEditUser component
    setDynamicComponent(<AddEditClassType modalClose={modalClose} data={userData} />)
  }

  function modalClose() {
    setDynamicComponent(null)
  }

  return (
    <div className="p-3">
      <CRow>
        <div className="d-flex justify-content-between align-items-center px-4">
          <div>
            <h5 className="p-0 m-0">School management</h5>
            <p className="p-0 m-0">Add, edit, and view your class type</p>
          </div>
          <CButton
            onMouseUp={handleModal}
            className="d-flex align-items-center gap-2 eganow-primary-btn"
          >
            <IoAddOutline size={24} />
            Add Class Type
          </CButton>
        </div>
        <CRow className="my-5 px-4">
          <CCol sm={12} className="border rounded pb-3">
            <CSmartTable
              activePage={1}
              clickableRows
              columns={columns}
              //   loading={''}
              //   columnFilter
              columnSorter
              header={true}
              items={data}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedColumns={{
                position: (item: any) => <td></td>,
                action: (item: any) => {
                  return (
                    <td className="">
                      <div className="d-flex align-items-center">
                        <CiEdit
                          className="me-1 text-info"
                          size={20}
                          data-type="edit"
                          onClick={(e) => {
                             //@ts-ignore
                            handleClick(e, item)
                          }}
                        />
                        |
                        <MdOutlineDelete
                          color="red"
                          size={20}
                          data-type="delete"
                          onClick={(e) => {
                             //@ts-ignore
                            handleClick(e, item)
                          }}
                        />
                      </div>
                    </td>
                  )
                },
              }}
              selectable
              sorterValue={{ column: 'status', state: 'asc' }}
              tableProps={{
                className: '',
                responsive: true,
                striped: false,
                hover: true,
                small: false,
                // borderColor: 'light',
              }}
              tableBodyProps={{
                className: 'align-middle',
              }}
            />
          </CCol>
        </CRow>
      </CRow>
      {/* Dynamic Modal Component */}
      {dynamicComponent}
    </div>
  )
}

export default ClassTypePane
