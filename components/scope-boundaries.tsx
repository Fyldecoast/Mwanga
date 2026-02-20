import { CheckCircle2, XCircle, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ScopeBoundariesProps {
  title?: string
  includes: string[]
  excludes: string[]
  disclaimer?: string
}

export function ScopeBoundaries({
  title = "Scope & Boundaries",
  includes,
  excludes,
  disclaimer,
}: ScopeBoundariesProps) {
  return (
    <Card className="border-border bg-secondary/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-serif text-lg text-foreground">
          <Info className="size-5 text-mwanga-navy" aria-hidden="true" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-mwanga-green">
              What we provide
            </h4>
            <ul className="space-y-2" role="list">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-mwanga-green"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-destructive">
              Outside our scope
            </h4>
            <ul className="space-y-2" role="list">
              {excludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                  <XCircle
                    className="mt-0.5 size-4 shrink-0 text-destructive"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {disclaimer && (
          <p className="mt-4 rounded-lg bg-mwanga-bg-soft px-4 py-3 text-xs leading-relaxed text-mwanga-text-muted">
            {disclaimer}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
