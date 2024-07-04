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
import NoItemsLabel from '@/components/NoItemsLabel'
import {
  NameColumn,
  PhoneNumberColumn,
  AmountColumn,
  StatusColumn,
} from '@/components/SmartTableColumnStyle'

/* 






*/

const columns = [
  {
    label: 'Date',
    key: 'date',
    _style: { minWidth: '110px', width: '10%' },
    sorter: false,
  },
  {
    label: 'Full Name',
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
    label: 'Status',
    key: 'status',
    _style: { minWidth: '100px', width: '10%' },
  },
  {
    label: 'Account Number',
    key: 'momonumber',
    _style: { minWidth: '180px', width: '10%' },
    sorter: false,
  },
  {
    label: 'Payment Name',
    key: 'paymentname',
    _style: { minWidth: '250px' },
  },
]

const data = [
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '50,000',
    status: 'FAILED',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  ,
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  ,
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  ,
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Amonba Black',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'Jane Doe',
    amount: '6000',
    status: 'SUCCESSFUL',
    momonumber: '024586584',
    paymentname: 'Fiifi',
  },
  {
    date: '10/06/2024',
    membername: 'John Doe',
    amount: '10',
    status: 'PENDING',
    momonumber: '0251458756',
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
  const isStoreReady = useStoreReady()

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <DashboardLayout {...props}>
      <div className="d-flex justify-content-between align-items-center flex-wrap bg-white rounded p-4">
        <div className="flex-grow-1">
          <h3>Account Transactions</h3>
        </div>

        <CButton color="danger text-white" size="md">
          Internal transfer
        </CButton>
      </div>

      <CContainer fluid className="p-3 bg-white mt-5 mb-5 rounded">
        <CRow>
          <CForm className="d-flex align-items-center">
            <CCol xs={12} md={6} className="d-flex gap-4">
              <CFormInput
                size="sm"
                type="email"
                id="exampleFormControlInput1"
                placeholder="search transactions"
                aria-describedby="exampleFormControlInputHelpInline"
              />
              <CButton color="primary text-white" size="md">
                Search
              </CButton>
            </CCol>
          </CForm>
        </CRow>

        <CCard className="border-0 shadow-none">
          <CCardBody className="">
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
              pagination
              scopedColumns={{
                membername: (items) => NameColumn(items.membername),
                paymentaccountnumberormomonumber: (items) =>
                  PhoneNumberColumn(items.paymentaccountnumberormomonumber),
                amount: (items) => AmountColumn(items.amount),
                status: (items) => StatusColumn(items.status),
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
          </CCardBody>
        </CCard>
      </CContainer>
    </DashboardLayout>
  )
}

export default BizCollect
