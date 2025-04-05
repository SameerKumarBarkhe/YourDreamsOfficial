"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Pages",
    href: "#",
    dropdown: [
      { name: "Services", href: "/services" },
      { name: "Service Details", href: "/services/details" },
      { name: "Team", href: "/about" },
      { name: "Team Member Details", href: "/about" },
      { name: "Pricing Plans", href: "/unavailable" },
      { name: "FAQs", href: "/unavailable" },
      { name: "404", href: "/unavailable" },
    ],
  },
  { name: "Donation", href: "/donation" },
  { name: "Event", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 mr-2 overflow-hidden rounded-full gradient-bg p-1">
            <div className="absolute inset-0 bg-white rounded-full m-0.5"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">YD</span>
            </div>
          </div>
          <span className="text-2xl font-bold gradient-text">YOUR DREAMS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className={cn(
                    "flex items-center text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300",
                    activeDropdown === link.name && "text-pink-500",
                  )}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300",
                    pathname === link.href && "text-pink-500",
                  )}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div
                  className={cn(
                    "absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-right",
                    activeDropdown === link.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
                  )}
                >
                  <div className="py-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-pink-500 transition-colors duration-300">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/contact">
            <Button className="gradient-bg hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-105">
              Join With us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white lg:hidden transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <div className="relative h-10 w-10 mr-2 overflow-hidden rounded-full gradient-bg p-1">
                <div className="absolute inset-0 bg-white rounded-full m-0.5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">YD</span>
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">YOUR DREAMS</span>
            </Link>
            <button className="text-gray-700" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-pink-500 font-medium"
                      >
                        {link.name}
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", activeDropdown === link.name && "rotate-180")}
                        />
                      </button>

                      {activeDropdown === link.name && (
                        <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block py-1 text-gray-600 hover:text-pink-500"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-2 text-gray-700 hover:text-pink-500 font-medium",
                        pathname === link.href && "text-pink-500",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-4">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full gradient-bg hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white">
                Join With us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

