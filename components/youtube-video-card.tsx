"use client"

import { useState } from "react"
import { Play, AlertCircle } from "lucide-react"

interface YouTubeVideoCardProps {
  videoId: string
  title: string
  aspectRatio?: "9/16" | "16/9" | "video"
  className?: string
}

// Validação de videoId do YouTube
const isValidYouTubeId = (id: string): boolean => {
  return /^[a-zA-Z0-9_-]{11}$/.test(id)
}

export default function YouTubeVideoCard({ 
  videoId, 
  title, 
  aspectRatio = "9/16",
  className = "" 
}: YouTubeVideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  // Validação do videoId
  if (!isValidYouTubeId(videoId)) {
    return (
      <div className={`relative rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 ${className}`}>
        <div className={`${aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-video"} relative flex items-center justify-center`}>
          <div className="text-center p-4">
            <AlertCircle className="h-6 w-6 mx-auto mb-2 text-red-600 dark:text-red-400" />
            <p className="text-xs text-gray-600 dark:text-gray-400">Vídeo inválido</p>
          </div>
        </div>
      </div>
    )
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  
  const aspectClass = aspectRatio === "9/16" ? "aspect-[9/16]" : aspectRatio === "16/9" ? "aspect-video" : "aspect-video"

  const handleIframeError = () => {
    setError(true)
    setPlaying(false)
  }

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div className={`${aspectClass} relative`}>
        {!playing || error ? (
          <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setError(true)}
            />
            {!error && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                <div className="text-center text-white p-4">
                  <AlertCircle className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-xs mb-2">Erro ao carregar</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
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
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  )
}





