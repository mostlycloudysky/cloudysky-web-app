import React from 'react'
import Link from 'next/link'
import { BeakerIcon, SunIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';


function Header() {
  const router = useRouter();
  return (
    <>
     <header className='flex items-center justify-between pl-5 pt-5 pb-2 pr-5'>
        <div className='flex items-center space-x-5 flex-shrink-0 py-5'>
          <Link href='/' className='text-gray-700 cursor-pointer hover:text-green-600'>Home</Link>
          <Link href='/blogs' className='text-gray-700 hover:text-green-600 cursor-pointer'>Blogs</Link>
          <Link href='/snippets' className='text-gray-700 hover:text-green-600 cursor-pointer'>Snippets</Link>
          <Link href='/visitor' className='text-gray-700 hover:text-green-600 cursor-pointer'>Visitors Log</Link>
        </div>
        <div className='flex items-center space-x-4'>
          <h3 className=' border px-3 rounded-full py-1  cursor-pointer  border-green-600 text-green-600 hover:bg-green-600 hover:text-white  '>Getting Started</h3>
          <SunIcon className='h-6 w-6 text-yellow-500' />
        </div>
      
      {/* </div> */}
    </header>
    <div className='border-b-[1px] border-muted ml-5 mr-5'></div>
    </>
   
  )
}

export default Header
