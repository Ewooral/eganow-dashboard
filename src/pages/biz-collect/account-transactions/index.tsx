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
import { DashboardLayout, GlobalLoader } from '@/components'
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

const columns = [
  {
    label: 'Date',
    key: 'date',
    _style: { minWidth: '110px', width: '10%' },
    sorter: false,
  },
  {
    label: 'Source Acc. No.',
    key: 'membername',
    _style: { minWidth: '300px' },
  },
  {
    label: 'Recipient Acc. No.',
    key: 'membername',
    _style: { minWidth: '300px' },
  },
  {
    label: 'Amount',
    key: 'amount',
    _style: { minWidth: '150px', width: '15%' },
    sorter: false,
  },
  {
    label: 'Commission',
    key: 'amount',
    _style: { minWidth: '150px', width: '15%' },
    sorter: false,
  },
  {
    label: 'Eganow Status',
    key: 'status',
    _style: { minWidth: '180px', width: '10%' },
  },
  {
    label: 'Merchant Status',
    key: 'merchantstatus',
    _style: { minWidth: '180px', width: '10%' },
    sorter: false,
  },

  {
    label: 'Transaction Type',
    key: 'transactiontype',
    _style: { minWidth: '300px' },
  },
  {
    label: 'Source Acc. Name.',
    key: 'membername',
    _style: { minWidth: '300px' },
  },
  {
    label: 'Recipient Acc. Name.',
    key: 'membername',
    _style: { minWidth: '300px' },
  },

  {
    label: 'Trans. Date/Time',
    key: 'date',
    _style: { minWidth: '150px', width: '10%' },
    sorter: false,
  },
  {
    label: 'Service Name.',
    key: 'membername',
    _style: { minWidth: '300px' },
  },
  {
    label: 'Transaction Ref.',
    key: 'membername',
    _style: { minWidth: '300px' },
  },
  {
    key: 'actions',
    label: 'Actions',
    _style: { minWidth: '50px', width: '50px', height: '20px' },
    filter: false,
    sorter: false,
  },
]

const data = [
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '50,000',
    status: 'FAILED',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '6000',
    status: 'SUCCESSFUL',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '6000',
    status: 'SUCCESSFUL',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '6000',
    status: 'SUCCESSFUL',
    merchantstatus: 'PENDING',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    status: 'PENDING',
    merchantstatus: 'SUCCESSFUL',
    transactiontype: 'COLLECTION',
    paymentname: 'Fiifi',
  },
]

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
  const START_DATE = new Date()
  const END_DATE = new Date()

  const isStoreReady = useStoreReady()

  const [searchFilter, setSearchFilter] = useState({
    startDate: START_DATE,
    endDate: END_DATE,
  })

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <DashboardLayout {...props}>
      <div className="d-flex justify-content-between align-items-center flex-wrap rounded pt-2">
        <div className="flex-grow-1">
          <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
            <MdOutlineAccountBalanceWallet className="fs-1 fw-bold me-2" />
            Account Transactions
          </h1>
          <small className="text-secondary">
            View biz collect account transactions. Print or export report list.
          </small>
        </div>

        <div className="flex gap-2">
          <CDropdown
            variant="btn-group"
            title="Export list"
            style={{ marginTop: '30px', borderColor: '#0A4A25' }}
          >
            <CDropdownToggle variant="outline" color="danger" className="mx-1 rounded-50 ">
              <FaFileExport style={{ fontSize: '1.2rem' }} /> Export
            </CDropdownToggle>
            <CDropdownMenu onMouseUp={() => {}}>
              <CDropdownItem href="#" data-name="excel">
                <SiMicrosoftexcel data-name="excel" style={{ fontSize: '1.2rem' }} /> Export to
                excel
              </CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#" data-name="pdf">
                <GrDocumentPdf data-name="pdf" style={{ fontSize: '1.2rem' }} /> Export to PDF
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </div>

      <hr />

      <CContainer fluid className="p-3 bg-white mb-5 rounded dark:bg-dark">
        <CForm
          className="d-flex align-items-center gap-4 mb-2 py-3 px-3 dark:bg-dark rounded"
          style={{ backgroundColor: '#eee' }}
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
                  id="exampleFormControlInput1"
                  placeholder="Enter account No."
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </CInputGroup>
            </CCol>

            <CCol xl={2}>
              <CFormSelect
                id="status"
                name="status"
                value={searchFilter.status}
                onChange={() => {}}
                options={[
                  { label: 'COLLECTION', value: 'COLLECTION' },
                  { label: 'PAYOUT', value: 'PAYOUT' },
                ]}
              />
            </CCol>

            <CCol xl={2}>
              <CFormSelect
                id="status"
                name="status"
                value={searchFilter.status}
                onChange={() => {}}
                options={[
                  { label: 'Account 1', value: 'Account 1' },
                  { label: 'Account 2', value: 'Account 2' },
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
                onStartDateChange={(date) => {
                  setSearchFilter((prev) => {
                    return { ...prev, startDate: date }
                  })
                }}
                onEndDateChange={(date) => {
                  setSearchFilter((prev) => {
                    return { ...prev, endDate: date }
                  })
                }}
              />
            </CCol>

            <CCol xs={12} md={4} xl={1}>
              <CButton var color="danger" size="md">
                <FaSearch className="fs-4 text-white" />
              </CButton>
            </CCol>
          </CRow>
        </CForm>

        <CRow className="pt-4">
          <CCol sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              // color="white"
              value={<div className="text-black dark:text-white">GHS 9.000</div>}
              title="Collection Balance"
            />
          </CCol>

          <CCol sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              // color="warning"
              value={<>GHS 9.000</>}
              title="Payout Balance"
            />
          </CCol>

          <CCol className="" sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              // color="danger"
              value={<>GHS 9.000</>}
              title="Commission Balance"
            />
          </CCol>

          <CCol className="" sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              // color="danger"
              value={<>GHS 40.000</>}
              title="Total Settlements"
            />
          </CCol>
        </CRow>

        <hr className="mb-0" style={{ border: '3px solid #8e011c' }} />

        <CCard className="border-0 shadow-none p-1">
          <CSmartTable
            sorterValue={{ column: 'fullname', state: 'asc' }}
            activePage={1}
            columns={columns}
            columnFilter
            columnSorter
            items={data}
            itemsPerPageLabel="Transactions per page"
            itemsPerPageSelect
            itemsPerPage={10}
            // tableFilter
            columnFilterValue={{
              date: (date) => <td className="py-2">dffffff</td>,
            }}
            pagination
            scopedColumns={{
              membername: (items) => NameColumn(items.membername),
              paymentaccountnumberormomonumber: (items) =>
                PhoneNumberColumn(items.paymentaccountnumberormomonumber),
              amount: (items) => AmountColumn(items.amount),
              status: (items) => StatusColumn(items.status),
              merchantstatus: (items) => StatusColumn(items.merchantstatus),
              actions: (items) => ActionButtons(items, () => {}),
            }}
            tableProps={{
              className: 'smart-table',
              responsive: true,
              striped: false,
              hover: true,
              small: false,
              borderColor: 'light',
            }}
            tableBodyProps={{
              className: 'align-middle',
            }}
            loading={false}
            noItemsLabel={<NoItemsLabel onMouseUp={() => {}} />}
            // footer
          />
        </CCard>
      </CContainer>
    </DashboardLayout>
  )
}

export default BizCollect
