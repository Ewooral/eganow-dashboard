// @ts-nocheck
import Image from 'next/image'
import { useFeatureStore, useUI } from 'src/store'

import {
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'

import { AppHeaderDropdown } from '.'

import logo from '@/public/brand/eganow-colored-logo.svg'
import logo_compact from '@/public/brand/eganow.png'
import { useEffect, useState, useRef } from 'react'
import { cilSearch, cilApplicationsSettings } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Features } from '@/components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AppEntryHeader = (props: UserInfoType): JSX.Element => {
  const theme = useUI((state) => state.theme)
  const asideShow = useUI((state) => state.asideShow)
  const setAsideShow = useUI((state) => state.setAsideShow)
  const { incrementFeatureCount } = useFeatureStore()
  const router = useRouter()

  const [searchValue, setSearchValue] = useState('')
  const [searchBox, setSearchBox] = useState(false)
  const dropdownRef = useRef<HTMLInputElement>(null)

  // Filters the features based on the search value
  const filteredFeatures = props.features?.filter(
    (feature: { icon: string; title: string; content: string; route: string }) =>
      feature.title.toLowerCase().includes(searchValue.toLowerCase()),
  )

  // Filters the features based on the search value
  const handleSearchBoxClick = (e: any) => {
    if (dropdownRef?.current?.contains(e.target)) {
      return
    }
    // If the click occurs outside the dropdown, close the search box
    setSearchBox(false)
  }

  // Function to handle changes in the search input
  const handleSearchBoxChange = (e: any) => {
    setSearchValue(e.target.value)
    if (!searchBox) {
      setSearchBox(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleSearchBoxClick, false)
    return () => document.removeEventListener('mousedown', handleSearchBoxClick, false)
  }, [])

  useEffect(() => {
    theme === 'dark'
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme')
  }, [theme])

  return (
    <CHeader position="sticky" className="mb-0 shadow-sm">
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
            <CForm style={{ position: 'relative' }} className="container-fluid">
              <CInputGroup className="w-100">
                <CInputGroupText style={{ borderRadius: '20px 0px 0px 20px' }}>
                  <CIcon icon={cilSearch} size="lg" color="primary" />
                </CInputGroupText>
                <CFormInput
                  aria-label="Text input"
                  placeholder="Enter to search for features."
                  style={{ borderRadius: '0px 20px 20px 0px' }}
                  value={searchValue}
                  onChange={handleSearchBoxChange}
                  onFocus={() => {
                    setSearchBox(true)
                  }}
                />
              </CInputGroup>
              <div ref={dropdownRef}>
                {searchBox && (
                  <div
                    style={{
                      maxHeight: '400px',
                      position: 'absolute',
                      width: '100%',
                      left: -1,
                      top: 50,
                    }}
                    className="bg-white rounded border"
                  >
                    {filteredFeatures?.map((filteredFeature: FeaturePropsType, index) => {
                      console.log(filteredFeature)

                      return (
                        filteredFeature.title && (
                          <div
                            key={index}
                            role="button"
                            style={{ textDecoration: 'none' }}
                            onClick={() => {
                              incrementFeatureCount(filteredFeature.title)
                              router.push(filteredFeature.route)
                            }}
                            className=" menudropdown text-dark border-bottom text-center py-2 px-3 d-flex align-items-center gap-3 searchbox"
                          >
                            <Image
                              orientation="top"
                              height={200}
                              src={filteredFeature.icon}
                              alt=""
                            />
                            <p className="m-0">{filteredFeature.title}</p>
                          </div>
                        )
                      )
                    })}
                  </div>
                )}
              </div>
            </CForm>
          </CCol>
          <CCol>
            {/* Profile Dropdown */}
            <CHeaderNav>
              <AppHeaderDropdown {...props} />
              <CHeaderToggler className="pl-md-3 " onClick={() => setAsideShow(!asideShow)}>
                <CIcon icon={cilApplicationsSettings} size="lg" />
              </CHeaderToggler>
            </CHeaderNav>
          </CCol>
        </CRow>
      </CContainer>
    </CHeader>
  )
}

export default AppEntryHeader
