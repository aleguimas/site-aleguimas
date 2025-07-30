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
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xzzvgnqk', {
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
          message: formData.message,
          _subject: 'Nova solicitação de palestra - Site Alexandre Guimarães'
        })
      })

      if (response.ok) {
        // Rastreamento temporariamente desabilitado
        console.log('Form submitted successfully')
        
        setShowSuccessModal(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          topic: '',
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
              <option value="ia-novo-basico">IA o Novo Básico</option>
              <option value="transformacao-digital">Transformação Digital na Prática</option>
              <option value="lideranca-ia">Liderança na Era da IA</option>
              <option value="ia-generativa">O Impacto da IA Generativa nos Negócios</option>
              <option value="workshop-ia">Workshop: Implementando IA na sua Empresa</option>
              <option value="workshop-lideranca">Treinamento: Liderança na Era Digital</option>
              <option value="personalizado">Tema personalizado</option>
            </select>
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
              placeholder="Conte-nos mais sobre o evento, público esperado, data preferencial, etc."
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