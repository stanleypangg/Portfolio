import React from 'react'
import IconBar from './IconBar'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
			<div className='container mx-auto px-4 text-center'>
				<IconBar />
				<p className='mt-4'>&copy; 2025 Stanley. All rights reserved.</p>
			</div>
    </footer>
	)
}

export default Footer