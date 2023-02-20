import React, {useState} from 'react'

function Footer() {

  const [currentYear] = useState(() =>  new Date().getFullYear());  
  return (
    
    <div className='mt-5 mb-5 flex items-center space-x-2'>
      <h3 className='text-sm text-green-600'>Sandeep Yaramchitti</h3>
      <p className=' text-sm '>- Bringing my ideas into life through Code.</p>
    </div>
  )
}

export default Footer
