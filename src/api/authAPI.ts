import AxiosInstance from '@/axios-instance'

export default function authAPI() {
  const axiosInstance = AxiosInstance()

  return {
    loginMerchant: (param: { email: string; password: string }) =>
      axiosInstance.post(`/api/v1/onboarding/auth/login`, param),
    requestPasswordReset: (param: { email: string }) =>
      axiosInstance.post(`/api/v1/onboarding/auth/request-password-reset`, param),
    resetPassword: (param: { email: string; password: string }) =>
      axiosInstance.post('/api/v1/onboarding/auth/password-reset', param),
  }
}
