// @ts-nocheck
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilBurn, cilEnvelopeClosed } from '@coreui/icons'
import {
  CRow,
  CCol,
  CFormInput,
  CButton,
  CFormLabel,
  CFormText,
  CSpinner,
  CAlert,
} from '@coreui/react-pro'
import classNames from 'classnames'
import { FaChevronRight } from 'react-icons/fa'
import logo_compact from '@/public/brand/eganow.png'
//import { StepPropType } from './types'
/* COMPONENTS */
import CountryInput from '@/components/country/CountryInput'
/* STORE */
import { useLocale } from '@/store'

/* HOOKS */
import { FormattedMessage, useIntl } from 'react-intl'

const StepOnePane = (props: any) => {
  const { country, setCountry } = useLocale((state) => state)
  const { register, formState, setValue } = props.handleForm
  const handleNextClick = props.handleNextClick
  const {formatMessage} = useIntl()
   // handle hydration issues
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (country?.code) {
      setValue('country', country)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  // handle hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleCallback(event, result) {
    setCountry({
      flag: result.countryFlagUrl,
      code: result.countryCode,
      name: result.countryName,
    })
  }

  return (
    <>
      {
        isClient && 
        <>
        <CRow>
        <CCol xs="auto" className="mx-auto pb-2">
          <span className="d-none d-md-inline">
            <small>
              <CIcon icon={cilEnvelopeClosed} />
            </small>
          </span>
          {/* Only show logo on mobil */}
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
      <div className="text" style={{ marginTop: '55px' }}>
        {/* Error MSG */}
        {props.errors?.stepOne && (
          <CAlert color="danger">
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            {props.errors?.stepOne}
          </CAlert>
        )}

        <h4>
          <FormattedMessage id="country_and_email_address" defaultMessage={"Country & Email Address"} />
        </h4>
        <p><FormattedMessage id="enter_emailaddress_to_receive_otp" defaultMessage={ "Enter your email address to receive your verification code (OTP) for the next step"} /></p>
      </div>
      <CRow>
        <CCol>
          <CFormLabel
            htmlFor="country"
            className={classNames({
              'text-error': !!formState.errors?.country,
            })}
          >
            <FormattedMessage id="country" defaultMessage={"Country"} />
          </CFormLabel>
          <CountryInput
            className="mb-3"
            name="country"
            handleForm={{ control: props.handleForm.control }}
            callback={handleCallback}
            shouldValidate={false}
          />

          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.country ? false : true,
            })}
          >
            <FormattedMessage id="country_is_required" defaultMessage="Country is required" />
          </CFormText>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CFormLabel
            htmlFor="emailAddress"
            className={classNames({
              'text-error': !!formState.errors?.emailAddress,
            })}
          >
            <FormattedMessage id="email_address" defaultMessage={"Email address"} />
          </CFormLabel>
          <CFormInput
            type="email"
            id="emailAddress"
            placeholder= {formatMessage({id:'email_address_placeholder', defaultMessage: 'Enter email address here.'})}
            {...register('emailAddress')}
            valid={
              formState.dirtyFields?.emailAddress && !!!formState.errors?.emailAddress
                ? true
                : false
            }
            invalid={!!formState.errors?.emailAddress && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.emailAddress ? false : true,
            })}
          >
            <FormattedMessage id="email_address_is_required" defaultMessage="Email address required" />
          </CFormText>
        </CCol>
      </CRow>
      <div className="mt-5 buttons">
        <CButton color="primary" onMouseUp={handleNextClick} disabled={props.loading}>
          <FormattedMessage id="next_step" defaultMessage="Next Step" />
          {props.loading ? (
            <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
          ) : (
            <FaChevronRight className="ms-2 mb-1" />
          )}
        </CButton>
      </div>
        </>
      }
    </>
  )
}

export default StepOnePane
