import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CAlert,
  CButton,
  CCloseButton,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cilBasket,
  cilBell,
  cilChartPie,
  cilSpeedometer,
  cilUserFollow,
  cilUserUnfollow,
  cilInfo,
  cilPlus,
} from '@coreui/icons'

const AppHeaderDropdownNotification = () => {
  const itemsCount = 2
  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle caret={false}>
        <CIcon icon={cilBell} size="lg" className="my-1 mx-2" />
        <CBadge
          shape="rounded-pill"
          color="danger-gradient"
          className="position-absolute top-0 end-0"
        >
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="py-0 overflow-hidden">
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 d-flex align-items-center justify-content-between">
          <strong>You have {itemsCount} notifications</strong>
          <CButton color="link">Clear All</CButton>
        </CDropdownHeader>

        <>
          <CDropdownItem className="p-4 d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <CIcon icon={cilInfo} className="flex-shrink-0 me-2 text-info" width={24} height={24} />
            <span className="d-inline-block text-truncate" style={{ maxWidth: '25rem' }}>
              Your eganow business account scanned document.
            </span>
          </CDropdownItem>
          <CDropdownItem className="p-4 d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <CIcon
              icon={cilUserUnfollow}
              className="flex-shrink-0 me-2 text-success"
              width={24}
              height={24}
            />
            <span className="d-inline-block text-truncate" style={{ maxWidth: '25rem' }}>
              Please report to the HQ of Eganow to collect the scanned document of
            </span>
          </CDropdownItem>
        </>

        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10">
          <CButton color="link">View All</CButton>
        </CDropdownHeader>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdownNotification
