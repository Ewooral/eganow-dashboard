// @ts-nocheck
import Numeral from 'numeral'
import { format } from 'date-fns'
import { Children } from 'react'
import {AxiosErrorType} from "@/types/Errors";

/**
 * Capitalize first letter
 * @param  {String} string
 * @return {int}  The converted strings
 */
export const capitalizeFirstLetter_util = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Capitalize first letter of word
 * @param  {String} string
 * @return {int}  The converted strings
 */
export const capitalizeFirstLetterOfWords_util = (string: string) => {
  //split string into an array of strings on blank spaces
  const arr = string.split(' ')
  //loop through each element of the array and capitalize the first letter.
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  //Return output
  return arr.join(' ')
}

/**
 * Camel Case Split to words.
 * @param  {String} string
 * @return {int}  The converted strings
 */
export const camelCaseSplit_util = (string: string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}

/**
 * Camel Case Split to words.
 * @param  {String} string
 * @return {int}  The converted strings
 */
export const removeUnderscores_util = (string: string) => {
  return string?.replace(/_/g, ' ')
}

/**
 * Checking empty {}, [], '', undefined, null, NaN
 * @param  {String} field, The string value
 * @return {bool}  The value
 */
export const isEmpty_util = (value: any) => {
  //value === NaN ||.
  try {
    return (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    )
  } catch (e) {
    console.error(e)
  }
}

/**
 * Format Date
 * @param  {string} data,
 * @param  {string} pattern,
 * @return {string}  The value
 */
export const formatDate_util = (date: string, pattern: string) => {
  try {
    if (!date) {
      return
    }

    return format(new Date(date), pattern)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Format Number
 * @param  {number | string} value The data object
 * @param  {string} pattern The path
 * @return {string}  The value
 */
export const formatNumber_util = (value: number | string, pattern: string): string => {
  return Numeral(value).format(pattern)
}

/**
 * Getting value from a data object by path
 * @param  {number | string} value The data object
 * @param  {string} pattern The path
 * @return {string}  The value
 */
export const formatMoney_util = (value: number | string, pattern: string): string => {
  return Numeral(value).format(pattern)
}

/**
 * Camel Case Split to words.
 * @param  {number} string
 * @return {DoubleRange}  The conveted strings
 */
export const roundToNearest_util = (num: number, decimals: number) => {
  decimals = decimals || 0
  const p = Math.pow(10, decimals)
  const n = num * p * (1 + Number.EPSILON)
  return Math.round(n) / p
}

/**
 * Status Type.
 * @param  {string} status
 * @return {string}  The conveted strings
 */
export const statusType_util = (status: string): string => {
  switch (status) {
    case 'SUCCESSFUL':
      return 'success'
    case 'PENDING':
      return 'warning'
    case 'FAILED ':
      return 'danger'

    case 'PRINTED':
      return 'info'
    case 'PRINTING':
      return 'light'
    case 'DELIVERED':
      return 'success'

    default:
      return 'danger'
  }
}

/**
 * Read File As Uint8Array.
 * @param  {file} file
 * @return {Promise}
 */
export const readFileAsUint8Array_util = (file: File): Promise<Uint8Array> => {
  return new Promise<Uint8Array>((resolve, reject) => {
    const fr = new FileReader()
    fr.onerror = (e): void => {
      reject(fr.error)
    }

    if (fr.readAsBinaryString) {
      fr.onload = (e): void => {
        const rs = (fr as any).resultString
        const str: string = rs != null ? rs : fr.result
        const result = new Uint8Array(str.length)
        for (let i = 0; i < str.length; i++) {
          result[i] = str.charCodeAt(i)
        }
        resolve(result)
      }
      fr.readAsBinaryString(file)
    } else {
      fr.onload = (e): void => {
        resolve(new Uint8Array(fr.result as ArrayBuffer))
      }
      fr.readAsArrayBuffer(file)
    }
  })
}

/**
 * Excel File Input Type.
 * @param  {function} callback
 * @return {Promise}
 */
export const excelFileInput_util = (callback: () => Promise<void>) => {
  const fileInputType = document.createElement('input')
  fileInputType.setAttribute('type', 'file')
  fileInputType.setAttribute(
    'accept',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
  )

  if (document.createEvent) {
    //for the sake of browser compatibility
    const event = document.createEvent('MouseEvents')
    event.initEvent('click', true, true)
    fileInputType.dispatchEvent(event)
  } else {
    fileInputType.click()
  }

  fileInputType.addEventListener('change', callback, false)
}

/**
 * Dynamic file download.
 * @param  {string} path
 * @param  {string} fileName
 * @return {void}
 */
export const fileDownload_util = async (path: string, fileName: string) => {
  const response = await fetch(path)

  if (response.status !== 200) {
    console.error(response.status, response.statusText)
  }

  const blob = await response.blob()
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', fileName)
  link.click()
}

/**
 * get max value in an object
 * @param {object} data
 */
export const getMaxValueKey = (data: object) => {
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return null
  }
  const entries = Object?.entries(data)

  const [maxKey] = entries.reduce(
    (acc, [key, value]) => {
      return value > acc[1] ? [key, value] : acc
    },
    [null, -Infinity],
  )

  return maxKey
}

/**
 * @param {enum} obj
 * @param {int} n
 * This function removes separate a string
 */
export function formatEnum_util(obj: any, n: number) {
  const newObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const keyArray = key.split('_') // Split the key into an array of characters
      keyArray.splice(0, n) // Remove the first n characters
      const newKey = keyArray.join(' ') // Join the characters back into a string
      const textCase = newKey.toLowerCase()
      newObj[textCase] = obj[key]
    }
  }

  return newObj
}

/**
 * @param {obj}
 * this function flips swaps the key and value in an object
 */
export function flipObject_util(obj) {
  const flippedObj = {}
  for (const key in obj) {
    const value = obj[key]
    flippedObj[value] = key
  }
  return flippedObj
}

/**
 * Utility function to create an initials string.
 * It takes the first character of each of the first four names,
 * converts them to uppercase, and combines them into a single string.
 *
 * @param {...string} args - The names of the users.
 * @returns {string} The combined initials string.
 */
// This utility function takes one or more strings as arguments and returns the initials.
export function getInitialsForAvatar_util(number = 2, ...args: string[]): string {
  // Join all arguments into a single string and split it into words.
  // This allows the function to handle multiple arguments as well as a single argument with multiple words.
  const words = args.join(' ').split(' ')
  // Limit to the first four words.
  // This is because we only want up to four initials.
  const names = words.slice(0, number)
  // Get the first letter of each name and capitalize it.
  // We use map to apply this operation to each name.
  const initials = names.map((name) => {
    // If the name is an empty string, we return an empty string.
    // This handles the case where an argument is an empty string or multiple spaces.
    if (!name) return ''
    return name.charAt(0).toUpperCase()
  })
  // Join the initials into a single string and return it.
  // This is the final result of the function.
  return initials.join('')
}

/**
 * Getting value from a data object by path
 * @param  {Object} The path
 * @return {Sting} The value
 */
export const queryString_util = (obj) => {
  return Object.keys(obj)
    .map((key) => {
      //Getting input variable
      let param = obj[key]
      //If the type of data is a string
      if (typeof param == 'string') {
        param = param.trim()
      }
      //Return
      return encodeURIComponent(key) + '=' + encodeURIComponent(param)
    })
    .join('&')
}

/**
 * Getting the value of a select input field
 * @param  {String} field, The string value
 * @param  {String} field, The string value
 * @return {bool}  The value
 */
export const getSelected_util = (arr, key = 'value', value) => {
  return isEmpty_util(value) ? '' : arr.find((element) => element[key] === value)
}

/**
 * Getting the value of a select input field
 * @param  {String} id, The string value
 * @param  {Array} array, The string value
 * @return {String}  The value
 */
export const getNameById_util = (id: string, array: []): string => {
  const result: { id: string; name: string } = array?.find((item: { id: string; name: string }) => item.id === id)
  return result ? result?.name : null
}
/**
 * Getting the value of a select input field
 * @param  {String} value, The string value
 * @param  {Array} array, The string value
 * @return {String}  The value
 */
export const getIdByValue_util = (value: string, array: []): string => {
  const result: { id: string; value: string; label: string} = array?.find(
    (item: { id: string; value: string; label: string }) => item.value === value,
  )
  return result?.id
}

export const  toDataUrl_util = (url, callback)=> {
  var xhr = new XMLHttpRequest()
  xhr.onload = function () {
    var reader = new FileReader()
    reader.onloadend = function () {
      callback(reader.result)
    }
    reader.readAsDataURL(xhr.response)
  }
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.send()
}



export function RoundValue(value: number){
  return Math.round(value * 100) / 100
}




/**
 * Extracts a meaningful error message from AxiosError.
 * - Handles different response formats.
 * - Catches network errors when no response is received.
 */
export const handleAxiosError = (error: AxiosErrorType): string => {
  if (error.response) {
    const { data, status, statusText } = error.response;

    // Case 1: API provides a direct error message
    if (data?.message) return `${data.message}`;

    // Case 2: API returns multiple errors in an `errors` object
    if (data?.errors) {
      return Object.entries(data.errors)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join("\n");
    }

    // Case 3: API does not provide a message but has a status
    return `Error ${status}: ${statusText || "Something went wrong."}`;
  }

  // Case 4: Network error (no response)
  if (error.request) {
    return "Network error: Unable to reach the server. Please check your connection.";
  }

  // Case 5: Unknown error
  return error.message || "An unexpected error occurred.";
};


// Functions to Clear LocalStorage & Cookies
export const clearLocalStorage = () => {
  localStorage.clear();
  console.log("✅ LocalStorage cleared!");
};

export const clearCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    document.cookie = cookie
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
  });
  console.log("✅ Cookies cleared!");
};
