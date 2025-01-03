import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react-pro'
import React from 'react'
import type { Confirm } from '@/types/Modal'
import { ImWarning } from 'react-icons/im'

function Confirm(props: Confirm) {
  //Handle click
  function onClick(event: any) {
    props.onClick(event, props.data)
  }

  return (
    <CModal alignment="center" visible={true} onClose={props.modalClose}>
      <CModalHeader>
        <CModalTitle>{props.title ? props.title : "Confirm"}</CModalTitle>
      </CModalHeader>
      <CModalBody className="d-flex justify-content-left align-items-center gap-2 ">
        <ImWarning className="text-danger" size={30} />
        <p className="m-0 p-2">{props.message}</p>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" name="cancel" variant="outline" onClick={props.modalClose}>
          Not really
        </CButton>
        <CButton color="danger text-white" name="ok" onClick={onClick}>
          Yes do it!
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default Confirm
