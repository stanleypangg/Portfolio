import React from 'react'
import IconBar from '../components/IconBar'
import Chip from '../components/InfoChip'
import TechStack from '../components/TechStack'

const About = () => {
  return (
    <section className='bg-black text-white p-30 w-full relative overflow-hidden'>
      <div className='flex max-w-3xl mx-auto justify-between '>
        <div>
          <h1 className='font-bold text-4xl mb-4'>hello, i'm Stanley</h1>
          <IconBar size='8' />
          <div className='flex flex-row mt-2 gap-2'>
            <Chip>💻 Software Engineer</Chip>
            <Chip>📍 Toronto, ON</Chip>
            <Chip>♂️ he/him</Chip>
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
          <h2 className='text-3xl font-bold mb-4'>About</h2>
          <p className='text-gray-300'>
            Hi, I'm Stanley! I'm a curious student at the <a href='https://www.linkedin.com/school/university-of-toronto/posts/?feedView=all' className='underline text-white'>
            University of Toronto</a>, and I'm fascinated by the power of technology to make a difference in the world. From coding 
            and web development to the exciting possibilities of machine learning and AI, I'm always eager to learn and build new things.
            This portfolio is a glimpse into my projects and my journey as a developer. I'm always open to connecting
            with other tech enthusiasts, so feel free to reach out!
          </p>
        </div>
        <div>
          <h2 className='text-3xl font-bold mb-4'>Technologies I love!</h2>
          <TechStack />
        </div>
      </div>
    </section>
  )
}

export default About