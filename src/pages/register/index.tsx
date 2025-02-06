// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie'
import { useIntl } from 'react-intl'
import { yupResolver } from '@hookform/resolvers/yup'
/* COMPONENTS */
import { validationSchema } from '@/components/register/validationSchema'
import { defaultFormValues } from '@/components/register/defaultFormValues'
import LeftSide from '@/components/register/LeftSide'
import RightSide from '@/components/register/RightSide'
import StepOnePane from '@/components/register/StepOnePane'
import StepTwoPane from '@/components/register/StepTwoPane'
import StepThreePane from '@/components/register/StepThreePane'
import StepFourPane from '@/components/register/StepFourPane'
import StepFivePane from '@/components/register/StepFivePane'
import LanguageSelector from '@/components/LanguageSelector'
/* API */
import customerAccountGRPC from '@/api/customerAccountGRPC'
import authAPI from '@/api/authAPI'
import merchantAPI from '@/api/merchantOnboardingAPI'
import otpAPI from '@/api/otpAPI'
/* TYPES */
import { errorType } from '@/types/Errors'
import { ProgressBar } from '@/types/CommonDataType'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* 




*/
const Register = () => {
  const { loginMerchant } = authAPI()
  const { generateOTP, verifyOTP } = otpAPI()
  const { createMerchantAccount, checkIfMerchantAccountExists } = merchantAPI()
  const [_, setCookie] = useCookies()
  const { formatMessage } = useIntl()
  const router = useRouter()

  const [stepCount, setStepCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<errorType>({})

  const handleForm = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  const progressBar: ProgressBar = [
    {
      title: formatMessage({ id: 'email_address', defaultMessage: 'Email Address' }),
      content: formatMessage({
        id: 'set_and_verify_code_from_email',
        defaultMessage:
          'Setting your email address. A verification code will be sent to your email.',
      }),
      component: (
        <StepOnePane
          handleForm={handleForm}
          handleNextClick={next_click}
          loading={loading}
          errors={errors}
        />
      ),
    },
    {
      title: formatMessage({
        id: 'enter_verification_code',
        defaultMessage: 'Enter verification code',
      }),
      content: formatMessage({
        id: 'entering_verification_code',
        defaultMessage: 'Entering verification code sent to your email.',
      }),
      component: (
        <StepTwoPane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleNextClick={next_click}
          loading={loading}
          errors={errors}
        />
      ),
    },
    {
      title: formatMessage({ id: 'personal_information', defaultMessage: 'Personal Information' }),
      content: formatMessage({
        id: 'set_personal_info_details',
        defaultMessage: 'Set your personal information details below',
      }),
      component: (
        <StepThreePane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleNextClick={next_click}
          loading={loading}
        />
      ),
    },
    {
      title: formatMessage({ id: 'business_information', defaultMessage: 'Business Information' }),
      content: formatMessage({
        id: 'set_business_info_details',
        defaultMessage: 'Set your business information details below',
      }),
      component: (
        <StepFourPane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleSubmitClick={submit_click}
          errors={errors}
          loading={loading}
        />
      ),
    },
    {
      title: formatMessage({ id: 'finish', defaultMessage: 'Finish' }),
      content: formatMessage({
        id: 'successfully_registered',
        defaultMessage: 'You are successfully registered',
      }),
      component: (
        <StepFivePane
          handleForm={handleForm}
          handleLogin={onLogin}
          errors={errors}
          loading={loading}
        />
      ),
    },
  ]

  async function next_click() {
    let stepKey
    try {
      //If email address next-btn is clicked trigger validation
      if (stepCount === 0) {
        //Setting the error step key
        stepKey = 'stepOne'
        //Start validation
        const state = await handleForm.trigger('emailAddress')
        //Return if validation fails
        if (!state) return
        //Start loading
        setLoading(true)
        //Getting email address
        const values = handleForm.getValues()
        //Checking if merchant account exist by email
        const response = await checkIfMerchantAccountExists({
          email: values.emailAddress,
        })
        //Handle response error if status is true
        if (response.data.status) {
          //Stop loading
          setLoading(false)
          //Setting the error step key
          setErrors({
            [stepKey]: 'Merchant account already exist.',
          })
          return
        }
        //Upon response send an OTP to the new merchant
        await generateOTP({
          email: values.emailAddress,
          purpose: values.purpose,
        })
        //Stop loading
        setLoading(false)
        //Resetting the error
        if (errors?.stepOne) {
          setErrors({})
        }
        //If validation fails don't increment step
      }

      //If verification code next-btn is clicked trigger validation
      if (stepCount === 1) {
        //Setting the error step key
        stepKey = 'stepTwo'
        //Start validation
        const state = await handleForm.trigger('otpValue')
        //If validation fails don't increment step
        if (!state) return
        //Start loading
        setLoading(true)
        //Getting values
        const values = handleForm.getValues()
        //Verifying OTP
        await verifyOTP({
          email: values.emailAddress,
          purpose: values.purpose,
          otp: values.otpValue,
        })
        //Stop loading
        setLoading(false)
        //Resetting the error
        if (errors?.stepTwo) {
          setErrors({})
        }
      }

      //If personal information next-btn is clicked trigger validation
      if (stepCount === 2) {
        //Start validation
        const state = await handleForm.trigger([
          'firstName',
          'lastName',
          'customerMobileNo',
          'password',
          'confirmPassword',
        ])
        //If validation fails don't increment step
        if (!state) return
      }

      //Moving to the next step
      setStepCount((prev) => {
        const increment = prev + 1
        return increment
      })
    } catch (error) {
      //Stop loading
      setLoading(false)
      //Handling GRPC errors
      if (error?.response) {
        setErrors({
          [stepKey]: error?.response?.message,
        })
        return
      }
      //Logging general error
      console.error(error)
    }
  }

  function back_click() {
    setStepCount((prev) => {
      const decrement = prev - 1
      return decrement
    })
  }

  async function submit_click() {
    //Start validation
    const state = await handleForm.trigger(['businessName', 'businessMobileNo'])
    //If validation fails don't increment step
    if (!state) return
    //If no error handle submit
    handleForm.handleSubmit(onSubmit)()
  }

  async function onSubmit(values) {
    try {
      //Start loading
      setLoading(true)
      //Creating the merchant account
      await createMerchantAccount({
        personalInformation: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
        },
        businessInformation: {
          businessName: values.businessName,
          tradingName: values.tradingName,
          mobileNumber: `${values.businessMobileNo.dialCode}${values.businessMobileNo.dialNumber}`,
        },
        otp: values.otpValue,
        password: values.password,
      })
      //Stop loading
      setLoading(false)
      //Resetting the error if any
      if (errors?.stepFour) {
        setErrors({})
      }
      //Moving to the final step
      setStepCount((prev) => {
        return prev + 1
      })
    } catch (error) {
      //Stop loading
      setLoading(false)
      //Handling API errors
      if (error?.response) {
        setErrors({
          stepFour: error?.response.data.message,
        })
        return
      }
      //Logging general error
      console.error(error)
    }
  }

  async function onLogin() {
    try {
      const email = handleForm.getValues('emailAddress')
      const password = handleForm.getValues('password')
      //Start loading
      setLoading(true)
      //Log merchant in
      const response = await loginMerchant({ email, password })

      localStorage.setItem('isApproved',response.data.isApproved)
      //If accessToken exist on success then log user in.
      if (response?.data.accessToken) {
        //Storing login authentication in cookie
        setCookie(EGANOW_AUTH_COOKIE, response?.data, {
          maxAge: 30 * 60 * 24,
        })
        //Routing to the intermediate page when logged in.
        await router.push('/')
        //Exit onSubmit function
        return
      }
    } catch (error) {
      //Stop loading
      setLoading(false)
      //Handling GRPC errors
      if (error?.response) {
        setErrors({
          stepFinal: error?.response.data.message,
        })
        return
      }
      //Logging general error
      console.error(error)
    }
  }

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-bg">
      <div className="position-absolute top-0 my-4 py-2 px-md-5 px-3 d-none d-lg-block ">
        <LanguageSelector />
      </div>
      <div className="step-container">
        <div>
          <div className="d-lg-none my-2">
            <LanguageSelector />
          </div>
          <div className="card my-0">
            <div className="form">
              {/*  */}
              <LeftSide stepCount={stepCount} stepList={progressBar} />
              {/*  */}
              <RightSide stepCount={stepCount} stepList={progressBar} />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
