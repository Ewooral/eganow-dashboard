// @ts-nocheck
import { useState, useEffect, useRef } from 'react'
/* TYPES */
import type { NextPageWithLayout } from '@/pages/_app'
import { EmptyObject, useForm } from 'react-hook-form'
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
import { Loader2 } from 'lucide-react';
import { cilArrowBottom, cilArrowTop, cilChartPie, cilLoopCircular, cilSearch } from '@coreui/icons'
/*FONT AWESOME ICONS */
import { FiEye } from 'react-icons/fi'
/* COMPONENTS */
import { CChart, CChartBar, CChartLine } from '@coreui/react-chartjs'
import { AppAside, AppFooter, AppHeader, GlobalLoader, BizCollectLayout } from '@/components'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* HOOKS */
import useStoreReady from '@/hooks/useStoreReady'
import CountryInput from '@/components/country/CountryInput'

import { StatusColumn } from '@/components/SmartTableColumnStyle'
import BizCollectSidebar from '@/components/Biz-collect/BizCollectSidebar'

import { useQuery } from '@tanstack/react-query'
import dashboardAnalytics from '@/api/dashboardAnalytics'
import { formatMoney_util, RoundValue } from '@/util'
import { ApiResponseBizCollectData } from '@/types/BizCollectDataTypes'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
  const [selectedType, setSelectedType] = useState<'collection' | 'payout'>('collection')

  // GETTING API CALL
  const { getDashboard } = dashboardAnalytics()

  const { data, error, isPending } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => await getDashboard(),
    staleTime: 5000,
  })

  const analytics = data?.data

  /**
   * Represents the payment methods data retrieved from the API response.
   *
   * @type {ApiResponseBizCollectData}
   */
  // const paymentMethodsObj: ApiResponseBizCollectData = data
  const paymentMethod = analytics?.paymentMethods[selectedType] || []

  const handleDropdownChange = (type: 'collection' | 'payout') => {
    setSelectedType(type)
  }

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

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <BizCollectLayout {...props}>
      <div className="d-flex justify-content-between align-items-center    mb-4">
        <div className="flex-grow-1">
          <h1 className="fs-3 fw-bold text-danger-emphasis " style={{ color: '#CC0229' }}>
            Biz Collect
          </h1>
          
          <span className="text-secondary ">ACCOUNT NAME::</span> <small>Account One</small>
        </div>

        <div className="d-flex align-items-center gap-2">
          <CountryInput
            className=""
            name="country"
            handleForm={{ control }}
            callback={() => { }}
            shouldValidate={false}
          />
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
      </div>

      <CRow>
        <CCol sm={6} md={3}>
          {
            !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> : 
            <CWidgetStatsA
              className="mb-4 shadow-none"
              // color="white"
              value={
                <div className="text-black dark:text-white">
                  GHS {analytics?.monthlyBalance.collection.availableBalance || 0}{' '}

                  <span className="fs-6 fw-normal text-black dark:text-white">
                    (
                    {RoundValue(analytics?.monthlyBalance?.collection?.percentageProgress) || 0} %{' '}

                    {analytics?.monthlyBalance.collection.progressType == 'INCREASE' ? (
                      <span>
                        <CIcon icon={cilArrowTop} className="text-success" />
                      </span>
                    ) : (
                      <span>
                        <CIcon icon={cilArrowBottom} className="text-danger" />
                      </span>
                    )}
                    )
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
                        data: analytics?.monthlyBalance.collection.monthlyValues.slice(0, 8), // [65, 59, 84, 84, 51, 55, 40],
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
                        min: 0,
                        max: 110,
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
          }
        </CCol>

        {/* PAYOUTS */}
        <CCol sm={6} md={3}>
          {
            !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> :  
            <CWidgetStatsA
              className="mb-4   shadow-none"
              // color="warning"
              value={
                <div className="text-black dark:text-white">
                  GHS {analytics?.monthlyBalance.payout.availableBalance || 0}{' '}
                  <span className="fs-6 fw-normal text-black dark:text-white">
                    (
                    {RoundValue(analytics?.monthlyBalance?.payout?.percentageProgress) || 0} %{' '}
                      {analytics?.monthlyBalance.payout.progressType == 'INCREASE' ? (
                        <span>
                          <CIcon icon={cilArrowTop} className="text-success" />
                        </span>
                      ) : (
                        <span>
                          <CIcon icon={cilArrowBottom} className="text-danger" />
                        </span>
                      )}
                    )
                  </span>
                </div>
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
                        label: 'Payouts',
                        borderColor: '#304767',
                        pointBackgroundColor: '#304767',
                        data: analytics?.monthlyBalance.payout.monthlyValues.slice(0, 8), // [78, 81, 80, 45, 34, 12, 40],
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
          }
        </CCol>
        {/* END OF PAYOUTS */}

        {/* COMMISIONS */}
        <CCol className="" sm={6} md={3}>
          {
            !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> : 
            <CWidgetStatsA
              className="mb-4 shadow-none"
              // color="danger"
              value={
                <div className="text-black dark:text-white">
                  GHS {analytics?.monthlyBalance.commission.availableBalance || 0}{' '}
                  <span className="fs-6 fw-normal text-black dark:text-white">
                    (
                    {RoundValue(analytics?.monthlyBalance?.commission?.percentageProgress) || 0} %{' '}
                      {analytics?.monthlyBalance.commission.progressType == 'INCREASE' ? (
                        <span>
                          <CIcon icon={cilArrowTop} className="text-success" />
                        </span>
                      ) : (
                        <span>
                          <CIcon icon={cilArrowBottom} className="text-danger" />
                        </span>
                      )}
                    )
                  </span>
                </div>
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
                    ],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: '#304767',
                        borderColor: '#304767',
                        data: analytics?.monthlyBalance.commission.monthlyValues, // [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
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
          }
        </CCol>
        {/* END OF COMISSIONS */}

        {/* TOTAL SETTLEMENTS */}
        <CCol className="" sm={6} md={3}>
          {
            !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> : 
            <CWidgetStatsA
              className="mb-4 shadow-none"
              // color="danger"
              value={
                <div className="text-black dark:text-white">
                  GHS {analytics?.monthlyBalance.totalSettlements.availableBalance || 0}{' '}
                  <span className="fs-6 fw-normal text-black dark:text-white">
                    (
                    {RoundValue(analytics?.monthlyBalance?.totalSettlements?.percentageProgress) || 0} %{' '}
                      {analytics?.monthlyBalance.totalSettlements.progressType == 'INCREASE' ? (
                        <span>
                          <CIcon icon={cilArrowTop} className="text-success" />
                        </span>
                      ) : (
                        <span>
                          <CIcon icon={cilArrowBottom} className="text-danger" />
                        </span>
                      )}
                    )
                  </span>
                </div>
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
                    ],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: '#304767',
                        borderColor: '#304767',
                        data: analytics?.monthlyBalance.totalSettlements.monthlyValues, // [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
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
          }
        </CCol>
        {/* END OF TOTAL SETTLEMENTS */}
      </CRow>

      <CContainer fluid className="p-3 bg-gradient mb-5 ">
        {
          !analytics ? <Skeleton height={50} highlightColor='#e0dfdf' /> : 
          <div className="d-flex justify-content-between mb-4 ">
            <div>
              <small>Select Date Range </small>
              <div className="d-flex justify-content-between shadow-none">
                <CDateRangePicker
                  footer
                  locale="en-US"
                  className="shadow-none border-none"
                  onStartDateChange={(date) => console.log(date)}
                  onEndDateChange={(date) => console.log(date)}
                />
                <CButton
                  // color="black"
                  title="Search"
                  className="mx-1 rounded-50 dark:text-white"
                  style={{
                    backgroundColor: '#304767',
                  }}
                  onMouseUp={() => { }}
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
              onMouseUp={() => { }}
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
        }

        <CRow>
          {/* COUNTS */}
          <CCol md={12} lg={6} >
            {
              !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> : 
              <CCard className="mb-4 shadow-none" style={{ overflow: 'auto' }}>
                <div className="pt-3 px-3">
                  <div className="card-title fs-5 fw-semibold ndc-green-text my-0">Total Counts</div>
                </div>

                <CCardBody>
                  {analytics?.transTypeTotalCounts &&
                    analytics?.transTypeTotalCounts.map((count, index) => {
                      return (
                        <CWidgetStatsF
                          key={index}
                          style={{ border: '1px solid #304767' }}
                          className="mb-3  shadow-none"
                          color="secondary"
                          icon={<CIcon icon={cilChartPie} height={24} />}
                          title={count.name}
                          value={count?.value}
                        />
                      )
                    })}
                </CCardBody>
              </CCard>
            }
          </CCol>
          {/* END OF COUNTS */}

          {/* COLLECTION STATISTICS */}
          <CCol md={6} lg={3}>
            {
              !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> : 
              <CCard className="mb-4 shadow-none" style={{ overflow: 'auto', height: '295px' }}>
                <div className="pt-3 px-3">
                  <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                    Collection Statistics
                  </div>
                </div>
                <CCardBody style={{ gap: '10px' }}>
                  <CTable className="h-100">
                    <CTableBody>
                      {analytics?.collectionStatistics &&
                        analytics.collectionStatistics.map((collections, index) => (
                          <CTableRow key={index}>
                            <CTableDataCell className="text-start align-middle">
                              {StatusColumn(collections.name)}
                            </CTableDataCell>
                            <CTableDataCell className="text-end align-middle">
                              GHS {formatMoney_util(collections.value)}
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            }
          </CCol>

          {/* PAYOUTS STATISTICS */}
          <CCol md={6} lg={3}>
            {
              !analytics ? <Skeleton height={150} highlightColor='#e0dfdf' /> : 
              <CCard className="mb-4 shadow-none" style={{ overflow: 'auto', height: '295px' }}>
                <div className="pt-3 px-3">
                  <div className="card-title fs-5 fw-semibold ndc-green-text my-0">
                    Payout Statistics
                  </div>
                </div>
                <CCardBody style={{ gap: '10px' }}>
                  <CTable className="h-100">
                    <CTableBody>
                      {analytics?.payoutStatistics &&
                        analytics.payoutStatistics.map((payout, index) => (
                          <CTableRow key={index}>
                            <CTableDataCell className="text-start align-middle">
                              {StatusColumn(payout.name)}
                            </CTableDataCell>
                            <CTableDataCell className="text-end align-middle">
                              GHS {formatMoney_util(payout.value)}
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            }
          </CCol>
        </CRow>

        <CRow>
          {/* PAYMENT METHOD ANALYTICS */}
          <CCol lg={6}>
            {
              !analytics ? <Skeleton height={200} highlightColor='#e0dfdf' /> : 
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
                      {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => handleDropdownChange('collection')}>
                        Collection
                      </CDropdownItem>
                      <CDropdownItem onClick={() => handleDropdownChange('payout')}>
                        Payout
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </div>

                <CCardBody className="row pt-1 ">
                  <div className="h-50  p-1 col-md-6">
                    <CChart
                      style={{ height: '400px' }}
                      className="py-2 w-auto h-auto d-flex align-items-center"
                      type="pie"
                      data={{
                        labels: paymentMethod.map(
                          (method) => method.name,
                        ),
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
                  <div className="col-md-6 p-1">
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
                        {paymentMethod.map((method, index) => (
                          <CTableRow key={index}>
                            <CTableDataCell className="text-start align-middle">
                              <CBadge
                                shape="rounded-pill"
                                style={{ backgroundColor: '#b8c8de', color: '#304767' }}
                              >
                                {method.name}
                              </CBadge>
                            </CTableDataCell>
                            <CTableDataCell className="text-end align-middle">
                              GHS {isPending ? <Loader2 size={14} className="h-2 w-2 animate-spin loader text-muted-foreground" /> : formatMoney_util(method.value)}
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </div>
                </CCardBody>
              </CCard>
            }
          </CCol>
          <CCol lg={6}>
            {
              !analytics ? <Skeleton height={200} highlightColor='#e0dfdf' /> : 
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
            }
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            {
              !analytics ? <Skeleton height={250} highlightColor='#e0dfdf' /> : 
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
                            onClick={() => { }}
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
                            onClick={() => { }}
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
                            onClick={() => { }}
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
                            onClick={() => { }}
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
            }
          </CCol>
        </CRow>
      </CContainer>
    </BizCollectLayout>
  )
}

export default BizCollect


const Loader = () => {
  return <div className="loader"></div>;
};