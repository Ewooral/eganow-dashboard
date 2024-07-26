import { GlobalLoader } from '@/components'
import EdupayLayout from '@/components/Edupay/EdupayLayout'

import ClassTypePane from '@/components/Edupay/setups/class-type-pane'

import BillingItems from '@/components/Edupay/setups/Billing-items'

import SchoolPane from '@/components/Edupay/setups/school-pane'
import SubTypePane from '@/components/Edupay/setups/sub-type-pane'
import { EGANOW_AUTH_COOKIE } from '@/constants'
import useStoreReady from '@/hooks/useStoreReady'
import { NextPageWithLayout } from '@/pages/_app'
import {
  CCard,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react-pro'
import React, { useState } from 'react'
import { FcLibrary } from 'react-icons/fc'
import { LuFactory } from 'react-icons/lu'

export const getServerSideProps = async ({ req }: any) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE])
  //Response
  return {
    props: {
      cookies,
    },
  }
}
const Setup: NextPageWithLayout = (props) => {
  const [activeKey, setActiveKey] = useState(1)
  const [type, setType] = useState('')
  const isStoreReady = useStoreReady()

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <EdupayLayout {...props}>
      <div className="flex-grow-1 pt-2">
        <h1
          className="fs-3 fw-bold text-danger-emphasis d-flex align-items-center"
          style={{ color: '#CC0229' }}
        >
          <FcLibrary className="fs-2 fw-bold me-2" />
          School set up
        </h1>
        <small className="text-secondary">
          View/ reviewing customer information and business registration details
        </small>
      </div>

      {/** Tabs */}
      <div className=" mt-4 ">
        <CRow>
          <CCol className="">
            <CCard className="pt-2   rounded shadow-none" style={{ minHeight: '79.3vh' }}>
              <div className="w-100 overflow-y-hidden overflow-x-auto">
                <CNav variant="underline" layout="justified" className="mb-4 w-100">
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
                      <strong>School</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#2" active={activeKey === 2} onClick={() => setActiveKey(2)}>
                      <strong>Classification Type</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#3" active={activeKey === 3} onClick={() => setActiveKey(3)}>
                      <strong>Sub classification Type</strong>
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" active={activeKey === 4} onClick={() => setActiveKey(4)}>
                      <strong>Billing Items</strong>
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
                  <SchoolPane type={type} setType={setType} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                  <ClassTypePane type={type} setType={setType} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                  <SubTypePane type={type} setType={setType} />

                  {/* <CustomerInfo
                  control={control}
                  type={type}
                  contactInfo={businessContactInfo}
                  setType={setType}
                /> */}
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                  {/* <ContactPerson
                  control={control}
                  data={businessContactPersons}
                  allowToEdit={allowToEdit}
                  
                /> */}
                  <BillingItems type={type} setType={setType} />
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                  {/* <Attachments control={control} data={businessDocuments} allowToEdit={allowToEdit} /> */}
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 6}>
                  {/* <Note control={control} /> */}
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 7}>
                  {/* <Message control={control} /> */}
                </CTabPane>
              </CTabContent>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </EdupayLayout>
  )
}

export default Setup
