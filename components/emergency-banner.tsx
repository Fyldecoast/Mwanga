"use client"

import { useState } from "react"
import { Phone, X } from "lucide-react"

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="alert"
      className="relative bg-destructive px-4 py-2.5 text-center text-sm text-destructive-foreground"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <Phone className="hidden size-4 shrink-0 sm:inline-block" aria-hidden="true" />
        <p className="font-medium">
          <strong>Not a crisis service.</strong>{" "}
          {"If you are in immediate danger, call "}
          <a href="tel:999" className="underline underline-offset-2 font-bold">
            999
          </a>
          {". For mental health crisis support, call "}
          <a href="tel:116123" className="underline underline-offset-2 font-bold">
            116 123
          </a>
          {" (Samaritans)."}
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 opacity-80 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-destructive-foreground"
        aria-label="Dismiss emergency notice"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
