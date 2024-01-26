import { ReactElement, ReactNode } from 'react'
/* React query  */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
/* Next */
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
/* Styles */
import '@/styles/style.scss'
/* Global loader */
import Snackbar from '@/components/Snackbar'
/* Types */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
/*
 *
 * App
 *
 */
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Eganow | Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <Snackbar />
    </QueryClientProvider>
  )
}
