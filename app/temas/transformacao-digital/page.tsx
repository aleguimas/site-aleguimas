import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Globe, Database, Shield, TrendingUp, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transformação Digital - Palestras e Consultoria | Alexandre Guimarães",
  description: "Palestras e consultoria em Transformação Digital. Aprenda como digitalizar processos, modernizar sua empresa e se adaptar à era digital com estratégias comprovadas.",
  keywords: [
    "transformação digital",
    "palestras transformação digital",
    "consultoria digital",
    "digitalização empresas",
    "palestrante transformação digital",
    "workshop transformação digital",
    "modernização empresas",
    "tecnologia empresas"
  ],
  openGraph: {
    title: "Transformação Digital - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria em Transformação Digital. Aprenda como digitalizar processos, modernizar sua empresa e se adaptar à era digital com estratégias comprovadas.",
    url: "https://www.aleguimas.com.br/temas/transformacao-digital",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Transformação Digital - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/temas/transformacao-digital",
  },
}

export default function TransformacaoDigitalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/20 px-4 py-1 rounded-full mb-6">
            Transformação Digital
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transformação Digital: Modernize sua Empresa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Descubra como digitalizar processos, modernizar operações e posicionar sua empresa 
            para o sucesso na era digital.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Por que a Transformação Digital é crucial para sua empresa?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                A Transformação Digital não é apenas sobre tecnologia - é sobre reimaginar completamente 
                como sua empresa opera, serve clientes e compete no mercado.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Em minhas palestras sobre Transformação Digital, compartilho estratégias práticas e 
                casos de sucesso de empresas que se reinventaram digitalmente e hoje lideram seus setores.
              </p>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Solicitar Palestra sobre Transformação Digital
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <Globe className="w-16 h-16 mb-6 text-purple-200" />
                <h3 className="text-2xl font-bold mb-4">Pilares da Transformação Digital</h3>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-3 text-yellow-300" />
                    Experiência do cliente digital
                  </li>
                  <li className="flex items-center">
                    <Database className="w-5 h-5 mr-3 text-yellow-300" />
                    Dados e analytics avançados
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-yellow-300" />
                    Segurança e compliance
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-yellow-300" />
                    Processos otimizados
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Palestras Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Palestras sobre Transformação Digital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Estratégia de Transformação Digital
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como criar e executar uma estratégia de transformação digital alinhada com os 
                    objetivos de negócio da sua empresa.
                  </p>
                  <Badge className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    90 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Experiência do Cliente Digital
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como criar jornadas digitais que encantam clientes e aumentam a fidelização 
                    através da tecnologia.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    75 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Automação e Eficiência
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Identifique oportunidades de automação e otimize processos para aumentar 
                    produtividade e reduzir custos.
                  </p>
                  <Badge className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    60 min
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar sua empresa digitalmente?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Agende uma palestra ou workshop sobre Transformação Digital e descubra como 
              modernizar sua empresa para o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Solicitar Palestra
                </Button>
              </a>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Consultoria Digital
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 