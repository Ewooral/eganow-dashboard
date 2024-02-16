// @ts-nocheck
import type { NextPageWithLayout } from '@/pages/_app'
/*  */
import { CCol, CRow, CContainer } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilIndustry } from '@coreui/icons'
/* Components */
import { EntryLayout, Features, FeaturesPlaceholder } from '@/components'
/* Images */
/* import biz_collect from '@/public/images/biz-collect.png' */
import biz_collect from '@/public/images/features/budget.png'
import teamwork from '@/public/images/features/group-meeting.png'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE_NAME } from '@/constants'
import { useFeatureStore } from '@/store'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getMaxValueKey } from '@/util/utils'
import MostUsedFeature from '@/components/MostUsedFeature'
/*  */

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
  {
    icon: '',
    title: '',
    content: '',
    route: '',
  },
]

export const getServerSideProps = async ({ req }) => {
  const cookies = JSON.parse(req.cookies[EGANOW_AUTH_COOKIE_NAME])
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

  useEffect(() => {
    setMostUsedFeature(JSON.parse(localStorage.getItem('most-used-feature-storage')))
  }, [])

  useEffect(() => {
    setHighestFeatureValue(getMaxValueKey(mostUsedFeature?.state?.featureCounts))
  }, [mostUsedFeature])

  return (
    <EntryLayout {...props} features={features}>
      <CContainer className="rounded mb-5">
        <div className="mb-3">
          <CRow className=" align-items-end">
            <CCol md="auto" xs="auto" className="mx-auto mx-lg-0 ">
              <div className="entry-icon">
                <CIcon icon={cilIndustry} size="xl" />
              </div>
            </CCol>
            <CCol md={8}>
              <div className="mt-2">
                <p className="text-medium-emphasis small m-0">
                  <em>Welcome back:: </em>{' '}
                  <span style={{ color: '#e55353', fontSize: '16px' }}>
                    {`${props.cookies.firstname} ${props.cookies.lastname}`}
                  </span>
                </p>
                <h3 className="text-medium-emphasis">{props.cookies.businessname}</h3>
              </div>
            </CCol>
            <CCol className="">
              <div className="d-flex justify-content-sm-end align-items-center gap-2  mx-auto mx-lg-0">
                <p className="m-0">
                  <em>Your most used feature::</em>{' '}
                </p>
                <MostUsedFeature features={features} highestFeatureValue={highestFeatureValue} />
              </div>
            </CCol>
          </CRow>
        </div>

        {/*  <hr className="mb-5 mt-4" /> */}

        <CRow xs={{ gutterY: 4, gutterX: 4 }}>
          {features?.map((obj, index) => {
            if (!!obj.title) {
              return <Features key={index} data={obj} />
            }
            return <FeaturesPlaceholder key={index} />
          })}
        </CRow>
      </CContainer>
    </EntryLayout>
  )
}

export default Entry
