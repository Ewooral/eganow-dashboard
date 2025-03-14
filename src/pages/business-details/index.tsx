// @ts-nocheck
import { useEffect, useState } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
/* ICONS */
import { IoIosCheckmark } from "react-icons/io";
import { FaEdit } from 'react-icons/fa'
import { GoDotFill } from "react-icons/go";
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
  CCardBody


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
import { usePopoverStore, useSnackbar } from '@/store'
/* APIs */
import merchantDocumentsAPI from '@/api/merchantDocumentsAPI'
import merchantDirectorShareholderAPI from '@/api/merchantDirectorShareholderAPI'
import merchantContactPersonAPI from '@/api/merchantContactPersonAPI'
import merchantBusinessInfoAPI from '@/api/merchantBusinessInfoAPI'
import Hydration from "@/components/Hydration";
import ClearStorageToggle from '@/components/ClearStorageToggle';
import useSectionStatus from '@/hooks';
import { useRouter } from 'next/navigation';


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
  const [isUserApproved, setIsUserApproved] = useState(null)
  //STORE
  const showSnackbar = useSnackbar((state: any) => state.showSnackbar)
  const updateSectionStatus = usePopoverStore((state) => state.updateSectionStatus)
  const sections = usePopoverStore((state) => state.sections)
  const [tabsCompleted, setTabsCompleted] = useState()
  const completedSections = sections.filter((section) => section.status === "COMPLETED").length;


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

  useSectionStatus(businessContactPersons.data?.data, "contact-person");
  useSectionStatus(directorsList.data?.data, "directors");
  useSectionStatus(businessDocuments.data?.data, "attachments");

  useEffect(() => {
    if (completedSections) {
      setTabsCompleted(completedSections)
    }
  }, [completedSections, tabsCompleted])

  useEffect(() => {
    console.log("TABS COMPLETED::: ", tabsCompleted)
  }, [completedSections, tabsCompleted])



  useEffect(() => {
    let getIsApproved = localStorage.getItem('isApproved')
    setIsUserApproved(getIsApproved)
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

    fileInputType.addEventListener('change', () => { }, false)


    // Get the current count of completed sections
    // This will return the number of "COMPLETED" sections
    const completedSections = sections.filter((section) => section.status === "COMPLETED").length;

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

            <div className='align-self-end'>

              {isUserApproved == 'true' ? "" : <CButton
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
                    Edit Details
                  </div>
                )}
              </CButton>}
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative px-2 px-sm-5" style={{ marginTop: '-2.1rem' }}>
        {isUserApproved == "false" && (
          <CAlert
            color="info"
            variant="outlined"
            className="d-flex align-items-center"
            dismissible
          >
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            <div>Please update all your info to complete your registration.</div>
          </CAlert>
        )}

        <CRow className="justify-content-between mb-5 gap-6">
          {/* style={{ minHeight: '79.3vh' }} */}
          <CCol>
            <CCard
              className="p-2 me-1 rounded shadow-none"
            // style={{ maxHeight: "658px", overflow: "auto" }}
            >
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
                      callback={() => { }}
                      shouldValidate={false}
                    />
                  </div>
                  <Separator />
                  <div className="mb-4 border-top-2">
                    <TrackTabProgress />
                  </div>
                  {/* <ClearStorageToggle /> */}
                </div>
              </CRow>
            </CCard>
          </CCol>

          <CCol lg={9}>
            {/* style={{ minHeight: '79.3vh' }} */}
            <CCard className="px-0 pt-4 me-1 rounded shadow-none" >
              <div className="w-100 overflow-y-hidden overflow-x-auto">
                <CNav variant="underline" className="mb-4 w-100">
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
                      <strong>Business Info</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#2" active={activeKey === 2} onClick={() => setActiveKey(2)}>
                      <strong>Business Contact</strong>
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
            {
              tabsCompleted === 5 && (
                <CRow className="justify-content-center mt-5">
                  <CCol md={8}>
                    <CCard className="text-center">
                      <CCardBody>
                        <h2 className="mb-3">Welcome Aboard!</h2>
                        <p className="text-muted">
                          Congratulations on completing your onboarding! 🎉 <br />
                          You're now ready to explore all the features we offer.
                        </p>
                        <CButton color="primary" onClick={() => navigate('/features')}>
                          Go to Features Page
                        </CButton>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              )
            }
          </CCol>
        </CRow>
      </div>
    </EntryLayout>

  )
}

export default Entry



const StatusColumnForProgressTab = (status: string) => {
  let bg, color;

  switch (status) {
    case "COMPLETED":
      bg = "#badbcb";
      color = "#198754";
      break;
    case "PENDING":
      bg = "#fed8b8";
      color = "#fd7e14";
      break;
    default:
      bg = "#f0b3be";
      color = "#cd0429";
  }

  return (
    <span
      className="d-inline-flex align-items-center rounded-5 px-2 py-1"
      style={{ color, backgroundColor: bg, fontSize: "12px", fontWeight: "bold" }}
    >
      <GoDotFill className="me-1" />
      {status}
    </span>
  );
};

const TrackTabProgress = () => {
  const sections = usePopoverStore((state) => state.sections);

  return (
    <Hydration>
      <CCol lg={9}>
        {/* Beautifully Styled Heading */}
        <div className="mb-4 text-center">
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Track Tab Progress
          </h2>
          <p style={{ fontSize: "12px", color: "#666", marginTop: "-5px" }}>
            Progress for each info tab is displayed here
          </p>
        </div>

        <CNav className="w-100 d-flex flex-column gap-2">
          {sections.map((section) => (
            <CNavItem key={section.id}>
              <CNavLink
                href="#"
                className="d-flex justify-content-between align-items-center p-2"
                style={{
                  fontSize: "12px",
                  fontWeight: section.status === "COMPLETED" ? "bold" : "normal",
                  color: section.status === "COMPLETED" ? "#000" : "#666",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <span>{section.title}</span>
                <span>{StatusColumnForProgressTab(section.status)}</span>
              </CNavLink>
            </CNavItem>
          ))}
        </CNav>
      </CCol>
    </Hydration>
  );
};


const Separator = () => {
  return (
    <CRow className="my-4">
      <CCol>
        <div className="w-100 border-bottom border-2 border-dark" />
      </CCol>
    </CRow>
  );
};

