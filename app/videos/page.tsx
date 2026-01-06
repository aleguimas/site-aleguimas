import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import YouTubeCarousel from "@/components/youtube-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vídeos e Conteúdos - Palestras e Workshops",
  description: "Assista palestras, workshops e depoimentos sobre Inteligência Artificial, Transformação Digital e Inovação. Conteúdo exclusivo de Alexandre Guimarães.",
  keywords: [
    "vídeos inteligência artificial",
    "palestras IA online",
    "workshop transformação digital",
    "vídeos inovação",
    "palestras tecnologia",
    "depoimentos IA",
    "conteúdo digital"
  ],
  openGraph: {
    title: "Vídeos e Conteúdos - Palestras e Workshops",
    description: "Assista palestras, workshops e depoimentos sobre Inteligência Artificial, Transformação Digital e Inovação. Conteúdo exclusivo de Alexandre Guimarães.",
    url: "https://www.aleguimas.com.br/videos",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Vídeos e Conteúdos - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/videos",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vídeos e Conteúdos - Palestras e Workshops",
    description: "Assista palestras, workshops e depoimentos sobre Inteligência Artificial, Transformação Digital e Inovação. Conteúdo exclusivo de Alexandre Guimarães.",
    images: ["/images/alexandre_guimas_palestrante_principal.webp"],
  },
}

export default function VideosPage() {
  // Dados dos vídeos de palestras (do mais novo para o mais antigo)
  const palestraVideos = [
    {
      videoId: "K3iLssLFwFM",
      title: "Palestra - Alexandre Guimarães",
      description: "Palestra sobre Inteligência Artificial e Transformação Digital ministrada por Alexandre Guimarães"
    },
    {
      videoId: "_nZTxmazs8Y",
      title: "IA o Novo Básico - Araripina PE",
      description: "Palestra 'IA o Novo Básico' realizada em Araripina PE, explorando como a Inteligência Artificial se tornou fundamental para profissionais e empresas"
    },
    {
      videoId: "xAHt88kr_cU",
      title: "A Nova Revolução da IA",
      description: "Palestra sobre a nova revolução da Inteligência Artificial e seu impacto nos negócios e na sociedade"
    },
    {
      videoId: "zSKgpf1X15k",
      title: "Tráfego Pago não VENDE!",
      description: "Palestra sobre marketing digital e estratégias de tráfego pago para vendas"
    }
  ]

  // Dados dos vídeos organizados por categoria (do mais novo para o mais antigo)
  const workshopVideos = [
    {
      videoId: "QlpxFDwocgE",
      title: "Innovation Meeting BR 2025",
      description: "Workshop sobre inovação e Inteligência Artificial realizado no Innovation Meeting BR 2025"
    },
    {
      videoId: "oE9N_FrcceA",
      title: "Imersão de IA - In Company",
      description: "Imersão completa de Inteligência Artificial para empresas, com exercícios práticos e identificação de oportunidades"
    },
    {
      videoId: "E08kJTSTO0Q",
      title: "Oficina Marketing Digital - Alexandre Guimarães",
      description: "Oficina prática sobre Marketing Digital com foco em estratégias modernas e ferramentas de IA"
    },
    {
      videoId: "2v7P9rZQEes",
      title: "Workshop IA Time Bluk - Alexandre Guimarães",
      description: "Workshop de Inteligência Artificial realizado para o time da Bluk, com foco em aplicações práticas"
    },
    {
      videoId: "X9RXkSHYSsQ",
      title: "Workshop IA Time Shopping Tacaruna - Alexandre Guimarães",
      description: "Workshop de IA realizado para o time do Shopping Tacaruna, explorando automações e melhorias de processos"
    },
    {
      videoId: "yVjrAxDBx4Y",
      title: "Agentes de IA e Automação",
      description: "Workshop sobre agentes de Inteligência Artificial e automação de processos empresariais"
    },
    {
      videoId: "dW67Ldv3oWM",
      title: "A Nova Revolução da IA",
      description: "Workshop explorando a nova revolução da Inteligência Artificial e suas aplicações práticas"
    },
    {
      videoId: "Fgp0wXLuPO8",
      title: "Marketing Digital o Básico Bem Feito",
      description: "Workshop sobre fundamentos do Marketing Digital e como fazer o básico bem feito"
    },
    {
      videoId: "-xtOHXqwjwJ0",
      title: "IA na Gestão Pública",
      description: "Workshop sobre aplicação de Inteligência Artificial na gestão pública e serviços governamentais"
    }
  ]

  const testimonialVideos = [
    {
      videoId: "1dhqCP7inhU",
      title: "Depoimentos Time Bluk - Alexandre Guimarães",
      description: "Depoimentos de participantes do workshop de IA realizado para o time da Bluk"
    },
    {
      videoId: "oDHZ29wHhes",
      title: "Depoimento - Rafaela Santos",
      description: "Depoimento de Rafaela Santos, Radialista e Jornalista, sobre palestras e workshops de IA"
    },
    {
      videoId: "1TRqJSdCy5w",
      title: "Depoimento - Henrique Vila Nova",
      description: "Depoimento de Henrique Vila Nova, Coordenador do curso de CCO da FICR, sobre palestras de Inteligência Artificial"
    },
    {
      videoId: "Rx0j5CvY3us",
      title: "Depoimento - Ygor Valença",
      description: "Depoimento de Ygor Valença, Presidente da FENEAUTO BR e SINDCFC-PE, sobre workshops de IA"
    }
  ]

  // Schema de vídeo para SEO
  const allVideos = [...palestraVideos, ...workshopVideos, ...testimonialVideos]
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vídeos e Conteúdos - Alexandre Guimarães",
    "description": "Palestras, workshops e depoimentos sobre Inteligência Artificial, Transformação Digital e Inovação",
    "url": "https://www.aleguimas.com.br/videos",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allVideos.map((video, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "VideoObject",
          "name": video.title,
          "description": video.description || `${video.title} - Conteúdo sobre Inteligência Artificial, Transformação Digital e Inovação por Alexandre Guimarães`,
          "thumbnailUrl": `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
          "uploadDate": new Date().toISOString(),
          "contentUrl": `https://www.youtube.com/watch?v=${video.videoId}`,
          "embedUrl": `https://www.youtube.com/embed/${video.videoId}`,
          "publisher": {
            "@type": "Person",
            "name": "Alexandre Guimarães",
            "url": "https://www.aleguimas.com.br"
          }
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema)
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Vídeos e Conteúdos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Confira trechos de palestras, workshops e conteúdos sobre Inteligência Artificial, Transformação Digital,
            Inovação e Marketing Digital.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <YouTubeCarousel
            videos={palestraVideos}
            title="Palestras"
            className="mb-20"
            aspectRatio="16/9"
          />

          {/* Separador visual */}
          <div className="border-t border-gray-200 dark:border-gray-700 mb-16"></div>

          {/* Shorts - Workshops e Palestras */}
          <div className="mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Shorts
            </Badge>
          </div>

          <YouTubeCarousel
            videos={workshopVideos}
            title="Workshops e Palestras"
            className="mb-20"
          />

          {/* Separador visual */}
          <div className="border-t border-gray-200 dark:border-gray-700 mb-16"></div>

          {/* Depoimentos */}
          <div className="mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Depoimentos
            </Badge>
          </div>

          <YouTubeCarousel
            videos={testimonialVideos}
            title="Depoimentos de Clientes"
          />
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
