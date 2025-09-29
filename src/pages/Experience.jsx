import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {
  const experiences = [
    {
      imagePath: 'shopify-logo-svg-vector.svg',
      companyName: 'Shopify',
      companyLink: 'https://shopify.com/',
      role: 'Incoming Software Engineer Intern',
      date: 'January 2026 - April 2026',
      description: 'Winter 2026 ❄️',
      technologies: ['Ruby on Rails', 'React.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      imagePath: 'boost-collective.jpg',
      companyName: 'Boost Collective',
      companyLink: 'https://boost-collective.com/',
      role: 'Software Engineer (Full-Time Contract)',
      date: 'August 2025 - December 2025',
      description: 'Full Stack Engineer 🏗️',
      technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'AWS', 'Tailwind CSS', 'Supabase']
    },
    {
      imagePath: 'spglobal_logo.jpg',
      companyName: 'S&P Global',
      companyLink: 'https://www.spglobal.com/market-intelligence/en',
      role: 'Software Developer Intern',
      date: 'May 2025 - August 2025',
      description: 'Reference Data Team 📊',
      technologies: ['AWS', 'Python', 'NumPy', 'pandas', 'scikit-learn', 'JavaScript', 'React.js', 'Node.js', 'PostgreSQL']
    },
    // {
    //   imagePath: 'uoftseismicdesignteam_logo.jpg',
    //   companyName: 'University of Toronto Seismic Design Team',
    //   companyLink: 'https://seismic.skule.ca/',
    //   role: 'Digital Solution Specialist',
    //   date: 'May 2025 - Present',
    //   description: 'Led the development and maintenance of the University of Toronto Seismic Design Team\'s official website, enhancing the team\'s digital presence and improving information accessibility for students and stakeholders. Implemented modern web technologies to create a responsive, user-friendly platform that effectively showcases the team\'s engineering projects, competition achievements, and recruitment initiatives. Collaborated with team leadership to ensure the website accurately represents the organization\'s mission and facilitates seamless communication with the engineering community.',
    //   technologies: ['JavaScript', 'React.js', 'Node.js']
    // },
    {
      imagePath: 'knowlecy_logo.jpg',
      companyName: 'Knowlecy Technologies Inc.',
      companyLink: 'https://knowlecy.com/',
      role: 'Software Engineer',
      date: 'January 2025 - April 2025',
      description: 'Research Paper Mindmap Visualizer 🧠',
      technologies: ['TypeScript', 'Next.js', 'React.js', 'Node.js', 'Python', 'FastAPI', 'Neo4j']
    },
    {
      imagePath: 'bayes_studio_logo.jpg',
      companyName: 'Bayes Studio',
      companyLink: 'https://bayesstudio.com/',
      role: 'API and Data Integration Intern',
      date: 'October 2024 - December 2024',
      description: 'Wildfire Prevention APIs and Datasets 📝',
      technologies: ['REST APIs', 'Datasets', 'Excel']
    }
  ]

  return (
    <section className='relative w-full overflow-hidden min-h-screen pb-16'>
      {/* Content */}
      <div className='relative z-10 text-white py-6 sm:py-8 md:py-10 px-4'>
        <h1 className='mb-18 text-center text-3xl sm:text-4xl font-bold pb-2'>
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