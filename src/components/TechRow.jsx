import TechChip from './TechChip'
import { useEffect, useRef, useState } from 'react'

const TechRow = ({ items, rowIndex }) => {
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, translateX: 0 })
  const [translateX, setTranslateX] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  
  const isReverse = rowIndex % 2 === 1
  const speed = 0.3 // Slower, smoother speed
  
  // Double the items for seamless infinite scroll
  const doubledItems = [...items, ...items]

  // Calculate the width of one set of items
  useEffect(() => {
    if (containerRef.current) {
      // Calculate the total width of one set of items (including gaps)
      const totalWidth = containerRef.current.scrollWidth / 2
      setItemWidth(totalWidth)
      
      // Start at different positions for reverse rows to avoid synchronization
      if (isReverse) {
        setTranslateX(-totalWidth)
      }
    }
  }, [items, isReverse])

  // Smooth auto-scroll animation with proper wrapping
  useEffect(() => {
    const animate = () => {
      // Only animate if not hovered and not dragging
      if (!isHovered && !isDragging && itemWidth > 0) {
        setTranslateX(prev => {
          let newTranslateX
          
          if (isReverse) {
            newTranslateX = prev - speed
            // When we've scrolled one full set to the left, reset seamlessly
            if (newTranslateX <= -itemWidth) {
              return 0
            }
          } else {
            newTranslateX = prev + speed
            // When we've scrolled one full set to the right, reset seamlessly
            if (newTranslateX >= 0) {
              return -itemWidth
            }
          }
          
          return newTranslateX
        })
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isReverse, isHovered, isDragging, itemWidth])

  // Smooth hover transitions
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Drag functionality with smooth transitions
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart({
      x: e.clientX,
      translateX: translateX
    })
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e) => {
    if (!isDragging || itemWidth === 0) return
    
    e.preventDefault()
    const deltaX = e.clientX - dragStart.x
    const sensitivity = 1.2
    const newTranslateX = dragStart.translateX + deltaX * sensitivity
    
    setTranslateX(newTranslateX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
    document.body.style.cursor = ''
    
    // Animation will automatically resume and handle wrapping naturally
    // No forced normalization to prevent snap-back
  }

  // Global mouse events for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart, itemWidth])

  return (
    <div className="relative py-3 overflow-hidden">
      {/* Main scrolling container */}
      <div 
        ref={containerRef}
        className="flex gap-4 will-change-transform"
        style={{
          transform: `translateX(${translateX}px)`,
          // Only apply transition when not dragging for immediate drag response
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          cursor: isDragging ? 'grabbing' : isHovered ? 'grab' : 'default'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        {doubledItems.map((item, index) => (
          <div 
            key={`${item.name}-${index}`} 
            className="flex-shrink-0 select-none transform transition-transform duration-200 ease-out hover:scale-105"
            style={{ 
              pointerEvents: isDragging ? 'none' : 'auto'
            }}
          >
            <TechChip text={item.name} icon={item.icon} color={item.color} />
          </div>
        ))}
      </div>
      
      {/* Left fade overlay - replicates global background pattern */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 75% 70%, rgba(147, 51, 234, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 90%, rgba(99, 102, 241, 0.04) 0%, transparent 35%),
            linear-gradient(to right, 
              #000000 0%, 
              rgba(0, 0, 0, 0.98) 25%, 
              rgba(0, 0, 0, 0.9) 50%, 
              rgba(0, 0, 0, 0.6) 75%, 
              transparent 100%
            )
          `,
          opacity: isHovered ? 0.85 : 1
        }}
      />
      
      {/* Right fade overlay - replicates global background pattern */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 75% 70%, rgba(147, 51, 234, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 90%, rgba(99, 102, 241, 0.04) 0%, transparent 35%),
            linear-gradient(to left, 
              #000000 0%, 
              rgba(0, 0, 0, 0.98) 25%, 
              rgba(0, 0, 0, 0.9) 50%, 
              rgba(0, 0, 0, 0.6) 75%, 
              transparent 100%
            )
          `,
          opacity: isHovered ? 0.85 : 1
        }}
      />
    </div>
  )
}

export default TechRow