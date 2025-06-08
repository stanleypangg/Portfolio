import React from 'react'

const TechChip = ({ text, icon: Logo, color }) => {
    return (
			<div className='
				inline-flex items-center gap-2 text-lg bg-gray-100 px-3 py-1.5 text-black rounded-2xl 
			'>
				<Logo className={`w-6 h-6 ${color}`} />
				<span>{text}</span>
			</div>
    )
}

export default TechChip