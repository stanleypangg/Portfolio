import React, { useState, useRef, useEffect } from 'react'

const ExperienceCard = ({ imagePath, companyName, companyLink, role, date, description, technologies = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [description])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <div 
        className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 cursor-pointer hover:bg-gray-800/50 transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg'
        onClick={toggleExpanded}
      >
        {/* Main content - always visible */}
        <div className='flex items-center gap-6'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img 
              className='w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain bg-white/5 p-3'
              src={imagePath} 
              alt={`${companyName} Logo`} 
            />
          </div>
          
          {/* Company info - left aligned */}
          <div className='flex-1 text-left'>
            <h3 className='font-bold text-lg md:text-xl text-white mb-1'>
              {role}
            </h3>
            <h4 className='font-medium text-blue-300 text-base md:text-lg mb-2'>
              <a href={companyLink} target='_blank' rel='noopener noreferrer'>{companyName}</a>
            </h4>
            <p className='text-gray-400 text-sm mb-3'>
              {date}
            </p>
            
            {/* Technologies */}
            {technologies.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className='px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-gray-700/50'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Custom dropdown arrow */}
          <div className='flex-shrink-0'>
            <svg 
              className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Expandable description */}
        <div 
          className='overflow-hidden transition-all duration-500 ease-in-out'
          style={{
            maxHeight: isExpanded ? `${contentHeight + 24}px` : '0px', // +24 for padding
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? '24px' : '0px'
          }}
        >
          <div ref={contentRef} className='border-t border-gray-700/50 pt-4'>
            <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard