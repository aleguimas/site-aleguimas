'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import Script from 'next/script'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const baseUrl = 'https://www.aleguimas.com.br'
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Início', href: '/', current: paths.length === 0 }
    ]
    
    let currentPath = ''
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      
      // Mapear nomes amigáveis para as rotas
      const labelMap: { [key: string]: string } = {
        'palestras': 'Palestras',
        'trajetoria': 'Trajetória',
        'videos': 'Vídeos',
        'contato': 'Contato',
        'kit-imprensa': 'Kit de Imprensa',
        'consultoria': 'Consultoria',
        'workshops': 'Workshops',
        'ebook': 'Ebook',
        'blog': 'Blog',
        'temas': 'Temas',
        'inteligencia-artificial': 'Inteligência Artificial',
        'transformacao-digital': 'Transformação Digital',
        'inovacao': 'Inovação',
        'lideranca': 'Liderança',
        'futuro-do-trabalho': 'Futuro do Trabalho',
        'agentes-ia': 'Agentes de IA'
      }
      
      const label = labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1)
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: index === paths.length - 1
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  if (breadcrumbs.length <= 1) return null
  
  // Gerar JSON-LD para BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.label,
      "item": `${baseUrl}${breadcrumb.href}`
    }))
  }
  
  return (
    <>
      {/* Structured Data JSON-LD */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />
      
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              )}
              
              {breadcrumb.current ? (
                <span 
                  className="font-medium text-gray-900 dark:text-white"
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
} 