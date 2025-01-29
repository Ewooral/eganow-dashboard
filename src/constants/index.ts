export const NUMBER_ONLY_REGEX = /^[0-9]+$/
export const PASSWORD_REGEX =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

export const NOT_APPLICABLE = 'N/A'
export const PLACEHOLDER = '---- ----'
export const MONEY_FORMAT = '0,0.00'
export const NUMBER_FORMAT = '0,0.[00]'
export const DATE_FORMAT = 'dd-MM-yyyy' //'MMMM dd, yyyy'
export const CURRENCY = 'GHS'

export const URL = 'https://global-merchant-onboarding.core.uateganowapi.com'
export const CREDENTIALS = {
  username: 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-Ey',
  password: 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-Word',
}
export const EGANOW_AUTH_COOKIE = 'eganow_customer_auth'
export const EGANOW_REMEMBER_ME_COOKIE = 'eganow_remember_me'

export const HTTP_ERROR_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418, // Easter egg RFC 2324
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
}

export const ALL_DEFAULT_OPTION = [
  {
    id: 0,
    label: 'All',
    value: 'ALL',
  },
]

export const EMPTY_DEFAULT_OPTION = [
  {
    id: 0,
    label: 'Select an option',
    value: '',
  },
]

export const COMPANY_REGISTRATION_TYPE_OPTIONS = [
  {
    id: 1,
    label: 'Limited Liability',
    value: 'LIMITED_LIABILITY',
  },
  {
    id: 2,
    label: 'Public Liability',
    value: 'PUBLIC_LIABILITY',
  },
  {
    id: 3,
    label: 'Sole Proprietorship',
    value: 'SOLE_PROPRIETORSHIP',
  },
  {
    id: 4,
    label: 'Partnership',
    value: 'PARTNERSHIP',
  },
  {
    id: 5,
    label: 'Corporation',
    value: 'CORPORATION',
  },
  {
    id: 6,
    label: 'C Corporation',
    value: 'C_CORPORATION',
  },
  {
    id: 7,
    label: 'S Corporation',
    value: 'S_CORPORATION',
  },
  {
    id: 8,
    label: 'Joint Venture',
    value: 'JOINT_VENTURE',
  },
  {
    id: 9,
    label: 'Non Profit',
    value: 'NONPROFIT',
  },
]


// export const COMPANY_REGISTRATION_TYPE_OPTIONS = [
//   {
//     id: 1,
//     label: 'Business',
//     value: 'BUSINESS',
//   },
//   {
//     id: 2,
//     label: 'Personal',
//     value: 'PERSONAL',
//   },
//   {
//     id: 3,
//     label: 'Limited Liability',
//     value: 'LIMITED_LIABILITY',
//   },
// ]

export const DIRECTOR_POSITION_OPTIONS = [
  {
    id: 1,
    label: 'CEO',
    value: 'CEO',
  },
  {
    id: 2,
    label: 'Contact',
    value: 'CONTACT',
  },
  {
    id: 3,
    label: 'Director',
    value: 'DIRECTOR',
  },
  {
    id: 4,
    label: 'Director Shareholder',
    value: 'DIRECTOR_SHAREHOLDER',
  },
  {
    id: 5,
    label: 'Engineer',
    value: 'ENGINEER',
  },
  {
    id: 6,
    label: 'General Manager',
    value: 'GENERAL_MANAGER',
  },
  {
    id: 7,
    label: 'Management',
    value: 'MANAGEMENT',
  },
  {
    id: 8,
    label: 'MID',
    value: 'MID',
  },
  {
    id: 9,
    label: 'Sales Manager',
    value: 'SALES_MANAGER',
  },
  {
    id: 10,
    label: 'Shareholder',
    value: 'SHAREHOLDER',
  },
  {
    id: 11,
    label: 'Signatory',
    value: 'SIGNATORY',
  },
]

export const CUSTOMER_ID_TYPES_OPTIONS = [
  {
    id: 1,
    label: 'Bank Id',
    value: 'BANKID',
  },
  {
    id: 2,
    label: 'Drivers License',
    value: 'DRIVERS_LICENSE',
  },
  {
    id: 3,
    label: 'Id',
    value: 'ID',
  },
  {
    id: 4,
    label: 'Passport',
    value: 'PASSPORT',
  },
]

export const OFFICE_OWNERSHIP_OPTIONS = [
 {
    id: 1,
    label: 'Owned',
    value: 'OWNED',
  },
  {
    id: 2,
    label: 'Rent',
    value: 'RENT',
  },
  {
    id: 3,
    label: 'Leased',
    value: 'LEASED',
  },
]

export enum BusinessCustomerPortalStatus {
  BUSINESS_CUSTOMER_PORTAL_STATUS_UNKNOWN = 0,
  BUSINESS_CUSTOMER_PORTAL_STATUS_EDITING = 1,
  BUSINESS_CUSTOMER_PORTAL_STATUS_REVIEWING = 2,
  BUSINESS_CUSTOMER_PORTAL_STATUS_COMPLIANCE_PASSED = 3,
  BUSINESS_CUSTOMER_PORTAL_STATUS_ACTIVE = 4,
}

export enum DirectorOrShareholderOrOtherType {
  DIRECTOR_OR_SHAREHOLDER_OR_OTHER_TYPE_UNKNOWN = 0,
  DIRECTOR_OR_SHAREHOLDER_OR_OTHER_TYPE_CONTACT_PERSON = 1,
  DIRECTOR_OR_SHAREHOLDER_OR_OTHER_TYPE_DIRECTOR_SHAREHOLDER = 2,
}

export enum CustomerStatus {
  CUSTOMER_STATUS_UNKNOWN = 0,
  CUSTOMER_STATUS_ACTIVE = 1,
  CUSTOMER_STATUS_PENDING = 2,
}
