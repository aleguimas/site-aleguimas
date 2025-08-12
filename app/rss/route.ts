import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/sanity-queries'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidar a cada hora

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aleguimas.com.br'
  const posts = await getAllPosts()

  // Função para escapar caracteres especiais em XML
  function escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }

  // Função para formatar data no formato RSS
  function formatRssDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toUTCString()
  }

  // Gerar XML do RSS
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog - Alexandre Guimarães</title>
    <link>${baseUrl}/blog</link>
    <description>Artigos sobre Inteligência Artificial, Transformação Digital e Inovação. Insights e análises sobre tecnologia e negócios.</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
    ${posts.map((post: any) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug.current}</link>
      <guid>${baseUrl}/blog/${post.slug.current}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${formatRssDate(post.publishedAt)}</pubDate>
      <category>${escapeXml(post.category)}</category>
      ${post.tags?.map((tag: string) => `<category>${escapeXml(tag)}</category>`).join('') || ''}
    </item>`).join('')}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
