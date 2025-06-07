import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import IconBar from '../components/IconBar'
import Footer from '../components/Footer'
import About from './About'

const Home = () => {
  const scrollToNext = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }

  return (
    <div className='min-h-screen'>
      {/* First section - Full screen hero */}
      <div 
        className='h-screen w-full relative flex items-center justify-center' 
        style={{ 
          backgroundImage: "url('/home.gif')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >

        {/* Centered content */}
        <div className='
          bg-gray-300 bg-opacity-90
          p-6 md:p-8 lg:p-12
          rounded-lg md:rounded-xl
          max-w-2xl md:max-w-4xl
          mx-4
          text-center
        '>
          <NavBar />
          <HeroSection />
          <div className='mt-6'>
            <IconBar />
          </div>
        </div>

        {/* Clickable scroll arrow */}
        <button 
          onClick={scrollToNext}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-200 cursor-pointer group'
        >
          <div className='flex flex-col items-center text-white'>
            <div className='w-8 h-8 border-r-2 border-b-2 border-white transform rotate-45 group-hover:border-gray-200'></div>
          </div>
        </button>
      </div>

      {/* About */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home