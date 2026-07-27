import Image from "next/image"
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
    <figure className="group flex h-full flex-col border border-slate-200 dark:border-slate-800 border-t-2 border-t-slate-200 dark:border-t-slate-800 hover:border-t-blue-600 dark:hover:border-t-blue-500 bg-white dark:bg-slate-900 p-8 transition-colors">
      <Quote className="mb-6 h-8 w-8 flex-shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />

      <blockquote className="mb-8 flex-grow text-gray-700 dark:text-gray-300 leading-relaxed">
        &ldquo;{testimonial}&rdquo;
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-700">
          <Image
            src={image || "/placeholder.svg?height=48&width=48"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-semibold text-gray-900 dark:text-white">{name}</p>
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Perfil de ${name} no LinkedIn`}
                className="flex-shrink-0 text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
          </div>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">{position}</p>
          {company && <p className="truncate text-sm text-slate-500 dark:text-slate-400">{company}</p>}
        </div>
      </figcaption>
    </figure>
  )
}
