import { Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileStickyCta() {
  return (
    <div
      className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-sm md:hidden"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="flex items-center gap-3">
        <Button asChild size="lg" className="flex-1 bg-primary text-primary-foreground">
          <Link href="/referrals">
            <FileText className="size-4" aria-hidden="true" />
            Refer
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary">
          <a href="tel:07423253348">
            <Phone className="size-4" aria-hidden="true" />
            Call
          </a>
        </Button>
      </div>
    </div>
  )
}
