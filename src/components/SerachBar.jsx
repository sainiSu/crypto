import React from 'react'

function SerachBar({onSearch}) {
  return (
    <div className='flex justify-center items-center'>
    <input type="text" placeholder='Search here...' className='border-2 border-gray-300 rounded-lg p-2 w-1/2' onChange={(e) => onSearch(e.target.value)} />  
    </div>
  )
}

export default SerachBar
