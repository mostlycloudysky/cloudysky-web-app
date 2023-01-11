import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Snippets } from '../typings'
import { urlFor } from '../sanity'


interface Props {
    snippet: Snippets
}

function SnippetsCard({snippet}: Props) {  
  return (
    <div className="mb-5 cursor-pointer ">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8"> */}
            <div className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-gray-50 dark:bg-gray-900 hover:scale-105 transition-transform duration-200 ease-in-out">
                <img src={urlFor(snippet.mainImage).url()!} alt='logo' className=' w-10 h-10 rounded-full ' />
                <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
                    {snippet.title}
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-400">{snippet.description}</p>
            </div>
        {/* </div> */}
    </div>
  )
}

export default SnippetsCard
