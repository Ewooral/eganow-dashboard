import React, { ReactElement, ReactNode } from 'react'
/*
LOCALE
 */
import { IntlProvider } from 'react-intl'
/* React query  */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
/* Next */
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
/* LOAD DEFAULT LOCALE */
import en from '@/i18n/en.json'
/* Styles */
import '@/styles/style.scss'
/* Global loader */
import Snackbar from '@/components/Snackbar'
/* QueryClient */
const queryClient = new QueryClient()
/*
 */
import { useLocale } from '@/store'
/* TYPE */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
/*
 *
 * Locale
 *
 */

function loadLocaleData(locale: string) {
  switch (locale) {
    case 'fr':
      return import('@/i18n/fr.json')
    default:
      return import('@/i18n/en.json')
  }
}
/*
 *
 * App
 *
 */

export default function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const [messages, setMessages] = React.useState(en)
  const locale = useLocale((state) => state.locale)

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await loadLocaleData(locale)
        //Setting the locale messages
        setMessages(res)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [locale])

  return (
    
    <IntlProvider messages={messages} locale={locale} defaultLocale="en">
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Eganow | Admin</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Component {...pageProps} />
          <Snackbar />
        </QueryClientProvider>
      </CookiesProvider>
    </IntlProvider>
  )
}
