import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import FeaturedVideo from "@/components/featured-video"
import VideoTestimonial from "@/components/video-testimonial"

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Vídeos e Conteúdos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Confira trechos de palestras, workshops e conteúdos sobre Inteligência Artificial, Transformação Digital e
            Inovação.
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
              videoId="_nZTxmazs8Y" // Substitua pelo ID real do vídeo do YouTube
              title="IA o Novo Básico - Araripina PE"
              description="Como ferramentas de IA generativa estão revolucionando diferentes setores e como as empresas podem se beneficiar."
              category="Inteligência Artificial"
              duration="3:45"
            />
            <FeaturedVideo
              videoId="xAHt88kr_cU" // Substitua pelo ID real do vídeo do YouTube
              title="A Nova Revolução da IA"
              description="Workshop 2025 realizado junto a Fecomércio trazendo novidades e os Agentes de IA"
              category="Inteligência Artificial"
              duration="4:20"
            />
            <FeaturedVideo
              videoId="dQw4w9WgXcQ" // Substitua pelo ID real do vídeo do YouTube
              title="Inovação e Disrupção"
              description="Como criar uma cultura de inovação na sua empresa e se antecipar às mudanças do mercado."
              category="Inovação"
              duration="2:55"
            />
          </div>

          <div className="mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Workshops
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Workshops e Treinamentos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeaturedVideo
              videoId="dQw4w9WgXcQ" // Substitua pelo ID real do vídeo do YouTube
              title="Workshop: Implementando IA na sua Empresa"
              description="Passo a passo para implementar soluções de IA que geram resultados reais para o seu negócio."
              category="Workshop"
              duration="5:10"
            />
            <FeaturedVideo
              videoId="dQw4w9WgXcQ" // Substitua pelo ID real do vídeo do YouTube
              title="Treinamento: Liderança na Era Digital"
              description="Desenvolvimento de habilidades de liderança necessárias para conduzir equipes em ambientes digitais."
              category="Treinamento"
              duration="4:35"
            />
            <FeaturedVideo
              videoId="dQw4w9WgXcQ" // Substitua pelo ID real do vídeo do YouTube
              title="Conteúdo Exclusivo: Futuro do Trabalho"
              description="Como preparar sua empresa e equipe para as mudanças no mercado de trabalho impulsionadas pela automação."
              category="Conteúdo Exclusivo"
              duration="3:20"
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
