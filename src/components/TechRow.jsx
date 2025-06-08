import TechChip from './TechChip'
import { useEffect, useRef, useState } from 'react'

const TechRow = ({ items, rowIndex }) => {
  const scrollRef = useRef(null)
  const animationRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const isReverse = rowIndex % 2 === 1
  const speed = 0.5 // pixels per frame for smoother animation
  
  const duplicatedItems = [...items, ...items]

  // Auto-scroll animation with smooth frame rate
  useEffect(() => {
    let lastTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        if (!isHovered && !isDragging && scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth / 2
          
          setScrollPosition(prev => {
            let newPosition
            if (isReverse) {
              newPosition = prev - speed
              if (newPosition <= 0) {
                return maxScroll
              }
            } else {
              newPosition = prev + speed
              if (newPosition >= maxScroll) {
                return 0
              }
            }
            return newPosition
          })
        }
        lastTime = currentTime
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isReverse, isHovered, isDragging, speed])

  // Apply scroll position smoothly
  useEffect(() => {
    if (scrollRef.current && !isDragging) {
      scrollRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition, isDragging])

  // Drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart({
      x: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft
    })
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    e.preventDefault()
    const deltaX = e.clientX - dragStart.x
    let newScrollLeft = dragStart.scrollLeft - deltaX
    
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth / 2
      
      // Handle wrapping during drag
      if (newScrollLeft < 0) {
        newScrollLeft = maxScroll + newScrollLeft
        setDragStart({
          x: dragStart.x,
          scrollLeft: maxScroll
        })
      } else if (newScrollLeft > maxScroll) {
        newScrollLeft = newScrollLeft - maxScroll
        setDragStart({
          x: dragStart.x, 
          scrollLeft: 0
        })
      }
      
      scrollRef.current.scrollLeft = newScrollLeft
      setScrollPosition(newScrollLeft)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
    document.body.style.cursor = ''
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (isDragging) {
      setIsDragging(false)
      document.body.style.userSelect = ''
      document.body.style.cursor = ''
    }
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
  }, [isDragging, dragStart])

  return (
    <div className="relative py-2">
      {/* Scrolling container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{
          cursor: isDragging ? 'grabbing' : isHovered ? 'grab' : 'default',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'auto' // Disable smooth scrolling for manual control
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={`${item.name}-${index}`} 
            className="flex-shrink-0 select-none"
            style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
          >
            <TechChip text={item.name} icon={item.icon} color={item.color} />
          </div>
        ))}
      </div>
      
      {/* Left fade overlay */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, rgb(0, 0, 0), transparent)'
        }}
      />
      
      {/* Right fade overlay */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, rgb(0, 0, 0), transparent)'
        }}
      />
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default TechRow