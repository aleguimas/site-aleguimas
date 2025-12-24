import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Globe, Zap, TrendingUp, Rocket } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Futuro do Trabalho - Palestras e Consultoria | Alexandre Guimarães",
  description: "Palestras e consultoria sobre o Futuro do Trabalho. Descubra como se preparar para as mudanças no mercado de trabalho, automação e novas formas de trabalho.",
  keywords: [
    "futuro do trabalho",
    "palestras futuro trabalho",
    "consultoria futuro trabalho",
    "automação trabalho",
    "palestrante futuro trabalho",
    "workshop futuro trabalho",
    "novas profissões",
    "mercado trabalho futuro"
  ],
  openGraph: {
    title: "Futuro do Trabalho - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria sobre o Futuro do Trabalho. Descubra como se preparar para as mudanças no mercado de trabalho, automação e novas formas de trabalho.",
    url: "https://www.aleguimas.com.br/temas/futuro-do-trabalho",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Futuro do Trabalho - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/temas/futuro-do-trabalho",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Futuro do Trabalho - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria sobre o Futuro do Trabalho. Descubra como se preparar para as mudanças no mercado de trabalho, automação e novas formas de trabalho.",
    images: ["/images/alexandre_guimas_palestrante_principal.webp"],
  },
}

export default function FuturoDoTrabalhoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-teal-500/20 text-teal-300 hover:bg-teal-500/20 px-4 py-1 rounded-full mb-6">
            Futuro do Trabalho
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Futuro do Trabalho: Prepare-se para o Amanhã
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-teal-100">
            Descubra como se preparar para as mudanças no mercado de trabalho, automação 
            e as novas formas de trabalho que estão surgindo.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Como se preparar para o futuro do trabalho?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                O trabalho está mudando rapidamente. Automação, IA e novas tecnologias estão 
                transformando profissões e criando oportunidades nunca vistas antes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Em minhas palestras sobre o Futuro do Trabalho, exploro as tendências emergentes, 
                as habilidades necessárias e como se adaptar a essas mudanças.
              </p>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Solicitar Palestra sobre Futuro do Trabalho
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
                <Clock className="w-16 h-16 mb-6 text-teal-200" />
                <h3 className="text-2xl font-bold mb-4">Tendências do Futuro do Trabalho</h3>
                <ul className="space-y-3 text-teal-100">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-yellow-300" />
                    Automação e IA no trabalho
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 text-yellow-300" />
                    Trabalho remoto e híbrido
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-yellow-300" />
                    Novas habilidades necessárias
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-yellow-300" />
                    Gig economy e freelancing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Palestras Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Palestras sobre o Futuro do Trabalho
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-teal-100 dark:bg-teal-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Automação e o Futuro das Profissões
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como a IA e automação estão transformando diferentes setores e quais 
                    profissões estão emergindo.
                  </p>
                  <Badge className="bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                    75 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Trabalho Remoto e Híbrido
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como se adaptar ao trabalho remoto, manter produtividade e equilibrar 
                    vida pessoal e profissional.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    60 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Habilidades do Futuro
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Quais habilidades desenvolver para se manter relevante e competitivo 
                    no mercado de trabalho do futuro.
                  </p>
                  <Badge className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    90 min
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Pronto para se preparar para o futuro do trabalho?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Agende uma palestra ou workshop sobre o Futuro do Trabalho e descubra como 
              se adaptar às mudanças que estão por vir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  Solicitar Palestra
                </Button>
              </a>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Consultoria sobre Futuro do Trabalho
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