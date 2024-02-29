
export const NUMBER_ONLY_REGEX = /^[0-9]+$/
export const PASSWORD_REGEX =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

/* 
  export const URL = 'https://egamaingrpcapiforeganowappsv1.azurewebsites.net/'
  export const METADATA = {
    eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
    eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
  }
  export const EGANOW_AUTH_COOKIE_NAME = 'eganow_customer_auth'
 */


  export const URL = 'http://185-3-92-47.ip.linodeusercontent.com:80/'
  //export const URL = 'http://192.168.10.54:8443/'
  
 /*  export const METADATA = {
    eganowappcustkey: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
    eganowapppassword: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word',
  } */

  export const CREDENTIALS = {
    username: 'eganow-frontend-basic-auth',
    password: '$2y$05$euG38IcdFlmIUANhsGLhqu.9BpygYTL0aWJUW3z3ZW//gJddE4e5C',
  }
  export const EGANOW_AUTH_COOKIE = 'eganow_customer_auth'
  export const EGANOW_REMEMBER_ME_COOKIE = 'eganow_remember_me'
