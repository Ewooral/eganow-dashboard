// @ts-nocheck
import { useEffect, useState } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
/* ICONS */
import { FaEdit } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { FaFilePdf, FaRegImages } from 'react-icons/fa6'
/*  */
import {
  CCol,
  CRow,
  CContainer,
  CButton,
  CFormLabel,
  CFormInput,
  CNav,
  CNavItem,
  CNavLink,
  CFormSelect,
  CDatePicker,
  CLoadingButton,
  CTabPane,
  CTabContent,
  CBadge,
  CCard,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilIndustry } from '@coreui/icons'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* COMPONENTS */
import CountryInput from '@/components/country/CountryInput'
import { GeneralLayout } from '@/components/'
import {
  BusinessInfo,
  CustomerInfo,
  ContactPerson,
  DirectorsShareholders,
  Attachments,
  Note,
  Message,
} from '@/components/business-customer-details'
/* HOOKS */
import { useForm } from 'react-hook-form'
import { useQueries } from '@tanstack/react-query'
import BusinessAccountSvc from '@/api/merchantAccountSvcGRPC'
import MerchantCommonSvc from '@/api/merchantCommonSvcGRPC'
import { useSnackbar } from '@/store'

export const getServerSideProps = async ({ req }) => {
  const cookies = req.cookies[EGANOW_AUTH_COOKIE] ? JSON.parse(req.cookies[EGANOW_AUTH_COOKIE]) : {}
  //Response
  return {
    props: {
      cookies,
    },
  }
}

const Entry: NextPageWithLayout = (props) => {
  const [activeKey, setActiveKey] = useState(1)
  const [type, setType] = useState('')
  const [allowToEdit, setAllowToEdit] = useState(null)

  //snackbar from zustand store
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)

  //business info apis
  const { listBusinessContactPersons, getBusinessInfo,getBusinessContactInfo,getDirectorList } = BusinessAccountSvc()
  const { getBusinessSectors, getBusinessRegulators, getBusinessIndustries, } = MerchantCommonSvc()


  //handles multiple queries
  const results = useQueries({
    queries: [
      {
        queryKey: ['listbusinesscontactpersons', 1],
        queryFn: () => listBusinessContactPersons(),
        staleTime: 5000,
      },
      { queryKey: ['getBusinessIndustries', 2], queryFn: () => getBusinessIndustries() },
      { queryKey: ['getBusinessRegulators', 3], queryFn: () => getBusinessRegulators() },
      { queryKey: ['getBusinessInfo', 3], queryFn: () => getBusinessInfo(), staleTime: 5000 },
    ],
  })

  if (results[3].isError) {
    showSnackbar({
      type: 'danger',
      title: 'User Management',
      messages: results[3].error.message,
      show: true,
    })
  }

  useEffect(() => {
    if (results[3].data) {
      setAllowToEdit(true)
      // results[3]?.data?.allowForEdit
    }
  }, [results[3].data])

  const { control } = useForm({
    mode: 'onChange',
    defaultValues: {
      country: {
        flag: 'https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/GH0233.png',
        code: '+233',
        name: 'Ghana',
      },
    },
  })

  function handleLogoUpload(event: React.ChangeEvent<HTMLInputElement>): void {
    const fileInputType = document.createElement('input')
    fileInputType.setAttribute('type', 'file')
    fileInputType.setAttribute('accept', 'image/x-png,image/jpg,image/jpeg')

    if (document.createEvent) {
      //for the sake of browser compatibility
      const event = document.createEvent('MouseEvents')
      event.initEvent('click', true, true)
      fileInputType.dispatchEvent(event)
    } else {
      fileInputType.click()
    }

    fileInputType.addEventListener('change', () => {}, false)
  }

  return (
    <GeneralLayout {...props}>
      <div className="profile-banner-color">
        <div className="profile-banner-img">
          <div
            style={{ paddingTop: '30px', paddingRight: '50px' }}
            className="d-flex justify-content-between ps-5"
          >
            <div className="text-white">
              <h4 className="mb-0">Business Details</h4>
              <small>View/ reviewing customer information and business registration details</small>
            </div>

            {allowToEdit && (
              <div>
                {type === '' ? (
                  <CButton
                    onMouseUp={() => setType('edit')}
                    color="info"
                    className="d-flex justify-content-center align-items-center  gap-1 text-white"
                  >
                    <FaEdit style={{ fontSize: '1.2rem' }} />
                    Edit
                  </CButton>
                ) : (
                  <CButton
                    onMouseUp={() => setType('')}
                    color="info"
                    className="d-flex justify-content-center align-items-center  gap-1 text-white"
                  >
                    <MdOutlineCancel style={{ fontSize: '1.2rem' }} />
                    Cancel
                  </CButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="position-relative px-4 px-sm-5" style={{ marginTop: '-4.1rem' }}>
        <CRow className="justify-content-between mb-5 gap-4">
          <CCol>
            <CCard className="p-2 border me-1 rounded-0" style={{ minHeight: '100vh' }}>
              <CRow className="justify-content-center p-4">
                <div className="company-logo position-relative">
                  <CIcon icon={cilIndustry} style={{ height: '100px', width: 'auto' }} />
                  <FaEdit
                    className="position-absolute bg-white p-1 rounded-circle fs-2 border-2 border-light"
                    style={{
                      bottom: 0,
                      right: 20,
                      marginBottom: '-10',
                      border: '1px solid #ccc',
                      width: '34px',
                      height: '34px',
                    }}
                    onMouseUp={handleLogoUpload}
                  />
                </div>

                <div className="mt-4">
                  <div>
                    <h6 className="fw-bold">Current User</h6>
                    <h6 style={{ color: '#e55353' }} className="mb-4 fw-normal">
                      {props.cookies.fullName}
                    </h6>
                  </div>

                  <div>
                    <h6 className="fw-bold">Company Name</h6>
                    <h6 className="mb-4 fw-normal">{results[3]?.data?.companyName}</h6>
                  </div>

                  <div>
                    <h6 className="fw-bold">Registration Number</h6>
                    <h6 className="mb-4 fw-normal">
                      {results[3]?.data?.companyRegistrationNumber}
                    </h6>
                  </div>

                  <div>
                    <h6 className="fw-bold">TIN</h6>
                    <h6 className="mb-4 fw-normal">{results[3]?.data?.taxIdentificationNumber}</h6>
                  </div>

                  <div>
                    <h6 className="fw-bold">Attachments</h6>
                    <h6 className="mb-4 fw-normal">
                      Count::{' '}
                      <CBadge color="secondary" shape="rounded-circle">
                        3
                      </CBadge>
                    </h6>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">Country</h6>
                    <CountryInput
                      className="mb-3"
                      name="country"
                      handleForm={{ control }}
                      callback={() => {}}
                      shouldValidate={false}
                    />
                  </div>
                </div>
              </CRow>
            </CCard>
          </CCol>

          <CCol lg={9}>
            <CCard className="px-0 pt-4 border me-1 rounded-0" style={{ minHeight: '100vh' }}>
              <div className="w-100 overflow-y-hidden overflow-x-auto">
                <CNav variant="underline" className="mb-4 w-100">
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
                      <strong>Business Info</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#2" active={activeKey === 2} onClick={() => setActiveKey(2)}>
                      <strong>Contact Info</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 3} onClick={() => setActiveKey(3)}>
                      <strong>Contact Person</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 4} onClick={() => setActiveKey(4)}>
                      <strong>Directors & Shareholders</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 5} onClick={() => setActiveKey(5)}>
                      <strong>Attachments</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 6} onClick={() => setActiveKey(6)}>
                      <strong>Note</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 7} onClick={() => setActiveKey(7)}>
                      <strong>Message</strong>
                    </CNavLink>
                  </CNavItem>
                </CNav>
              </div>

              <CTabContent>
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="business-info-tab"
                  visible={activeKey === 1}
                >
                  <BusinessInfo
                    businessInfoData={results[3]}
                    industries={results[1]?.data?.industriesList}
                    regulators={results[2]?.data?.regulatorsList}
                    type={type}
                    setType={setType}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                  <CustomerInfo control={control} 
                    type={type}
                    contactInfo={results[4]}
                    setType={setType}
                    />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                  <ContactPerson control={control} data={results[0]} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                  <DirectorsShareholders 
                  type={type}
                  directors={results[5]}
                  setType={setType} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                  <Attachments control={control} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 6}>
                  <Note control={control} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 7}>
                  <Message control={control} />
                </CTabPane>
              </CTabContent>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </GeneralLayout>
  )
}

export default Entry
