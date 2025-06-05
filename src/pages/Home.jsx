import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import IconBar from '../components/IconBar'

const Home = () => {
  return (
    <div 
      className='h-screen w-screen relative overflow-hidden' 
      style={{ 
        backgroundImage: "url('/home.gif')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className='left-25 top-20 p-6 absolute bg-gray-300 opacity-95'>
        <NavBar />
        <HeroSection />
        <IconBar />
      </div>
    </div>
  )
}

export default Home