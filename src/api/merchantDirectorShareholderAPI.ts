import AxiosInstance from '@/apiInstances/auth-instance'
import { BusinessDirectorOrShareholderType } from '@/types/BusinessInfoType'
//import { queryString_util } from '@/util'


export default function merchantDirectorShareholderAPI() {
  const axios = AxiosInstance()

  return {
    getDirectorList: () => axios.get('/api/v1/onboarding/merchants/accounts/director-shareholders'),
    addDirectorOrShareholder: (param: BusinessDirectorOrShareholderType) =>
      axios.post('/api/v1/onboarding/merchants/accounts/director-shareholders', param),
    updateDirectorOrShareholder: (param: BusinessDirectorOrShareholderType) =>
      axios.put('/api/v1/onboarding/merchants/accounts/director-shareholders', param),
    deleteDirector: (id: string) =>
      axios.delete(`/api/v1/onboarding/merchants/accounts/director-shareholders/${id}`),
  }
}
