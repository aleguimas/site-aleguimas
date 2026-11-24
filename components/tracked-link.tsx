"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { trackGa4Event } from "@/lib/analytics"

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Nome do evento GA4 disparado no clique. */
  eventName: string
  /** Parâmetros extras do evento (ex.: local do clique). */
  eventParams?: Record<string, string | number>
  children: ReactNode
}

/** Link comum que registra um evento no GA4 (com UTMs de origem) ao ser clicado. */
export default function TrackedLink({ eventName, eventParams, onClick, children, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackGa4Event(eventName, eventParams)
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
