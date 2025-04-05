import { type NextRequest, NextResponse } from "next/server"

// Sample events data (same as in the events route)
const events = [
  {
    id: "1",
    title: "Blood Donation Camp",
    description: "Join our blood donation camp and help save lives. Every drop counts!",
    date: "2025-05-15",
    time: "9:00 AM - 4:00 PM",
    location: "Saibaba Nagar, Chembur, Mumbai",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg",
    category: "Health",
  },
  {
    id: "2",
    title: "Food Distribution Drive",
    description: "Help us distribute food to those in need. Your contribution can make a difference.",
    date: "2025-05-22",
    time: "10:00 AM - 2:00 PM",
    location: "Slum Areas, Thane, Mumbai",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg",
    category: "Food",
  },
  {
    id: "3",
    title: "Children's Education Support",
    description: "Support children's education by donating books and stationery. Help build a brighter future.",
    date: "2025-05-29",
    time: "11:00 AM - 3:00 PM",
    location: "Children's Home, Chembur, Mumbai",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg",
    category: "Education",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const event = events.find((event) => event.id === id)

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error("Event fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 })
  }
}

