import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'

function CompleteProfileBanner(props: any) {
  return (
    <div>
      {props.status !== 1 && (
        <div className="alert-banner m-0 py-1 mb-4">
          <div className="container d-flex justify-content-between align-items-center py-2">
            {' '}
            <div className="d-flex align-items-center gap-2">
              <CgProfile size={24} className="" /> {props.firstName},your account is not complete
            </div>
            <Link href="/business-details">
              <button type="button" className="btn btn-danger text-white btn-sm">
                Complete profile
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default CompleteProfileBanner
