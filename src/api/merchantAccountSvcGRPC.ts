//// @ts-nocheck
import { grpc } from '@improbable-eng/grpc-web'
import { URL } from '@/constants'
import { MerchantAccountSvcClient } from '@/protos/generated/eganow/api/merchant/Account_serviceServiceClientPb'
import { Metadata } from '@/helpers'
import { MerchantEmpty } from '@/protos/generated/eganow/api/merchant/common_pb'
import {
  AddBusinessContactInfoRequest,
  AddBusinessContactPersonRequest,
  UpdateBusinessContactInfoRequest,
  UpdateBusinessContactPersonRequest,
  UpdateBusinessInfoRequest,
} from '@/protos/generated/eganow/api/merchant/account_payload_pb'

import { MerchantIntValue } from '@/protos/generated/eganow/api/merchant/common_pb'
import { BusinessLicenseInfo } from '@/protos/generated/eganow/api/merchant/account_payload_pb'

const MerchantAccountSvc = () => {
  const client = new MerchantAccountSvcClient(URL, {
    transport: `${grpc.CrossBrowserHttpTransport({ withCredentials: false })}`,
  })

  const metadata = Metadata()

  //get business info function
  function getBusinessInfo() {
    try {
      const request = new MerchantEmpty()

      return new Promise((resolve, reject) => {
        client.getBusinessInfo(request, metadata, (err, res) => {
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
  function updateBusinessInfo(params) {
    try {
      const request = new UpdateBusinessInfoRequest()

      console.log(params);
      

      request.setCompanyRegistrationNumber(params.registrationNumber)
      request.setCompanyRegistrationType(params.registrationType)
      request.setDateOfIncorporation(params.dateOfIncorporation)
      request.setIndustryId(params.industryId)
      request.setEmail(params.registeredEmail)
      request.setName(params.businessName)
      request.setVatNumber(params.vatNumber)
      request.setTradingName(params.tradingName)
      request.setRegulatorId(params.regulatorId)
      request.setTaxIdentificationNumber(params.taxIdentificationNumber)

      const licenseInfo = new BusinessLicenseInfo()
      licenseInfo.setLicenseNumber(params.licenseNumber)
      licenseInfo.setIssuedDate(params.licenseIssueDate)
      licenseInfo.setExpiryDate(params.licenseExpiryDate)
      request.setLicenseInfo(licenseInfo)

      return new Promise((resolve, reject) => {
        client.updateBusinessInfo(request, metadata, (err, res) => {
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

  //list business contact persons function
  function listBusinessContactPersons() {
    try {
      const request = new MerchantEmpty()

      return new Promise((resolve, reject) => {
        client.listBusinessContactPersons(request, metadata, (err, res) => {
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

  function addBusinessContactPerson(params) {
    try {
      const request = new AddBusinessContactPersonRequest()

      request.setEmail(params.email)
      request.setFirstName(params.firstName)
      request.setLastName(params.lastName)
      request.setMobileNumber(params.mobileNumber)
      request.setPosition(+params?.position)

      return new Promise((resolve, reject) => {
        client.addBusinessContactPerson(request, metadata, (err, res) => {
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

  function updateBusinessContactPerson(params) {
    try {
      const request = new UpdateBusinessContactPersonRequest()

      request.setContactId(params.contactId)
      request.setEmail(params.email)
      request.setFirstName(params.firstName)
      request.setLastName(params.lastName)
      request.setMobileNumber(params.mobileNumber)
      request.setPosition(+params?.position)

      return new Promise((resolve, reject) => {
        client.updateBusinessContactPerson(request, metadata, (err, res) => {
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
  function deleteBusinessContactPerson(params) {
    try {
      const request = new MerchantIntValue()

      request.setValue(params)

      return new Promise((resolve, reject) => {
        client.deleteBusinessContactPerson(request, metadata, (err, res) => {
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
    getBusinessInfo,
    listBusinessContactPersons,
    addBusinessContactPerson,
    updateBusinessContactPerson,
    deleteBusinessContactPerson,
    updateBusinessInfo,
  }
}

export default MerchantAccountSvc
