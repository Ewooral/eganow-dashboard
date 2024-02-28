// @ts-nocheck
import Image from 'next/image'
import CIcon from '@coreui/icons-react'
import { cilBurn } from '@coreui/icons'
import { cilIndustry } from '@coreui/icons'
import { CRow, CCol, CFormLabel, CFormInput, CFormText, CButton, CAlert } from '@coreui/react-pro'
import classNames from 'classnames'
import { FaChevronLeft, FaTelegramPlane } from 'react-icons/fa'
import logo_compact from '@/public/brand/eganow.png'
import { StepPropType } from './types'
/* COMPONENT */
import DialCode from '@/components/dial-code/DialCodeInput'

const StepFourPane = (props: any) => {
  const { register, formState } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleSubmitClick = props.handleSubmitClick

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
        {/* Error MSG */}
        {props.errors?.stepFour && (
          <CAlert color="danger">
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            {props.errors?.stepFour}
          </CAlert>
        )}
        <h4>Business Information</h4>
        <p>Enter your business details in the fields below.</p>
      </div>

      <CRow className="mt-2">
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

      <CRow className="mt-3">
        <CCol>
          <CFormLabel
            htmlFor="tradingName"
            className={classNames({
              'text-error': !!formState.errors?.tradingName,
            })}
          >
            Trading name
          </CFormLabel>
          <CFormInput
            type="text"
            id="tradingName"
            placeholder="Enter your business trading name here."
            {...register('tradingName')}
            valid={
              formState.dirtyFields?.tradingName && !!!formState.errors?.tradingName ? true : false
            }
            invalid={!!formState.errors?.tradingName && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.tradingName ? false : true,
            })}
          >
            Business trading name is required
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="mt-3">
        <CCol>
          <CFormLabel
            htmlFor="businessMobileNo"
            className={classNames({
              'text-error': !!formState.errors?.businessMobileNo,
            })}
          >
            Business mobile number.
          </CFormLabel>
          <DialCode name="businessMobileNo" handleForm={props.handleForm} />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.businessMobileNo ? false : true,
            })}
          >
            Mobile number is required
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
          <CButton className="text-white" color="success" onMouseUp={handleSubmitClick}>
            Submit
            <FaTelegramPlane className="ms-2 mb-1" />
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default StepFourPane
