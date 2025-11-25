"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Download, Loader2 } from "lucide-react"

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=11w5nxT2MdOtH3SRnPNTq08ezk9AJ9Lr8"

export default function EbookLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hasCompany: "",
    companyName: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const hasCompanySelected = formData.hasCompany === "sim"

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
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        hasCompany: formData.hasCompany,
        companyName: formData.companyName,
        source: "ebook-domine-a-arte-do-prompt",
        _subject: "Download Ebook - Domine a Arte do Prompt",
      }

      const [webhookResponse, formspreeResponse] = await Promise.all([
        fetch("https://webhook.n8n1.agenciaevodigital.com/webhook/ebook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
        fetch("https://formspree.io/f/xzzvgnqk", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ])

      if (!webhookResponse.ok || !formspreeResponse.ok) {
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

  return (
    <Card className="border-none shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Download className="h-6 w-6 text-blue-600" />
          Baixe o ebook
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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

          <p className="text-xs text-gray-500">
            Os dados sao usados apenas para liberar o download e enviar atualizacoes sobre novos conteudos.
          </p>

          {isSuccess && (
            <div className="mt-4 flex flex-col gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle className="h-4 w-4" />
                Download liberado! Obrigado por se inscrever.
              </div>
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 underline underline-offset-4"
              >
                <Download className="h-4 w-4" />
                Abrir ebook "Domine a Arte do Prompt"
              </a>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
