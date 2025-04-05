"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Share2, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample event data (in a real app, this would come from an API)
const eventsData = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: "2023-12-15",
    time: "6:00 PM - 10:00 PM",
    location: "TilakNagar, Mumbai",
    image: "/image/Eventimages/Env1.jpeg",
    description:
      "Join us for an evening of inspiration, entertainment, and fundraising to support our education initiatives. The Annual Charity Gala brings together supporters, donors, and community leaders for a night of celebration and giving.\n\nThe event will feature live performances, silent auctions, and inspiring stories from beneficiaries of our programs. All proceeds will go towards funding our education programs for underprivileged children.",
    category: "Fundraiser",
    organizer: "Your Dreams Foundation",
    attendees: 70,
    ticketPrice: "₹0",
    contactEmail: "yourdreamsmumbai@gmail.com",
    contactPhone: "+91 9773559857",
    gallery: [
      "/image/Eventimages/Children1.jpeg",
      "/image/Eventimages/Env1.jpeg",
      "/image/DonationPage.jpeg",
    ],
  },
  {
    id: 2,
    title: "Community Health Camp",
    date: "2023-11-20",
    time: "9:00 AM - 4:00 PM",
    location: "Park, Mulund",
    image: "/image/Eventimages/CampMain.jpeg",
    description:
      "Free health check-ups, consultations, and medicines for underprivileged communities. Our Community Health Camp aims to provide essential healthcare services to those who cannot afford regular medical care.\n\nServices offered include general health check-ups, eye examinations, dental check-ups, and consultations with specialists. Medicines will be provided free of cost based on prescriptions.",
    category: "Health",
    organizer: "Your Dreams Foundation",
    attendees: 100,
    ticketPrice: "Free",
    contactEmail: "yourdreamsmumbai@gmail.com",
    contactPhone: "+91 9773559857",
    gallery: [
      "/image/Eventimages/CampMain1.jpeg",
      "/image/Eventimages/CampMain2.jpeg",
    ],
  },
  {
    id: 3,
    title: "Children's Day Celebration",
    date: "2023-11-14",
    time: "10:00 AM - 2:00 PM",
    location: "Various Schools in Rural Areas",
    image: "/image/Eventimages/Event-ChilderensDay.png",
    description:
      "Celebrating Children's Day with fun activities, gifts, and educational programs for underprivileged children. Our volunteers will visit multiple schools in rural areas to bring joy and learning to children who often miss out on such celebrations.\n\nActivities include storytelling sessions, art competitions, educational games, and distribution of school supplies and gifts. We aim to make this day special for every child we reach.",
    category: "Education",
    organizer: "Your Dreams Foundation",
    attendees: 100,
    ticketPrice: "Free",
    contactEmail: "yourdreamsmumbai@gmail.com",
    contactPhone: "+91 9773559857",
    gallery: [
      "/image/Eventimages/Children1.jpeg",
      "/image/Eventimages/Env1.jpeg",
    ],
  },
  {
    id: 4,
    title: "Environmental Awareness Workshop",
    date: "2023-12-05",
    time: "5:00 PM - 7:00 PM",
    location: "Community Center, Kurla",
    image: "/image/Eventimages/Event-Envirmental.png",
    description:
      "Learn about sustainable practices and how to protect our environment through interactive workshops. This workshop is designed for people of all ages who want to contribute to environmental conservation.\n\nTopics covered include waste management, water conservation, sustainable living practices, and the importance of biodiversity. Participants will receive a starter kit with seeds and eco-friendly products.",
    category: "Environment",
    organizer: "Your Dreams Foundation",
    attendees: 150,
    ticketPrice: "₹200 (Free for students)",
    contactEmail: "yourdreamsmumbai@gmail.com",
    contactPhone: "+91 9773559857",
    gallery: [
      "/image/Eventimages/Env1.jpeg",
    ],
  },
  {
    id: 5,
    title: "Food Distribution Drive",
    date: "2023-11-25",
    time: "8:00 AM - 12:00 PM",
    location: "Diva ,Thane",
    image: "/image/Eventimages/Event-Food-Distribution.png",
    description:
      "Distributing food packages to families in need as part of our hunger alleviation program. Each food package contains essential items like rice, lentils, oil, and spices that can sustain a family for up to two weeks.\n\nVolunteers will help in packaging and distribution. We aim to reach at least 500 families through this drive. This is part of our ongoing effort to combat hunger and food insecurity in urban slum areas.",
    category: "Food",
    organizer: "Your Dreams Foundation",
    attendees: 50,
    ticketPrice: "Volunteer-based",
    contactEmail: "yourdreamsmumbai@gmail.com",
    contactPhone: "+91 9773559857",
    gallery: [
      "/image/Eventimages/FoodD1.jpeg",
      "/image/Eventimages/FoodD2.jpeg",
    ],
  },
  {
    id: 6,
    title: "Volunteer Training Program",
    date: "2023-12-10",
    time: "9:00 AM - 3:00 PM",
    location: "TilakNagar,Mumabai",
    image: "/image/Event-Volunteer.jpeg",
    description:
      "Training session for new volunteers to learn about our programs and how they can contribute effectively. This comprehensive training program will equip volunteers with the knowledge and skills needed to make a meaningful impact.\n\nTopics covered include our organization's mission and values, current projects, communication skills, and specific role-based training. Lunch and refreshments will be provided.",
    category: "Training",
    organizer: "Your Dreams Foundation",
    attendees: 15,
    ticketPrice: "Free",
    contactEmail: "yourdreamsmumbai@gmail.com",
    contactPhone: "+91 9773559857",
    gallery: [
      "/image/Eventimages/EventVolunteer1.jpg",
      "/image/Eventimages/EventVolunteer2.jpg",
    ],
  },
]

interface EventDetailProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailProps) {
  const [event, setEvent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRegistering, setIsRegistering] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // In a real app, fetch from API
    const fetchEvent = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        const foundEvent = eventsData.find((e) => e.id === Number.parseInt(params.id))
        if (foundEvent) {
          setEvent(foundEvent)
        }
      } catch (error) {
        console.error("Error fetching event:", error)
        toast({
          title: "Error",
          description: "Failed to load event details. Please try again.",
          variant: "error",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvent()
  }, [params.id, toast])

  const handleRegister = async () => {
    setIsRegistering(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Registration Successful",
        description: "You have successfully registered for this event. We'll send you an email with more details.",
        variant: "success",
      })
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "error",
      })
    } finally {
      setIsRegistering(false)
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link Copied",
      description: "Event link copied to clipboard. You can now share it.",
      variant: "success",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Link href="/events">
            <Button className="bg-orange-500 hover:bg-orange-600">View All Events</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {/* Event Header */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
          <div className="relative h-[400px]">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              {event.category}
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">{event.title}</h1>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex items-center border-orange-500 text-orange-500 hover:bg-orange-50"
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button
                  className="flex items-center bg-orange-500 hover:bg-orange-600"
                  onClick={handleRegister}
                  disabled={isRegistering}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  {isRegistering ? "Registering..." : "Register Now"}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{event.time}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <div className="prose max-w-none">
                {event.description.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {event.gallery.map((image: string, index: number) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Event gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Organizer</p>
                  <p className="font-medium">{event.organizer}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Expected Attendees</p>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-orange-500 mr-2" />
                    <p className="font-medium">{event.attendees} people</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Entry Fee</p>
                  <p className="font-medium">{event.ticketPrice}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Contact Email</p>
                  <p className="font-medium text-orange-500">{event.contactEmail}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Contact Phone</p>
                  <p className="font-medium">{event.contactPhone}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Support Our Cause</h3>
              <p className="text-gray-700 mb-4">
                Can't attend but still want to support our mission? Consider making a donation to help us continue our
                work.
              </p>
              <Link href="/donation">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData
              .filter((e) => e.id !== event.id && e.category === event.category)
              .slice(0, 3)
              .map((relatedEvent) => (
                <div
                  key={relatedEvent.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedEvent.image || "/placeholder.svg"}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {relatedEvent.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      <span>
                        {new Date(relatedEvent.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <Link href={`/events/${relatedEvent.id}`}>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

