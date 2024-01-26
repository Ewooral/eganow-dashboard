import React, { useEffect, useState } from 'react'
import { useCustomerInfoStore } from 'src/store'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import { cilLockLocked, cilSettings, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons'

const profileStyle = {
  minWidth: '250px',
}

const AppHeaderDropdown = () => {
  const customerInfo = useCustomerInfoStore((state) => state.customerInfo)

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    avarter: '',
  })

  useEffect(() => {
    setData({
      firstname: customerInfo?.firstname,
      lastname: customerInfo?.lastname,
      avarter:
        customerInfo.firstname?.charAt(0).toUpperCase() +
        customerInfo.lastname?.charAt(0).toUpperCase(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerInfo.firstname, customerInfo.lastname])

  return (
    <CDropdown variant="nav-item" alignment="end" placement="bottom-end" className="ms-auto">
      <CDropdownToggle className="py-0" caret={false}>
        <span className="d-none d-md-inline">{`${data.firstname} ${data.lastname}`} </span>
        <CAvatar color="primary" textColor="white" size="md">
          {data.firstname.charAt(0).toUpperCase()}
          {data.lastname.charAt(0).toUpperCase()}
        </CAvatar>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" style={profileStyle}>
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          Profile
        </CDropdownHeader>
        <CDropdownItem className="flex text-center p-6 pt-4 text-body-secondary">
          <CAvatar color="primary" textColor="white" size="xl">
            {data.firstname.charAt(0).toUpperCase()}
            {data.lastname.charAt(0).toUpperCase()}
          </CAvatar>
          <p className="p-2">{`${data.firstname} ${data.lastname}`} </p>
        </CDropdownItem>
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          Settings
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          User Management
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Change PIN
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="/login">
          <CIcon icon={cilAccountLogout} color="primary" className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
