import { useEffect } from 'react'
import router from 'next/router'
import { useCustomerInfoStore } from 'src/store'

export default function useUserAuth({ redirectTo = '/login' } = {}) {
  const customerInfo = useCustomerInfoStore((state) => state.customerInfo)

  useEffect(() => {
    // Redirect if the user is not fully authenticated.
    if (!customerInfo?.issuccess || customerInfo.messagesuccessfulorfailed !== 'SUCCESSFUL') {
      router.push(redirectTo)
    }
  }, [customerInfo, redirectTo])

  return { customerInfo }
}
