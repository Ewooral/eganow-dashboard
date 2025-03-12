// import axios from 'axios'
// //@ts-ignore
// import Cookies from 'js-cookie'
// import { isEmpty_util } from '@/util'
// import { EGANOW_AUTH_COOKIE, HTTP_ERROR_CODES } from '@/constants'
// import Router from 'next/router' // ✅ Use Router directly
//
// // ✅ Function to get the token
// const getAuthToken = () => {
//   const token = Cookies.get(EGANOW_AUTH_COOKIE)
//   if (!token) return '' // Return empty string if token is missing
//   try {
//     return JSON.parse(token)?.accessToken || ''
//   } catch (error) {
//     console.error('Invalid token format:', error)
//     return ''
//   }
// }
//
//
// // ✅ Create the Axios instance
// const axiosBizCollectInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//
// // ✅ Attach token dynamically before every request
// axiosBizCollectInstance.interceptors.request.use((config) => {
//   const token = getAuthToken()
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })
//
// // ✅ Handle unauthorized response
// axiosBizCollectInstance.interceptors.response.use(
//   (response) => response?.data,
//   async (error) => {
//     if (error?.response?.status === HTTP_ERROR_CODES.UNAUTHORIZED) {
//       await Router.push('/login') // ✅ Redirect on unauthorized access
//     }
//     return Promise.reject(error)
//   }
// )
//
// // ✅ Export the instance
// export default axiosBizCollectInstance


import axios from "axios"
import Cookies from "js-cookie"

// Create a function to get a fresh axios instance with the current token
export const getAxiosInstance = () => {
  // Get the token from cookies
  const token = Cookies.get("auth-token")

  return axios.create({
    baseURL: "https://business-gateway-api.core.uateganowapi.com",
    headers: {
      "Content-Type": "application/json",
      // Use the token if available
      authorization: token ? `Bearer ${token}` : "",
    },
  })
}

// Create a separate instance for authentication (uses Basic auth)
export const getAuthInstance = () => {
  // Define the credentials
  const USERNAME = "keY-a6ee91c7-493a-4e0d-814d-06919674cea1-Ey"
  const PASSWORD = "passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-Word"

  // Generate the base64 encoded auth string
  const authCredential = btoa(`${USERNAME}:${PASSWORD}`)

  return axios.create({
    baseURL: "https://business-gateway-api.core.uateganowapi.com",
    headers: {
      "Content-Type": "application/json",
      "x-country-code": "GH0233",
      "x-language-id": "en",
      "x-ega-user-access-token": "",
      authorization: `Basic ${authCredential}`,
    },
  })
}

// Function to login user
export const loginUser = async (email: string, password: string) => {
  const authInstance = getAuthInstance()

  try {
    console.log("Login request payload:", { email, password })

    const response = await authInstance.post("/api/v1/onboarding/auth/login", {
      email,
      password,
    })

    console.log("Login response:", response.data)
    return response.data
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

// Function to fetch services
export const fetchServices = async () => {
  const instance = getAxiosInstance()
  try {
    const response = await instance.get("/api/v1/merchant-transactions/services")
    return response.data
  } catch (error) {
    console.error("Error fetching services:", error)
    throw error
  }
}

// Function to fetch dashboard data
export const fetchDashboardData = async (serviceId: string) => {
  if (!serviceId) {
    throw new Error("Service ID is required")
  }

  const instance = getAxiosInstance()

  // Build query parameters
  const params = new URLSearchParams()
  params.append("service", serviceId)

  try {
    const url = `/api/v1/merchant-transactions/dashboard?${params.toString()}`
    const response = await instance.get(url)
    return response.data
  } catch (error) {
    console.error("Error fetching dashboard data:", error)
    throw error
  }
}

