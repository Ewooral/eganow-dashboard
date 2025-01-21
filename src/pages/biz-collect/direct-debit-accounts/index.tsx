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
import { FaFileExport } from 'react-icons/fa6'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { MdOutlineFlashAuto } from 'react-icons/md'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentPdf } from 'react-icons/gr'
import { AiFillFileAdd } from 'react-icons/ai'
import { MdAccountTree } from 'react-icons/md'
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

import Confirm from '@/components/Confirm'
import AddEditDirectDebit from '@/components/Biz-collect/direct-debit-accounts/AddEditDirectDebit'
/* 






*/

const columns = [
  {
    label: 'Created Date',
    key: 'date',
    _style: { minWidth: '110px', width: '10%' },
    sorter: false,
  },
  {
    label: 'Service Type',
    key: 'membername',
    _style: { minWidth: '200px' },
  },
  {
    label: 'Transaction Type',
    key: 'membername',
    _style: { minWidth: '200px' },
  },
  {
    label: 'Amount',
    key: 'amount',
    _style: { minWidth: '150px', width: '15%' },
    sorter: false,
  },
  {
    label: 'Narration',
    key: 'narration',
    _style: { minWidth: '200px', width: '20%' },
  },
  {
    label: 'Created By',
    key: 'narration',
    _style: { minWidth: '200px', width: '20%' },
  },
  {
    key: 'actions',
    label: 'Actions',
    _style: { minWidth: '100px', width: '130px' },
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
    narration: 'fgf',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    narration: 'ffgfg ghghgh ',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '6000',
    narration: 'fdsfdfdfdfd dfdfdfdfdf dfd',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    narration: 'fddfdfd fgfgfg ghghh',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '6000',
    narration: 'fdsfdfdfdfd dfdfdfdfdf dfd',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    narration: 'fddfdfd fgfgfg ghghh',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '6000',
    narration: 'fdsfdfdfdfd dfdfdfdfdf dfd',
  },
  {
    date: '10/06/2024',
    membername: 'DRF5656565565565',
    membername: 'DRF5656565565565',
    amount: '10',
    narration: 'fddfdfd fgfgfg ghghh',
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

const InternalTransfer: NextPageWithLayout = (props) => {
  // Dynamic Components
  const [dynamicComponent, setDynamicComponent] = useState<ReactComponentElement<P | T> | null>(
    null,
  )
  const START_DATE = new Date()
  const END_DATE = new Date()

  const isStoreReady = useStoreReady()

  const [searchFilter, setSearchFilter] = useState({
    status: 'SUCCESSFUL',
    startDate: START_DATE,
    endDate: END_DATE,
  })

  function handleModal() {
    //Setting default data
    const userData = {
      type: 'new',
    }
    //Open modal component
    setDynamicComponent(
      <AddEditDirectDebit modalClose={modalClose} data={userData} callback={callback} />,
    )
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>, items: ItemType): void {
    const { type } = event.target.dataset

    /*  Editing Users */
    if (type === 'edit') {
      //Setting default data
      const agentData = {
        type: 'edit',
        ...items,
      }
      //Open modal component
      setDynamicComponent(
        <AddEditDirectDebit
          modalClose={modalClose}
          data={agentData}
          callback={handleRefresh}
        />,
      )
    }
    /*  Reset agent password */
    if (type === 'resetPassword') {
      const message = `You are about to reset ${items.agentname}'s password.`
      //Setting default data
      setDynamicComponent(
        <Confirm modalClose={modalClose} onClick={handleConfirm} message={message} data={items} />,
      )
    }
  }

  function callback(state: string, data: any): void {
    //Refreshing the list of agents
    //handleRefresh()
    //Showing the agent pin window on new and uploaded list.
  }

  async function handleConfirm(
    event: React.ChangeEvent<HTMLInputElement>,
    data: AgentRequest,
  ): void {
    /*  try {
      const { name } = event.target

      if (name === 'ok') {
        //Closing the confirm box
        modalClose()

        const param = {
          agentId: data.agentid,
          updatedBY: customerInfo.emailaddress,
          mobileNumber: data.mobilenumber,
        }
        //Calling the endpoint
        const response = await resetAgentPassword(param)

        if (!response.status) {
          //Throw response on error.
          throw new Error(response.message)
        }

        //Show response on success.
        showSnackbar({
          type: 'success',
          title: 'Agent Management',
          messages: response.message,
          show: true,
        } as SnackbarDataType)

        //Create the new agent data to show
        const agentData = [
          {
            id: 1,
            agentname: data.agentname,
            agentid: data.agentid,
            mobilenumber: data.mobilenumber,
            pin: response.pin,
          },
        ]
        //Showing the agent pin
      }

      if (name === 'cancel') {
        modalClose()
      }

      //Close the confirm modal box.
    } catch (error) {
      //Show response on error.
      showSnackbar({
        type: 'danger',
        title: 'Agent Management',
        messages: error.message,
        show: true,
      } as SnackbarDataType)
    } */
  }

  function modalClose(): void {
    setDynamicComponent(null)
  }

  //Server-render loading state
  if (!isStoreReady) {
    return <GlobalLoader />
  }

  return (
    <BizCollectLayout {...props}>
      <div className="d-flex justify-content-between align-items-center flex-wrap rounded pt-2">
        <div className="flex-grow-1">
          <h1 className="fs-3 fw-bold text-danger-emphasis" style={{ color: '#CC0229' }}>
            <MdAccountTree className="fs-2 fw-bold me-2" />
            Direct Debit Accounts
          </h1>
          <small className="text-secondary">View/ edit internal fund transfer transactions</small>
        </div>

        <div className="flex gap-2">
          <CButton
            color="danger"
            /*  variant="outline" */
            size="md"
            style={{ marginTop: '30px' }}
            onClick={handleModal}
            className="text-white"
          >
            <MdAccountTree style={{ fontSize: '1.2rem' }} className="me-1" />
            Direct Debit Request
          </CButton>{' '}
          <CDropdown variant="btn-group" title="Export list" style={{ marginTop: '30px' }}>
            <CDropdownToggle variant='outline' color="danger" className="rounded-50 dark:text-white">
              <FaFileExport className="me-1" style={{ fontSize: '1.2rem' }} /> Export
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
          className="d-flex align-items-center gap-4 mb-2 py-3 px-3 dark:bg-dark"
          style={{ backgroundColor: '#eee' }}
        >
          <CRow className="gap-y-2">
            <CCol xs={12} xl={4}>
              {/* <CFormLabel htmlFor="status">
                <strong>Date</strong>
              </CFormLabel> */}
              <CDateRangePicker
                id="dateRange"
                startDate={searchFilter.startDate}
                endDate={searchFilter.endDate}
                locale="en-US"
                format={DATE_FORMAT}
                footer
                onStartDateChange={() => {}}
                onEndDateChange={() => {}}
              />
            </CCol>

            <CCol xs={12} xl={3}>
              {/*  <CFormLabel htmlFor="status">
                <strong>Search</strong>
              </CFormLabel> */}
              <CFormSelect
                id="status"
                name="status"
                value={searchFilter.status}
                onChange={() => {}}
                options={[
                  { label: 'ALL', value: 'ALL' },
                  { label: 'JM 2024 CAMPAIGN', value: 'SUCCESSFUL' },
                ]}
              />
            </CCol>

            <CCol xs={12} xl={2}>
              {/*  <CFormLabel htmlFor="status">
                <strong>Status</strong>
              </CFormLabel> */}
              <CFormSelect
                id="status"
                name="status"
                value={searchFilter.status}
                onChange={() => {}}
                options={[
                  { label: 'ALL', value: 'ALL' },
                  { label: 'TRANSFER COLLECTION TO PAYOUT', value: 'SUCCESSFUL' },
                ]}
              />
            </CCol>

            <CCol xs={12} xl={2}>
              {/*  <CFormLabel htmlFor="status">
                <strong>Status</strong>
              </CFormLabel> */}
              <CFormSelect
                id="status"
                name="status"
                value={searchFilter.status}
                onChange={() => {}}
                options={[
                  { label: 'ACTIVE', value: 'ACTIVE' },
                  { label: 'HISTORY', value: 'HISTORY' },
                ]}
              />
            </CCol>

            <CCol xs={12} xl={1}>
              <CButton var color="danger" size="md" className="text-white">
                <FaSearch className="fs-4" />
              </CButton>
            </CCol>
          </CRow>
        </CForm>

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
            pagination
            scopedColumns={{
              membername: (items) => NameColumn(items.membername),
              paymentaccountnumberormomonumber: (items) =>
                PhoneNumberColumn(items.paymentaccountnumberormomonumber),
              amount: (items) => AmountColumn(items.amount),
              actions: (items) => {
                return (
                  <td className="py-2">
                    <CButton
                      data-type="resetPassword"
                      color="secondary"
                      shape="square"
                      onClick={handleClick}
                      title="Reset Password"
                      className="text-white"
                    >
                      <CIcon icon={cilChartPie} data-type="resetPassword" /> Approve
                    </CButton>
                  </td>
                )
              },
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
      {/* Dynamic Modal Component */}
      {dynamicComponent}
    </BizCollectLayout>
  )
}

export default InternalTransfer
