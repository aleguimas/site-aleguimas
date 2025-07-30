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