import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CBadge } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

import { Badge, NavItem } from '../_nav'

interface AppSidebarNavProps {
  items: NavItem[]
}

export default function AppSidebarNav({ items }: AppSidebarNavProps) {
  const location = usePathname()

  const navLink = (
    name: string | JSX.Element,
    icon: string | ReactNode,
    // badge?: Badge,
    title?: string | JSX.Element | undefined,
  ) => {
    return (
      <>
        {icon && typeof icon === 'string' ? (
          <CIcon icon={icon} customClassName="nav-icon text-center" />
        ) : (
          icon
        )}
        {/* <p className="nav-bullet my-0"></p> */}
        {name ? (
          <div className="d-flex align-items-center gap-2">
            <p className="nav-bullet m-0"></p>
            {name}
          </div>
        ) : (
          <div>{title}</div>
        )}
        {/* {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )} */}
      </>
    )
  }

  const navItem = (item: NavItem, index: number) => {
    const { component, name, title, badge, icon, ...rest } = item

    const Component = component
    return (
      <Component
        className=""
        {...(rest.href &&
          !rest.items && {
            active: location === rest.href,
            component: Link,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, title)}
      </Component>
    )
  }
  const navGroup = (item: NavItem, index: number) => {
    const { component, name, icon, href, title, ...rest } = item
    const Component = component

    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon, title)}
        {...(href && { visible: location && location.startsWith(href) })}
        {...rest}
      >
        {item.items?.map((item: NavItem, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <div
      style={{
        width: '95%',
        margin: '0 auto',
      }}
      className=" "
    >
      {items &&
        items.map((item: NavItem, index: number) => {
          return item.items ? navGroup(item, index) : navItem(item, index)
        })}
    </div>
  )
}
