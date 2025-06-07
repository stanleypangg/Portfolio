import React from 'react'

const Icon = ({ link, logo: Logo }) => {
  return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Logo className='size-10 hover:scale-120 transition-transform duration-300' />
		</a>
  )
}

export default Icon