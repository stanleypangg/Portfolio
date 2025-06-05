import React from 'react'

const NavBar = () => {
  return (
    <ul className='py-2 px-4 inline-flex gap-4 bg-neutral-100 sticky mb-7'>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/project">Projects</a></li>
      <li><a href="/experience">Experience</a></li>
    </ul>
  )
}

export default NavBar