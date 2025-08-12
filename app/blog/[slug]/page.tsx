import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { getPost, getAllPostSlugs } from '@/lib/sanity-queries'
import { portableTextToHtml } from '@/lib/sanity'

// Função para formatar data
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Gerar metadados dinâmicos
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.',
    }
  }

  const seo = post.seo || {}

  // Configurar robots baseado no SEO
  const robots = {
    index: seo.noindex !== true,
    follow: seo.nofollow !== true,
  }

  return {
    title: seo.title || post.title,
    description: seo.description || post.excerpt,
    robots,
    openGraph: {
      type: 'article',
      title: seo.og_title || seo.title || post.title,
      description: seo.og_description || seo.description || post.excerpt,
      images: seo.og_image || (post.mainImage ? `https://cdn.sanity.io/images/548uc9hr/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : ''),
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags || [],
    },
    twitter: {
      card: (seo.og_image || post.mainImage) ? 'summary_large_image' : 'summary',
      title: seo.og_title || seo.title || post.title,
      description: seo.og_description || seo.description || post.excerpt,
      images: seo.og_image || (post.mainImage ? `https://cdn.sanity.io/images/548uc9hr/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : ''),
    },
    alternates: {
      canonical: seo.canonical || `https://www.aleguimas.com.br/blog/${params.slug}`,
    },
  }
}

// Gerar rotas estáticas
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug: string) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const seo = post.seo || {}
  const content = portableTextToHtml(post.body || [])

  // Gerar JSON-LD Article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": seo.title || post.title,
    "description": seo.description || post.excerpt,
    "image": seo.og_image || (post.mainImage ? `https://cdn.sanity.io/images/548uc9hr/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : ''),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.aleguimas.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alexandre Guimarães",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aleguimas.com.br/images/alexandre_guimas_palestrante_principal.webp"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": seo.canonical || `https://www.aleguimas.com.br/blog/${params.slug}`
    },
    "keywords": post.tags?.join(', ') || '',
    "articleSection": post.category,
    "inLanguage": "pt-BR"
  }

  // Gerar JSON-LD FAQ se existir
  const faqJsonLd = seo.faq && seo.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faq.map((item: any) => ({
      "@type": "Question",
      "name": item.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.resposta
      }
    }))
  } : null

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD Scripts */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
        }}
      />
      {faqJsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd)
          }}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Blog
              </Link>
            </nav>

            {/* Categoria */}
            <div className="mb-4">
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full">
                {post.category}
              </Badge>
            </div>

            {/* Título Principal - H1 único */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta informações */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" aria-hidden="true" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Tags do artigo">
              {post.tags?.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-white/10 text-white border-white/20" role="listitem">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Imagem destacada */}
            <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
              <Image
                src={post.mainImage ? `https://cdn.sanity.io/images/548uc9hr/production/${post.mainImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'}
                alt={`Imagem de capa: ${post.title}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Ações */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" aria-label="Compartilhar artigo">
                  <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  Compartilhar
                </Button>
                <Button variant="outline" size="sm" aria-label="Salvar artigo">
                  <Bookmark className="w-4 h-4 mr-2" aria-hidden="true" />
                  Salvar
                </Button>
              </div>
            </div>

            {/* Conteúdo do Post */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              {/* Resumo */}
              <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 italic">
                {post.excerpt}
              </div>
              
              {/* Conteúdo do Post */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* FAQ se existir */}
              {seo.faq && seo.faq.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
                  <div className="space-y-4">
                    {seo.faq.map((item: any, index: number) => (
                      <details key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <summary className="font-semibold cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                          {item.pergunta}
                        </summary>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {item.resposta}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Autor */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Especialista em Inteligência Artificial e Transformação Digital
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Relacionados - Temporariamente removido */}
            {/* TODO: Implementar posts relacionados com Sanity */}

            {/* CTA */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 mt-12">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Gostou do artigo?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Entre em contato para discutir como podemos ajudar sua empresa com Inteligência Artificial e Transformação Digital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contato">Solicitar Consultoria</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/blog">Ver Mais Artigos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </main>
    </div>
  )
}
