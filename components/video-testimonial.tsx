"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, AlertCircle } from "lucide-react"

interface VideoTestimonialProps {
  videoId: string
  clientName: string
  clientPosition: string
  clientCompany: string
  thumbnailUrl?: string
}

// Validação de videoId do YouTube
const isValidYouTubeId = (id: string): boolean => {
  return /^[a-zA-Z0-9_-]{11}$/.test(id)
}

export default function VideoTestimonial({
  videoId,
  clientName,
  thumbnailUrl,
}: VideoTestimonialProps) {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  // Validação do videoId
  if (!isValidYouTubeId(videoId)) {
    return (
      <Card className="border-none shadow-lg overflow-hidden">
        <CardContent className="p-0 flex items-center justify-center">
          <div className="relative w-[70%] aspect-[9/16] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-center p-4">
              <AlertCircle className="h-6 w-6 mx-auto mb-2 text-red-600 dark:text-red-400" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Vídeo inválido</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const thumbnail = thumbnailUrl || defaultThumbnail

  const handleIframeError = () => {
    setError(true)
    setPlaying(false)
  }

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardContent className="p-0 flex items-center justify-center">
        <div className="relative w-[70%]">
          <div className="aspect-[9/16] relative">
            {!playing || error ? (
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer group"
                onClick={() => setPlaying(true)}
              >
                <img
                  src={thumbnail}
                  alt={`Depoimento de ${clientName}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  onError={() => setError(true)}
                />
                {!error && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 group-hover:bg-black/30 transition-colors rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <Play className="h-5 w-5 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 rounded-lg">
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
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`Depoimento de ${clientName}`}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
                onError={handleIframeError}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
