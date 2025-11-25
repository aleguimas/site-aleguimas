import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EbookLeadForm from "@/components/ebook-lead-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, ShieldCheck, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ebook - Domine a Arte do Prompt | Alexandre Guimaraes",
  description:
    "Baixe o ebook gratuito Domine a Arte do Prompt e aprenda a escrever prompts que geram respostas claras e aplicaveis para o seu negocio.",
  openGraph: {
    title: "Ebook - Domine a Arte do Prompt | Alexandre Guimaraes",
    description:
      "Aprenda a criar prompts que funcionam de primeira e aumente a qualidade das respostas de IA no seu dia a dia.",
    url: "https://www.aleguimas.com.br/ebook",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Ebook - Domine a Arte do Prompt",
      },
    ],
  },
  alternates: {
    canonical: "/ebook",
  },
}

export default function EbookPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar hideThemeToggle />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-white/10 text-blue-100 hover:bg-white/20 px-4 py-1 rounded-full w-fit">
              Melhore suas respostas da IA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
                    <img src="/ebook.png" alt="Capa do ebook Domine a Arte do Prompt" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-blue-100 max-w-2xl">
              Estruturas prontas, exemplos praticos e checklists para criar prompts que destravam resultados com IA,
              mesmo se voce estiver começando agora.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="h-6 w-6 text-cyan-200 mt-0.5" />
                <div>
                  <p className="font-semibold">Formulas testadas</p>
                  <p className="text-sm text-blue-100/80">
                    Modelos de prompt prontos para marketing, vendas e operacoes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-cyan-200 mt-0.5" />
                <div>
                  <p className="font-semibold">Download imediato</p>
                  <p className="text-sm text-blue-100/80">Basta preencher os campos e liberar o PDF.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#ebook-form">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
                  <Download className="h-5 w-5" />
                  Quero baixar agora
                </Button>
              </a>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle className="h-4 w-4" />
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
                  alt="Capa do ebook Domine a Arte do Prompt"
                  width={720}
                  height={860}
                  className="w-full h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-blue-50">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200" />
                  Modelos praticos de prompts.
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200" />
                  Guia rapido para adaptar prompts a cada contexto.
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200" />
                  Erros comuns que fazem a IA responder mal e como evitar.
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-cyan-200" />
                  Checklist para garantir prompts claros e acionaveis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ebook-form" className="py-16 lg:py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Download imediato</Badge>
              <h2 className="text-3xl font-bold text-slate-900">Liberar download do ebook</h2>
              <p className="text-lg text-slate-600">
                Preencha os campos abaixo para receber o link de download do PDF "Domine a Arte do Prompt".
                O botao so libera depois que todas as respostas forem informadas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Passo a passo para escrever prompts claros.",
                "Prompts para analises, marketing e vendas.",
                "Estruturas para evitar respostas superficiais.",
                "Checklist rapido para revisar seus pedidos.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <div className="text-sm text-slate-600">
                Seus dados ficam protegidos e sao usados apenas para enviar o ebook e novos conteudos relacionados.
              </div>
            </div>
          </div>

          <EbookLeadForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
