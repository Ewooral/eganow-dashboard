import { NextResponse, NextRequest } from 'next/server'
/* CONSTANTS */
import { EGANOW_AUTH_COOKIE } from '@/constants'
import { RequestCookie } from 'next/dist/server/web/spec-extension/cookies'

/*
*
*
  MIDDLEWARE
*
*
*/

export function middleware(request: NextRequest) {

  const accessToken = request.cookies.get("accessToken")?.value;
  console.log('token', accessToken)

  try {
    //Checking if the user is logged in.
    if (accessToken) {
      return NextResponse.next()
    }
    //If the user is not logged in then redirect to the login page.
    return NextResponse.redirect(new URL('/login', request.url))
  } catch (error) {
    //Logging error to console.
    console.error(error)
    //If the user is not logged in then redirect to the login page.
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

/* export const config = {
   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/'],
}
 */

export const config = {
  matcher: [
    '/',
    '/biz-collect/:path*',
    '/business-details/:path*',
  ],
}
