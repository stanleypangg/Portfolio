import React from 'react'

const Icon = ({ link, logo: Logo, size }) => {
  const sizeMap = {
    4: 'size-4',
    5: 'size-5', 
    6: 'size-6',
    8: 'size-8',
    10: 'size-10',
    12: 'size-12'
  }
  
  const logoSize = sizeMap[size];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Logo className={`${logoSize} hover:scale-110 transition-transform duration-300`} />
    </a>
  )
}

export default Icon