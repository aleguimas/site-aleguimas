import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download } from "lucide-react"
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
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="biografia">Biografia</TabsTrigger>
              <TabsTrigger value="fotos">Fotos</TabsTrigger>
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
                    <div className="space-y-6">
                      <a href="/documents/biografia-curta.pdf" download>
                        <Button className="w-full flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Baixar biografia curta
                        </Button>
                      </a>
                      <a href="/documents/biografia-completa.pdf" download>
                        <Button className="w-full flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Baixar biografia completa
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Biografia Curta</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Alexandre Guimarães (Guimas) é palestrante e consultor especializado em Inteligência Artificial, Automação
                        Inteligente, Transformação Digital e Inovação. Com ampla experiência em tecnologia e negócios, ajuda
                        empresas e profissionais a explorarem o potencial da IA para aumentar produtividade, criar soluções
                        inovadoras e gerar impacto real. Reconhecido por sua comunicação clara e inspiradora, transforma temas
                        complexos em estratégias práticas e acessíveis, conectando inovação tecnológica a resultados concretos.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Biografia Completa</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Com mais de <b>20 anos de experiência no mercado de tecnologia</b>, Alexandre Guimarães — também
                        conhecido como Guimas — é um destacado <b>palestrante, consultor e head de Inovação e Digital</b>
                        especializado em <b>Inteligência Artificial (IA), Transformação Digital e Inovação.</b>
                      </p>

                      <p>
                        Formado em <b>Gestão de TI pela Universidade dos Guararapes</b> e com <b>MBA em Gestão de Projetos</b> pela
                        UNINASSAU, Guimas traz uma base sólida tanto técnica quanto estratégica.
                      </p>

                      <p>
                        <b>Sua missão:</b> desmistificar a Inteligência Artificial, mostrando como ela pode ser aplicada
                        de forma prática, eficiente e acessível para empresas de todos os portes, transformando
                        desafios tecnológicos em resultados reais.
                      </p>

                      <p>
                        Ao longo da carreira, já <b>impactou milhares de pessoas</b>, realizou centenas de palestras e atendeu
                        diversas empresas com foco em soluções que geram resultados concretos. Especializado em temas como
                        IA Aplicada, Automação Inteligente, Inovação, Marketing Digital, Futuro do Trabalho e Liderança na
                        Era Digital, ele domina tanto a estratégia quanto a prática.
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
                {[
                  {
                    id: 1,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-1.png",
                    alt: "Alexandre Guimarães - Foto 1"
                  },
                  {
                    id: 2,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-2.png",
                    alt: "Alexandre Guimarães - Foto 2"
                  },
                  {
                    id: 3,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-3.webp",
                    alt: "Alexandre Guimarães - Foto 3"
                  },
                  {
                    id: 4,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-4.jpg",
                    alt: "Alexandre Guimarães - Foto 4"
                  },
                  {
                    id: 5,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-5.JPG",
                    alt: "Alexandre Guimarães - Foto 5"
                  },
                  {
                    id: 6,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-6.jpg",
                    alt: "Alexandre Guimarães - Foto 6"
                  }
                ].map((foto) => (
                  <Card key={foto.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={foto.src}
                          alt={foto.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <a href={foto.src} download>
                          <Button size="sm" variant="outline" className="w-full flex items-center gap-1">
                            <Download className="h-3 w-3" /> Baixar foto
                          </Button>
                        </a>
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



            {/* Contato */}
            <TabsContent value="contato" className="space-y-8">
              <div className="flex justify-center">
                <Card className="w-full max-w-md">
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
