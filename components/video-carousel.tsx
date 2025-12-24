"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoTestimonial from "@/components/video-testimonial"

interface VideoItem {
  videoId: string
  clientName: string
  clientPosition: string
  clientCompany: string
  thumbnailUrl?: string
}

interface VideoCarouselProps {
  videos: VideoItem[]
  title: string
  className?: string
}

export default function VideoCarousel({ videos, title, className = "" }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  }

  const getVisibleItems = () => {
    if (typeof window === 'undefined') return itemsPerView.mobile
    
    if (window.innerWidth >= 1024) return itemsPerView.desktop
    if (window.innerWidth >= 768) return itemsPerView.tablet
    return itemsPerView.mobile
  }

  useEffect(() => {
    const updateVisibleItems = () => {
      setVisibleItems(getVisibleItems())
    }
    
    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => window.removeEventListener('resize', updateVisibleItems)
  }, [])

  const maxIndex = Math.max(0, videos.length - visibleItems)

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clampedIndex)
    
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.scrollWidth / videos.length
      scrollContainerRef.current.scrollTo({
        left: clampedIndex * itemWidth,
        behavior: 'smooth'
      })
    }
  }

  const nextSlide = () => {
    scrollToIndex(currentIndex + 1)
  }

  const prevSlide = () => {
    scrollToIndex(currentIndex - 1)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-between mb-6 flex-col sm:flex-row gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="h-10 w-10 p-0 touch-manipulation"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10 p-0 touch-manipulation"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden touch-pan-x">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 sm:gap-3 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <VideoTestimonial
                videoId={video.videoId}
                clientName={video.clientName}
                clientPosition={video.clientPosition}
                clientCompany={video.clientCompany}
                thumbnailUrl={video.thumbnailUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de posição */}
      {videos.length > visibleItems && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}



