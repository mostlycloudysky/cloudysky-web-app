import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Profile from '../components/Profile'
import FeaturedPosts from '../components/FeaturedPosts'
import Link from 'next/link'
import SnippetsCard from '../components/SnippetsCard'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {sanityClient, urlFor} from '../sanity'


export default function Home(props) {
  console.log('props', props)
  return (
    <Layout title='CloudyS.K.Y - Home'>
      <Header />
      {/* Header and profile bio */}
      <Profile />
      {/* Featured posts */}
      <div className='pt-5 pl-5 pr-5'>
        <h3 className=" font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Featured Blogs
        </h3>
        <FeaturedPosts />
        <FeaturedPosts />
        <FeaturedPosts />
        <Link
            href="/blogs"
            className="flex items-center mb-6  text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See all blogs'}
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
        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Snippets
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Collection of code snippets I've used in this portfolio and
          a lot more, which include set up
          instructions. Others are anything from web apps to aws and devsecops
          related.
        </p>
        <SnippetsCard />
        <Link
            href="/snippets"
            className="flex items-center mb-6  text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See all snippets'}
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
        <NewsLetter />
        <Footer />
    
      </div>
    </Layout>

  )
}



export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    author -> {
      name,
      image
    },
      description,
      mainImage,
      slug, 
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }

};
