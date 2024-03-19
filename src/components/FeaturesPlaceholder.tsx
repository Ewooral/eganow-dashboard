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
      <CCard className="card1 text-center w-100 pt-2 rounded-4" onMouseOver={props.removeUsedFeatureSelect}>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>

        <div className="d-flex justify-content-center mx-auto overflow-hidden">
          <CCardImage
            component="svg"
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
              cy="70"
              r="65"
              stroke="rgba(255, 255, 255)"
              strokeWidth="4"
              fill="#868e96"
            />
          </CCardImage>
        </div>

        <CCardBody>
          <CPlaceholder component={CCardTitle} animation="glow">
            <CPlaceholder xs={6} />
          </CPlaceholder>

          <CPlaceholder component={CCardText} animation="glow">
            <CPlaceholder xs={11} />
            <CPlaceholder xs={12} />
            <CPlaceholder xs={8} />
          </CPlaceholder>

          <CPlaceholder
            component={CButton}
            disabled
            href="#"
            tabIndex={-1}
            xs={6}
            shape="rounded-pill"
            className="w-50"
          ></CPlaceholder>
        </CCardBody>
      </CCard>
    </CCol>
  )
}
