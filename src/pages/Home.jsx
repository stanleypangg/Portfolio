import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import IconBar from '../components/IconBar'

const Home = () => {
  const backgroundImagePath = '../public/f2ff82037fcc5a2305be0ee82d79e893.gif';

  return (
    <div 
      className='h-screen w-screen relative overflow-hidden' 
      style={{ 
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className='left-25 top-15 absolute'>
        <NavBar />
        <HeroSection />
        <IconBar />
      </div>
    </div>
  )
}

export default Home