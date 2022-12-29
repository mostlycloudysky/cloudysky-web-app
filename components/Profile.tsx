import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Profile() {
  return (
        <div className='mt-7 mb-6 flex flex-col sm:flex-row items-start'>
          <div className='pl-5 pt-5 flex'>
            <img className="w-40 h-40 rounded-full border-2 border-green-200 object-cover"
              src="/avatar.jpg" />
            <div className='pt-5 pl-8'>
                <h2 className="font-bold text-4xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
                  <span className=' bg-sky-200 dark:bg-sky-800'>Sandeep Yaramchitti</span> 
                </h2>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                  Brining my ideas into life through Code.
                </h2>
                <div className=' flex items-center space-x-3'>
                  <div><SocialIcon url="https://linkedin.com/in/jaketrent" style={{ height: 40, width: 40 }} /></div>
                  <div><SocialIcon url="https://github.com/SandeepKumarYaramchitti" style={{ height: 40, width: 40 }} /></div>
                  <div><SocialIcon url="https://mail.google.com/mail/u/0/#inbox" style={{ height: 40, width: 40 }} /></div>
                  <div><SocialIcon url="https://medium.com/@sandeepkumary" style={{ height: 40, width: 40 }} /></div>
                  {/* <div><SocialIcon url="https://dev.to/sandeepkumaryaramchitti" style={{ height: 40, width: 40 }} /></div>
                  <div><SocialIcon url="https://hashnode.com/@sandeep1117" style={{ height: 40, width: 40 }} /></div> */}
                </div>
            </div>
          </div>
        </div>
  )
}

export default Profile
