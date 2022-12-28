import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <Layout title='Cloudysky home page'>
      <Header></Header>
        <div className='mt-7 flex flex-col sm:flex-row items-start'>
          <div className='pl-5 pt-5 flex'>
            <img className="w-40 h-40 rounded-full border-2 border-green-200 object-cover"
              src="/avatar.jpg" />
            <div className='pt-5 pl-8'>
                <h2 className="font-bold text-4xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
                  <span>Sandeep Yaramchitti</span> 
                </h2>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                  Code my ideas into life through Software Development.
                </h2>
                <div className=' flex items-center space-x-3'>
                  <div>Linkedin</div>
                  <div>Github</div>
                  <div>Email</div>
                  <div>Medium</div>
                  <div>DevTo</div>
                  <div>HashNode</div>
                </div>
            </div>
          </div>
        </div>


    </Layout>

  )
}

export default Home
