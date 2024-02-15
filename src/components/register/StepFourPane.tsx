// @ts-nocheck
import Image from 'next/image'
import CIcon from '@coreui/icons-react'
import { cilIndustry } from '@coreui/icons'
import {
  CForm,
  CRow,
  CCol,
  CFormLabel,
  CFormInput,
  CFormText,
  CInputGroup,
  CDropdown,
  CDropdownToggle,
  CInputGroupText,
  CDropdownMenu,
  CDropdownItem,
  CButton,
  CFormSelect,
} from '@coreui/react-pro'
import classNames from 'classnames'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import logo_compact from '@/public/brand/eganow.png'
import { StepPropType } from './types'
/*  */
import DialCode from '@/components/dial-code/DialCodeInput'
import CountryInput from '@/components/country/CountryInput'

const StepFourPane = (props: any) => {
  const { register, formState } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleNextClick = props.handleNextClick

  return (
    <>
      <CRow>
        <CCol xs="auto" className="mx-auto pb-2">
          <span className="d-none d-md-inline">
            <small>
              <CIcon icon={cilIndustry} />
            </small>
          </span>
          <Image
            src={logo_compact}
            height={60}
            alt="Eganow"
            className="d-inline d-md-none d-lg-none"
          />
        </CCol>
        <CCol xs={10} className="mx-auto">
          <h3 className="mx-auto">Customer Registration</h3>
        </CCol>
      </CRow>
      <div className="text">
        <h4>Business Information</h4>
        <p>Enter your business details in the fields below.</p>
      </div>

      <CRow className="mb-4 mt-5">
        <CCol>
          <CFormLabel
            htmlFor="businessName"
            className={classNames({
              'text-error': !!formState.errors?.businessName,
            })}
          >
            Business name
          </CFormLabel>
          <CFormInput
            type="text"
            id="businessName"
            placeholder="Enter your business name here."
            {...register('businessName')}
            valid={
              formState.dirtyFields?.businessName && !!!formState.errors?.businessName
                ? true
                : false
            }
            invalid={!!formState.errors?.businessName && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.businessName ? false : true,
            })}
          >
            Business name is required
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="mb-3" xs={{ gutterY: 3, cols: 1 }} md={{ gutterY: 3, cols: 2 }}>
        <CCol>
          <CFormLabel
            htmlFor="businessContactPersonNumber"
            className={classNames({
              'text-error': !!formState.errors?.businessContactPersonNumber,
            })}
          >
            Business contact person&apos;s phone no.
          </CFormLabel>
          <DialCode name="businessContactPersonNumber" handleForm={props.handleForm} />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.businessContactPersonNumber ? false : true,
            })}
          >
            Mobile number is equired
          </CFormText>
        </CCol>

        <CCol>
          <CFormLabel
            htmlFor="countryCode"
            className={classNames({
              'text-error': !!formState.errors?.country,
            })}
          >
            Country
          </CFormLabel>
          <CountryInput name="country" handleForm={props.handleForm} shouldValidate={true} />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.country ? false : true,
            })}
          >
            Country code is required
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="row g-3 mt-4 buttons">
        <CCol xs="auto">
          <CButton color="dark" variant="outline" onMouseUp={handleBackClick}>
            <FaChevronLeft className="me-2 mb-1" />
            Go Back
          </CButton>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary" onMouseUp={handleNextClick}>
            Next Step
            <FaChevronRight className="ms-2 mb-1" />
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default StepFourPane
