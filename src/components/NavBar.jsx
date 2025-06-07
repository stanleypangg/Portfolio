import React from 'react'

const NavBar = () => {
  const items = [
    {
      'name': 'Home',
      'href': ''
    },
    {
      'name': 'About',
      'href': ''
    },
    {
      'name': 'Projects',
      'href': ''
    },
    {
      'name': 'Experience',
      'href': ''
    },
  ]

  return (
    <ul className='
      py-2 px-4 
      inline-flex gap-5 
      bg-neutral-100 sticky mb-7
      text-base
    '>
      {items.map((item, index) => (
        <li key={index}>
         <a 
          href={item.href}
          className='
            relative text-blac cursor-pointer 
            transition-all ease-in-out before:transition-[width] before:ease-in-out 
            before:duration-700 before:absolute before:bg-gray-400 before:origin-center 
            before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] 
            after:transition-[width] after:ease-in-out after:duration-700 after:absolute 
          after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] 
            after:bottom-0 after:right-[50%]
         '>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavBar