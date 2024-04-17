// @ts-nocheck
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
/* ICONS */
import { FaFilePdf, FaRegImages } from 'react-icons/fa6'
import { GrCloudUpload } from 'react-icons/gr'
/*  */
/* COMPONENTS */
import Snackbar from '@/components/Snackbar'

/* API */
import MerchantAccountSvc from '@/api/merchantAccountSvcGRPC'

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
  CSpinner,
  CProgress,
  CProgressBar,
} from '@coreui/react-pro'
import { useSnackbar } from '@/store'
import DeleteModal from '@/components/DeleteModal'

export const FileIconColumn = (ext) => {
  return (
    <td className="text-center">
      {ext === 'pdf' ? (
        <FaFilePdf className="text-danger fs-3" />
      ) : (
        <FaRegImages className="text-success fs-3" />
      )}
    </td>
  )
}
/*
 *
 * Contact Person Component
 *
 */
const Attachments = (props) => {
  const { addBusinessDocument, deleteBusinessDocument } = MerchantAccountSvc()
  const [isUploading, setIsUploading] = useState(false)
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)

  //snackbar from zustand store
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  const columns = [
    {
      key: 'fileType',
      label: 'Icon',
      _style: { width: '2%', minWidth: '2rem' },
      filter: false,
      sorter: false,
    },
    {
      key: 'name',
      _style: { width: '50%' },
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

  //function to handle file upload
  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>): void {
    const fileInputType = document.createElement('input')
    fileInputType.setAttribute('type', 'file')
    fileInputType.setAttribute('accept', 'image/x-png,image/jpg,image/jpeg, application/pdf')

    if (document.createEvent) {
      //for the sake of browser compatibility
      const event = document.createEvent('MouseEvents')
      event.initEvent('click', true, true)
      fileInputType.dispatchEvent(event)
    } else {
      fileInputType.click()
    }

    fileInputType.addEventListener('change', uploadDocument, false)
  }

  function uploadDocument(e) {
    const selectedFile = e.target.files[0]

    // Do something with the selected file, such as uploading it or processing it
    if (selectedFile) {
      //checks to see if correct file type3 is being uploaded
      const fileName = selectedFile.name
      const fileExtension = fileName.split('.').pop()
      if (!['png', 'jpg', 'jpeg', 'pdf'].includes(fileExtension.toLowerCase())) {      
        showSnackbar({
          type: 'danger',
          title: 'User Management',
          messages: 'Invalid file type',
          show: true,
        })
        return
      }

      const reader = new FileReader()
      reader.onload = async (e) => {
        // Find the index of the comma
        const base64String = e.target.result
        const commaIndex = base64String?.indexOf(',')

        // Remove the prefix including the comma
        const base64WithoutPrefix = base64String.substring(commaIndex + 1)

        if (base64String) {
          setIsUploading(true)

          try {
            const response = await addBusinessDocument({
              document: base64WithoutPrefix,
              fileName: selectedFile.name,
            })
            if (response) {
              setIsUploading(false)

              props.data.refetch()
            }
            showSnackbar({
              type: 'success',
              title: 'User Management',
              messages: response.value,
              show: true,
            })
          } catch (error) {
            setIsUploading(false)

            showSnackbar({
              type: 'danger',
              title: 'User Management',
              messages: error.message,
              show: true,
            })
          }
        }
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  //function to delete document
  function handleClick(e: React.ChangeEvent<HTMLInputElement>, items): void {
    const { type } = e.currentTarget.dataset

    // /*  Deleting Users */
    if (type === 'delete') {
      //Open the AddEditUser component
      setDynamicComponent(
        <DeleteModal
          handleDelete={handleDelete}
          item={items}
          modalClose={modalClose}
          // isLoading={isLoading}
        />,
      )
    }
  }

  async function handleDelete(items) {
    try {
      const response = await deleteBusinessDocument(items)
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
      props.data.refetch()
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

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              List of Documents Uploaded
            </legend>

            {props?.allowToEdit && (
              <div className="text-center">
                {isUploading ? (
                  <div className="d-flex justify-content-center">
                    <CProgress
                      className="w-25"
                      height={28}
                      color="info"
                      value={100}
                      variant="striped"
                      animated
                    >
                      <p className="m-0 fs-6"> uploading your document</p>
                    </CProgress>
                  </div>
                ) : (
                  <CButton
                    color="info"
                    className="fs-5 rounded-5 shadow text-white"
                    onMouseUp={handleFileUpload}
                    style={{ outline: '2px dashed #fff' }}
                  >
                    <GrCloudUpload className="fs-3  text-white" /> Upload Files
                  </CButton>
                )}
              </div>
            )}

            <div>
              <CSmartTable
                activePage={1}
                clickableRows
                columns={columns}
                columnSorter
                footer
                loading={props.data.isFetching}
                items={props?.data?.data?.documentsList}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  fileType: (items) => FileIconColumn(items.name.split('.').pop()),
                  action: (item) => {
                    return (
                      <td className="py-2 ">
                        {props?.allowToEdit && (
                          <CButton
                            color="danger"
                            variant="outline"
                            shape="square"
                            size="sm"
                            data-type="delete"
                            onClick={(e) => {
                              handleClick(e, item.docId)
                            }}
                          >
                            Remove
                          </CButton>
                        )}
                      </td>
                    )
                  },
                }}
                sorterValue={{ column: 'status', state: 'asc' }}
                tableProps={{
                  className: 'add-this-class',
                  responsive: true,
                  striped: false,
                  hover: true,
                  /* bordered: true, */
                }}
                tableBodyProps={{
                  className: 'align-middle',
                }}
              />
            </div>
          </fieldset>
        </CCol>
      </CRow>
      {/* Dynamic Modal Component */}
      {dynamicComponent}
    </>
  )
}

export default Attachments
