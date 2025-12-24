"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface YouTubeVideo {
  videoId: string
  title: string
}

interface YouTubeCarouselProps {
  videos: YouTubeVideo[]
  title: string
  className?: string
  aspectRatio?: "9/16" | "16/9"
}

export default function YouTubeCarousel({ videos, title, className = "", aspectRatio = "9/16" }: YouTubeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getItemsPerView = () => {
    if (aspectRatio === "16/9") {
      return {
        mobile: 1,
        tablet: 2,
        desktop: 3
      }
    }
    return {
      mobile: 1,
      tablet: 2,
      desktop: 4
    }
  }
  
  const itemsPerView = getItemsPerView()

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
  }, [aspectRatio])

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
          className="flex gap-4 sm:gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
          }}
        >
          {videos.map((video, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div 
                  className={aspectRatio === "16/9" 
                    ? "aspect-video relative rounded-lg overflow-hidden shadow-lg w-full" 
                    : "aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg w-[70%] mx-auto"}
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
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



