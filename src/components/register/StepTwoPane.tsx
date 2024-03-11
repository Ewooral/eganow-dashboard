// @ts-nocheck
import Image from 'next/image'
import CIcon from '@coreui/icons-react'
import { cilBurn, cilLockLocked } from '@coreui/icons'
import {
  CRow,
  CCol,
  CFormInput,
  CButton,
  CForm,
  CFormLabel,
  CFormText,
  CSpinner,
  CAlert,
} from '@coreui/react-pro'
import classNames from 'classnames'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import logo_compact from '@/public/brand/eganow.png'
import { StepPropType } from './types'
/* HOOKS */
import { FormattedMessage, useIntl } from 'react-intl'

const StepTwoPane = (props: any) => {
  const { register, getValues, formState } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleNextClick = props.handleNextClick
  const {formatMessage} = useIntl()

  //Getting the email address from useForm
  const emailAddress = getValues('emailAddress')

  return (
    <>
      <CRow>
        <CCol xs="auto" className="mx-auto pb-2">
          <span className="d-none d-md-inline">
            <small>
              <CIcon icon={cilLockLocked} />
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
          <h3 className="mx-auto">
            <FormattedMessage id="customer_registration" defaultMessage="Customer Registration" />
          </h3>
        </CCol>
      </CRow>

      <div className="text" style={{ marginTop: '60px' }}>
        {/* Error MSG */}
        {props.errors?.stepTwo && (
          <CAlert color="danger">
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            {props.errors?.stepTwo}
          </CAlert>
        )}
        <h4>
          <FormattedMessage id="enter_verification_code" defaultMessage="Enter verification code" />
        </h4>
        <p>
          <FormattedMessage
            id="enter_verification_code_valid_for_2_minutes"
            defaultMessage={`Enter the verification code that was sent to ${<span>{emailAddress}</span>}. Please use this code to continue, valid for 2 minutes. Do NOT share with anyone.`}
            values={{ emailAddress: emailAddress }}
          />
        </p>
      </div>

      <CRow className="mb-3 mt-2">
        <CCol>
          <CFormLabel
            htmlFor="otpValue"
            className={classNames({
              'text-error': !!formState.errors?.otpValue,
            })}
          >
           <FormattedMessage id="verification_code_otp" defaultMessage="Verification Code (OTP)" />
          </CFormLabel>
          <CFormInput
            type="text"
            id="otpValue"
            placeholder={formatMessage({id:'otp_placeholder', defaultMessage: 'Enter 6-digit verification code here.'})}
            {...register('otpValue')}
            valid={formState.dirtyFields?.otpValue && !!!formState.errors?.otpValue ? true : false}
            invalid={!!formState.errors?.otpValue && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.otpValue ? false : true,
            })}
          >
            <FormattedMessage id="otp_is_required" defaultMessage="OTP is required" />
          </CFormText>
        </CCol>
      </CRow>
      <CRow className="row g-3 mt-4 buttons">
        <CCol xs="auto">
          <CButton
            color="dark"
            variant="outline"
            onMouseUp={handleBackClick}
            disabled={props.loading}
          >
            <FaChevronLeft className="me-2 mb-1" />
            <FormattedMessage id="go_back" defaultMessage="Go Back" />
          </CButton>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary" onMouseUp={handleNextClick} disabled={props.loading}>
            <FormattedMessage id='next_step' defaultMessage={'Next Step'} />
            {props.loading ? (
              <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
            ) : (
              <FaChevronRight className="ms-2 mb-1" />
            )}
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default StepTwoPane
