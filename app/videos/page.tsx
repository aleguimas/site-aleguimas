import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import FeaturedVideo from "@/components/featured-video"
import VideoTestimonial from "@/components/video-testimonial"
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
}

export default function VideosPage() {
  // Dados dos vídeos organizados por categoria (do mais novo para o mais antigo)
  const workshopVideos = [
    {
      videoId: "QlpxFDwocgE",
      title: "Innovation Meeting BR 2025"
    },
    {
      videoId: "oE9N_FrcceA",
      title: "Imersão de IA - In Company"
    },
    {
      videoId: "E08kJTSTO0Q",
      title: "Oficina Marketing Digital - Alexandre Guimarães"
    },
    {
      videoId: "2v7P9rZQEes",
      title: "Workshop IA Time Bluk - Alexandre Guimarães"
    },
    {
      videoId: "X9RXkSHYSsQ",
      title: "Workshop IA Time Shopping Tacaruna - Alexandre Guimarães"
    },
    {
      videoId: "yVjrAxDBx4Y",
      title: "Agentes de IA e Automação"
    },
    {
      videoId: "dW67Ldv3oWM",
      title: "A Nova Revolução da IA"
    },
    {
      videoId: "Fgp0wXLuPO8",
      title: "Marketing Digital o Básico Bem Feito"
    },
    {
      videoId: "-xtOHXqwjwJ0",
      title: "IA na Gestão Pública"
    }
  ]

  const testimonialVideos = [
    {
      videoId: "1dhqCP7inhU",
      title: "Depoimentos Time Bluk - Alexandre Guimarães"
    },
    {
      videoId: "oDHZ29wHhes",
      title: "Depoimento - Rafaela Santos"
    },
    {
      videoId: "1TRqJSdCy5w",
      title: "Depoimento - Henrique Vila Nova"
    },
    {
      videoId: "Rx0j5CvY3us",
      title: "Depoimento - Ygor Valença"
    },
    {
      videoId: "-6I49F9sDcQ",
      title: "Depoimento - Kleber Carvalho"
    }
  ]

  return (
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
          <div className="mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Palestras
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conteúdos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeaturedVideo
              videoId="_nZTxmazs8Y"
              title="IA o Novo Básico - Araripina PE"
              description="Como ferramentas de IA generativa estão revolucionando diferentes setores e como as empresas podem se beneficiar."
              category="Inteligência Artificial"
              duration="3:45"
            />
            <FeaturedVideo
              videoId="xAHt88kr_cU"
              title="A Nova Revolução da IA"
              description="Workshop 2025 realizado junto a Fecomércio trazendo novidades e os Agentes de IA"
              category="Inteligência Artificial"
              duration="1:31:00"
            />
            <FeaturedVideo
              videoId="zSKgpf1X15k"
              title="Tráfego Pago não VENDE!"
              description="O tráfego pago não é o único fator determinante para as vendas no seu e-commerce."
              category="Maketing Digital"
              duration="31:10"
            />
          </div>

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
  )
}
