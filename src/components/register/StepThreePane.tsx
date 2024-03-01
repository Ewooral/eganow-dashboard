// @ts-nocheck
import Image from 'next/image'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

import { FaChevronRight, FaChevronLeft, FaQuestionCircle } from 'react-icons/fa'

import {
  CFormInput,
  CCol,
  CButton,
  CRow,
  CFormLabel,
  CFormText,
  CPopover,
  CFormSelect,
} from '@coreui/react-pro'
import classNames from 'classnames'
import { StepPropType } from './types'
import logo_compact from '@/public/brand/eganow.png'
import DialCode from '../dial-code/DialCodeInput'
/* HOOKS */
import { FormattedMessage, useIntl } from 'react-intl'
/* 







*/
const customPopoverStyle = {
  '--cui-popover-border-color': 'var(--cui-primary)',
  '--cui-popover-header-bg': 'var(--cui-primary)',
  '--cui-popover-header-color': 'var(--cui-white)',
  '--cui-popover-body-padding-x': '1rem',
  '--cui-popover-body-padding-y': '.5rem',
}

const languageOption = [
  { label: 'Select language', value: '' },
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
]

const StepThreePane = (props: any) => {
  const { register, formState, getValues } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleNextClick = props.handleNextClick
  const { formatMessage } = useIntl()

  return (
    <>
      <CRow>
        <CCol xs="auto" className="mx-auto pb-2">
          <span className="d-none d-md-inline">
            <small>
              <CIcon icon={cilUser} />
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
        <FormattedMessage id="personal_information" defaultMessage={'Personal Information'} />
        <FormattedMessage
          id="personal_information_description"
          defaultMessage={'Enter your personal details in the fields below'}
        />
      </div>

      <CRow className="mb-3 mt-2" xs={{ gutterY: 3, cols: 1 }} md={{ gutterY: 3, cols: 2 }}>
        <CCol>
          <CFormLabel
            htmlFor="firstName"
            className={classNames({
              'text-error': !!formState.errors?.firstName,
            })}
          >
            <FormattedMessage id="First_name" defaultMessage="First Name" />
          </CFormLabel>
          <CFormInput
            type="text"
            id="firstName"
            placeholder={formatMessage({
              id: 'first_name_placeholder',
              defaultMessage: 'Enter your first name here.',
            })}
            {...register('firstName')}
            valid={
              formState.dirtyFields?.firstName && !!!formState.errors?.firstName ? true : false
            }
            invalid={!!formState.errors?.firstName && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.firstName ? false : true,
            })}
          >
            <FormattedMessage id="first_name_is_required" defaultMessage="First name is required" />
          </CFormText>
        </CCol>
        <CCol>
          <CFormLabel
            htmlFor="lastName"
            className={classNames({
              'text-error': !!formState.errors?.lastName,
            })}
          >
            <FormattedMessage id="last_name" defaultMessage="Last Name" />
          </CFormLabel>
          <CFormInput
            type="text"
            id="lastName"
            placeholder={formatMessage({
              id: 'last_name_placeholder',
              defaultMessage: 'Enter your last name here.',
            })}
            {...register('lastName')}
            valid={formState.dirtyFields?.lastName && !!!formState.errors?.lastName ? true : false}
            invalid={!!formState.errors?.lastName && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.lastName ? false : true,
            })}
          >
            <FormattedMessage id="last_name_is_required" defaultMessage="Last name is required" />
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="mb-3" xs={{ gutterY: 3, cols: 1 }} md={{ gutterY: 3, cols: 2 }}>
        <CCol>
          <CFormLabel
            htmlFor="customerMobileNo"
            className={classNames({
              'text-error': !!formState.errors?.customerMobileNo,
            })}
          >
            <FormattedMessage id="mobile_number" defaultMessage="Mobile Number" />
          </CFormLabel>
          <DialCode name="customerMobileNo" handleForm={props.handleForm} />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.customerMobileNo ? false : true,
            })}
          >
            <FormattedMessage
              id="mobile_number_is_required"
              defaultMessage="Mobile number is required"
            />
          </CFormText>
        </CCol>
        <CCol>
          <CFormLabel
            htmlFor="emailAddress"
            className={classNames({
              'text-error': !!formState.errors?.emailAddress,
            })}
          >
            <FormattedMessage id="email_address" defaultMessage="Email Address" />
          </CFormLabel>
          <CFormInput
            readOnly
            type="email"
            id="emailAddress"
            placeholder={formatMessage({
              id: 'email_address_placeholder',
              defaultMessage: 'Enter email address here.',
            })}
            value={getValues('emailAddress')}
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
            <FormattedMessage
              id="email_address_is_required"
              defaultMessage="Email address is required"
            />
          </CFormText>
        </CCol>
      </CRow>

      <CRow className="mb-3" xs={{ gutterY: 3, cols: 1 }} md={{ gutterY: 3, cols: 2 }}>
        <CCol>
          <CFormLabel
            htmlFor="password"
            className={classNames({
              'text-error': !!formState.errors?.password,
              'me-1': true,
            })}
          >
            <span className="d-inline-block">
              <FormattedMessage id="password" defaultMessage="Password" />
            </span>
          </CFormLabel>
          <CPopover
            title="Password Format"
            content="Password must contain at least 8 characters, one uppercase, one number and one special case character."
            placement="top"
            trigger={['hover', 'focus']}
            style={customPopoverStyle}
          >
            <span>
              <FaQuestionCircle tabIndex={0} style={{ outline: 'none' }} />
            </span>
          </CPopover>
          <CFormInput
            type="password"
            id="password"
            placeholder={formatMessage({
              id: 'password_placholder',
              defaultMessage: 'Enter password here.',
            })}
            {...register('password')}
            valid={formState.dirtyFields?.password && !!!formState.errors?.password ? true : false}
            invalid={!!formState.errors?.password && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.password ? false : true,
            })}
          >
            <FormattedMessage id="password_is_required" defaultMessage="Password is required" />
          </CFormText>
        </CCol>

        <CCol>
          <CFormLabel
            htmlFor="confirmPassword"
            className={classNames({
              'text-error': !!formState.errors?.confirmPassword,
            })}
          >
            <FormattedMessage id="confirm_password" defaultMessage="Confirm Password" />
          </CFormLabel>
          <CFormInput
            type="password"
            id="confirmPassword"
            placeholder={formatMessage({
              id: 'confirm_password_placeholder',
              defaultMessage: 'Confirm password here.',
            })}
            {...register('confirmPassword')}
            valid={
              formState.dirtyFields?.confirmPassword && !!!formState.errors?.confirmPassword
                ? true
                : false
            }
            invalid={!!formState.errors?.confirmPassword && true}
          />
          <CFormText
            component="span"
            className={classNames({
              'text-error': true,
              'd-none': !!formState.errors?.confirmPassword ? false : true,
            })}
          >
            <FormattedMessage
              id="confirm_password_is_required"
              defaultMessage="Confirm password is required"
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
          <CButton color="primary" onMouseUp={handleNextClick}>
            <FormattedMessage id="next_step" defaultMessage="Next" />
            <FaChevronRight className="ms-2 mb-1" />
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default StepThreePane
