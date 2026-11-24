import { MetadataRoute } from 'next'
import { getPostsForSitemap } from '@/lib/sanity-queries'

export const dynamic = 'force-static'

type SitemapPost = {
  slug: string
  publishedAt: string
  _updatedAt?: string
}

// Data real de última alteração do post (a mais recente entre publicação e edição)
function postLastModified(post: SitemapPost): Date {
  const published = new Date(post.publishedAt)
  const updated = post._updatedAt ? new Date(post._updatedAt) : published
  return updated > published ? updated : published
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aleguimas.com.br').replace(/\/$/, '')
  const posts: SitemapPost[] = (await getPostsForSitemap()).filter((post: SitemapPost) => post.slug)

  // O site usa trailingSlash: true, então toda URL do sitemap termina com "/"
  // para bater com a canônica e não passar por redirecionamento 301.
  const url = (path: string) => `${baseUrl}${path}/`.replace(/\/+$/, '/')

  // Data do post mais recente, usada na home e na listagem do blog
  const latestPostDate = posts.length
    ? new Date(Math.max(...posts.map((post) => postLastModified(post).getTime())))
    : undefined

  // URLs estáticas do site. Sem lastModified: a data do build não é a data
  // real de alteração, e um lastmod falso faz o Google ignorar o sinal.
  const staticUrls: MetadataRoute.Sitemap = [
    { url: url(''), lastModified: latestPostDate, priority: 1 },
    { url: url('/blog'), lastModified: latestPostDate, priority: 0.9 },
    { url: url('/palestras'), priority: 0.9 },
    { url: url('/para-cdls-e-sebraes'), priority: 0.9 },
    { url: url('/consultoria'), priority: 0.9 },
    { url: url('/workshops'), priority: 0.9 },
    { url: url('/trajetoria'), priority: 0.8 },
    { url: url('/videos'), priority: 0.8 },
    { url: url('/ebook'), priority: 0.7 },
    { url: url('/contato'), priority: 0.7 },
    { url: url('/kit-imprensa'), priority: 0.6 },
    { url: url('/politica-de-privacidade'), priority: 0.3 },
    { url: url('/temas/inteligencia-artificial'), priority: 0.7 },
    { url: url('/temas/transformacao-digital'), priority: 0.7 },
    { url: url('/temas/inovacao'), priority: 0.7 },
    { url: url('/temas/lideranca'), priority: 0.7 },
    { url: url('/temas/futuro-do-trabalho'), priority: 0.7 },
    { url: url('/temas/agentes-ia'), priority: 0.7 },
  ]

  // URLs dos posts do blog, com a data real de cada post
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: postLastModified(post),
    priority: 0.8,
  }))

  return [...staticUrls, ...postUrls]
}
