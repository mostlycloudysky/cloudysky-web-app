import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Toptracks from '../components/Toptracks';
import Image from 'next/image'
import Link from 'next/link'
import PlayListHeader from '../components/PlayListHeader';
import Songs from '../components/Songs';
import Footer from '../components/Footer';


export default function playlist({playListData}) {
  const {data} = playListData
  return (
    <Layout title='CloudyS.K.Y - Playlist'>
      {/* <Header /> */}
      <div className='pt-5 pl-5 pr-5'>
        {/* Playlist Header component */}
        <PlayListHeader data={data} />
        <Songs songs={data} />
        <Footer />
          {/* <div className="mt-10">
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
          </div> */}

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