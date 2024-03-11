// @ts-nocheck
import Image from 'next/image'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiEyeCloseFill } from 'react-icons/ri'
import { ImEye } from 'react-icons/im'

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
import merchantOnboardingSvcGRPC from '@/api/merchantOnboardingSvcGRPC'
/* COMPONENTS */
import CountryInput from '@/components/country/CountryInput'
import LanguageSelector from '@/components/LanguageSelector'
import { defaultFormValues } from '@/components/login/defaultFormValues'
import { validationSchema } from '@/components/login/validationSchema'
/* HOOKS */
import { useCookies } from 'react-cookie'
import { EmptyObject, useForm } from 'react-hook-form'
/* STORE */
import { useLocale } from '@/store'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE, EGANOW_REMEMBER_ME_COOKIE, RPC_ERROR } from '@/constants'
/* IMAGE */
import lady from '@/public/images/lady.jpg'
import logoIcon from '@/public/images/EganowLogo.png'
import logoIconwhite from '@/public/images/eganowlogowhite.png'
import CryptoJS from 'crypto-js'
/* UTILITY */
import { capitalizeFirstLetter_util } from '@/util'

import { LoginInputType } from '@/types/Users'
import { LoginInputErrors } from '@/types/Errors'
import { Icon } from '@/components/IconsView'
import ResetPassword from '@/components/forgotPassword/ResetPassword'

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

// SETTING SECRET KEY ON SERVER
export async function getStaticProps() {
  return {
    props: {
      secret_key: process.env.SECRET_KEY,
    },
  }
}

/*
 *
 *LOGIN COMPONENT
 *
 */
const Login = (props) => {
  const { loginMerchant } = merchantOnboardingSvcGRPC()
  const [cookie, setCookie, removeCookie] = useCookies()
  const [errors, setErrors] = useState<LoginInputErrors | EmptyObject>({})
  const [showPassword, setShowPassword] = useState(false)
  const { country, setCountry } = useLocale((state) => state)

  const router = useRouter()
  const intl = useIntl()

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  useEffect(() => {
    if (country?.code) {
      setValue('country', country)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  useEffect(() => {
    try {
      if (cookie[EGANOW_REMEMBER_ME_COOKIE]) {
        //Decrypt Remember Me Data
        const decrypted = CryptoJS.DES.decrypt(cookie[EGANOW_REMEMBER_ME_COOKIE], props.secret_key)
        //Convert Decrypted Data To Object
        const decryptedData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
        setValue('email', decryptedData.email) //SET EMAIL STATE VALUE
        setValue('password', decryptedData.password) //SET PASSWORD VALUE
        setValue('rememberMe', true)
      }
    } catch (err) {
      console.error(err)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.secret_key])

  function handleCallback(event, result) {
    setCountry({
      flag: result.countryFlagUrl,
      code: result.countryCode,
      name: result.countryName,
    })
  }

  // Function to toggle password visibility
  function togglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  async function onSubmit(data: LoginInputType) {
    try {
      const response = await loginMerchant(data)

      //If accessToken exist on success then log user in.
      if (response.accessToken) {
        //If remember me is true then encrypt data and save in cookie.
        if (data.rememberMe) {
          const encryptedLogins = await CryptoJS.DES.encrypt(
            JSON.stringify(data),
            props.secret_key,
          ).toString()
          //Setting remember me cookie
          setCookie(EGANOW_REMEMBER_ME_COOKIE, encryptedLogins)
        } else {
          //Remove cookie if rememberMe is not set
          removeCookie(EGANOW_REMEMBER_ME_COOKIE)
        }

        //Storing login authentication in cookie
        setCookie(EGANOW_AUTH_COOKIE, response, {
          maxAge: 30 * 60 * 24,
        })
        //Routing to the intermediate page when logged in.
        await router.push('/')
        //Exit onSubmit function
        return
      }
      //Resetting form with same data to stop its isSubmitting state
      reset(data)
    } catch (error) {
      //Handling GRPC errors

      if (error.name === 'RpcError') {
        if (error.metadata['grpc-status'] === RPC_ERROR.FAILED_PRECONDITION) {
          //encrypting th email address
          const encryptedEmail = await CryptoJS.DES.encrypt(
            JSON.stringify(data.email),
            props.secret_key,
          ).toString()
          router.push({ pathname: `/reset-password`, query: { email: encryptedEmail } })
          return
        }
        //setting rpc errors
        setErrors({
          message: error.metadata['grpc-message'],
        })
        return
      }
      //Logging general error
      console.error(error)
    }
  }

  return (
    <div className="login-bg min-vh-100 d-flex align-items-center position-relative">
      <CContainer>
        <CRow className="justify-content-center align-items-center">
          <div className="position-absolute top-0 my-4 py-2 px-md-5 px-3 d-none d-lg-block ">
            <LanguageSelector />
          </div>
          <CCol md={8} style={{ width: 'auto' }}>
            <div className="d-lg-none my-2">
              <LanguageSelector />
            </div>
            <CCardGroup className="shadow-lg">
              <CCard
                className="text-white  d-none d-xl-block p-0 overflow-hidden"
                style={{ width: '40%' }}
              >
                <CCardBody className="text-center p-0 overflow-hidden position-relative h-100 ">
                  <div className="p-0 m-0 bg-info overflow-hidden h-100 d-none d-lg-block">
                    <Image
                      src={lady}
                      width="auto"
                      alt="lady"
                      style={{ objectFit: 'cover', height: '100%' }}
                    />
                    <div
                      className="position-absolute top-0 bg-danger w-100 h-100 opacity-75"
                      style={{
                        background: 'linear-gradient(to bottom, #ff0000, #990000)',
                      }}
                    ></div>
                    <div className="position-absolute p-5 top-0 w-100 h-100  d-flex justify-content-center align-items-center">
                      <div className="text-white text-center">
                        <Image src={logoIconwhite} alt="" width={227} />
                        <p className="my-3 fw-bold">
                          Payments & Financial Services infrastructure for businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </CCardBody>
              </CCard>

              {/* FORM FIELD */}
              <CCard className="p-4 text-center" style={{ maxWidth: '400px' }}>
                <CCardBody>
                  <Image src={logoIcon} alt="logo1" width={227} height="auto" />

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
                      {capitalizeFirstLetter_util(errors?.message)}
                    </CAlert>
                  )}

                  <CForm noValidate onSubmit={handleSubmit(onSubmit)}>
                    <CountryInput
                      className="mb-3"
                      name="country"
                      handleForm={{ control }}
                      callback={handleCallback}
                      shouldValidate={false}
                    />

                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{ width: '50px' }}>
                        <CIcon icon={cilEnvelopeClosed} size="lg" />
                      </CInputGroupText>
                      <CFormInput
                        placeholder={intl.formatMessage({
                          id: 'email',
                          defaultMessage: 'Email Address',
                        })}
                        autoComplete="email"
                        {...register('email', { required: true, minLength: 2, maxLength: 50 })}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-1 ">
                      <CInputGroupText style={{ width: '50px' }}>
                        <CIcon icon={cilLockLocked} size="lg" />
                      </CInputGroupText>
                      <CFormInput
                        style={{ borderRadius: '0 5px 5px 0' }}
                        type={showPassword ? 'text' : 'password'}
                        placeholder={intl.formatMessage({
                          id: 'password',
                          defaultMessage: 'Password',
                        })}
                        autoComplete="current-password"
                        {...register('password', { required: true, minLength: 2, maxLength: 50 })}
                        required
                      />
                      <RiEyeCloseFill
                        onClick={togglePasswordVisibility}
                        className={`eyeIcon position-absolute ${
                          showPassword ? 'hiddenEyeIcon' : ''
                        }`}
                        style={{ font: '50px' }}
                      />
                      <ImEye
                        onClick={togglePasswordVisibility}
                        className={`eyeIcon position-absolute ${
                          showPassword ? '' : 'hiddenEyeIcon'
                        }`}
                      />
                    </CInputGroup>

                    <CRow className="align-items-center my-3">
                      <CCol xs={6} className="text-start text-muted">
                        <CFormCheck label="Remember Me" {...register('rememberMe')} />
                      </CCol>

                      <CCol xs={6} className="text-end">
                        <Link href="forgot-password" className="text-sm">
                          <small>Forgot Password?</small>
                        </Link>
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
