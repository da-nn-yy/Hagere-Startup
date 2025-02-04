import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {auth, signIn, signOut ,} from '@/auth'

const Navbar = async () => {
    const session = await auth();
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
            <Link href ='/'>
                <Image src='/next.svg' alt='logo' width={100} height={30} />
            </Link>
        <div className='flex items-center gap-5 text-black'>
            {session && session ? (
                <>
                    <Link href='startup/create'>
                        <span>Create</span>
                    </Link>
                    <button onClick={signOut}>
                        <span>Logout</span>
                    </button>
                    <Link href={`/user/${session.user?.id}`}>
                        <span>{session.user?.name}</span>
                    </Link>
                </>
            ):(
                <button onClick={async () => {
                    'use server'
                    await signIn('github')

                    }}>
                    <span>Login</span>
                </button>
                // .......it works with the form tag to
                // <form action = {async () => {
                //     'use server'
                //     await signIn('github');
                // }}>
                //     <button type='submit'>
                //         Login
                //     </button>
                // </form> .............
            )}
        </div>
        </nav>
  </div>
  )
}

export default Navbar
