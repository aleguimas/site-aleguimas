import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kit de Imprensa - Alexandre Guimarães",
  description:
    "Recursos oficiais para jornalistas, organizadores de eventos e profissionais de mídia sobre Alexandre Guimarães, especialista em IA e Transformação Digital.",
}

export default function KitImprensaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
