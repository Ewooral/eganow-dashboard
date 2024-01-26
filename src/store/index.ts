// @ts-nocheck
import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
/* *************************************************************************** */
type state = {
  sidebarShow: boolean
  sidebarUnfoldable: boolean
  asideShow: boolean
  theme: string
  customerInfo: object
}

const customerDefaultInfo = {
  issuccess: false,
  messagesuccessfulorfailed: 'FAILED',
  message: 'Network or system error',
  customerid: '',
  mobilenumber: '',
  emailaddress: '',
  personalbusinessgroup: '',
  personalbusinessgroupvalue: 0,
  firstname: '',
  lastname: '',
  businessname: '',
  countrycode: '',
  languageid: '',
  operatingcountryyesno: '',
  customerprofilepicimageurl: '',
  userjwttoken: '',
  loginerrorcode: '',
  kycdataenc: '',
}
/* ************************************************************************************************* */
const customerInfo = (set) => ({
  customerInfo: customerDefaultInfo,
  setCustomerInfo: (data) => set(() => ({ customerInfo: data })),
  setLogOutUser: () => set(() => ({ customerInfo: customerDefaultInfo })),
})

export const useCustomerInfoStore = create(
  persist(customerInfo, {
    name: 'customer-info-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  }),
)
/* ************************************************************************************************* */

const ui = (set) => ({
  sidebarShow: true,
  sidebarUnfoldable: false,
  asideShow: false,
  theme: 'default',

  setUnfordable: (data: boolean) => set(() => ({ sidebarUnfoldable: data })),
  setSidebarShow: (data: boolean) => set(() => ({ sidebarShow: data })),
  setAsideShow: (data: boolean) => set(() => ({ asideShow: data })),
  setTheme: (type: string) => set(() => ({ theme: type })),
})

export const useUI = create(
  persist(ui, {
    name: 'ui-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  }),
)
/* ************************************************************************************************* */

const snackbarDefault: SnackbarDataType = {
  type: 'primary',
  title: '',
  messages: '',
  show: false,
}

export const useSnackbar = create((set) => ({
  data: snackbarDefault,

  showSnackbar: (data: any) => {
    return set(() => ({
      data: data,
    }))
  },
  closeSnackbar: () => set(() => ({ data: snackbarDefault })),
}))
/* ************************************************************************************************* */