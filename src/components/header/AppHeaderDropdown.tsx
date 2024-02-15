// @ts-nocheck
import { useRouter } from 'next/router'

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
/* HOOKS */
import { useCookies } from 'react-cookie'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE_NAME } from '@/constants'
/* 




*/
const AppHeaderDropdown = (props: UserInfoType) => {
  const [_, __, removeCookie] = useCookies([EGANOW_AUTH_COOKIE_NAME])
  const router = useRouter()

  const avarter = `${props?.firstname?.charAt(0).toUpperCase()} ${props?.lastname
    ?.charAt(0)
    .toUpperCase()}`

  function handleLogout() {
    //Removing the cookie on logout
    removeCookie(EGANOW_AUTH_COOKIE_NAME)
    //Redirecting to the login page on logout
    router.push('/login')
  }

  return (
    <CDropdown variant="nav-item" alignment="end" placement="bottom-end" className="ms-auto">
      <CDropdownToggle className="py-0" caret={false}>
        <span className="d-none d-md-inline">{`${props?.firstname} ${props?.lastname}`} </span>
        <CAvatar color="primary" textColor="white" size="md">
          {avarter}
        </CAvatar>
      </CDropdownToggle>
      <CDropdownMenu
        className="pt-0"
        style={{
          minWidth: '250px',
        }}
      >
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          Profile
        </CDropdownHeader>
        <CDropdownItem className="flex text-center p-6 pt-4 text-body-secondary">
          <CAvatar color="primary" textColor="white" size="xl">
            {avarter}
          </CAvatar>
          <p className="p-2">{`${props?.firstname} ${props?.lastname}`} </p>
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

        <CDropdownItem href="#" onMouseUp={handleLogout}>
          <CIcon icon={cilAccountLogout} color="primary" className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
