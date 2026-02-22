import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Mwanga Mental Health Assessment Hub | Independent Mental Health Assessments",
    template: "%s | Mwanga Mental Health Assessment Hub",
  },
  description:
    "Independent, RMN-led mental health assessments for capacity, best interests, risk, and care planning. Serving NHS commissioners and care providers across the UK.",
  metadataBase: new URL("https://mwanga.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Mwanga Mental Health Assessment Hub",
    title: "Mwanga Mental Health Assessment Hub | Independent Mental Health Assessments",
    description:
      "Independent, RMN-led mental health assessments for capacity, best interests, risk, and care planning.",
    images: [{ url: "/images/seating-area.jpg", width: 1200, height: 630, alt: "Mwanga Mental Health Assessment Hub" }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B3A6E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Mwanga Mental Health Assessment Hub",
    description:
      "Independent, RMN-led mental health assessments for capacity, best interests, risk, and care planning.",
    telephone: "+447423253348",
    email: "info@mwanga.co.uk",
    url: "https://mwanga.co.uk",
    address: {
  "@type": "PostalAddress",
  streetAddress: "12 Alexandra Road",
  addressLocality: "Blackpool",
  addressRegion: "Lancashire",
  postalCode: "FY1 6BU",
}
    medicalSpecialty: "Psychiatric",
    priceRange: "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
