// @ts-nocheck
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CLink,
  CPlaceholder,
} from '@coreui/react-pro'

export default function FeaturesPlaceholder(props) {
  return (
    <CCol sm={6} lg={3}>
      <CCard
        className="card1 text-center w-100 pt-2 rounded-4"
        onMouseOver={props.removeUsedFeatureSelect}
      >
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>

        <div className="d-flex justify-content-center mx-auto overflow-hidden ">
          <CCardImage
            component="svg"
            animation="glow"
            // className='skeleton-box'
            orientation="top"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            focusable="false"
            style={{ width: '150px', height: 'auto' }}
          >
            <circle
              cx="70"
              // className='skeleton-box'
              cy="70"
              r="65"
              stroke="rgba(255, 255, 255)"
              strokeWidth="4"
              fill="#d0d4d9"
            />
          </CCardImage>
        </div>

        <CCardBody>
          <CPlaceholder component={CCardTitle} animation="glow">
            <CPlaceholder xs={6} className="rounded bg-secondary" />
          </CPlaceholder>

          <CPlaceholder component={CCardText} animation="glow">
            <CPlaceholder xs={11} className="rounded bg-secondary" />
            <CPlaceholder xs={12} className="rounded bg-secondary" />
            <CPlaceholder xs={8} className="rounded bg-secondary" />
          </CPlaceholder>

          <CPlaceholder
            component={CButton}
            disabled
            href="#"
            tabIndex={-1}
            xs={6}
            shape="rounded-pill"
            className="w-50 bg-secondary border-0 skeleton-box"
          ></CPlaceholder>
        </CCardBody>
      </CCard>
    </CCol>
  )
}
