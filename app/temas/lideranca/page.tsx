import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Users, Target, Heart, TrendingUp, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liderança na Era Digital - Palestras e Consultoria | Alexandre Guimarães",
  description: "Palestras e consultoria sobre Liderança na Era Digital. Aprenda como liderar equipes remotas, gerenciar mudanças e inspirar inovação em tempos de transformação digital.",
  keywords: [
    "liderança era digital",
    "palestras liderança",
    "consultoria liderança",
    "liderança remota",
    "palestrante liderança",
    "workshop liderança",
    "gestão mudanças",
    "liderança inovação"
  ],
  openGraph: {
    title: "Liderança na Era Digital - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria sobre Liderança na Era Digital. Aprenda como liderar equipes remotas, gerenciar mudanças e inspirar inovação em tempos de transformação digital.",
    url: "https://www.aleguimas.com.br/temas/lideranca",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Liderança na Era Digital - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/temas/lideranca",
  },
}

export default function LiderancaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 px-4 py-1 rounded-full mb-6">
            Liderança na Era Digital
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Liderança na Era Digital: Inspire e Transforme
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-indigo-100">
            Descubra como liderar equipes remotas, gerenciar mudanças e inspirar inovação 
            em tempos de transformação digital.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Por que a Liderança Digital é essencial nos dias de hoje?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                A liderança tradicional não é mais suficiente. Os líderes de hoje precisam 
                navegar em um mundo digital, gerenciar equipes remotas e inspirar inovação constante.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Em minhas palestras sobre Liderança na Era Digital, compartilho estratégias 
                práticas e insights sobre como se tornar um líder eficaz no mundo moderno.
              </p>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Solicitar Palestra sobre Liderança
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <Crown className="w-16 h-16 mb-6 text-indigo-200" />
                <h3 className="text-2xl font-bold mb-4">Competências do Líder Digital</h3>
                <ul className="space-y-3 text-indigo-100">
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-yellow-300" />
                    Gestão de equipes remotas
                  </li>
                  <li className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-yellow-300" />
                    Adaptabilidade e resiliência
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 mr-3 text-yellow-300" />
                    Inteligência emocional
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-yellow-300" />
                    Visão estratégica digital
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Palestras Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Palestras sobre Liderança na Era Digital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Crown className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Liderança Remota Eficaz
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como liderar equipes distribuídas, manter engajamento e produtividade 
                    em ambientes virtuais.
                  </p>
                  <Badge className="bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                    75 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Gestão de Mudanças
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como conduzir transformações organizacionais e ajudar equipes a 
                    navegar períodos de mudança.
                  </p>
                  <Badge className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    90 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Liderança Inspiradora
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como inspirar inovação, criatividade e alto desempenho em equipes 
                    através de uma liderança autêntica.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    60 min
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Pronto para se tornar um líder da era digital?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Agende uma palestra ou workshop sobre Liderança na Era Digital e descubra 
              como inspirar e transformar sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Solicitar Palestra
                </Button>
              </a>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Consultoria em Liderança
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