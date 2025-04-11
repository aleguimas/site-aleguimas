import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Palestras e Workshops - Alexandre Guimarães",
  description:
    "Transforme sua empresa com palestras e workshops sobre Inteligência Artificial, Transformação Digital e Inovação. Solicite uma cotação personalizada.",
}

export default function PalestrasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
