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
      <div className="d-flex justify-content-between flex-wrap bg-w">
        <div className="flex-grow-1">
          <h3>Biz Collect</h3>
        </div>

        <CFormSelect className="mb-3" style={{ maxWidth: '600px' }}>
          <option value="1">Account One</option>
          <option value="2">Account Two</option>
          <option value="3">Account Three</option>
        </CFormSelect>
      </div>

      <hr className="mt-0" />

      <CRow>
        <CCol sm={4}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={
              <>
                $9.000{' '}
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Collection"
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
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#321fdb',
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

        <CCol sm={4}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={
              <>
                $9.000{' '}
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Payout"
            chart={
              <CChartLine
                className="mt-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
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

        <CCol sm={4}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              <>
                $9.000{' '}
                <span className="fs-6 fw-normal">
                  (40.9% <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Commission"
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
                      backgroundColor: 'rgba(255,255,255,.2)',
                      borderColor: 'rgba(255,255,255,.55)',
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

      <CContainer fluid className="p-3 bg-gradient mb-5 border">
        <div className="d-flex justify-content-between mb-2">
          <div>
            <small>Select Date Range </small>
            <div className="d-flex justify-content-between">
              <CDateRangePicker footer locale="en-US" />
              <CButton
                color="primary"
                title="Search"
                className="mx-1 rounded-50"
                onMouseUp={() => {}}
              >
                <CIcon icon={cilSearch} id="new" />
              </CButton>
            </div>
          </div>
          <CButton
            color="primary"
            title="Refresh list"
            variant="outline"
            className="mx-1 rounded-50"
            onMouseUp={() => {}}
            style={{ marginTop: '24px' }}
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
            <CCard className="mb-4" style={{ overflow: 'auto' }}>
              <div className="pt-3 px-3">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">Total Counts</div>
              </div>

              <CCardBody>
                <CWidgetStatsF
                  style={{ border: '0px solid #857dcc' }}
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilChartPie} height={24} />}
                  title="Collection"
                  value="# 20.000"
                />
                <CWidgetStatsF
                  style={{ border: '0px solid #d5a439' }}
                  className="mb-3"
                  color="warning"
                  icon={<CIcon icon={cilChartPie} height={24} />}
                  title="Payout"
                  value="# 20.000"
                />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm={3}>
            <CCard className="mb-4" style={{ overflow: 'auto', height: '295px' }}>
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
                        <CBadge shape="rounded-square" style={{ backgroundColor: '#20c997' }}>
                          SUCCESSFUL
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-square" style={{ backgroundColor: '#c77171' }}>
                          FAILED
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-square" style={{ backgroundColor: '#d5a439' }}>
                          PENDING
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm={3}>
            <CCard className="mb-4" style={{ overflow: 'auto', height: '295px' }}>
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
                        <CBadge shape="rounded-square" style={{ backgroundColor: '#20c997' }}>
                          SUCCESSFUL
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge
                          shape="rounded-square align-middle"
                          style={{ backgroundColor: '#c77171' }}
                        >
                          FAILED
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-square" style={{ backgroundColor: '#d5a439' }}>
                          PENDING
                        </CBadge>
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
            <CCard className="mb-4 h-auto">
              <div className="pt-3 px-3 d-flex justify-content-between">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                  Payment Methods
                </div>
                <CDropdown variant="btn-group">
                  <CDropdownToggle size="sm">Collection</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Collection</CDropdownItem>
                    <CDropdownItem href="#">Payout</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>

              <CCardBody className="row pt-1">
                <div className="h-100 p-1 col-12 col-lg-6">
                  <CChart
                    style={{ height: '354px' }}
                    className="py-2 w-auto d-flex align-items-center"
                    type="pie"
                    data={{
                      datasets: [
                        {
                          backgroundColor: ['#857dcc', '#20c997', '#c77171', '#d5a439'],
                          data: [40, 20, 80, 10],
                          borderColor: ['#857dcc', '#20c997', '#c77171', '#d5a439'],
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
                          <CBadge shape="rounded-pill" style={{ backgroundColor: '#857dcc' }}>
                            MOMO
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge shape="rounded-pill" style={{ backgroundColor: '#20c997' }}>
                            CARD
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge shape="rounded-pill" style={{ backgroundColor: '#c77171' }}>
                            BANK
                          </CBadge>
                        </CTableDataCell>
                        <CTableDataCell className="text-end align-middle">
                          GHS 20,565
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell className="text-start align-middle">
                          <CBadge shape="rounded-pill" style={{ backgroundColor: '#d5a439' }}>
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
            <CCard className="mb-4">
              <div className="pt-4 px-3">
                <div className="card-title fs-5 fw-semibold ndc-green-text my-0">Settlements</div>
                <small className="card-subtitle text-disabled pt-0">Last 4 settlements</small>
              </div>
              <CCardBody className="text-center pt-2">
                <CTable style={{ height: '310px' }}>
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
                          color="success"
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
                        2
                      </CTableHeaderCell>
                      <CTableDataCell className="align-middle">1st April</CTableDataCell>
                      <CTableDataCell className="align-middle">GHS 20,565</CTableDataCell>
                      <CTableDataCell className="align-middle">
                        <CButton
                          data-type="viewTransactions"
                          color="success"
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
                        3
                      </CTableHeaderCell>
                      <CTableDataCell className="align-middle">1st March</CTableDataCell>
                      <CTableDataCell className="align-middle">GHS 20,565</CTableDataCell>
                      <CTableDataCell className="align-middle">
                        <CButton
                          data-type="viewTransactions"
                          color="success"
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
                          color="success"
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
            <CCard className="mb-4 overflow-auto">
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
