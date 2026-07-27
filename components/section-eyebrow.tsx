import { cn } from "@/lib/utils"

type SectionEyebrowProps = {
  label: string
  /** "light" = seção clara (texto azul-600); "dark" = seção escura (texto azul-300) */
  tone?: "light" | "dark"
  /** rótulo secundário opcional, exibido após a régua (usado no hero) */
  meta?: string
  className?: string
}

/**
 * Eyebrow editorial: rótulo em caixa alta + régua fina.
 * Substitui as antigas pílulas (Badge rounded-full) para dar ritmo de revista.
 */
export default function SectionEyebrow({ label, tone = "light", meta, className }: SectionEyebrowProps) {
  const isDark = tone === "dark"

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className={cn(
          "whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em]",
          isDark ? "text-blue-300" : "text-blue-600 dark:text-blue-400",
        )}
      >
        {label}
      </span>
      <span className={cn("h-px flex-1", isDark ? "bg-white/15" : "bg-blue-600/20 dark:bg-blue-400/20")} />
      {meta && (
        <span
          className={cn(
            "hidden whitespace-nowrap text-xs font-semibold tracking-wide sm:inline",
            isDark ? "text-slate-400" : "text-slate-500 dark:text-slate-400",
          )}
        >
          {meta}
        </span>
      )}
    </div>
  )
}
