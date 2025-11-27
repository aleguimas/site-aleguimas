"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import SuccessModal from "@/components/success-modal"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    eventType: '',
    participants: '',
    datePreference: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Configurar endpoint para envio do formulário
      const response = await fetch('SEU_ENDPOINT_AQUI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          topic: formData.topic,
          eventType: formData.eventType,
          participants: formData.participants,
          datePreference: formData.datePreference,
          message: formData.message,
          _subject: 'Nova solicitação de palestra/workshop - Site Alexandre Guimarães'
        })
      })

      if (response.ok) {
        console.log('Form submitted successfully')
        
        setShowSuccessModal(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          topic: '',
          eventType: '',
          participants: '',
          datePreference: '',
          message: ''
        })
      } else {
        alert('Erro ao enviar formulário. Tente novamente.')
      }
    } catch (error) {
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Card className="border-none shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nome completo
              </label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                E-mail corporativo
              </label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@empresa.com" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Telefone
              </label>
              <Input 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000" 
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Empresa
              </label>
              <Input 
                id="company" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da empresa" 
                required 
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tema de interesse
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              required
            >
              <option value="">Selecione um tema</option>
              <optgroup label="Palestras">
                <option value="ia-novo-basico">IA o Novo Básico</option>
                <option value="transformacao-digital">Transformação Digital na Prática</option>
                <option value="lideranca-ia">Liderança na Era da IA</option>
                <option value="ia-generativa">O Impacto da IA Generativa nos Negócios</option>
              </optgroup>
              <optgroup label="Workshops">
                <option value="workshop-ia-negocios">Workshop: IA para Negócios (4 horas)</option>
                <option value="imersao-ia">Imersão de IA (8 horas)</option>
              </optgroup>
              <optgroup label="Outros">
                <option value="personalizado">Tema personalizado</option>
                <option value="consultoria">Consultoria em IA</option>
                <option value="treinamento-equipe">Treinamento para Equipe</option>
              </optgroup>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipo de evento
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              >
                <option value="">Selecione o tipo</option>
                <option value="presencial">Presencial</option>
                <option value="online">Online</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>
            <div>
              <label htmlFor="participants" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Número de participantes
              </label>
              <select
                id="participants"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              >
                <option value="">Selecione a quantidade</option>
                <option value="1-20">1-20 pessoas</option>
                <option value="21-50">21-50 pessoas</option>
                <option value="51-100">51-100 pessoas</option>
                <option value="101-200">101-200 pessoas</option>
                <option value="200+">Mais de 200 pessoas</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="datePreference" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Data preferencial
            </label>
            <Input 
              id="datePreference" 
              name="datePreference"
              type="text"
              value={formData.datePreference}
              onChange={handleChange}
              placeholder="Ex: Janeiro 2025, Q1 2025, ou data específica" 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Detalhes adicionais
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos mais sobre o evento: público-alvo, objetivos, localização, orçamento disponível, necessidades específicas da empresa, etc."
              className="min-h-[120px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar Cotação'}
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Ao enviar este formulário, você concorda em receber comunicações relacionadas à sua solicitação.
            Seus dados estão seguros e não serão compartilhados com terceiros.
          </p>
        </form>
      </CardContent>
    </Card>

    {/* Modal de Sucesso */}
    <SuccessModal 
      isOpen={showSuccessModal} 
      onClose={() => setShowSuccessModal(false)} 
    />
    </>
  )
} 