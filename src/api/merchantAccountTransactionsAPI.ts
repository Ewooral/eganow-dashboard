
import BizCollectInstance from '@/apiInstances/biz-collect-instance'

export default function fetchTransactions (){
    const axios = BizCollectInstance()
    
    return {
        getTransactions : (data:any)=>axios.post('/api/v1/merchant-transactions/account',data),
        
        getMerchantServices : ()=>axios.get('/api/v1/merchant-transactions/services'),

    }
}