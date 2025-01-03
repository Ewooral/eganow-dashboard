import axios from 'axios'
import { useCookies } from 'react-cookie'
import { isEmpty_util } from '@/util'
import { EGANOW_AUTH_COOKIE, HTTP_ERROR_CODES } from '@/constants'
import { useLocale } from '@/store'
import { useRouter } from 'next/router'

export default function AxiosInstance() {
  const router = useRouter()
  const { locale, country } = useLocale((state) => state)
  const [cookie] = useCookies([EGANOW_AUTH_COOKIE])
  const token = isEmpty_util(cookie?.eganow_customer_auth)
    ? ''
    : cookie?.eganow_customer_auth?.accessToken
  const credential = btoa(
    `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`,
  )

  //Creating axios instance
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'content-type': 'application/json',
      'x-country-code': country?.code,
      'x-language-id': locale,
      'x-ega-user-access-token': token,
      authorization: `Basic ${credential}`,
    },
  })
  //Request interceptors
  axiosInstance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  //Response interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response?.data // Return the response data
    },
    async (error) => {
      if (error.response.status === HTTP_ERROR_CODES.UNAUTHORIZED) {
        //console.log(error.response.status)
        await router.push('/login')//TODO::must be worked on later.
      }
      return Promise.reject(error) // Forward the error for further handling
    },
  )
  //Returning instance
  return axiosInstance
}
