"use client"

import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

interface TeamCardProps {
  name: string
  role: string
  image: string
  email?: string
  phone?: string
  instagram?: string
}

export default function TeamCard({ name, role, image, email, phone, instagram }: TeamCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            {instagram && (
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg group-hover:text-pink-500 transition-colors duration-300">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </motion.div>
  )
}

