// @ts-nocheck
import { useEffect, useState } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
/* ICONS */
import { FaEdit } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { FaFilePdf, FaRegImages } from 'react-icons/fa6'
import { LuFactory } from 'react-icons/lu'
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
  CPlaceholder,
  CCardTitle,
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
  const {
    listBusinessContactPersons,
    getBusinessInfo,
    getBusinessContactInfo,
    getDirectorList,
    listBusinessDocuments,
  } = BusinessAccountSvc()
  const { getBusinessRegulators, getBusinessIndustries } = MerchantCommonSvc()

  //handles multiple queries
  const [
    businessContactPersons,
    businessIndustries,
    businessRegulators,
    businessInfo,
    businessContactInfo,
    directorsList,
    businessDocuments,
  ] = useQueries({
    queries: [
      {
        queryKey: ['listbusinesscontactpersons', 1],
        queryFn: () => listBusinessContactPersons(),
        staleTime: 5000,
      },
      {
        queryKey: ['getBusinessIndustries', 2],
        queryFn: () => getBusinessIndustries(),
        staleTime: 5000,
      },
      {
        queryKey: ['getBusinessRegulators', 3],
        queryFn: () => getBusinessRegulators(),
        staleTime: 5000,
      },
      { queryKey: ['getBusinessInfo', 4], queryFn: () => getBusinessInfo(), staleTime: 5000 },
      {
        queryKey: ['getBusinessContactInfo', 5],
        queryFn: () => getBusinessContactInfo(),
        staleTime: 5000,
      },
      { queryKey: ['getDirectorList', 6], queryFn: () => getDirectorList(), staleTime: 5000 },
      {
        queryKey: ['getBusinessDocuments', 7],
        queryFn: () => listBusinessDocuments(),
        staleTime: 5000,
      },
    ],
  })

  useEffect(() => {
    if (allowToEdit) {
      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: 'Please update your info to complete your registration',
        show: true,
      })
    }
  }, [allowToEdit, showSnackbar])

  useEffect(() => {
    if (businessInfo.data) {
      setAllowToEdit(true)
      // results[3]?.data?.allowForEdit
    }

    if (businessInfo?.error?.message) {
      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: businessInfo?.error?.message,
        show: true,
      })
    }

    if (businessInfo?.error?.code === 2) {
      showSnackbar({
        type: 'danger',
        title: 'User Management',
        messages: 'network error',
        show: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessInfo.data, businessInfo?.error?.message])

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

  //function to toggle edit mode
  function toggleEdit() {
    type === '' ? setType('edit') : setType('')
  }

  return (
    <GeneralLayout {...props}>
      <div className="profile-banner-color">
        <div className="profile-banner-img">
          <div
            style={{ paddingTop: '30px', paddingRight: '50px' }}
            className="d-flex justify-content-between ps-5"
          >
            <div className="flex-grow-1 pt-2">
              <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
                <LuFactory className="fs-2 fw-bold me-2" />
                Business Details
              </h1>
              <small className="text-secondary">
                View/ reviewing customer information and business registration details
              </small>
            </div>

            {allowToEdit && (
              <div>
                <CButton
                  onMouseUp={toggleEdit}
                  color="danger"
                  className="d-flex justify-content-center align-items-center bg-white text-black  gap-1"
                >
                  {type === '' ? (
                    <div className="d-flex align-items-center gap-2 link-black">
                      <FaEdit style={{ fontSize: '1.2rem' }} />
                      Edit
                    </div>
                  ) : (
                    <div className="d-flex align-items-center gap-2">
                      <MdOutlineCancel style={{ fontSize: '1.2rem' }} />
                      Cancel
                    </div>
                  )}
                </CButton>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="position-relative px-4 px-sm-5" style={{ marginTop: '-2.1rem' }}>
        <CRow className="justify-content-between mb-5 gap-4">
          <CCol>
            <CCard className="p-2  me-1 rounded shadow-none" style={{ minHeight: '79.3vh' }}>
              <CRow className="justify-content-center p-4">
                <div className="company-logo position-relative">
                  <CIcon icon={cilIndustry} style={{ height: '100px', width: 'auto' }} />
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
                    {businessInfo?.data?.companyName ? (
                      <h6 className="mb-4 fw-normal">{businessInfo?.data?.companyName}</h6>
                    ) : (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    )}
                  </div>

                  <div>
                    <h6 className="fw-bold">Registration Number</h6>
                    {businessInfo?.data?.companyRegistrationNumber ? (
                      <h6 className="mb-4 fw-normal">
                        {businessInfo?.data?.companyRegistrationNumber}
                      </h6>
                    ) : (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    )}
                  </div>

                  <div>
                    <h6 className="fw-bold">TIN</h6>
                    {businessInfo?.data?.taxIdentificationNumber ? (
                      <h6 className="mb-4 fw-normal">
                        {businessInfo?.data?.taxIdentificationNumber}
                      </h6>
                    ) : (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    )}
                  </div>

                  <div>
                    <h6 className="fw-bold">Attachments</h6>
                    {businessDocuments?.data?.documentsList?.length ? (
                      <h6 className="mb-4 fw-normal">
                        Count::{' '}
                        <CBadge color="secondary" shape="rounded-circle">
                          {businessDocuments?.data?.documentsList?.length || 0}
                        </CBadge>
                      </h6>
                    ) : (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    )}
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

          <CCol lg={9} className="">
            <CCard className="px-0 pt-4  me-1 rounded shadow-none" style={{ minHeight: '79.3vh' }}>
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
                </CNav>
              </div>

              <CTabContent>
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="business-info-tab"
                  visible={activeKey === 1}
                >
                  <BusinessInfo
                    businessInfoData={businessInfo}
                    industries={businessIndustries?.data?.industriesList}
                    regulators={businessRegulators?.data?.regulatorsList}
                    type={type}
                    setType={setType}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                  <CustomerInfo
                    control={control}
                    type={type}
                    contactInfo={businessContactInfo}
                    setType={setType}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                  <ContactPerson
                    control={control}
                    data={businessContactPersons}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                  <DirectorsShareholders
                    type={type}
                    directors={directorsList}
                    setType={setType}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                  <Attachments
                    control={control}
                    data={businessDocuments}
                    allowToEdit={allowToEdit}
                  />
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
