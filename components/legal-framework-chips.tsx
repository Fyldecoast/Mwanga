import { Badge } from "@/components/ui/badge"
import { Scale } from "lucide-react"

const frameworks = [
  "Mental Capacity Act 2005",
  "Care Act 2014",
  "Mental Health Act 1983",
  "Human Rights Act 1998",
  "GDPR / Data Protection Act 2018",
]

interface LegalFrameworkChipsProps {
  items?: string[]
  className?: string
}

export function LegalFrameworkChips({
  items = frameworks,
  className,
}: LegalFrameworkChipsProps) {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center gap-2">
        <Scale className="size-4 text-mwanga-gold" aria-hidden="true" />
        <span className="text-sm font-medium text-mwanga-text-muted">
          Legal Framework
        </span>
      </div>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Applicable legal frameworks">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="border-border bg-secondary text-secondary-foreground"
            role="listitem"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}
