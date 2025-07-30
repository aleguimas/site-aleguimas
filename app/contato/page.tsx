import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

// Criando um componente TikTok já que não existe no Lucide
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tiktok"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export const metadata: Metadata = {
  title: "Contato - Alexandre Guimarães",
  description: "Entre em contato com Alexandre Guimarães para palestras, workshops e consultoria em Inteligência Artificial e Transformação Digital. Solicite orçamento e informações.",
  keywords: [
    "contato Alexandre Guimarães",
    "solicitar palestra",
    "contratar palestrante",
    "consultoria IA",
    "orçamento palestra",
    "contato palestrante tecnologia"
  ],
  openGraph: {
    title: "Contato - Alexandre Guimarães",
    description: "Entre em contato com Alexandre Guimarães para palestras, workshops e consultoria em Inteligência Artificial e Transformação Digital. Solicite orçamento e informações.",
    url: "https://www.aleguimas.com.br/contato",
    images: [
      {
        url: "/images/alexandre_guimas_palestrante_principal.webp",
        width: 1200,
        height: 630,
        alt: "Contato - Alexandre Guimarães",
      },
    ],
  },
  alternates: {
    canonical: "/contato",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estou à disposição para ajudar você e sua empresa a navegar pelo mundo da Inteligência Artificial e
            Transformação Digital.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Fale Comigo</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                A maneira mais rápida de entrar em contato é através do WhatsApp. 
                Clique no botão abaixo e vamos conversar sobre como posso ajudar sua empresa!
              </p>

              <div className="space-y-6">
                <a
                  href="https://wa.me/5581991942628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Fale Comigo no WhatsApp
                </a>

                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Resposta em até 2 horas • Atendimento de segunda a sexta, 8h às 18h
                  </p>
                </div>
                </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Por que escolher o WhatsApp?</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    Resposta rápida e direta
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    Pode enviar arquivos e imagens
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    Conversa mais informal e descontraída
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    Ideal para tirar dúvidas rápidas
                  </li>
                </ul>
                </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Você também pode entrar em contato através dos canais abaixo.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+55 (81) 99194-2628</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center p-6">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">E-mail</h3>
                      <p className="text-gray-600 dark:text-gray-400">aleguimas@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start p-6">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Localização</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Recife - PE, Brasil
                        <br />
                        Disponível para palestras e consultorias em todo o Brasil
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Redes Sociais</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  <a
                    href="https://www.linkedin.com/in/alexandreguimaraes81/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/aleguimas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@aleguimas_palestrante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                  >
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>
                  <a
                    href="https://tiktok.com/aleguimas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                  >
                    <TikTok />
                    <span className="sr-only">TikTok</span>
                  </a>
                  <a
                    href="https://www.facebook.com/aleguimas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
