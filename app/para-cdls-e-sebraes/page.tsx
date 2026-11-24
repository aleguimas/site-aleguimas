import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectionEyebrow from "@/components/section-eyebrow"
import YoutubeFacade from "@/components/youtube-facade"
import EntidadesForm from "@/components/entidades-form"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const PAGE_URL = "https://www.aleguimas.com.br/para-cdls-e-sebraes/"
const TITLE = "Palestra e Imersão de IA para CDLs e Sebraes | Guimas"
const DESCRIPTION =
  "Palestra, imersão e workshop de IA para CDLs, Sebraes, Fecomércios, sindicatos e associações empresariais. Já realizado com CDL Cuiabá, Sebrae MT e Fecomércio PE."
const OG_IMAGE = "/images/og-para-cdls-e-sebraes.jpg"
const SURVEY_URL =
  "https://datasebrae.com.br/wp-content/uploads/2025/07/Inteligencia-Artificial-e-os-Pequenos-Negocios-1-2.pdf"
const WHATSAPP_URL =
  "https://wa.me/5581991942628?text=" +
  encodeURIComponent("Olá, Guimas. Quero saber como levar IA para os associados da nossa entidade.")

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/para-cdls-e-sebraes/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "IA para CDLs e Sebraes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
}

const FAQ = [
  {
    q: "Quanto custa levar uma palestra ou imersão para a minha entidade?",
    a: "O valor depende do formato, da duração, da cidade e do número de participantes. Envie os dados da sua entidade pelo formulário e retornamos com uma proposta.",
  },
  {
    q: "Qual a diferença entre palestra, imersão e workshop?",
    a: "A palestra apresenta o cenário e os caminhos, e funciona para plateias maiores. A imersão dura dois dias e coloca o empresário para aplicar IA no próprio negócio. O workshop é uma sessão prática, mais curta, para equipes e grupos menores.",
  },
  {
    q: "Atende entidades de outros estados?",
    a: "Sim. Atuo em todo o Brasil e levo palestras, imersões e workshops a entidades de qualquer estado. Moro em Recife e já realizei projetos em diferentes regiões do país, do Nordeste ao Centro-Oeste.",
  },
  {
    q: "Quais entidades já levaram a IA para os seus associados com o Guimas?",
    a: "CDL Cuiabá, Sebrae MT, Fecomércio PE, Sindicato Varejista de Pernambuco (SuperMix) e SindiAuto BA (4º Encontro Nacional de Autoescolas), entre outras.",
  },
  {
    q: "Quais temas de palestra de IA funcionam melhor para associados?",
    a: "Os mais pedidos são IA, o Novo Básico, sobre o que muda no negócio quando a IA vira ferramenta do dia a dia, e IA para Negócios, sobre como o empresário se prepara para essa mudança. O conteúdo é ajustado ao setor da entidade, como varejo, serviços ou autoescolas.",
  },
  {
    q: "Quanto tempo dura cada formato?",
    a: "A imersão dura dois dias. O workshop costuma ter cerca de 4 horas. A palestra é ajustada à programação do evento da entidade.",
  },
  {
    q: "O conteúdo serve para quem nunca usou IA?",
    a: "Serve. Parto do básico, com linguagem de empresário e exemplos do comércio e dos serviços, e avanço para aplicações que o associado consegue testar logo depois.",
  },
  {
    q: "Como escolher um palestrante de IA para o evento da entidade?",
    a: "Defina primeiro o objetivo do evento. Depois, avalie se o palestrante tem experiência prática com empresas, se já trabalhou com entidades semelhantes e se adapta o conteúdo ao perfil do seu público.",
  },
  {
    q: "Como peço uma proposta?",
    a: "Preencha o formulário desta página ou fale comigo pelo WhatsApp. Informe a entidade, a cidade, o número aproximado de associados e o formato que interessa.",
  },
]

const FORMATOS = [
  {
    id: "palestra",
    title: "Palestra de IA para associados",
    text: "Para abrir um evento, uma convenção ou um encontro de associados. Mostra o que a IA muda no negócio local e por onde começar. Temas como IA, o Novo Básico e IA para Negócios, já levados à CDL de Cuiabá, à Fecomércio PE e ao SindiAuto BA.",
  },
  {
    id: "imersao",
    title: "Imersão de IA para empresários (2 dias)",
    text: "Empresários aplicando IA no próprio negócio, com acompanhamento. Realizada com o Sebrae MT e a CDL de Cuiabá.",
  },
  {
    id: "workshop",
    title: "Workshop IA na Prática",
    text: "Sessão hands-on de cerca de 4 horas para equipes e associados, com ferramentas que já dão resultado. Realizado com a Fecomércio PE em Recife e Serra Talhada.",
  },
]

// Projetos realizados com entidades (informados pelo Guimas)
const CASOS = [
  {
    entidade: "CDL Cuiabá",
    titulo: "Palestra na CDL de Cuiabá",
    texto: "IA aplicada ao varejo, para os associados da CDL, de forma prática e sem jargão.",
    local: "Cuiabá, MT · Maio de 2026",
  },
  {
    entidade: "Sebrae MT e CDL Cuiabá",
    titulo: "Imersão de IA para empresários",
    texto: "Dois dias reunindo empresários para tirar a IA do papel dentro do próprio negócio.",
    local: "Cuiabá, MT",
  },
  {
    entidade: "Fecomércio PE",
    titulo: "Café Empresarial: IA para Negócios",
    texto: "Workshop de IA com 4 horas de duração, realizado em duas cidades.",
    local: "Recife e Serra Talhada, PE",
  },
  {
    entidade: "Fecomércio PE",
    titulo: "Fórum de IA",
    texto: "Palestra IA, o Novo Básico, em duas edições no interior de Pernambuco.",
    local: "Petrolina e Araripina, PE",
  },
  {
    entidade: "Sindicato Varejista PE",
    titulo: "SuperMix",
    texto: "Palestra IA para Negócios: como se preparar para esta revolução.",
    local: "Recife, PE",
  },
  {
    entidade: "SindiAuto BA",
    titulo: "4º Encontro Nacional de Autoescolas",
    texto: "Palestra IA, o Novo Básico, no encontro nacional do setor.",
    local: "Costa do Sauípe, BA",
  },
]

// Depoimentos em vídeo enviados pelo Guimas. Área do Sebrae MT fica oculta
// até haver um depoimento aprovado pela entidade.
const DEPOIMENTOS = [
  {
    id: "MYviGmawPvM",
    nome: "Vilma Santos",
    papel: "CDL Cuiabá",
    title: "Depoimento de Vilma Santos, da CDL Cuiabá, sobre a imersão de IA",
    uploadDate: "2026-10-27T08:03:32-07:00",
  },
  {
    id: "9TOKQtwdtfw",
    nome: "Maíra Calane",
    papel: "Empreendedora participante, Tuizi Modas",
    title: "Depoimento de Maíra Calane, empreendedora que participou da imersão de IA em Cuiabá",
    uploadDate: "2026-10-21T15:53:23-07:00",
  },
]

const RESUMO_VIDEO = {
  id: "dtYIsFGDYdQ",
  title: "Resumo da imersão de IA para empresários com Sebrae MT e CDL de Cuiabá",
  uploadDate: "2026-10-19T05:21:44-07:00",
}

const PERSON_ID = "https://www.aleguimas.com.br/#person"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      dateModified: "2026-11-24",
      primaryImageOfPage: `https://www.aleguimas.com.br${OG_IMAGE}`,
      about: { "@id": `${PAGE_URL}#service` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Alexandre Guimarães",
      alternateName: "Guimas",
      url: "https://www.aleguimas.com.br/",
      image: "https://www.aleguimas.com.br/images/alexandre-guimaraes-palestrante-2026-og.jpg",
      jobTitle: "Palestrante e consultor de inteligência artificial, CEO da Simplí",
      worksFor: { "@type": "Organization", name: "Simplí", url: "https://www.simpli.ia.br" },
      homeLocation: { "@type": "Place", name: "Recife, PE, Brasil" },
      knowsAbout: [
        "Inteligência artificial para pequenos negócios",
        "IA aplicada ao varejo",
        "Agentes de IA",
        "Automação",
        "Transformação digital",
      ],
      sameAs: [
        "https://www.linkedin.com/in/alexandreguimaraes81/",
        "https://www.instagram.com/aleguimas/",
        "https://www.youtube.com/@aleguimas_palestrante",
        "https://www.tiktok.com/@aleguimas",
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Palestra e imersão de IA para entidades empresariais",
      serviceType: "Palestra, imersão e workshop de inteligência artificial",
      description: DESCRIPTION,
      url: PAGE_URL,
      areaServed: { "@type": "Country", name: "Brasil" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "CDLs, Sebraes, Fecomércios, sindicatos patronais, associações comerciais e entidades empresariais",
      },
      provider: { "@id": PERSON_ID },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Formatos para entidades",
        itemListElement: FORMATOS.map((formato) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: formato.title,
            description: formato.text,
            url: `${PAGE_URL}#${formato.id}`,
          },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#casos`,
      name: "Palestras e imersões de IA realizadas com entidades",
      itemListElement: CASOS.map((caso, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${caso.titulo} (${caso.entidade})`,
        description: `${caso.texto} ${caso.local}.`,
      })),
    },
    ...[RESUMO_VIDEO, ...DEPOIMENTOS].map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.title,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: video.uploadDate,
      contentUrl: `https://www.youtube.com/shorts/${video.id}`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
    })),
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://www.aleguimas.com.br/" },
        { "@type": "ListItem", position: 2, name: "Palestras", item: "https://www.aleguimas.com.br/palestras/" },
        { "@type": "ListItem", position: 3, name: "Para CDLs e Sebraes", item: PAGE_URL },
      ],
    },
  ],
}

export default function ParaCdlsESebraesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* 4.1 Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-28 pb-16 lg:pt-32 lg:pb-20 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/palestras/" className="hover:text-white">Palestras</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-200" aria-current="page">Para CDLs e Sebraes</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-7">
              <SectionEyebrow label="Para entidades empresariais" tone="dark" meta="CDLs · Sebraes · Associações" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] max-w-[20ch]">
                Palestra e imersão de IA para CDLs, Sebraes e associações empresariais
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-[56ch]">
                Leve para os seus associados uma IA que eles consigam aplicar na segunda-feira. Palestra, imersão de dois
                dias e workshop, em linguagem de empresário. Já realizado com CDL Cuiabá, Sebrae MT, Fecomércio PE, Sindicato
                Varejista PE e SindiAuto BA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="#proposta">Pedir proposta para a minha entidade</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="#formatos">Ver os formatos</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="w-full max-w-[260px] mx-auto">
                <YoutubeFacade id={RESUMO_VIDEO.id} title={RESUMO_VIDEO.title} vertical />
                <p className="mt-3 text-center text-sm text-slate-400">Imersão de IA em Cuiabá, com Sebrae MT e CDL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumo objetivo (GEO): resposta direta e citável sobre o serviço */}
      <section aria-labelledby="resumo-titulo" className="py-14 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 id="resumo-titulo" className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-4">
                Em resumo
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Alexandre Guimarães, o Guimas, é palestrante de inteligência artificial para entidades empresariais e CEO da
                Simplí. Ele leva palestras, imersões de dois dias e workshops de IA aplicada a negócios para CDLs, Sebraes,
                Fecomércios, sindicatos e associações, com foco no que o associado consegue aplicar logo depois do evento.
                Atende entidades em todo o Brasil.
              </p>
            </div>
            <dl className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Formatos</dt>
                <dd className="text-gray-600 dark:text-gray-400">Palestra, imersão de 2 dias e workshop de cerca de 4 horas</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Entidades atendidas</dt>
                <dd className="text-gray-600 dark:text-gray-400">
                  CDL Cuiabá, Sebrae MT, Fecomércio PE, Sindicato Varejista PE e SindiAuto BA
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Temas</dt>
                <dd className="text-gray-600 dark:text-gray-400">IA, o Novo Básico · IA para Negócios · IA aplicada ao varejo</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Atuação</dt>
                <dd className="text-gray-600 dark:text-gray-400">Nacional, com base em Recife, PE</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 4.2 Problema */}
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <SectionEyebrow label="O cenário" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-6">
              Seus associados já ouviram falar de IA. O que falta é aplicar
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Em Mato Grosso,{" "}
              <a
                href={SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:no-underline"
              >
                pesquisa do Sebrae/MT com 1.082 pequenos negócios
              </a>
              , feita em abril de 2025, mostra que só 17% dos empresários já usam IA. Entre os que usam, 54% enfrentaram
              dificuldades na implementação, e a principal delas é a falta de conhecimento técnico. O desafio não é saber
              que a IA existe, é transformar a ferramenta em venda, em tempo economizado e em decisão melhor. É aí que a
              entidade pode fazer diferença para o associado, e é aí que eu trabalho.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/guimas-palestra-ia-empresarios.webp"
                alt="Guimas palestrando sobre inteligência artificial para empresários"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 4.3 Formatos */}
      <section id="formatos" className="py-20 bg-slate-50 dark:bg-slate-900/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <SectionEyebrow label="Formatos" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
              Três formatos para a sua entidade
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMATOS.map((formato, index) => (
              <Card key={formato.id} id={formato.id} className="scroll-mt-24 border-t-2 border-t-blue-600">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="text-sm font-bold tracking-[0.1em] tabular-nums text-blue-600 dark:text-blue-400 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{formato.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{formato.text}</p>
                  <a
                    href="#proposta"
                    className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Pedir proposta deste formato
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-gray-600 dark:text-gray-400">
            Para empresas, veja também as{" "}
            <Link href="/palestras/" className="text-blue-600 dark:text-blue-400 underline underline-offset-4">
              palestras de inteligência artificial
            </Link>{" "}
            e os{" "}
            <Link href="/workshops/" className="text-blue-600 dark:text-blue-400 underline underline-offset-4">
              workshops de IA para equipes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 4.4 Casos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <SectionEyebrow label="Casos" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
              Palestras e imersões de IA já realizadas com entidades
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Projetos em Pernambuco, na Bahia e em Mato Grosso, para federações, sindicatos, CDLs e Sebrae.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {CASOS.map((caso) => (
              <Card key={caso.titulo} className="border-t-2 border-t-blue-600">
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400 mb-3">
                    {caso.entidade}
                  </p>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{caso.titulo}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{caso.texto}</p>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{caso.local}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Depoimentos em vídeo (Sebrae MT: reservado, só entra com depoimento aprovado) */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Depoimentos</h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xl">
            {DEPOIMENTOS.map((dep) => (
              <figure key={dep.id}>
                <YoutubeFacade id={dep.id} title={dep.title} vertical />
                <figcaption className="mt-3">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">{dep.nome}</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{dep.papel}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Como funciona */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <SectionEyebrow label="Processo" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-10">
              Como funciona, do primeiro contato ao evento
            </h2>
            <ol className="space-y-8">
              {[
                "Conversa inicial: objetivo da entidade, perfil dos associados e setores presentes.",
                "Desenho do formato: palestra, imersão ou workshop, ajustado aos segmentos do seu público.",
                "Entrega presencial, com exemplos do comércio e dos serviços da sua região. Depois, conversamos sobre os próximos passos com a entidade.",
              ].map((passo, index) => (
                <li key={index} className="flex gap-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold tabular-nums">
                    {index + 1}
                  </span>
                  <p className="text-lg text-gray-700 dark:text-gray-300 pt-1.5">{passo}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4.6 Para quem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <SectionEyebrow label="Público" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-6">Para quem é</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Para CDLs, Sebraes, associações comerciais e industriais, câmaras de comércio, sindicatos patronais,
              federações e núcleos setoriais que querem entregar aos associados algo mais do que uma palestra motivacional
              sobre tecnologia: um caminho concreto para começar a usar IA no negócio.
            </p>
          </div>
        </div>
      </section>

      {/* 4.7 FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <SectionEyebrow label="Perguntas frequentes" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-8">
              Dúvidas de quem organiza
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 dark:text-gray-400">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 4.8 Quem vai conduzir */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10 items-center max-w-5xl">
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <Image
                  src="/images/alexandre-guimaraes-palestrante-2026-sem-fundo.webp"
                  alt="Alexandre Guimarães, o Guimas, palestrante e consultor de IA"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <SectionEyebrow label="Quem conduz" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-gray-900 dark:text-white mb-6">
                Quem vai conduzir
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Sou Alexandre Guimarães, o Guimas, palestrante e consultor de IA e CEO da Simplí. São mais de 20 anos no
                mercado de tecnologia, mais de 15 mil pessoas impactadas, mais de 200 empresas atendidas e mais de 180
                palestras realizadas. Conheça minha{" "}
                <Link href="/kit-imprensa/" className="text-blue-600 dark:text-blue-400 underline underline-offset-4">
                  biografia completa no Kit de Imprensa
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.9 Formulário e CTA final */}
      <section id="proposta" className="py-20 bg-slate-900 text-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionEyebrow label="Proposta" tone="dark" className="mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-8">Peça uma proposta para a sua entidade</h2>
            <EntidadesForm />
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-slate-300">
              <span>Prefere conversar agora?</span>
              <TrackedLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventParams={{ location: "para-cdls-e-sebraes" }}
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">Falar direto no WhatsApp</Button>
              </TrackedLink>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Outros assuntos? Use a página de{" "}
              <Link href="/contato/" className="underline underline-offset-4 hover:text-white">
                contato
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
