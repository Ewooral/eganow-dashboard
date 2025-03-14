// @ts-nocheck
//import { StepPropType } from './types'
import { FaChevronRight } from 'react-icons/fa'
import { CButton, CAlert, CSpinner } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
/* HOOKS */
import { FormattedMessage, useIntl } from 'react-intl'

const StepFivePane = (props: any) => {
  const { getValues } = props.handleForm
  //Getting the email address from useForm
  const firstName = getValues('firstName')
  const lastName = getValues('lastName')

  return (
    <div className="main">
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>

      <div className="text text-center">
        {/* Error MSG */}
        {props.errors?.stepFour && (
          <CAlert color="danger">
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            {props.errors?.stepFinal}
          </CAlert>
        )}
        <h2>
          <FormattedMessage id='congratulations' defaultMessage={'Congratulations!'} />
        </h2>
        <p>
          <FormattedMessage
            id="registration_successfully_created"
            defaultMessage={`Thanks ${firstName + " " + lastName} , your registration process hassuccessfully been created. Please click Continue to login.`}
            values={{ firstName, lastName}}
          />
        </p>
        <CButton color="primary" onMouseUp={props.handleLogin}>
        <FormattedMessage id='continue' defaultMessage={'Continue'} />
          {props.loading ? (
            <CSpinner component="span" size="sm" aria-hidden="true" className="ms-2" />
          ) : (
            <FaChevronRight className="ms-2 mb-1" />
          )}
        </CButton>
      </div>
    </div>
  )
}

export default StepFivePane
