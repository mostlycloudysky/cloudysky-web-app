import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Toptracks from '../components/Toptracks';

function playlist() {
  return (
    <Layout title='CloudyS.K.Y - Playlist'>
      {/* <Header /> */}
      <div className='pt-5 pl-5 pr-5'>
        {/* Playlist Header component */}
        <div className='flex'>
          <img className="mr-6" src="https://placekitten.com/g/250/230"></img>
          <div className=' flex flex-col justify-center'>
            <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Playlist</h4>
            <h2 className="font-bold text-4xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              <span className=' bg-green-100 dark:bg-green-600'>Sandeep Playlist</span> 
            </h2>
            <p className="text-gray-600 mb-2 text-sm">With J. Cole, Quavo, Ty Dollar $ign</p>
            <p className="text-gray-600 text-sm">Created by <a>Sandeep</a> - 50 songs, 3 hr 2 min</p>
            <button className=" mt-5 mr-5 border px-3 rounded-full py-1 font-normal text-base cursor-pointer pt-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Play</button>
          </div>
        </div>
        <Toptracks />
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

export default playlist
