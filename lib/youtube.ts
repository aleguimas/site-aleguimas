/**
 * Busca vídeos de uma playlist do YouTube via feed RSS público.
 * Sem API key, sem cota. Renderizado no servidor com revalidação (ISR),
 * então os títulos/thumbnails entram no HTML — bom para SEO.
 */

export type YoutubeVideo = {
  id: string
  title: string
  publishedAt: string
  url: string
  embedUrl: string
  thumbnail: string
}

const feedUrl = (playlistId: string) =>
  `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistId)}`

function decodeXml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
}

/**
 * Retorna os últimos vídeos da playlist (mais recente primeiro, como o feed entrega).
 * Em qualquer falha, retorna [] — o chamador decide o fallback.
 */
export async function getPlaylistVideos(playlistId: string, limit = 12): Promise<YoutubeVideo[]> {
  if (!playlistId) return []

  try {
    const res = await fetch(feedUrl(playlistId), {
      // Revalida de hora em hora: pega novos vídeos sem refazer build.
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []

    const xml = await res.text()
    const entries = xml.split("<entry>").slice(1)
    const videos: YoutubeVideo[] = []

    for (const entry of entries) {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]
      if (!id) continue

      const rawTitle = entry.match(/<title>([^<]*)<\/title>/)?.[1]
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1]

      videos.push({
        id,
        title: rawTitle ? decodeXml(rawTitle) : "Depoimento",
        publishedAt: published ?? "",
        url: `https://www.youtube.com/watch?v=${id}`,
        embedUrl: `https://www.youtube.com/embed/${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      })

      if (videos.length >= limit) break
    }

    return videos
  } catch {
    return []
  }
}

/**
 * Divide uma playlist entre duas páginas sem repetir vídeos, sempre priorizando os mais novos.
 * Intercala por paridade: "even" (índices 0,2,4… — inclui o mais recente) e "odd" (1,3,5…).
 * A cada novo upload as duas listas se atualizam e continuam disjuntas.
 */
export async function getPartitionedPlaylistVideos(
  playlistId: string,
  group: "even" | "odd",
  limit = 8,
  exclude: string[] = [],
): Promise<YoutubeVideo[]> {
  const all = await getPlaylistVideos(playlistId, 15)
  const wanted = group === "even" ? 0 : 1
  return all
    .filter((_, index) => index % 2 === wanted)
    .filter((video) => !exclude.includes(video.id))
    .slice(0, limit)
}

/** Formata a data de publicação no padrão usado no site (ex.: "nov. de 2025"). */
export function formatVideoDate(iso: string): string {
  if (!iso) return ""
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ""
  return date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
}
