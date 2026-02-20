"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/referrals", label: "Referrals" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-md transition-all duration-200",
        scrolled && "border-border shadow-[0_1px_3px_0_rgb(0_0_0/0.04)]"
      )}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Mwanga Mental Health Assessment Hub - Home"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">M</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-semibold text-foreground">
              Mwanga
            </span>
            <span className="ml-1.5 hidden text-xs text-mwanga-text-muted lg:inline">
              Mental Health Assessment Hub
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-secondary text-primary"
                  : "text-mwanga-text-muted hover:bg-secondary hover:text-foreground"
              )}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="icon-sm" aria-label="Call us">
            <a href="tel:07423253348">
              <Phone className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon-sm" aria-label="Email us">
            <a href="mailto:info@mwanga.co.uk">
              <Mail className="size-4" />
            </a>
          </Button>
          <Button asChild size="sm" className="bg-primary text-primary-foreground">
            <Link href="/referrals">Make a Referral</Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild variant="ghost" size="icon-sm" aria-label="Call us">
            <a href="tel:07423253348">
              <Phone className="size-4" />
            </a>
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="px-6 pb-8">
              <SheetHeader>
                <SheetTitle className="font-serif text-lg">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      pathname === href
                        ? "bg-secondary text-primary"
                        : "text-mwanga-text-muted hover:bg-secondary"
                    )}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground">
                  <Link href="/referrals" onClick={() => setMobileOpen(false)}>
                    Make a Referral
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <a href="tel:07423253348">
                    <Phone className="size-4" aria-hidden="true" />
                    07423 253348
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
