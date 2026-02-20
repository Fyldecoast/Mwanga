import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  flip?: boolean
}

export function SectionDivider({ className, flip = false }: SectionDividerProps) {
  return (
    <div
      className={cn("pointer-events-none -my-px overflow-hidden", flip && "rotate-180", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 56V28C240 4 480 0 720 8C960 16 1200 36 1440 28V56H0Z"
          className="fill-mwanga-bg-soft"
        />
      </svg>
    </div>
  )
}
