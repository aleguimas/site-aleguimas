import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

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

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie uma mensagem</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Preencha o formulário abaixo e entrarei em contato com você o mais breve possível.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome completo
                    </label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-mail
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Assunto da mensagem" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu interesse ou dúvida..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Você também pode entrar em contato diretamente através dos canais abaixo.
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
                      <p className="text-gray-600 dark:text-gray-400">aleguimas@gmail.com.br</p>
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
