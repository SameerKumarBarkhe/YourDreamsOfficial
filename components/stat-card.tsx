"use client"

import { Heart, Gift, Users, Home, IndianRupeeIcon as CurrencyRupee } from "lucide-react"
import { motion } from "framer-motion"

interface StatCardProps {
  number: string
  text: string
  icon?: string
  color?: string
}

export default function StatCard({ number, text, icon = "users", color = "orange" }: StatCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "heart":
        return <Heart className={`h-8 w-8 ${getIconColor()}`} />
      case "gift":
        return <Gift className={`h-8 w-8 ${getIconColor()}`} />
      case "home":
        return <Home className={`h-8 w-8 ${getIconColor()}`} />
      case "currency-rupee":
        return <CurrencyRupee className={`h-8 w-8 ${getIconColor()}`} />
      case "users":
      default:
        return <Users className={`h-8 w-8 ${getIconColor()}`} />
    }
  }

  const getIconColor = () => {
    switch (color) {
      case "purple":
        return "text-purple-300"
      case "pink":
        return "text-pink-300"
      case "blue":
        return "text-blue-300"
      case "green":
        return "text-green-300"
      case "orange":
      default:
        return "text-orange-300"
    }
  }

  const getBgColor = () => {
    switch (color) {
      case "purple":
        return "bg-purple-600/30"
      case "pink":
        return "bg-pink-600/30"
      case "blue":
        return "bg-blue-600/30"
      case "green":
        return "bg-green-600/30"
      case "orange":
      default:
        return "bg-orange-600/30"
    }
  }

  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 rounded-lg border border-white/20 backdrop-blur-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-aos="zoom-in"
    >
      <div className={`h-16 w-16 rounded-full ${getBgColor()} flex items-center justify-center mb-4`}>
        {renderIcon()}
      </div>
      <motion.h3
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-100">{text}</p>
    </motion.div>
  )
}

