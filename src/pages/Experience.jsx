import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {
  const experiences = [
    {
      imagePath: 'spglobal_logo.jpg',
      companyName: 'S&P Global',
      companyLink: 'https://www.spglobal.com/market-intelligence/en',
      role: 'Software Developer Intern',
      date: 'May 2025 - August 2025',
      description: 'Lorem Ipsum',
      technologies: ['AWS', 'Python', 'NumPy', 'pandas', 'scikit-learn', 'JavaScript', 'React.js', 'Node.js', 'PostgreSQL']
    },
    {
      imagePath: 'uoftseismicdesignteam_logo.jpg',
      companyName: 'University of Toronto Seismic Design Team',
      companyLink: 'https://seismic.skule.ca/',
      role: 'Digital Solution Specialist',
      date: 'May 2025 - Present',
      description: 'Lorem Ipsum',
      technologies: ['JavaScript', 'React.js', 'Node.js']
    },
    {
      imagePath: 'knowlecy_logo.jpg',
      companyName: 'Knowlecy Technologies Inc.',
      companyLink: 'https://knowlecy.com/',
      role: 'Software Engineer',
      date: 'January 2025 - April 2025',
      description: 'Lorem Ipsum',
      technologies: ['TypeScript', 'Next.js', 'React.js', 'Node.js', 'Python', 'FastAPI', 'Neo4j']
    },
    {
      imagePath: 'bayes_studio_logo.jpg',
      companyName: 'Bayes Studio',
      companyLink: 'https://bayesstudio.com/',
      role: 'API and Data Integration Intern',
      date: 'October 2024 - December 2024',
      description: 'Lorem Ipsum',
      technologies: ['REST APIs', 'Datasets', 'Excel']
    }
  ]

  return (
    <section className='relative w-full overflow-hidden min-h-screen pb-16'>
      {/* Background with flares */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800'>
        {/* Static background flares */}
        <div className='absolute top-20 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl'></div>
        <div className='absolute bottom-32 right-1/5 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/6 w-72 h-72 bg-indigo-500/6 rounded-full blur-3xl'></div>
        <div className='absolute top-10 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-1/3 w-56 h-56 bg-violet-500/7 rounded-full blur-3xl'></div>
      </div>
      
      {/* Content */}
      <div className='relative z-10 text-white py-10 sm:py-16 md:py-20 px-4'>
        <h1 className='mb-16 text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-2'>
          Experience
        </h1>
        <div className='space-y-6'>
          {experiences.map((item, index) => (
            <ExperienceCard 
              key={index}
              imagePath={item.imagePath}
              companyName={item.companyName}
              companyLink={item.companyLink}
              role={item.role}
              date={item.date}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience