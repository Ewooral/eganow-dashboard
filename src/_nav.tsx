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
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

const _nav = [
  {
    component: CNavItem,
    name: 'Back to Features',
    href: '/',
    icon: <CIcon icon={cilHandPointLeft} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
    },
  },

  {
    component: CNavTitle,
    name: 'Menus',
  },

  {
    component: CNavItem,
    name: 'Dashboard',
    href: '/biz-collect',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
    },
  },

  {
    component: CNavGroup,
    name: 'Transactions',
    href: '/components/icons',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Account Balance',
        href: '/components/icons/free',
        badge: {
          color: 'success-gradient',
          text: '9',
        },
      },
      {
        component: CNavItem,
        name: 'Account Transactions',
        href: '/components/icons/flags',
      },
      {
        component: CNavItem,
        name: 'Acct to Acct Transactions',
        href: '/components/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Fund Transfer',
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
    name: 'Payment Link',
    href: '/components/icons',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
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
    name: 'Merchant Customers',
    href: '/components/icons',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customers',
        href: '/components/icons/free',
      },
      {
        component: CNavItem,
        name: 'Pin Reset Request',
        href: '/components/icons/flags',
      },
      {
        component: CNavItem,
        name: 'Pin Reset Request',
        href: '/components/icons/brands',
      },
    ],
  },
  
  {
    component: CNavItem,
    name: 'Merchant Users',
    href: '/components/icons',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
]

export default _nav
