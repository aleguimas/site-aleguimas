import { Building, Zap, Settings, FileText, ClipboardList, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Building":
        return <Building className="h-10 w-10 text-emerald-600" />
      case "Zap":
        return <Zap className="h-10 w-10 text-emerald-600" />
      case "Settings":
        return <Settings className="h-10 w-10 text-emerald-600" />
      case "FileText":
        return <FileText className="h-10 w-10 text-emerald-600" />
      case "ClipboardList":
        return <ClipboardList className="h-10 w-10 text-emerald-600" />
      case "Tool":
        return <Tool className="h-10 w-10 text-emerald-600" />
      default:
        return <Building className="h-10 w-10 text-emerald-600" />
    }
  }

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
