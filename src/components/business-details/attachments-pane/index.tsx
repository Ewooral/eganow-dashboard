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
import merchantDocumentsAPI from '@/api/merchantDocumentsAPI'
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
import Confirm from '@/components/Confirm'
import { get } from 'http'
import { log } from 'console'

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
const columns = [
  {
    key: 'fileType',
    label: 'Type',
    _style: { width: '2%', minWidth: '2rem' },
    filter: false,
    sorter: false,
  },
  {
    key: 'name',
    label: 'Name',
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
/*
 *
 * Contact Person Component
 *
 */
const Attachments = (props) => {
  const ITEMS_PER_PAGE = 10
  const { addBusinessDocument, deleteBusinessDocument } = merchantDocumentsAPI()
  const [isUploading, setIsUploading] = useState(false)
  const [dynamicComponent, setDynamicComponent] = useState<FC | null>(null)
  //snackbar from zustand store
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

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

  function handleClick(e: React.ChangeEvent<HTMLInputElement>, items): void {
    const { type } = e.currentTarget.dataset
    // /*  Deleting Users */
    if (type === 'delete') {
      //Open the AddEditUser component
      const message = `Are you sure want to remove ${items.name} ?`
      setDynamicComponent(
        <Confirm
          onClick={handleDelete}
          data={items.documentId}
          modalClose={modalClose}
          message={message}
        />,
      )
    }
  }

  function modalClose() {
    setDynamicComponent(null)
  }

  function getExtension(items) {
    if (typeof items.name === 'string' && items.name.includes('.')) {
      return items.name.split('.').pop()
    }
  }

  async function uploadDocument(e) {
    const selectedFile = e.target.files[0]
    // Do something with the selected file, such as uploading it or processing it
    if (selectedFile) {
      //checks to see if correct file type3 is being uploaded
      const fileExtension = selectedFile.name.split('.').pop()
      if (!['png', 'jpg', 'jpeg', 'pdf'].includes(fileExtension.toLowerCase())) {
        showSnackbar({
          type: 'danger',
          title: 'Documents',
          messages: 'Invalid file type',
          show: true,
        })
        return
      }
      //If the file size is greater than 1m abort
      if (selectedFile.size > 1000000) {
         showSnackbar({
           type: 'danger',
           title: 'Documents',
           messages: 'Please the file size can not be greater than 1mb.',
           show: true,
         })
        return
      }

      try {
        setIsUploading(true)

        const response = await addBusinessDocument({
          document: selectedFile,
        })

        showSnackbar({
          type: 'success',
          title: 'Documents',
          messages: response.message,
          show: true,
        })
        //Refetching new documents list
        props.businessDocuments.refetch()

        setIsUploading(false)
      } catch (error) {
        setIsUploading(false)
        showSnackbar({
          type: 'danger',
          title: 'Documents',
          messages: error.message,
          show: true,
        })
      }
    }
  }

  async function handleDelete(e, id) {
    try {
      const response = await deleteBusinessDocument(id)
      //Show response on success.
      showSnackbar({
        type: 'success',
        title: 'Documents',
        messages: response.message,
        show: true,
      } as SnackbarDataType)
      //Refetching new documents list
      props.businessDocuments.refetch()
    } catch (error) {
      showSnackbar({
        type: 'danger',
        title: 'Documents',
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
              List of Documents Uploaded
            </legend>

            {props?.isEditable && (
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
                /* footer */
                loading={props.businessDocuments.isFetching}
                items={props?.businessDocuments?.data?.data}
                itemsPerPageSelect
                itemsPerPage={ITEMS_PER_PAGE}
                pagination
                scopedColumns={{
                  fileType: (items) => FileIconColumn(getExtension(items)),
                  name: (item) => {
                    return (
                      <td>
                        <a href={item.url} download={item.name} className="text-decoration-none">
                          {item.name}
                        </a>
                      </td>
                    )
                  },
                  action: (item) => {
                    return (
                      <td className="py-2 ">
                        {props?.isEditable ? (
                          <CButton
                            color="danger"
                            variant="outline"
                            shape="square"
                            size="sm"
                            data-type="delete"
                            onClick={(e) => {
                              handleClick(e, item)
                            }}
                          >
                            Remove
                          </CButton>
                        ) : (
                          'N/A'
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
