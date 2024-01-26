// @ts-nocheck
import Image from 'next/image'
import type { NextPageWithLayout } from '@/pages/_app'
import { useState, useEffect, useRef } from 'react'
/*  */
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardTitle,
  CCardText,
  CCardFooter,
  CContainer,
} from '@coreui/react-pro'
import { CPlaceholder, CCardImage } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilIndustry } from '@coreui/icons'
/* Components */
import { EntryLayout } from '@/components'
//import { EntryLoaderLayout } from '@/components'
import { GlobalLoader } from '@/components/'
/* Images */
/* import biz_collect from '@/public/images/biz-collect.png' */
import biz_collect from '@/public/images/features/budget.png'
import teamwork from '@/public/images/features/group-meeting.png'
/* Use Hooks */
import useUserAuth from '@/hooks/useUserAuth'

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

function Features(props: FeaturePropsType) {
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

function FeaturesPlaceholder() {
  return (
    <CCol sm={6} lg={3}>
      <CCard className="card1 text-center w-100 pt-2 rounded-4">
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
              stroke-width="4"
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

const Entry: NextPageWithLayout = () => {
  const [userLogged, setUserLoggedIn] = useState<UserLoggedType | EmptyObject>({})
  const { customerInfo } = useUserAuth()

  /* ************************************************************* */
  useEffect(() => {
    setUserLoggedIn({
      status: customerInfo.issuccess,
      userstatus: customerInfo.messagesuccessfulorfailed,
    })
  }, [customerInfo])

  //Server-render loading state
  if (!userLogged?.status || userLogged?.userstatus !== 'SUCCESSFUL') {
    return <GlobalLoader />
  }

  return (
    <EntryLayout>
      <CContainer className="rounded mb-5">
        <div className="mb-3">
          <CRow>
            <CCol md="auto" xs="auto" className="mx-auto mx-lg-0 ">
              <div className="entry-icon">
                <CIcon icon={cilIndustry} size="xl" />
              </div>
            </CCol>
            <CCol md={11}>
              <div className="mt-2">
                <p className="text-medium-emphasis small m-0">
                  <em>Welcome back:: </em>{' '}
                  <span style={{ color: '#e55353', fontSize: '16px' }}>
                    {`${customerInfo.firstname} ${customerInfo.lastname}`}
                  </span>
                </p>
                <h3 className="text-medium-emphasis">{customerInfo.businessname}</h3>
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
