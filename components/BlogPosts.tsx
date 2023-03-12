import React from 'react'
import {EyeIcon} from '@heroicons/react/outline'
import { Post } from '../typings'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react';
import ReadingTime from './ReadingTime'

interface Props {
  post: Post
}

function BlogPosts({post}: Props) {
  return (
    <>
      <div className=' pt-5 pl-5 pr-5 pb-5'>
        {/* Blog Content */}
        <div className=''>
          <Link key={post._id} href={`post/${post.slug.current}`}>
              <p className='text-lg md:text-xl font-bold w-full text-gray-900 dark:text-gray-100 tracking-tight cursor-pointer hover:underline decoration-green-600 '>{post.title}</p>        
          </Link>
          <p className=' text-xs font-normal text-skin-base leading-5 pt-1 pb-1'><span className=''>{new Date(post._createdAt).toLocaleString()}</span> .Published in Medium, DevTo and HashNode</p> 
          <p className="mt-3 mb-4 text-md font-normal text-skin-base ">
            {post.description}
          </p>
          
          {/* Tags */}
          <div className='mt-2 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              {post.categories.map((catagory, index) => (
                <span
                    key={index}
                    className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm rounded-full border border-gray-600"
                      >
                      {catagory.title}
                  </span>
              ))}
              <span className="h-4 w-4 bg-gray-100 rounded-full flex items-center justify-center" aria-hidden="true">
                <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
              </span>              
              <p className=' text-sm font-normal text-skin-base leading-5'><ReadingTime blocks={post.body} /></p>  
            </div>
            <div className='flex items-center space-x-1 mr-5 pr-5'>
              <EyeIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm font-normal text-skin-base'>100</span>
            </div>
            
          </div>
        </div>
      {/* Blog Main Image */}
      </div>
      <div className='border-b-[1px] border-muted ml-5 mr-5 '></div>
    </>

    
  )
}

export default BlogPosts
