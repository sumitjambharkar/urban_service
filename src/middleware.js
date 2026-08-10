import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const path = request.nextUrl.pathname

  const publicPath = path === "/login"

  const token = request.cookies.get('refreshToken')?.value || ""

  if (publicPath && token) {
    const redirectTo = request.nextUrl.searchParams.get('redirect') || '/service-upload'
    return NextResponse.redirect(new URL(redirectTo, request.url))
  }
  if (!publicPath&& !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', path)
    return NextResponse.redirect(loginUrl)
  }
}


export const config = {
  matcher: ['/service-upload','/login','/blog-upload','/admin','/admin/:path*'
  ]
}