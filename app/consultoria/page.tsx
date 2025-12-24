import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Brain, 
  Globe, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Smartphone,
  Database,
  Shield
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultoria - Transformação Digital, Marketing Digital e IA | Alexandre Guimarães",
  description: "Consultoria especializada em Transformação Digital, Marketing Digital e Inteligência Artificial. Transforme sua empresa com estratégias comprovadas e implementação prática.",
  keywords: [
    "consultoria transformação digital",
    "consultoria marketing digital",
    "consultoria inteligência artificial",
    "consultoria IA",
    "consultoria digital",
    "transformação digital empresas",
    "marketing digital estratégico",
    "implementação IA"
  ],
  openGraph: {
    title: "Consultoria - Transformação Digital, Marketing Digital e IA | Alexandre Guimarães",
    description: "Consultoria especializada em Transformação Digital, Marketing Digital e Inteligência Artificial. Transforme sua empresa com estratégias comprovadas e implementação prática.",
    url: "https://www.aleguimas.com.br/consultoria",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Consultoria - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/consultoria",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Consultoria - Transformação Digital, Marketing Digital e IA | Alexandre Guimarães",
    description: "Consultoria especializada em Transformação Digital, Marketing Digital e Inteligência Artificial. Transforme sua empresa com estratégias comprovadas e implementação prática.",
    images: ["/images/alexandre_guimas_palestrante_principal.webp"],
  },
}

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-6">
            Consultoria Especializada
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Consultoria Estratégica para o Futuro Digital
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8">
            Transforme sua empresa com consultoria especializada em Transformação Digital, 
            Marketing Digital e Inteligência Artificial. Estratégias comprovadas e 
            implementação prática para resultados reais.
          </p>
          <a
            href="https://wa.me/5581991942628"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Solicitar Consultoria
            </Button>
          </a>
        </div>
      </section>

      {/* Áreas de Consultoria */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Áreas de Consultoria Especializada
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ofereço consultoria personalizada em três áreas fundamentais para o sucesso 
              empresarial na era digital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Transformação Digital */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Transformação Digital
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Modernize sua empresa com estratégias de digitalização completa, 
                  desde processos internos até experiência do cliente.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Digitalização de processos
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Experiência do cliente digital
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automação de workflows
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cultura digital organizacional
                  </li>
                </ul>
                <a
                  href="https://wa.me/5581991942628"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Consultoria em Transformação Digital
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Marketing Digital */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Marketing Digital
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Desenvolva estratégias de marketing digital eficazes que geram 
                  resultados mensuráveis e crescimento sustentável.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Estratégia de marketing digital
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Marketing de conteúdo
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Redes sociais e influenciadores
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Analytics e otimização
                  </li>
                </ul>
                <a
                  href="https://wa.me/5581991942628"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Consultoria em Marketing Digital
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Inteligência Artificial */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Inteligência Artificial
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Implemente soluções de IA que otimizam processos, melhoram decisões 
                  e criam vantagens competitivas sustentáveis.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Análise preditiva e prescritiva
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automação inteligente
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Chatbots e atendimento IA
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Processamento de dados avançado
                  </li>
                </ul>
                <a
                  href="https://wa.me/5581991942628"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Consultoria em IA
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Metodologia de Consultoria
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Processo estruturado e comprovado para garantir resultados mensuráveis 
              e transformação real da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                1. Diagnóstico
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Análise completa da situação atual da empresa, identificando 
                oportunidades e desafios específicos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                2. Estratégia
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desenvolvimento de roadmap personalizado com objetivos claros, 
                métricas e cronograma de implementação.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                3. Implementação
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Execução prática das estratégias com acompanhamento contínuo 
                e ajustes conforme necessário.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                4. Resultados
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitoramento de KPIs, otimização contínua e suporte para 
                garantir crescimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Benefícios da Consultoria
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Resultados tangíveis que transformam sua empresa e posicionam 
              você à frente da concorrência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Eficiência Operacional
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Redução de custos operacionais e aumento de produtividade 
                  através de processos otimizados e automação.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Experiência do Cliente
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Jornadas digitais que encantam clientes e aumentam 
                  fidelização e satisfação.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Decisões Baseadas em Dados
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Insights valiosos para tomada de decisões estratégicas 
                  e identificação de oportunidades.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Vantagem Competitiva
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Diferenciação no mercado através de tecnologias 
                  inovadoras e estratégias digitais avançadas.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                <TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Crescimento Sustentável
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Estratégias que garantem crescimento contínuo e 
                  adaptação às mudanças do mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-teal-100 dark:bg-teal-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Inovação Contínua
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cultura de inovação que mantém sua empresa 
                  sempre à frente das tendências.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria personalizada e descubra como posicionar sua empresa 
            para o sucesso na era digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Solicitar Consultoria
              </Button>
            </a>
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Falar sobre Projeto Específico
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 