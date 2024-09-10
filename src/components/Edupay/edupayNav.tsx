import React, { ElementType } from 'react'
import {
  cilEnvelopeOpen,
  cilNotes,
  cilSpeedometer,
  cilSpreadsheet,
  cilHandPointLeft,
  cilCash,
  cilCreditCard,
  cilLibraryBuilding,
} from '@coreui/icons'
import { PiStudent } from 'react-icons/pi'
import { CiMoneyBill } from 'react-icons/ci'

import { GiTakeMyMoney } from 'react-icons/gi'

import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'
import { LuSchool2 } from 'react-icons/lu'
import { FaMoneyBillTrendUp, FaSchoolFlag } from 'react-icons/fa6'
import { BiSolidSchool } from 'react-icons/bi'

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

const edupayNav = [
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
    title: 'Edupay',
  },

  {
    component: CNavItem,
    title: 'Dashboard',
    href: '/edupay',
    icon: (
      <CIcon icon={cilSpeedometer} customClassName="nav-icon bg-transparent dark:text-white " />
    ),
    badge: {
      color: 'info-gradient',
    },
  },
  // {
  //   component: CNavGroup,
  //   title: 'Schools',
  //   icon: (
  //     <CIcon icon={cilLibraryBuilding} customClassName="nav-icon bg-transparent dark:text-white" />
  //   ),
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Add school',
  //       href: '/edupay/schools',
  //     },
  //   ],
  // },

  {
    component: CNavGroup,
    title: 'Students',
    icon: <PiStudent className="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Add student',
        href: '/edupay/students',
      },
    ],
  },

  {
    component: CNavGroup,
    title: 'Billing',
    icon: <CiMoneyBill className="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'Create a bill',
        href: '/edupay/billing/create-a-bill',
      },
    ],
  },
  {
    component: CNavGroup,
    title: 'Payments',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon bg-transparent dark:text-white" />,

    items: [
      {
        component: CNavItem,
        name: 'View  Payments',
        href: '/edupay/payments',
      },
    ],
  },
  {
    component: CNavGroup,
    title: 'Setup',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon bg-transparent dark:text-white" />,
    items: [
      {
        component: CNavItem,
        name: 'School setup',
        href: '/edupay/setup',
      },
    ],
  },
]

export default edupayNav
