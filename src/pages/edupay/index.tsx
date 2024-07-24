import { AppAside, AppFooter, AppHeader, GlobalLoader } from '@/components'
import EdupaySidebar from '@/components/Edupay/EdupaySidebar'
import { EGANOW_AUTH_COOKIE } from '@/constants'
import useStoreReady from '@/hooks/useStoreReady'
import { UserInfoType } from '@/types/Users'
import { FcCircuit, FcClock, FcGraduationCap, FcMoneyTransfer } from 'react-icons/fc'

import { cilLoopCircular, cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CChart } from '@coreui/react-chartjs'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CDateRangePicker,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'
import React from 'react'
import { FiEye } from 'react-icons/fi'
import Cards from '@/components/Edupay/Cards'

export const getServerSideProps = async ({ req }: any) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE])
  //Response
  return {
    props: {
      cookies,
    },
  }
}

interface EdupayProps {
  cookies: UserInfoType
}

const Edupay = (props: EdupayProps) => {
  const isStoreReady = useStoreReady()

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <>
      <EdupaySidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
        <AppHeader {...props.cookies} />
        <div className="body flex-grow-1 py-4 px-4">
          <div className="d-flex justify-content-between flex-wrap  mb-4">
            <div className="flex-grow-1">
              <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
                Edupay
              </h1>
              <span className="text-secondary">ACCOUNT NAME::</span> <small>Account One</small>
            </div>

            <CFormSelect className="mb-3" style={{ maxWidth: '200px' }}>
              <option value="1">Account One</option>
              <option value="2">Account Two</option>
              <option value="3">Account Three</option>
            </CFormSelect>
          </div>
          <CRow>
            <CCol sm={3}>
              <Cards
                prefix="GHS "
                value="154,457"
                subtitle="Total payouts"
                icon={<FcMoneyTransfer size={64} className="text-danger" />}
              />
            </CCol>

            <CCol sm={3}>
              <Cards
                prefix="#"
                value="56"
                subtitle="Unconfirmed manual payments"
                icon={<FcCircuit size={64} className="text-danger" />}
              />
            </CCol>

            <CCol className="" sm={3}>
              <Cards
                prefix="GHS "
                value="9,000"
                subtitle="Outstanding Amount"
                icon={<FcClock size={64} className="text-danger" />}
              />
            </CCol>

            <CCol className="" sm={3}>
              <Cards
                prefix="#"
                value="345"
                subtitle="Total students"
                icon={<FcGraduationCap size={64} className="" />}
              />
            </CCol>
          </CRow>
          <CContainer fluid className="p-3 bg-gradient mb-5 ">
            <div className="d-flex justify-content-between mb-4 ">
              <div>
                <small>Select Date Range </small>
                <div className="d-flex justify-content-between shadow-none">
                  <CDateRangePicker footer locale="en-US" className="shadow-none border-none" />
                  <CButton
                    // color="black"
                    title="Search"
                    className="mx-1 rounded-50 dark:text-white"
                    style={{
                      backgroundColor: '#304767',
                    }}
                    onMouseUp={() => {}}
                  >
                    <CIcon icon={cilSearch} id="new" />
                  </CButton>
                </div>
              </div>
              <CButton
                color="text-white"
                // className="bg-black text-white"
                title="Refresh list"
                variant="outline"
                className="mx-1 rounded-50"
                onMouseUp={() => {}}
                style={{ marginTop: '24px', backgroundColor: '#304767', color: 'white' }}
              >
                <CIcon icon={cilLoopCircular} id="new" />
              </CButton>
            </div>

            <CRow>
              <CCol sm={6}>
                <CCard className="mb-4 shadow-none">
                  <div className="pt-4 px-3">
                    <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                      Most recent payments
                    </div>
                    <small className="card-subtitle text-disabled pt-0">Last 5 payments</small>
                  </div>
                  <CCardBody className="text-center pt-2">
                    <CTable style={{ height: '355px' }}>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col" style={{ width: '50px' }}>
                            #
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        <CTableRow>
                          <CTableHeaderCell scope="row" className="align-middle">
                            1
                          </CTableHeaderCell>
                          <CTableDataCell className="align-middle">1st May</CTableDataCell>
                          <CTableDataCell className="align-middle">GHS 20,565</CTableDataCell>
                          <CTableDataCell className="align-middle">
                            <CButton
                              data-type="viewTransactions"
                              className=" dark:text-white dark:bg-secondary"
                              shape="square"
                              style={{ backgroundColor: '#304767' }}
                              onClick={() => {}}
                              title="View Transactions"
                            >
                              <FiEye data-type="viewTransactions" />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                          <CTableHeaderCell scope="row" className="align-middle">
                            2
                          </CTableHeaderCell>
                          <CTableDataCell className="align-middle">1st April</CTableDataCell>
                          <CTableDataCell className="align-middle">GHS 20,565</CTableDataCell>
                          <CTableDataCell className="align-middle">
                            <CButton
                              data-type="viewTransactions"
                              // color="black -text-white"
                              shape="square"
                              onClick={() => {}}
                              style={{ backgroundColor: '#304767' }}
                              className=" dark:text-white dark:bg-secondary"
                              title="View Transactions"
                            >
                              <FiEye data-type="viewTransactions" />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                          <CTableHeaderCell scope="row" className="align-middle">
                            3
                          </CTableHeaderCell>
                          <CTableDataCell className="align-middle">1st March</CTableDataCell>
                          <CTableDataCell className="align-middle">GHS 20,565</CTableDataCell>
                          <CTableDataCell className="align-middle">
                            <CButton
                              data-type="viewTransactions"
                              style={{ backgroundColor: '#304767' }}
                              className=" dark:text-white dark:bg-secondary"
                              shape="square"
                              onClick={() => {}}
                              title="View Transactions"
                            >
                              <FiEye data-type="viewTransactions" />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                          <CTableHeaderCell scope="row" className="align-middle">
                            4
                          </CTableHeaderCell>
                          <CTableDataCell className="align-middle">1st February</CTableDataCell>
                          <CTableDataCell className="align-middle">GHS 20,565</CTableDataCell>
                          <CTableDataCell className="align-middle">
                            <CButton
                              data-type="viewTransactions"
                              style={{ backgroundColor: '#304767' }}
                              className=" dark:text-white dark:bg-secondary"
                              shape="square"
                              onClick={() => {}}
                              title="View Transactions"
                            >
                              <FiEye data-type="viewTransactions" />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol>
                <CCard className="mb-4 overflow-auto shadow-none">
                  <div className="pt-3 px-3">
                    <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                      Your Payment Trends
                    </div>
                    <small className="card-subtitle text-disabled pt-0">
                      Multiline chart showing collection and payout transaction trends
                    </small>
                  </div>
                  <CCardBody className="text-center">
                    <CChart
                      type="line"
                      data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [
                          {
                            label: 'Collection Trend',
                            backgroundColor: 'rgba(100, 149, 237, 0.2)',
                            borderColor: 'rgba(100, 149, 237, 1)',
                            pointBackgroundColor: 'rgba(100, 149, 237, 1)',
                            pointBorderColor: '#fff',
                            data: [40, 20, 39, 40, 39, 80],
                          },
                          {
                            label: 'Payout Trend',
                            backgroundColor: 'rgba(220, 20, 60, 0.2)',
                            borderColor: 'rgba(220, 20, 60, 1)',
                            pointBackgroundColor: 'rgba(220, 20, 60, 1)',
                            pointBorderColor: '#fff',
                            data: [20, 12, 28, 29, 25, 70],
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            labels: {
                              color: 'rgba(151, 187, 205, 1)',
                            },
                          },
                        },
                        scales: {
                          x: {
                            grid: {
                              color: 'rgba(220, 220, 220, .8)',
                            },
                            ticks: {
                              color: 'rgba(151, 187, 205, 1)',
                            },
                          },
                          y: {
                            grid: {
                              color: 'rgba(220, 220, 220, .8)',
                            },
                            ticks: {
                              color: 'rgba(151, 187, 205, 1)',
                            },
                          },
                        },
                      }}
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>

            <CRow></CRow>
          </CContainer>
        </div>
        <AppFooter />
      </div>
      <AppAside />
    </>
  )
}

export default Edupay
