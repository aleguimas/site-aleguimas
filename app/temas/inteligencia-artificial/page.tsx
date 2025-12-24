import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Target, Users, TrendingUp, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inteligência Artificial - Palestras e Consultoria | Alexandre Guimarães",
  description: "Palestras e consultoria especializada em Inteligência Artificial. Descubra como a IA está transformando negócios e como implementar soluções inteligentes em sua empresa.",
  keywords: [
    "palestras inteligência artificial",
    "consultoria IA",
    "IA para empresas",
    "inteligência artificial negócios",
    "palestrante IA",
    "workshop inteligência artificial",
    "transformação digital IA",
    "automação inteligente"
  ],
  openGraph: {
    title: "Inteligência Artificial - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria especializada em Inteligência Artificial. Descubra como a IA está transformando negócios e como implementar soluções inteligentes em sua empresa.",
    url: "https://www.aleguimas.com.br/temas/inteligencia-artificial",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Inteligência Artificial - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/temas/inteligencia-artificial",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inteligência Artificial - Palestras e Consultoria | Alexandre Guimarães",
    description: "Palestras e consultoria especializada em Inteligência Artificial. Descubra como a IA está transformando negócios e como implementar soluções inteligentes em sua empresa.",
    images: ["/images/alexandre_guimas_palestrante_principal.webp"],
  },
}

export default function InteligenciaArtificialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-6">
            Inteligência Artificial
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Inteligência Artificial: O Futuro dos Negócios
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Descubra como a IA está revolucionando diferentes setores e como sua empresa pode se beneficiar 
            das tecnologias mais avançadas do mercado.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Por que a Inteligência Artificial é essencial para seu negócio?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                A Inteligência Artificial não é mais uma tecnologia do futuro - é uma realidade que está 
                transformando a forma como as empresas operam, tomam decisões e atendem seus clientes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Em minhas palestras e workshops sobre IA, mostro casos práticos de como empresas estão 
                implementando soluções inteligentes para aumentar produtividade, reduzir custos e criar 
                experiências únicas para seus clientes.
              </p>
              <a
                href="https://wa.me/5581991942628"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Solicitar Palestra sobre IA
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <Brain className="w-16 h-16 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Principais Benefícios da IA</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-yellow-300" />
                    Automação de processos repetitivos
                  </li>
                  <li className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-yellow-300" />
                    Tomada de decisão baseada em dados
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-yellow-300" />
                    Experiência do cliente personalizada
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-yellow-300" />
                    Aumento de produtividade e eficiência
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Palestras Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Palestras sobre Inteligência Artificial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    IA Generativa na Prática
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como ChatGPT, DALL-E e outras ferramentas estão revolucionando a criação de conteúdo 
                    e automação de tarefas criativas.
                  </p>
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    60 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    IA para Tomada de Decisão
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Estratégias para implementar sistemas de IA que apoiam decisões estratégicas e 
                    operacionais nas empresas.
                  </p>
                  <Badge className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    90 min
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    IA no Atendimento ao Cliente
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Como chatbots e assistentes virtuais estão transformando o relacionamento com 
                    clientes e aumentando a satisfação.
                  </p>
                  <Badge className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    75 min
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar seu negócio com IA?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma palestra ou workshop personalizado sobre Inteligência Artificial e descubra 
              como implementar soluções inteligentes em sua empresa.
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
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Consultoria em IA
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