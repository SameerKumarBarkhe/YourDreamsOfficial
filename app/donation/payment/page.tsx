"use client"

import type React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const amount = searchParams.get("amount") || ""
  const name = searchParams.get("name") || ""
  const email = searchParams.get("email") || ""
  const phone = searchParams.get("phone") || ""

  // Payment form state
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [nameOnCard, setNameOnCard] = useState("")

  useEffect(() => {
    // Validate required parameters
    if (!amount || !name || !email) {
      toast({
        title: "Missing Information",
        description: "Some required donation information is missing. Please try again.",
        variant: "error",
      })
      // Redirect back to donation page after a short delay
      setTimeout(() => {
        router.push("/donation")
      }, 3000)
      return
    }

    setIsLoading(false)
  }, [amount, name, email, toast, router])

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Validate payment form
      if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
        throw new Error("Please fill in all payment details")
      }

      // Get donation data from session storage
      const donationDataStr = sessionStorage.getItem("pendingDonation")
      if (!donationDataStr) {
        throw new Error("Donation information not found. Please try again.")
      }

      const donationData = JSON.parse(donationDataStr)

      // In a real app, you would process payment with a payment gateway here
      // For demo, we'll simulate a payment process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Process the donation with our API
      const response = await fetch("/api/donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...donationData,
          paymentMethod: "Credit Card",
          cardLast4: cardNumber.slice(-4),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to process donation")
      }

      const data = await response.json()

      // Clear the pending donation from session storage
      sessionStorage.removeItem("pendingDonation")

      // Show success message
      toast({
        title: "Payment Successful",
        description: "Thank you for your donation! Redirecting to your receipt...",
        variant: "success",
      })

      // Redirect to receipt page
      setTimeout(() => {
        router.push(`/receipt/${data.receipt.id}`)
      }, 1500)
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Payment Failed",
        description:
          error instanceof Error ? error.message : "There was an error processing your payment. Please try again.",
        variant: "error",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment options...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/donation">
            <Button variant="ghost" className="flex items-center text-gray-600 hover:text-orange-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Donation Form
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-500 text-white p-6">
            <h1 className="text-2xl font-bold">Complete Your Donation</h1>
            <p className="mt-2">You're donating ₹{Number.parseInt(amount).toLocaleString()} to support our cause</p>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Donation Summary</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Donation Amount:</span>
                  <span className="font-semibold">₹{Number.parseInt(amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Donor Name:</span>
                  <span>{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span>{email}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <h2 className="text-lg font-semibold">Payment Information</h2>

              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name-on-card">Name on Card</Label>
                <Input
                  id="name-on-card"
                  placeholder="Enter name as it appears on card"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  required
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span> Processing Payment...
                    </>
                  ) : (
                    `Pay ₹${Number.parseInt(amount).toLocaleString()}`
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your payment information is secure. We use encryption to protect your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

