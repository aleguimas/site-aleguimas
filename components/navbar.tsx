"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

// Remover o link "Kit Imprensa" do menu principal
const navigation = [
  { name: "Início", href: "/" },
  { name: "Palestras", href: "/palestras" },
  { name: "Workshops", href: "/workshops" },
  { name: "Consultoria", href: "/consultoria" },
  { name: "Blog", href: "/blog" },
  { name: "Vídeos", href: "/videos" },
  { name: "E-book", href: "/ebook" },
  { name: "Contato", href: "/contato" },
]

type NavbarProps = {
  hideThemeToggle?: boolean
}

export default function Navbar({ hideThemeToggle = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fechar menu com ESC e prevenir scroll do body quando aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden'
      
      // Fechar menu com ESC
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false)
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscape)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Mantém header fixa; fechamento do menu apenas por ação explícita

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        "bg-white dark:bg-slate-900 backdrop-blur-md shadow-sm",
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center flex-shrink-0 min-w-0 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center min-w-0">
            <span className="sr-only">Alexandre Guimarães</span>
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
              <img
                src="/images/guimas-palestrante-header.png"
                alt="Alexandre Guimarães"
                width={40}
                height={40}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <span className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
              Alexandre Guimarães
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 lg:hidden flex-shrink-0">
          {mounted && !hideThemeToggle && (
            <button 
              type="button" 
              className="p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0" 
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            type="button"
            className="p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {mounted && !hideThemeToggle && (
            <button
              type="button"
              className="p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <a
            href="https://wa.me/5581991942628"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white">Fale Comigo</Button>
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 right-0 z-[70] w-72 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Alexandre Guimarães</span>
            <div className="h-7 w-7 rounded-full overflow-hidden mr-2">
              <img
                src="/images/guimas-palestrante-header.png"
                alt="Alexandre Guimarães"
                width={28}
                height={28}
                className="object-cover object-center"
              />
            </div>
            <span className="text-xs font-semibold text-gray-900 dark:text-white truncate">Alexandre Guimarães</span>
          </Link>
          <button
            type="button"
            className="rounded-md p-1 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Fechar menu</span>
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4" aria-label="Navegação principal">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 active:bg-gray-100 dark:active:bg-slate-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
          {mounted && !hideThemeToggle && (
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5" />
                  Modo Claro
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  Modo Escuro
                </>
              )}
            </button>
          )}
          <a
            href="https://wa.me/5581991942628"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-3 font-semibold">
              Fale Comigo
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
