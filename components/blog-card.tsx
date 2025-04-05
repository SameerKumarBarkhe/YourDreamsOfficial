"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  id: string
}

export default function BlogCard({ title, excerpt, date, author, category, image, id }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  // Get category color
  const getCategoryColor = () => {
    switch (category.toLowerCase()) {
      case "education":
        return "bg-purple-500 hover:bg-purple-600"
      case "health":
        return "bg-pink-500 hover:bg-pink-600"
      case "food":
        return "bg-orange-500 hover:bg-orange-600"
      case "environment":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-blue-500 hover:bg-blue-600"
    }
  }

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl h-full"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-40 overflow-hidden">
        <div
          className={`absolute top-4 left-4 z-10 ${getCategoryColor()} text-white px-3 py-1 rounded-full text-xs font-semibold`}
        >
          {category}
        </div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>By {author}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-3 hover:text-pink-500 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link href={`/blog/${id}`} className="text-pink-500 font-medium hover:text-pink-600 inline-flex items-center">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

