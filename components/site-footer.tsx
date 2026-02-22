import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerNav = {
  services: [
    { href: "/services", label: "All Services" },
    { href: "/services#capacity", label: "Capacity Assessments" },
    { href: "/services#best-interests", label: "Best Interests" },
    { href: "/services#risk", label: "Risk Assessments" },
  ],
  company: [
    { href: "/referrals", label: "Make a Referral" },
    { href: "/contact", label: "Contact Us" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border bg-mwanga-bg-soft" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Mwanga - Home">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-base font-bold text-primary-foreground">M</span>
              </div>
              <span className="font-serif text-base font-semibold text-foreground">Mwanga</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mwanga-text-muted">
              Independent, RMN-led mental health assessments. Serving commissioners, care providers,
              and legal professionals across the UK.
            </p>
          </div>

          {/* Services links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2" role="list">
              {footerNav.services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-mwanga-text-muted transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2" role="list">
              {footerNav.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-mwanga-text-muted transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="tel:07423253348"
                  className="flex items-center gap-2 text-sm text-mwanga-text-muted transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  07423 253348
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mwanga.co.uk"
                  className="flex items-center gap-2 text-sm text-mwanga-text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  info@mwanga.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-mwanga-text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                12 Alexandra Road, Blackpool, FY1 6BU
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs text-mwanga-text-muted">
              &copy; {new Date().getFullYear()} Mwanga Mental Health Assessment Hub. All rights reserved.
            </p>
            <p className="max-w-md text-center text-xs text-mwanga-text-muted sm:text-right">
              This is not a crisis service. If you are in immediate danger, call{" "}
              <a href="tel:999" className="font-medium underline underline-offset-2">999</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
