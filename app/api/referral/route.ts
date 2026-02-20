import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields server-side
    const required = [
      "referrerName",
      "referrerOrg",
      "referrerRole",
      "referrerEmail",
      "referrerPhone",
      "patientName",
      "patientDob",
      "assessmentType",
      "reasonForReferral",
    ]

    for (const field of required) {
      if (!data[field] || String(data[field]).trim().length === 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    if (!data.consentConfirmed || !data.privacyAgreed) {
      return NextResponse.json(
        { error: "Consent and privacy agreement are required" },
        { status: 400 }
      )
    }

    // Log the referral (replace with email service integration later)
    console.log("=== NEW REFERRAL RECEIVED ===")
    console.log("Referrer:", data.referrerName, "-", data.referrerOrg)
    console.log("Patient:", data.patientName)
    console.log("Type:", data.assessmentType)
    console.log("Urgency:", data.urgency || "Routine")
    console.log("Submitted at:", new Date().toISOString())
    console.log("=============================")

    // TODO: Connect to email service (e.g., Resend, SendGrid) to forward referral
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'referrals@mwanga.co.uk',
    //   to: 'info@mwanga.co.uk',
    //   subject: `New Referral: ${data.patientName} - ${data.assessmentType}`,
    //   html: buildReferralEmail(data),
    // })

    return NextResponse.json({ success: true, message: "Referral received" })
  } catch {
    return NextResponse.json(
      { error: "Failed to process referral" },
      { status: 500 }
    )
  }
}
