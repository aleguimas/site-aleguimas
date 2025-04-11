"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

// Remover o link "Kit Imprensa" do menu principal
const navigation = [
  { name: "Início", href: "/" },
  { name: "Palestras", href: "/palestras" },
  { name: "Consultoria", href: "/consultoria" },
  { name: "Vídeos", href: "/videos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Alexandre Guimarães</span>
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src="/images/alexandre-guimaraes-palestrante-consultor-ia-3.webp"
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
          {mounted && (
            <button type="button" className="p-2 rounded-full text-gray-700 dark:text-gray-300" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            type="button"
            className="p-2 rounded-full text-gray-700 dark:text-gray-300"
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
          {mounted && (
            <button
              type="button"
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <Link href="/contato">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Fale Comigo</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 right-0 z-50 w-full bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Alexandre Guimarães</span>
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src="/images/alexandre-guimaraes-palestrante-consultor-ia-3.webp"
                alt="Alexandre Guimarães"
                width={40}
                height={40}
                className="object-cover object-center"
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Alexandre Guimarães</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Fechar menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link href="/contato">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Fale Comigo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
