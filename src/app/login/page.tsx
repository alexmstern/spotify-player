'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <button 
        onClick={() => signIn("spotify", {callbackUrl: '/'})}
        className='p-3 bg-gray-100 rounded-full hover:bg-gray-200'
      >
        Login with Spotify
      </button>
    </div>
  )
}

export default Login
