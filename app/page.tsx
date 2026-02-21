import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, ClipboardList, ShieldCheck, Activity, BookOpen, Users, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EmergencyBanner } from "@/components/emergency-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { SectionDivider } from "@/components/section-divider"

export const metadata: Metadata = {
  title: "Mwanga Mental Health Assessment Hub | Independent Mental Health Assessments",
  description:
    "Independent, RMN-led mental health assessments for capacity, best interests, risk, and care planning. Serving NHS commissioners and care providers across the UK.",
}

const trustBadges = [
  { label: "RMN-Led", icon: ShieldCheck },
  { label: "CQC-Aligned", icon: ClipboardList },
  { label: "MCA Specialist", icon: Scale },
]

const services = [
  {
    title: "Mental Capacity Assessments",
    description:
      "Decision-specific assessments under the Mental Capacity Act 2005. We provide clear, written rationale to support care planning and legal proceedings.",
    icon: ClipboardList,
    href: "/services#capacity",
  },
  {
    title: "Best Interests Assessments",
    description:
      "Structured evaluations considering the person's wishes, feelings, beliefs, and values to support decision-making where capacity is lacking.",
    icon: Users,
    href: "/services#best-interests",
  },
  {
    title: "Mental Health Assessments",
    description:
      "Comprehensive assessments of mental state, risk, and functional impact to inform care planning and commissioning decisions.",
    icon: Activity,
    href: "/services#mental-health",
  },
  {
    title: "Risk Assessments",
    description:
      "Detailed risk assessments with structured professional judgement, producing clear recommendations and risk management plans.",
    icon: ShieldCheck,
    href: "/services#risk",
  },
]

const outcomes = [
  {
    title: "Written Report",
    description: "A clear, structured report suitable for commissioners, care teams, and legal proceedings.",
    icon: FileText,
  },
  {
    title: "Recommendations",
    description: "Practical, evidence-based recommendations for care planning and support.",
    icon: BookOpen,
  },
  {
    title: "Risk Management Plan",
    description: "Where appropriate, a structured risk management plan with clear actions.",
    icon: ShieldCheck,
  },
  {
    title: "Signposting",
    description: "Onward referral suggestions and resource signposting as appropriate.",
    icon: ArrowRight,
  },
]

const commissionerValues = [
  {
    title: "Clear Written Rationale",
    description: "Every assessment includes a transparent, structured rationale that supports audit and governance.",
  },
  {
    title: "Decision-Specific Approach",
    description: "Assessments are always tied to specific decisions, not generic labels or blanket judgements.",
  },
  {
    title: "Least Restrictive Focus",
    description: "We centre the least restrictive principle in every recommendation and care plan.",
  },
]

export default function HomePage() {
  return (
    <>
      <EmergencyBanner />
      <SiteHeader />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-24 lg:py-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <Badge
                variant="secondary"
                className="mb-4 border-none bg-primary-foreground/10 text-primary-foreground"
              >
                Independent Mental Health Assessments
              </Badge>
              <h1 className="text-primary-foreground">
                Clarity through professional mental health assessment
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg lg:mx-0 mx-auto">
                RMN-led assessments for capacity, best interests, risk, and care planning.
                Supporting commissioners, solicitors, and care providers across the UK.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
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
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-md flex-shrink-0 lg:max-w-lg">
              <ImageWithFallback
                src="/images/Chair.jpg"
                alt="Calm seating area at Mwanga Mental Health Assessment Hub with comfortable chairs and natural decor"
                containerClassName="aspect-[4/3] w-full rounded-2xl shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 512px"
              />
            </div>
          </div>
          {/* Decorative arc */}
          <div className="absolute inset-x-0 bottom-0 translate-y-px" aria-hidden="true">
            <svg viewBox="0 0 1440 48" fill="none" className="block w-full" preserveAspectRatio="none">
              <path d="M0 48V24C360 0 720 0 1080 12C1260 18 1440 24 1440 24V48H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Trust badges */}
        <section className="px-4 py-8" aria-label="Credentials">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
              >
                <Icon className="size-4 text-mwanga-green" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services overview */}
        <section className="px-4 py-16 md:py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 id="services-heading" className="text-foreground">
                Assessment services
              </h2>
              <p className="mt-3 text-base leading-relaxed text-mwanga-text-muted">
                We offer a range of specialist mental health assessment services, each designed to produce
                clear, decision-specific outputs for commissioners and care teams.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map(({ title, description, icon: Icon, href }) => (
                <Card
                  key={title}
                  className="border-border bg-background transition-shadow hover:shadow-md"
                >
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-mwanga-text-muted">{description}</p>
                    <Link
                      href={href}
                      className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Learn more
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Clinical credibility */}
        <section className="bg-mwanga-bg-soft px-4 py-16 md:py-20" aria-labelledby="credibility-heading">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full max-w-sm flex-shrink-0">
              <ImageWithFallback
                src="/images/clinical-kit.jpg"
                alt="Clinical equipment including stethoscope and blood pressure monitor used during assessments at Mwanga"
                containerClassName="aspect-[4/3] w-full"
              />
            </div>
            <div className="flex-1">
              <h2 id="credibility-heading" className="text-foreground">
                Professional, RMN-led assessments
              </h2>
              <p className="mt-3 text-base leading-relaxed text-mwanga-text-muted">
                Every assessment is carried out by a Registered Mental Nurse with specialist
                experience in mental capacity, risk assessment, and care planning. Our work is
                grounded in current legislation and best practice guidance.
              </p>
              <ul className="mt-6 space-y-3" role="list">
                {[
                  "Registered Mental Nurse (RMN) assessor",
                  "Structured, evidence-based methodology",
                  "Reports suitable for legal and commissioning purposes",
                  "Aligned with CQC expectations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-mwanga-green" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider flip />

        {/* Outcomes */}
        <section className="px-4 py-16 md:py-20" aria-labelledby="outcomes-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 id="outcomes-heading" className="text-foreground">
                What you receive
              </h2>
              <p className="mt-3 text-base leading-relaxed text-mwanga-text-muted">
                Following each assessment, you receive clear, actionable deliverables designed for
                commissioners, legal professionals, and care teams.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mwanga-text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Commissioner values */}
        <section className="bg-mwanga-bg-soft px-4 py-16 md:py-20" aria-labelledby="commissioners-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 id="commissioners-heading" className="text-foreground">
                Valued by commissioners
              </h2>
              <p className="mt-3 text-base leading-relaxed text-mwanga-text-muted">
                Our assessments are designed to meet the practical needs of those commissioning
                and relying on mental health assessment outputs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {commissionerValues.map(({ title, description }) => (
                <Card key={title} className="border-border bg-background">
                  <CardContent>
                    <h3 className="text-base text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mwanga-text-muted">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider flip />

        {/* Environment teaser */}
        <section className="px-4 py-16 md:py-20" aria-labelledby="environment-heading">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <h2 id="environment-heading" className="text-foreground">
                A calm, considered environment
              </h2>
              <p className="mt-3 text-base leading-relaxed text-mwanga-text-muted">
                Our assessment space is designed to be comfortable and non-clinical, helping people
                feel at ease during what can be a stressful process. The environment supports the
                quality of the assessment itself.
              </p>
              <p className="mt-4 rounded-lg bg-mwanga-bg-soft px-4 py-3 text-xs leading-relaxed text-mwanga-text-muted">
                Please note: Wellbeing amenities (refreshments, herbal teas) are provided separately from
                clinical assessments and do not form part of any treatment or intervention.
              </p>
            </div>
            <div className="w-full max-w-md flex-shrink-0 lg:max-w-lg">
              <ImageWithFallback
                src="/images/chair-detail.jpg"
                alt="Comfortable chair with tartan throw in the Mwanga assessment room"
                containerClassName="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary px-4 py-16 text-center md:py-20" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-primary-foreground">
              Ready to make a referral?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">
              Get in touch to discuss an assessment or submit a referral directly.
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
