'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StudioRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirecionar para o Sanity Studio hospedado
    window.location.href = 'https://aleguimas-cms.sanity.studio/'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Redirecionando para o Sanity Studio...
        </h1>
        <p className="text-gray-600 mb-4">
          Se você não for redirecionado automaticamente, clique no link abaixo:
        </p>
        <a
          href="https://aleguimas-cms.sanity.studio/"
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Sanity Studio
        </a>
      </div>
    </div>
  )
}
