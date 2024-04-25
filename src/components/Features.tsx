// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CLink } from '@coreui/react-pro'
import type { FeaturePropsType } from '@/types/Features'
import { useFeatureStore } from '@/store'
import classNames from 'classnames';

export default function Features(props: FeaturePropsType) {
  const { incrementFeatureCount } = useFeatureStore()

  //increment feature count for most used feature
  const handleFeatureClick = (featureTitle) => {
    incrementFeatureCount(featureTitle)
  }

  
  return (
    <CCol sm={6} lg={3}>
      <CCard
        className={classNames('card1', 'text-center', 'w-100', 'pt-3', 'rounded-4', {
          'card1-selected': props.data.title === props.highestFeatureValue && !props.isFeatureHovered
        })}
        onMouseOver={props.removeUsedFeatureSelect}
      >
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
        <div
          className="d-flex justify-content-center mx-auto overflow-hidden"
          style={{
            // width: '140px',
            // height: '140px',
            // border: '4px solid rgba(255, 255, 255)',
            // borderRadius: '50%',
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

          <CButton
            onClick={() => handleFeatureClick(props.data.title)}
            href={props.data.route}
            shape="rounded-pill"
            className="w-50"
          >
            Continue
          </CButton>
        </CCardBody>
      </CCard>
    </CCol>
  )
}
