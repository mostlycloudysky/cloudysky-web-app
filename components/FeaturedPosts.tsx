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

      <div className='mb-4 border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-gray-50 dark:bg-gray-900'>
        {/* Blog Content */}
        <div className=''>
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            {post.title}
          </h3>
          {/* <p className='text-lg md:text-xl font-bold w-full text-gray-900 dark:text-gray-100 tracking-tight cursor-pointer hover:underline decoration-green-600'>{post.title}</p> */}
          <p className=' text-xs  leading-5 pt-1 pb-1'><span className=''>{new Date(post._createdAt).toLocaleString()}</span> .Published in Medium, DevTo and HashNode</p>
          <p className="mt-3 mb-4 text-sm text-skin-base">
            {post.description}
          </p>
          <div className='mt-2 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              {post.categories.map((catagory) => (
                <span
                    className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm rounded-full border border-gray-600"
                      >
                      {catagory.title}
                  </span>
              ))}
              <span className="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center" aria-hidden="true">
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              </span>
              <p className='text-sm'>2 mins read</p>
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
