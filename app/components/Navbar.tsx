import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href ='/'>
            <Image src='/next.svg' alt='logo' width={100} height={30} />
        </Link>
        </nav>

    </div>
  )
}

export default Navbar
