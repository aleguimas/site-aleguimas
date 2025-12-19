"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface YouTubeVideoCardProps {
  videoId: string
  title: string
  aspectRatio?: "9/16" | "16/9" | "video"
  className?: string
}

export default function YouTubeVideoCard({ 
  videoId, 
  title, 
  aspectRatio = "9/16",
  className = "" 
}: YouTubeVideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  
  const aspectClass = aspectRatio === "9/16" ? "aspect-[9/16]" : aspectRatio === "16/9" ? "aspect-video" : "aspect-video"

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div className={`${aspectClass} relative`}>
        {!playing ? (
          <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            <img
              src={thumbnailUrl}
              alt={title}
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
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  )
}

