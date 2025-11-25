import Image from "next/image"
import Script from "next/script"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EbookLeadForm from "@/components/ebook-lead-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, ShieldCheck, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ebook Gratuito: Domine a Arte do Prompt | Guia Completo de Prompts para IA",
  description:
    "Baixe gratuitamente o ebook 'Domine a Arte do Prompt' e aprenda a escrever prompts eficazes para ChatGPT, Claude e outras IAs. Estruturas prontas, exemplos práticos e checklists para criar prompts que geram respostas claras e aplicáveis para seu negócio. Alexandre Guimarães - Especialista em IA.",
  keywords: [
    "ebook prompts IA",
    "ebook gratuito prompts",
    "como escrever prompts para IA",
    "guia de prompts ChatGPT",
    "prompts eficazes para IA",
    "ebook inteligência artificial",
    "domine a arte do prompt",
    "prompts para negócios",
    "prompts para marketing",
    "prompts para vendas",
    "estruturas de prompts",
    "exemplos de prompts",
    "checklist de prompts",
    "ebook IA gratuito",
    "aprender a usar IA",
    "prompts profissionais",
    "templates de prompts",
    "melhores práticas prompts",
    "ebook transformação digital",
    "guia completo prompts IA"
  ],
  openGraph: {
    title: "Ebook Gratuito: Domine a Arte do Prompt | Guia Completo de Prompts para IA",
    description:
      "Baixe gratuitamente o ebook e aprenda a criar prompts que funcionam de primeira. Estruturas prontas, exemplos práticos e checklists para aumentar a qualidade das respostas de IA no seu dia a dia.",
    url: "https://www.aleguimas.com.br/ebook",
    type: "website",
    images: [
      {
        url: "https://www.aleguimas.com.br/ebook.png",
        width: 1200,
        height: 1600,
        alt: "Capa do ebook Domine a Arte do Prompt - Alexandre Guimarães",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebook Gratuito: Domine a Arte do Prompt | Guia Completo de Prompts para IA",
    description:
      "Baixe gratuitamente o ebook e aprenda a criar prompts eficazes para ChatGPT, Claude e outras IAs. Estruturas prontas e exemplos práticos.",
    images: ["https://www.aleguimas.com.br/ebook.png"],
  },
  alternates: {
    canonical: "https://www.aleguimas.com.br/ebook",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EbookPage() {
  // Structured Data para SEO
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Domine a Arte do Prompt",
    "description": "Guia completo para escrever prompts eficazes para Inteligência Artificial. Estruturas prontas, exemplos práticos e checklists para criar prompts que geram respostas claras e aplicáveis para seu negócio.",
    "author": {
      "@type": "Person",
      "name": "Alexandre Guimarães",
      "url": "https://www.aleguimas.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alexandre Guimarães",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aleguimas.com.br/images/alexandre_guimas_palestrante_principal.webp"
      }
    },
    "image": "https://www.aleguimas.com.br/ebook.png",
    "inLanguage": "pt-BR",
    "bookFormat": "https://schema.org/EBook",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": "https://www.aleguimas.com.br/ebook"
    },
    "keywords": "prompts IA, ChatGPT, inteligência artificial, ebook gratuito, guia prompts"
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ebook: Domine a Arte do Prompt",
    "description": "Ebook gratuito com guia completo para escrever prompts eficazes para IA. Inclui estruturas prontas, exemplos práticos e checklists.",
    "image": "https://www.aleguimas.com.br/ebook.png",
    "brand": {
      "@type": "Brand",
      "name": "Alexandre Guimarães"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": "https://www.aleguimas.com.br/ebook"
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Script
        id="book-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookJsonLd)
        }}
      />
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <Navbar hideThemeToggle />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-white/10 text-blue-100 hover:bg-white/20 px-4 py-1 rounded-full w-fit">
              Ebook Gratuito
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Baixe agora o ebook{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Domine a Arte do Prompt
              </span>
            </h1>
            <div className="md:hidden w-full">
              <div className="relative max-w-md mx-auto w-full">
                <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full" />
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/50">
                    <img 
                      src="/ebook.png" 
                      alt="Capa do ebook Domine a Arte do Prompt - Guia completo para escrever prompts eficazes para ChatGPT, Claude e outras IAs" 
                      className="w-full h-auto object-contain" 
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl">
              Aprenda a escrever prompts eficazes para ChatGPT, Claude e outras IAs. Estruturas prontas, exemplos práticos e checklists para criar prompts que destravam resultados com Inteligência Artificial, mesmo se você estiver começando agora.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-200 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Fórmulas testadas</p>
                  <p className="text-xs sm:text-sm text-blue-100/80">
                    Modelos de prompt prontos para marketing, vendas e operações.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-200 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Download imediato</p>
                  <p className="text-xs sm:text-sm text-blue-100/80">Basta preencher os campos e liberar o PDF.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="#ebook-form" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-slate-100">
                  <Download className="h-5 w-5" />
                  Quero baixar agora
                </Button>
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                100% gratuito, sem spam
              </div>
            </div>
          </div>

          <div className="relative max-w-md mx-auto w-full hidden md:block">
            <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/50">
                <Image
                  src="/ebook.png"
                  alt="Capa do ebook Domine a Arte do Prompt - Guia completo para escrever prompts eficazes para ChatGPT, Claude e outras IAs - Alexandre Guimarães"
                  width={720}
                  height={860}
                  className="w-full h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm text-blue-50">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200 flex-shrink-0" />
                  <span>Modelos práticos de prompts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200 flex-shrink-0" />
                  <span>Guia rápido para adaptar prompts a cada contexto.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200 flex-shrink-0" />
                  <span>Erros comuns que fazem a IA responder mal e como evitar.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200 flex-shrink-0" />
                  <span>Checklist para garantir prompts claros e acionáveis.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ebook-form" className="py-12 md:py-16 lg:py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Download imediato</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Liberar download do ebook</h2>
              <p className="text-base sm:text-lg text-slate-600">
                Preencha os campos abaixo para receber o link de download do PDF "Domine a Arte do Prompt".
                O botão só libera depois que todas as respostas forem informadas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Passo a passo para escrever prompts claros.",
                "Prompts para análises, marketing e vendas.",
                "Estruturas para evitar respostas superficiais.",
                "Checklist rápido para revisar seus pedidos.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-600">
                Seus dados ficam protegidos e são usados apenas para enviar o ebook e novos conteúdos relacionados.
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <EbookLeadForm />
          </div>
        </div>
      </section>

      {/* Seção de Conteúdo Adicional para SEO */}
      <section className="py-12 md:py-16 bg-slate-50 text-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              O que você vai aprender no ebook "Domine a Arte do Prompt"
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Este ebook gratuito foi criado para ajudar profissionais e empresas a dominarem a arte de escrever prompts eficazes para Inteligência Artificial. Com o crescimento acelerado de ferramentas como ChatGPT, Claude, Gemini e outras IAs generativas, saber como se comunicar corretamente com essas tecnologias se tornou essencial.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-6 mb-3">
                Por que aprender a escrever prompts eficazes?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Prompts bem escritos são a diferença entre obter respostas genéricas e superficiais ou resultados precisos, aplicáveis e que realmente agregam valor ao seu negócio. No ebook "Domine a Arte do Prompt", você encontrará estruturas testadas e aprovadas que podem ser aplicadas imediatamente em diferentes contextos profissionais.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-6 mb-3">
                Conteúdo do ebook
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-slate-700">
                <li>Estruturas de prompts prontas para usar em marketing, vendas e operações</li>
                <li>Exemplos práticos de prompts que geram resultados reais</li>
                <li>Erros comuns que fazem a IA responder mal e como evitá-los</li>
                <li>Checklist completo para revisar seus prompts antes de usar</li>
                <li>Guia rápido para adaptar prompts a diferentes contextos e necessidades</li>
                <li>Técnicas avançadas para prompts mais complexos e específicos</li>
              </ul>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-6">
                Desenvolvido por <strong>Alexandre Guimarães</strong>, especialista em Inteligência Artificial e Transformação Digital, este ebook reúne anos de experiência prática em implementação de IA em empresas de diversos segmentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
