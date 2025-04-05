"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, DollarSign, Calendar, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample data for dashboard
const stats = {
  totalDonations: 0,
  totalDonors: 0,
  activeCampaigns: 12,
  upcomingEvents: 0,
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [donations, setDonations] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setIsClient(true)

    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access the dashboard",
        variant: "warning",
      })

      router.push("/admin/login")
      return
    }

    // Fetch donations
    const fetchDonations = async () => {
      try {
        const response = await fetch("/api/donation")
        if (!response.ok) {
          throw new Error("Failed to fetch donations")
        }

        const data = await response.json()
        setDonations(data.donations || [])

        // Update stats
        if (data.donations && data.donations.length > 0) {
          const totalAmount = data.donations.reduce(
            (sum: number, donation: any) => sum + Number.parseInt(donation.amount),
            0,
          )
          const uniqueDonors = new Set(data.donations.map((d: any) => d.email)).size

          stats.totalDonations = totalAmount
          stats.totalDonors = uniqueDonors
        }
      } catch (error) {
        console.error("Error fetching donations:", error)
        toast({
          title: "Error",
          description: "Failed to load donation data",
          variant: "error",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchDonations()
  }, [router, toast])

  if (!isClient || isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{stats.totalDonations.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalDonors}</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeCampaigns}</div>
                <p className="text-xs text-muted-foreground">+3 new this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.upcomingEvents}</div>
                <p className="text-xs text-muted-foreground">Next event in 3 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donations.length > 0 ? (
                    donations.slice(0, 5).map((donation, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                          <Users className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">{donation.name}</p>
                            <span className="text-sm text-gray-500">{new Date(donation.date).toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Donated ₹{Number.parseInt(donation.amount).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No donations yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="donations">
          <Card>
            <CardHeader>
              <CardTitle>All Donations</CardTitle>
            </CardHeader>
            <CardContent>
              {donations.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((donation, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{donation.name}</td>
                          <td className="py-3 px-4">{donation.email}</td>
                          <td className="py-3 px-4">₹{Number.parseInt(donation.amount).toLocaleString()}</td>
                          <td className="py-3 px-4">{new Date(donation.date).toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <a
                              href={`/receipt/${donation.receiptId}`}
                              target="_blank"
                              className="text-orange-500 hover:underline"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No donations yet</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <EventManager />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Event Manager Component
function EventManager() {
  const [events, setEvents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [currentEvent, setCurrentEvent] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Fetch events
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }

        const data = await response.json()
        setEvents(data || [])
      } catch (error) {
        console.error("Error fetching events:", error)
        toast({
          title: "Error",
          description: "Failed to load events",
          variant: "error",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [toast])

  const handleEditEvent = (event: any) => {
    setCurrentEvent(event)
    setIsEditing(true)
  }

  const handleSaveEvent = async (updatedEvent: any) => {
    try {
      // Update event in API
      const response = await fetch(`/api/events/${updatedEvent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEvent),
      })

      if (!response.ok) {
        throw new Error("Failed to update event")
      }

      // Update local state
      setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)))

      toast({
        title: "Event Updated",
        description: "The event has been successfully updated",
        variant: "success",
      })
    } catch (error) {
      console.error("Error updating event:", error)
      toast({
        title: "Update Failed",
        description: "Failed to update the event",
        variant: "error",
      })
    } finally {
      setIsEditing(false)
      setCurrentEvent(null)
    }
  }

  const handleAddEvent = async (newEvent: any) => {
    try {
      // Add event via API
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      })

      if (!response.ok) {
        throw new Error("Failed to add event")
      }

      const data = await response.json()

      // Update local state
      setEvents([...events, data])

      toast({
        title: "Event Added",
        description: "The new event has been successfully added",
        variant: "success",
      })
    } catch (error) {
      console.error("Error adding event:", error)
      toast({
        title: "Add Failed",
        description: "Failed to add the new event",
        variant: "error",
      })
    } finally {
      setIsEditing(false)
      setCurrentEvent(null)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Manage Events</CardTitle>
          <button
            onClick={() => {
              setCurrentEvent({
                title: "",
                description: "",
                date: new Date().toISOString().split("T")[0],
                time: "10:00 AM - 2:00 PM",
                location: "",
                category: "Education",
                image: "/placeholder.svg?height=600&width=1200",
              })
              setIsEditing(true)
            }}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Add New Event
          </button>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <EventForm
              event={currentEvent}
              onSave={currentEvent.id ? handleSaveEvent : handleAddEvent}
              onCancel={() => {
                setIsEditing(false)
                setCurrentEvent(null)
              }}
            />
          ) : (
            <div className="space-y-6">
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 hover:shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-gray-500 text-sm">
                          {new Date(event.date).toLocaleDateString()} • {event.time} • {event.location}
                        </p>
                        <p className="mt-2">{event.description.substring(0, 150)}...</p>
                      </div>
                      <button
                        onClick={() => handleEditEvent(event)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No events found. Add your first event!</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Event Form Component
function EventForm({ event, onSave, onCancel }: { event: any; onSave: (event: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState(event)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Event Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="e.g. 10:00 AM - 2:00 PM"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Environment">Environment</option>
          <option value="Food">Food</option>
          <option value="Fundraiser">Fundraiser</option>
          <option value="Training">Training</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          {event.id ? "Update Event" : "Add Event"}
        </button>
      </div>
    </form>
  )
}

