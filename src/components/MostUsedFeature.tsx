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
      color="dark"
      className="d-flex align-items-center gap-1"
      onClick={() => router.push(filtered[0]?.route)}
    >
      <CIcon icon={cibMacys} className="text-warning" />
      <p className="m-0">{filtered[0]?.title}</p>
    </CButton>
  )
}

export default MostUsedFeature
