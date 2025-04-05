"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface EventCardProps {
  title: string
  description?: string
  date: string
  time: string
  location: string
  image: string
  id: string
}

export default function EventCard({ title, description, date, time, location, image, id }: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const day = new Date(date).getDate()
  const month = new Date(date).toLocaleDateString("en-US", { month: "short" })

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-40 md:h-auto md:w-1/3 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white p-2 rounded-lg text-center min-w-[60px] animate-pulse-glow">
          <div className="text-xl font-bold">{day}</div>
          <div className="text-sm">{month}</div>
        </div>
      </div>

      <div className="p-6 md:w-2/3">
        <h3 className="text-xl font-semibold mb-3 hover:text-pink-500 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description ||
            "Join us for this important event and help make a difference in our community. Your participation matters!"}
        </p>

        <div className="flex items-center text-gray-600 mb-3">
          <Calendar className="h-5 w-5 mr-2 text-pink-500" />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-5 w-5 mr-2 text-pink-500" />
          <span>{time}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2 text-pink-500" />
          <span>{location}</span>
        </div>

        <Link href={`/events/${id}`}>
          <Button
            variant="outline"
            className="text-pink-500 border-pink-500 hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
          >
            Event Details
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

