import React, { useEffect, useState } from 'react'
import { useUI } from '@/store'
import {
  CCloseButton,
  CFormSwitch,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CSidebar,
  CSidebarHeader,
  CButtonGroup,
  CFormCheck,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMoon, cilSettings, cilSun } from '@coreui/icons'

const AppAside = () => {
  const theme = useUI((state) => state.theme)
  const setTheme = useUI((state) => state.setTheme)
  const setAsideShow = useUI((state) => state.setAsideShow)
  const asideShow = useUI((state) => state.asideShow)

  const [activeKey, setActiveKey] = useState(1)

  useEffect(() => {
    theme === 'dark'
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme')
  }, [theme])

  function handleTheme(event: { target: any }) {
    console.log(event.target.checked)
    if (event.target.checked) {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  return (
    <CSidebar
      colorScheme="light"
      size="lg"
      overlaid
      placement="end"
      visible={asideShow}
      onVisibleChange={(visible) => {
        setAsideShow(visible)
      }}
    >
      <CSidebarHeader className="bg-transparent p-0">
        <CNav variant="underline">
          <CNavItem>
            <CNavLink
              href="#"
              active={activeKey === 1}
              onClick={(e) => {
                e.preventDefault()
                setActiveKey(1)
              }}
            >
              <CIcon icon={cilSettings} />
            </CNavLink>
          </CNavItem>
          <CNavItem className="ms-auto me-2 d-flex align-items-center">
            <CCloseButton onClick={() => setAsideShow(false)} />
          </CNavItem>
        </CNav>
      </CSidebarHeader>
      <CTabContent>
        <CTabPane className="p-3" visible={activeKey === 1}>
          <h6>Settings</h6>

          <div>
            <div className="clearfix mt-4">
              <CFormSwitch
                size="lg"
                label="Dark mode on"
                checked={theme === 'dark'}
                onChange={handleTheme}
              />
            </div>
            <div>
              <small className="text-medium-emphasis">
                By reducing the amount of light emitted by screens, especially in low-light
                environments, dark mode can lessen eye strain and fatigue.
              </small>
            </div>
          </div>

          <hr />
        </CTabPane>
      </CTabContent>
    </CSidebar>
  )
}

export default React.memo(AppAside)
