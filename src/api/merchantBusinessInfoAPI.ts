import AxiosInstance from '@/apiInstances/auth-instance'
import { CredentialsType } from '@/types/CredentialsType'
//import { queryString_util } from '@/util'

export default function merchantBusinessInfoAPI() {
  const axios = AxiosInstance()

  return {
    getBusinessRegulators: () => axios.get('/api/v1/onboarding/merchants/active-regulators'),
    getBusinessIndustries: () => axios.get('/api/v1/onboarding/merchants/active-industries'),
    //
    getBusinessInfo: () => axios.get('/api/v1/onboarding/merchants/accounts/info'),
    updateBusinessInfo: (param: CredentialsType) =>
      axios.put('/api/v1/onboarding/merchants/accounts/info', param),
    //
    getBusinessContactInfo: () => axios.get('/api/v1/onboarding/merchants/accounts/contact-info'),
    updateBusinessContactInfo: (param: CredentialsType) =>
      axios.put('/api/v1/onboarding/merchants/accounts/contact-info', param),
  }
}
