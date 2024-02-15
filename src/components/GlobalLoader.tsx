import React from 'react'
import { CSpinner } from '@coreui/react-pro'
const GlobalLoader = () => {
  return (
    <div className="page-loader bg-gradient" style={{ width: '150px' }}>
      <CSpinner color="danger" variant="grow" style={{ width: '3rem', height: '3rem' }} />
      <CSpinner color="warning" variant="grow" style={{ width: '3rem', height: '3rem' }} />
      <CSpinner color="info" variant="grow" style={{ width: '3rem', height: '3rem' }} />
    </div>
  )
}

export default React.memo(GlobalLoader)
