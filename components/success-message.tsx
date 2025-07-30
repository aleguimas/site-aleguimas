"use client"

import { useEffect, useState } from 'react'

export default function SuccessMessage() {
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Verificar se há parâmetro de sucesso na URL
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      setIsSuccess(true)
      // Limpar a URL após mostrar a mensagem
      window.history.replaceState({}, document.title, window.location.pathname)
      
      // Scroll para o topo da página
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  if (!isSuccess) return null

  return (
    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4 mx-4 mt-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-green-700">
            <strong>Sucesso!</strong> Sua solicitação foi enviada com sucesso. Entraremos em contato em breve!
          </p>
        </div>
      </div>
    </div>
  )
} 