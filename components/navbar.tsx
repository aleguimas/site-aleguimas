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
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Alexandre Guimarães</span>
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <img
                src="/images/guimas-palestrante-header.png"
                alt="Alexandre Guimarães"
                width={40}
                height={40}
                className="object-cover object-center"
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Alexandre Guimarães</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          {mounted && !hideThemeToggle && (
            <button type="button" className="p-2 rounded-full text-gray-900 dark:text-gray-300" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            type="button"
            className="p-2 rounded-full text-gray-900 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
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
          className="lg:hidden fixed inset-0 z-40 bg-black/20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
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
        <div className="flex-1 overflow-y-auto">
          <div className="px-3 py-2">
            <div className="space-y-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 p-3">
          <a
            href="https://wa.me/5581991942628"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2">
              Fale Comigo
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
