// @ts-nocheck
// import { MerchantStringValue } from './../protos/generated/eganow/api/merchant/common_pb.d';
import { MerchantCommonSvcClient } from '../protos/generated/eganow/api/merchant/Common_serviceServiceClientPb'
import { grpc } from '@improbable-eng/grpc-web'
import { URL } from '@/constants'
import { Metadata } from '@/helpers'
import {
  MerchantEmpty,
  MerchantStringValue,
} from '../protos/generated/eganow/api/merchant/common_pb'

const MerchantCommonSvc = () => {
  const client = new MerchantCommonSvcClient(URL, {
    transport: `${grpc.CrossBrowserHttpTransport({ withCredentials: false })}`,
  })

  const metadata = Metadata()

  //get business sector function
  function getBusinessSectors() {
    try {
      const request = new MerchantEmpty()

      return new Promise((resolve, reject) => {
        client.getBusinessSectors(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  //get business regulators function
  function getBusinessRegulators() {
    try {
      const request = new MerchantEmpty()

      return new Promise((resolve, reject) => {
        client.getActiveRegulators(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  //get business industries function
  function getBusinessIndustries(params) {
    try {
      const request = new MerchantStringValue()

      request.setValue(params)
      return new Promise((resolve, reject) => {
        client.getActiveIndustries(request, metadata, (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    getBusinessSectors,
    getBusinessRegulators,
    getBusinessIndustries,
  }
}

export default MerchantCommonSvc
