// @ts-nocheck
import type { NextPageWithLayout } from '@/pages/_app'
/*  */
import {CCol, CRow, CContainer, CFormCheck, CFormSwitch} from '@coreui/react-pro'
import { CButton, CPopover } from '@coreui/react-pro'
import { IoIosCloseCircleOutline } from "react-icons/io";

import CIcon from '@coreui/icons-react'
import { cilIndustry } from '@coreui/icons'
/* Components */
import { EntryLayout, Features, FeaturesPlaceholder } from '@/components'
/* Images */
/* import biz_collect from '@/public/images/biz-collect.png' */
// import biz_collect from '@/public/images/features/budget.png'
import biz_collect from '@/public/images/features/bixcol2.png'
import edupay from '@/public/images/features/edupay.png'
import teamwork from '@/public/images/features/groups2.png'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
import { useEffect, useState } from 'react'
import { getMaxValueKey } from '@/util'
import MostUsedFeature from '@/components/MostUsedFeature'
/*  */


import 'react-loading-skeleton/dist/skeleton.css'
import {usePopoverStore} from "@/store";
import Hydration from "@/components/Hydration";
import {
  stylesPopover, switchBaseStyles,
  switchCheckedStyles, switchUncheckedStyles
} from "@/components/GlobalCssObjects";

const features = [
  {
    icon: biz_collect,
    title: 'Biz Collect',
    content: 'The right payment solutions for your business. Streamlined Payment Solutions.',
    route: '/biz-collect',
  },
  {
    icon: teamwork,
    title: 'Groups',
    content:
      'Goodbye to money troubles and confusion. Easier and transparent way to manage group finances.',
    route: '/groups',
  },
  {
    icon: edupay,
    title: 'Edupay',
    content:
      'Billing platform for schools.Simplified and faster way to manage billing. Easier and transparent way to manage',
    route: '/edupay',
  },
  {
    icon: '',
    title: '',
    content: '',
    route: '',
  },
  {
    icon: '',
    title: '',
    content: '',
    route: '',
  },
  {
    icon: '',
    title: '',
    content: '',
    route: '',
  },
  {
    icon: '',
    title: '',
    content: '',
    route: '',
  },
  {
    icon: '',
    title: '',
    content: '',
    route: '',
  },
]

export const getServerSideProps = async ({ req }) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE])
  //Response
  return {
    props: {
      cookies,
    },
  }
}

const Entry: NextPageWithLayout = (props) => {
  const [mostUsedFeature, setMostUsedFeature] = useState({})
  const [highestFeatureValue, setHighestFeatureValue] = useState(null)
  const [isFeatureHovered, setIsFeatureHovered] = useState(false)

  //Gets the most used feature object from local storage
  useEffect(() => {
    setMostUsedFeature(JSON.parse(localStorage.getItem('most-used-feature-storage')))
  }, [])

  //sets the highest used feature to local state
  useEffect(() => {
    setHighestFeatureValue(getMaxValueKey(mostUsedFeature?.state?.featureCounts))
  }, [mostUsedFeature])


  const removeUsedFeatureSelect = ()=>{
    setIsFeatureHovered(true);
  }

  return (
    <EntryLayout {...props} features={features}>
      <CContainer className="rounded mb-5">
        <div className="mb-3">
          <CRow className=" align-items-end">
            <CCol md="auto" xs="auto" className="mx-auto mx-lg-0 ">
              <div className="entry-icon dark:text-white">
                <CIcon icon={cilIndustry} size="xl" />
              </div>
            </CCol>
            <CCol md="auto" xs="auto" className="mx-auto mx-lg-0 ">
             <Hydration>
               <OnboardingPopover />
             </Hydration>
            </CCol>
            <CCol md={8}>
              <div className="mt-2">
                <p className="text-medium-emphasis small m-0">
                  <em>Welcome back:: </em>{' '}
                  <span style={{ color: '#e55353', fontSize: '16px' }}>
                    {`${props.cookies.fullName}`}
                  </span>
                </p>
                <h3 className="text-medium-emphasis">{props.cookies.companyName}</h3>
              </div>
            </CCol>
            <CCol className="">
              {highestFeatureValue && (
                <div className="d-flex justify-content-sm-end align-items-center gap-2  mx-auto mx-lg-0">
                  <p className="m-0">
                    <em>Your most used feature::</em>{' '}
                  </p>
                  <MostUsedFeature features={features} highestFeatureValue={highestFeatureValue} />
                </div>
              )}
            </CCol>
          </CRow>
        </div>

        {/*  <hr className="mb-5 mt-4" /> */}
        <CRow xs={{ gutterY: 4, gutterX: 4 }}>
          {features?.map((obj, index) => {
            if (!!obj.title) {
              return <Features key={index} data={obj} highestFeatureValue={highestFeatureValue} isFeatureHovered={isFeatureHovered} removeUsedFeatureSelect={removeUsedFeatureSelect}/>
            }
            return <FeaturesPlaceholder key={index}  removeUsedFeatureSelect={removeUsedFeatureSelect}/>
          })}
        </CRow>
      </CContainer>
    </EntryLayout>
  )
}

export default Entry







const OnboardingPopover = () => {
  const { dontShowAgain, setDontShowAgain } = usePopoverStore()
  const [isVisible, setIsVisible] = useState(!dontShowAgain)

  useEffect(() => {
    if (!dontShowAgain) {
      setIsVisible(true) // Show on mount if not disabled
    }
  }, [dontShowAgain])

  if (!isVisible) return null // Remove from DOM when closed

  return (
    <div
      style={stylesPopover.popoverContainer}
    >
      {/* Arrow on top */}
      <div
        style={stylesPopover.popoverArrow}
      />
      {/* Header with Close Button */}
      <div
        style={stylesPopover.popoverHeader}
      >
        <span>Onboarding Reminder</span>
        <button
          onClick={() => setIsVisible(false)}
          style={stylesPopover.closeButton}
        >
          <IoIosCloseCircleOutline className={"f6"} />
        </button>
      </div>
      <div style={{ padding: "10px" }}>
        <p>
          Complete your onboarding: Click your profile image and select &apos;Business
          Details&apos; from the dropdown.
        </p>

        {/* CoreUI Radio Button */}
        <CFormSwitch
          size="xl"
          label="Don't show again"
          id="formSwitchCheckDefaultXL"
          style={{
            ...switchBaseStyles,
            ...(dontShowAgain ? switchCheckedStyles : switchUncheckedStyles),
          }}
          checked={dontShowAgain}
          onChange={(e) => setDontShowAgain(e.target.checked)}
        />
      </div>
    </div>
  );
};
