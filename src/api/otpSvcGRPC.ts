// @ts-nocheck
import { grpc } from '@improbable-eng/grpc-web'
import { URL } from '@/constants'
import { OtpSvcClient } from '@/protos/generated/eganow/api/common/Otp_serviceServiceClientPb'
import {
  SendOTPRequest,
  VerifyOTPRequest,
  OtpGenerationPurpose,
} from '@/protos/generated/eganow/api/common/otp_payload_pb'
import { Metadata } from '@/helpers'

const OtpSvc = () => {
  const client = new OtpSvcClient(URL, {
    transport: grpc.CrossBrowserHttpTransport({ withCredentials: false }),
  })

  const metadata = Metadata()

  function sendOTP(param: { emailAddress: string; purpose: number }) {
    try {
      const request = new SendOTPRequest()
      request.setBusinessEmailAddress(param.emailAddress)
      request.setPurpose(+OtpGenerationPurpose[param.purpose])

      return new Promise((resolve, reject) => {
        client.sendOTP(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          //Setting countries to state
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  function verifyOTP(param: { emailAddress: string; purpose: number; otpValue: string }) {
    try {
      const request = new VerifyOTPRequest()
      request.setBusinessEmailAddress(param.emailAddress)
      request.setPurpose(+OtpGenerationPurpose[param.purpose])
      request.setOtp(param.otpValue)

      return new Promise((resolve, reject) => {
        client.verifyOTP(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          //Setting countries to state
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  return { sendOTP, verifyOTP }
}

export default OtpSvc
