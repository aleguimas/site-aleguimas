"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

interface VideoTestimonialProps {
  videoId: string
  clientName: string
  clientPosition: string
  clientCompany: string
  thumbnailUrl?: string
}

export default function VideoTestimonial({
  videoId,
  clientName,
  clientPosition,
  clientCompany,
  thumbnailUrl,
}: VideoTestimonialProps) {
  const [playing, setPlaying] = useState(false)

  // Usa a thumbnail do YouTube automaticamente se não for fornecida uma personalizada
  const thumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {!playing ? (
            <>
              <div className="relative aspect-[9/16] cursor-pointer" onClick={() => setPlaying(true)}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <img
                  src={thumbnail || "/placeholder.svg"}
                  alt={`Depoimento de ${clientName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <div className="aspect-[9/16]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={`Depoimento de ${clientName}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-[9/16]"
              ></iframe>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">{clientName}</h3>
          {(clientPosition || clientCompany) && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {[clientPosition, clientCompany].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
