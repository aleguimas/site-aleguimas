"use client"

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevenir scroll do body quando modal estiver aberto
      document.body.style.overflow = 'hidden'
      
      // Auto-close após 5 segundos
      const timer = setTimeout(() => {
        onClose()
      }, 5000)

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = 'unset'
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="text-center">
          {/* Ícone de sucesso */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          
          {/* Título */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Solicitação Enviada!
          </h3>
          
          {/* Mensagem */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Sua solicitação foi enviada com sucesso. 
            <br />
            <span className="font-medium text-green-600 dark:text-green-400">
              Entraremos em contato em breve!
            </span>
          </p>
          
          {/* Botão */}
          <Button 
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            Entendi
          </Button>
        </div>
        
        {/* Botão de fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Fechar modal"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
} 