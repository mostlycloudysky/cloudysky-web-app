import React from 'react'
import Link from 'next/link'
import { SunIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';
import cn from 'classnames';

interface Props {
  href: string,
  text: string
}

function NavItem({href, text}: Props) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link 
      href={href}
      className={cn(isActive ? 'font-semibold text-green-600': ' font-normal', 'text-gray-700 cursor-pointer hover:text-green-600')} >
      <span className="">{text}</span>
    </Link>
  )
}

function Header() {
  const router = useRouter();
  return (
    <>
     <header className='flex items-center justify-between pl-5 pt-5 pb-2 pr-5'>
        <div className='flex items-center space-x-5 flex-shrink-0 py-5'>
          <NavItem href='/' text='Home' />
          <NavItem href='/blogs' text='Blogs' />
          <NavItem href='/snippets' text='Snippets' />
          <NavItem href='/visitor' text='Visitors Log' />   
        </div>
        <div className='flex items-center space-x-4'>
          <h3 className=' border px-3 rounded-full py-1  cursor-pointer  border-green-600 text-green-600 hover:bg-green-600 hover:text-white  '>Getting Started</h3>
          <SunIcon className='h-6 w-6 text-yellow-500' />
        </div>
    </header>
    <div className='border-b-[1px] border-muted ml-5 mr-5'></div>
    </>
   
  )
}

export default Header
