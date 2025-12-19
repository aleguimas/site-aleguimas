"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface YouTubeVideo {
  videoId: string
  title: string
}

interface YouTubeCarouselProps {
  videos: YouTubeVideo[]
  title: string
  className?: string
}

export default function YouTubeCarousel({ videos, title, className = "" }: YouTubeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())
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

  const visibleItems = getVisibleItems()
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

  const handlePlay = (index: number) => {
    setPlayingVideos(prev => new Set(prev).add(index))
  }

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
          }}
        >
          {videos.map((video, index) => {
            const isPlaying = playingVideos.has(index)
            const thumbnailUrl = getThumbnailUrl(video.videoId)

            return (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg">
                  {!isPlaying ? (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => handlePlay(index)}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 group-hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                            <Play className="h-6 w-6 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
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



