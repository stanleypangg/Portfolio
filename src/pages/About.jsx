import React from 'react'
import IconBar from '../components/IconBar'
import Chip from '../components/InfoChip'
import TechStack from '../components/TechStack'

const About = () => {
  return (
    <section className='bg-black text-white p-30 w-full relative overflow-hidden'>
      <div className='flex max-w-3xl mx-auto justify-between '>
        <div>
          <h1 className='font-bold text-4xl mb-4'>hello, i'm Stanley ( ˶ˆᗜˆ˵ ) ✧</h1>
          <IconBar size='8' />
          <div className='flex flex-row mt-2 gap-2'>
            <Chip>👨🏻‍💻 Software Engineer</Chip>
            <Chip>📍 Toronto, ON</Chip>
            <Chip>♂️ he/him</Chip>
          </div>
          <div className='flex flex-row mt-2 gap-2'>
            <Chip>💻 Computer Science</Chip>
            <Chip>🧮 Mathematics</Chip>
            <Chip>📈 Statistics</Chip>
          </div>
        </div>
        {/* Profile Picture*/}
        <div className='mb-10'>
          <img 
            src="me.jpg" 
            alt="Stanley Pang profile picture"
            className='
              rounded-2xl
              w-24 h-24 md:w-44 md:h-44
              object-cover flex-shrink-0
              hover:scale-110 transition-transform duration-300
              origin-top-right
          '/>
        </div>
      </div>
      <div className='leading-relaxed text-left max-w-3xl mx-auto'>
        <div className='mb-6'>
          <h2 className='text-3xl font-bold mb-4'>About Me</h2>
          <p className='text-gray-300'>
            Hi, I'm Stanley! I'm a Computer Science student at the <a href='https://www.utoronto.ca/' target="_blank" rel="noopener noreferrer" className='underline text-white'>
            University of Toronto</a> (St. George Campus). More specifically, I'm a 3rd year Computer Science Specialist, Mathematics Minor, and Statistics Minor. My coursework and projects have sparked
            a strong interest in software engineering, full-stack development, and machine learning. Currently, I'm exploring how <a href='https://huggingface.co/' target="_blank" rel="noopener noreferrer" className='underline text-white'>Hugging Face</a> models 
            can enhance the learning experience in a personal "<a href='https://notebooklm.google/' target="_blank" rel="noopener noreferrer" className='underline text-white'>NotebookLM</a>-inspired" project, 
            incorporating a sloth study buddy (for encouragement!) and text-to-speech to improve accessibility.  I'm also investigating different cloud solutions for deployment and scalability. This portfolio features a 
            selection of projects that demonstrate my approach to problem-solving and my commitment to creating impactful solutions. I'm always eager to collaborate and learn from others! Feel free to explore my work and
            connect with me on <a href='https://www.linkedin.com/in/stanleypangg/' target="_blank" rel="noopener noreferrer" className='underline text-white'>LinkedIn</a>!
          </p>
        </div>
        <div className='mb-6'>
          <h2 className='text-3xl font-bold mb-4'>Technologies I love!</h2>
          <TechStack />
        </div>
        <div>
          <h2 className='text-3xl font-bold mb-4'>Beyond the Code</h2>
          <p className='text-gray-300'>
            So, what do I do when I'm <em>not</em> staring at a screen for hours at a time? Well, I'm on a never-ending quest to find the best food in Toronto (<a href='https://kohlipe.ca/' target='_blank' rel='noopener noreferrer' className='underline text-white'>Koh Lipe</a> is 
            a strong contender.) You'll also find me at the gym, usually hitting a chest day (and skipping leg day more than I should.) Music is also a constant companion - from trap to indie rock to electronic beats, I'm always
            exploring new sounds and try to catch as many concerts as possible for the artists I love. In fact, my favourite song right now 
            is <a href='https://open.spotify.com/track/1XD4K4CGAKTIBmFpvuaFru?si=611db0cf5a7f4ffb' target="_blank" rel="noopener noreferrer" className='underline text-white'>"Dancing with your eyes closed"</a> by <a href='https://open.spotify.com/artist/2rLGlNI6htigNxx172qxLu?si=9lAaCy0tQwmPHmGgn0RRDQ' target="_blank" rel="noopener noreferrer" className='underline text-white'>Jane Remover</a> - give
            it a listen!

            <br /><br />

            Beyond that, I'm a big fan of anime, with <a href="https://en.wikipedia.org/wiki/Steins;Gate_(TV_series)" target="_blank" rel="noopener noreferrer" className='underline text-white'>Steins;Gate</a> holding a special place in my heart. As for TV shows, my favourite show is 
            definitively <a href="https://en.wikipedia.org/wiki/Breaking_Bad" target="_blank" rel="noopener noreferrer" className='underline text-white'>Breaking Bad</a> (I don't think I need to explain why.) And when I need to unwind, I love diving into video games. Recently, I've been spending lots of time
            on <a href="https://terraria.org/" target="_blank" rel="noopener noreferrer" className='underline text-white'>Terraria</a> and <a href="https://persona.atlus.com/p5r/?lang=en" target="_blank" rel="noopener noreferrer" className='underline text-white'>Persona 5</a>. If I'm not doing any
            of those things, then I am probably taking a nap.

            <br /><br />

            So yeah, that's a little glimpse into the world outside of coding. I'm always open to discussing these things as well as tech, so feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About