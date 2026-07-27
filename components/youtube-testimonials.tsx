import { ArrowUpRight } from "lucide-react"
import { getPlaylistVideos } from "@/lib/youtube"
import YoutubeFacade from "@/components/youtube-facade"

type YoutubeTestimonialsProps = {
  playlistId: string
  /** Máximo de vídeos exibidos. */
  limit?: number
  /** Título da subseção. */
  heading?: string
}

function formatDate(iso: string): string {
  if (!iso) return ""
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ""
  return date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
}

/**
 * Seção de depoimentos em vídeo puxados automaticamente de uma playlist do YouTube.
 * Server Component: os dados entram no HTML (bom para SEO) e emitem VideoObject JSON-LD real.
 */
export default async function YoutubeTestimonials({
  playlistId,
  limit = 8,
  heading = "Depoimentos em vídeo",
}: YoutubeTestimonialsProps) {
  const videos = await getPlaylistVideos(playlistId, limit)
  if (videos.length === 0) return null

  const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.title,
        thumbnailUrl: video.thumbnail,
        uploadDate: video.publishedAt,
        contentUrl: video.url,
        embedUrl: video.embedUrl,
      },
    })),
  }

  return (
    <div className="mt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-8 flex items-end justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{heading}</h3>
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          Ver todos no YouTube <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <article key={video.id} className="group flex flex-col">
            <YoutubeFacade id={video.id} title={video.title} thumbnail={video.thumbnail} vertical />
            <h4 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {video.title}
              </a>
            </h4>
            {video.publishedAt && (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                YouTube · {formatDate(video.publishedAt)}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
