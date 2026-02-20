"use client"

import { Printer } from "lucide-react"

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-mwanga-text-muted transition-colors hover:bg-secondary hover:text-foreground"
      aria-label="Print checklist"
    >
      <Printer className="size-3" aria-hidden="true" />
      Print
    </button>
  )
}
