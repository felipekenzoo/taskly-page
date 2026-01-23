export interface CheckProps {
  label: string
  color?: string
}

import { CheckCircle2 } from "lucide-react"

export default function Check({ label, color = "text-neutral-500" }: CheckProps) {
  return (
    <div className="flex gap-1.5 items-center py-1">
      <CheckCircle2
        size={26}
        className={`${color} w-4 h-4 lg:w-6 lg:h-6`}
      />
      <span className={`${color} lg:text-lg`}>
        {label}
      </span>
    </div>
  )
}
