import React from 'react'

const Icon = ({ link, logo: Logo }) => {
  return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Logo className='size-7' />
		</a>
  )
}

export default Icon