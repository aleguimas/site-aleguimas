import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, ChevronRight, MessageSquare, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TopicCard from "@/components/topic-card"
import TestimonialCard from "@/components/testimonial-card"
import { Badge } from "@/components/ui/badge"
import ClientLogos from "@/components/client-logos"
import VideoTestimonial from "@/components/video-testimonial"
import AnimatedCounter from "@/components/animated-counter"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alexandre Guimarães - Palestrante e Consultor em IA e Transformação Digital",
  description: "Especialista em Inteligência Artificial, Transformação Digital e Inovação. Palestras, workshops e consultoria para empresas que querem se adaptar à era digital.",
  keywords: [
    "palestrante inteligência artificial",
    "consultor transformação digital",
    "palestras IA",
    "workshop inteligência artificial",
    "consultoria inovação",
    "palestrante tecnologia",
    "Alexandre Guimarães",
    "IA aplicada",
    "transformação digital empresas",
    "palestras inovação"
  ],
  openGraph: {
    title: "Alexandre Guimarães - Palestrante e Consultor em IA e Transformação Digital",
    description: "Especialista em Inteligência Artificial, Transformação Digital e Inovação. Palestras, workshops e consultoria para empresas que querem se adaptar à era digital.",
    url: "https://www.aleguimas.com.br",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Alexandre Guimarães - Palestrante e Consultor em IA",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alexandre Guimarães - Palestrante e Consultor",
            "url": "https://www.aleguimas.com.br",
            "logo": "https://www.aleguimas.com.br/images/alexandre_guimas_palestrante_principal.webp",
            "description": "Especialista em Inteligência Artificial, Transformação Digital e Inovação",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://www.linkedin.com/in/alexandre-guimarães",
              "https://www.youtube.com/@aleguimas",
              "https://www.instagram.com/aleguimas"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Palestras e Consultoria",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Palestras sobre Inteligência Artificial",
                    "description": "Palestras dinâmicas sobre IA aplicada para empresas"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workshops de Transformação Digital",
                    "description": "Workshops práticos sobre transformação digital"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Consultoria Estratégica",
                    "description": "Consultoria personalizada em inovação e IA"
                  }
                }
              ]
            }
          })
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full">
                  Palestrante & Consultor
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Transformando negócios através da{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                    Inteligência Artificial
                  </span>
                </h1>
                <p className="text-xl text-gray-300">
                  Ajudo empresas a implementar estratégias de inovação e transformação digital com foco em resultados
                  reais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Agendar Consultoria
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-blue-600/20 text-white border-white hover:bg-blue-600/30"
                  >
                    Contratar Palestra
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10">
                  <Image
                    src="/images/alexandre_guimas_palestrante_principal.webp"
                    alt="Alexandre Guimarães"
                    fill
                    className="object-cover object-[center_top]"
                    priority // Mantém priority apenas para a imagem principal acima da dobra
                    sizes="(max-width: 768px) 288px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">
                  <AnimatedCounter end={5000} suffix="+" className="text-4xl font-bold text-blue-600" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Pessoas Impactadas em 2024</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">
                  <AnimatedCounter end={100} suffix="+" className="text-4xl font-bold text-blue-600" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Palestras Realizadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">
                  <AnimatedCounter end={50} suffix="+" className="text-4xl font-bold text-blue-600" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Empresas Atendidas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">
                  <AnimatedCounter end={20} suffix="+" className="text-4xl font-bold text-blue-600" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] rounded-lg shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/images/alexandre-guimaraes-palestrante-consultor-ia-2.webp"
                    alt="Alexandre Guimarães palestrando no Café Empresarial"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                    priority
                    quality={85}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full">
                  Sobre Alexandre
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Especialista em Transformação Digital e IA
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Com mais de 20 anos de experiência no mercado de tecnologia, ajudo empresas a implementar{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    Estratégias de Inovação e Transformação Digital
                  </span>{" "}
                  com foco em resultados reais.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Minha missão é{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    Desmistificar a Inteligência Artificial
                  </span>{" "}
                  e mostrar como ela pode ser aplicada de forma prática e eficiente em diferentes setores e empresas de
                  todos os portes.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-900">
                    Inteligência Artificial
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-900">
                    Machine Learning
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-900">
                    Transformação Digital
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-900">
                    Inovação
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-900">
                    Estratégia de Negócios
                  </Badge>
                </div>
                <div className="pt-4">
                  <Link href="/trajetoria">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Conheça Minha Trajetória <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                Serviços
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Como posso ajudar sua empresa</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Ofereço soluções personalizadas para impulsionar a inovação e a transformação digital na sua organização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Palestras e Workshops</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Apresentações dinâmicas e interativas sobre IA, inovação e transformação digital, adaptadas para
                  diferentes públicos e objetivos.
                </p>
                <Link href="/palestras" className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Consultoria Estratégica</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Assessoria personalizada para implementação de estratégias de inovação e transformação digital alinhadas
                  aos objetivos do seu negócio.
                </p>
                <Link
                  href="/consultoria"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Treinamentos In-Company</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Programas de capacitação sob medida para equipes, focados em desenvolver habilidades práticas em IA e
                  novas tecnologias.
                </p>
                <Link
                  href="/treinamentos"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                Especialidades
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Principais temas abordados</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Conheça os tópicos que são minha especialidade e como eles podem transformar o seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TopicCard
                title="Inteligência Artificial Aplicada"
                description="Como implementar soluções de IA que geram resultados reais para o seu negócio, desde agentes de atendimentos inteligentes até sistemas de previsão."
                icon="Brain"
              />
              <TopicCard
                title="Transformação Digital"
                description="Estratégias para conduzir processos de transformação digital bem-sucedidos, superando resistências e maximizando resultados."
                icon="Laptop"
              />
              <TopicCard
                title="Inovação e Disrupção"
                description="Como criar uma cultura de inovação na sua empresa e se antecipar às mudanças do mercado com modelos disruptivos."
                icon="Lightbulb"
              />
              <TopicCard
                title="Automação Inteligente"
                description="Estratégias para automatizar processos empresariais utilizando tecnologias inteligentes, aumentando a eficiência e reduzindo custos operacionais."
                icon="BarChart"
              />
              <TopicCard
                title="Liderança na Era Digital"
                description="Desenvolvimento de habilidades de liderança necessárias para conduzir equipes em ambientes de rápida transformação tecnológica."
                icon="Users"
              />
              <TopicCard
                title="Futuro do Trabalho"
                description="Como preparar sua empresa e equipe para as mudanças no mercado de trabalho impulsionadas pela automação e novas tecnologias."
                icon="Briefcase"
              />
            </div>
          </div>
        </section>

        {/* Featured Talk Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/alexandre-guimaraes-palestrante-consultor-ia-2.webp"
                  alt="IA o Novo Básico - Palestra em destaque"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full">
                  Palestra em Destaque
                </Badge>
                <h2 className="text-3xl font-bold">IA o Novo Básico</h2>
                <p className="text-xl text-gray-300">
                  Nesta palestra, exploro como a Inteligência Artificial se tornou uma habilidade fundamental para
                  profissionais e empresas, e como ela está transformando diversos setores da economia.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">60 minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">Casos práticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">Demonstrações ao vivo</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-white text-blue-900 hover:bg-gray-100 mr-4">
                    <Link href="https://youtu.be/_nZTxmazs8Y" target="_blank" rel="noopener noreferrer">
                      Assistir Palestra
                    </Link>
                  </Button>
                  <Button variant="outline" className="bg-blue-600/20 text-white border-white hover:bg-blue-600/30">
                    <Link href="/videos">Ver Mais Vídeos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                Depoimentos
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">O que dizem sobre meu trabalho</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Feedback de clientes e participantes de palestras e consultorias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Ricardo Santos"
                position="Superintendente"
                company="Instituto Fecomércio PE"
                testimonial="O Instituto Fecomércio estabeleceu uma parceria com Alexandre Guimas para o Café Empresarial, Guimas demonstrou ser um profissional experiente e competente. Sua abordagem centrada em resultados de qualidade é evidente em sua atuação, onde ele demonstra uma compreensão holística dos negócios."
                image="/images/testimonials/ricardo-santos.webp"
                linkedinUrl="https://www.linkedin.com/in/ricardo-santos-965ba2aa/"
              />
              <TestimonialCard
                name="Robson Portela"
                position="Chief Transformation Office"
                company=""
                testimonial="Tive o prazer de trabalhar com Alexandre e atestar o seu profundo conhecimento em Inovação, Digital e TI, com grande nível de engajamento e proatividade. Ele não apenas resolve problemas, mas antecipa e lidera iniciativas. Um verdadeiro ativo para qualquer equipe!"
                image="/images/testimonials/robson-portela.webp"
                linkedinUrl="https://www.linkedin.com/in/rafaelcportela/"
              />
              <TestimonialCard
                name="Bruno Cruz"
                position="Secretário Executivo de Governo Digital"
                company="Prefeitura do Jaboatão dos Guararapes"
                testimonial="Tivemos a honra de desfrutar do conhecimento e larga experiência do Alexandre Guimarães em um de nossos encontros Talk Governo Digital na Prefeitura do Jaboatão dos Guararapes, onde nos trouxe com grande brilhantismo e maestria uma visão simplificada e disruptiva a respeito do potencial da Tecnologia e suas inúmeras aplicações no cotidiano profissional e social. Fantástico!"
                image="/images/testimonials/bruno-cruz-governo-digital.webp"
              />
            </div>

            {/* Video Testimonials */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Depoimentos em Vídeo</h3>
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
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                Clientes
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Empresas que confiam no meu trabalho
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Tenho orgulho de colaborar com organizações que valorizam inovação e transformação digital.
              </p>
            </div>

            <ClientLogos />
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Pronto para transformar seu negócio com IA e inovação?</h2>
              <p className="text-xl text-blue-100">
                Entre em contato para discutirmos como posso ajudar sua empresa a se destacar na era digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="https://wa.me/5581991942628"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Fale Comigo no WhatsApp
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-600/20 text-white border-white hover:bg-blue-600/30"
                >
                  Ver Calendário de Palestras
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
