'use client'

import Sidebar from '@/components/Sidebar'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  
  return (
    // Current setup is for testing Spotify login
    // <div className='flex flex-col items-center justify-center h-screen'>
    //   <img 
    //     src={session?.user?.image || ''}
    //     alt={session?.user?.name || ''}
    //     className='rounded-full'
    //   />
    //   <h2>{session?.user?.name || ''}</h2>
    // </div>
    <div className='h-screen overflow-hidden'>
      <button onClick={() => signOut()}>
        LOG OUT
      </button>
      <Sidebar/>
    </div>
  )
}
