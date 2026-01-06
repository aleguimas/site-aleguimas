"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, AlertCircle } from "lucide-react"

interface FeaturedVideoProps {
  videoId: string
  title: string
  description: string
  category: string
  duration?: string
  thumbnailUrl?: string
}

// Validação de videoId do YouTube
const isValidYouTubeId = (id: string): boolean => {
  return /^[a-zA-Z0-9_-]{11}$/.test(id)
}

export default function FeaturedVideo({
  videoId,
  title,
  description,
  category,
  duration = "5 min",
  thumbnailUrl,
}: FeaturedVideoProps) {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  // Validação do videoId
  if (!isValidYouTubeId(videoId)) {
    return (
      <Card className="border-none shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="h-5 w-5" />
            <p>ID de vídeo inválido</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Usa a thumbnail do YouTube automaticamente com fallback para diferentes qualidades
  const getYouTubeThumbnail = (videoId: string) => {
    if (thumbnailUrl) return thumbnailUrl
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }
  const thumbnail = getYouTubeThumbnail(videoId)

  const handleIframeError = () => {
    setError(true)
    setPlaying(false)
  }

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {!playing || error ? (
            <>
              <div className="relative aspect-video cursor-pointer" onClick={() => setPlaying(true)}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <img 
                  src={thumbnail || "/placeholder.svg"} 
                  alt={title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => setError(true)}
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {duration}
              </div>
              {error && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                  <div className="text-center text-white p-4">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Erro ao carregar vídeo</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline mt-2 inline-block"
                    >
                      Assistir no YouTube
                    </a>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="aspect-video relative">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                onError={handleIframeError}
                loading="lazy"
              />
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-900"
            >
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
