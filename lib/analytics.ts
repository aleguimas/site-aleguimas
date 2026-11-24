// Google Analytics Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  } catch (error) {
    console.log('Google Analytics not available for event tracking:', error)
  }
}

// Eventos específicos do site
export const trackWhatsAppClick = (location: string) => {
  trackEvent('click', 'whatsapp', location)
}

export const trackFormSubmission = (formType: string) => {
  trackEvent('submit', 'form', formType)
}

export const trackPageView = (page: string) => {
  trackEvent('page_view', 'navigation', page)
}

export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('play', 'video', videoTitle)
}

export const trackContactClick = (method: string) => {
  trackEvent('click', 'contact', method)
}

export const trackThemePageView = (theme: string) => {
  trackEvent('page_view', 'theme', theme)
} 

// UTMs de origem da visita. Ficam guardadas na sessão para acompanhar
// o visitante mesmo depois que ele navega para outra página do site.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export const getUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {}
  const result: Record<string, string> = {}
  try {
    const params = new URLSearchParams(window.location.search)
    UTM_KEYS.forEach((key) => {
      const value = params.get(key)
      if (value) sessionStorage.setItem(key, value)
      const stored = value ?? sessionStorage.getItem(key)
      if (stored) result[key] = stored
    })
  } catch {
    // sessionStorage indisponível (aba anônima restrita etc.): segue sem UTM
  }
  return result
}

// Evento GA4 com parâmetros livres + UTMs de origem
export const trackGa4Event = (eventName: string, params: Record<string, string | number> = {}) => {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', eventName, { ...getUtmParams(), ...params })
    }
  } catch (error) {
    console.log('Google Analytics not available for event tracking:', error)
  }
}
