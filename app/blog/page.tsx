import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/sanity-queries'

// Configuração de revalidação
export const revalidate = 60 // Revalidar a cada 1 minuto

export const metadata: Metadata = {
  title: 'Blog - Alexandre Guimarães',
  description: 'Artigos sobre Inteligência Artificial, Transformação Digital e Inovação. Insights e análises sobre tecnologia e negócios.',
  openGraph: {
    title: 'Blog - Alexandre Guimarães',
    description: 'Artigos sobre Inteligência Artificial, Transformação Digital e Inovação.',
    url: 'https://www.aleguimas.com.br/blog',
  },
}

// Função para formatar data
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full">
              Blog & Artigos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Insights sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Inteligência Artificial e Inovação
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Artigos, análises e insights sobre como a tecnologia está transformando os negócios e a sociedade.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Card key={post._id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative w-full overflow-hidden rounded-t-lg" style={{ aspectRatio: '940/726' }}>
                    <Image
                      src={post.mainImage ? `https://cdn.sanity.io/images/548uc9hr/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'}
                      alt={post.title}
                      fill
                      className="object-contain group-hover:opacity-95 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug.current}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  {/* Meta informações */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags?.slice(0, 3).map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags && post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button asChild variant="ghost" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-950">
                    <Link href={`/blog/${post.slug.current}`} className="flex items-center gap-2">
                      Ler mais
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Nenhum post encontrado
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Em breve novos artigos estarão disponíveis.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
