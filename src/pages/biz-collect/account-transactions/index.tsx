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
import { useMutation, useQuery } from "@tanstack/react-query"
import fetchTransactions from "@/api/merchantAccountTransactionsAPI";
import { Transaction } from "@/types/BizCollectDataTypes";
import { formatMoney_util } from '@/util'


/*
*/

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

  const { getTransactions, getMerchantServices } = fetchTransactions();


  const [searchFilter, setSearchFilter] = useState({
    transactionType: "COLLECTION",
    startDate: "2024-01-01",
    endDate: "2025-01-01",
    payPartnerServiceId: "MTNMOMGH0233SC1001000101"
  })

  // Fetch data on page load
  const { data, isLoading: isQueryLoading, error: queryError } = useQuery({
    queryKey: ["transactions", searchFilter],
    queryFn: () => getTransactions(searchFilter),
    enabled: !!searchFilter, // Ensures the query runs only if `searchFilter` is not null/undefined
  });

    // Fetch merchant services
    const {
      data: merchantServicesData,
      isLoading: isMerchantServicesLoading,
      error: merchantServicesError,
    } = useQuery({
      queryKey: ["merchantServices"],
      queryFn: getMerchantServices, // No arguments passed if none are needed
    });

  // Mutate data when user submits a form
  const { mutate, isLoading: isMutationLoading, error: mutationError } = useMutation({
    mutationFn: (filter) => getTransactions(filter),
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSearchFilter((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setSearchFilter((prev) => ({ ...prev, startDate, endDate }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(searchFilter); // Manually trigger mutation with the current filter
  };

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  const transactions: Transaction = data?.data || [];
  const merchantServices = data?.merchantServices || [];


  return (
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
            {/* <CCol xs={12} md={4} xl={3}>
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
            </CCol> */}

            <CCol xl={2}>
              <CFormSelect
                id="payPartnerServiceId"
                name="payPartnerServiceId"
                value={searchFilter.payPartnerServiceId}
                onChange={handleInputChange}
                options={[
                  { label: "SERVICE 1", value: "MTNMOMGH0233SC1001000101" },
                ]}
              />
            </CCol>

            <CCol xl={3}>
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

            <CCol xl={5}>
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
              value={<div className="text-black dark:text-white">GHS {formatMoney_util(transactions?.collectionBalance) || 0}</div>}
              title="Collection Balance"
            />
          </CCol>

          <CCol sm={3}>
            <CWidgetStatsB className="mb-4 shadow" value={<>GHS {transactions?.payoutBalance}</>} title="Payout Balance" />
          </CCol>

          <CCol className="" sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              value={<>GHS {transactions?.commissionBalance}</>}
              title="Commission Balance"
            />
          </CCol>

          <CCol className="" sm={3}>
            <CWidgetStatsB
              className="mb-4 shadow"
              value={<>GHS {transactions?.totalSettlements}</>}
              title="Total Settlements"
            />
          </CCol>
        </CRow>

        <hr className="mb-0" style={{ border: "3px solid #8e011c" }} />

        <CCard className="border-0 shadow-none p-1">
          {queryError && <div className="alert alert-danger">{queryError}</div>}
          <CSmartTable
            sorterValue={{ column: "transactionDate", state: "desc" }}
            activePage={1}
            columns={columns}
            columnFilter
            columnSorter
            items={transactions.accountTransactions}
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
              striped: true,
              hover: true,
              small: false,
              borderColor: "light",
            }}
            tableBodyProps={{
              className: "align-middle",
            }}
            loading={isQueryLoading}
            noItemsLabel={isQueryLoading ? "Loading...." : <NoItemsLabel onMouseUp={() => { }} />}
          />
        </CCard>
      </CContainer>
    </BizCollectLayout>
  )
}

export default BizCollect
