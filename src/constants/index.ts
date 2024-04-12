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

export const URL = 'https://merchant-web-proxy.uat.egadevapi.com/'
//export const URL = 'http://192.168.1.42:1444'

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

export const RPC_ERROR = {
  OK: '0',
  CANCELED: '1',
  UNKNOWN: '2',
  INVALID_ARGUMENT: '3',
  DEADLINE_EXCEEDED: '4',
  NOT_FOUND: '5',
  ALREADY_EXISTS: '6',
  PERMISSION_DENIED: '7',
  RESOURCE_EXHAUSTED: '8',
  FAILED_PRECONDITION: '9',
  ABORTED: '10',
  OUT_OF_RANGE: '11',
  UNIMPLEMENTED: '12',
  INTERNAL: '13',
  UNAVAILABLE: '14',
  DATA_LOSS: '15',
  UNAUTHENTICATED: '16',
}


