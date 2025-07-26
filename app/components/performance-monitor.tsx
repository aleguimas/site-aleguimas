'use client'

import { useEffect } from 'react'

// Declaração global para gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitorar Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        
        // Enviar para Google Analytics se necessário
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'LCP', {
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
            event_label: 'LCP'
          })
        }
      })
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      
      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'FID', {
              value: Math.round(fidEntry.processingStart - fidEntry.startTime),
              event_category: 'Web Vitals',
              event_label: 'FID'
            })
          }
        })
      })
      
      fidObserver.observe({ entryTypes: ['first-input'] })
      
      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        
        console.log('CLS:', clsValue)
        
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'CLS', {
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Web Vitals',
            event_label: 'CLS'
          })
        }
      })
      
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      
      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])
  
  return null
} 