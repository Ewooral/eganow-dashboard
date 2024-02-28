// @ts-nocheck
import Image from 'next/image'
import { useEffect } from 'react'
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

const StepOnePane = (props: any) => {
  const { country, setCountry } = useLocale((state) => state)
  const { register, formState, setValue } = props.handleForm
  const handleNextClick = props.handleNextClick

  useEffect(() => {
    if (country?.code) {
      setValue('country', country)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  function handleCallback(event, result) {
    setCountry({
      flag: result.countryFlagUrl,
      code: result.countryCode,
      name: result.countryName,
    })
  }

  return (
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
          <h3 className="mx-auto">Customer Registration</h3>
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

        <h4>Country & Email Address</h4>
        <p>Enter your email address to receive your verification code (OTP) for the next step.</p>
      </div>
      <CRow>
        <CCol>
          <CFormLabel
            htmlFor="country"
            className={classNames({
              'text-error': !!formState.errors?.country,
            })}
          >
            Country
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
            Country is required
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
            Email address
          </CFormLabel>
          <CFormInput
            type="email"
            id="emailAddress"
            placeholder="Enter email address here."
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
            Email address required
          </CFormText>
        </CCol>
      </CRow>
      <div className="mt-5 buttons">
        <CButton color="primary" onMouseUp={handleNextClick} disabled={props.loading}>
          Next Step
          {props.loading ? (
            <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
          ) : (
            <FaChevronRight className="ms-2 mb-1" />
          )}
        </CButton>
      </div>
    </>
  )
}

export default StepOnePane
