import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields server-side
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    if (!data.privacyAgreed) {
      return NextResponse.json(
        { error: "Privacy agreement is required" },
        { status: 400 }
      )
    }

    // Log the contact (replace with email service later)
    console.log("=== NEW CONTACT MESSAGE ===")
    console.log("From:", data.name, "-", data.email)
    console.log("Phone:", data.phone || "Not provided")
    console.log("Message:", data.message)
    console.log("Submitted at:", new Date().toISOString())
    console.log("===========================")

    // TODO: Connect to email service (e.g., Resend, SendGrid)

    return NextResponse.json({ success: true, message: "Message received" })
  } catch {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
}
