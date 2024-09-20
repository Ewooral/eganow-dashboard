import { cilWarning } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CAlert, CAlertLink } from '@coreui/react-pro'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'

function CompleteProfileBanner(props: any) {
  return (
    <div>
      {props.status !== 1 && (
        <div className="text-center">
          <CAlert color="warning" dismissible className="">
            <CgProfile size={24} className="" /> {props.firstName},your account is not complete.
            Click
            <CAlertLink href="/business-details"> this link</CAlertLink> to complete your profile.
          </CAlert>
        </div>
      )}
    </div>
  )
}

export default CompleteProfileBanner
