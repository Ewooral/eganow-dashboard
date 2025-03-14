import React, { ElementType } from 'react'
import {
  cilEnvelopeOpen,
  cilNotes,
  cilSpeedometer,
  cilSpreadsheet,
  cilHandPointLeft,
  cilCash,
  cilCreditCard,
} from '@coreui/icons'

import { GiTakeMyMoney } from 'react-icons/gi'

import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'





const bizcollectNav = [
  {
    component: CNavItem,
    title: 'Back to Features',
    href: '/',
    icon: <CIcon icon={cilHandPointLeft} customClassName="nav-icon   dark:text-white" />,
    badge: {
      color: 'info-gradient',
    },
  },

  {
    component: CNavTitle,
    title: 'Biz Collect',
  },

  {
    component: CNavItem,
    title: 'Dashboard',
    href: '/biz-collect',
    icon: (
      <CIcon icon={cilSpeedometer} customClassName="nav-icon bg-transparent dark:text-white " />
    ),
    badge: {
      color: 'info-gradient',
    },
  },

  {
    component: CNavGroup,
    title: 'Transactions',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Account Transactions',
        href: '/biz-collect/account-transactions',
      },
      {
        component: CNavItem,
        name: 'Internal Transfer',
        href: '/biz-collect/internal-transfer',
      },
      {
        component: CNavItem,
        name: 'Internal Transfer History',
        href: '/biz-collect/internal-transfer-history',
      },
    ],
  },
  {
    component: CNavGroup,
    title: 'Collection Receipts',
    icon: <CIcon icon={cilCash} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Collection',
        href: '/biz-collect/collection',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Settlements',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Settlement Request',
        href: '/biz-collect/settlement-request',
      },
      {
        component: CNavItem,
        name: 'Settlement History',
        href: '/biz-collect/settlement-history',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Payments',
    icon: <GiTakeMyMoney className="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Payments',
        href: '/biz-collect/payments',
      },
      {
        component: CNavItem,
        name: 'Payment Links',
        href: '/biz-collect/payment-links',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Direct Debit',
    href: '/components/icons',
    icon: (
      <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon bg-transparent dark:text-white" />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Direct Debit Accounts',
        href: '/biz-collect/direct-debit-accounts',
      },

      {
        component: CNavItem,
        name: 'Direct Debit Trans History',
        href: '/biz-collect/direct-debit-history',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Merchant',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Customers',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Pin Reset',
        href: '/components/icons/flags',
      },
      {
        component: CNavItem,
        name: 'User Management',
        href: '/components/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Business Details',
        href: '/business-details',
      },
    ],
  },
  {
    component: CNavGroup,
    title: 'Funding',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Add funding',
        href: '/components/icons/free',
      },
    ],
  },
]

export default bizcollectNav
