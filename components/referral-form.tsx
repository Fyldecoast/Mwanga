"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const referralSchema = z.object({
  // Referrer
  referrerName: z.string().min(2, "Please enter your name"),
  referrerOrg: z.string().min(2, "Please enter your organisation"),
  referrerRole: z.string().min(2, "Please enter your role"),
  referrerEmail: z.string().email("Please enter a valid email"),
  referrerPhone: z.string().min(10, "Please enter a valid phone number"),
  // Patient
  patientName: z.string().min(2, "Please enter the patient's name"),
  patientDob: z.string().min(1, "Please enter date of birth"),
  patientNhsNumber: z.string().optional(),
  // Assessment
  assessmentType: z.string().min(1, "Please select an assessment type"),
  reasonForReferral: z.string().min(20, "Please provide at least 20 characters describing the reason"),
  urgency: z.string().optional(),
  additionalInfo: z.string().optional(),
  // Consent
  consentConfirmed: z.literal(true, {
    errorMap: () => ({ message: "You must confirm consent or lawful basis" }),
  }),
  privacyAgreed: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" }),
  }),
})

type ReferralFormData = z.infer<typeof referralSchema>

export function ReferralForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const form = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: "",
      referrerOrg: "",
      referrerRole: "",
      referrerEmail: "",
      referrerPhone: "",
      patientName: "",
      patientDob: "",
      patientNhsNumber: "",
      assessmentType: "",
      reasonForReferral: "",
      urgency: "",
      additionalInfo: "",
      consentConfirmed: undefined as unknown as true,
      privacyAgreed: undefined as unknown as true,
    },
  })

  async function onSubmit(data: ReferralFormData) {
    setStatus("submitting")
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Submission failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-mwanga-green/20 bg-mwanga-green/5 p-8 text-center">
        <CheckCircle2 className="size-12 text-mwanga-green" />
        <h3 className="text-xl text-foreground">Referral Submitted</h3>
        <p className="max-w-md text-sm leading-relaxed text-mwanga-text-muted">
          Thank you. We have received your referral and aim to respond within one working day.
          If your matter is urgent, please call us on{" "}
          <a href="tel:07423253348" className="font-medium text-primary underline underline-offset-2">
            07423 253348
          </a>.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-2"
        >
          Submit another referral
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {status === "error" && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
            <AlertCircle className="size-4 shrink-0" />
            Something went wrong. Please try again or call us directly.
          </div>
        )}

        {/* Step 1: Referrer details */}
        <fieldset className="space-y-4">
          <legend className="mb-2 font-serif text-lg font-semibold text-foreground">
            <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              1
            </span>
            Your Details (Referrer)
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="referrerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr Jane Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referrerOrg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organisation *</FormLabel>
                  <FormControl>
                    <Input placeholder="NHS Trust / Solicitors firm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referrerRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role *</FormLabel>
                  <FormControl>
                    <Input placeholder="Social Worker, Commissioner, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referrerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane.smith@nhs.net" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referrerPhone"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="07700 900000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </fieldset>

        {/* Step 2: Patient details */}
        <fieldset className="space-y-4">
          <legend className="mb-2 font-serif text-lg font-semibold text-foreground">
            <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              2
            </span>
            Patient Details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patientDob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patientNhsNumber"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>NHS Number (if known)</FormLabel>
                  <FormControl>
                    <Input placeholder="000 000 0000" {...field} />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </fieldset>

        {/* Step 3: Assessment details */}
        <fieldset className="space-y-4">
          <legend className="mb-2 font-serif text-lg font-semibold text-foreground">
            <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              3
            </span>
            Assessment Details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="assessmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assessment Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="capacity">Mental Capacity Assessment</SelectItem>
                      <SelectItem value="best-interests">Best Interests Assessment</SelectItem>
                      <SelectItem value="mental-health">Mental Health Assessment</SelectItem>
                      <SelectItem value="risk">Risk Assessment</SelectItem>
                      <SelectItem value="multiple">Multiple / Unsure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="urgency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urgency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="routine">Routine</SelectItem>
                      <SelectItem value="urgent">Urgent (within 48 hours)</SelectItem>
                      <SelectItem value="court-deadline">Court deadline</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="reasonForReferral"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Referral *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe the reason for this referral, the specific decision(s) to be assessed, and any relevant background..."
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Include the specific decision to be assessed and any relevant history.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any other relevant information, previous assessments, or documents to note..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        {/* Step 4: Consent */}
        <fieldset className="space-y-4">
          <legend className="mb-2 font-serif text-lg font-semibold text-foreground">
            <span className="mr-2 inline-flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              4
            </span>
            Consent & Confirmation
          </legend>
          <FormField
            control={form.control}
            name="consentConfirmed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-lg border border-border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I confirm that consent has been obtained from the individual (or there is a lawful basis for this referral under the Mental Capacity Act 2005 or other applicable legislation). *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacyAgreed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-lg border border-border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I agree that the information provided will be processed in accordance with data protection legislation and Mwanga's privacy policy. *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </fieldset>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            "Submit Referral"
          )}
        </Button>
      </form>
    </Form>
  )
}
