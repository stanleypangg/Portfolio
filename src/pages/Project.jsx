import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  const projects = [
    {
      imagePath: '',
      name: 'Cool Project',
      link: '',
      description: '',
      technologies: []
    },
  ]

  return (
    <section className='w-full relative overflow-hidden bg-black text-white pb-16'>
      <div>
        <h1 className='sm:py-16 md:py-20 px-4 text-center text-4xl sm:text-5xl py-10 font-semibold'>
          My Projects
        </h1>
      </div>
      <div>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            imagePath={project.imagePath}
            link={project.imagePath}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  )
}

export default Project