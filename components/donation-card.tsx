"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import Link from "next/link"

interface DonationCardProps {
  title: string
  category: string
  progress?: number
  raised: number
  goal: number
  image: string
}

export default function DonationCard({ title, category, progress, raised, goal, image }: DonationCardProps) {
  // Calculate progress if not provided
  const calculatedProgress = progress || Math.round((raised / goal) * 100)

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
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl gradient-border"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`absolute top-4 left-4 ${getCategoryColor()} text-white px-3 py-1 rounded-full text-sm font-medium`}
        >
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="gradient-text font-semibold">{calculatedProgress}%</span>
            <span className="text-gray-600 text-sm">Goal: ₹{goal.toLocaleString()}</span>
          </div>
          <Progress
            value={calculatedProgress}
            className="h-2"
            indicatorClassName="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
          />
          <div className="mt-1 text-sm text-gray-600">Raised: ₹{raised.toLocaleString()}</div>
        </div>

        <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-pink-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          Your support will help us make a meaningful difference in the lives of those in need. Every contribution
          counts towards creating positive change.
        </p>

        <Link href="/donation">
          <Button
            className={`w-full ${getCategoryColor()} text-white transition-all duration-300 transform hover:scale-105`}
          >
            Donate now
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

