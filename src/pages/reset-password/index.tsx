// @ts-nocheck
import { cilEnvelopeClosed, cilFire, cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react-pro'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React, { useEffect, useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import * as yup from 'yup'
import logo_compact from '@/public/brand/eganow-colored-logo.svg'
import { PASSWORD_REGEX } from '@/constants'
import CryptoJS from 'crypto-js'
import { ForgotPasswordErrors } from '@/types/Errors'
import { useRouter } from 'next/router'
/* API */
import authAPI from '@/api/authAPI'
/* CONSTANT */
import { EGANOW_AUTH_COOKIE, EGANOW_REMEMBER_ME_COOKIE } from '@/constants'
import { useCookies } from 'react-cookie'

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

// SETTING SECRET KEY ON SERVER
export async function getStaticProps() {
  return {
    props: {
      secret_key: process.env.SECRET_KEY,
    },
  }
}

const validationSchema = yup.object({
  // emailAddress: yup.string().email().required(),
  password: yup.string().required().matches(PASSWORD_REGEX),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')]),
})

const defaultValues = {
  password: '',
  confirmPassword: '',
}

export default function ResetPassword(props) {
  const { resetPassword } = authAPI()
  const [cookie, setCookie, removeCookie] = useCookies()
  const router = useRouter()
  const [errors, setErrors] = useState<ForgotPasswordErrors>()
  //getting encrypted email address from url query
  const encryptedEmail = router.query.email

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues,
  })

  const emailValue = useMemo(() => {
    try {
      //Decrypt email address
      const decryptedEmail = CryptoJS.DES.decrypt(encryptedEmail, props?.secret_key)
      //Convert Decrypted email To Object
      return JSON.parse(decryptedEmail.toString(CryptoJS.enc.Utf8))
    } catch (error) {
      console.error(error)
    }
  }, [props.secret_key, encryptedEmail])

  const onSubmit = async (data: object) => {
    try {
      const response: any = await resetPassword({ email: emailValue, ...data })
      //If accessToken exist on success then log user in.
      if (response.data.accessToken) {
        //Storing login authentication in cookie
        setCookie(EGANOW_AUTH_COOKIE, response.data, {
          maxAge: 30 * 60 * 24,
        })
        //Routing to the intermediate page when logged in.
        await router.push('/')
        //Exit onSubmit function
        return
      }
      //Resetting form with same data to stop its isSubmitting state
      reset(data)
    } catch (error: any) {
      if (error.name === 'RpcError') {
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
    <div className="login-bg d-flex justify-content-center align-items-center">
      <CCard className="p-3">
        <CCardBody>
          <div className="d-flex">
            <Image src={logo_compact} height={60} alt="Eganow" className="mx-auto" />
          </div>

          <h3 className="text-center">
            {/*//TODO - add id to languages folder*/}
            <FormattedMessage
              id="Provide_your_new_password"
              defaultMessage="Provide your new password"
            />
          </h3>
          {/*//TODO - add id to languages folder*/}
          <p className="text-medium-emphasis text-center">
            <FormattedMessage
              id="please_enter_your_new_password_and_confirm"
              defaultMessage="Please enter your new password and confirm"
            />
          </p>
          {errors?.message && (
            <CAlert color="danger">
              <CIcon icon={cilFire} className="flex-shrink-0 me-2" width={24} height={24} />
              {errors?.message}
            </CAlert>
          )}
          <CForm onSubmit={handleSubmit(onSubmit)}>
            <CCol>
              <CFormLabel>Email address</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '50px' }}>
                  <CIcon icon={cilEnvelopeClosed} />
                </CInputGroupText>
                <CFormInput
                  className=""
                  placeholder="Email Address"
                  autoComplete="emailAddress"
                  value={emailValue}
                  disabled
                />
              </CInputGroup>
            </CCol>
            <CCol>
              <CFormLabel>New password</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '50px' }}>
                  <CIcon icon={cilEnvelopeClosed} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  id="password"
                  placeholder="Enter your password here."
                  {...register('password')}
                  valid={
                    formState.dirtyFields?.password && !!!formState.errors?.password ? true : false
                  }
                  invalid={!!formState.errors?.password && true}
                />
              </CInputGroup>
            </CCol>
            <CCol>
              <CFormLabel>Confirm password</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText style={{ width: '50px' }}>
                  <CIcon icon={cilEnvelopeClosed} />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password here."
                  {...register('confirmPassword')}
                  valid={
                    formState.dirtyFields?.confirmPassword && !!!formState.errors?.confirmPassword
                      ? true
                      : false
                  }
                  invalid={!!formState.errors?.confirmPassword && true}
                />
              </CInputGroup>
            </CCol>

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
                    'Reset password'
                  )}
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}
