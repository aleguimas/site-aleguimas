import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Target, Users, TrendingUp, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inovação - Palestras e Consultoria | Alexandre Guimarães",
  description: "Palestras e consultoria em Inovação. Descubra como criar uma cultura de inovação, desenvolver produtos inovadores e se destacar no mercado competitivo.",
  keywords: [
    "palestras inovação",
    "consultoria inovação",
    "cultura inovação",
    "inovação empresas",
    "palestrante inovação",
    "workshop inovação",
    "produtos inovadores",
    "estratégia inovação"
  ],
  openGraph: {
    title: "Inovação - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria em Inovação. Descubra como criar uma cultura de inovação, desenvolver produtos inovadores e se destacar no mercado competitivo.",
    url: "https://www.aleguimas.com.br/temas/inovacao",
    images: [
      {
        url: "/images/alexandre-guimaraes-palestrante-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "Inovação - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/temas/inovacao",
  },
}

export default function InovacaoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300 mb-6">Inovação</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-[-0.03em]">
            Inovação: O Motor do Crescimento Empresarial
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Descubra como criar uma cultura de inovação, desenvolver produtos disruptivos e 
            posicionar sua empresa como líder no mercado.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Por que a Inovação é fundamental para o sucesso empresarial?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                A Inovação não é apenas sobre criar novos produtos - é sobre transformar a forma 
                como pensamos, trabalhamos e resolvemos problemas.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Em minhas palestras sobre Inovação, compartilho metodologias comprovadas e casos 
                de sucesso de empresas que se tornaram referência em inovação em seus setores.
              </p>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Solicitar Palestra sobre Inovação
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <Lightbulb className="w-16 h-16 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Elementos da Inovação</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <Rocket className="w-5 h-5 mr-3 text-yellow-300" />
                    Cultura de experimentação
                  </li>
                  <li className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-yellow-300" />
                    Foco no cliente
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-yellow-300" />
                    Colaboração multidisciplinar
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-yellow-300" />
                    Aprendizado contínuo
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Palestras Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Palestras sobre Inovação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Cultura de Inovação
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como criar e manter uma cultura organizacional que estimula a criatividade 
                    e a inovação em todos os níveis.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    75 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Design Thinking na Prática
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Metodologia para resolver problemas complexos e desenvolver soluções 
                    inovadoras centradas no usuário.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    90 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Inovação Disruptiva
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como identificar oportunidades de inovação disruptiva e criar produtos 
                    que revolucionam mercados.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    60 min
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Pronto para inovar e se destacar no mercado?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma palestra ou workshop sobre Inovação e descubra como transformar 
              sua empresa através da criatividade e inovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Solicitar Palestra
                </Button>
              </a>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Consultoria em Inovação
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