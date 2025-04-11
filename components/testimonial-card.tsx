import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Linkedin } from "lucide-react"
import Link from "next/link"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  testimonial: string
  image: string
  linkedinUrl?: string
}

export default function TestimonialCard({
  name,
  position,
  company,
  testimonial,
  image,
  linkedinUrl,
}: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-6">
          <Quote className="h-8 w-8 text-blue-600/20 dark:text-blue-400/20" />
        </div>
        <div className="flex-grow mb-6">
          <p className="text-gray-700 dark:text-gray-300 italic line-clamp-6 sm:line-clamp-none">"{testimonial}"</p>
        </div>
        <div className="flex items-center mt-auto">
          <div className="mr-4 flex-shrink-0">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={image || "/placeholder.svg?height=48&width=48"}
                alt={name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-900 dark:text-white truncate">{name}</p>
              {linkedinUrl && (
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex-shrink-0 ml-2"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p className="truncate">{position}</p>
              {company && <p className="truncate">{company}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
