import { Brain, Laptop, Lightbulb, BarChart, Users, Briefcase, type LucideIcon } from "lucide-react"

interface TopicCardProps {
  title: string
  description: string
  icon: string
}

const ICONS: Record<string, LucideIcon> = {
  Brain,
  Laptop,
  Lightbulb,
  BarChart,
  Users,
  Briefcase,
}

export default function TopicCard({ title, description, icon }: TopicCardProps) {
  const Icon = ICONS[icon] ?? Lightbulb

  return (
    <div className="group h-full bg-white dark:bg-slate-900 p-8 border-t-2 border-transparent hover:border-blue-600 dark:hover:border-blue-500 transition-colors">
      <Icon className="h-7 w-7 mb-6 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}
