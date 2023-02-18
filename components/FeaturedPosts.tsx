import React from 'react'
import { EyeIcon } from '@heroicons/react/outline'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  post: Post
}

function FeaturedPosts({ post }: Props) {

  return (
    <Link key={post._id} href={`post/${post.slug.current}`}>

      <div className=' cursor-pointer p-3 mb-2 border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-gray-50 dark:bg-gray-900 hover:scale-101 transition-transform duration-200 ease-in-out'>
        {/* Blog Content */}
        <div className=''>
          <p className='text-lg md:text-xl font-bold w-full text-gray-900 dark:text-gray-100 tracking-tight '>{post.title}</p>
          {/* <p className='text-lg md:text-xl font-bold w-full text-gray-900 dark:text-gray-100 tracking-tight cursor-pointer hover:underline decoration-green-600'>{post.title}</p> */}
          <p className=' text-xs font-normal text-skin-base leading-5 pt-1 pb-1'><span className=''>{new Date(post._createdAt).toLocaleString()}</span> .Published in Medium, DevTo and HashNode</p>
          <p className="mt-3 mb-4 text-md font-normal text-skin-base ">

            {post.description}
          </p>
          <div className='mt-2 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <span
                className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
              >
                {post.categories?.title}
              </span>
              <p className=' text-sm font-normal text-skin-base leading-5'>2 mins read</p>
            </div>
            <div className='flex items-center space-x-1 mr-5 pr-5'>
              <EyeIcon className='h-5 w-5 text-gray-600' />
              <span className='text-sm font-normal text-skin-base'>100</span>
            </div>

          </div>
        </div>
        {/* Blog Main Image */}
      </div>
    </Link>

  )
}

export default FeaturedPosts
