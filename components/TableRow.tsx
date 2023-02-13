import React from 'react'
import { millisToMinutesAndSeconds } from "../lib/time";

function TableRow({song, order}) {
  console.log(song)
  return (
    <tbody className=' text-gray-600 dark:text-gray-500 rounded hover:bg-gray-100 hover:dark:bg-gray-600 cursor-pointer text-sm md:text-base'>
      <tr >
        <th className='pb-5 cursor-pointer'>{ order + 1}</th>
        <th className='pb-5  cursor-pointer'>
        <div className="flex items-center space-x-4">
          <img
            className="h-10 w-10"
            src={song.track.album.images[0].url}
            alt=""
          />
          <div>
            <p className="w-30 lg:w-25 text-gray-800 dark:text-white truncate">{song.track.name}</p>
            <p className="w-40">{song.track.artists[0].name}</p>
          </div>
        </div>
        </th>
        <th className='pb-5 hidden md:inline-grid cursor-pointer'>{song.track.album.name}</th>
        {/* <th className={styles.th}>{props.plays}</th> */}
      
        <th className='pb-5  cursor-pointer'>{millisToMinutesAndSeconds(song.track.duration_ms)}</th>
      </tr>
    </tbody>
  )
}

export default TableRow