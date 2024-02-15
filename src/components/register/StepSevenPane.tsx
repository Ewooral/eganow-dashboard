// @ts-nocheck
import Link from 'next/link'
import { StepPropType } from './types'
import { CButton } from '@coreui/react-pro'
import { FaChevronRight } from 'react-icons/fa'

const StepSevenPane = (props: any) => {
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
        <h2>Congratulations!</h2>
        <p>
          Thanks Mr./Mrs. <span>{`${firstName} ${lastName}`}</span>, your registration process has
          successfully been created. Please click OK to login.
        </p>
        <CButton color="primary" onMouseUp={() => {}}>
          Continue
          <FaChevronRight className="ms-2 mb-1" />
        </CButton>
      </div>
    </div>
  )
}

export default StepSevenPane
