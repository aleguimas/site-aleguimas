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

const pageTitle = "Kit de Imprensa | Alexandre Guimarães, IA aplicada a negócios"
const pageDescription =
  "Kit de imprensa de Alexandre Guimarães (Guimas), CEO da Simplí: biografia, números, pautas, fotos e contato para jornalistas, entidades e organizadores de eventos."

const WHATSAPP_ENTIDADES =
  "https://wa.me/5581991942628?text=" +
  encodeURIComponent("Olá, Guimas. Quero saber como levar IA para os associados da nossa entidade.")

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre Guimarães",
  alternateName: "Guimas",
  jobTitle: "CEO",
  worksFor: {
    "@type": "Organization",
    name: "Simplí",
    url: "https://www.simpli.ia.br",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidade dos Guararapes" },
    { "@type": "CollegeOrUniversity", name: "UNINASSAU" },
  ],
  award: "Innovation Leader Norte/Nordeste 2019",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  image: "https://www.aleguimas.com.br/images/alexandre-guimaraes-palestrante-2026-og.jpg",
  url: "https://www.aleguimas.com.br/kit-imprensa",
  sameAs: [
    "https://www.linkedin.com/in/alexandreguimaraes81/",
    "https://www.instagram.com/aleguimas/",
    "https://www.youtube.com/@aleguimas_palestrante",
    "https://www.tiktok.com/@aleguimas",
    "https://www.facebook.com/aleguimas",
  ],
}

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "kit imprensa Alexandre Guimarães",
    "Guimas Simplí",
    "palestrante IA aplicada a negócios",
    "biografia Alexandre Guimarães",
    "pautas inteligência artificial",
    "palestra IA CDL Sebrae",
    "press kit"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.aleguimas.com.br/kit-imprensa",
    images: [
      {
        url: "/images/alexandre-guimaraes-palestrante-2026-og.jpg",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300 mb-5">Imprensa</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-[-0.03em]">Kit de Imprensa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Biografia, números, pautas e fotos para jornalistas, entidades empresariais e organizadores de eventos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="biografia" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="biografia">Biografia</TabsTrigger>
              <TabsTrigger value="pautas">Pautas</TabsTrigger>
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
                        src="/images/alexandre-guimaraes-palestrante-2026-sem-fundo.webp"
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
                        Alexandre Guimarães, o Guimas, é palestrante e consultor de inteligência artificial e CEO da Simplí,
                        empresa de IA e automação para negócios. Com mais de 20 anos no mercado de tecnologia, já impactou
                        mais de 15 mil pessoas, atendeu mais de 200 empresas e realizou mais de 180 palestras. Ajuda empresas
                        a tirar a IA do discurso e colocar agentes, automações e processos para funcionar na rotina, com foco
                        em produtividade e resultado. Mora em Recife (PE) e atua em todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Biografia Completa</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4">
                      <p>
                        Alexandre Guimarães, o Guimas, é palestrante, consultor e CEO da Simplí, empresa que leva IA, agentes
                        e automação para a operação de empresas de todos os portes. Sua tese é simples: o gargalo da IA nas
                        empresas raramente é a tecnologia, é o processo e a decisão sobre onde aplicá-la.
                      </p>

                      <p>
                        São mais de 20 anos no mercado de tecnologia, com passagem por empresas como Farmácias Rosário,
                        Farmácias Independente e Mundo do Cabeleireiro. É graduado em Gestão de TI pela Universidade dos
                        Guararapes, tem MBA em Gestão de Projetos pela UNINASSAU e foi reconhecido com o prêmio Innovation
                        Leader Norte/Nordeste em 2019.
                      </p>

                      <p>
                        Hoje divide o tempo entre palestras, workshops e consultoria. Já são mais de 15 mil pessoas
                        impactadas, mais de 200 empresas atendidas e mais de 180 palestras realizadas. Entre os formatos
                        estão o workshop IA na Prática, as sessões de ideação de projetos de IA com times de liderança e a
                        palestra IA como infraestrutura de lucro no varejo. Tem uma frente crescente com entidades
                        empresariais: palestrou para a CDL de Cuiabá em maio de 2026 e, em seguida, conduziu com o Sebrae MT
                        e a CDL de Cuiabá uma Imersão de IA de dois dias, reunindo empresários para aplicar IA no próprio
                        negócio.
                      </p>

                      <p>
                        Na Simplí, lidera soluções como Simplí CRM, Simplí Agent e Agentic Office. Produz conteúdo sobre IA
                        aplicada a negócios no blog, no YouTube e no Simplí Cast, sempre com a mesma regra: explicar de um
                        jeito que o gestor consiga aplicar na segunda-feira.
                      </p>
                    </div>
                  </div>

                  {/* Em números */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Em números</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { value: "+20 anos", label: "no mercado de tecnologia" },
                        { value: "+15 mil", label: "pessoas impactadas" },
                        { value: "+200", label: "empresas atendidas" },
                        { value: "+180", label: "palestras realizadas" },
                      ].map((item) => (
                        <Card key={item.label}>
                          <CardContent className="p-5">
                            <p className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] tabular-nums text-blue-600 dark:text-blue-400">
                              {item.value}
                            </p>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Trabalho com entidades */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Trabalho com entidades</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-5">
                          <h3 className="font-semibold mb-1">Palestra para a CDL de Cuiabá</h3>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400 mb-3">
                            Maio de 2026
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            IA aplicada ao varejo, para os associados da CDL, de forma prática e sem jargão.
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-5">
                          <h3 className="font-semibold mb-3">Imersão de IA com Sebrae MT e CDL de Cuiabá</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Dois dias reunindo empresários para tirar a IA do papel dentro do próprio negócio.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Áreas de atuação</h2>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="px-3 py-1">IA aplicada a negócios</Badge>
                      <Badge className="px-3 py-1">Agentes de IA e automação</Badge>
                      <Badge className="px-3 py-1">IA no varejo e no omnichannel</Badge>
                      <Badge className="px-3 py-1">Transformação digital e inovação</Badge>
                      <Badge className="px-3 py-1">Liderança na era da IA</Badge>
                      <Badge className="px-3 py-1">Futuro do trabalho</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Pautas */}
            <TabsContent value="pautas" className="space-y-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">Pautas para entrevista</h2>
                <ul className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
                  {[
                    "Agentes de IA na rotina da empresa: o que já funciona e o que ainda é promessa",
                    "IA como infraestrutura de lucro: onde o varejo está ganhando dinheiro com ela",
                    "Por onde começar: como escolher o primeiro projeto de IA sem queimar orçamento",
                    "IA para pequenas e médias empresas: automação acessível, sem time de dados",
                    "O gestor com agentes no time: o que muda no papel de quem lidera",
                    "Por que tantos pilotos de IA não chegam à operação",
                    "Como CDLs e Sebraes podem levar IA ao pequeno e médio empresário da sua região",
                  ].map((pauta, i) => (
                    <li key={pauta} className="flex gap-4 py-4">
                      <span className="text-sm font-bold tabular-nums text-blue-600 dark:text-blue-400 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">{pauta}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Fotos */}
            <TabsContent value="fotos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 7,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-7.jpeg",
                    alt: "Alexandre Guimarães - Foto oficial 2026"
                  },
                  {
                    id: 8,
                    src: "/images/kit-imprensa/alexandre-guimaraes-palestrante-2026-sem-fundo.png",
                    alt: "Alexandre Guimarães - Foto oficial 2026 sem fundo (PNG transparente)"
                  },
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
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="text-gray-600 dark:text-gray-400">(81) 99194-2628</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <p className="text-gray-600 dark:text-gray-400">aleguimas@gmail.com</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-1">Localização</h3>
                        <p className="text-gray-600 dark:text-gray-400">Recife, PE</p>
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

      {/* Para entidades */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-[-0.02em] mb-4">Para CDLs, Sebraes e associações empresariais</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Seus associados já estão ouvindo falar de IA. O que falta é alguém que mostre, em linguagem de empresário,
              por onde começar. Já fiz isso com a CDL de Cuiabá e o Sebrae MT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Palestra",
                text: "Abertura de evento ou encontro de associados: o que a IA muda no negócio local e por onde começar.",
              },
              {
                title: "Imersão de 2 dias",
                text: "Empresários aplicando IA no próprio negócio, com acompanhamento. Formato realizado com Sebrae MT e CDL de Cuiabá.",
              },
              {
                title: "Workshop IA na Prática",
                text: "Sessão hands-on para equipes e associados, com ferramentas que já dão resultado.",
              },
            ].map((formato) => (
              <Card key={formato.title}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{formato.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{formato.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Espaço reservado para depoimentos da CDL de Cuiabá e do Sebrae MT.
              Inserir somente com as frases enviadas pelo Guimas. */}

          <a href={WHATSAPP_ENTIDADES} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Quero levar IA para a minha entidade
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 tracking-[-0.02em]">Precisa de uma fonte sobre IA nos negócios?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Fale com a equipe para solicitar entrevista, fotos em alta resolução ou materiais adicionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Solicitar entrevista
            </Button>
            </a>
            <a
              href="https://wa.me/5581991942628"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
              Contato para imprensa
            </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
