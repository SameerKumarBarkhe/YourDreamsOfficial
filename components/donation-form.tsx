"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function DonationForm() {
  const [amount, setAmount] = useState<string>("1000")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const { toast } = useToast()
  const router = useRouter()

  const handleAmountChange = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("custom")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get the final amount (either preset or custom)
    const finalAmount = amount === "custom" ? customAmount : amount

    try {
      // Validate inputs
      if (!finalAmount || !name || !email) {
        throw new Error("Please fill in all required fields")
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to UPI payment page with query parameters
      router.push(
        `/donation/payment?amount=${finalAmount}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`,
      )
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "There was an error processing your donation. Please try again.",
        variant: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Label className="mb-2 block">Select Donation Amount (₹)</Label>
        <RadioGroup value={amount} onValueChange={handleAmountChange} className="grid grid-cols-3 gap-4 mb-4">
          {["500", "1000", "2000", "5000", "10000"].map((value) => (
            <div key={value} className="flex items-center">
              <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
              <Label
                htmlFor={`amount-${value}`}
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:text-orange-500 [&:has([data-state=checked])]:border-orange-500"
              >
                ₹{Number.parseInt(value).toLocaleString()}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="relative">
          <Input
            type="number"
            placeholder="Custom Amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className={`pl-8 ${amount === "custom" ? "border-orange-500 ring-1 ring-orange-500" : ""}`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Donate Now"}
      </Button>
    </motion.form>
  )
}

