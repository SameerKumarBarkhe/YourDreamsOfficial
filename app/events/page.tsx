import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

// Sample event data
const events = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: "2023-12-15",
    time: "6:00 PM - 10:00 PM",
    location: "TilakNagar, Mumbai",
    image: "/image/Eventimages/CharityGala.jpeg",
    description:
      "Join us for an evening of inspiration, entertainment, and fundraising to support our education initiatives.",
    category: "Fundraiser",
  },
  {
    id: 2,
    title: "Community Health Camp",
    date: "2023-11-20",
    time: "9:00 AM - 4:00 PM",
    location: "Park,Mulund",
    image: "/image/Eventimages/CampMain.jpeg",
    description: "Free health check-ups, consultations, and medicines for underprivileged communities.",
    category: "Health",
  },
  {
    id: 3,
    title: "Children's Day Celebration",
    date: "2020-11-14",
    time: "10:00 AM - 2:00 PM",
    location: "Various Schools in Rural Areas",
    image: "/image/Event-ChilderensDay.jpeg",
    description:
      "Celebrating Children's Day with fun activities, gifts, and educational programs for underprivileged children.",
    category: "Education",
  },
  {
    id: 4,
    title: "Environmental Awareness Workshop",
    date: "2020-12-05",
    time: "11:00 AM - 1:00 PM",
    location: "Chembur,Mumbai",
    image: "/image/Event-Envirmental.png",
    description: "Learn about sustainable practices and how to protect our environment through interactive workshops.",
    category: "Environment",
  },
  {
    id: 5,
    title: "Food Distribution Drive",
    date: "2020-11-25",
    time: "8:00 AM - 12:00 PM",
    location: "Diva,Thane",
    image: "/image/Event-Food-Distribution.jpeg",
    description: "Distributing food packages to families in need as part of our hunger alleviation program.",
    category: "Food",
  },
  {
    id: 6,
    title: "Volunteer Training Program",
    date: "2025-04-01",
    time: "3:00 PM - 7:00 PM",
    location: "Chembur",
    image: "/image/Event-Volunteer.jpeg",
    description:
      "Training session for new volunteers to learn about our programs and how they can contribute effectively.",
    category: "Training",
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/logo.png"
            alt="Events background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Our Events</h1>
          <div className="flex items-center">
            <Link href="/" className="hover:text-orange-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Events</span>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold mb-2 block">Upcoming Events</span>
            <h2 className="text-3xl font-bold">Join Our Events & Make a Difference</h2>
          </div>

          {/* Event Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              All Events
            </Button>
            <Button variant="outline" className="border-gray-200 hover:border-orange-500 hover:text-orange-500">
              Fundraiser
            </Button>
            <Button variant="outline" className="border-gray-200 hover:border-orange-500 hover:text-orange-500">
              Health
            </Button>
            <Button variant="outline" className="border-gray-200 hover:border-orange-500 hover:text-orange-500">
              Education
            </Button>
            <Button variant="outline" className="border-gray-200 hover:border-orange-500 hover:text-orange-500">
              Environment
            </Button>
            <Button variant="outline" className="border-gray-200 hover:border-orange-500 hover:text-orange-500">
              Food
            </Button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <Link href={`/events/${event.id}`}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-orange-500 rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Organize an Event with Us?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              If you are interested in organizing a charity event or partnering with us for a cause, we would love to hear
              from you!
            </p>
            <Link href="/contact">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

