import AxiosInstance from '@/apiInstances/auth-instance'

export default function otpAPI() {
  const axiosInstance = AxiosInstance()

  return {
    generateOTP: (param: { email: string; purpose: string }) =>
      axiosInstance.post(`/api/v1/onboarding/otp/generate`, param),
    verifyOTP: (param: { email: string; purpose: string; otp: string }) =>
      axiosInstance.post('/api/v1/onboarding/otp/verify', param),
  }
}
