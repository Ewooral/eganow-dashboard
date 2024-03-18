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
} from '@coreui/react-pro'

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
  const columns = [
    {
      key: 'fileType',
      label: 'Icon',
      _style: { width: '2%', minWidth: '2rem' },
      filter: false,
      sorter: false,
    },
    {
      key: 'fileName',
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

  const data = [
    {
      id: 1,
      fileType: 'pdf',
      fileName: 'ddgfgfdgfdgfdgfdgfgfg',
    },
    {
      id: 1,
      fileType: 'pdf',
      fileName: 'fgfgfdgdfgfgfgfgfg',
    },
    {
      id: 1,
      fileType: 'png',
      fileName: 'dfdfdf dfdfd dfdf dfdf',
    },
  ]

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

    fileInputType.addEventListener('change', () => {}, false)
  }

  return (
    <>
      <CRow className="mb-4 px-4">
        <CCol sm={12}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              List of Documents Uploaded
            </legend>

            <div className="text-center">
              <CButton
                color="info"
                className="fs-3 rounded-5 shadow"
                onMouseUp={handleFileUpload}
                style={{ outline: '2px dashed #fff' }}
              >
                <GrCloudUpload className="fs-1" /> Upload Files
              </CButton>
            </div>

            <div>
              <CSmartTable
                activePage={1}
                clickableRows
                columns={columns}
                columnSorter
                footer
                items={data}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  fileType: (items) => FileIconColumn(items.fileType),
                  action: (item) => {
                    return (
                      <td className="py-2 d-flex">
                        <CButton
                          color="danger"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {}}
                        >
                          Remove
                        </CButton>
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
    </>
  )
}

export default Attachments
