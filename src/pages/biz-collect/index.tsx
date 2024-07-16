// @ts-nocheck
import { useState, useEffect, useRef } from 'react'
/* TYPES */
import type { NextPageWithLayout } from '@/pages/_app'
import { EmptyObject } from 'react-hook-form'
/*CORE UI ELEMENTS */
import {
  CCol,
  CRow,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CCard,
  CCardHeader,
  CCardBody,
  CDateRangePicker,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
  CButton,
  CFormSelect,
  CContainer,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsF,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
} from '@coreui/react-pro'
/*CORE UI ICONS */
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilChartPie, cilLoopCircular, cilSearch } from '@coreui/icons'
/*FONT AWESOME ICONS */
import { FiEye } from 'react-icons/fi'
/* COMPONENTS */
import { CChart, CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DashboardLayout, GlobalLoader } from '@/components'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* HOOKS */
import useStoreReady from '@/hooks/useStoreReady'
import {
  StatusColumn,
} from '@/components/SmartTableColumnStyle'
/* 






*/
export const getServerSideProps = async ({ req }) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE])
  //Response
  return {
    props: {
      cookies,
    },
  }
}

const BizCollect: NextPageWithLayout = (props) => {
  const isStoreReady = useStoreReady()

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <DashboardLayout {...props}>
      <div className="d-flex justify-content-between flex-wrap  mb-4">
        <div className="flex-grow-1">
          <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
            Biz Collect
          </h1>
          <span className="text-secondary">ACCOUNT NAME::</span> <small>Account One</small>
        </div>

        {/* <CFormSelect className="mb-3" style={{ maxWidth: '200px' }}>
          <option value="1">Account One</option>
          <option value="2">Account Two</option>
          <option value="3">Account Three</option>
        </CFormSelect> */}

        <CDropdown variant="btn-group">
          <CDropdownToggle
            className="bg-white text-black dark:bg-secondary dark:text-white shadow-none"
            size="md"
          >
            Account One
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Account One</CDropdownItem>
            <CDropdownItem href="#">Account Two</CDropdownItem>
            <CDropdownItem href="#">Account Three</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>

      {/* <hr className="mt-0" /> */}

      <CRow>
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4 shadow-none"
            // color="white"
            value={
              <div className="text-black dark:text-white">
                GHS 9.000{' '}
                <span className="fs-6 fw-normal text-black dark:text-white">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </div>
            }
            title="Collection Balance"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: '#304767',
                      pointBackgroundColor: '#304767',
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 30,
                      max: 89,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>

        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4   shadow-none"
            // color="warning"
            value={
              <>
                GHS 9.000{' '}
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Payout Balance"
            chart={
              <CChartLine
                className="mt-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      borderColor: '#304767',
                      pointBackgroundColor: '#304767',
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>

        <CCol className="" sm={3}>
          <CWidgetStatsA
            className="mb-4 shadow-none"
            // color="danger"
            value={
              <>
                GHS 9.000{' '}
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Commission Balance"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                    'January',
                    'February',
                    'March',
                    'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: '#304767',
                      borderColor: '#304767',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
          />
        </CCol>

        <CCol className="" sm={3}>
          <CWidgetStatsA
            className="mb-4 shadow-none"
            // color="danger"
            value={
              <>
                GHS 40.000{' '}
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Total Settlements"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                    'January',
                    'February',
                    'March',
                    'April',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: '#304767',
                      borderColor: '#304767',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
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
            <CIcon
              icon={cilLoopCircular}
              id="new"
              /* className={classNames({
                rotate: isLoading,
              })} */
            />
          </CButton>
        </div>

        <CRow>
          <CCol sm={6}>
            <CCard className="mb-4 shadow-none" style={{ overflow: 'auto' }}>
              <div className="pt-3 px-3">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">Total Counts</div>
              </div>

              <CCardBody>
                <CWidgetStatsF
                  style={{ border: '1px solid #304767' }}
                  className="mb-3  shadow-none"
                  color="secondary"
                  icon={<CIcon icon={cilChartPie} height={24}/>}
                  title="Collection"
                  value="# 20.000"
                />
                <CWidgetStatsF
                  style={{ border: '1px solid #304767' }}
                  className="mb-3  shadow-none"
                  color="secondary"
                  icon={<CIcon icon={cilChartPie} height={24} />}
                  title="Payout"
                  value="# 20,000"
                />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm={3}>
            <CCard className="mb-4 shadow-none" style={{ overflow: 'auto', height: '295px' }}>
              <div className="pt-3 px-3">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                  Collection Statistics
                </div>
              </div>
              <CCardBody style={{ gap: '10px' }}>
                <CTable className="h-100">
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        {StatusColumn('SUCCESSFUL')}
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        {StatusColumn('FAILED')}
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        {StatusColumn('PENDING')}
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm={3}>
            <CCard className="mb-4 shadow-none" style={{ overflow: 'auto', height: '295px' }}>
              <div className="pt-3 px-3">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                  Payout Statistics
                </div>
              </div>
              <CCardBody style={{ gap: '10px' }}>
                <CTable className="h-100">
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        {StatusColumn('SUCCESSFUL')}
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        {StatusColumn('FAILED')}
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        {StatusColumn('PENDING')}
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow>
          <CCol sm={6}>
            <CCard className="mb-4 h-auto shadow-none">
              <div className="pt-3 px-3 d-flex justify-content-between">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                  Payment Methods
                </div>
                <CDropdown variant="btn-group">
                  <CDropdownToggle
                    style={{ backgroundColor: '#304767' }}
                    className="k dark:bg-secondary dark:text-white"
                    size="sm"
                  >
                    Collection
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Collection</CDropdownItem>
                    <CDropdownItem href="#">Payout</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>

              <CCardBody className="row pt-1">
                <div className="h-100 p-1 col-12 col-lg-6">
                  <CChart
                    style={{ height: '400px' }}
                    className="py-2 w-auto d-flex align-items-center"
                    type="pie"
                    data={{
                      datasets: [
                        {
                          backgroundColor: ['#b8c8de', '#badbcb', '#f0b3be', '#fed8b8'],
                          data: [40, 20, 80, 10],
                          borderColor: ['#b8c8de', '#badbcb', '#f0b3be', '#fed8b8'],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={{ maintainAspectRatio: true }}
                  />
                </div>
                <div className="col-12 col-lg-6 p-1">
                  <CTable className="w-100  h-100">
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col" className="text-start">
                          Name
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col" className="text-end">
                          Amount
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge
                            shape="rounded-pill"
                            style={{ backgroundColor: '#b8c8de', color: '#304767' }}
                          >
                            MOMO
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge
                            shape="rounded-pill"
                            style={{ backgroundColor: '#badbcb', color: '#198754' }}
                          >
                            CARD
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge
                            shape="rounded-pill"
                            style={{ backgroundColor: '#f0b3be', color: '#cd0429' }}
                          >
                            BANK
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge
                            shape="rounded-pill"
                            style={{ backgroundColor: '#fed8b8', color: '#fd7e14' }}
                          >
                            MERCHANT
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                </div>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm={6}>
            <CCard className="mb-4 shadow-none">
              <div className="pt-4 px-3">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">Settlements</div>
                <small className="card-subtitle text-disabled pt-0">Last 4 settlements</small>
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
        </CRow>

        <CRow>
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
      </CContainer>
    </DashboardLayout>
  )
}

export default BizCollect
