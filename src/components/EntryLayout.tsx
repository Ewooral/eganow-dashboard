import { AppEntryHeader, AppFooter } from '@/components'
import { CContainer } from '@coreui/react-pro'

function EntryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent bg-img">
        <AppEntryHeader />
        <div className="body flex-grow-1 px-3 ">{children}</div>
        <AppFooter />
      </div>
    </>
  )
}

export default EntryLayout
