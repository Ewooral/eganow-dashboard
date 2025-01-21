import AxiosInstance from '@/axios-instance'
/* import { queryString_util } from '@/util' */

export default function merchantDocumentsAPI() {
  const axios = AxiosInstance()

  return {
    listBusinessDocuments: () => axios.get('/api/v1/onboarding/merchants/accounts/documents'),
    addBusinessDocument: (param: any) =>
      axios.postForm('/api/v1/onboarding/merchants/accounts/documents', param),
    deleteBusinessDocument: (id: string) =>
      axios.delete(`/api/v1/onboarding/merchants/accounts/documents/${id}`),
  }
}
