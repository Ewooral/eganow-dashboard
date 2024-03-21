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
