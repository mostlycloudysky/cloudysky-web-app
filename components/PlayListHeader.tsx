import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function PlayListHeader({data}) {
  return (
        <div className='flex'>
          <Image
          alt=''
          src={data.images[0]['url']}
          width={150}
          height={80}
          className='rounded'
        />
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
                  <img className='hover:scale-105 transition-transform duration-200 ease-in-out' alt='' src='/play.svg' width={20} height={20} />
                </div>
            </Link>


            {/* <button className=" mt-5 mr-5 border px-3 rounded-full py-1 font-normal text-base cursor-pointer pt-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Play</button> */}
          </div>
        </div>
  )
}

export default PlayListHeader
