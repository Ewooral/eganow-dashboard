import React, { ElementType } from 'react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilGroup,
  cilHandPointLeft,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  title?: string | JSX.Element | undefined
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

const _nav = [
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
    href: '/components/icons',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'View Transactions',
        href: '/biz-collect/account-transactions',
      },
      {
        component: CNavItem,
        name: 'Internal Transfer',
        href: '/biz-collect/account-transactions',
      },
      {
        component: CNavItem,
        name: 'Internal Transfer History',
        href: '/biz-collect/account-transactions',
      },
      // {
      //   component: CNavItem,
      //   name: 'Internal Transfer',
      //   href: '/biz-collect/account-transactions',
      // },
      // {
      //   component: CNavItem,
      //   name: 'One-time Payment',
      //   href: '/components/icons/brands',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Fund Transfer',
      //   href: '/components/icons/brands',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Bulk Transfer',
      //   href: '/components/icons/brands',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Fund Transfer History',
      //   href: '/components/icons/brands',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Account Statement',
      //   href: '/components/icons/brands',
      // },
    ],
  },

  {
    component: CNavGroup,
    title: 'Settlements',
    href: '/components/icons',
    icon: (
      <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon bg-transparent dark:text-white" />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Settlement Request',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Settlement History',
        href: '/components/icons/flags',
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
        name: 'Direct Debit Trans History',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Direct Debit Request',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'View Direct Debit Accounts',
        href: '/components/icons/flags',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Payment Link',
    href: '/components/icons',
    icon: (
      <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon bg-transparent dark:text-white" />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Generate Payment Link',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Active Payment Links',
        href: '/components/icons/flags',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Payments-Disbursement',
    href: '/components/icons',
    icon: (
      <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon bg-transparent dark:text-white" />
    ),
    items: [
      {
        component: CNavItem,
        name: 'initiate Single Payment',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Inititate Bulk Payment',
        href: '/components/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    title: 'Collection-Receipts',
    href: '/components/icons',
    icon: (
      <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon bg-transparent dark:text-white" />
    ),
    items: [
      {
        component: CNavItem,
        name: 'initiate Collection',
        href: '/components/icons/free',
      },
      // {
      //   component: CNavItem,
      //   name: 'Inititate Bulk Payment',
      //   href: '/components/icons/flags',
      // },
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
]

export default _nav
