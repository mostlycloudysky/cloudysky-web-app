import React from 'react'

function Songs() {
  return (
    <div>
      <table className='w-full text-left mt-5'>
        <tbody className='border-b border-gray-100 pb-5 opacity-50'>
          <tr>
            <th className='pb-3'>#</th>
            <th className='pb-3'>TITLE</th>
            <th className='pb-3'>ALBUM</th>
            <th className='pb-3'>DATE ADDED</th>
            <th className='pb-3'>
              <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
            </th>
          </tr>
        </tbody>
        <tbody className='mb-6 block'></tbody>
        {/* Add Table rows here */}
        
      </table>
    </div>
  )
}

export default Songs
