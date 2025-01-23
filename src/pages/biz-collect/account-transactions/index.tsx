//@ts-nocheck
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
  CSmartTable,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react-pro'
/*CORE UI ICONS */
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilChartPie, cilLoopCircular, cilSearch } from '@coreui/icons'
/*FONT AWESOME ICONS */
import { FiEye } from 'react-icons/fi'
import { IoSearchCircleSharp } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { FaFileExport } from 'react-icons/fa6'
import { MdOutlineFlashAuto } from 'react-icons/md'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentPdf } from 'react-icons/gr'
/* COMPONENTS */
import { CChart, CChartBar, CChartLine } from '@coreui/react-chartjs'
import { BizCollectLayout, GlobalLoader } from '@/components'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE, DATE_FORMAT } from '@/constants'
/* HOOKS */
import useStoreReady from '@/hooks/useStoreReady'
import NoItemsLabel from '@/components/NoItemsLabel'
import {
  NameColumn,
  PhoneNumberColumn,
  AmountColumn,
  StatusColumn,
  ActionButtons,
} from '@/components/SmartTableColumnStyle'
import axiosInstance from "@/apiInstances/axiosInstance";
import axios from "axios";

/*






*/

// const columns = [
//   {
//     label: 'Date',
//     key: 'date',
//     _style: { minWidth: '110px', width: '10%' },
//     sorter: false,
//   },
//   {
//     label: 'Source Acc. No.',
//     key: 'membername',
//     _style: { minWidth: '300px' },
//   },
//   {
//     label: 'Recipient Acc. No.',
//     key: 'membername',
//     _style: { minWidth: '300px' },
//   },
//   {
//     label: 'Amount',
//     key: 'amount',
//     _style: { minWidth: '150px', width: '15%' },
//     sorter: false,
//   },
//   {
//     label: 'Commission',
//     key: 'amount',
//     _style: { minWidth: '150px', width: '15%' },
//     sorter: false,
//   },
//   {
//     label: 'Eganow Status',
//     key: 'status',
//     _style: { minWidth: '180px', width: '10%' },
//   },
//   {
//     label: 'Merchant Status',
//     key: 'merchantstatus',
//     _style: { minWidth: '180px', width: '10%' },
//     sorter: false,
//   },
//
//   {
//     label: 'Transaction Type',
//     key: 'transactiontype',
//     _style: { minWidth: '300px' },
//   },
//   {
//     label: 'Source Acc. Name.',
//     key: 'membername',
//     _style: { minWidth: '300px' },
//   },
//   {
//     label: 'Recipient Acc. Name.',
//     key: 'membername',
//     _style: { minWidth: '300px' },
//   },
//
//   {
//     label: 'Trans. Date/Time',
//     key: 'date',
//     _style: { minWidth: '150px', width: '10%' },
//     sorter: false,
//   },
//   {
//     label: 'Service Name.',
//     key: 'membername',
//     _style: { minWidth: '300px' },
//   },
//   {
//     label: 'Transaction Ref.',
//     key: 'membername',
//     _style: { minWidth: '300px' },
//   },
//   {
//     key: 'actions',
//     label: 'Actions',
//     _style: { minWidth: '50px', width: '50px', height: '20px' },
//     filter: false,
//     sorter: false,
//   },
// ]

const columns = [
  {
    label: "Date",
    key: "transactionDate",
    _style: { minWidth: "110px", width: "10%" },
    sorter: true,
  },
  {
    label: "Source Acc. No.",
    key: "sourceAccountNumber",
    _style: { minWidth: "150px" },
  },
  {
    label: "Recipient Acc. No.",
    key: "beneficiaryAccountNumber",
    _style: { minWidth: "150px" },
  },
  {
    label: "Amount",
    key: "amount",
    _style: { minWidth: "100px", width: "10%" },
    sorter: true,
  },
  {
    label: "Commission",
    key: "commission",
    _style: { minWidth: "100px", width: "10%" },
    sorter: true,
  },
  {
    label: "Eganow Status",
    key: "eganowStatus",
    _style: { minWidth: "120px", width: "10%" },
  },
  {
    label: "Merchant Status",
    key: "merchantStatus",
    _style: { minWidth: "120px", width: "10%" },
  },
  {
    label: "Transaction Type",
    key: "transactionType",
    _style: { minWidth: "150px" },
  },
  {
    label: "Source Acc. Name",
    key: "sourceAccountName",
    _style: { minWidth: "150px" },
  },
  {
    label: "Recipient Acc. Name",
    key: "beneficiaryAccountName",
    _style: { minWidth: "150px" },
  },
  {
    label: "Transaction Ref.",
    key: "merchantTransRefNumber",
    _style: { minWidth: "150px" },
  },
]
// const data = [
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '50,000',
//     status: 'FAILED',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '6000',
//     status: 'SUCCESSFUL',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '6000',
//     status: 'SUCCESSFUL',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '6000',
//     status: 'SUCCESSFUL',
//     merchantstatus: 'PENDING',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
//   {
//     date: '10/06/2024',
//     membername: 'DRF5656565565565',
//     membername: 'DRF5656565565565',
//     amount: '10',
//     status: 'PENDING',
//     merchantstatus: 'SUCCESSFUL',
//     transactiontype: 'COLLECTION',
//     paymentname: 'Fiifi',
//   },
// ]

interface Transaction {
  transactionDate: string
  merchantTransRefNumber: string
  sourceAccountName: string
  sourceAccountNumber: string
  beneficiaryAccountName: string
  beneficiaryAccountNumber: string
  amount: number
  commission: number
  eganowStatus: string
  merchantStatus: string
  transactionType: string
}

interface ApiResponse {
  code: number
  message: string
  data: Transaction[]
}

export const getServerSideProps = async ({ req }) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE])
  //Response
  return {
    props: {
      cookies,
    },
  }
}
const API_ENDPOINT = "/api/v1/merchant-transactions/account"

const BizCollect: NextPageWithLayout = (props) => {
  const START_DATE = new Date()
  const END_DATE = new Date()

  const isStoreReady = useStoreReady()

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [searchFilter, setSearchFilter] = useState({
    transactionType: "COLLECTION",
    startDate: "2024-01-01",
    endDate: "2025-01-01",
    payPartnerServiceId: "MTNMOMGH0233SC1001000101"
  })

  const fetchTransactions = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axiosInstance.post<ApiResponse>(API_ENDPOINT, {
        ...searchFilter
      })
      console.log("response", response)
      setTransactions(response.data.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`An error occurred while fetching transactions: ${err.message}`)
        console.error("Axios error:", err.response?.data)
      } else {
        setError("An unexpected error occurred while fetching transactions")
        console.error("Unexpected error:", err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
    console.log("transaction", transactions)
  }, [searchFilter])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSearchFilter((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setSearchFilter((prev) => ({ ...prev, startDate, endDate }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchTransactions()
  }

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  const totalCollection = transactions.reduce((sum, t) => sum + (t.transactionType === "COLLECTION" ? t.amount : 0), 0)
  const totalPayout = transactions.reduce((sum, t) => sum + (t.transactionType === "PAYOUT" ? t.amount : 0), 0)
  const totalCommission = transactions.reduce((sum, t) => sum + t.commission, 0)
  const totalSettlements = transactions.reduce((sum, t) => sum + t.amount, 0)


  return (
    // <BizCollectLayout {...props}>
    //   <div className="d-flex justify-content-between align-items-center flex-wrap rounded pt-2">
    //     <div className="flex-grow-1">
    //       <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
    //         <MdOutlineAccountBalanceWallet className="fs-1 fw-bold me-2" />
    //         Account Transactions
    //       </h1>
    //       <small className="text-secondary">
    //         View biz collect account transactions. Print or export report list.
    //       </small>
    //     </div>
    //
    //     <div className="flex gap-2">
    //       <CDropdown
    //         variant="btn-group"
    //         title="Export list"
    //         style={{ marginTop: '30px', borderColor: '#0A4A25' }}
    //       >
    //         <CDropdownToggle
    //           variant="outline"
    //           color="danger"
    //           className="mx-1 rounded-50 ndc-white-bg"
    //         >
    //           <FaFileExport style={{ fontSize: '1.2rem' }} /> Export
    //         </CDropdownToggle>
    //         <CDropdownMenu onMouseUp={() => {}}>
    //           <CDropdownItem href="#" data-name="excel">
    //             <SiMicrosoftexcel data-name="excel" style={{ fontSize: '1.2rem' }} /> Export to
    //             excel
    //           </CDropdownItem>
    //           <CDropdownDivider />
    //           <CDropdownItem href="#" data-name="pdf">
    //             <GrDocumentPdf data-name="pdf" style={{ fontSize: '1.2rem' }} /> Export to PDF
    //           </CDropdownItem>
    //         </CDropdownMenu>
    //       </CDropdown>
    //     </div>
    //   </div>
    //
    //   <hr />
    //
    //   <CContainer fluid className="p-3 bg-white mb-5 rounded dark:bg-dark">
    //     <CForm
    //       className="d-flex align-items-center gap-4 mb-2 py-3 px-3 dark:bg-dark"
    //       style={{ backgroundColor: '#eee' }}
    //     >
    //       <CRow className="gap-y-2">
    //         <CCol xs={12} md={4} xl={3}>
    //           {/*  <CFormLabel htmlFor="status">
    //             <strong>Search</strong>
    //           </CFormLabel> */}
    //           <CInputGroup className="flex-nowrap">
    //             <CInputGroupText className="bg-dark dark:bg-light">
    //               <IoSearchCircleSharp className="fs-4 text-white dark:text-black" />
    //             </CInputGroupText>
    //             <CFormInput
    //               size="sm"
    //               type="text"
    //               id="exampleFormControlInput1"
    //               placeholder="Enter account No."
    //               aria-describedby="exampleFormControlInputHelpInline"
    //             />
    //           </CInputGroup>
    //         </CCol>
    //
    //         <CCol xl={2}>
    //           {/*  <CFormLabel htmlFor="status">
    //             <strong>Status</strong>
    //           </CFormLabel> */}
    //           <CFormSelect
    //             id="status"
    //             name="status"
    //             value={searchFilter.status}
    //             onChange={() => {}}
    //             options={[
    //               { label: 'COLLECTION', value: 'COLLECTION' },
    //               { label: 'PAYOUT', value: 'PAYOUT' },
    //             ]}
    //           />
    //         </CCol>
    //
    //         <CCol xl={2}>
    //           {/*  <CFormLabel htmlFor="status">
    //             <strong>Status</strong>
    //           </CFormLabel> */}
    //           <CFormSelect
    //             id="status"
    //             name="status"
    //             value={searchFilter.status}
    //             onChange={() => {}}
    //             options={[
    //               { label: 'ALL', value: 'ALL' },
    //               { label: 'JM 2024 CAMPAIGN', value: 'SUCCESSFUL' },
    //             ]}
    //           />
    //         </CCol>
    //
    //         <CCol xl={4}>
    //           {/* <CFormLabel htmlFor="status">
    //             <strong>Date</strong>
    //           </CFormLabel> */}
    //           <CDateRangePicker
    //             id="dateRange"
    //             startDate={searchFilter.startDate}
    //             endDate={searchFilter.endDate}
    //             locale="en-US"
    //             format={DATE_FORMAT}
    //             footer
    //             onStartDateChange={() => {}}
    //             onEndDateChange={() => {}}
    //           />
    //         </CCol>
    //
    //         <CCol xs={12} md={4} xl={1}>
    //           <CButton var color="danger" size="md">
    //             <FaSearch className="fs-4 text-white" />
    //           </CButton>
    //         </CCol>
    //       </CRow>
    //     </CForm>
    //
    //     <CRow className="pt-4">
    //       <CCol sm={3}>
    //         <CWidgetStatsB
    //           className="mb-4 shadow"
    //           // color="white"
    //           value={<div className="text-black dark:text-white">GHS 9.000</div>}
    //           title="Collection Balance"
    //           /*  chart={
    //             <CChartLine
    //               className="mt-3 mx-3"
    //               style={{ height: '70px' }}
    //               data={{
    //                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //                 datasets: [
    //                   {
    //                     label: 'My First dataset',
    //                     backgroundColor: 'transparent',
    //                     borderColor: '#304767',
    //                     pointBackgroundColor: '#304767',
    //                     data: [65, 59, 84, 84, 51, 55, 40],
    //                   },
    //                 ],
    //               }}
    //               options={{
    //                 plugins: {
    //                   legend: {
    //                     display: false,
    //                   },
    //                 },
    //                 maintainAspectRatio: false,
    //                 scales: {
    //                   x: {
    //                     grid: {
    //                       display: false,
    //                       drawBorder: false,
    //                     },
    //                     ticks: {
    //                       display: false,
    //                     },
    //                   },
    //                   y: {
    //                     min: 30,
    //                     max: 89,
    //                     display: false,
    //                     grid: {
    //                       display: false,
    //                     },
    //                     ticks: {
    //                       display: false,
    //                     },
    //                   },
    //                 },
    //                 elements: {
    //                   line: {
    //                     borderWidth: 1,
    //                     tension: 0.4,
    //                   },
    //                   point: {
    //                     radius: 4,
    //                     hitRadius: 10,
    //                     hoverRadius: 4,
    //                   },
    //                 },
    //               }}
    //             />
    //           } */
    //         />
    //       </CCol>
    //
    //       <CCol sm={3}>
    //         <CWidgetStatsB
    //           className="mb-4 shadow"
    //           // color="warning"
    //           value={<>GHS 9.000</>}
    //           title="Payout Balance"
    //           /*  chart={
    //             <CChartLine
    //               className="mt-3"
    //               style={{ height: '70px' }}
    //               data={{
    //                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //                 datasets: [
    //                   {
    //                     label: 'My First dataset',
    //                     borderColor: '#304767',
    //                     pointBackgroundColor: '#304767',
    //                     data: [78, 81, 80, 45, 34, 12, 40],
    //                     fill: true,
    //                   },
    //                 ],
    //               }}
    //               options={{
    //                 plugins: {
    //                   legend: {
    //                     display: false,
    //                   },
    //                 },
    //                 maintainAspectRatio: false,
    //                 scales: {
    //                   x: {
    //                     display: false,
    //                   },
    //                   y: {
    //                     display: false,
    //                   },
    //                 },
    //                 elements: {
    //                   line: {
    //                     borderWidth: 2,
    //                     tension: 0.4,
    //                   },
    //                   point: {
    //                     radius: 0,
    //                     hitRadius: 10,
    //                     hoverRadius: 4,
    //                   },
    //                 },
    //               }}
    //             />
    //           } */
    //         />
    //       </CCol>
    //
    //       <CCol className="" sm={3}>
    //         <CWidgetStatsB
    //           className="mb-4 shadow"
    //           // color="danger"
    //           value={<>GHS 9.000</>}
    //           title="Commission Balance"
    //           /*  chart={
    //             <CChartBar
    //               className="mt-3 mx-3"
    //               style={{ height: '70px' }}
    //               data={{
    //                 labels: [
    //                   'January',
    //                   'February',
    //                   'March',
    //                   'April',
    //                   'May',
    //                   'June',
    //                   'July',
    //                   'August',
    //                   'September',
    //                   'October',
    //                   'November',
    //                   'December',
    //                   'January',
    //                   'February',
    //                   'March',
    //                   'April',
    //                 ],
    //                 datasets: [
    //                   {
    //                     label: 'My First dataset',
    //                     backgroundColor: '#304767',
    //                     borderColor: '#304767',
    //                     data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
    //                     barPercentage: 0.6,
    //                   },
    //                 ],
    //               }}
    //               options={{
    //                 maintainAspectRatio: false,
    //                 plugins: {
    //                   legend: {
    //                     display: false,
    //                   },
    //                 },
    //                 scales: {
    //                   x: {
    //                     grid: {
    //                       display: false,
    //                       drawTicks: false,
    //                     },
    //                     ticks: {
    //                       display: false,
    //                     },
    //                   },
    //                   y: {
    //                     grid: {
    //                       display: false,
    //                       drawBorder: false,
    //                       drawTicks: false,
    //                     },
    //                     ticks: {
    //                       display: false,
    //                     },
    //                   },
    //                 },
    //               }}
    //             />
    //           } */
    //         />
    //       </CCol>
    //
    //       <CCol className="" sm={3}>
    //         <CWidgetStatsB
    //           className="mb-4 shadow"
    //           // color="danger"
    //           value={<>GHS 40.000</>}
    //           title="Total Settlements"
    //           /* chart={
    //             <CChartBar
    //               className="mt-3 mx-3"
    //               style={{ height: '70px' }}
    //               data={{
    //                 labels: [
    //                   'January',
    //                   'February',
    //                   'March',
    //                   'April',
    //                   'May',
    //                   'June',
    //                   'July',
    //                   'August',
    //                   'September',
    //                   'October',
    //                   'November',
    //                   'December',
    //                   'January',
    //                   'February',
    //                   'March',
    //                   'April',
    //                 ],
    //                 datasets: [
    //                   {
    //                     label: 'My First dataset',
    //                     backgroundColor: '#304767',
    //                     borderColor: '#304767',
    //                     data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
    //                     barPercentage: 0.6,
    //                   },
    //                 ],
    //               }}
    //               options={{
    //                 maintainAspectRatio: false,
    //                 plugins: {
    //                   legend: {
    //                     display: false,
    //                   },
    //                 },
    //                 scales: {
    //                   x: {
    //                     grid: {
    //                       display: false,
    //                       drawTicks: false,
    //                     },
    //                     ticks: {
    //                       display: false,
    //                     },
    //                   },
    //                   y: {
    //                     grid: {
    //                       display: false,
    //                       drawBorder: false,
    //                       drawTicks: false,
    //                     },
    //                     ticks: {
    //                       display: false,
    //                     },
    //                   },
    //                 },
    //               }}
    //             />
    //           } */
    //         />
    //       </CCol>
    //     </CRow>
    //
    //     <hr className="mb-0" style={{ border: '3px solid #8e011c' }} />
    //
    //     <CCard className="border-0 shadow-none p-1">
    //       <CSmartTable
    //         sorterValue={{ column: 'fullname', state: 'asc' }}
    //         activePage={1}
    //         columns={columns}
    //         columnFilter
    //         columnSorter
    //         items={data}
    //         itemsPerPageLabel="Transactions per page"
    //         itemsPerPageSelect
    //         itemsPerPage={10}
    //         // tableFilter
    //         columnFilterValue={{
    //           date: (date) => <td className="py-2">dffffff</td>,
    //         }}
    //         pagination
    //         scopedColumns={{
    //           membername: (items) => NameColumn(items.membername),
    //           paymentaccountnumberormomonumber: (items) =>
    //             PhoneNumberColumn(items.paymentaccountnumberormomonumber),
    //           amount: (items) => AmountColumn(items.amount),
    //           status: (items) => StatusColumn(items.status),
    //           merchantstatus: (items) => StatusColumn(items.merchantstatus),
    //           actions: (items) => ActionButtons(items, () => {}),
    //         }}
    //         tableProps={{
    //           className: 'smart-table',
    //           responsive: true,
    //           striped: false,
    //           hover: true,
    //           small: false,
    //           borderColor: 'light',
    //         }}
    //         tableBodyProps={{
    //           className: 'align-middle',
    //         }}
    //         loading={false}
    //         noItemsLabel={<NoItemsLabel onMouseUp={() => {}} />}
    //         // footer
    //       />
    //     </CCard>
    //   </CContainer>
    // </BizCollectLayout>
    <BizCollectLayout {...props}>
      <div className="d-flex justify-content-between align-items-center flex-wrap rounded pt-2">
        <div className="flex-grow-1">
          <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: "#CC0229" }}>
            <MdOutlineAccountBalanceWallet className="fs-1 fw-bold me-2" />
            Account Transactions
          </h1>
          <small className="text-secondary">View biz collect account transactions. Print or export report list.</small>
        </div>

        <div className="flex gap-2">
          <CDropdown variant="btn-group" title="Export list" style={{ marginTop: "30px", borderColor: "#0A4A25" }}>
            <CDropdownToggle variant="outline" color="danger" className="mx-1 rounded-50 ndc-white-bg">
              <FaFileExport style={{ fontSize: "1.2rem" }} /> Export
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#" data-name="excel">
                <SiMicrosoftexcel data-name="excel" style={{ fontSize: "1.2rem" }} /> Export to excel
              </CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#" data-name="pdf">
                <GrDocumentPdf data-name="pdf" style={{ fontSize: "1.2rem" }} /> Export to PDF
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </div>

      <hr />

      <CContainer fluid className="p-3 bg-white mb-5 rounded dark:bg-dark">
        <CForm
          className="d-flex align-items-center gap-4 mb-2 py-3 px-3 dark:bg-dark"
          style={{ backgroundColor: "#eee" }}
          onSubmit={handleSubmit}
        >
          <CRow className="gap-y-2">
            <CCol xs={12} md={4} xl={3}>
              <CInputGroup className="flex-nowrap">
                <CInputGroupText className="bg-dark dark:bg-light">
                  <IoSearchCircleSharp className="fs-4 text-white dark:text-black" />
                </CInputGroupText>
                <CFormInput
                  size="sm"
                  type="text"
                  id="payPartnerServiceId"
                  name="payPartnerServiceId"
                  placeholder="Enter account No."
                  value={searchFilter.payPartnerServiceId}
                  onChange={handleInputChange}
                />
              </CInputGroup>
            </CCol>

            <CCol xl={2}>
              <CFormSelect
                id="transactionType"
                name="transactionType"
                value={searchFilter.transactionType}
                onChange={handleInputChange}
                options={[
                  { label: "COLLECTION", value: "COLLECTION" },
                  { label: "PAYOUT", value: "PAYOUT" },
                ]}
              />
            </CCol>

            <CCol xl={4}>
              <CDateRangePicker
                id="dateRange"
                startDate={searchFilter.startDate}
                endDate={searchFilter.endDate}
                locale="en-US"
                format={DATE_FORMAT}
                footer
                onStartDateChange={(date) => handleDateChange(date, searchFilter.endDate)}
                onEndDateChange={(date) => handleDateChange(searchFilter.startDate, date)}
              />
            </CCol>

            <CCol xs={12} md={4} xl={1}>
              <CButton type="submit" color="danger" size="md">
                <FaSearch className="fs-4 text-white" />
              </CButton>
            </CCol>
          </CRow>
        </CForm>

        <CRow className="pt-4">
          <CCol sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              value={<div className="text-black dark:text-white">GHS {totalCollection.toFixed(2)}</div>}
              title="Collection Balance"
            />
          </CCol>

          <CCol sm={3}>
            <CWidgetStatsB className="mb-4 shadow" value={<>GHS {totalPayout.toFixed(2)}</>} title="Payout Balance" />
          </CCol>

          <CCol className="" sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              value={<>GHS {totalCommission.toFixed(2)}</>}
              title="Commission Balance"
            />
          </CCol>

          <CCol className="" sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              value={<>GHS {totalSettlements.toFixed(2)}</>}
              title="Total Settlements"
            />
          </CCol>
        </CRow>

        <hr className="mb-0" style={{ border: "3px solid #8e011c" }} />

        <CCard className="border-0 shadow-none p-1">
          {error && <div className="alert alert-danger">{error}</div>}
          <CSmartTable
            sorterValue={{ column: "transactionDate", state: "desc" }}
            activePage={1}
            columns={columns}
            columnFilter
            columnSorter
            items={transactions}
            itemsPerPageLabel="Transactions per page"
            itemsPerPageSelect
            itemsPerPage={10}
            pagination
            scopedColumns={{
              transactionDate: (item: Transaction) => <td>{new Date(item.transactionDate).toLocaleDateString()}</td>,
              amount: (item: Transaction) => AmountColumn(item.amount),
              commission: (item: Transaction) => AmountColumn(item.commission),
              eganowStatus: (item: Transaction) => StatusColumn(item.eganowStatus),
              merchantStatus: (item: Transaction) => StatusColumn(item.merchantStatus),
            }}
            tableProps={{
              className: "smart-table",
              responsive: true,
              striped: false,
              hover: true,
              small: false,
              borderColor: "light",
            }}
            tableBodyProps={{
              className: "align-middle",
            }}
            loading={isLoading}
            noItemsLabel={<NoItemsLabel onMouseUp={() => {}} />}
          />
        </CCard>
      </CContainer>
    </BizCollectLayout>
  )
}

export default BizCollect
