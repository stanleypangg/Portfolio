import React, { useState, useEffect, useRef } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import IconBar from '../components/IconBar'
import Footer from '../components/Footer'
import About from './About'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'

const Home = () => {
  const [animationStage, setAnimationStage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)
  
  useEffect(() => {
    // Animation sequence timing - only run once
    const timers = [
      setTimeout(() => setAnimationStage(1), 500),   // Start box animation
      setTimeout(() => setAnimationStage(2), 1500),  // Show content
      setTimeout(() => setAnimationStage(3), 2500),  // Show background
      setTimeout(() => setAnimationStage(4), 3000),  // Show scroll arrow + play music
    ]
    
    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  // Play music when reaching stage 4
  useEffect(() => {
    if (animationStage >= 4 && audioRef.current) {
      // Small delay to ensure everything is loaded
      setTimeout(() => {
        audioRef.current.play().then(() => {
          setIsMusicPlaying(true)
        }).catch(error => {
          console.log('Audio autoplay failed:', error)
          // Autoplay was prevented by browser - music button will be available to click
          setIsMusicPlaying(false)
        })
      }, 200)
    }
  }, [animationStage])

  // Toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
        setIsMusicPlaying(false)
      } else {
        audioRef.current.play().then(() => {
          setIsMusicPlaying(true)
        }).catch(error => {
          console.log('Audio play failed:', error)
        })
      }
    }
  }

  // Separate useEffect for body overflow
  useEffect(() => {
    if (animationStage < 4) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto'
      // Stop music when component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [animationStage])

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsTransitioning(true)
      setIsFullscreen(!!document.fullscreenElement)
      
      // End transition after animation completes
      setTimeout(() => setIsTransitioning(false), 500)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`${animationStage < 4 ? 'h-screen overflow-hidden' : 'min-h-screen'} transition-all duration-500 ease-in-out ${isTransitioning ? 'scale-[0.98] opacity-90' : 'scale-100 opacity-100'}`}>
      
      {/* Audio element */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        autoPlay
        style={{ display: 'none' }}
      >
        <source src="beneath-the-mask.mp3" type="audio/mpeg" />
      </audio>

      {/* First section - Full screen hero */}
      <div className={`h-screen w-full relative flex items-center justify-center transition-all duration-500 ease-in-out ${isFullscreen ? 'scale-105' : 'scale-100'}`}>
        
        {/* Background layers */}
        <div 
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            animationStage >= 3 ? 'opacity-0' : 'opacity-100'
          } ${isTransitioning ? 'blur-sm' : 'blur-0'}`}
          style={{ backgroundColor: "#1f2937" }}
        />
        
        <div 
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            animationStage >= 3 ? 'opacity-100' : 'opacity-0'
          } ${isTransitioning ? 'blur-sm' : 'blur-0'}`}
          style={{ 
            backgroundImage: "url('/home.gif')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />

        {/* Music toggle button */}
        <button
          onClick={toggleMusic}
          className={`absolute top-4 left-4 z-20 p-2 bg-black/20 text-white rounded-lg hover:bg-black/40 transition-all duration-300 ${
            animationStage >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
          title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isMusicPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L12 11.202a1 1 0 000-1.732L9.555 7.168z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Centered content with grow animation */}
        <div 
          className={`
            bg-gray-300 bg-opacity-90
            p-6 md:p-8 lg:p-12
            rounded-lg md:rounded-xl
            max-w-2xl md:max-w-4xl
            mx-4
            text-center
            shadow-2xl
            transition-all duration-1000 ease-out
            relative z-10
            ${animationStage >= 1 ? 'animate-float' : ''}
            ${animationStage >= 1 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
            }
            ${isTransitioning ? 'scale-95' : 'scale-100'}
            ${isFullscreen ? 'md:max-w-5xl lg:max-w-6xl' : 'md:max-w-4xl'}
          `}
          style={{
            transformOrigin: 'center center'
          }}
        >
          {/* Content appears after box animation */}
          <div 
            className={`transition-all duration-500 ${
              animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <NavBar />
          </div>
          
          <div 
            className={`transition-all duration-500 delay-200 ${
              animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <HeroSection />
          </div>
          
          <div 
            className={`mt-6 transition-all duration-500 delay-400 ${
              animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <IconBar />
          </div>
        </div>

        {/* Clickable scroll arrow - appears last */}
        <button 
          onClick={scrollToNext}
          className={`
            absolute bottom-8 left-1/2 transform -translate-x-1/2 
            animate-bounce hover:scale-110 transition-all duration-500
            cursor-pointer group z-10
            ${animationStage >= 4 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
            }
          `}
        >
          <div className='flex flex-col items-center text-white'>
            <div className='w-8 h-8 border-r-2 border-b-2 border-white transform rotate-45 group-hover:border-gray-200'></div>
          </div>
        </button>
      </div>

      {/* Other sections - only render after animation completes */}
      {animationStage >= 4 && (
        <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}>
          {/* About */}
          <div id='about'>
            <About />
          </div>

          {/* Projects */}
          <div id='projects'>
            <Project />
          </div>

          {/* Experience */}
          <div id='experience'>
            <Experience />
          </div>

          {/* Contact */}
          <div id='contact'>
            <Contact />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Home