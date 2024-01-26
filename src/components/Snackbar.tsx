// @ts-nocheck
import { useSnackbar } from '@/store'
import { cilBurn, cilCheckCircle, cilInfo, cilWarning } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CToast, CToastHeader, CToastBody, CToaster, CListGroup, CListGroupItem } from '@coreui/react-pro'
import React, { useEffect, useRef } from 'react'

/* 

*/
function Toast(props) {
  let icon = null

  switch (props.data.type) {
    case 'primary':
      icon = cilInfo
      break
    case 'success':
      icon = cilCheckCircle
      break
    case 'warning':
      icon = cilWarning
      break
    case 'danger':
      icon = cilBurn
      break

    default:
      icon = cilInfo
      break
  }

  return (
    <CToast autohide={true} visible={props.data.show} color={props.data.type}>
      <CToastHeader closeButton>
        <CIcon icon={icon} className="flex-shrink-0 me-2" width={24} height={24} />
        <div className="fw-bold me-auto">{props.data.title}</div>
      </CToastHeader>
      <CToastBody className="text-light" style={{ maxHeight: '94vh', overflow: 'auto' }}>
        {typeof props.data.messages === 'object' ? (
          <ol className="p-3">
            {props.data.messages.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ol>
        ) : (
          props.data.messages
        )}
      </CToastBody>
    </CToast>
  )
}

function Snackbar(props) {
  const showingSnackbarData = useSnackbar((state) => state.data)
  const closeSnackbar = useSnackbar((state) => state.closeSnackbar)
  const toaster = useRef()

  useEffect(() => {
    if (showingSnackbarData.show) {
      closeSnackbar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingSnackbarData])

  return <CToaster ref={toaster} push={<Toast data={showingSnackbarData} />} placement="top-end" />
}

export default Snackbar
