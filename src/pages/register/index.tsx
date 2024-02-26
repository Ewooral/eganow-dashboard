// @ts-nocheck
import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationSchema } from '@/components/register/validationSchema'
import { defaultFormValues } from '@/components/register/defaultFormValues'

import LeftSide from '@/components/register/LeftSide'
import RightSide from '@/components/register/RightSide'
import StepOnePane from '@/components/register/StepOnePane'
import StepTwoPane from '@/components/register/StepTwoPane'
import StepThreePane from '@/components/register/StepThreePane'
import StepFourPane from '@/components/register/StepFourPane'
import StepSixPane from '@/components/register/StepSixPane'
import StepSevenPane from '@/components/register/StepSevenPane'

import { CRow, CCol, CFormInput, CButton, CForm, CFormLabel, CFormText } from '@coreui/react-pro'
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


/* 




*/
const Register = () => {
  const { createCustomerGenerateOTP, createCustomerVerifyOTP, createCustomerAccount } =
    customerAccountGRPC()
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
          handleNextClick={next_click}
        />
      ),
    },
    /* {
      title: 'Set security questions',
      content: 'Setting and answering security questions.',
      component: (
        <StepFivePane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleNextClick={next_click}
        />
      ),
    }, */
    {
      title: 'Transaction Pin',
      content: 'Setting and confirming your 6-digit transaction pin.',
      component: (
        <StepSixPane
          handleForm={handleForm}
          handleBackClick={back_click}
          handleSubmitClick={submit_click}
        />
      ),
    },
    {
      title: 'Finish',
      content: 'You are successively registered',
      component: <StepSevenPane handleForm={handleForm} />,
    },
  ]

  async function next_click() {
    //If email address next-btn is clicked trigger validation
    if (stepCount === 0) {
      //Start validation
      const state = await handleForm.trigger('emailAddress')
      //Return if validation fails
      if (!state) return
      //Start loading
      setLoading(true)
      //Getting email address
      const emailAddress = handleForm.getValues('emailAddress')
      const response: any = await createCustomerGenerateOTP({ emailAddress })
      //Stop loading
      setLoading(false)
      //Return if error occurs
      if (!response.issuccess && response.messagesuccessfulorfailed !== 'SUCCESSFUL') {
        setErrors({ stepOne: response.message })
        return
      }
      //Resetting the error
      if (errors?.stepOne) {
        setErrors({})
      }
      //If validation fails don't increment step
    }

    //If verification code next-btn is clicked trigger validation
    if (stepCount === 1) {
      const state = await handleForm.trigger('otpValue')
      //If validation fails don't increment step
      if (!state) return
      //Start loading
      setLoading(true)
      //Getting email address
      const param = {
        emailAddress: handleForm.getValues('emailAddress'),
        otpValue: handleForm.getValues('otpValue'),
      }
      const response: any = await createCustomerVerifyOTP(param)
      //Stop loading
      setLoading(false)
      //Return if error occurs
      if (!response.issuccess && response.messagesuccessfulorfailed !== 'SUCCESSFUL') {
        setErrors({ stepTwo: response.message })
        return
      }
      //Resetting the error
      if (errors?.stepTwo) {
        setErrors({})
      }
    }

    //If personal information next-btn is clicked trigger validation
    if (stepCount === 2) {
      const state = await handleForm.trigger([
        'firstName',
        'lastName',
        'customerMobileNo',
        'languageId',
        'password',
        'confirmPassword',
      ])
      //If validation fails don't increment step
      if (!state) return
    }

    //If business information next-btn is clicked trigger validation
    if (stepCount === 3) {
      const state = await handleForm.trigger([
        'businessName',
        'businessContactPersonNumber',
        'country',
      ])
      //If validation fails don't increment step
      if (!state) return
    }

    //If first security question next-btn is clicked trigger validation
    /* if (stepCount === 4) {
      const state = await handleForm.trigger([
        'securityQuestionOne',
        'securityAnswerOne',
        'securityQuestionTwo',
        'securityAnswerTwo',
      ])
      //If validation fails don't increment step
      if (!state) return
    } */

    //Moving to the next step
    setStepCount((prev) => {
      const increment = prev + 1
      return increment
    })
  }

  function back_click() {
    setStepCount((prev) => {
      const decrement = prev - 1
      return decrement
    })
  }

  async function submit_click() {
    //If transaction pin next-btn is clicked trigger validation
    const state = await handleForm.trigger(['customerSixDigitPIN', 'confirmCustomerSixDigitPIN'])
    //If validation fails don't increment step
    if (!state) return
    //If no error handle submit
    handleForm.handleSubmit(onSubmit)()
  }

  const onSubmit = async (param) => {
    //Start loading
    setLoading(true)
    //Getting all the param
    const response: any = await createCustomerAccount(param)
    //Stop loading
    setLoading(false)
    //Return if error occurs
    if (!response.issuccess && response.messagesuccessfulorfailed !== 'SUCCESSFUL') {
      setErrors({ stepSix: response?.message })
      return
    }
    //Resetting the error if any
    if (errors?.stepSix) {
      setErrors({})
    }
    //Moving to the next step
    setStepCount((prev) => {
      return prev + 1
    })
  }

  return (
    <div className="bg-light  min-vh-100 d-flex flex-row align-items-center login-bg">
      <div className="step-container">
        <div>
          <LanguageSelector/>
          <div className="card">
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
