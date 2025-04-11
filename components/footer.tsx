import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"

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

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/images/guimas-palestrante-header.png"
                  alt="Alexandre Guimarães"
                  width={40}
                  height={40}
                  className="object-cover object-top"
                />
              </div>
              <span className="text-lg font-semibold text-white">Alexandre Guimarães</span>
            </div>
            <p className="text-gray-400 mb-6">
              Especialista em Inteligência Artificial, Transformação Digital e Inovação, ajudando empresas a se
              adaptarem e prosperarem na era digital.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/alexandreguimaraes81/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/aleguimas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@aleguimas_palestrante"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://tiktok.com/aleguimas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TikTok />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://www.facebook.com/aleguimas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/palestras" className="text-gray-400 hover:text-white transition-colors">
                  Palestras
                </Link>
              </li>
              <li>
                <Link href="/consultoria" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-white transition-colors">
                  Vídeos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kit-imprensa" className="text-gray-400 hover:text-white transition-colors">
                  Kit de Imprensa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Temas</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/temas/inteligencia-artificial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link href="/temas/transformacao-digital" className="text-gray-400 hover:text-white transition-colors">
                  Transformação Digital
                </Link>
              </li>
              <li>
                <Link href="/temas/inovacao" className="text-gray-400 hover:text-white transition-colors">
                  Inovação
                </Link>
              </li>
              <li>
                <Link href="/temas/lideranca" className="text-gray-400 hover:text-white transition-colors">
                  Liderança na Era Digital
                </Link>
              </li>
              <li>
                <Link href="/temas/futuro-do-trabalho" className="text-gray-400 hover:text-white transition-colors">
                  Futuro do Trabalho
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">contato@aleguimas.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">São Paulo - SP, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Alexandre Guimarães. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/politica-de-privacidade"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
