import { NextResponse, NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
 
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = request.nextUrl
 
  // If the user is authenticated or on login page, continue as normal
  if (token || pathname.includes('/api/auth')) {
    return NextResponse.next()
  }

  if (!token && pathname !== '/login') {
    return NextResponse.rewrite(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: '/',
}