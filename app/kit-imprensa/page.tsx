import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Newspaper, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kit de Imprensa - Alexandre Guimarães",
  description: "Kit de imprensa com fotos, biografia, currículo e informações sobre Alexandre Guimarães. Material para jornalistas e veículos de comunicação.",
  keywords: [
    "kit imprensa Alexandre Guimarães",
    "fotos palestrante",
    "biografia Alexandre Guimarães",
    "currículo palestrante",
    "material imprensa",
    "press kit"
  ],
  openGraph: {
    title: "Kit de Imprensa - Alexandre Guimarães",
    description: "Kit de imprensa com fotos, biografia, currículo e informações sobre Alexandre Guimarães. Material para jornalistas e veículos de comunicação.",
    url: "https://www.aleguimas.com.br/kit-imprensa",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Kit de Imprensa - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/kit-imprensa",
  },
}

export default function KitImprensaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Kit de Imprensa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Recursos oficiais para jornalistas, organizadores de eventos e profissionais de mídia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="biografia" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="biografia">Biografia</TabsTrigger>
              <TabsTrigger value="fotos">Fotos</TabsTrigger>
              <TabsTrigger value="palestras">Palestras</TabsTrigger>
              <TabsTrigger value="midia">Mídia</TabsTrigger>
              <TabsTrigger value="contato">Contato</TabsTrigger>
            </TabsList>

            {/* Biografia */}
            <TabsContent value="biografia" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/images/alexandre-guimaraes-palestrante-consultor-ia-3.webp"
                        alt="Alexandre Guimarães"
                        width={400}
                        height={500}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Baixar biografia curta
                      </Button>
                      <Button className="w-full flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Baixar biografia completa
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Biografia Curta</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Alexandre Guimarães é especialista em Inteligência Artificial, Transformação Digital e Inovação,
                        com mais de 12 anos de experiência ajudando empresas a implementarem estratégias eficientes para
                        se adaptarem ao mundo digital. Palestrante renomado, já realizou mais de 150 apresentações para
                        empresas de diversos setores, compartilhando conhecimentos práticos sobre como utilizar
                        tecnologias emergentes para obter resultados reais.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Biografia Completa</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Alexandre Guimarães é um dos principais especialistas brasileiros em Inteligência Artificial e
                        Transformação Digital, dedicando sua carreira a desmistificar tecnologias complexas e demonstrar
                        como elas podem ser aplicadas de forma prática e eficiente em diferentes setores.
                      </p>

                      <p>
                        Com formação em [Área de Formação] pela [Universidade], e especializações em Inteligência
                        Artificial e Inovação, Alexandre acumula mais de 12 anos de experiência trabalhando com empresas
                        de todos os portes, desde startups até grandes corporações.
                      </p>

                      <p>
                        Como palestrante, já realizou mais de 150 apresentações em eventos corporativos, conferências e
                        workshops, sempre com foco em conteúdo prático e aplicável. Sua abordagem dinâmica e acessível o
                        tornou referência para organizações que buscam entender e implementar estratégias de inovação e
                        transformação digital.
                      </p>

                      <p>
                        Alexandre também atua como consultor estratégico, ajudando empresas a desenvolverem e
                        implementarem roadmaps de transformação digital e adoção de inteligência artificial. Seu
                        trabalho já impactou mais de 50 empresas em diversos setores como varejo, finanças, saúde,
                        educação e indústria.
                      </p>

                      <p>
                        Além de sua atuação como palestrante e consultor, Alexandre é autor de artigos e conteúdos sobre
                        IA e transformação digital, compartilhando regularmente seus conhecimentos em canais
                        de mídia social.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Áreas de Especialização</h2>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-3 py-1">Inteligência Artificial</Badge>
                      <Badge className="px-3 py-1">Machine Learning</Badge>
                      <Badge className="px-3 py-1">IA Generativa</Badge>
                      <Badge className="px-3 py-1">Transformação Digital</Badge>
                      <Badge className="px-3 py-1">Inovação Corporativa</Badge>
                      <Badge className="px-3 py-1">Liderança na Era Digital</Badge>
                      <Badge className="px-3 py-1">Futuro do Trabalho</Badge>
                      <Badge className="px-3 py-1">Estratégia de Negócios</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Fotos */}
            <TabsContent value="fotos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={
                            item === 1
                              ? "/images/alexandre-guimaraes-palestrante-consultor-ia-3.webp"
                              : `/placeholder.svg?height=300&width=400&text=Foto+${item}`
                          }
                          alt={`Alexandre Guimarães - Foto ${item}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">
                          Alexandre Guimarães - {item === 1 ? "Palestrando" : `Foto ${item}`}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {item === 1 ? "Apresentação sobre IA Generativa" : `Descrição da foto ${item}`}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Download className="h-3 w-3" /> Alta resolução
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Download className="h-3 w-3" /> Web
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Diretrizes de uso de imagem</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    As imagens podem ser utilizadas em matérias jornalísticas e divulgação de eventos onde Alexandre
                    Guimarães participa.
                  </li>
                  <li>
                    É obrigatório creditar as fotos como "Foto: Alexandre Guimarães" ou conforme especificado em cada
                    imagem.
                  </li>
                  <li>As imagens não podem ser alteradas ou manipuladas sem autorização prévia.</li>
                  <li>Não é permitido o uso comercial das imagens sem autorização expressa.</li>
                </ul>
              </div>
            </TabsContent>

            {/* Palestras */}
            <TabsContent value="palestras" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Principais Palestras</h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "O Impacto da IA Generativa nos Negócios",
                        description:
                          "Como ferramentas de IA generativa estão revolucionando diferentes setores e como as empresas podem se beneficiar dessa tecnologia.",
                        duration: "60 minutos",
                        features: ["Casos práticos", "Demonstrações ao vivo", "Q&A interativo"],
                      },
                      {
                        title: "Transformação Digital na Prática",
                        description:
                          "Estratégias para conduzir processos de transformação digital bem-sucedidos, superando resistências e maximizando resultados.",
                        duration: "45-90 minutos",
                        features: ["Framework exclusivo", "Exemplos de sucesso", "Roteiro de implementação"],
                      },
                      {
                        title: "Liderança na Era da IA",
                        description:
                          "Como líderes podem se preparar e adaptar suas equipes para um mundo onde a IA está cada vez mais presente nos processos de trabalho.",
                        duration: "60 minutos",
                        features: ["Tendências globais", "Desenvolvimento de habilidades", "Gestão de talentos"],
                      },
                    ].map((palestra, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{palestra.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{palestra.description}</p>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                              <span className="text-sm">{palestra.duration}</span>
                            </div>
                            {palestra.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button variant="outline" className="w-full flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Baixar detalhes da palestra
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Materiais para Eventos</h2>

                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Introdução para Apresentadores</h3>
                      <div className="prose dark:prose-invert max-w-none mb-4">
                        <p>
                          "Alexandre Guimarães é especialista em Inteligência Artificial e Transformação Digital,
                          ajudando empresas a implementarem estratégias de inovação com foco em resultados reais. Com
                          mais de 12 anos de experiência e mais de 150 palestras realizadas, ele é reconhecido por sua
                          capacidade de traduzir conceitos complexos em ideias práticas e aplicáveis. Por favor, recebam
                          Alexandre Guimarães!"
                        </p>
                      </div>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Baixar versões da introdução
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Requisitos Técnicos</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                        <li>• Projetor com entrada HDMI</li>
                        <li>• Sistema de som com microfone sem fio</li>
                        <li>• Conexão à internet estável</li>
                        <li>• Controle remoto para apresentação</li>
                        <li>• Água mineral sem gás</li>
                      </ul>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Baixar rider técnico completo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Logotipos e Materiais de Marca</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 flex items-center justify-center bg-white">
                          <div className="w-full h-16 relative">
                            <Image
                              src="/placeholder.svg?height=64&width=200&text=Logo+Horizontal"
                              alt="Logo Alexandre Guimarães - Horizontal"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 flex items-center justify-center bg-white">
                          <div className="w-full h-16 relative">
                            <Image
                              src="/placeholder.svg?height=100&width=100&text=Logo+Vertical"
                              alt="Logo Alexandre Guimarães - Vertical"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Baixar pacote de marca completo
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Mídia */}
            <TabsContent value="midia" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Aparições na Mídia</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Como a IA está transformando o atendimento ao cliente",
                      outlet: "Revista Negócios & Tecnologia",
                      date: "15 de março de 2023",
                      type: "Entrevista",
                      icon: <Newspaper className="h-5 w-5" />,
                    },
                    {
                      title: "O futuro do trabalho na era da automação",
                      outlet: "Portal Inovação Digital",
                      date: "22 de junho de 2023",
                      type: "Artigo",
                      icon: <FileText className="h-5 w-5" />,
                    },
                    {
                      title: "Transformação digital: por onde começar?",
                      outlet: "Canal Tech Empresarial",
                      date: "10 de setembro de 2023",
                      type: "Vídeo",
                      icon: <Play className="h-5 w-5" />,
                    },
                    {
                      title: "Inteligência Artificial para pequenas empresas",
                      outlet: "Jornal Economia Hoje",
                      date: "5 de novembro de 2023",
                      type: "Reportagem",
                      icon: <Newspaper className="h-5 w-5" />,
                    },
                    {
                      title: "Os desafios da implementação de IA nas empresas brasileiras",
                      outlet: "Podcast Tecnologia na Prática",
                      date: "18 de janeiro de 2024",
                      type: "Podcast",
                      icon: <Play className="h-5 w-5" />,
                    },
                    {
                      title: "Como preparar sua equipe para a revolução da IA",
                      outlet: "Portal de Tecnologia",
                      date: "3 de fevereiro de 2024",
                      type: "Artigo",
                      icon: <FileText className="h-5 w-5" />,
                    },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-900"
                          >
                            <div className="flex items-center gap-1">
                              {item.icon}
                              <span>{item.type}</span>
                            </div>
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">{item.outlet}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{item.date}</p>
                        <Button variant="outline" className="w-full">
                          Ver conteúdo
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Vídeos em Destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <Image
                            src={`/placeholder.svg?height=270&width=480&text=Vídeo+${item}`}
                            alt={`Vídeo ${item}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                <Play className="h-6 w-6 text-white ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-2">
                            {item === 1 ? "Entrevista sobre IA Generativa" : "Palestra sobre Transformação Digital"}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            {item === 1 ? "Canal Tech Empresarial • 15 min" : "Conferência Futuro Digital • 8 min"}
                          </p>
                          <Button variant="outline" className="w-full">
                            Assistir vídeo completo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Contato */}
            <TabsContent value="contato" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Contato para Imprensa</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-1">Assessoria de Imprensa</h3>
                        <p className="text-gray-600 dark:text-gray-400">Nome da Assessoria</p>
                        <p className="text-gray-600 dark:text-gray-400">contato@assessoria.com.br</p>
                        <p className="text-gray-600 dark:text-gray-400">(11) 99999-9999</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-1">Contato Direto</h3>
                        <p className="text-gray-600 dark:text-gray-400">imprensa@aleguimas.com.br</p>
                      </div>

                      <div className="pt-4">
                        <a
                          href="https://wa.me/5581991942628"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Solicitar Entrevista</Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Contratação para Eventos</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-1">Palestras e Workshops</h3>
                        <p className="text-gray-600 dark:text-gray-400">eventos@aleguimas.com.br</p>
                        <p className="text-gray-600 dark:text-gray-400">(11) 99999-9999</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-1">Consultoria Empresarial</h3>
                        <p className="text-gray-600 dark:text-gray-400">consultoria@aleguimas.com.br</p>
                      </div>

                      <div className="pt-4">
                        <a
                          href="https://wa.me/5581991942628"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Verificar Disponibilidade</Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <Link
                    href="https://www.linkedin.com/in/alexandreguimaraes81/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">@alexandreguimaraes81</span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/aleguimas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Instagram</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">@aleguimas</span>
                  </Link>

                  <Link
                    href="https://www.youtube.com/@aleguimas_palestrante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    </div>
                    <span className="text-sm font-medium">YouTube</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">@aleguimas_palestrante</span>
                  </Link>

                  <Link
                    href="https://tiktok.com/aleguimas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-tiktok"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">TikTok</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">@aleguimas</span>
                  </Link>

                  <Link
                    href="https://www.facebook.com/aleguimas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Facebook</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">@aleguimas</span>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de mais informações?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe para solicitar materiais adicionais ou agendar uma entrevista com
            Alexandre Guimarães.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Solicitar Entrevista
            </Button>
            </a>
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contato para Imprensa
            </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
