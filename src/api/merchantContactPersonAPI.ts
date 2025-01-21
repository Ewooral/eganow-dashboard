import AxiosInstance from '@/axios-instance'
import { BusinessContactPersonType } from '@/types/BusinessInfoType'
//import { queryString_util } from '@/util'

export default function merchantContactPersonAPI() {
  const axiosInstance = AxiosInstance()

  return {
    listBusinessContactPersons: () =>
      axiosInstance.get('/api/v1/onboarding/merchants/accounts/contact-persons'),
    addBusinessContactPerson: (param: BusinessContactPersonType) =>
      axiosInstance.post('/api/v1/onboarding/merchants/accounts/contact-persons', param),
    updateBusinessContactPerson: (param: BusinessContactPersonType) =>
      axiosInstance.put('/api/v1/onboarding/merchants/accounts/contact-persons', param),
    deleteBusinessContactPerson: (id: string) =>
      axiosInstance.delete(`/api/v1/onboarding/merchants/accounts/contact-persons/${id}`),
  }
}
