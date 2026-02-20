import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { EmergencyBanner } from "@/components/emergency-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { ImageWithFallback } from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mwanga Mental Health Assessment Hub. Call, email, or send us a message.",
  openGraph: {
    title: "Contact Us | Mwanga Mental Health Assessment Hub",
    description:
      "Get in touch with Mwanga Mental Health Assessment Hub. Call, email, or send us a message.",
    images: [{ url: "/images/seating-area.jpg", width: 1200, height: 630 }],
  },
}

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "07423 253348",
    href: "tel:07423253348",
    description: "Monday to Friday, 9am - 5pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mwanga.co.uk",
    href: "mailto:info@mwanga.co.uk",
    description: "We aim to respond within 1 working day",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, United Kingdom",
    href: undefined,
    description: "Assessments available on-site and remotely",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 1 working day",
    href: undefined,
    description: "For urgent referrals, please call directly",
  },
]

export default function ContactPage() {
  return (
    <>
      <EmergencyBanner />
      <SiteHeader />

      <main id="main-content">
        {/* Banner */}
        <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-primary-foreground">Contact Us</h1>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Get in touch to discuss an assessment, ask a question, or make a referral.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-px" aria-hidden="true">
            <svg viewBox="0 0 1440 48" fill="none" className="block w-full" preserveAspectRatio="none">
              <path d="M0 48V24C360 0 720 0 1080 12C1260 18 1440 24 1440 24V48H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Contact content */}
        <section className="px-4 py-16 md:py-20" aria-labelledby="contact-form-heading">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
              {/* Form */}
              <div>
                <h2 id="contact-form-heading" className="mb-6 text-foreground">
                  Send us a message
                </h2>
                <ContactForm />
              </div>

              {/* Contact details sidebar */}
              <aside className="space-y-6">
                {/* Contact cards */}
                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href, description }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 rounded-xl border border-border bg-background p-5"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <Icon className="size-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{value}</p>
                        )}
                        <p className="mt-0.5 text-xs text-mwanga-text-muted">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image */}
                <ImageWithFallback
                  src="/images/room-wide-1.jpg"
                  alt="Reception and wellbeing area at Mwanga Mental Health Assessment Hub"
                  containerClassName="aspect-[4/3] w-full"
                />

                {/* Accessibility note */}
                <div className="rounded-xl border border-border bg-mwanga-bg-soft p-5">
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    Accessibility
                  </h3>
                  <p className="text-sm leading-relaxed text-mwanga-text-muted">
                    If you require adjustments to communicate with us or for an assessment
                    appointment, please let us know and we will do our best to accommodate
                    your needs.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
