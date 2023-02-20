import React from 'react'
import { millisToMinutesAndSeconds } from "../lib/time";
import { useRouter } from 'next/router';

function TableRow({song, order}) {

  const router = useRouter();
  console.log(song)
  const url = song.track.external_urls.spotify
   const openInNewTab = (url) => {
       const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
       if (newWindow) newWindow.opener = null
   }
  return (

      <tbody onClick={() => openInNewTab(url)}  className=' text-gray-600 p-3 dark:text-gray-800 rounded hover:bg-gray-100 hover:dark:bg-gray-900 cursor-pointer'>
        <tr className='text-sm sm:pl-0' >
          <th className='pb-5 cursor-pointer'>{ order + 1}</th>
          <th className='pb-5  cursor-pointer'>
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10"
              src={song.track.album.images[0].url}
              alt=""
            />
            <div>
              <p className="text-md text-gray-600 dark:text-gray-400 truncate">{song.track.name}</p>
              <p className="text-gray-500 text-sm">{song.track.artists[0].name}</p>
            </div>
          </div>
          </th>
          <th className='pb-3 text-sm cursor-pointer text-gray-600 dark:text-gray-400'>{song.track.album.name}</th>
          {/* <th className={styles.th}>{props.plays}</th> */}
        
          <th className='pb-3 cursor-pointer text-sm text-gray-600 dark:text-gray-400'>{millisToMinutesAndSeconds(song.track.duration_ms)}</th>
        </tr>     
      </tbody>

   
  )
}

export default TableRow