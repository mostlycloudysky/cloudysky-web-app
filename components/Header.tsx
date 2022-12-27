import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import cn from 'classnames';
import {SunIcon} from '@heroicons/react/solid'
import {MoonIcon} from '@heroicons/react/solid'
import {useTheme} from 'next-themes'
import {useState, useEffect} from 'react'
import SpotifyPlaying from './SpotifyPlaying';

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
      className={cn(isActive ? 'font-semibold text-lg text-green-600 border-b-4 border-green-600' : ' font-normal, text-gray-600 cursor-pointer  hover:text-green-600')} >
      <span className="">{text}</span>
    </Link>
  )
}

function Header() {
  
// Dark mode toggle code
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
      setMounted(true)
  }, [])

  const renderThemeChanger = () => {
      const currentTheme = theme === 'system' ? systemTheme : theme
      if (!mounted) return null;

      if (currentTheme === 'dark') {
          return (
              <div className='flex cursor-pointer items-center'>
                  <h2 className='text-md font-mono font-semibold uppercase tracking-tighter dark:text-gray-50'>
                    <SunIcon
                        className='ml-1 inline-block h-8 w-8 text-amber-400 animate-wiggle'
                        onClick={() => setTheme('light')}
                    />
                  </h2>
              </div>
          )
      } else {
        return (
            <div className='flex cursor-pointer items-center'>
                <h2 className='text-md font-mono font-semibold uppercase tracking-tighter text-slate-500'>
                  <MoonIcon
                      className='ml-1 inline-block h-8 w-8 text-gray-600 animate-wiggle-reverse'
                      onClick={() => setTheme('dark')}
                  />
                </h2>
            </div>
        )
      }
  }

  // Dark mode toggle code ends here
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
            <SpotifyPlaying text='Playlist' />
          <div>{renderThemeChanger()}</div>
        </div>
    </header>
      <div className='border-b-[1px] border-muted ml-5 mr-5'></div>
    </>
   
  )
}

export default Header
