import React from 'react'
import Link from 'next/link'
import { BeakerIcon, SunIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='flex items-center justify-between p-5'>
      {/* <div className=' flex items-center space-x-5'> */}
        {/* <Link href='/'>
            <div className='flex items-center flex-shrink-0 py-5'>
              <img src='./developer.png' alt='logo' className='w-12 h-12 object-contain cursor-pointer' />   
              <span className='pl-2 font-bold text-black text-xl'>
                CloudyS.K.Y
              </span>
            </div>
        </Link> */}
        <div className='flex items-center space-x-5 flex-shrink-0 py-5'>
          <h3>Home</h3>
          <h3>Blogs</h3>
          <h3>Snippets</h3>
          <h3 className='border px-4 py-1 rounded-full border-green-600'>Visitors Log</h3>
        </div>
        <div className='flex items-center space-x-4'>
          <h1 className=' border px-4 py-1 rounded-full border-green-600'>Get Started</h1>
          <SunIcon className='h-6 w-6 text-yellow-500' />
        </div>
      {/* </div> */}
    </header>
  )
}

export default Header
