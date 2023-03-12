import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import cn from 'classnames';
import {SunIcon} from '@heroicons/react/solid'
import {MoonIcon} from '@heroicons/react/solid'
import {useTheme} from 'next-themes'
import {useState, useEffect} from 'react'
import SpotifyPlaying from './SpotifyPlaying';
import MobileMenu from './MobileMenu';
import { FiAlignRight, FiX } from 'react-icons/fi';
FiAlignRight
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
      className={cn(isActive ? 'text-xl font-semibold text-green-600' : 'text-xl font-semibold text-gray-600 dark:text-gray-300 cursor-pointer dark:hover:text-green-600')} >
      <span className="">{text}</span>
    </Link>
  )
}

function Header() {

// Mobile menu code
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
// Dark mode toggle code
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
      setMounted(true)
  }, [])

  const renderThemeChanger = () => {
      const currentTheme = theme === 'system' ? 'dark' : theme
      if (!mounted) return null;

      if (currentTheme === 'dark') {
          return (
              <div className='flex cursor-pointer items-center'>
                  <h2 className='text-md font-mono font-semibold uppercase tracking-tighter dark:text-gray-50'>
                    <SunIcon
                        className='ml-1 inline-block h-8 w-8 text-gray-400 '
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
     <header className='flex items-center justify-between pl-5 pt-5  pr-5'>
        <div className='hidden md:flex items-center space-x-5 flex-shrink-0 py-5'>
          <NavItem href='/' text='Home' />
          <NavItem href='/blogs' text='Blogs' />
          <NavItem href='/snippets' text='Snippets' />
          {/* <NavItem href='/visitor' text='Visitors Log' />    */}
        </div>
        <div className='hidden  md:flex items-center space-x-4'>
            <SpotifyPlaying text='Playlist' />
          <div>{renderThemeChanger()}</div>
        </div>
        <button
          className="md:hidden dark:text-white focus:outline-none ml-auto text-right cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX className="h-6 w-6 cursor-pointer" /> : <FiAlignRight className="h-6 w-6 cursor-pointer" />}
        </button>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
    </>
   
  )
}

export default Header
