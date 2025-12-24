"use client"

import { Card, CardContent } from "@/components/ui/card"

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
}: VideoTestimonialProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-[9/16]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Depoimento de ${clientName}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-[9/16]"
            ></iframe>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
