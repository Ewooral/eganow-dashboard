import AxiosInstance from '@/axios-instance'
import { CredentialsType } from '@/types/CredentialsType'
//import { queryString_util } from '@/util'

export default function merchantBusinessInfoAPI() {
  const axios = AxiosInstance()

  return {
    getBusinessRegulators: () => axios.get('/api/v1/merchants/active-regulators'),
    getBusinessIndustries: () => axios.get('/api/v1/merchants/active-industries'),
    //
    getBusinessInfo: () => axios.get('/api/v1/merchants/accounts/info'),
    updateBusinessInfo: (param: CredentialsType) =>
      axios.put('/api/v1/merchants/accounts/info', param),
    //
    getBusinessContactInfo: () => axios.get('/api/v1/merchants/accounts/contact-info'),
    updateBusinessContactInfo: (param: CredentialsType) =>
      axios.put('/api/v1/merchants/accounts/contact-info', param),
  }
}
