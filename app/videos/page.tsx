import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import FeaturedVideo from "@/components/featured-video"
import VideoTestimonial from "@/components/video-testimonial"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          <div className="mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Shorts
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Workshops e Palestras</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <VideoTestimonial
              videoId="-xtOHXqwjwJ0"
              clientName="IA na Gestão Pública"
              clientPosition="Workshop"
              clientCompany="Prefeitura do Jaboatão dos Guararapes"
              thumbnailUrl="/images/shorts/workshop-ia-na-pratica-para-gestao-publica-alexandre-guimarães.webp"
            />
            <VideoTestimonial
              videoId="Fgp0wXLuPO8"
              clientName="Marketing Digital o Básico Bem Feito"
              clientPosition="Oficina"
              clientCompany="SEBRAE PE"
              thumbnailUrl="/images/shorts/oficina-marketing-digital-o-básico-bem-feito-alexandre-guimarães.webp"
            />
            <VideoTestimonial
              videoId="dW67Ldv3oWM"
              clientName="A Nova Revolução da IA"
              clientPosition="Workshop"
              clientCompany="Fecomércio PE"
              thumbnailUrl="/images/shorts/workshop-ia-a-nova-revolucao-alexandre-guimarães.webp"
            />
            <VideoTestimonial
              videoId="yVjrAxDBx4Y"
              clientName="Agentes de IA e Automação"
              clientPosition="Imersão"
              clientCompany="MagnoTech SP"
              thumbnailUrl="/images/shorts/imersão-agentes-ia-automacao-alexandre-guimarães.webp"
            />
          </div>

          <div className="mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Depoimentos
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Depoimentos de Clientes</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <VideoTestimonial
              videoId="-6I49F9sDcQ"
              clientName="Kleber Carvalho"
              clientPosition="CEO"
              clientCompany="Natal Home Center"
              thumbnailUrl="/images/testimonials/kleber-carvalho-thumb.webp"
            />
            <VideoTestimonial
              videoId="Rx0j5CvY3us"
              clientName="Ygor Valença"
              clientPosition="Presidente"
              clientCompany="FENEAUTO BR e SINDCFC-PE"
              thumbnailUrl="/images/testimonials/ygor-valenca-thumb.webp"
            />
            <VideoTestimonial
              videoId="1TRqJSdCy5w"
              clientName="Henrique Vila Nova"
              clientPosition="Coordenador do curso de CCO"
              clientCompany="FICR"
              thumbnailUrl="/images/testimonials/henrique-vila-nova-thumb.webp"
            />
            <VideoTestimonial
              videoId="oDHZ29wHhes"
              clientName="Rafaela Santos"
              clientPosition="Radialista"
              clientCompany="Jornalista"
              thumbnailUrl="/images/testimonials/rafaela-santos-thumb.webp"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
