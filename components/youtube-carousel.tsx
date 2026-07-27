"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import YoutubeFacade from "@/components/youtube-facade"
import { formatVideoDate } from "@/lib/youtube"

interface YouTubeVideo {
  videoId: string
  title: string
  publishedAt?: string
}

interface YouTubeCarouselProps {
  videos: YouTubeVideo[]
  title: string
  className?: string
  aspectRatio?: "9/16" | "16/9"
}

const isValidYouTubeId = (id: string): boolean => /^[a-zA-Z0-9_-]{11}$/.test(id)

export default function YouTubeCarousel({ videos, title, className = "", aspectRatio = "9/16" }: YouTubeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const isVertical = aspectRatio === "9/16"

  const getVisibleItems = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }

  useEffect(() => {
    const updateVisibleItems = () => setVisibleItems(getVisibleItems())
    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [aspectRatio])

  // Filtra vídeos com IDs inválidos
  const validVideos = videos.filter((video) => isValidYouTubeId(video.videoId))

  const maxIndex = Math.max(0, validVideos.length - visibleItems)

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clampedIndex)

    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.scrollWidth / validVideos.length
      scrollContainerRef.current.scrollTo({ left: clampedIndex * itemWidth, behavior: "smooth" })
    }
  }

  const nextSlide = () => scrollToIndex(currentIndex + 1)
  const prevSlide = () => scrollToIndex(currentIndex - 1)

  if (validVideos.length === 0) return null

  return (
    <div className={`relative ${className}`}>
      <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="h-10 w-10 touch-manipulation p-0"
            aria-label="Vídeo anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10 touch-manipulation p-0"
            aria-label="Próximo vídeo"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="relative touch-pan-x overflow-hidden">
        <div
          ref={scrollContainerRef}
          className={`flex transition-transform duration-300 ease-in-out ${isVertical ? "gap-2 sm:gap-3" : "gap-4 sm:gap-6"}`}
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {validVideos.map((video, index) => (
            <div
              key={`${video.videoId}-${index}`}
              className="flex flex-shrink-0 flex-col items-center justify-start"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className={isVertical ? "mx-auto w-[80%]" : "w-full"}>
                <YoutubeFacade
                  id={video.videoId}
                  title={video.title}
                  vertical={isVertical}
                  className="shadow-lg"
                />
              </div>
              <div className={`mt-3 ${isVertical ? "w-[80%] text-center" : "w-full text-left"}`}>
                {video.title && (
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
                    {video.title}
                  </h3>
                )}
                {video.publishedAt && (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    YouTube · {formatVideoDate(video.publishedAt)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de posição */}
      {validVideos.length > visibleItems && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Ir para o grupo ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
