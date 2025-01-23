import axiosInstance from "@/apiInstances/axiosInstance";
import {ApiResponse} from "@/types/BizCollectDataTypes";
import axios from "axios";


const API_ENDPOINT = "api/v1/merchant-transactions/account"
export   const fetchTransactions = async (data: any) => {
  try {
    const response = await axiosInstance.post<ApiResponse>(API_ENDPOINT, data)
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.response?.data)
    } else {
      console.error("Unexpected error:", err)
    }
    return {data: []}
  }
}
