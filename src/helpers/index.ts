// @ts-nocheck
import { isEmpty_util } from '@/util'
import { CREDENTIALS, EGANOW_AUTH_COOKIE } from '@/constants'
import { useLocale } from '@/store'
/* HOOKS */
import { useCookies } from 'react-cookie'
import { log } from 'console'
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

export const generateOptions = (params) => {
  // Dont do anything if params is falsy
  if (!params) {
    return []
  }

  // Initialize an array to store the options
  let options = []

  // If params is an array
  if (Array.isArray(params)) {
    // Map each sector item to a new object with 'label' and 'value' properties
    options = params.map((item) => ({
      label: item.name,
      value: item.id,
    }))
  } else {
    // Convert object to array of objects
    const convertedArray = Object.entries(params).map(([name, id]) => ({
      id: parseInt(id),
      name: name.replace('_', ' '), // Replace underscores with spaces
    }))

    // Map each item to a new object with 'label' and 'value' properties
    options = convertedArray.map((item) => ({
      label: item.name,
      value: item.id,
    }))
  }
  if (options[0].label === 'UNKNOWN') {
    options.shift()
  }

  // Prepend "Select an option" to the beginning of the options array
  options.unshift({ label: 'Select an option', value: '' })

  return options
}
