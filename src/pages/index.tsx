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
  return (
    <EntryLayout {...props} features={features}>
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
                    {`${props.cookies.firstname} ${props.cookies.lastname}`}
                  </span>
                </p>
                <h3 className="text-medium-emphasis">{props.cookies.businessname}</h3>
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
