// @ts-nocheck
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import {
  CForm,
  CRow,
  CCol,
  CFormLabel,
  CFormInput,
  CFormText,
  CButton,
  CFormSelect,
} from '@coreui/react-pro'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import classNames from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { URL } from '@/constants'
import { StepPropType } from './types'
import { useEffect, useState, useRef } from 'react'
import { current } from '@reduxjs/toolkit'

import { useController } from 'react-hook-form'

const defaultOption = { label: 'Select question', value: '' }

const StepFivePane = (props: any) => {
  const { register, getValues, formState, control } = props.handleForm
  const handleBackClick = props.handleBackClick
  const handleNextClick = props.handleNextClick
  //Fetching country options
  /* const { getAllSecurityQuestions } = useCustomerAccountGRPC(URL) */
  //Country options
  const [securityQuestionsOptions, setSecurityQuestionsOptions] = useState([defaultOption])

  const { field, fieldState } = useController({
    name: 'securityQuestionOne',
    control: control,
  })

  /* const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ['securityQuestionsGrpcData'],
    queryFn: getAllSecurityQuestions('en'),
  })

  useEffect(() => {
    console.log(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */

  let count = useRef(0)

  useEffect(() => {
    if (count.current === 0) {
      async function name() {
        /*  const response: any = await getAllSecurityQuestions('en') */
        //console.log(JSON.stringify(response, null, 4))
        /*  const options = response.map((obj: any) => {
          return { label: obj.securityquestion, value: obj.questionid }
        })
        //Setting options
        setSecurityQuestionsOptions([defaultOption, ...options]) */
      }
      name()
    }
    count.current++
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /*  useEffect(() => {
    console.log(JSON.stringify(data, null, 4))
    if (data) {
      const options = data.map((obj: any) => {
        return { label: obj.securityquestion, value: obj.securityquestion }
      })
      //Setting options
      setSecurityQuestionsOptions([defaultOption, ...options])
    }
  }, [data]) */

  return (
    <>
      <CRow>
        <CCol lg={1}>
          <small>
            <CIcon icon={cilLockLocked} />
          </small>
        </CCol>
        <CCol>
          <h3>Customer Registration</h3>
        </CCol>
      </CRow>
      <div className="text">
        <h2>Security Questions</h2>
        <p>
          Set and answer security questions to enable you retrieve your lost credentials with ease.
        </p>
      </div>

      <CForm className="g-3 mt-5">
        <CRow className="mb-4">
          <CCol>
            <CFormLabel
              htmlFor="securityQuestionOne"
              className={classNames({
                'text-error': !!formState.errors?.securityQuestionOne,
              })}
            >
              Select first security question
            </CFormLabel>
            <CFormSelect
              aria-label="Default select example"
              id="securityQuestionOne"
              placeholder="Select security question."
              onChange={field.onChange}
              onBlur={field.onBlur}
              valid={fieldState.isDirty && !!!fieldState.error?.securityQuestionOne ? true : false}
              invalid={!!fieldState.error?.securityQuestionOne && true}
              options={securityQuestionsOptions}
            />
            {/* <CFormSelect
              aria-label="Default select example"
              id="securityQuestionOne"
              placeholder="Select security question."
              {...register('securityQuestionOne')}
              valid={
                formState.dirtyFields?.securityQuestionOne &&
                !!!formState.errors?.securityQuestionOne
                  ? true
                  : false
              }
              invalid={!!formState.errors?.securityQuestionOne && true}
              options={securityQuestionsOptions}
            /> */}
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.securityQuestionOne ? false : true,
              })}
            >
              Security QuestionOne Required
            </CFormText>
          </CCol>

          <CCol>
            <CFormLabel
              htmlFor="securityAnswerOne"
              className={classNames({
                'text-error': !!formState.errors?.securityAnswerOne,
              })}
            >
              Answer to first security question
            </CFormLabel>
            <CFormInput
              type="text"
              id="securityAnswerOne"
              placeholder="Enter  first answer  here."
              {...register('securityAnswerOne')}
              valid={
                formState.dirtyFields?.securityAnswerOne && !!!formState.errors?.securityAnswerOne
                  ? true
                  : false
              }
              invalid={!!formState.errors?.securityAnswerOne && true}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.securityAnswerOne ? false : true,
              })}
            >
              Security AnswerOne Required
            </CFormText>
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <CFormLabel
              htmlFor="securityQuestionTwo"
              className={classNames({
                'text-error': !!formState.errors?.securityQuestionTwo,
              })}
            >
              Select second security question
            </CFormLabel>
            <CFormSelect
              aria-label="Default select example"
              id="securityQuestionTwo"
              placeholder="Select security question."
              {...register('securityQuestionTwo')}
              valid={
                formState.dirtyFields?.securityQuestionTwo &&
                !!!formState.errors?.securityQuestionTwo
                  ? true
                  : false
              }
              invalid={!!formState.errors?.securityQuestionTwo && true}
              options={securityQuestionsOptions}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.securityQuestionTwo ? false : true,
              })}
            >
              Security Question Two is Required
            </CFormText>
          </CCol>
          <CCol>
            <CFormLabel
              htmlFor="securityAnswerTwo"
              className={classNames({
                'text-error': !!formState.errors?.securityAnswerTwo,
              })}
            >
              Answer to second security question
            </CFormLabel>
            <CFormInput
              type="text"
              id="securityAnswerTwo"
              placeholder="Enter second answer here."
              {...register('securityAnswerTwo')}
              valid={
                formState.dirtyFields?.securityAnswerTwo && !!!formState.errors?.securityAnswerTwo
                  ? true
                  : false
              }
              invalid={!!formState.errors?.securityAnswerTwo && true}
            />
            <CFormText
              component="span"
              className={classNames({
                'text-error': true,
                'd-none': !!formState.errors?.securityAnswerTwo ? false : true,
              })}
            >
              Fecurity Answer Two Required
            </CFormText>
          </CCol>
        </CRow>
      </CForm>

      <CForm className="row g-3 mt-4 buttons">
        <CCol xs="auto">
          <CButton color="dark" variant="outline" onMouseUp={handleBackClick}>
            <FaChevronLeft className="me-2 mb-1" />
            Go Back
          </CButton>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary" onMouseUp={handleNextClick}>
            Next Step
            <FaChevronRight className="ms-2 mb-1" />
          </CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default StepFivePane
