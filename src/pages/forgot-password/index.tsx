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
import logo_compact from '@/public/brand/eganow.png'
import Image from 'next/image'
import { cilEnvelopeClosed, cilFire } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, EmptyObject } from 'react-hook-form'
import * as yup from 'yup'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { ForgotPasswordErrors } from '@/types/Errors'

export const defaultValues = {
  username: '',
}

export const validationSchema = yup
  .object({
    username: yup.string().required(),
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
  const [errors, setErrors] = useState<ForgotPasswordErrors | EmptyObject>({})
  const [showFeedback, setShowFeedback] = useState(false) //state to toggle between feedback component
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })

  const onSubmit = async () => {
    try {
      setShowFeedback(true)
    } catch (error) {
      console.error(error)
    }
  }

  //this function display a feedback ui
  const Feedback = () => {
    return (
      <div>
        <h3 className="text-center m-0">
          {/*//TODO - add id to languages folder*/}
          <FormattedMessage id="check_your_email" defaultMessage="Check your email" />
        </h3>
        <div className="d-flex justify-content-center my-4">
          <CIcon className="tada" icon={cilEnvelopeClosed} size="3xl" style={{ color: 'black' }} />
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
      </div>
    )
  }

  return (
    <div className="login-bg min-vh-100 d-flex flex-row align-items-center ">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol style={{ maxWidth: '450px' }} className="position-relative ">
            <CCardGroup className=" shadow-lg">
              <CCard className="p-4">
                <Image src={logo_compact} height={80} alt="Eganow" className="mx-auto mb-3" />
                {showFeedback ? (
                  <Feedback />
                ) : (
                  <CCardBody>
                    <h3 className="text-center">
                      {/*//TODO - add id to languages folder*/}
                      <FormattedMessage
                        id="reset_account_password"
                        defaultMessage="Reset Account Password"
                      />
                    </h3>
                    {/*//TODO - add id to languages folder*/}
                    <p className="text-medium-emphasis text-center">
                      <FormattedMessage
                        id="please_enter_email"
                        defaultMessage="Please enter your email you used to sign in."
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
                    <CForm noValidate onSubmit={handleSubmit(onSubmit)}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText style={{ width: '50px' }}>
                          <CIcon icon={cilEnvelopeClosed} />
                        </CInputGroupText>
                        <CFormInput
                          className=""
                          placeholder="Email Address"
                          autoComplete="emailAddress"
                          {...register('username', { required: true, minLength: 2, maxLength: 50 })}
                          required
                        />
                      </CInputGroup>

                      <CRow>
                        <CCol xs={12} className="mt-2 mb-3 w-100">
                          <CButton
                            type="submit"
                            className="px-4 w-100"
                            active
                            disabled={isSubmitting}
                            style={vars}
                          >
                            {isSubmitting ? (
                              <CSpinner component="span" size="sm" aria-hidden="true" />
                            ) : (
                              'Request password reset'
                            )}
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                )}
                <p
                  className="m-0"
                  onClick={() => router.push('/login')}
                  style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                >
                  Back to login
                </p>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgotPassword
