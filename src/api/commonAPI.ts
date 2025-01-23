import AxiosInstance from '@/apiInstances/auth-instance'
import { queryString_util } from '@/util'

export default function CommonAPI() {
  const axiosInstance = AxiosInstance()

  return {
    getCountries: (param: { filter: string }) =>
      axiosInstance.get(`/api/v1/onboarding/countries?${queryString_util(param)}`),
  }
}
