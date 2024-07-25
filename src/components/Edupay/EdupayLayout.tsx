import React from 'react'
import EdupaySidebar from './EdupaySidebar'
import { UserInfoType } from '@/types/Users'
import AppHeader from '../header/AppHeader'
import AppFooter from '../AppFooter'
import AppAside from '../AppAside'

function EdupayLayout({
  children,
  cookies,
}: {
  children: React.ReactNode
  cookies?: UserInfoType
}) {
  return (
    <>
      <EdupaySidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
        <AppHeader {...cookies} />
        <div className="body flex-grow-1 py-4 px-4">{children}</div>
        <AppFooter />
      </div>
      <AppAside />
    </>
  )
}

export default EdupayLayout
