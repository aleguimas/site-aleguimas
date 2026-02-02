"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Download, Loader2 } from "lucide-react"

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=11w5nxT2MdOtH3SRnPNTq08ezk9AJ9Lr8"
const WEBHOOK_URL = "https://webhook.n8n.simplidigital.dev/webhook/ebook"

export default function EbookLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hasCompany: "",
    companyName: "",
    selectedEbook: "domine-arte-prompt", // Default selection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const hasCompanySelected = formData.hasCompany === "sim"

  const ebooks = {
    "domine-arte-prompt": {
      name: "Domine a Arte do Prompt",
      url: "https://drive.google.com/uc?export=download&id=11w5nxT2MdOtH3SRnPNTq08ezk9AJ9Lr8",
    },
    "playbook-executivo-ia": {
      name: "Playbook Executivo de Agentes de IA",
      url: "https://drive.google.com/uc?export=download&id=1qNR6-vR3kDSr0vnXEldgy-0RqWzm2VNV",
    },
  }

  const isFormValid = useMemo(() => {
    const baseValid =
      formData.name.trim().length > 1 &&
      formData.phone.trim().length > 7 &&
      formData.email.trim().includes("@") &&
      formData.hasCompany !== ""

    if (!baseValid) return false
    if (hasCompanySelected) {
      return formData.companyName.trim().length > 1
    }

    return true
  }, [formData, hasCompanySelected])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFormValid || isSubmitting) return

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const selectedEbookData = ebooks[formData.selectedEbook as keyof typeof ebooks]

      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        hasCompany: formData.hasCompany,
        companyName: formData.companyName,
        source: "ebook-page",
        _subject: `Download Ebook - ${selectedEbookData.name}`,
        ebook_name: selectedEbookData.name,
      }

      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!webhookResponse.ok) {
        throw new Error("Erro ao enviar suas informacoes. Tente novamente.")
      }

      setIsSuccess(true)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Nao foi possivel enviar o formulario. Tente novamente."
      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, selectedEbook: value }))
  }


  return (
    <Card className="border-none shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <Download className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
          Baixe o ebook
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="voce@exemplo.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Qual ebook você deseja baixar?</Label>
            <Select
              value={formData.selectedEbook}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o ebook" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="domine-arte-prompt">Domine a Arte do Prompt</SelectItem>
                <SelectItem value="playbook-executivo-ia">Playbook Executivo de Agentes de IA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Tem empresa?</Label>
            <Select
              value={formData.hasCompany}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  hasCompany: value,
                  companyName: value === "sim" ? prev.companyName : "",
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opcao" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Nao</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {hasCompanySelected && (
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da empresa</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Digite o nome da sua empresa"
                required={hasCompanySelected}
              />
            </div>
          )}

          {errorMessage && <p className="text-xs sm:text-sm text-red-600">{errorMessage}</p>}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-2.5"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Baixar Ebook
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 leading-relaxed">
            Os dados são usados apenas para liberar o download e enviar atualizações sobre novos conteúdos.
          </p>

          {isSuccess && (
            <div className="mt-4 flex flex-col gap-3 rounded-lg border border-green-200 bg-green-50 p-3 sm:p-4 text-xs sm:text-sm text-green-800">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span>Download liberado! Obrigado por se inscrever.</span>
              </div>
              <a
                href={ebooks[formData.selectedEbook as keyof typeof ebooks].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 underline underline-offset-4 hover:text-blue-800 transition-colors"
              >
                <Download className="h-4 w-4 flex-shrink-0" />
                <span>Abrir ebook "{ebooks[formData.selectedEbook as keyof typeof ebooks].name}"</span>
              </a>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
