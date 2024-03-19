// @ts-nocheck
import { grpc } from '@improbable-eng/grpc-web'
import { URL } from '@/constants'
import { MerchantOnboardingSvcClient } from '@/protos/generated/eganow/api/merchant/Onboarding_serviceServiceClientPb'
import {
  LoginMerchantRequest,
  CreateMerchantRequest,
  CheckMerchantAccountRequest,
  ResetPasswordRequest,
} from '@/protos/generated/eganow/api/merchant/onboarding_payload_pb'
import { Metadata } from '@/helpers'

const MerchantOnboardingSvc = () => {
  const client = new MerchantOnboardingSvcClient(URL, {
    transport: `${grpc.CrossBrowserHttpTransport({ withCredentials: false })}`,
  })

  const metadata = Metadata()

  function loginMerchant(param: { email: string; password: string }) {
    try {
      const request = new LoginMerchantRequest()
      request.setEmail(param.email)
      request.setPassword(param.password)

      return new Promise((resolve, reject) => {
        client.loginMerchant(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          //Setting countries to state
          resolve(res?.toObject())
        })
        // resolve({
        //   accessToken:
        //     'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJTdWJqZWN0Ijp7Im5hbWUiOiJkZW5uaXNAZWdhbm93LmNvbSIsInNlcmlhbF9udW1iZXIiOiIwMjMzMjAyNDA1MzAwMDAwMDAwMSIsImVtYWlsIjoiZGVubmlzQGVnYW5vdy5jb20iLCJtb2JpbGVfcGhvbmUiOiIiLCJnaXZlbl9uYW1lIjoiRGVubmlzIiwic3VybmFtZSI6IkJpbHNvbiJ9LCJleHAiOjE3MDkwMDc1MzksImlhdCI6MTcwOTAzMzk1OSwiaXNzIjoiRWdhbm93Iiwic3ViIjoiZGVubmlzQGVnYW5vdy5jb20ifQ.OnGpYpm--Uj8X8hPAk_EPW-YAUfMtOw-dlJ3BsqfKQM1YRF-1XbK9imXAmrqFm0rx1lLNS8CEmExn0J1qCApBw',
        //   fullName: 'Dennis Bilson',
        //   firstName: 'Dennis',
        //   lastName: 'Bilson',
        //   businessName: 'Quabynah Codelabs LLC',
        //   merchantId: 'dennis@eganow.com',
        //   profilePicture: '',
        //   email: 'dennis@eganow.com',
        //   mobileNumber: '',
        // })
      })
    } catch (error) {
      console.error(error)
    }
  }

  function checkIfMerchantAccountExists(param: { emailAddress: string }) {
    try {
      const request = new CheckMerchantAccountRequest()
      request.setMerchantEmail(param.emailAddress)

      return new Promise((resolve, reject) => {
        client.checkIfMerchantAccountExists(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          //Setting countries to state
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  function createMerchantAccount(param) {
    try {
      //Setting values
      const businessInformation = new CreateMerchantRequest.BusinessInformation()
      businessInformation.setBusinessName(param.businessName)
      businessInformation.setTradingName(param.tradingName)
      businessInformation.setMobileNumber(String(param.businessMobileNo.dialNumber))

      const personalInformation = new CreateMerchantRequest.PersonalInformation()
      personalInformation.setEmail(param.emailAddress)
      personalInformation.setFirstName(param.firstName)
      personalInformation.setLastName(param.lastName)
      personalInformation.setMobileNumber(String(param.customerMobileNo.dialNumber))
      //Creating the request
      const request = new CreateMerchantRequest()
      request.setBusinessInformation(businessInformation)
      request.setPersonalInformation(personalInformation)
      request.setOtpValue(param.otpValue)
      request.setPassword(param.password)

      return new Promise((resolve, reject) => {
        client.createMerchantAccount(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          //Setting countries to state
          resolve(res?.toObject())
        })
        //resolve({})
      })
    } catch (error) {
      console.error(error)
    }
  }

  function requestPasswordReset(param) {
    try {
      const request = new ResetPasswordRequest()
      request.setEmail(param.emailAddress)

      return new Promise((resolve, reject) => {
        client.requestPasswordReset(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }

          resolve(res?.toObject())
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  function resetPassword(param) {
    try {
      const request = new ResetPasswordRequest()
      request.setEmail(param.emailAddress)
      request.setNewPassword(param.password)

      return new Promise((resolve, reject) => {
        client.resetPassword(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }

          resolve(res?.toObject())
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    loginMerchant,
    createMerchantAccount,
    checkIfMerchantAccountExists,
    requestPasswordReset,
    resetPassword,
  }
}

export default MerchantOnboardingSvc
