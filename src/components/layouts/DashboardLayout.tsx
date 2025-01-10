import { AppAside, AppFooter, AppHeader } from '@/components'
import { UserInfoType } from '@/types/Users'

function DashboardLayout({
  children,
  cookies,
}: {
  children: React.ReactNode
  cookies: UserInfoType
}) {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
        <AppHeader {...cookies} />
        <div className="body flex-grow-1 py-4 px-4">{children}</div>
        <AppFooter />
      </div>
      <AppAside />
    </>
  )
}

export default DashboardLayout
