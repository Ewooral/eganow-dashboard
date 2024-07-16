// @ts-nocheck
import Image from 'next/image'
import { CURRENCY, MONEY_FORMAT, PLACEHOLDER } from '@/constants'
import { formatMoney_util, statusType_util } from '@/util'
import { cilLibrary, cilLockLocked, cilPencil } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CButton, CCardBody, CCollapse } from '@coreui/react-pro'

import { FiEye } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'

import { ChangeEvent } from 'react'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const NameColumn = (name: string) => {
  return (
    <td>
      <span style={{ fontSize: '1rem' }}> {name ? name : '-------- N/A --------'} </span>
    </td>
  )
}

export const PhoneNumberColumn = (number: string) => {
  return (
    <td>
      <a href={`tel:${number}`}> {number}</a>
    </td>
  )
}

export const StatusColumn = (status: string) => {
  let bg = null
  let color = null

  switch (status) {
    case 'SUCCESSFUL':
      bg = '#badbcb'
      color = '#198754'
      break
    case 'PENDING':
      bg = '#fed8b8'
      color = '#fd7e14'
      break
    case 'FAILED':
      bg = '#f0b3be'
      color = '#cd0429'
      break

    case 'PRINTED':
      bg = '#b8c8de'
      color = '#304767'
      break
    case 'PRINTING':
      bg = '#ffecb4'
      color = '#ffc107'
      break
    case 'DELIVERED':
      bg = '#badbcb'
      color = '#198754'
      break

    default:
      bg = '#f0b3be'
      color = '#cd0429'
  }

  return (
    <td>
      <span
        className="d-inline-flex flex-nowrap align-items-center rounded-5 px-2"
        style={{ color: color, backgroundColor: bg }}
      >
        <GoDotFill /> <span>{status}</span>
      </span>
    </td>
  )
}


export const AmountColumn = (amount: number) => {
  return (
    <td style={{ color: '#0bac4e' }}>
      <strong>{`${CURRENCY} ${formatMoney_util(amount, MONEY_FORMAT)}`}</strong>
    </td>
  )
}

export const ActionButtons = (
  item: ItemType,
  handleDataMenu: {
    (e: ChangeEvent<HTMLInputElement>, items: ItemType): void
    (arg0: any, arg1: ItemType): void
  },
) => {
  const handleClick = (e: any) => {
    handleDataMenu(e, item)
  }
  return (
    <td className="py-2">
      {/*  <CButton
        data-type="edit"
        color="primary"
        shape="square"
        onClick={handleClick}
        title="Edit User"
      >
        <CIcon icon={cilPencil} data-type="edit" />
      </CButton>{' '}
      <CButton
        data-type="resetPassword"
        color="secondary"
        shape="square"
        onClick={handleClick}
        title="Reset Password"
      >
        <CIcon icon={cilLockLocked} data-type="resetPassword" />
      </CButton>{' '} */}
      <CButton
        data-type="viewAgentTransactions"
        color="success"
        shape="square"
        onClick={handleClick}
        title="View Agent Transactions"
      >
        <FiEye data-type="viewAgentTransactions" />
      </CButton>
    </td>
  )
}

export const MemberDetails = (item, state) => {
  return (
    <CCollapse visible={state === item.id}>
      <CCardBody className="p-3">
        <span className="text-muted">
          <h5>
            <strong>{item.fullname}</strong>
          </h5>
        </span>
        <div className="d-flex">
          <span className="text-muted">
            <i>Gender::</i> <strong>{item.gender || PLACEHOLDER}</strong>
          </span>
          <span className="ms-5 text-muted">
            <i>Age::</i> <strong>{item.age || PLACEHOLDER}</strong>
          </span>
          <span className="ms-5 text-muted">
            <i>Country Of Residence::</i> <strong>{item.countryofresedence || PLACEHOLDER}</strong>
          </span>
          <span className="ms-5 text-muted">
            <i>NDC Member ID No::</i> <strong>{item.ndcmemberidno || PLACEHOLDER}</strong>
          </span>
          <span className="ms-5 text-muted">
            <i>Mobile/ Web/ USSD::</i> <strong>{item.mobielwebussd || PLACEHOLDER}</strong>
          </span>
          <span className="ms-5 text-muted">
            <i>Display Name On Card::</i> <strong>{item.displaynameoncard || PLACEHOLDER}</strong>
          </span>
        </div>
        <div className="d-flex mt-2">
          <span className="text-muted">
            <i>Card Pick Up Location::</i> <strong>{item.cardpickuplocation || PLACEHOLDER}</strong>
          </span>
          <span className="ms-5 text-muted d-inline-flex">
            <i className="me-2">Card Type::</i>
          </span>
        </div>
      </CCardBody>
    </CCollapse>
  )
}

export const ShowDetails = (item, state, handleAction) => {
  return (
    <td className="py-2">
      <CButton
        color="primary"
        variant="outline"
        shape="square"
        size="sm"
        data-type="edit"
        data-id={item.id}
        title="Edit member"
        onClick={(e) => handleAction(e, item)}
      >
        <CIcon icon={cilPencil} data-type="edit" data-id={item.id} />
      </CButton>{' '}
      <CButton
        color="primary"
        shape="square"
        size="sm"
        title="View member"
        data-type="view"
        data-id={item.id}
        onClick={(e) => handleAction(e, item)}
      >
        {state === item.id ? 'Hide' : 'View'}
      </CButton>
    </td>
  )
}
