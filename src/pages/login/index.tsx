import Image from 'next/image'
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
import { cilEnvelopeClosed, cilFire, cilLockLocked, cilUser } from '@coreui/icons'
import { EmptyObject, useForm } from 'react-hook-form'


/* API */
import customerAccountGRPC from '@/api/customerAccountGRPC'
/* STORE */
import { useCustomerInfoStore } from 'src/store'
/* COMPONENTS */
import CountryInput from '@/components/country/CountryInput'

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

type Errors = {
  messages: string
}

type LoginType = {
  country: { code: string; name: string }
  username: string
  password: string
}

/* 



*/
const Login = () => {
  
  const setCustomerInfo = useCustomerInfoStore((state: any) => state.setCustomerInfo)
  const setLogOutUser = useCustomerInfoStore((state: any) => state.setLogOutUser)

  const { loginUserBusiness } = customerAccountGRPC()
  const [errors, setErrors] = useState<Errors | EmptyObject>({})
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    /*  mode: 'onChange', */
    defaultValues,
  })

  useEffect(() => {
    setLogOutUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLogOutUser])

  const onSubmit = async (data: LoginType) => {
    try {
      const response = await loginUserBusiness(data)

      //On success
      if (response.issuccess && response.messagesuccessfulorfailed === 'SUCCESSFUL') {
        //Storing customer info upon login in store
        setCustomerInfo(response)
        //Navigating to the dashboard upon login
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
        <CRow className="justify-content-center">
          <CCol style={{ maxWidth: '450px' }} className="position-relative">
            <CCardGroup>
              <CCard className="p-4">
                <Image src={logo_compact} height={80} alt="Eganow" className="mx-auto" />

                <CCardBody>
                  <h2 className="text-center">Hello, welcome back</h2>
                  <p className="text-medium-emphasis text-center">Login to your account</p>

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
                        placeholder="Email Address"
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
                        placeholder="Password"
                        autoComplete="current-password"
                        {...register('password', { required: true, minLength: 2, maxLength: 50 })}
                        required
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs={12} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
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
                            'Login'
                          )}
                        </CButton>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol xs={12} className="mt-4">
                        Don't have account yet? <Link href="/register"> Register Now!</Link>
                      </CCol>
                    </CRow>
                  </CForm>
                  {/* <div className="login-corner"></div> */}
                </CCardBody>
              </CCard>

              {/*  <CCard className="text-white py-5" style={{ backgroundColor: '#cc0229' }}>
                <CCardBody className="text-center">
                  <h2>Sign up</h2>
                  <p>
                    Signing up is quick and easy. By creating an account, you will gain access to a
                    wide range of features and benefits. Click below to begin.
                  </p>
                  <Link href="/register">
                    <CButton className="mt-3" color="light" variant="outline" tabIndex={-1}>
                      Register Now!
                    </CButton>
                  </Link>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
