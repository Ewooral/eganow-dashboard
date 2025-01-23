import BizCollectInstance from '@/apiInstances/biz-collect-instance'
import { CredentialsType } from '@/types/CredentialsType'

export default function dashboardAnalytics (){
    const axios = BizCollectInstance()
    return {
        getDashboard : ()=>axios.get('/api/v1/merchant-transactions/dashboard')
    }
}