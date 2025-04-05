import { NextResponse } from "next/server"

// In a real application, you would have a database to store donations
// For this example, we'll use an in-memory store
const donationStore: Record<string, any> = {}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const receiptId = params.id

    // Check if we have this donation in our store
    if (donationStore[receiptId]) {
      return NextResponse.json(donationStore[receiptId])
    }

    // If not in store, this would normally fetch from a database
    // For demo purposes, we'll return mock data that looks more realistic
    const receipt = {
      id: receiptId,
      amount: 1000, // This would be the actual amount from the donation
      name: "John Doe", // This would be the actual donor name
      email: "john@example.com", // This would be the actual donor email
      date: new Date().toISOString(),
      paymentMethod: "Credit Card",
      status: "Completed",
      organization: {
        name: "Charitics NGO",
        address: "4648 Rocky Road Philadelphia PA, 1920",
        phone: "+88 0123 654 99",
        email: "info@example.com",
        website: "www.charitics.org",
        taxId: "TAX-12345-6789",
      },
      campaign: {
        name: "Support Kids by Raising Valuable Donations",
        category: "Education",
      },
    }

    // Store it for future requests
    donationStore[receiptId] = receipt

    return NextResponse.json(receipt)
  } catch (error) {
    console.error("Error fetching receipt:", error)
    return NextResponse.json({ error: "Failed to fetch receipt" }, { status: 500 })
  }
}

