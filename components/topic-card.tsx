import { Brain, Laptop, Lightbulb, BarChart, Users, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TopicCardProps {
  title: string
  description: string
  icon: string
}

export default function TopicCard({ title, description, icon }: TopicCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Brain":
        return <Brain className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "Laptop":
        return <Laptop className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "Lightbulb":
        return <Lightbulb className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "BarChart":
        return <BarChart className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "Users":
        return <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "Briefcase":
        return <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      default:
        return <Lightbulb className="h-10 w-10 text-blue-600 dark:text-blue-400" />
    }
  }

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
