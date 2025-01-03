import AxiosInstance from '@/axios-instance'

export default function authAPI() {
  const axiosInstance = AxiosInstance()

  return {
    loginMerchant: (param: { email: string; password: string }) =>
      axiosInstance.post(`/api/v1/auth/login`, param),
    requestPasswordReset: (param: { email: string }) =>
      axiosInstance.post(`/api/v1/auth/request-password-reset`, param),
    resetPassword: (param: { email: string; password: string }) =>
      axiosInstance.post('/api/v1/auth/password-reset', param),
  }
}
