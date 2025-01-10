import AxiosInstance from '@/axios-instance'
import { CredentialsType } from '@/types/CredentialsType'

export default function dashboardAnalytics (){
    const axios = AxiosInstance()
    return {
        getDashboard : ()=>axios.get('/api/dashboard')
    }
}