// @ts-nocheck
import Image from 'next/image'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CFormText,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import logo_compact from '@/public/brand/eganow.png'
import { cilEnvelopeClosed, cilFire, cilLockLocked } from '@coreui/icons'
/* API */
import customerAccountGRPC from '@/api/customerAccountGRPC'
/* COMPONENTS */
import CountryInput from '@/components/country/CountryInput'
/* HOOKS */
import { useCookies } from 'react-cookie'
import { EmptyObject, useForm } from 'react-hook-form'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE_NAME } from '@/constants'
/* IMAGE */
import lady from '@/public/images/lady.jpg'
import logoIcon from '@/public/images/EganowLogo.png'
import logoIconwhite from '@/public/images/eganowlogowhite.png'

export const defaultValues = {
  country: {
    flag: 'https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/GH0233.png',
    code: 'GH0233',
    name: 'Ghana',
  },
  username: '',
  password: '',
}

export const validationSchema = yup
  .object({
    country: yup.object({
      code: yup.string().required(),
      name: yup.string().required(),
    }),
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

const vars = {
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
/* 



*/

export async function getStaticProps() {
  return {
    props: {
      secret_key: process.env.SECRET_KEY
    }
  }
}




const Login = (props) => {
  const { loginUserBusiness } = customerAccountGRPC()
  const [_, setCookie] = useCookies([EGANOW_AUTH_COOKIE_NAME])
  const [errors, setErrors] = useState<LoginInputErrors | EmptyObject>({})
  const router = useRouter()
  const intl = useIntl()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues,
  })

  useEffect(() => {
    console.log(props.secret_key)
  }, [props.secret_key])

  const onSubmit = async (data: LoginInputType) => {
    try {
      const response = await loginUserBusiness(data)
      //On success
      if (response.issuccess && response.messagesuccessfulorfailed === 'SUCCESSFUL') {
        //Storing login authentication in cookie
        setCookie(EGANOW_AUTH_COOKIE_NAME, response, {
          maxAge: 30 * 60 * 24,
        })
        //Routing to the intermediate page when logged in.
        router.push('/')
        //Exit onSubmit function
        return
      }

      //Showing error
      if (!response.issuccess && response.messagesuccessfulorfailed === 'FAILED') {
        setErrors({
          state: response.messagesuccessfulorfailed,
          message: response.message,
        })
      }
      //Resetting form with same data to stop its isSubmitting state
      reset(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login-bg min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center align-items-center">
          <CCol md={8}>
            <CCardGroup className=''>
              <CCard className="text-white d-md-block p-0 overflow-hidden" style={{ width: '44%' }}>
                <CCardBody className="text-center p-0 overflow-hidden position-relative h-100">
                  <div className='p-0 m-0 bg-info overflow-hidden h-100 d-md-block d-none'>

                    <Image src={lady}
                      width={'100%'}
                      style={{ objectFit: "cover", height: '100%' }}
                    />
                    <div className='position-absolute top-0 bg-danger w-100 h-100 opacity-75' style={{
                      background: 'linear-gradient(to bottom, #ff0000, #990000)'
                    }}>
                    </div>
                    <div className='position-absolute p-5 top-0 w-100 h-100  d-flex justify-content-center align-items-center'>
                      <div className='text-white text-center'>
                        <Image src={logoIconwhite} alt="" width={227} />
                        <p className='my-3 fw-bold'>
                        Payments & Financial Services infrastructure for businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </CCardBody>
              </CCard>


              {/* FORM FIELD */}
              <CCard className="p-4 text-center">
                <CCardBody>
                  <Image src={logoIcon} alt="" width={227} />

                  <h2 className="text-center">
                    <FormattedMessage
                      id="hello_welcome_back"
                      defaultMessage="Hello, welcome back"
                    />
                  </h2>
                  <p className="text-medium-emphasis text-center">
                    <FormattedMessage
                      id="login_to_your_account"
                      defaultMessage="Login to your account"
                    />
                  </p>

                  {errors?.message && (
                    <CAlert color="danger">
                      <CIcon icon={cilFire} className="flex-shrink-0 me-2" width={24} height={24} />
                      {errors?.message}
                    </CAlert>
                  )}

                  <CForm noValidate onSubmit={handleSubmit(onSubmit)}>
                    <CountryInput
                      className="mb-3"
                      name="country"
                      handleForm={{ control }}
                      shouldValidate={false}
                    />

                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{ width: '50px' }}>
                        <CIcon icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder={intl.formatMessage({
                          id: 'email_address',
                          defaultMessage: 'Email Address',
                        })}
                        autoComplete="emailAddress"
                        {...register('username', { required: true, minLength: 2, maxLength: 50 })}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-1">
                      <CInputGroupText style={{ width: '50px' }}>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder={intl.formatMessage({
                          id: 'password',
                          defaultMessage: 'Password',
                        })}
                        autoComplete="current-password"
                        {...register('password', { required: true, minLength: 2, maxLength: 50 })}
                        required
                      />
                    </CInputGroup>

                    {/* <CRow>
                      <CCol xs={12} className="text-right">
                        <CButton color="link" className="px-0">
                          <FormattedMessage
                            id="forgot_password"
                            defaultMessage="Forgot password?"
                          />
                        </CButton>
                      </CCol>
                    </CRow> */}

                    <CRow className='align-items-center my-3'>
                      <CCol xs={6} className='text-start text-muted'>
                        <CFormCheck id="flexCheckDefault" label="Remember Me" />
                      </CCol>

                      <CCol xs={6} className="text-end">
                        <Link href={'#'} className='text-sm'><small>Forgot Password ?</small></Link>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol xs={12} className="mt-2 w-100">
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
                            <FormattedMessage id="login" defaultMessage="Login" />
                          )}
                        </CButton>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol xs={12} className="mt-4">
                        <FormattedMessage
                          id="do_not_have_account_yet"
                          defaultMessage="Don't have account yet?"
                        />{' '}
                        <Link href="/register">
                          <FormattedMessage id="register_now" defaultMessage="Register now!" />
                        </Link>
                      </CCol>
                    </CRow>

                  </CForm>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
