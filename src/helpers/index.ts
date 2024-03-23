// @ts-nocheck
import { isEmpty_util } from '@/util'
import { CREDENTIALS, EGANOW_AUTH_COOKIE } from '@/constants'
import { useLocale } from '@/store'
/* HOOKS */
import { useCookies } from 'react-cookie'
/**
 *
 * @return {object}  The header object
 */
export const Metadata = () => {
  const { locale, country } = useLocale((state) => state)
  const [cookie] = useCookies([EGANOW_AUTH_COOKIE])

  const token = isEmpty_util(cookie?.eganow_customer_auth)
    ? ''
    : cookie?.eganow_customer_auth?.accessToken

  //passing the token to the header
  return {
    'x-country-code': country?.code,
    'x-language-id': locale,
    'x-ega-user-access-token': token,
    Authorization: `Basic ${btoa(`${CREDENTIALS.username}:${CREDENTIALS.password}`)}`,
  }
}

//function to create new object with 'label' and 'value' properties
export const generateOptions = (params) => {
  // if (!params) return  // Return an empty array if sectors is undefined or null
  if (!params) {
    return
  }
  if (Array.isArray(params)) {
    // Map each sector item to a new object with 'label' and 'value' properties
    return params?.map((item) => ({
      label: item.name,
      value: item.id,
    }))
  } else {
    // Map each sector item to a new object with 'label' and 'value' properties
    const convertedArray = Object?.entries(params).map(([name, id]) => ({
      id: id.toString(),
      name: name.replace('_', ' '),
    }))

    return convertedArray?.map((item) => ({
      label: item.name,
      value: item.id,
    }))
  }
}
