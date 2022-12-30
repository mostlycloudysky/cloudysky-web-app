import React from 'react'
import {EyeIcon} from '@heroicons/react/outline'
import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa'
function BlogPosts() {
  return (
    <>
        <div className=' pt-5 pl-5 pr-5 pb-5 cursor-pointer'>
      {/* Blog Content */}
      <div className=''>
        <p className='text-lg md:text-xl font-bold w-full text-gray-900 dark:text-gray-100 tracking-tight '>A TailwindCSS made blog post</p>
        <p className=' text-xs font-normal text-skin-base leading-5 pt-1 pb-1'><span className=''>Dec 28, 2022</span> .Published in Medium, DevTo and HashNode</p> 
        <p className="mt-3 mb-4 text-md font-normal text-skin-base ">
          Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae
          parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra
          congue risus.
        </p>
        {/* Tags */}
        <div className='mt-2 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span
              className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input"
              >
              Programming
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
    <div className='border-b-[1px] border-muted ml-5 mr-5 '></div>
    </>

    
  )
}

export default BlogPosts
