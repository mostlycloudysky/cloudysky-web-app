import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {EyeIcon} from '@heroicons/react/outline'
import Profile from '../components/Profile'
import FeaturedPosts from '../components/FeaturedPosts'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <Layout title='Cloudysky home page'>
      <Header />
      {/* Header and profile bio */}
      <Profile />
      {/* Featured posts */}
      <div className='pt-5 pl-5 pr-5'>
        <h3 className=" font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <FeaturedPosts />
        <FeaturedPosts />
        <FeaturedPosts />
        <Link
            href="/blogs"
            className="flex items-center  text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See all posts'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
        </Link>
      </div>
    </Layout>

  )
}

export default Home
