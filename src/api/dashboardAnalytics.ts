import BizCollectInstance from '@/apiInstances/biz-collect-instance'
import { CredentialsType } from '@/types/CredentialsType'
import axiosBizCollectInstance from "@/apiInstances/axiosInstance";
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



export const fetchDashboardData = async (filters: Record<string, any>) => {
  try {
    const response = await axiosBizCollectInstance.get<BizCollectDashboardData>(
      '/api/v1/merchant-transactions/dashboard',
      {
        params: { ...filters },
      }
    )
    // console.log('✅ Response:', response.data)
    return response.data
  } catch (error) {
    const errorMessage = handleAxiosError(error as AxiosErrorType)
    console.error('❌ Error fetching dashboard analytics:', errorMessage)
    throw new Error(errorMessage || 'Failed to fetch dashboard analytics')
  }
}
