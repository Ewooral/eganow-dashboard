// @ts-nocheck
import { useEffect, useState } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
/* ICONS */
import { FaEdit } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { FaFilePdf, FaRegImages } from 'react-icons/fa6'
import { LuFactory } from 'react-icons/lu'
/* UI */
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
  CAlert,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilBurn } from '@coreui/icons'
import { cilIndustry } from '@coreui/icons'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* COMPONENTS */
import CountryInput from '@/components/country/CountryInput'
import { EntryLayout, AppBreadcrumb } from '@/components'
import {
  BusinessInfo,
  CustomerInfo,
  ContactPerson,
  DirectorsShareholders,
  Attachments,
  Note,
  Message,
} from '@/components/business-details'
/* HOOKS */
import { useForm } from 'react-hook-form'
import { useQueries } from '@tanstack/react-query'
import { useSnackbar } from '@/store'
/* APIs */
import merchantDocumentsAPI from '@/api/merchantDocumentsAPI'
import merchantDirectorShareholderAPI from '@/api/merchantDirectorShareholderAPI'
import merchantContactPersonAPI from '@/api/merchantContactPersonAPI'
import merchantBusinessInfoAPI from '@/api/merchantBusinessInfoAPI'

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
  const [isEditable, setIsEditable] = useState(false)
  const [allowToEdit, setAllowToEdit] = useState(false)
  //STORE
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)
  //APIs
  const { listBusinessDocuments } = merchantDocumentsAPI()
  const { getBusinessInfo, getBusinessContactInfo, getBusinessRegulators, getBusinessIndustries } =
    merchantBusinessInfoAPI()
  const { getDirectorList } = merchantDirectorShareholderAPI()
  const { listBusinessContactPersons } = merchantContactPersonAPI()
  //QUERIES
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
        queryKey: ['listBusinessContactPersons', 1],
        queryFn: () => listBusinessContactPersons(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['getBusinessIndustries', 2],
        queryFn: () => getBusinessIndustries(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['getBusinessRegulators', 3],
        queryFn: () => getBusinessRegulators(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['getBusinessInfo', 4],
        queryFn: () => getBusinessInfo(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['getBusinessContactInfo', 5],
        queryFn: () => getBusinessContactInfo(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['getDirectorList', 6],
        queryFn: () => getDirectorList(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['getBusinessDocuments', 7],
        queryFn: () => listBusinessDocuments(),
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
    ],
  })

  useEffect(() => {
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

  return (
    <EntryLayout {...props}>
      <div className="profile-banner-color">
        <div className="profile-banner-img">
          <div className="d-flex justify-content-between align-items-center px-4 px-sm-5 pt-10">

            <div className="flex-grow-1 pt-2">
              <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
                <LuFactory className="fs-2 fw-bold me-2" />
                Business Details
              </h1>
              <small className="text-secondary">
                View/ reviewing customer information and business registration details
              </small>
              <AppBreadcrumb name="Ffsggg" />
            </div>

            <div>
              <CButton
                color="danger"
                className="bg-white text-black"
                onMouseUp={() => setIsEditable((prev) => !prev)}
              >
                {isEditable ? (
                  <div className="d-flex align-items-center gap-2">
                    <MdOutlineCancel style={{ fontSize: '1.2rem' }} />
                    Cancel Edit Mode
                  </div>
                ) : (
                  <div className="d-flex align-items-center gap-2">
                    <FaEdit style={{ fontSize: '1.2rem' }} />
                    Edit
                  </div>
                )}
              </CButton>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative px-4 px-sm-5" style={{ marginTop: '-2.1rem' }}>
        {allowToEdit && (
          <CAlert
            color="danger"
            variant="outlined"
            className="d-flex align-items-center"
            dismissible
          >
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            <div>Please update your info to complete your registration.</div>
          </CAlert>
        )}

        <CRow className="justify-content-between mb-5 gap-4">
          <CCol>
            <CCard className="p-2 me-1 rounded shadow-none" style={{ minHeight: '79.3vh' }}>
              <CRow className="justify-content-center p-4">
                <div className="company-logo position-relative">
                  <CIcon icon={cilIndustry} style={{ height: '100%', width: 'auto' }} />
                  {isEditable && (
                    <span title="Change logo" className="cursor-pointer">
                      <FaEdit
                        className="
                          position-absolute 
                          bottom-0 start-90
                          bg-white 
                          p-2 
                          rounded-circle 
                          border
                          border-2
                        "
                        style={{
                          width: '34px',
                          height: '34px',
                        }}
                        onMouseUp={handleLogoUpload}
                      />
                    </span>
                  )}
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
                    {businessInfo.isLoading ? (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    ) : (
                      <h6 className="mb-4 fw-normal">{businessInfo?.data?.data.companyName}</h6>
                    )}
                  </div>

                  <div>
                    <h6 className="fw-bold">Registration Number</h6>
                    {businessInfo.isLoading ? (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    ) : (
                      <h6 className="mb-4 fw-normal">
                        {businessInfo?.data?.data.companyRegistrationNo}
                      </h6>
                    )}
                  </div>

                  <div>
                    <h6 className="fw-bold">TIN</h6>
                    {businessInfo.isLoading ? (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    ) : (
                      <h6 className="mb-4 fw-normal">
                        {businessInfo.data?.data.taxIdentificationNumber}
                      </h6>
                    )}
                  </div>

                  <div>
                    <h6 className="fw-bold">Attachments</h6>
                    {businessDocuments.isLoading ? (
                      <CPlaceholder component={CCardTitle} animation="glow">
                        <CPlaceholder xs={6} className="rounded bg-secondary" />
                      </CPlaceholder>
                    ) : (
                      <h6 className="mb-4 fw-normal">
                        Count::{' '}
                        <CBadge color="secondary" shape="rounded-circle">
                          {businessDocuments.data?.data?.length || 0}
                        </CBadge>
                      </h6>
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

          <CCol lg={9}>
            <CCard className="px-0 pt-4 me-1 rounded shadow-none" style={{ minHeight: '79.3vh' }}>
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
                    industries={businessIndustries.data?.data}
                    regulators={businessRegulators.data?.data}
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                  <CustomerInfo
                    control={control}
                    contactInfo={businessContactInfo}
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                  <ContactPerson
                    contactPersons={businessContactPersons}
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                  <DirectorsShareholders
                    directors={directorsList}
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                  <Attachments
                    businessDocuments={businessDocuments}
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    allowToEdit={allowToEdit}
                  />
                </CTabPane>

                {/* <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 6}>
                  <Note control={control} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 7}>
                  <Message control={control} />
                </CTabPane> */}
              </CTabContent>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </EntryLayout>
  )
}

export default Entry
