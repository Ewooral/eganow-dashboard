import { AppAside, AppEntryHeader, AppFooter } from '@/components'
import { FeaturePropsType } from '@/types/Features'
import { UserInfoType } from '@/types/Users'
import React from 'react'

function EntryLayout({
  children,
  cookies,
  features,
}: {
  children: React.ReactNode
  cookies: UserInfoType
  features: FeaturePropsType
}) {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent bg-img">
        <AppEntryHeader {...cookies} features={features} />
        <div className="body flex-grow-1 px-3 ">{children}</div>
        <AppFooter />
        <AppAside />
      </div>
    </>
  )
}

export default EntryLayout
