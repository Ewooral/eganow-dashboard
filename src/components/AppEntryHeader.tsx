import Image from 'next/image'
import { useUI } from 'src/store'

import {
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'

import { AppHeaderDropdown } from './header'

import logo from '@/public/brand/eganow-colored-logo.svg'
import logo_compact from '@/public/brand/eganow.png'
import { useEffect } from 'react'
import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeader = (): JSX.Element => {
  const theme = useUI((state) => state.theme)

  useEffect(() => {
    theme === 'dark'
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme')
  }, [theme])

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CRow className="w-100 fluid">
          <CCol>
            {/* Eganow Logo */}
            <CHeaderBrand className="ms-3" style={{ width: '100px' }}>
              <Image src={logo_compact} height={48} alt="Eganow" className="d-none d-md-inline" />
              <Image src={logo} height={48} alt="Eganow" className="d-inline d-md-none d-lg-none" />
              <span className="w-100 d-none d-md-inline ms-lg-2 text-center eganow-brand-text">
                Eganow
              </span>
            </CHeaderBrand>
          </CCol>
          <CCol xs={4} className="d-none d-lg-block">
            {/* header Search bar */}
            <CForm className="container-fluid">
              <CInputGroup className="w-100">
                <CInputGroupText style={{ borderRadius: '20px 0px 0px 20px' }}>
                  <CIcon icon={cilSearch} size="lg" color="primary" />
                </CInputGroupText>
                <CFormInput
                  aria-label="Text input"
                  placeholder="Enter to search for features."
                  style={{ borderRadius: '0px 20px 20px 0px' }}
                />
              </CInputGroup>
            </CForm>
          </CCol>
          <CCol>
            {/* Profile Dropdown */}
            <CHeaderNav>
              <AppHeaderDropdown />
            </CHeaderNav>
          </CCol>
        </CRow>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
