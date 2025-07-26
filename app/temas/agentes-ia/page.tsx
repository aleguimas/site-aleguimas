import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, Target, Users, TrendingUp, Cpu } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agentes de IA - Palestras e Consultoria | Alexandre Guimarães",
  description: "Palestras e consultoria sobre Agentes de IA. Descubra como implementar agentes inteligentes, automação avançada e sistemas autônomos em sua empresa.",
  keywords: [
    "agentes de IA",
    "palestras agentes IA",
    "consultoria agentes IA",
    "automação IA",
    "palestrante agentes IA",
    "workshop agentes IA",
    "sistemas autônomos",
    "IA autônoma"
  ],
  openGraph: {
    title: "Agentes de IA - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria sobre Agentes de IA. Descubra como implementar agentes inteligentes, automação avançada e sistemas autônomos em sua empresa.",
    url: "https://www.aleguimas.com.br/temas/agentes-ia",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Agentes de IA - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/temas/agentes-ia",
  },
}

export default function AgentesIAPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 px-4 py-1 rounded-full mb-6">
            Agentes de IA
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agentes de IA: Automação Inteligente do Futuro
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-cyan-100">
            Descubra como implementar agentes inteligentes, automação avançada e sistemas 
            autônomos que revolucionam processos empresariais.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Por que os Agentes de IA são o futuro da automação?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Os Agentes de IA representam a próxima evolução da automação - sistemas 
                inteligentes que podem tomar decisões, aprender e executar tarefas complexas 
                de forma autônoma.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Em minhas palestras sobre Agentes de IA, mostro casos práticos de como 
                empresas estão implementando agentes inteligentes para otimizar processos, 
                reduzir custos e aumentar eficiência.
              </p>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Solicitar Palestra sobre Agentes de IA
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
                <Bot className="w-16 h-16 mb-6 text-cyan-200" />
                <h3 className="text-2xl font-bold mb-4">Capacidades dos Agentes de IA</h3>
                <ul className="space-y-3 text-cyan-100">
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 mr-3 text-yellow-300" />
                    Processamento inteligente
                  </li>
                  <li className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-yellow-300" />
                    Tomada de decisão autônoma
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-yellow-300" />
                    Interação natural com humanos
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
              Palestras sobre Agentes de IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Fundamentos dos Agentes de IA
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como funcionam os agentes inteligentes, seus tipos e aplicações 
                    práticas em diferentes setores empresariais.
                  </p>
                  <Badge className="bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                    75 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Implementação de Agentes Autônomos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Estratégias para implementar agentes de IA em processos empresariais 
                    e maximizar retorno sobre investimento.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    90 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Agentes de IA na Prática
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Casos de uso reais e demonstrações de agentes de IA em ação, 
                    desde chatbots até sistemas de automação complexos.
                  </p>
                  <Badge className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    60 min
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <Cpu className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Pronto para implementar agentes de IA em sua empresa?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Agende uma palestra ou workshop sobre Agentes de IA e descubra como 
              automatizar processos com inteligência artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Solicitar Palestra
                </Button>
              </a>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Consultoria em Agentes de IA
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