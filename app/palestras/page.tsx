import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Star, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PalestrasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full">
                Palestras & Workshops
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transforme sua empresa com palestras sobre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Inteligência Artificial e Inovação
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Inspire sua equipe, impulsione a inovação e prepare sua empresa para o futuro digital com palestras e
                workshops personalizados para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <a href="#solicitar-cotacao">Solicitar Cotação</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-600/20 text-white border-white hover:bg-blue-600/30"
                >
                  <a href="#temas">Ver Temas</a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[280px] rounded-xl overflow-hidden shadow-xl bg-black">
                <div className="aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/SsDUQ-gCTCw"
                    title="YouTube Short - Alexandre Guimarães"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Por que contratar
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Benefícios para sua empresa</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Descubra como minhas palestras e workshops podem transformar sua organização e impulsionar resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Engajamento da Equipe</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Inspire e motive sua equipe a abraçar novas tecnologias e metodologias, aumentando o engajamento e a
                  produtividade.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Aumento da motivação</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Redução da resistência à mudança</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Melhoria do trabalho em equipe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Aceleração da Inovação</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Impulsione a cultura de inovação na sua empresa, identificando oportunidades práticas para aplicação
                  de IA e novas tecnologias.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Identificação de oportunidades</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Criação de cultura de experimentação</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Aceleração da transformação digital</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Resultados Tangíveis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Obtenha insights práticos e aplicáveis que podem ser implementados imediatamente, gerando resultados
                  mensuráveis para o seu negócio.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Aumento da eficiência operacional</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Redução de custos</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Melhoria na experiência do cliente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="temas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Temas
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Principais palestras e workshops</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Conheça os temas mais solicitados, todos personalizáveis para atender às necessidades específicas da sua
              empresa.
            </p>
          </div>

          <Tabs defaultValue="palestras" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="palestras">Palestras</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
            </TabsList>

            <TabsContent value="palestras" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">60 minutos</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">IA o Novo Básico</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Como a Inteligência Artificial se tornou uma habilidade fundamental para profissionais e empresas,
                      e como ela está transformando diversos setores da economia. Uma palestra inspiradora que mostra
                      como a IA está se tornando uma habilidade básica e essencial para profissionais e empresas de
                      todos os setores. Apresenta casos práticos e demonstrações ao vivo de ferramentas de IA.
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Inteligência Artificial
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Futuro do Trabalho
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">5.0 (32 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">45-90 minutos</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      Transformação Digital na Prática
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Estratégias para conduzir processos de transformação digital bem-sucedidos, superando resistências
                      e maximizando resultados. Uma palestra prática que apresenta um framework exclusivo para
                      implementação de estratégias de transformação digital, com exemplos de sucesso e um roteiro de
                      implementação adaptável a diferentes tipos de negócio.
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Transformação Digital
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Inovação
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">4.9 (28 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">60 minutos</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Liderança na Era da IA</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Como líderes podem se preparar e adaptar suas equipes para um mundo onde a IA está cada vez mais
                      presente nos processos de trabalho. Uma palestra focada em líderes que precisam navegar pelas
                      mudanças trazidas pela IA. Aborda tendências globais, desenvolvimento de habilidades e estratégias
                      para gestão de talentos em um ambiente de rápida transformação.
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Liderança
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Gestão de Talentos
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star, i) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">4.8 (22 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">60 minutos</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      O Impacto da IA Generativa nos Negócios
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Como ferramentas de IA generativa estão revolucionando diferentes setores e como as empresas podem
                      se beneficiar dessa tecnologia. Uma palestra dinâmica que explora como ferramentas como ChatGPT,
                      DALL-E e outras estão transformando diferentes setores. Inclui demonstrações ao vivo e casos
                      práticos de aplicação em diversos segmentos de negócio.
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          IA Generativa
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Produtividade
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">5.0 (35 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Todas as palestras podem ser personalizadas para atender às necessidades específicas da sua empresa e
                  setor de atuação.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="#solicitar-cotacao">Solicitar Cotação Personalizada</a>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">4 horas</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      Workshop: Implementando IA na sua Empresa
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Passo a passo para implementar soluções de IA que geram resultados reais para o seu negócio. Um
                      workshop prático onde os participantes aprendem a identificar oportunidades para aplicação de IA,
                      selecionar as ferramentas adequadas e implementar soluções que geram resultados tangíveis. Inclui
                      exercícios práticos e um plano de ação personalizado.
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Hands-on
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Implementação
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">4.9 (18 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">8 horas</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      Treinamento: Liderança na Era Digital
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Desenvolvimento de habilidades de liderança necessárias para conduzir equipes em ambientes
                      digitais. Um treinamento imersivo para líderes que precisam desenvolver novas habilidades para
                      gerenciar equipes em ambientes digitais e de rápida transformação. Aborda temas como comunicação
                      remota, gestão de projetos ágeis e liderança inspiradora em tempos de mudança.
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Imersivo
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          Desenvolvimento
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star, i) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">5.0 (15 avaliações)</span>
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Palestras em Vídeo
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Assista trechos de palestras realizadas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Confira alguns momentos de palestras e workshops que realizei em diferentes eventos e empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/yVjrAxDBx4Y"
                title="Palestra sobre Inteligência Artificial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0  w-full h-full"
                src="https://www.youtube.com/embed/jnFA1c9NnhU"
                title="Workshop sobre Transformação Digital"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/12k3ay8YB3w"
                title="Palestra sobre Liderança na Era Digital"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/0CuPmu49yo4"
                title="Workshop sobre IA Generativa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

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
                Ver mais conteúdos de palestras e workshops
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
              position="Coordenadora de Gestão por Resultados"
              company="Prefeitura do Jaboatão dos Guararapes"
              testimonial="Tive a oportunidade de participar de uma palestra, ministrado por Alexandre Guimarães para a equipe da Secretaria de Planejamento da prefeitura do Jaboatão dos Guararapes, sobre criatividade e inovação. Alexandre nos trouxe um olhar de como precisamos utilizar nossa criatividade, pensar 'fora da caixa', em qualquer atividade, seja ela na área profissional ou na vida pessoal. A partir desta reflexão, temos implantado essa visão nas equipes do trabalho e incentivados a enxergarem seus processos para obtenção de melhores resultados."
              image="/images/testimonials/marjorie-cristina-prefeitura-jaboatão-dos-guararapes.webp"
              linkedinUrl="https://www.linkedin.com/in/marjorie-cristina-18a1b055/"
            />
            <TestimonialCard
              name="Bruno Cruz"
              position="Secretário Executivo de Governo Digital"
              company="Prefeitura do Jaboatão dos Guararapes"
              testimonial="Tivemos a honra de desfrutar do conhecimento e larga experiência do Alexandre Guimarães em um de nossos encontros Talk Governo Digital na Prefeitura do Jaboatão dos Guararapes, onde nos trouxe com grande brilhantismo e maestria uma visão simplificada e disruptiva a respeito do potencial da Tecnologia e suas inúmeras aplicações no cotidiano profissional e social. Fantástico!"
              image="/images/testimonials/bruno-cruz-governo-digital.webp"
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
              Empresas que confiam no meu trabalho
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
      <section
        id="solicitar-cotacao"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
                Solicite uma Proposta
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Transforme sua empresa hoje</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Preencha o formulário abaixo para solicitar uma cotação personalizada para palestras ou workshops em sua
                empresa.
              </p>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nome completo
                      </label>
                      <Input id="name" placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        E-mail corporativo
                      </label>
                      <Input id="email" type="email" placeholder="seu@empresa.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Empresa
                      </label>
                      <Input id="company" placeholder="Nome da empresa" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tema de interesse
                    </label>
                    <select
                      id="topic"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      required
                    >
                      <option value="">Selecione um tema</option>
                      <option value="ia-novo-basico">IA o Novo Básico</option>
                      <option value="transformacao-digital">Transformação Digital na Prática</option>
                      <option value="lideranca-ia">Liderança na Era da IA</option>
                      <option value="ia-generativa">O Impacto da IA Generativa nos Negócios</option>
                      <option value="workshop-ia">Workshop: Implementando IA na sua Empresa</option>
                      <option value="workshop-lideranca">Treinamento: Liderança na Era Digital</option>
                      <option value="personalizado">Tema personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Detalhes adicionais
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos mais sobre o evento, público esperado, data preferencial, etc."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Solicitar Cotação
                  </Button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Ao enviar este formulário, você concorda em receber comunicações relacionadas à sua solicitação.
                    Seus dados estão seguros e não serão compartilhados com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 px-4 py-1 rounded-full mb-4">
              Perguntas Frequentes
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Dúvidas comuns sobre palestras e workshops
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Qual é a duração média das palestras?",
                answer:
                  "As palestras têm duração média de 60 minutos, mas podem ser ajustadas conforme a necessidade do evento, variando de 45 a 90 minutos. Workshops e treinamentos podem ter duração de 4 a 8 horas, dependendo do conteúdo e formato.",
              },
              {
                question: "É possível personalizar o conteúdo para o meu setor específico?",
                answer:
                  "Sim, todas as palestras e workshops podem ser personalizados para atender às necessidades específicas da sua empresa e setor de atuação. Durante o processo de contratação, realizamos uma reunião de briefing para entender seus objetivos e adaptar o conteúdo.",
              },
              {
                question: "Quais recursos técnicos são necessários para a realização da palestra?",
                answer:
                  "Para palestras presenciais, é necessário um projetor com entrada HDMI, sistema de som com microfone sem fio e, idealmente, conexão à internet estável. Para eventos online, utilizamos plataformas como Zoom, Microsoft Teams ou a de sua preferência.",
              },
              {
                question: "Vocês atendem eventos em todo o Brasil?",
                answer:
                  "Sim, atendemos eventos em todo o Brasil, tanto presenciais quanto online. Para eventos presenciais fora de Recife-PE, são considerados custos adicionais de deslocamento e hospedagem.",
              },
              {
                question: "Como funciona o processo de contratação?",
                answer:
                  "O processo começa com o preenchimento do formulário de solicitação de cotação. Em seguida, nossa equipe entrará em contato para entender melhor suas necessidades, realizar um briefing e enviar uma proposta personalizada. Após a aprovação, agendamos a data e iniciamos a personalização do conteúdo.",
              },
              {
                question: "Vocês emitem nota fiscal?",
                answer:
                  "Sim, emitimos nota fiscal para todos os serviços prestados, facilitando o processo de pagamento e contabilidade da sua empresa.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua empresa?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende uma palestra ou workshop e descubra como a Inteligência Artificial e a inovação podem impulsionar
            seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="#solicitar-cotacao">Solicitar Cotação</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contato">Fale Diretamente Conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
