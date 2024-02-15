 export type UserInfoType = {
  issuccess: boolean
  messagesuccessfulorfailed: string
  businessname: string
  countrycode: string
  customerid: string
  customerprofilepicimageurl: string
  emailaddress: string
  firstname: string
  kycdataenc: string
  languageid: string
  lastname: string
  loginerrorcode: string
  message: string
  mobilenumber: string
  operatingcountryyesno: string
  personalbusinessgroup: string
  personalbusinessgroupvalue: number
  userjwttoken: string
}


export type LoginInputType = {
  country: { code: string; name: string }
  username: string
  password: string
}
