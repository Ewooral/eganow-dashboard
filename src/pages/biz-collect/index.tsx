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
import { CChart, CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DashboardLayout, GlobalLoader } from '@/components'

import type { NextPageWithLayout } from '@/pages/_app'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilChartPie, cilLoopCircular, cilSearch } from '@coreui/icons'
import { useState, useEffect, useRef } from 'react'
/* Use Hooks */
import useUserAuth from '@/hooks/useUserAuth'
/* TYPES */
import { UserLoggedType } from '@/types/Users'
import { EmptyObject } from 'react-hook-form'
import { FiEye } from 'react-icons/fi'

const BizCollect: NextPageWithLayout = () => {
  const [userLogged, setUserLoggedIn] = useState<UserLoggedType | EmptyObject>({})
  const { customerInfo } = useUserAuth()

  /* ************************************************************* */
  useEffect(() => {
    setUserLoggedIn({
      status: customerInfo.issuccess,
      userstatus: customerInfo.messagesuccessfulorfailed,
    })
  }, [customerInfo])

  //Server-render loading state
  if (!userLogged?.status || userLogged?.userstatus !== 'SUCCESSFUL') {
    return <GlobalLoader />
  }

  return (
    <DashboardLayout>
      <div className="d-flex justify-content-between">
        <h3 style={{ minWidth: '300px' }}>Biz Collect</h3>

        <CFormSelect className="mb-3" style={{ maxWidth: '600px' }}>
          <option value="1">Account One</option>
          <option value="2">Account Two</option>
          <option value="3">Account Three</option>
        </CFormSelect>
      </div>

      <hr />

      <CRow>
        <CCol sm={3}>
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

        <CCol sm={3}>
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

        <CCol sm={6}>
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

      <CContainer fluid className="p-3 bg-gradient">
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
            style={{ marginTop: '30px' }}
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
              <CCardHeader className="d-flex justify-content-between">
                <header className="d-flex justify-content-between">
                  <span className="h5 me-1">Total Counts</span>
                </header>
              </CCardHeader>
              <CCardBody>
                <CWidgetStatsF
                  style={{ border: '1px solid #857dcc' }}
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilChartPie} height={24} />}
                  title="Collection"
                  value="# 20.000"
                />
                <CWidgetStatsF
                  style={{ border: '1px dashed #d5a439' }}
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
            <CCard className="mb-4" style={{ overflow: 'auto', height: '300px' }}>
              <CCardHeader className="d-flex justify-content-between">
                <header>
                  <span className="h5">Collection Statistics</span>
                </header>
              </CCardHeader>
              <CCardBody style={{ gap: '10px' }}>
                <CTable striped bordered className="h-100">
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
            <CCard className="mb-4" style={{ overflow: 'auto', height: '300px' }}>
              <CCardHeader className="d-flex justify-content-between">
                <header>
                  <span className="h5">Payout Statistics</span>
                </header>
              </CCardHeader>
              <CCardBody style={{ gap: '10px' }}>
                <CTable striped bordered className="h-100">
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
            <CCard className="mb-4 overflow-auto" style={{ height: '360px' }}>
              <CCardHeader className="d-flex justify-content-between">
                <header>
                  <span className="h5">Payment Methods</span>
                </header>
                <CDropdown variant="btn-group">
                  <CDropdownToggle size="sm">Collection</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Collection</CDropdownItem>
                    <CDropdownItem href="#">Payout</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CCardHeader>
              <CCardBody className="text-center d-flex justify-content-between gap-4">
                <div className="border h-100">
                  <CChart
                    className="w-auto"
                    style={{ height: '130px' }}
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
                    options={{ maintainAspectRatio: true}}
                  />
                </div>
                <CTable striped bordered className="border h-100">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ width: '50px' }}>
                        #
                      </CTableHeaderCell>
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
                      <CTableHeaderCell scope="row" className="align-middle">
                        1
                      </CTableHeaderCell>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-pill" style={{ backgroundColor: '#857dcc' }}>
                          MOMO
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" className="align-middle">
                        2
                      </CTableHeaderCell>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-pill" style={{ backgroundColor: '#20c997' }}>
                          CARD
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" className="align-middle">
                        3
                      </CTableHeaderCell>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-pill" style={{ backgroundColor: '#c77171' }}>
                          BANK
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row" className="align-middle">
                        4
                      </CTableHeaderCell>
                      <CTableDataCell className="text-start align-middle">
                        <CBadge shape="rounded-pill" style={{ backgroundColor: '#d5a439' }}>
                          MERCHANT
                        </CBadge>
                      </CTableDataCell>
                      <CTableDataCell className="text-end align-middle">GHS 20,565</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm={6}>
            <CCard className="mb-4" style={{ overflow: 'auto' }}>
              <CCardHeader className="d-flex justify-content-between">
                <header className="">
                  <span className="h5 me-1">Settlements</span>
                  {'  '}
                  <span>
                    <small>Last 4 settlements</small>
                  </span>
                </header>
              </CCardHeader>
              <CCardBody className="text-center">
                <CTable className="mb-4">
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
              <CCardHeader>
                <header>
                  <span className="h5">Your Payment Trends</span>
                </header>
              </CCardHeader>
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
                          color: 'rgba(220, 220, 220, 0.2)',
                        },
                        ticks: {
                          color: 'rgba(151, 187, 205, 1)',
                        },
                      },
                      y: {
                        grid: {
                          color: 'rgba(220, 220, 220, 0.2)',
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
