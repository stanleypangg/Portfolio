import React from 'react'
import Icon from './Icon'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const IconBar = () => {
  const icons = [
    {
      'icon': FaGithub,
      'link': 'https://github.com/stanleypangg'
    },
    {
      'icon': FaLinkedin,
      'link': 'https://www.linkedin.com/in/stanleypangg/'
    },
  ];

  return (
    <div className='inline-flex gap-3'>
      {icons.map((icon, index) => (
        <Icon key={index} link={icon.link} logo={icon.icon} />
      ))}
    </div>
  )
}

export default IconBar