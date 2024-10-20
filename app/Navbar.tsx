'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {status,data:session}=useSession();
  return (
    <div className='flex bg-slate-300 p-5'>
        <Link href='/'>Next js</Link>
        <Link href='/users'>Users</Link>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
        {status === 'authenticated' && <div>{session.user?.name}
          <Link href='/api/auth/signout'>Sign Out</Link>
        </div>}
    </div>
  )
}

export default Navbar