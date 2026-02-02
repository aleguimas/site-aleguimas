"use client"

import { BarChart3, FlaskConical, Layers, Settings } from "lucide-react"

const roadmapSteps = [
  {
    icon: FlaskConical,
    iconClassName: "w-6 h-6 text-purple-400",
    title: "Piloto",
    description:
      "Evite o 'piloto bonito' que vira apenas uma demo sem dono. Foque em validação de valor real.",
    tag: "Fase 01",
  },
  {
    icon: Settings,
    iconClassName: "w-6 h-6 text-indigo-400",
    title: "Produção",
    description:
      "Implementação com limites claros, auditoria e governança. Onde o agente começa a trabalhar de verdade.",
    tag: "Fase 02",
  },
  {
    icon: BarChart3,
    iconClassName: "w-6 h-6 text-fuchsia-400",
    title: "ROI",
    formula: "ROI = (B. Anual - Custo) / Custo",
    description:
      "ROI de IA: métricas claras de sucesso e economia de tempo/recursos para provar o valor à diretoria.",
    tag: "Fase 03",
  },
  {
    icon: Layers,
    iconClassName: "w-6 h-6 text-violet-400",
    title: "Escala",
    description:
      "Escala: transformação de experimentos isolados em um portfólio estratégico e replicável.",
    tag: "Fase 04",
  },
]

export default function StrategicRoadmap() {
  return (
    <section className="py-20 bg-slate-950" aria-labelledby="roadmap-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="roadmap-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            A Jornada da IA: Do Piloto ao Valor Real
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Agente não é chatbot. É execução. Governança, ROI de IA e escala: siga o framework para transformar tecnologia em resultado de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {step.tag}
                </div>
                <div className="mb-4 p-3 rounded-xl bg-slate-900/50 w-fit border border-white/5">
                  <Icon className={step.iconClassName} aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.description}</p>
                {step.formula && (
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-purple-300/70 block mb-1 tracking-tighter uppercase">
                      Fórmula de Sucesso:
                    </span>
                    <code className="text-xs font-mono text-purple-200 bg-purple-500/10 px-2 py-1 rounded block w-fit">
                      {step.formula}
                    </code>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
