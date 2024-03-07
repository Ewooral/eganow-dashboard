import {
  CContainer,
  CRow,
  CCol,
  CCardGroup,
  CCard,
  CCardBody,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CButton,
  CSpinner,
  CAlert,
} from '@coreui/react-pro'
import logo_compact from '@/public/brand/eganow-colored-logo.svg'
import Image from 'next/image'
import { cilEnvelopeClosed, cilFire } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Link from 'next/link'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { ForgotPasswordErrors } from '@/types/Errors'
/* API */
import merchantOnboardingSvcGRPC from '@/api/merchantOnboardingSvcGRPC'

export const defaultValues = {
  emailAddress: '',
}

export const validationSchema = yup
  .object({
    emailAddress: yup.string().email().required(),
  })
  .required()

const vars: object = {
  '--cui-btn-color': 'white',
  '--cui-btn-hover-border-color': 'transparent',
  '--cui-btn-bg': '#cd0429',
  '--cui-btn-border-color': '#cd0429',
  '--cui-btn-hover-color': 'rgba(255, 255, 255, 0.87)',
  '--cui-btn-hover-bg': '#d30027',
  '--cui-btn-focus-shadow-rgb': '75, 58, 223',
  '--cui-btn-active-color': 'rgba(255, 255, 255, 0.87)',
  '--cui-btn-active-bg': '#cd0429',
  '--cui-btn-active-border-color': '#cd0429',
  '--cui-btn-active-shadow': 'inset 0 3px 5px rgba(0, 0, 21, 0.125)',
  '--cui-btn-disabled-color': 'rgba(255, 255, 255, 0.87)',
  '--cui-btn-disabled-bg': '#cd0429',
  '--cui-btn-disabled-border-color': '#cd0429',
}

const ForgotPassword = () => {
  const { requestPasswordReset } = merchantOnboardingSvcGRPC()
  const [errors, setErrors] = useState<ForgotPasswordErrors>()
  const [showFeedback, setShowFeedback] = useState(false) //state to toggle between feedback component

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })

  const onSubmit = async (data: object) => {
    try {
      const response = await requestPasswordReset(data)
      console.log(response)

      if (response) {
        //if response is true show the feedback ui
        setShowFeedback(true)
      }
    } catch (error: any) {
      setErrors(error)
    }
  }

  //this function display a feedback ui
  const Feedback = () => {
    return (
      <div>
        <h3 className="text-center mb-2">
          {/*//TODO - add id to languages folder*/}
          <FormattedMessage id="check_your_email" defaultMessage="Check your email" />
        </h3>
        <div className="d-flex justify-content-center mb-2">
          <CIcon className="mb-2" icon={cilEnvelopeClosed} size="3xl" style={{ color: 'black' }} />
        </div>
        <p className="text-medium-emphasis text-center m-0">
          {/*//TODO - add id to languages folder*/}
          <FormattedMessage
            id="you_will_receive_an_email"
            defaultMessage="You will receive an email with a temporary password."
          />
        </p>
        <p className="text-medium-emphasis text-center m-0 mb-4">
          {/*//TODO - add id to languages folder*/}
          <FormattedMessage
            id="check_your_inbox"
            defaultMessage="Check your inbox and use the temporary password to login."
          />
        </p>

        <Link href="/login">
          <p className="" style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            Back to login
          </p>
        </Link>
      </div>
    )
  }

  return (
    <div className="login-bg min-vh-100 d-flex flex-row align-items-center ">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol style={{ maxWidth: '400px' }} className="position-relative ">
            <CCardGroup className=" shadow-lg">
              <CCard className="p-3">
                <Image src={logo_compact} height={60} alt="Eganow" className="mx-auto" />
                {showFeedback ? (
                  <Feedback />
                ) : (
                  //Request password reset form
                  <CCardBody className=" p-0 m-0">
                    <h4 className="text-center font">
                      {/*//TODO - add id to languages folder*/}
                      <FormattedMessage
                        id="reset_account_password"
                        defaultMessage="Reset Account Password"
                      />
                    </h4>
                    {/*//TODO - add id to languages folder*/}
                    <p className="text-medium-emphasis text-center">
                      <FormattedMessage
                        id="please_enter_email"
                        defaultMessage="Enter your sign up email"
                      />
                    </p>
                    {errors?.message && (
                      <CAlert color="danger">
                        <CIcon
                          icon={cilFire}
                          className="flex-shrink-0 me-2"
                          width={24}
                          height={24}
                        />
                        {errors?.message}
                      </CAlert>
                    )}
                    <CForm className="px-4" noValidate onSubmit={handleSubmit(onSubmit)}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText style={{ width: '50px' }}>
                          <CIcon icon={cilEnvelopeClosed} />
                        </CInputGroupText>
                        <CFormInput
                          className=""
                          placeholder="Email Address"
                          autoComplete="emailAddress"
                          {...register('emailAddress')}
                          valid={
                            formState.dirtyFields?.emailAddress && !!!formState.errors?.emailAddress
                              ? true
                              : false
                          }
                          invalid={!!formState.errors?.emailAddress && true}
                        />
                      </CInputGroup>

                      <CRow>
                        <CCol xs={12} className="mt-2 mb-3 w-100">
                          <CButton
                            type="submit"
                            className="px-4 w-100"
                            active
                            disabled={formState.isSubmitting}
                            style={vars}
                          >
                            {formState.isSubmitting ? (
                              <CSpinner component="span" size="sm" aria-hidden="true" />
                            ) : (
                              'Request password reset'
                            )}
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  
                    <Link  href="/login" className=" ">
                      <p
                        className=" p-0"
                        style={{ cursor: 'pointer', textDecoration: 'underline', width: '200px', marginLeft: "25px" }}
                      >
                        Back to login
                      </p>
                    </Link>
                  </CCardBody>
                )}
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgotPassword
