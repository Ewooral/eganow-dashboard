import { ElementType } from 'react'

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