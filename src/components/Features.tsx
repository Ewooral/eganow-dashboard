// @ts-nocheck
import React from 'react'
import Image from 'next/image'
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CLink } from '@coreui/react-pro'
import type { FeaturePropsType } from '@/types/Features'

export default function Features(props: FeaturePropsType) {
  return (
    <CCol sm={6} lg={3}>
      <CCard className="card1 text-center w-100 pt-3 rounded-4">
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
        <div
          className="d-flex justify-content-center mx-auto overflow-hidden"
          style={{
            width: '140px',
            height: '140px',
            border: '4px solid rgba(255, 255, 255)',
            borderRadius: '50%',
          }}
        >
          <Image
            className="my-auto"
            orientation="top"
            src={props.data.icon}
            style={{
              width: '76%',
              height: 'auto',
            }}
            alt=""
          />
        </div>
        <CCardBody>
          <CCardTitle>
            <strong>{props.data.title}</strong>
          </CCardTitle>

          <CCardText>{props.data.content}</CCardText>

          <CButton href={props.data.route} shape="rounded-pill" className="w-50">
            Continue
          </CButton>
        </CCardBody>
      </CCard>
    </CCol>
  )
}
