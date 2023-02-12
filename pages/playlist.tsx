import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Toptracks from '../components/Toptracks';
import Image from 'next/image'
import Link from 'next/link'


export default function playlist({playListData}) {
  const {data} = playListData
  console.log(data.images[0]['url'])
  return (
    <Layout title='CloudyS.K.Y - Playlist'>
      {/* <Header /> */}
      <div className='pt-5 pl-5 pr-5'>
        {/* Playlist Header component */}
        <div className='flex'>
          <Image
          alt=''
          src={data.images[0]['url']}
          width={150}
          height={80}
          className='rounded'
        />
          {/* <img className="mr-6 w-200 h-200" src={data.images[0]['url']}></img> */}
          <div className=' ml-5 flex flex-col justify-center'>
            <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Playlist</h4>
            <h2 className="font-bold text-4xl md:text-4xl tracking-tight mb-1 text-gray-600 dark:text-gray-400">
              <span className=''>{data.name}</span> 
            </h2>
            {/* <p className="text-gray-600 text-sm">Created by <a>{data.owner["display_name"]}</a> - {data.tracks['total']}, 3 hr 2 min</p> */}
            <p className='text-gray-600 text-sm mb-3'>
              <span className=''>{data.owner["display_name"]}</span> • {data.tracks['total']} songs • 43 min 47 sec
            </p>
            <Link href={data.external_urls['spotify']} target="_blank" >
                <div className='bg-green-500 w-12 h-12 flex pl-2 items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out '>
                  <img classname='hover:scale-105 transition-transform duration-200 ease-in-out' alt='' src='/play.svg' width={20} height={20} />
                </div>
            </Link>


            {/* <button className=" mt-5 mr-5 border px-3 rounded-full py-1 font-normal text-base cursor-pointer pt-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Play</button> */}
          </div>
        </div>
          <div className="mt-10">
            <div className="flex text-gray-600">
              <div className="p-2 w-8 flex-shrink-0"></div>
              <div className="p-2 w-8 flex-shrink-0"></div>
              <div className="p-2 w-full">Title</div>
              <div className="p-2 w-full">Artist</div>
              <div className="p-2 w-full">Album</div>
              <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
            </div>
    
    <div className="flex border-b border-gray-800 hover:bg-gray-800">
      <div className="p-3 w-8 flex-shrink-0">▶️</div>
      <div className="p-3 w-8 flex-shrink-0">❤️</div>
      <div className="p-3 w-full">My Song Here</div>
      <div className="p-3 w-full">Eminem</div>
      <div className="p-3 w-full">Spotify</div>
      <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
    </div>
    <div className="flex border-b border-gray-800 hover:bg-gray-800">
      <div className="p-3 w-8 flex-shrink-0">▶️</div>
      <div className="p-3 w-8 flex-shrink-0">❤️</div>
      <div className="p-3 w-full">My Song Here</div>
      <div className="p-3 w-full">Eminem</div>
      <div className="p-3 w-full">Spotify</div>
      <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
    </div>
    <div className="flex border-b border-gray-800 hover:bg-gray-800">
      <div className="p-3 w-8 flex-shrink-0">▶️</div>
      <div className="p-3 w-8 flex-shrink-0">❤️</div>
      <div className="p-3 w-full">My Song Here</div>
      <div className="p-3 w-full">Eminem</div>
      <div className="p-3 w-full">Spotify</div>
      <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
    </div>
    <div className="flex border-b border-gray-800 hover:bg-gray-800">
      <div className="p-3 w-8 flex-shrink-0">▶️</div>
      <div className="p-3 w-8 flex-shrink-0">❤️</div>
      <div className="p-3 w-full">My Song Here</div>
      <div className="p-3 w-full">Eminem</div>
      <div className="p-3 w-full">Spotify</div>
      <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
    </div>
    <div className="flex border-b border-gray-800 hover:bg-gray-800">
      <div className="p-3 w-8 flex-shrink-0">▶️</div>
      <div className="p-3 w-8 flex-shrink-0">❤️</div>
      <div className="p-3 w-full">My Song Here</div>
      <div className="p-3 w-full">Eminem</div>
      <div className="p-3 w-full">Spotify</div>
      <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
    </div>
  </div>

      </div>
    </Layout>
  )
}


export const getServerSideProps = async() => {

  const response = await fetch(`http://localhost:3000/api/my-playlist`)
  const playListData = await response.json()

  return {
    props: {
      playListData
    }
  }
}