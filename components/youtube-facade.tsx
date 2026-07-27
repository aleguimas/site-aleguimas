"use client"

import { useState } from "react"

type YoutubeFacadeProps = {
  id: string
  title: string
  /** Opcional: por padrão usa a thumbnail hqdefault do próprio vídeo. */
  thumbnail?: string
  /** true = card vertical 9:16 (Shorts); false = 16:9 padrão (vídeo normal). */
  vertical?: boolean
  className?: string
}

const isValidYouTubeId = (id: string) => /^[a-zA-Z0-9_-]{11}$/.test(id)

/**
 * Card padrão de vídeo do YouTube em todo o site.
 * Mostra só a thumbnail + botão play (vermelho, estilo YouTube) até o clique;
 * o iframe carrega apenas ao assistir — mantém LCP/Core Web Vitals bons.
 * O <a> real preserva o link para SEO/no-JS.
 */
export default function YoutubeFacade({
  id,
  title,
  thumbnail,
  vertical = false,
  className = "",
}: YoutubeFacadeProps) {
  const [playing, setPlaying] = useState(false)
  const aspect = vertical ? "aspect-[9/16]" : "aspect-video"
  const thumb = thumbnail ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  if (!isValidYouTubeId(id)) {
    return (
      <div
        className={`relative ${aspect} overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 ${className}`}
        role="img"
        aria-label="Vídeo indisponível"
      >
        <span className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-slate-500 dark:text-slate-400">
          Vídeo indisponível
        </span>
      </div>
    )
  }

  if (playing) {
    return (
      <div className={`relative ${aspect} overflow-hidden rounded-xl bg-black ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      onClick={(event) => {
        event.preventDefault()
        setPlaying(true)
      }}
      aria-label={`Assistir "${title}" no player`}
      className={`group relative block ${aspect} overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
      {/* Botão play estilo YouTube */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-[68px] items-center justify-center rounded-xl bg-[#f00] shadow-lg transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </a>
  )
}
