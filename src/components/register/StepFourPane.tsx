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
/* HOOKS */
import { FormattedMessage, useIntl } from 'react-intl'

const StepFourPane = (props: any) => {
  const { register, formState } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleSubmitClick = props.handleSubmitClick
  const {formatMessage} = useIntl()

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
        <h3 className="mx-auto">
            <FormattedMessage id="customer_registration" defaultMessage="Customer Registration" />
          </h3>
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
        <FormattedMessage id='business_information' defaultMessage={'Business Information'} />
        <p><FormattedMessage id='set_business_info_details' defaultMessage={'Set your business information details below'} /></p>
      </div>

      <CRow className="mt-2">
        <CCol>
          <CFormLabel
            htmlFor="businessName"
            className={classNames({
              'text-error': !!formState.errors?.businessName,
            })}
          >
            <FormattedMessage id="business_name" defaultMessage="Business Name" />
          </CFormLabel>
          <CFormInput
            type="text"
            id="businessName"
            placeholder={formatMessage({id:'business_name_placeholder', defaultMessage: 'Enter your business name here'})}
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
             <FormattedMessage id="business_name_is_required" defaultMessage="Business name is required" />
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
         <FormattedMessage id="trading_name" defaultMessage="Trading Name" />

          </CFormLabel>
          <CFormInput
            type="text"
            id="tradingName"
            placeholder={formatMessage({id:'business_trading_name_placeholder', defaultMessage: 'Enter your business trading name here'})}
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
            <FormattedMessage id="business_trading_name_is_required" defaultMessage="Business trading name is required" />
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
            <FormattedMessage id='business_mobile_number' defaultMessage={'Business Mobile Number'} />
          </CFormLabel>
          <DialCode name="businessMobileNo" handleForm={props.handleForm} />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.businessMobileNo ? false : true,
            })}
          >
            <FormattedMessage
              id="mobile_number_is_required"
              defaultMessage="Mobile number is required"
            />
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="row g-3 mt-4 buttons">
        <CCol xs="auto">
          <CButton color="dark" variant="outline" onMouseUp={handleBackClick}>
            <FaChevronLeft className="me-2 mb-1" />
            <FormattedMessage id="go_back" defaultMessage="Back" />
          </CButton>
        </CCol>
        <CCol xs="auto">
        {props.loading ? (
            <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
          ) :  <CButton className="text-white" color="success" onMouseUp={handleSubmitClick}>
            <FormattedMessage id="send" defaultMessage="Send" />
            <FaTelegramPlane className="ms-2 mb-1" />
          </CButton>}
        </CCol>
      </CRow>
    </>
  )
}

export default StepFourPane
