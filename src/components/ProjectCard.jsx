import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  screenshot, 
  githubLink, 
  deploymentLink,
}) => {
  return (
    <div className='group relative max-w-3xl mx-auto bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-900/50'>
      
      {/* Screenshot */}
      <div className='relative h-64 sm:h-72 overflow-hidden'>
        <img 
          src={screenshot} 
          alt={`${title} screenshot`}
          className='w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
      </div>

      {/* Content */}
      <div className='p-6 sm:p-8'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-2xl sm:text-3xl font-bold text-neutral-100'>
            {title}
          </h3>
          <div className='flex gap-4 flex-shrink-0 mt-1'>
            {githubLink && (
              <a 
                href={githubLink} 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-neutral-400 hover:text-white transition-colors'
                title='View Source Code'
              >
                <FaGithub className='w-6 h-6' />
              </a>
            )}
            {deploymentLink && (
              <a 
                href={deploymentLink} 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-neutral-400 hover:text-blue-400 transition-colors'
                title='View Live Demo'
              >
                <FiExternalLink className='w-6 h-6' />
              </a>
            )}
          </div>
        </div>

        <p className='mt-4 text-neutral-300 text-base leading-relaxed'>
          {description}
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          {technologies.map((tech) => (
            <span 
              key={tech}
              className='px-3 py-1.5 text-sm font-medium text-blue-300 bg-blue-900/30 border border-blue-800/50 rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard