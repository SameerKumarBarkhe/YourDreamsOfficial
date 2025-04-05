"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Copy, Check } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface UPIPaymentFormProps {
  amount: string
  donorName: string
  donorEmail: string
  donorPhone: string
  campaignId?: string
}

export default function UPIPaymentForm({ amount, donorName, donorEmail, donorPhone, campaignId }: UPIPaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("phonepe")
  const [upiId, setUpiId] = useState<string>("7898941264@fam")
  const [copied, setCopied] = useState<boolean>(false)
  const [isVerifying, setIsVerifying] = useState<boolean>(false)
  const [transactionId, setTransactionId] = useState<string>("")

  const { toast } = useToast()

  const handleCopyUpiId = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)

    toast({
      title: "UPI ID Copied",
      description: "UPI ID has been copied to clipboard",
      variant: "success",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const handleVerifyPayment = async () => {
    if (!transactionId) {
      toast({
        title: "Transaction ID Required",
        description: "Please enter your UPI transaction ID to verify payment",
        variant: "warning",
      })
      return
    }

    setIsVerifying(true)

    try {
      // In a real application, you would make an API call to verify the transaction
      // For this example, we'll simulate a successful verification
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate a receipt ID
      const receiptId = `REC-${Date.now()}-${Math.floor(Math.random() * 1000)}`

      toast({
        title: "Payment Verified",
        description: "Your donation has been verified. Thank you for your contribution!",
        variant: "success",
      })

      // Redirect to receipt page
      window.location.href = `/receipt/${receiptId}`
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "We couldn't verify your payment. Please try again or contact support.",
        variant: "error",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-orange-500">Complete Your Donation</h2>

      <div className="mb-6">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-2">Donation Summary</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-gray-600">Amount:</p>
            <p className="font-medium">₹{amount}</p>
            <p className="text-gray-600">Name:</p>
            <p className="font-medium">{donorName}</p>
            <p className="text-gray-600">Email:</p>
            <p className="font-medium">{donorEmail}</p>
            {donorPhone && (
              <>
                <p className="text-gray-600">Phone:</p>
                <p className="font-medium">{donorPhone}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Label className="mb-2 block">Select UPI Payment Method</Label>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-4">
          <div className="flex items-center">
            <RadioGroupItem value="phonepe" id="phonepe" className="peer sr-only" />
            <Label
              htmlFor="phonepe"
              className="flex flex-col h-24 w-full cursor-pointer items-center justify-center rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-purple-500 [&:has([data-state=checked])]:border-purple-500"
            >
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <span className="text-purple-600 font-bold text-xs">PhonePe</span>
              </div>
              <span className="text-sm">PhonePe</span>
            </Label>
          </div>

          <div className="flex items-center">
            <RadioGroupItem value="gpay" id="gpay" className="peer sr-only" />
            <Label
              htmlFor="gpay"
              className="flex flex-col h-24 w-full cursor-pointer items-center justify-center rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <span className="text-green-600 font-bold text-xs">GPay</span>
              </div>
              <span className="text-sm">Google Pay</span>
            </Label>
          </div>

          <div className="flex items-center">
            <RadioGroupItem value="paytm" id="paytm" className="peer sr-only" />
            <Label
              htmlFor="paytm"
              className="flex flex-col h-24 w-full cursor-pointer items-center justify-center rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500"
            >
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold text-xs">Paytm</span>
              </div>
              <span className="text-sm">Paytm</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">UPI Payment Details</h3>
            <div className="flex items-center">
              <button onClick={handleCopyUpiId} className="text-blue-500 hover:text-blue-700 flex items-center text-sm">
                {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                {copied ? "Copied" : "Copy UPI ID"}
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
              <div className="text-center mb-2">
                <p className="text-sm text-gray-500">Scan QR code to pay</p>
              </div>
              <div className="h-48 w-48 relative mx-auto">
                <Image
                  src="/image/Scanner.png"
                  alt="UPI QR Code"
                  width={200}
                  height={200}
                  className="border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div className="text-center mb-4">
              <p className="text-sm text-gray-500">Or pay using UPI ID</p>
              <div className="flex items-center justify-center mt-1">
                <span className="font-medium text-lg">{upiId}</span>
              </div>
            </div>

            <div className="w-full">
              <p className="text-sm text-gray-500 mb-2">
                1. Open your UPI app (
                {paymentMethod === "phonepe" ? "PhonePe" : paymentMethod === "gpay" ? "Google Pay" : "Paytm"})
              </p>
              <p className="text-sm text-gray-500 mb-2">2. Scan the QR code or pay to UPI ID: {upiId}</p>
              <p className="text-sm text-gray-500 mb-2">3. Enter amount: ₹{amount}</p>
              <p className="text-sm text-gray-500 mb-2">4. Complete the payment and enter the transaction ID below</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="transactionId">Enter UPI Transaction ID</Label>
        <Input
          id="transactionId"
          placeholder="e.g., UPI123456789"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">You can find the transaction ID in your UPI app payment history</p>
      </div>

      <Button onClick={handleVerifyPayment} className="w-full bg-orange-500 hover:bg-orange-600" disabled={isVerifying}>
        {isVerifying ? "Verifying Payment..." : "Verify Payment & Generate Receipt"}
      </Button>
    </motion.div>
  )
}

