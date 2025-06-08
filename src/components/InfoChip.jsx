import React from 'react'

const Chip = ({ children }) => {
  return (
    <div className='bg-gray-100 text-gray-800 px-2 pr-3 rounded-2xl font-semibold hover:cursor-pointer'>
			{children}
    </div>
  )
}

export default Chip