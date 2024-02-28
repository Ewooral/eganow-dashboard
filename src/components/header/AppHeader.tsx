// @ts-nocheck
import Image from 'next/image'
import Link from 'next/link'
import { useUI } from 'src/store'

import {
  CButtonGroup,
  CFormCheck,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react-pro'
import { cilApplicationsSettings, cilMenu, cilMoon, cilSun } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import {
  AppHeaderDropdown,
  /* AppHeaderDropdownMssg,
  AppHeaderDropdownNotif,
  AppHeaderDropdownTasks, */
} from '.'

import { AppBreadcrumb } from '@/components'

import logo from '@/public/images/eganow-colored-logo.svg'

const AppHeader = (props: UserInfoType): JSX.Element => {
  const asideShow = useUI((state) => state.asideShow)
  const sidebarShow = useUI((state) => state.sidebarShow)
  const setAsideShow = useUI((state) => state.setAsideShow)
  const setSidebarShow = useUI((state) => state.setSidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={() => setSidebarShow(!sidebarShow)}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="/" component={Link}>
              Main
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* <CHeaderNav>
          <AppHeaderDropdownNotif />
        </CHeaderNav> */}
        <CHeaderNav className="ms-3 me-4">
          <AppHeaderDropdown {...props} />
        </CHeaderNav>

        <CHeaderToggler className="px-md-0 me-md-3" onClick={() => setAsideShow(!asideShow)}>
          <CIcon icon={cilApplicationsSettings} size="lg" />
        </CHeaderToggler>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
