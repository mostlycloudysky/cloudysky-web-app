import React, {useState} from 'react'

function Footer() {

  const [currentYear] = useState(() =>  new Date().getFullYear());  
  return (
    
    <div className='mt-5 mb-5 flex items-center justify-between'>
      <div className='hidden md:flex items-center space-x-2'>
        <h3 className='text-sm text-green-600'>Sandeep Yaramchitti</h3>
        <p className=' text-sm '>- Bringing my ideas into life through Code.</p>
      </div>
      <div className='flex items-center space-x-2'>
        <span className="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center" aria-hidden="true">
          <span className="h-2 w-2 bg-green-600 rounded-full animate-ping"></span>
        </span>  
        <p className='pl-1 pr-1 text-sm bg-green-200 text-green-800'>ALL SYSTEMS ONLINE</p>  

      </div>
   
    </div>
  )
}

export default Footer
