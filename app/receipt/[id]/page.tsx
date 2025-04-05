"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Printer, Download, Share2, AlertTriangle } from "lucide-react"
import { useParams } from "next/navigation"

interface Receipt {
  id: string
  amount: number
  name: string
  email: string
  phone: string
  date: string
  paymentMethod: string
  cardLast4: string
  status: string
  viewed: boolean
  organization: {
    name: string
    address: string
    phone: string
    email: string
    website: string
    taxId: string
  }
  campaign: {
    name: string
    category: string
  }
}

export default function ReceiptPage() {
  const [receipt, setReceipt] = useState<Receipt | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const params = useParams()
  const receiptId = params.id as string

  useEffect(() => {
    const fetchReceipt = async () => {
      try {
        const response = await fetch(`/api/receipt/${receiptId}`)
        const data = await response.json()

        if (!response.ok) {
          setError(data.message || data.error || "Failed to fetch receipt")
          return
        }

        setReceipt(data)

        // Store in localStorage that this receipt has been viewed
        localStorage.setItem(`receipt_${receiptId}_viewed`, "true")
      } catch (error) {
        console.error("Error fetching receipt:", error)
        setError("Failed to fetch receipt details. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    // Check if receipt has already been viewed in this browser
    const hasBeenViewed = localStorage.getItem(`receipt_${receiptId}_viewed`) === "true"

    if (hasBeenViewed) {
      setError("This receipt has already been viewed. For security reasons, each receipt can only be viewed once.")
      setIsLoading(false)
    } else if (receiptId) {
      fetchReceipt()
    }
  }, [receiptId, toast])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real application, you would generate a PDF and download it
    toast({
      title: "Download Started",
      description: "Your receipt is being downloaded as a PDF.",
      variant: "info",
    })
  }

  const handleShare = () => {
    // In a real application, you would implement sharing functionality
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link Copied",
      description: "Receipt link copied to clipboard. You can now share it.",
      variant: "success",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading receipt...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-16 w-16 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Receipt Access Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  if (!receipt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Receipt Not Found</h2>
          <p className="text-gray-600 mb-6">The receipt you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden print:shadow-none">
          {/* Receipt Header */}
          <div className="bg-orange-500 text-white p-6 print:bg-white print:text-black">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Donation Receipt</h1>
              <div className="text-sm">
                <p>Receipt ID: {receipt.id}</p>
                <p>Date: {new Date(receipt.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Organization Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-xl font-bold text-orange-500">{receipt.organization.name}</h2>
                <p className="text-gray-600">{receipt.organization.address}</p>
                <p className="text-gray-600">{receipt.organization.phone}</p>
                <p className="text-gray-600">{receipt.organization.email}</p>
                <p className="text-gray-600">{receipt.organization.website}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="h-16 w-40 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-500">Charitics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Donor Info */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Donor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Name:</span> {receipt.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {receipt.email}
                </p>
                {receipt.phone && (
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> {receipt.phone}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Payment Method:</span> {receipt.paymentMethod}
                  {receipt.cardLast4 !== "****" && ` (ending in ${receipt.cardLast4})`}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Status:</span>{" "}
                  <span className="text-green-500 font-medium">{receipt.status}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Donation Details */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Donation Details</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{receipt.campaign.name}</p>
                  <p className="text-sm text-gray-600">Category: {receipt.campaign.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-500">₹{receipt.amount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Thank You for Your Donation!</h3>
            <p className="text-gray-600 mb-4">
              Your generosity makes a difference in the lives of those we serve. This donation is tax-deductible to the
              extent allowed by law.
            </p>
            <p className="text-sm text-gray-500">Tax ID: {receipt.organization.taxId}</p>
          </div>

          {/* Action Buttons - Hidden when printing */}
          <div className="p-6 bg-gray-50 flex justify-center space-x-4 print:hidden">
            <Button onClick={handlePrint} className="flex items-center">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button onClick={handleDownload} className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button onClick={handleShare} variant="outline" className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

