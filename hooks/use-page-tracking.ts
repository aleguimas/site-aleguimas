"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function usePageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Rastrear visualização da página
        (window as any).gtag('config', 'G-4FJCDGTPXG', {
          page_path: pathname,
        })
      }
    } catch (error) {
      console.log('Google Analytics not available for page tracking:', error)
    }
  }, [pathname])
} 