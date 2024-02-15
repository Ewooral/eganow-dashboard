import { AppEntryHeader, AppFooter } from '@/components'
import React from 'react'

function EntryLayout({ children, cookies }: { children: React.ReactNode; cookies: UserInfoType }) {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent bg-img">
        <AppEntryHeader {...cookies} />
        <div className="body flex-grow-1 px-3 ">{children}</div>
        <AppFooter />
      </div>
    </>
  )
}

export default EntryLayout
