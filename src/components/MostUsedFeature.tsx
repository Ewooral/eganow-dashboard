import { CButton } from '@coreui/react-pro'
import { useRouter } from 'next/router'
import React from 'react'
import { cibMacys, cilStar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function MostUsedFeature(props: any) {
  const router = useRouter()

  const filtered = props.features.filter(
    (feature: any) => feature.title === props.highestFeatureValue,
  )

  return (
    <CButton
      size="sm"
      className="d-flex align-items-center gap-1 mostusedfeature dark:text-white skeleton-box  border-0"
      onClick={() => (filtered[0]?.route ? router.push(filtered[0]?.route) : '')}
    >
      {filtered[0]?.title && <CIcon icon={cibMacys} className=" mostusedfeature-star " />}
      <p className="m-0 ">{filtered[0]?.title ? filtered[0]?.title : '---NA---'}</p>
    </CButton>
  )
}

export default MostUsedFeature
