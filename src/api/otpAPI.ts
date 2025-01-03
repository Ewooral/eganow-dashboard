import AxiosInstance from '@/axios-instance'

export default function otpAPI() {
  const axiosInstance = AxiosInstance()

  return {
    generateOTP: (param: { email: string; purpose: string }) =>
      axiosInstance.post(`/api/v1/otp/generate`, param),
    verifyOTP: (param: { email: string; purpose: string; otp: string }) =>
      axiosInstance.post('/api/v1/otp/verify', param),
  }
}
