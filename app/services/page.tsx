import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ClipboardList,
  Users,
  Activity,
  ShieldCheck,
  FileText,
  Heart,
  Scale,
  Eye,
  HandHelping,
  Ear,
  Compass,
  BookOpen,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmergencyBanner } from "@/components/emergency-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { ScopeBoundaries } from "@/components/scope-boundaries"
import { SectionDivider } from "@/components/section-divider"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Specialist mental health assessment services including capacity assessments, best interests evaluations, risk assessments, and care planning support.",
  openGraph: {
    title: "Our Services | Mwanga Mental Health Assessment Hub",
    description:
      "Specialist mental health assessment services including capacity assessments, best interests evaluations, risk assessments, and care planning support.",
    images: [{ url: "/images/room-wide-2.jpg", width: 1200, height: 630 }],
  },
}

const serviceDetails = [
  {
    id: "capacity",
    title: "Mental Capacity Assessments",
    icon: ClipboardList,
    description:
      "Decision-specific assessments carried out under the Mental Capacity Act 2005. Each assessment follows the two-stage functional test and provides a clear, written rationale for the conclusion reached.",
    deliverables: [
      "Structured written report with decision-specific rationale",
      "Clear record of the two-stage functional test",
      "Recommendations for support and next steps",
      "Suitable for Court of Protection proceedings",
    ],
    contexts: [
      "Care and residence decisions",
      "Financial decisions",
      "Medical treatment decisions",
      "Contact and relationship decisions",
    ],
  },
  {
    id: "best-interests",
    title: "Best Interests Assessments",
    icon: Users,
    description:
      "Where a person is assessed as lacking capacity for a specific decision, we carry out a structured best interests assessment. This considers the person's wishes, feelings, beliefs, and values, and consults with relevant parties as required by the Act.",
    deliverables: [
      "Written best interests decision record",
      "Summary of consultation with family, carers, and professionals",
      "Clear rationale applying the least restrictive principle",
      "Recommendations for care planning",
    ],
    contexts: [
      "Placement and residence decisions",
      "Care package planning",
      "Deprivation of liberty considerations",
      "Treatment and support decisions",
    ],
  },
  {
    id: "mental-health",
    title: "Mental Health Assessments",
    icon: Activity,
    description:
      "Comprehensive assessments of mental state, presentation, and functional impact. These assessments inform care planning, commissioning decisions, and provide an independent clinical perspective.",
    deliverables: [
      "Detailed assessment of current mental state",
      "Functional impact analysis",
      "Risk screening and formulation",
      "Recommendations for care and support",
    ],
    contexts: [
      "Commissioning and review decisions",
      "Placement suitability assessments",
      "Care programme approach reviews",
      "Independent second opinions",
    ],
  },
  {
    id: "risk",
    title: "Risk Assessments",
    icon: ShieldCheck,
    description:
      "Structured risk assessments using established professional judgement frameworks. We assess risk to self, risk to others, and vulnerability, producing clear risk management plans with actionable recommendations.",
    deliverables: [
      "Structured risk assessment report",
      "Risk formulation with contextual analysis",
      "Risk management plan with clear actions",
      "Recommendations for monitoring and review",
    ],
    contexts: [
      "Community placement planning",
      "Hospital discharge planning",
      "Safeguarding enquiries",
      "Legal and tribunal proceedings",
    ],
  },
]

const principles = [
  { label: "Person-centred", icon: Heart },
  { label: "Least restrictive", icon: Scale },
  { label: "Trauma-informed", icon: Eye },
  { label: "Culturally sensitive", icon: Compass },
  { label: "Evidence-based", icon: BookOpen },
  { label: "Strengths-focused", icon: HandHelping },
  { label: "Collaborative", icon: Users },
  { label: "Transparent", icon: FileText },
  { label: "Advocacy-aware", icon: Ear },
]

export default function ServicesPage() {
  return (
    <>
      <EmergencyBanner />
      <SiteHeader />

      <main id="main-content">
        {/* Banner */}
        <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-primary-foreground">Our Services</h1>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Specialist mental health assessment services designed to produce clear, actionable
                outputs for commissioners, solicitors, and care providers.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-px" aria-hidden="true">
            <svg viewBox="0 0 1440 48" fill="none" className="block w-full" preserveAspectRatio="none">
              <path d="M0 48V24C360 0 720 0 1080 12C1260 18 1440 24 1440 24V48H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Service detail cards */}
        <section className="px-4 py-16 md:py-20" aria-labelledby="services-detail-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="services-detail-heading" className="sr-only">
              Assessment Services Detail
            </h2>
            <div className="space-y-12">
              {serviceDetails.map(({ id, title, icon: Icon, description, deliverables, contexts }, i) => (
                <div
                  key={id}
                  id={id}
                  className="scroll-mt-24"
                >
                  <Card className="overflow-hidden border-border bg-background">
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8 lg:p-10">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                              <Icon className="size-5 text-primary" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl text-foreground">{title}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-mwanga-text-muted">{description}</p>

                          <div className="mt-6 grid gap-6 sm:grid-cols-2">
                            <div>
                              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-mwanga-green">
                                What you receive
                              </h4>
                              <ul className="space-y-1.5" role="list">
                                {deliverables.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                                    <FileText className="mt-0.5 size-3.5 shrink-0 text-mwanga-green" aria-hidden="true" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                                Common contexts
                              </h4>
                              <ul className="space-y-1.5" role="list">
                                {contexts.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                                    <UserCheck className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Approach principles */}
        <section className="bg-mwanga-bg-soft px-4 py-16 md:py-20" aria-labelledby="approach-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 id="approach-heading" className="text-foreground">
                Our approach
              </h2>
              <p className="mt-3 text-base leading-relaxed text-mwanga-text-muted">
                Every assessment is guided by these core principles, ensuring a consistent,
                person-centred experience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {principles.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
                >
                  <Icon className="size-4 text-mwanga-gold" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider flip />

        {/* Scope & Boundaries */}
        <section className="px-4 py-16 md:py-20" aria-labelledby="scope-heading">
          <div className="mx-auto max-w-4xl">
            <h2 id="scope-heading" className="sr-only">
              Scope and boundaries of our services
            </h2>
            <ScopeBoundaries
              includes={[
                "Independent mental health assessments (capacity, best interests, risk, mental health)",
                "Written reports with clear rationale and recommendations",
                "Attendance at best interests meetings (where commissioned)",
                "Liaison with care teams, solicitors, and commissioners",
                "Structured risk management plans",
              ]}
              excludes={[
                "Ongoing treatment or therapy",
                "Prescribing medication",
                "Crisis intervention or emergency response",
                "Sectioning or detention under the Mental Health Act",
                "Acting as an Approved Mental Health Professional (AMHP)",
              ]}
              disclaimer="Mwanga provides assessment services only. We do not deliver ongoing treatment, therapy, or crisis support. If you require immediate help, please contact 999 or your local crisis team."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary px-4 py-16 text-center md:py-20" aria-labelledby="services-cta-heading">
          <div className="mx-auto max-w-2xl">
            <h2 id="services-cta-heading" className="text-primary-foreground">
              Ready to refer?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">
              Submit a referral or get in touch to discuss your requirements.
              We aim to respond within one working day.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-mwanga-gold text-mwanga-text hover:bg-mwanga-gold-light"
              >
                <Link href="/referrals">
                  Make a Referral
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileStickyCta />
    </>
  )
}
