// @ts-nocheck
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import { cilBriefcase, cilLockLocked, cilSettings, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons'
/* HOOKS */
import { useCookies } from 'react-cookie'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* UTILITY FUNCITONS */
import { getInitialsForAvatar_util } from '@/util'
/* TYPE */
import { UserInfoType } from '@/types/Users'
import { MdOutlineBusinessCenter } from 'react-icons/md'
/* 




*/
const AppHeaderDropdown = (props: UserInfoType) => {
  const [_, __, removeCookie] = useCookies()
  const router = useRouter()

  //Creating avatar
  const avatarInitials = useMemo(
    () => getInitialsForAvatar_util(2, props?.fullName),
    [props?.fullName],
  )

  function handleLink() {
    //Redirecting to the business-details page
    router.push('/business-details')
  }

  function handleLogout() {
    //Removing the cookie on logout
    removeCookie(EGANOW_AUTH_COOKIE)
    //Redirecting to the login page on logout
    router.push('/login')
  }

  return (
    <CDropdown variant="nav-item" alignment="end" placement="bottom-end" className="ms-auto">
      <CDropdownToggle className="py-0" caret={false}>
        <span className="d-none d-md-inline">{props?.fullName} </span>
        <CAvatar color="primary" textColor="white" size="md">
          {avatarInitials}
        </CAvatar>
      </CDropdownToggle>
      <CDropdownMenu
        className="pt-0"
        style={{
          minWidth: '235px',
        }}
      >
        <CDropdownHeader className="bg-light dark:bg-dark dark:bg-opacity-10 fw-semibold py-2">
          Profile
        </CDropdownHeader>
        <CDropdownItem
          href="#"
          className="bg-light dark:bg-dark flex text-center p-6 pt-4 text-body-secondary "
          onMouseUp={handleLink}
        >
          <CAvatar color="primary" textColor="white" size="xl">
            {avatarInitials}
          </CAvatar>
          <p className="p-2 dark:text-white">{props?.fullName} </p>
        </CDropdownItem>
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          Settings
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          User Management
        </CDropdownItem>
        <CDropdownItem href="/business-details">
          <CIcon icon={cilBriefcase} className="me-2" />
          Business Details
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Change Password
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
