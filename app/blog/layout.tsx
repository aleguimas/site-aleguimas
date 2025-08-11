import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Blog - Alexandre Guimarães',
    template: '%s | Blog - Alexandre Guimarães'
  },
  description: 'Artigos sobre Inteligência Artificial, Transformação Digital e Inovação. Insights e análises sobre tecnologia e negócios.',
  keywords: [
    'blog inteligência artificial',
    'artigos transformação digital',
    'blog tecnologia',
    'artigos inovação',
    'blog IA',
    'Alexandre Guimarães blog'
  ],
  openGraph: {
    title: 'Blog - Alexandre Guimarães',
    description: 'Artigos sobre Inteligência Artificial, Transformação Digital e Inovação.',
    url: 'https://www.aleguimas.com.br/blog',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {children}
      </main>
      <Footer />
    </>
  )
}
