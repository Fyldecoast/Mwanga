import type { Metadata } from "next"
import { ClipboardList, FileCheck, Calendar, Send, Phone, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EmergencyBanner } from "@/components/emergency-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { ReferralForm } from "@/components/referral-form"
import { PrintButton } from "@/components/print-button"

export const metadata: Metadata = {
  title: "Make a Referral",
  description:
    "Refer a patient or individual for an independent mental health assessment. Simple process with clear requirements and fast response.",
  openGraph: {
    title: "Make a Referral | Mwanga Mental Health Assessment Hub",
    description:
      "Refer a patient or individual for an independent mental health assessment. Simple process with clear requirements and fast response.",
    images: [{ url: "/images/room-wide-2.jpg", width: 1200, height: 630 }],
  },
}

const steps = [
  {
    icon: ClipboardList,
    label: "Referral Info",
    description: "Your details and patient information",
  },
  {
    icon: FileCheck,
    label: "Consent & Basis",
    description: "Confirm consent or lawful basis",
  },
  {
    icon: Send,
    label: "Submit",
    description: "Review and send your referral",
  },
  {
    icon: Calendar,
    label: "Response",
    description: "We respond within 1 working day",
  },
]

const checklist = [
  "Patient full name and date of birth",
  "Referrer contact details and organisation",
  "The specific decision(s) to be assessed",
  "Relevant background and history",
  "Confirmation of consent or lawful basis for referral",
  "Any upcoming court deadlines or time constraints",
  "Contact details for the patient's care team (if applicable)",
  "Any previous assessment reports (if available)",
]

export default function ReferralsPage() {
  return (
    <>
      <EmergencyBanner />
      <SiteHeader />

      <main id="main-content">
        {/* Banner */}
        <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-primary-foreground">Make a Referral</h1>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Submit a referral for an independent mental health assessment.
                We aim to respond within one working day.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-px" aria-hidden="true">
            <svg viewBox="0 0 1440 48" fill="none" className="block w-full" preserveAspectRatio="none">
              <path d="M0 48V24C360 0 720 0 1080 12C1260 18 1440 24 1440 24V48H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Stepper */}
        <section className="px-4 py-10" aria-label="Referral process steps">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {steps.map(({ icon: Icon, label, description }, i) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className="relative mb-3 flex size-12 items-center justify-center rounded-full bg-secondary">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                  <p className="mt-1 text-xs text-mwanga-text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Checklist */}
        <section className="px-4 pb-16 md:pb-20" aria-labelledby="referral-form-heading">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
              {/* Form */}
              <div>
                <h2 id="referral-form-heading" className="mb-6 text-foreground">
                  Referral Form
                </h2>
                <ReferralForm />
              </div>

              {/* Sidebar: checklist + contact */}
              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                {/* Checklist */}
                <div className="rounded-xl border border-border bg-mwanga-bg-soft p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="flex items-center gap-2 font-serif text-base font-semibold text-foreground">
                      <CheckSquare className="size-4 text-mwanga-green" aria-hidden="true" />
                      What we need
                    </h3>
                    <PrintButton />
                  </div>
                  <ul className="space-y-2.5" role="list">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-mwanga-text-muted">
                        <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-mwanga-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick contact */}
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="mb-3 font-serif text-base font-semibold text-foreground">
                    Prefer to call?
                  </h3>
                  <p className="mb-4 text-sm text-mwanga-text-muted">
                    For urgent referrals or to discuss requirements before submitting.
                  </p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary">
                    <a href="tel:07423253348">
                      <Phone className="size-4" aria-hidden="true" />
                      07423 253348
                    </a>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileStickyCta />
    </>
  )
}


