"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, AlertCircle } from "lucide-react"
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

// Validação de videoId do YouTube
const isValidYouTubeId = (id: string): boolean => {
  return /^[a-zA-Z0-9_-]{11}$/.test(id)
}

export default function YouTubeCarousel({ videos, title, className = "", aspectRatio = "9/16" }: YouTubeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(1)
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())
  const [errorVideos, setErrorVideos] = useState<Set<number>>(new Set())
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

  const handlePlay = (index: number) => {
    setPlayingVideos(prev => new Set(prev).add(index))
  }

  const handleError = (index: number) => {
    setErrorVideos(prev => new Set(prev).add(index))
    setPlayingVideos(prev => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
  }

  // Filtrar vídeos com IDs inválidos
  const validVideos = videos.filter((video, index) => {
    if (!isValidYouTubeId(video.videoId)) {
      console.warn(`Vídeo inválido no índice ${index}: ${video.videoId}`)
      return false
    }
    return true
  })

  if (validVideos.length === 0) {
    return null
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
          className={`flex transition-transform duration-300 ease-in-out ${
            aspectRatio === "9/16" ? "gap-2 sm:gap-3" : "gap-4 sm:gap-6"
          }`}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
          }}
        >
          {validVideos.map((video, index) => {
            const isPlaying = playingVideos.has(index)
            const hasError = errorVideos.has(index)
            const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`

            return (
              <div
                key={`${video.videoId}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div 
                  className={aspectRatio === "16/9" 
                    ? "aspect-video relative rounded-lg overflow-hidden shadow-lg w-full" 
                    : "aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg w-[70%] mx-auto"}
                >
                  {!isPlaying || hasError ? (
                    <div 
                      className="absolute inset-0 w-full h-full cursor-pointer group"
                      onClick={() => handlePlay(index)}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={() => handleError(index)}
                      />
                      {!hasError && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                              <Play className="h-6 w-6 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                      )}
                      {hasError && (
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                          <div className="text-center text-white p-4">
                            <AlertCircle className="h-6 w-6 mx-auto mb-2" />
                            <p className="text-xs mb-2">Erro ao carregar</p>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.videoId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline text-xs"
                            >
                              Assistir no YouTube
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      onError={() => handleError(index)}
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



