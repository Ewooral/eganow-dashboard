import AxiosInstance from '@/axios-instance'
import { queryString_util } from '@/util'

export default function CommonAPI() {
  const axiosInstance = AxiosInstance()

  return {
    getCountries: (param: { filter: string }) =>
      axiosInstance.get(`/api/v1/countries?${queryString_util(param)}`),
  }
}
