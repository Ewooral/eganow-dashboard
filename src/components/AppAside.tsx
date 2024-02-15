// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useUI, useLocale } from '@/store'
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
  CFormSelect,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMoon, cilSettings, cilSun } from '@coreui/icons'

const AppAside = () => {
  const theme = useUI((state) => state.theme)
  const setTheme = useUI((state) => state.setTheme)
  const setAsideShow = useUI((state) => state.setAsideShow)
  const asideShow = useUI((state) => state.asideShow)
  const locale = useLocale((state) => state.locale)
  const setLocale = useLocale((state) => state.setLocale)
  const intl = useIntl()
  const [activeKey, setActiveKey] = useState(1)

  useEffect(() => {
    theme === 'dark'
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme')
  }, [theme])

  function handleChange(event: { target: any }) {
    const { name, value, checked } = event.target

    if (name === 'theme') {
      if (checked) {
        setTheme('dark')
        return
      }
      setTheme('light')
    }

    if (name === 'language') {
      setLocale(value)
    }
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
          <h6>
            <FormattedMessage id="settings" defaultMessage="Settings" />
          </h6>

          <div>
            <div className="clearfix mt-4">
              <CFormSwitch
                size="lg"
                label={intl.formatMessage({
                  id: 'dark_mode_on',
                  defaultMessage: 'Dark mode on',
                })}
                checked={theme === 'dark'}
                name="theme"
                onChange={handleChange}
              />
            </div>
            <div>
              <small className="text-medium-emphasis">
                <FormattedMessage
                  id="theme_description_text"
                  defaultMessage="By reducing the amount of light emitted by screens, especially in low-light
                environments, dark mode can lessen eye strain and fatigue."
                />
              </small>
            </div>
          </div>

          <hr />
          <div className="d-flex align-items-center">
            <label className="me-2">
              <FormattedMessage id="language" defaultMessage="Language" />
              ::
            </label>
            <CFormSelect
              name="language"
              onChange={handleChange}
              size="sm"
              value={locale}
              options={[
                { label: 'English', value: 'en' },
                { label: 'French', value: 'fr' },
              ]}
            />
          </div>
        </CTabPane>
      </CTabContent>
    </CSidebar>
  )
}

export default React.memo(AppAside)
