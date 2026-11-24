"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { trackGa4Event } from "@/lib/analytics"

const FORM_NAME = "proposta-entidades"
const WHATSAPP_NUMBER = "5581991942628"

const FORMATOS = [
  { value: "palestra", label: "Palestra" },
  { value: "imersao", label: "Imersão de 2 dias" },
  { value: "workshop", label: "Workshop IA na Prática" },
  { value: "ainda-nao-sei", label: "Ainda não sei" },
]

const emptyForm = {
  nome: "",
  entidade: "",
  cidade: "",
  associados: "",
  formato: "",
  data: "",
  mensagem: "",
  whatsapp: "",
}

type FormState = typeof emptyForm

const selectClass =
  "w-full h-10 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring dark:bg-slate-800 dark:border-slate-700 dark:text-white"
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"

function buildWhatsappMessage(data: FormState) {
  const formato = FORMATOS.find((f) => f.value === data.formato)?.label ?? data.formato
  const linhas = [
    "Olá, Guimas. Quero uma proposta para a minha entidade.",
    "",
    `Nome: ${data.nome}`,
    `Entidade: ${data.entidade}`,
    `Cidade/UF: ${data.cidade}`,
    `Associados (aprox.): ${data.associados}`,
    `Formato de interesse: ${formato}`,
    data.data ? `Data prevista: ${data.data}` : "",
    data.mensagem ? `Mensagem: ${data.mensagem}` : "",
  ].filter(Boolean)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas.join("\n"))}`
}

/**
 * Formulário de pedido de proposta para entidades.
 * Envia para o Netlify Forms (notificação por e-mail configurada no painel do Netlify)
 * e abre o WhatsApp com os dados já preenchidos.
 */
export default function EntidadesForm() {
  const [data, setData] = useState<FormState>(emptyForm)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [whatsappUrl, setWhatsappUrl] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "sending") return

    const url = buildWhatsappMessage(data)
    setWhatsappUrl(url)
    // Abre o WhatsApp ainda dentro do clique, para o navegador não bloquear a nova aba
    window.open(url, "_blank", "noopener,noreferrer")

    setStatus("sending")
    try {
      const body = new URLSearchParams({ "form-name": FORM_NAME, ...data })
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      trackGa4Event("generate_lead", {
        form_name: FORM_NAME,
        formato: data.formato || "nao-informado",
        page: "para-cdls-e-sebraes",
      })
      setStatus("sent")
      setData(emptyForm)
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <Card className="border-none shadow-xl">
        <CardContent className="p-8 text-center space-y-4">
          <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" aria-hidden="true" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pedido recebido</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Obrigado. Vou analisar os dados da sua entidade e retornar com uma proposta.
          </p>
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackGa4Event("whatsapp_click", { location: "entidades-form-sucesso" })}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white">Enviar também pelo WhatsApp</Button>
            </a>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-none shadow-xl">
      <CardContent className="p-6 sm:p-8">
        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="hidden">
            <label>
              Não preencha: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nome" className={labelClass}>Nome</label>
              <Input id="nome" name="nome" value={data.nome} onChange={handleChange} required autoComplete="name" />
            </div>
            <div>
              <label htmlFor="entidade" className={labelClass}>Entidade</label>
              <Input id="entidade" name="entidade" value={data.entidade} onChange={handleChange} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cidade" className={labelClass}>Cidade e UF</label>
              <Input id="cidade" name="cidade" value={data.cidade} onChange={handleChange} placeholder="Ex.: Cuiabá, MT" required />
            </div>
            <div>
              <label htmlFor="associados" className={labelClass}>Número aproximado de associados</label>
              <Input id="associados" name="associados" value={data.associados} onChange={handleChange} inputMode="numeric" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="formato" className={labelClass}>Formato de interesse</label>
              <select id="formato" name="formato" value={data.formato} onChange={handleChange} className={selectClass} required>
                <option value="">Selecione</option>
                {FORMATOS.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="data" className={labelClass}>Data prevista (opcional)</label>
              <Input id="data" name="data" value={data.data} onChange={handleChange} placeholder="Ex.: março de 2027" />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className={labelClass}>Mensagem</label>
            <Textarea id="mensagem" name="mensagem" value={data.mensagem} onChange={handleChange} className="min-h-[110px]" />
          </div>

          <div>
            <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
            <Input id="whatsapp" name="whatsapp" type="tel" value={data.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" required autoComplete="tel" />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400" role="alert">
              Não consegui registrar o envio por aqui. Se o WhatsApp não abriu, use o botão abaixo para falar direto comigo.
            </p>
          )}

          <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar pedido de proposta"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
