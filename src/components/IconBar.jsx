import React from 'react'
import Icon from './Icon'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosPaper } from 'react-icons/io'

const IconBar = ({ size }) => {
  const icons = [
    {
      'icon': FaGithub,
      'link': 'https://github.com/stanleypangg'
    },
    {
      'icon': FaLinkedin,
      'link': 'https://www.linkedin.com/in/stanleypangg/'
    },
    {
      'icon': FaSquareXTwitter,
      'link': 'https://x.com/StanleyPan35744'
    },
    {
      'icon': IoIosPaper,
      'link': ''
    },
  ];

  return (
    <div className='inline-flex gap-3'>
      {icons.map((icon, index) => (
        <Icon size={size} key={index} link={icon.link} logo={icon.icon} />
      ))}
    </div>
  )
}

export default IconBar