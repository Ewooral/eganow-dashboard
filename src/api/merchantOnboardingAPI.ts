import AxiosInstance from '@/axios-instance'
import { queryString_util } from '@/util'

type CreateMerchantAccountType = {
  personalInformation: {
    firstName: string
    lastName: string
    email: string
  }
  businessInformation: {
    businessName: string
    tradingName: string
    mobileNumber: string
  }
  otp: string
  password: string
}

export default function merchantOnboardingAPI() {
  const axios = AxiosInstance()

  return {
    checkIfMerchantAccountExists: (param: { email: string }) =>
      axios.post('/api/v1/merchants/check-account', param),
    createMerchantAccount: (param: CreateMerchantAccountType) =>
      axios.post('/api/v1/merchants/register', param),
  }
}
