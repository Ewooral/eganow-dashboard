// @ts-nocheck
import React from 'react'
import { useUI } from 'src/store'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react-pro'

import AppSidebarNav from './AppSidebarNav'

import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { full_logo_red, full_logo_white } from '@/public/brand/logo-full'
import { half_logo_red, half_logo_white } from '@/public/brand/logo-half'
// sidebar nav config
import navigation from '../_nav'

const AppSidebar = (): JSX.Element => {
  const sidebarUnfoldable = useUI((state) => state.sidebarUnfoldable)
  const sidebarShow = useUI((state) => state.sidebarShow)
  const setSidebarShow = useUI((state) => state.setSidebarShow)
  const setUnfordable = useUI((state) => state.setUnfordable)
  const theme = useUI((state) => state.theme)

  return (
    <CSidebar
      position="fixed"
      unfoldable={sidebarUnfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        setSidebarShow(visible)
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon
          className="sidebar-brand-full"
          icon={theme === 'dark' ? full_logo_red : full_logo_white}
          height={35}
        />
        <CIcon
          className="sidebar-brand-narrow"
          icon={theme === 'dark' ? half_logo_red : half_logo_white}
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav className="">
        <SimpleBar className=" ">
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => setUnfordable(!sidebarUnfoldable)}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
