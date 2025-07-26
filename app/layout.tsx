import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alexandre Guimarães - Palestrante e Consultor em IA e Transformação Digital",
    template: "%s | Alexandre Guimarães"
  },
  description: "Especialista em Inteligência Artificial, Transformação Digital e Inovação, ajudando empresas a se adaptarem e prosperarem na era digital. Palestras, workshops e consultoria em IA.",
  keywords: [
    "palestrante inteligência artificial",
    "consultor transformação digital", 
    "palestras IA",
    "workshop inteligência artificial",
    "consultoria inovação",
    "palestrante tecnologia",
    "Alexandre Guimarães",
    "IA aplicada",
    "transformação digital empresas",
    "palestras inovação"
  ],
  authors: [{ name: "Alexandre Guimarães" }],
  creator: "Alexandre Guimarães",
  publisher: "Alexandre Guimarães",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.aleguimas.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.aleguimas.com.br',
    title: 'Alexandre Guimarães - Palestrante e Consultor em IA e Transformação Digital',
    description: 'Especialista em Inteligência Artificial, Transformação Digital e Inovação, ajudando empresas a se adaptarem e prosperarem na era digital.',
    siteName: 'Alexandre Guimarães',
    images: [
      {
        url: '/images/alexandre_guimas_palestrante_principal.webp',
        width: 1200,
        height: 630,
        alt: 'Alexandre Guimarães - Palestrante e Consultor em IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandre Guimarães - Palestrante e Consultor em IA e Transformação Digital',
    description: 'Especialista em Inteligência Artificial, Transformação Digital e Inovação, ajudando empresas a se adaptarem e prosperarem na era digital.',
    images: ['/images/alexandre_guimas_palestrante_principal.webp'],
    creator: '@aleguimas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-google-verification-code', // Substitua pelo código real do Google Search Console
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alexandre Guimarães",
              "jobTitle": "Palestrante e Consultor em Inteligência Artificial",
              "description": "Especialista em Inteligência Artificial, Transformação Digital e Inovação",
              "url": "https://www.aleguimas.com.br",
              "image": "https://www.aleguimas.com.br/images/alexandre_guimas_palestrante_principal.webp",
              "sameAs": [
                "https://www.linkedin.com/in/alexandre-guimarães",
                "https://www.youtube.com/@aleguimas",
                "https://www.instagram.com/aleguimas"
              ],
              "knowsAbout": [
                "Inteligência Artificial",
                "Transformação Digital", 
                "Inovação",
                "Machine Learning",
                "Automação",
                "Estratégia de Negócios"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Consultor Independente"
              }
            })
          }}
        />
        {/* Google Analytics - Substitua GA_MEASUREMENT_ID pelo seu ID real */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main id="main-content">
            {children}
          </main>
          
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/5581991942628"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Fale conosco no WhatsApp"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            
            <div className="hidden md:block absolute right-16 bottom-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Fale conosco
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </a>
        </ThemeProvider>
      </body>
    </html>
  )
}