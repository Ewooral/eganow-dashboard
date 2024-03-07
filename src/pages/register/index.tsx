// @ts-nocheck
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationSchema } from '@/components/register/validationSchema'
import { defaultFormValues } from '@/components/register/defaultFormValues'
/* COMPONENTS */
import LeftSide from '@/components/register/LeftSide'
import RightSide from '@/components/register/RightSide'
import StepOnePane from '@/components/register/StepOnePane'
import StepTwoPane from '@/components/register/StepTwoPane'
import StepThreePane from '@/components/register/StepThreePane'
import StepFourPane from '@/components/register/StepFourPane'
import StepFivePane from '@/components/register/StepFivePane'
/* API */
import customerAccountGRPC from '@/api/customerAccountGRPC'

import { useQuery } from '@tanstack/react-query'
import { errorType } from '@/types/Errors'
import { ProgressBar } from '@/types/CommonDataType'
import LanguageSelector from '@/components/LanguageSelector'

/* type ResponseMSG = {
  issuccess: string
  messagesuccessfulorfailed: string
} */


import merchantOnboardingSvcGRPC from '@/api/merchantOnboardingSvcGRPC'
import otpSvcGRPC from '@/api/otpSvcGRPC'
/* TYPES */
import { errorType } from '@/types/Errors'
import { ProgressBar } from '@/types/CommonDataType'
/* HOOKS */
import { useCookies } from 'react-cookie'
/* CONSTANCE */
import { EGANOW_AUTH_COOKIE } from '@/constants'
/* 




*/
const Register = () => {
  const { createMerchantAccount, checkIfMerchantAccountExists, loginMerchant } =
    merchantOnboardingSvcGRPC()
  const [_, setCookie] = useCookies()
  const { sendOTP, verifyOTP } = otpSvcGRPC()
  const [stepCount, setStepCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<errorType>({})
  const router = useRouter()

  const handleForm = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: defaultFormValues,
  })

  const progressBar: ProgressBar = [
    {
      title: 'Email Address',
      content: 'Setting your email address. A verification code will be sent to your email .',
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
      title: 'Enter verification code',
      content: 'Entering verification code sent to your email.',
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
      title: 'Personal Information',
      content: 'Setting your personal information details',
      component: (
        <StepThreePane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleNextClick={next_click}
        />
      ),
    },
    {
      title: 'Business Information',
      content: 'Setting your business information details',
      component: (
        <StepFourPane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleSubmitClick={submit_click}
          errors={errors}
        />
      ),
    },
    {
      title: 'Finish',
      content: 'You are successively registered',
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
        await checkIfMerchantAccountExists(values)
        //Upon response send an OTP to the new merchant
        await sendOTP(values)
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
        //Getting email address
        const values = handleForm.getValues()
        //Getting email address
        await verifyOTP(values)
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
      if (error.name === 'RpcError') {
        setErrors({
          [stepKey]: error.metadata['grpc-message'],
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
      await createMerchantAccount(values)
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
      //Handling GRPC errors
      if (error.name === 'RpcError') {
        setErrors({
          stepFour: error.metadata['grpc-message'],
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
      //If accessToken exist on success then log user in.
      if (response.accessToken) {
        //Storing login authentication in cookie
        setCookie(EGANOW_AUTH_COOKIE, response, {
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
      if (error.name === 'RpcError') {
        setErrors({
          stepFinal: error.metadata['grpc-message'],
        })
        return
      }
      //Logging general error
      console.error(error)
    }
  }

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-bg">
        <div className='position-absolute top-0 my-4 py-2 px-md-5 px-3 d-none d-lg-block '>
          <LanguageSelector />
        </div>
      <div className="step-container">
        <div>
          <div className='d-lg-none my-2'>
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
