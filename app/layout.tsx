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
  icons: {
    icon: '/images/favicon-aleguimas.png',
    shortcut: '/images/favicon-aleguimas.png',
    apple: '/images/favicon-aleguimas.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon-aleguimas.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-aleguimas.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/favicon-aleguimas.png" />
        <link rel="shortcut icon" href="/images/favicon-aleguimas.png" type="image/png" />
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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4FJCDGTPXG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4FJCDGTPXG');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main id="main-content">
            {children}
          </main>
          
          {/* Floating WhatsApp Button - Removido */}

        </ThemeProvider>
      </body>
    </html>
  )
}