import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import SnippetsCard from '../components/SnippetsCard';

function snippets() {
  return (
    <Layout title='CloudyS.K.Y - Snippets'>
      <Header></Header>
        <div className='pt-5 pl-5 pr-5'>
          <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Snippets
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
          Collection of code snippets I've used in this portfolio and
          a lot more, which include set up
          instructions. Others are anything from web apps to aws and devsecops
          related.
          </p>
          <div className="relative w-full mb-5">
            <input
              aria-label="Search "
              value=''
              // onChange={(e) => setsearch(e.target.value)}
              type="text"
              placeholder="Search Code Snippets"
              className="block w-full px-4 py-2 border rounded-md border-hightlight-med bg-surface focus:ring-rose focus:border-rose"
            />
            <svg
              className="absolute w-5 h-5 right-3 top-3 text-subtle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <SnippetsCard />
          <SnippetsCard />
          <SnippetsCard />
          <SnippetsCard />
          <SnippetsCard />
          <SnippetsCard />
          <SnippetsCard />
          <SnippetsCard />
        </div>


    </Layout>
  )
}

export default snippets
