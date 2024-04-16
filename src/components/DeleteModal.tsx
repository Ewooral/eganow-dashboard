import { CButton, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react-pro'
import React, { useEffect } from 'react'
import { ImWarning } from 'react-icons/im'

function DeleteModal(props: any) {
  return (
    <CModal alignment="center" visible={true} backdrop="static" onClose={props.modalClose}>
      {/* <CModalHeader>title</CModalHeader> */}
      <CModalBody>
        <div className="d-flex justify-content-center py-2">
          <ImWarning className="text-danger" size={40} />
        </div>
        <p className="text-center m-0 py-2 fw-bold"> Are you sure you want to remove item ?</p>
      </CModalBody>
      <CModalFooter>
        <CButton
          onClick={() => {
            props.handleDelete(props.item)
          }}
          color="danger text-white"
        >
          {' '}
          Yes, I'm sure
        </CButton>
        <CButton onClick={props.modalClose} color="secondary text-white">
          No
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DeleteModal
