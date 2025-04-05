"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Heart, Users, Calendar, FileText, MessageSquare, Settings, LogOut } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Skip authentication check on login page
    if (pathname === "/admin/login") return

    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [pathname, router])

  // If on login page or not yet client-side, just render children
  if (pathname === "/admin/login" || !isClient) {
    return <>{children}</>
  }

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <Heart size={20} />, label: "Donations", path: "/admin/donations" },
    { icon: <Users size={20} />, label: "Donors", path: "/admin/donors" },
    { icon: <Calendar size={20} />, label: "Events", path: "/admin/events" },
    { icon: <FileText size={20} />, label: "Blog Posts", path: "/admin/blog" },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/admin/messages" },
    { icon: <Settings size={20} />, label: "Settings", path: "/admin/settings" },
  ]

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/admin/login")
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              Charities Admin
            </h2>
          </div>

          <nav className="flex-1 py-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                      pathname === item.path ? "bg-gray-100 border-l-4 border-pink-500" : ""
                    }`}
                  >
                    <span className="mr-3 text-gray-600">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <LogOut size={20} className="mr-3 text-gray-600" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  )
}

