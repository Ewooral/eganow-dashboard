// @ts-nocheck
import { grpc } from '@improbable-eng/grpc-web'
import { URL } from '@/constants'
import { CommonDataSvcClient } from '@/protos/generated/eganow/api/common/Shared_serviceServiceClientPb'
import {
  CountryFilter,
  GetCountriesRequest,
} from '@/protos/generated/eganow/api/common/shared_payload_pb'
import { Metadata } from '@/helpers'

const CommonDataSvc = () => {
  const client = new CommonDataSvcClient(URL, {
    transport: grpc.CrossBrowserHttpTransport({ withCredentials: false }),
  })

  const metadata = Metadata()

  function getCountries(param: { countryFilter: number }) {
    try {
      const request = new GetCountriesRequest()
      request.setFilter(+CountryFilter[param.countryFilter])

      return new Promise((resolve, reject) => {
        client.getCountries(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          //Setting countries to state
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return { getCountries }
}

export default CommonDataSvc
