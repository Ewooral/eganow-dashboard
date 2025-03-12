import BizCollectInstance from '@/apiInstances/biz-collect-instance'
import { CredentialsType } from '@/types/CredentialsType'
import  {getAxiosInstance} from "@/apiInstances/axiosInstance";
import {BizCollectDashboardData} from "@/types/BizCollectDataTypes";
import {AxiosError} from "axios";
import {handleAxiosError} from "@/util";
import {AxiosErrorType} from "@/types/Errors";

export default function dashboardAnalytics (){
    const axios = BizCollectInstance()
    return {
        getDashboard : ()=>axios.get('/api/v1/merchant-transactions/dashboard')
    }
}



// export const fetchDashboardData = async (filters: Record<string, any>) => {
//   try {
//     const response = await axiosBizCollectInstance.get<BizCollectDashboardData>(
//       '/api/v1/merchant-transactions/dashboard',
//       {
//         params: { ...filters },
//       }
//     )
//     // console.log('✅ Response:', response.data)
//     return response.data
//   } catch (error) {
//     const errorMessage = handleAxiosError(error as AxiosErrorType)
//     console.error('❌ Error fetching dashboard analytics:', errorMessage)
//     throw new Error(errorMessage || 'Failed to fetch dashboard analytics')
//   }
// }




// Function to fetch services
export async function fetchServices() {
  const instance = getAxiosInstance()
  const response = await instance.get("/api/v1/merchant-transactions/services")
  return response.data
}

// Function to fetch dashboard data
export async function fetchDashboardData(filters: { service: string | null; startDate?: string; endDate?: string }) {
  if (!filters.service) {
    throw new Error("Service ID is required")
  }

  const instance = getAxiosInstance()

  // Build query parameters
  const params = new URLSearchParams()

  // Add service ID
  params.append("service", filters.service)

  // Add date range if provided
  if (filters.startDate) {
    params.append("startDate", filters.startDate)
  }

  if (filters.endDate) {
    params.append("endDate", filters.endDate)
  }

  const url = `/api/v1/merchant-transactions/dashboard?${params.toString()}`
  const response = await instance.get(url)
  return response.data
}

// Function to normalize dashboard data - simplified to use response directly
export function normalizeData(apiResponse: any): BizCollectDashboardData {
  // Extract the actual data from the nested structure
  const data = apiResponse?.data || {}

  console.log("Raw API response data:", data)

  // Only do minimal transformations to ensure progressType is lowercase
  if (data.monthlyBalance) {
    // Convert progressType to lowercase if it exists
    if (data.monthlyBalance.collection?.progressType) {
      data.monthlyBalance.collection.progressType = data.monthlyBalance.collection.progressType
    }
    if (data.monthlyBalance.payout?.progressType) {
      data.monthlyBalance.payout.progressType = data.monthlyBalance.payout.progressType
    }
    if (data.monthlyBalance.commission?.progressType) {
      data.monthlyBalance.commission.progressType = data.monthlyBalance.commission.progressType
    }
    if (data.monthlyBalance.totalSettlements?.progressType) {
      data.monthlyBalance.totalSettlements.progressType =
        data.monthlyBalance.totalSettlements.progressType
    }
  }

  // Return the data directly
  return data as BizCollectDashboardData
}

