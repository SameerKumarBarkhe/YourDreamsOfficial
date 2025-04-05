import { NextResponse } from "next/server"

// In-memory store for demo purposes (replace with actual database in production)
const donations: any[] = []
const receipts: Record<string, any> = {}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the donation data
    if (!data.amount || !data.name || !data.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate a unique receipt ID
    const receiptId = `REC-${Date.now()}-${Math.floor(Math.random() * 1000)}`

    // Create receipt data
    const receipt = {
      id: receiptId,
      amount: Number.parseInt(data.amount),
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      message: data.message || "",
      date: new Date().toISOString(),
      paymentMethod: data.paymentMethod || "Credit Card",
      cardLast4: data.cardLast4 || "****",
      status: "Completed",
      viewed: false, // Track if receipt has been viewed
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

    // In a real application, you would:
    // 1. Save the donation to your database
    // await db.donations.create({
    //   data: {
    //     receiptId,
    //     amount: parseInt(data.amount),
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone || "",
    //     message: data.message || "",
    //     paymentMethod: data.paymentMethod || "Credit Card",
    //     status: "Completed",
    //   }
    // })

    // For demo, store in memory
    donations.push({
      id: donations.length + 1,
      receiptId,
      ...data,
      date: new Date().toISOString(),
      status: "Completed",
    })

    receipts[receiptId] = receipt

    // 2. Send receipt email
    try {
      // In a real app, you would use a proper email service
      // await sendEmail({
      //   to: data.email,
      //   subject: "Thank You for Your Donation",
      //   html: `
      //     <h1>Thank You for Your Donation!</h1>
      //     <p>Dear ${data.name},</p>
      //     <p>Thank you for your generous donation of ₹${parseInt(data.amount).toLocaleString()}.</p>
      //     <p>Your receipt ID is: ${receiptId}</p>
      //     <p>You can view your receipt at: <a href="${process.env.NEXT_PUBLIC_APP_URL}/receipt/${receiptId}">View Receipt</a></p>
      //   `
      // })

      console.log(`Email would be sent to ${data.email} with receipt ID ${receiptId}`)
    } catch (emailError) {
      console.error("Failed to send receipt email:", emailError)
      // Continue processing even if email fails
    }

    // Return success response with receipt data
    return NextResponse.json({
      success: true,
      message: "Donation processed successfully",
      receipt: {
        id: receiptId,
        amount: Number.parseInt(data.amount),
        name: data.name,
        email: data.email,
        date: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Error processing donation:", error)
    return NextResponse.json({ error: "Failed to process donation" }, { status: 500 })
  }
}

// API to get all donations (for admin panel)
export async function GET(request: Request) {
  try {
    // In a real app, you would fetch from database
    // const allDonations = await db.donations.findMany({
    //   orderBy: { createdAt: 'desc' }
    // })

    // For demo, return in-memory donations
    return NextResponse.json({
      success: true,
      donations: donations,
    })
  } catch (error) {
    console.error("Error fetching donations:", error)
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 })
  }
}

