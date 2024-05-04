import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const path = request.nextUrl.pathname

  const publicPath = path === "/login"

  const token = request.cookies.get('token')?.value || ""

  if (publicPath && token) {
    return NextResponse.redirect(new URL('/service-upload', request.url))
  }
  if (!publicPath&& !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}


export const config = {
  matcher: ['/service-upload','/login','/blog-upload'
  ]
}