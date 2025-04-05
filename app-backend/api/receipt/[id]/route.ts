import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // In a real application, you would:
    // 1. Fetch the donation details from a database using the ID
    // 2. Verify that the donation exists and was successful
    // 3. Return the receipt data

    // For demo purposes, we'll simulate fetching receipt data
    const receiptData = {
      id,
      name: "John Doe",
      email: "john.doe@example.com",
      amount: 1000,
      paymentMethod: "UPI",
      transactionId: `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toISOString(),
      status: "Completed",
      cause: "Education Support",
    }

    return NextResponse.json(receiptData)
  } catch (error) {
    console.error("Receipt fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch receipt" }, { status: 500 })
  }
}

