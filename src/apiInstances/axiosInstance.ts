import axios from 'axios'
//@ts-ignore
import Cookies from 'js-cookie'
import { isEmpty_util } from '@/util'
import { EGANOW_AUTH_COOKIE, HTTP_ERROR_CODES } from '@/constants'
import Router from 'next/router' // ✅ Use Router directly

// ✅ Function to get the token
const getAuthToken = () => {
  const token = Cookies.get(EGANOW_AUTH_COOKIE)
  if (!token) return '' // Return empty string if token is missing
  try {
    return JSON.parse(token)?.accessToken || ''
  } catch (error) {
    console.error('Invalid token format:', error)
    return ''
  }
}


// ✅ Create the Axios instance
const axiosBizCollectInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ✅ Attach token dynamically before every request
axiosBizCollectInstance.interceptors.request.use((config) => {
  const token = getAuthToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ✅ Handle unauthorized response
axiosBizCollectInstance.interceptors.response.use(
  (response) => response?.data,
  async (error) => {
    if (error?.response?.status === HTTP_ERROR_CODES.UNAUTHORIZED) {
      await Router.push('/login') // ✅ Redirect on unauthorized access
    }
    return Promise.reject(error)
  }
)

// ✅ Export the instance
export default axiosBizCollectInstance
