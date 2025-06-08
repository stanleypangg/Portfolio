import React from 'react'
import IconBar from '../components/IconBar'
import Chip from '../components/InfoChip'
import TechStack from '../components/TechStack'

const About = () => {
  return (
    <section className='relative w-full overflow-hidden min-h-screen'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800'>
        {/* Repositioned subtle light flares */}
        <div className='absolute top-10 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl'></div>
      </div>
      
      {/* Content */}
      <div className='relative z-10 text-white p-4 sm:p-8 md:p-16 lg:p-30'>
        {/* Header section - responsive layout */}
        <div className='flex flex-col md:flex-row max-w-3xl mx-auto justify-between items-start md:items-center gap-6 mb-8'>
          <div className='flex-1'>
            <h1 className='font-bold text-3xl sm:text-4xl mb-4'>hello, i'm Stanley ( ˶ˆᗜˆ˵ ) ✧</h1>
            <IconBar size='8' />
            
            {/* Chips - responsive wrapping */}
            <div className='flex flex-wrap gap-2 mt-2'>
              <Chip>👨🏻‍💻 Software Engineer</Chip>
              <Chip>📍 Toronto, ON</Chip>
              <Chip>♂️ he/him</Chip>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Chip>💻 Computer Science</Chip>
              <Chip>🧮 Mathematics</Chip>
              <Chip>📈 Statistics</Chip>
            </div>
          </div>
          
          {/* Profile Picture - responsive sizing */}
          <div className='flex-shrink-0 self-center md:self-start'>
            <img 
              src="me.jpg" 
              alt="Stanley Pang profile picture"
              className='
                rounded-2xl
                w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44
                object-cover
                hover:scale-110 transition-transform duration-300
                ring-2 ring-white/20 ring-offset-2 ring-offset-transparent
            '/>
          </div>
        </div>

        {/* Main content - responsive text sizing */}
        <div className='leading-relaxed text-left max-w-3xl mx-auto space-y-8'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              About Me
            </h2>
            <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
              Hi, I'm Stanley! I'm a Computer Science student at the <a href='https://www.utoronto.ca/' target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>
              University of Toronto</a> (St. George Campus). More specifically, I'm a 3rd year Computer Science Specialist, Mathematics Minor, and Statistics Minor. My coursework and projects have sparked
              a strong interest in software engineering, full-stack development, and machine learning. Currently, I'm exploring how <a href='https://huggingface.co/' target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>Hugging Face</a> models 
              can enhance the learning experience in a personal "<a href='https://notebooklm.google/' target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>NotebookLM</a>-inspired" project, 
              incorporating a sloth study buddy (for encouragement!) and text-to-speech to improve accessibility.  I'm also investigating different cloud solutions for deployment and scalability. This portfolio features a 
              selection of projects that demonstrate my approach to problem-solving and my commitment to creating impactful solutions. I'm always eager to collaborate and learn from others! Feel free to explore my work and
              connect with me on <a href='https://www.linkedin.com/in/stanleypangg/' target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>LinkedIn</a>!
            </p>
          </div>
          
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              Technologies I love!
            </h2>
            <TechStack />
          </div>
          
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              Beyond the Code
            </h2>
            <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
              So, what do I do when I'm <em>not</em> staring at a screen for hours at a time? Well, I'm on a never-ending quest to find the best food in Toronto (<a href='https://kohlipe.ca/' target='_blank' rel='noopener noreferrer' className='underline text-white hover:text-gray-200 transition-colors'>Koh Lipe</a> is 
              a strong contender.) You'll also find me at the gym, usually hitting a chest day (and skipping leg day more than I should.) Music is also a constant companion - from trap to indie rock to electronic beats, I'm always
              exploring new sounds and try to catch as many concerts as possible for the artists I love. In fact, my favourite song right now 
              is <a href='https://open.spotify.com/track/1XD4K4CGAKTIBmFpvuaFru?si=611db0cf5a7f4ffb' target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>"Dancing with your eyes closed"</a> by <a href='https://open.spotify.com/artist/2rLGlNI6htigNxx172qxLu?si=9lAaCy0tQwmPHmGgn0RRDQ' target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>Jane Remover</a> - give
              it a listen!

              <br /><br />

              Beyond that, I'm a big fan of anime, with <a href="https://en.wikipedia.org/wiki/Steins;Gate_(TV_series)" target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>Steins;Gate</a> holding a special place in my heart. As for TV shows, my favourite show is 
              definitively <a href="https://en.wikipedia.org/wiki/Breaking_Bad" target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>Breaking Bad</a> (I don't think I need to explain why.) And when I need to unwind, I love diving into video games. Recently, I've been spending lots of time
              on <a href="https://terraria.org/" target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>Terraria</a> and <a href="https://persona.atlus.com/p5r/?lang=en" target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-gray-200 transition-colors'>Persona 5</a>. If I'm not doing any
              of those things, then I am probably taking a nap.

              <br /><br />

              So yeah, that's a little glimpse into the world outside of coding. I'm always open to discussing these things as well as tech, so feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About