import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Minha Trajetória - Alexandre Guimarães",
  description:
    "Conheça a história e experiência de Alexandre Guimarães, especialista em Inteligência Artificial e Transformação Digital.",
}

export default function TrajetoriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
