import * as grpcWeb from 'grpc-web'
import { URL, METADATA } from '@/constants'
import { CommonDataSvcClient } from '@/protos/generated/CommonDataServiceClientPb'
import {
  EmptyCommonDataMessage,
  CountryListResponseMessage,
} from 'src/protos/generated/CommonData_pb'

const commonDataSvcGRPC = () => {
  const client = new CommonDataSvcClient(URL, null, null)
  /*  */
  function getReceivingOperatingCountries() {
    try {
      const request = new EmptyCommonDataMessage()

      return new Promise((resolve, reject) => {
        client.getReceivingOperatingCountries(
          request,
          METADATA,
          (err: grpcWeb.RpcError, response: CountryListResponseMessage) => {
            if (err) {
              reject(err)
            }
            //Construct the country object
            const countrylistArray = response?.toObject()
            //Setting countries to state
            resolve(countrylistArray)
          },
        )
      })
    } catch (error) {
      console.error(error)
    }
  }

  return { getReceivingOperatingCountries }
}

export default commonDataSvcGRPC
