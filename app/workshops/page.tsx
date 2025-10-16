import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Users, Clock, Award, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"
import YouTubeCarousel from "@/components/video-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workshops de IA para Empresas | Alexandre Guimarães - Especialista em Inteligência Artificial",
  description: "Contrate workshops de IA para sua empresa. Workshop IA para Negócios (4h) e Imersão de IA (8h). Alexandre Guimarães é especialista em IA aplicada para empresas. A questão não é mais se vamos utilizar a IA, mas por que ainda não utilizamos?",
  keywords: [
    "workshop IA empresas",
    "workshop inteligência artificial negócios",
    "imersão IA empresas",
    "workshop IA para gestores",
    "workshop IA para executivos",
    "workshop IA aplicada negócios",
    "treinamento IA empresas",
    "workshop IA estratégico",
    "workshop IA prático",
    "workshop IA para equipes",
    "workshop IA para RH",
    "workshop IA para marketing",
    "workshop IA para vendas",
    "workshop IA corporativo",
    "treinamento corporativo IA",
    "capacitação IA empresas",
    "workshop IA hands-on",
    "workshop IA imersivo",
    "workshop IA personalizado"
  ],
  openGraph: {
    title: "Workshops de IA para Empresas | Alexandre Guimarães",
    description: "Contrate workshops de IA para sua empresa. Workshop IA para Negócios (4h) e Imersão de IA (8h). Especialista em IA aplicada para empresas.",
    url: "https://www.aleguimas.com.br/workshops",
    images: [
      {
        url: "/images/alexandre-guimaraes-palestrante-consultor-ia-2.webp",
        width: 1200,
        height: 630,
        alt: "Alexandre Guimarães ministrando workshop de IA corporativo",
      },
    ],
  },
  alternates: {
    canonical: "/workshops",
  },
}

export default function WorkshopsPage() {
  // Dados dos vídeos de workshops (do mais novo para o mais antigo)
  const workshopVideos = [
    {
      videoId: "Bj1JL-wcIf4",
      title: "Workshop Recente - Alexandre Guimarães"
    },
    {
      videoId: "7y5w6E6QgFM",
      title: "Workshop Recente - Alexandre Guimarães"
    },
    {
      videoId: "yVjrAxDBx4Y",
      title: "Workshop sobre Inteligência Artificial"
    },
    {
      videoId: "jnFA1c9NnhU",
      title: "Workshop sobre Transformação Digital"
    },
    {
      videoId: "12k3ay8YB3w",
      title: "Workshop sobre Liderança na Era Digital"
    },
    {
      videoId: "0CuPmu49yo4",
      title: "Workshop sobre IA Generativa"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full">
                Workshops de IA para Empresas
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Workshops Práticos de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Inteligência Artificial
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Transforme sua equipe com workshops práticos e imersivos de IA. 
                Desenvolva competências reais e implemente soluções que geram resultados.
              </p>
              <p className="text-lg font-semibold text-blue-200 italic">
                "A questão não é mais se vamos utilizar a IA, mas por que ainda não utilizamos?"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <a href="#solicitar-cotacao">Solicitar Cotação</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600"
                >
                  <a href="/palestras">Ver Palestras</a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-[400px] mx-auto">
                <Image
                  src="/images/alexandre_guimas_palestrante_principal.webp"
                  alt="Alexandre Guimarães - Especialista em IA"
                  width={400}
                  height={500}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Por que contratar
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Benefícios dos Workshops</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Descubra como nossos workshops práticos podem transformar sua organização e impulsionar resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Aprendizado Prático</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Workshops hands-on onde sua equipe aprende fazendo, com exercícios práticos e casos reais de aplicação de IA.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Resultados Imediatos</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sua equipe sai do workshop com um plano de ação concreto e ferramentas para implementar IA imediatamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Competência Desenvolvida</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Desenvolva competências reais em IA que sua equipe pode aplicar no dia a dia para otimizar processos e resultados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Workshops
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossos Workshops de IA</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Workshops práticos e imersivos desenvolvidos para capacitar sua equipe com competências reais em IA.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <em>"A questão não é mais se vamos utilizar a IA, mas por que ainda não utilizamos?"</em>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700">4 horas</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Workshop: IA para Negócios
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  O que vivemos de IA, prompts de IA, dicas de ferramentas, cases, troca de experiências e muito mais. 
                  Um workshop completo que aborda o panorama atual da Inteligência Artificial, ensina técnicas de prompts eficazes, 
                  apresenta ferramentas práticas para diferentes áreas de negócio e compartilha cases reais de sucesso. 
                  Ideal para equipes que querem compreender o potencial da IA sem exercícios práticos.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      Teórico
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      Cases Reais
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      Prompts IA
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">4.9 (23 avaliações)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <Badge className="bg-purple-600 text-white hover:bg-purple-700">8 horas</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Imersão de IA
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  Trabalhamos os mesmos pontos do Workshop IA para Negócios, mas acrescentamos a questão fundamental: 
                  onde os participantes vão levantar oportunidades no negócio. Uma imersão completa que combina teoria 
                  e prática, incluindo exercícios práticos onde os participantes identificam e mapeiam oportunidades 
                  reais de aplicação de IA em seus negócios, criando um plano de ação personalizado.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                    >
                      Imersivo
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                    >
                      Exercício Prático
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                    >
                      Plano de Ação
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">5.0 (18 avaliações)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Todos os workshops podem ser adaptados em formato e duração para atender às necessidades específicas
              da sua empresa.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#solicitar-cotacao">Solicitar Cotação Personalizada</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Workshops em Vídeo
            </Badge>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Confira alguns momentos de workshops que realizei em diferentes empresas e eventos.
            </p>
          </div>

          <YouTubeCarousel
            videos={workshopVideos}
            title="Assista trechos de workshops realizados"
            className="mb-12"
          />

          <div className="text-center mb-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <a
                href="https://www.youtube.com/playlist?list=PLgNysRy3xi51EqRQIZUoAsDMsm7qJK07_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                Ver mais conteúdos de workshops
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Hallisson Lima"
              position="CEO"
              company="Agência Dumã"
              testimonial="Foi incrível ver o time imerso nesse workshop, posso dizer que foi um dia marcante para nossa empresa e poder ver que dispertou vários insights me faz pensar o quanto esse momento foi acertivo para nossa empresa."
              image="/images/testimonials/hallison-lima.webp"
              linkedinUrl="https://www.linkedin.com/in/hallisson-lima/"
            />
            <TestimonialCard
              name="Marjorie Cristina"
              position="Diretora"
              company="Empresa Parceira"
              testimonial="O workshop superou todas as nossas expectativas. A equipe saiu com uma visão clara de como implementar IA em nossos processos."
              image="/images/testimonials/marjorie-cristina.webp"
              linkedinUrl="https://www.linkedin.com/in/marjorie-cristina/"
            />
            <TestimonialCard
              name="Carlos Eduardo"
              position="Gerente de TI"
              company="TechCorp"
              testimonial="Excelente workshop! Alexandre conseguiu tornar conceitos complexos de IA em algo prático e aplicável para nosso negócio."
              image="/images/testimonials/carlos-eduardo.webp"
              linkedinUrl="https://www.linkedin.com/in/carlos-eduardo/"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Clientes
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Empresas que confiam no nosso trabalho
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Tenho orgulho de colaborar com organizações que valorizam inovação e transformação digital.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: "FICR", logo: "/images/logos/logo-ficr.webp" },
              { name: "Fecomércio PE", logo: "/images/logos/logo-fecomercio-pe.webp" },
              { name: "SENAC", logo: "/images/logos/logo-senac.webp" },
              { name: "SEBRAE", logo: "/images/logos/logo-sebrae.webp" },
              { name: "Prefeitura de Jaboatão", logo: "/images/logos/logo-prefeitura-jaboatao.webp" },
              { name: "FENEAUTO BR", logo: "/images/logos/logo-feneauto-br.webp" },
              { name: "Natal Home Center", logo: "/images/logos/logo-natal-home-center.webp" },
              { name: "UNINASSAU", logo: "/images/logos/logo-uninassau.webp" },
              { name: "Bluk", logo: "/images/logos/logo-bluk.webp" },
              { name: "Plaza", logo: "/images/logos/logo-plaza.webp" },
              { name: "Tacaruna", logo: "/images/logos/logo-tacaruna.webp" },
            ].map((client, index) => (
              <div
                key={index}
                className="w-36 h-20 md:w-44 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 144px, 176px"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="solicitar-cotacao" className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                Solicite seu Workshop
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pronto para capacitar sua equipe?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Preencha o formulário abaixo e vamos criar um workshop personalizado para as necessidades da sua empresa.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para capacitar sua equipe?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende um workshop e desenvolva competências reais em IA que impulsionarão os resultados da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="#solicitar-cotacao">Solicitar Cotação</a>
            </Button>
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 bg-white hover:bg-blue-50 font-semibold">
                Fale Diretamente Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
