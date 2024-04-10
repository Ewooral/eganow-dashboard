// @ts-nocheck
import { grpc } from '@improbable-eng/grpc-web'
import { URL } from '@/constants'
import { MerchantAccountSvcClient } from '@/protos/generated/eganow/api/merchant/Account_serviceServiceClientPb'
import { Metadata } from '@/helpers'
import { MerchantEmpty, MerchantIntValue } from '@/protos/generated/eganow/api/merchant/common_pb'
import {
  AddBusinessContactInfoRequest,
  AddBusinessContactPersonRequest,
  AddDirectorShareholderRequest,
  UpdateBusinessContactInfoRequest,
  UpdateBusinessContactPersonRequest,
  UpdateBusinessInfoRequest,
  UpdateDirectorShareholderRequest,
  AddBusinessDocumentRequest
} from '@/protos/generated/eganow/api/merchant/account_payload_pb'

import { MerchantStringValue } from '@/protos/generated/eganow/api/merchant/common_pb'
import { BusinessLicenseInfo,DirectorShareholderIDInfo } from '@/protos/generated/eganow/api/merchant/account_payload_pb'
import { resolve } from 'path'


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

  //update business info function
  function updateBusinessInfo(params) {
    try {
      const request = new UpdateBusinessInfoRequest()

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

  //add business contact person function
  function addBusinessContactPerson(params) {
    try {
      const request = new AddBusinessContactPersonRequest()
      request.setEmail(params?.email)
      request.setFirstName(params?.firstName)
      request.setLastName(params?.lastName)
      request.setMobileNumber(params?.mobileNumber)
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

  //edit business contact person function
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

  //delete business contact person function
  function deleteBusinessContactPerson(params) {
    try {
      const request = new MerchantStringValue()

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

  // ADDING BUSINESS CONTACT INFO
  function addBusinessContactInfo(params){
    try {
      const request = new AddBusinessContactInfoRequest()
      request.setStreetAddress(params.streetAddress);
      request.setCity(params.city);
      request.setProvinceState(params.state);
      request.setPostalZipCode(params.postalCode);
      request.setDigitalAddress(params.digitalAddress);
      request.setPostalAddress(params.postalAddress);
      request.setOfficeOwnership(+params.officeOwnership)
      request.setFirstOccupancyDate(params.firstOccupancyDate);
      request.setOfficeMobileNumber(params.officeMobileNumber);


      return new Promise((resolve,reject)=>{
        client.addBusinessContactInfo(request,metadata,(err,res)=> {
          if(err){
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }


  // UPDATING BUSINESS CONTACT INFO 
  function updateBusinessContactInfo(params){
    try {
      const request = new UpdateBusinessContactInfoRequest();
      request.setStreetAddress(params.streetAddress);
      request.setCity(params.city);
      request.setProvinceState(params.state);
      request.setPostalZipCode(params.postalCode);
      request.setDigitalAddress(params.digitalAddress);
      request.setPostalAddress(params.postalAddress);
      request.setOfficeOwnership(+params.officeOwnership)
      request.setFirstOccupancyDate(params.firstOccupancyDate);
      request.setOfficeMobileNumber(params.officeMobileNumber);

      return new Promise((resolve,reject)=>{
        client.updateBusinessContactInfo(request,metadata,(err,res)=>{
          if(err){
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
        throw new Error(error)
    }
  }


  // GETTING BUSINESS CONTACT INFO
  function getBusinessContactInfo(){
    try {
      const request  = new MerchantEmpty();

      return new Promise((resolve,reject)=>{
        client.getBusinessContactInfo(request,metadata,(err,res)=>{
          if(err){
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  // ADD DIRECTOR / SHAREHOLDER
  function addDirectorOrShareholder(params){
    
    try {
      
      const request = new AddDirectorShareholderRequest();
      const idInfo = new DirectorShareholderIDInfo()
      
      request.setEmail(params.emailAddress)
      request.setFirstName(params.firstName)
      request.setLastName(params.lastName)
      request.setMobileNumber(params.mobileNumber)
      request.setDirectorShareholderType(params.stakeHolderType)
      request.setPosition(params.position)

      idInfo.setIdNumber(params.idNumber)
      idInfo.setIdType(params.idType)
      idInfo.setPlaceOfIssue(params.placeOfIssue)
      idInfo.setIdExpiryDate(params.expiryDate)
      idInfo.setIdBackImage(params.backImage)
      idInfo.setIdFrontImage(params.frontImage)
      idInfo.setPortraitImage(params.portraitImage)
      
      request.setIdInfo(idInfo)      

      return new Promise((resolve,reject)=>{
        client.addDirectorShareholder(request,metadata,(err,res)=>{
          if(err){
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
        throw new Error(error)
    }
  }

  // ADD DIRECTOR / SHAREHOLDER
  function updateDirectorOrShareholder(params){
    try {
      const request = new UpdateDirectorShareholderRequest();
      const idInfo = new DirectorShareholderIDInfo()
      
      request.setEmail(params.emailAddress)
      request.setFirstName(params.firstName)
      request.setLastName(params.lastName)
      request.setMobileNumber(params.mobileNumber)
      request.setDirectorShareholderType(params.stakeHolderType)
      request.setPosition(params.position)
      request.setDirectorId(params.directorId)

      idInfo.setIdNumber(params.idNumber)
      idInfo.setIdType(params.idType)
      idInfo.setPlaceOfIssue(params.placeOfIssue)
      idInfo.setIdExpiryDate(params.expiryDate)

      idInfo.setIdBackImage(params.backImage.includes('https') ? null :params.backImage)
      idInfo.setIdFrontImage(params.frontImage.includes('https') ? null :params.frontImage)
      idInfo.setPortraitImage(params.portraitImage.includes('https') ? null : params.portraitImage )

      request.setIdInfo(idInfo)      
      
      return new Promise((resolve,reject)=>{
        client.updateDirectorShareholder(request,metadata,(err,res)=>{
          if(err){
            reject(err)
          }
          resolve(res?.toObject())
        })
      })
    } catch (error) {
        throw new Error(error)
    }
  }
  
 // GETTING DIRECTOS / SHAREHOLDERS LIST
 function getDirectorList(){
  try {
    const request  = new MerchantEmpty();

    return new Promise((resolve,reject)=>{
      client.listDirectorShareholders(request,metadata,(err,res)=>{
        if(err){
          reject(err)
        }
        resolve(res?.toObject())
      })
    })
  } catch (error) {
    throw new Error(error)
  }
}

// DELETE DIRECTOR 
function deleteDirector(params) {
  try {      
    const request = new MerchantStringValue()
    request.setValue(params)

    return new Promise((resolve, reject) => {
      client.deleteDirectorShareholder(request, metadata, (err, res) => {
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


 //list business documents
 function listBusinessDocuments() {
  try {
    const request = new MerchantEmpty()

    return new Promise((resolve, reject) => {
      client.listBusinessDocuments(request, metadata, (err, res) => {
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

//add business document
function addBusinessDocument(params) {
  try {
    const request = new AddBusinessDocumentRequest()

    request.setDocImage(params.document)
    request.setName(params.fileName)

    return new Promise((resolve, reject) => {
      client.addBusinessDocument(request, metadata, (err, res) => {
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

//delete business document
function deleteBusinessDocument(params) {
  try {
    const request = new MerchantIntValue()

    request.setValue(params)

    return new Promise((resolve, reject) => {
      client.deleteBusinessDocument(request, metadata, (err, res) => {
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
    addBusinessContactInfo,
    updateBusinessContactInfo,
    getBusinessContactInfo,
    listBusinessDocuments,
    addDirectorOrShareholder,
    getDirectorList,
    deleteDirector,
    updateDirectorOrShareholder,
    addBusinessDocument,
    deleteBusinessDocument
  }


}

export default MerchantAccountSvc
