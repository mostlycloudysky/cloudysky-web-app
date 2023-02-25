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
import { sanityClient, urlFor } from '../sanity'

import { Post, Snippets } from '../typings.d'
import snippets from './snippets';

interface Props {
  posts: [Post],
  snippets: [Snippets]
}

export default function Home({ posts, snippets }: Props) {

  return (
    <Layout title='Home'>
      <Profile />
      <div className='pt-5 pl-5 pr-5'>
        <h3 className=" font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Featured Blogs
        </h3>

        {posts.map((post) => (
          <FeaturedPosts post={post} key={post._id} />
        ))}
        <Link
          href="/blogs"
          className="flex items-center mb-6  text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-green-600 transition-all h-6"
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
        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Snippets
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Collection of code snippets I've used in this portfolio and
          a lot more, which include set up
          instructions. Others are anything from web apps to aws and devsecops
          related.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6'>
          {snippets.map((snippet) => (
            <SnippetsCard snippet={snippet} key={snippet._id} />
          ))}
        </div>


        <Link
          href="/snippets"
          className="flex items-center mt-2 mb-6 hover:text-green-600  text-gray-600 dark:text-gray-400 leading-7 rounded-lg  transition-all h-6"
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
        {/* <NewsLetter /> */}
        <div className='border-b-[1px] border-muted'></div>
        <Footer />

      </div>
    </Layout>

  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post' && Featured == true]{
    _id,
    title,
    _createdAt,
    categories[] -> {
      title,
      slug
    },
    author -> {
      name,
      image
    },
      description,
      mainImage,
      slug, 
  }`;

  const snippetsQuery = `*[_type == 'snippets' && Featured == true]{
    _id,
    _createdAt,  
    title,
    description,  
    body,
    Featured,  
    mainImage,
    slug, 
  }`

  const posts = await sanityClient.fetch(query);
  const snippets = await sanityClient.fetch(snippetsQuery);
  return {
    props: {
      posts,
      snippets
    }
  }

};
