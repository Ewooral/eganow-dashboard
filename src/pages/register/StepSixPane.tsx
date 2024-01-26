import Image from 'next/image'
import CIcon from '@coreui/icons-react'
import { cilHttps } from '@coreui/icons'
import {
  CRow,
  CCol,
  CFormLabel,
  CFormInput,
  CFormText,
  CButton,
  CAlert,
} from '@coreui/react-pro'
import { FaChevronLeft, FaTelegramPlane } from 'react-icons/fa'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { cilBurn } from '@coreui/icons'
import logo_compact from '@/public/brand/eganow.png'

const StepSixPane = (props: any) => {
  const { register, formState } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleSubmitClick = props.handleSubmitClick

  return (
    <>
      <CRow>
        <CCol xs="auto" className="mx-auto pb-2">
          <span className="d-none d-md-inline">
            <small>
              <CIcon icon={cilHttps} />
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
        {props.errors?.stepSix && (
          <CAlert color="danger">
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            {props.errors?.stepSix}
          </CAlert>
        )}
        <h4>Transaction Pin</h4>
        <p>Enter and confirm your 6-digit transaction Pin.</p>
      </div>

      <CRow className="g-3 mt-5 mb-3" xs={{ gutterY: 3, cols: 1 }} md={{ gutterY: 3, cols: 2 }}>
        <CCol>
          <CFormLabel
            htmlFor="customerSixDigitPIN"
            className={classNames({
              'text-error': !!formState.errors?.customerSixDigitPIN,
            })}
          >
            Create 6-digit transaction pin
          </CFormLabel>
          <CFormInput
            type="text"
            id="customerSixDigitPIN"
            placeholder="Enter 6-digit PIN here."
            {...register('customerSixDigitPIN')}
            valid={
              formState.dirtyFields?.customerSixDigitPIN && !!!formState.errors?.customerSixDigitPIN
                ? true
                : false
            }
            invalid={!!formState.errors?.customerSixDigitPIN && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.customerSixDigitPIN ? false : true,
            })}
          >
            <FormattedMessage id="customerSixDigitPIN.required" />
          </CFormText>
        </CCol>
        <CCol>
          <CFormLabel
            htmlFor="confirmCustomerSixDigitPIN"
            className={classNames({
              'text-error': !!formState.errors?.confirmCustomerSixDigitPIN,
            })}
          >
            Confirm 6-digit transaction pin
          </CFormLabel>
          <CFormInput
            type="text"
            id="confirmCustomerSixDigitPIN"
            placeholder="Confirm 6-digit PIN here."
            {...register('confirmCustomerSixDigitPIN')}
            valid={
              formState.dirtyFields?.confirmCustomerSixDigitPIN &&
              !!!formState.errors?.confirmCustomerSixDigitPIN
                ? true
                : false
            }
            invalid={!!formState.errors?.confirmCustomerSixDigitPIN && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.confirmCustomerSixDigitPIN ? false : true,
            })}
          >
            <FormattedMessage id="confirmCustomerSixDigitPIN.required" />
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="row g-3 mt-4 buttons">
        <CCol xs="6" md="auto">
          <CButton color="dark" variant="outline" onMouseUp={handleBackClick}>
            <FaChevronLeft className="me-2 mb-1" />
            Go Back
          </CButton>
        </CCol>
        <CCol xs="6" md="auto">
          <CButton className="text-white" color="success" onMouseUp={handleSubmitClick}>
            Submit
            <FaTelegramPlane className="ms-2 mb-1" />
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default StepSixPane
