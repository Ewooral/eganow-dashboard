import React from 'react'

import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Eganow
        </a>
        <span className="ms-1">&copy; 2023.</span>
      </div>
      <div>
        <span className="ms-1">Version: 2.0</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
