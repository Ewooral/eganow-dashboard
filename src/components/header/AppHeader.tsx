// @ts-nocheck
import { useEffect, useState, useRef } from 'react'
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
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react-pro'
import { cilSearch, cilApplicationsSettings, cilMenu, cilMoon, cilSun } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  AppHeaderDropdown,
  AppHeaderDropdownNotif,
  AppHeaderDropdownTasks,
} from '.'
import { AppBreadcrumb } from '@/components'
import logo from '@/public/images/eganow-colored-logo.svg'

const AppHeader = (props: UserInfoType): JSX.Element => {
  const asideShow = useUI((state) => state.asideShow)
  const sidebarShow = useUI((state) => state.sidebarShow)
  const setAsideShow = useUI((state) => state.setAsideShow)
  const setSidebarShow = useUI((state) => state.setSidebarShow)
 

  return (
    <CHeader position="sticky" className="shadow-none">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={() => setSidebarShow(!sidebarShow)}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="/" component={Link}>
              Features
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        {/* header Search bar */}
        {/* <CHeaderNav className="d-none d-md-flex me-auto">
          <CForm className="container-fluid">
            <CInputGroup className="w-100">
              <CInputGroupText style={{ borderRadius: '20px 0px 0px 20px' }}>
                <CIcon icon={cilSearch} size="lg" color="primary" />
              </CInputGroupText>
              <CFormInput
                aria-label="Text input"
                placeholder="Enter to search."
                style={{ borderRadius: '0px 20px 20px 0px', width: '500px' }}
              />
            </CInputGroup>
          </CForm>
        </CHeaderNav> */}

        <CHeaderNav>
          <AppHeaderDropdownNotif />
        </CHeaderNav>

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
