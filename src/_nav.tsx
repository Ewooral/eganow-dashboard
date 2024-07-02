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
  title?: string | JSX.Element | undefined,
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
    title: 'Menus',
  },

  {
    component: CNavItem,
    title: 'Dashboard',
    href: '/biz-collect',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon bg-transparent dark:text-white " />,
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
        name: 'Account Transactions',
        href: '/biz-collect/account-transactions',
      },
      {
        component: CNavItem,
        name: 'One-time Payment',
        href: '/components/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Fund Transfer',
        href: '/components/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Bulk Transfer',
        href: '/components/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Fund Transfer History',
        href: '/components/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Account Statement',
        href: '/components/icons/brands',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Payment Link',
    href: '/components/icons',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Generate Payment Link',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Get Payment List',
        href: '/components/icons/flags',
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
]

export default _nav
