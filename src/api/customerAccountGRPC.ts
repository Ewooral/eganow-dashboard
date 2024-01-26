import * as grpcWeb from 'grpc-web'
import { URL, METADATA } from '@/constants'
import { CustomerAccountClient } from '@/protos/generated/CustomerServiceClientPb'
import {
  CustomerTempOTRequestMessage,
  CustomerTempVerifyOTRequestMessage,
  CustomerAccountMessage,
  LanguageOnlyMessage,
  LoginRequestMessage,
  SuccessMessage,
  CustomerSecurityQuestionsList,
  LoginResponseMessage,
} from '@/protos/generated/Customer_pb'

const customerAccountGRPC = () => {
  const client = new CustomerAccountClient(URL, null, null)

  /*
   *
   * Create Customer Generate OTP
   *
   */
  function createCustomerGenerateOTP(param: { emailAddress: string }) {
    try {
      return new Promise((resolve, reject) => {
        const request = new CustomerTempOTRequestMessage()
        request.setEmailaddress(param.emailAddress)
        request.setPersonalbusinessgroupvalue(2)

        client.createCustomerGenerateOTP(
          request,
          METADATA,
          (err: grpcWeb.RpcError, response: SuccessMessage) => {
            if (err) {
              reject(err)
            }
            //Construct the country object
            const result = response?.toObject()

            //Setting countries to state
            resolve(result)
          },
        )
      })
    } catch (error) {
      console.error(error)
    }
  }

  /*
   *
   *
   * Create Customer Verify OTP
   *
   */
  function createCustomerVerifyOTP(param: { emailAddress: string; otpValue: string }) {
    try {
      const request = new CustomerTempVerifyOTRequestMessage()
      request.setEmailaddress(param.emailAddress)
      request.setOtpvalue(param.otpValue)
      request.setPersonalbusinessgroupvalue(2)

      return new Promise((resolve, reject) => {
        client.createCustomerVerifyOTP(
          request,
          METADATA,
          (err: grpcWeb.RpcError, response: SuccessMessage) => {
            if (err) {
              reject(err)
            }
            //Setting countries to state
            resolve(response?.toObject())
          },
        )
      })
    } catch (error) {
      console.error(error)
    }
  }
  /*
   *
   *
   * Get All Security Questions
   *
   */
  function getAllSecurityQuestions(languageId: string) {
    try {
      const request = new LanguageOnlyMessage()
      request.setLanguageid(languageId)

      return new Promise((resolve, reject) => {
        client.getAllSecurityQuestions(
          request,
          {},
          (err: grpcWeb.RpcError, response: CustomerSecurityQuestionsList) => {
            if (err) {
              reject(err)
            }
            //Construct the country object
            const countrylistArray = response?.toObject()
            //Setting countries to state
            resolve(countrylistArray.securityquestionslistList)
          },
        )
      })
    } catch (error) {
      console.error(error)
    }
  }
  /*
   *
   *
   * Create Customer Account
   *
   */
  function createCustomerAccount(param: any) {
    try {
      return new Promise((resolve, reject) => {
        const request = new CustomerAccountMessage()
        request.setEmailaddress(param.emailAddress)
        request.setOtpvalue(param.otpValue)
        request.setPersonalbusinessgroupvalue(param.PersonalBusinessGroupValue)
        request.setFirstname(param.firstName)
        request.setLastname(param.lastName)
        request.setMobilenumber(param.customerMobileNo.dialNumber)
        request.setPassword(param.password)
        request.setMobilenodialcode(param.customerMobileNo.dialCode)
        request.setBusinessname(param.businessName)
        request.setCountrycode(param.country.code)
        request.setMobileorweb('WEB')
        request.setCountrycodeforfirsteganowwallet(param.countryCodeForFirstEganowWallet)
        request.setCustomersixdigitpin(param.customerSixDigitPIN)
        request.setLanguageid(param.languageId)
        request.setBusinesscontactpersonmobilenumber(param.confirmCustomerSixDigitPIN)

        console.log(JSON.stringify(request.toObject(), null, 4))
        //console.log(JSON.stringify(param, null, 4))

        /* client.createCustomerAccount(request, METADATA, (err: grpcWeb.RpcError, response: LoginResponseMessage) => {
        if (err) {
          reject(err)
        }
        //Setting countries to state
        resolve(response?.toObject())
      }) */

        resolve({ issuccess: true, messagesuccessfulorfailed: 'FAIL' })
      })
    } catch (error) {
      console.error(error)
    }
  }

  /*
   *
   *
   * Login User Business
   *
   *
   */
  function loginUserBusiness(data) {
    try {
      return new Promise((resolve, reject) => {
        const request = new LoginRequestMessage()
        request.setCountrycode(data.country)
        request.setCustomerid(data.username)
        request.setLanguageid('en')
        request.setMobileorweb('WEB')
        request.setPassword1orpin2orhpin3option(1)
        request.setPasswordorpin(data.password)
        request.setPersonalbusinessgroupvalue(2)

        client.loginUserBusiness(
          request,
          METADATA,
          (err: grpcWeb.RpcError, response: LoginResponseMessage) => {
            if (err) {
              reject(err)
            }
            //Setting countries to state
            resolve(response?.toObject())
          },
        )
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createCustomerGenerateOTP,
    createCustomerVerifyOTP,
    getAllSecurityQuestions,
    createCustomerAccount,
    loginUserBusiness,
  }
}

export default customerAccountGRPC
