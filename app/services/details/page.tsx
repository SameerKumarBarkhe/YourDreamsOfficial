import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Users, Calendar, MapPin } from "lucide-react"

export default function ServiceDetailsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20book%20donated%20at%20chembur%20children%20home%20at%2029%20july%202022.jpg-ZNsq8dBhUamiYnfNl5hJO2aw0V8Z2H.jpeg"
            alt="Education Support"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Education Support Program</h1>
          <div className="flex items-center">
            <Link href="/" className="hover:text-pink-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-pink-300">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span>Education Support</span>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="relative h-[400px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20book%20donated%20at%20chembur%20children%20home%20at%2029%20july%202022.jpg-ZNsq8dBhUamiYnfNl5hJO2aw0V8Z2H.jpeg"
                    alt="Education Support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                    Education Support Program
                  </h2>

                  <p className="text-gray-700 mb-6">
                    Our Education Support Program is designed to provide educational resources, mentoring, and
                    scholarships to underprivileged children in Mumbai. We believe that education is the key to breaking
                    the cycle of poverty and creating a better future for these children.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Through this program, we distribute books, stationery, and other educational materials to children
                    who cannot afford them. We also provide tutoring and mentoring services to help students excel in
                    their studies and develop important life skills.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-gray-700">Distribution of books, stationery, and school supplies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-pink-600" />
                        </div>
                        <span className="text-gray-700">Tutoring and mentoring services for academic improvement</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-gray-700">
                          Scholarships for deserving students to continue their education
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">Career guidance and counseling for older students</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Digital literacy programs to bridge the technology gap</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Our Impact</h3>
                    <p className="text-gray-700 mb-4">Since the inception of this program, we have:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <h4 className="text-2xl font-bold text-purple-600">1,000+</h4>
                        <p className="text-gray-700">Children Supported</p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg text-center">
                        <h4 className="text-2xl font-bold text-pink-600">20+</h4>
                        <p className="text-gray-700">Schools Partnered</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <h4 className="text-2xl font-bold text-orange-600">50+</h4>
                        <p className="text-gray-700">Scholarships Awarded</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">How You Can Help</h3>
                    <p className="text-gray-700 mb-4">
                      There are several ways you can support our Education Support Program:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-gray-700">Donate funds to support our educational initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-pink-600" />
                        </div>
                        <span className="text-gray-700">Volunteer as a tutor or mentor for our students</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-gray-700">Donate books, stationery, and other educational materials</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">
                          Sponsor a child&apos;s education through our scholarship program
                        </span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/donation">
                        <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                          Donate Now
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="border-pink-500 text-pink-500 hover:bg-pink-50 transition-all duration-300"
                        >
                          Volunteer With Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                  Program Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Beneficiaries</p>
                      <p className="font-medium">Children aged 5-18 years</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                      <MapPin className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Locations</p>
                      <p className="font-medium">Chembur, Thane, and surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <Calendar className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Frequency</p>
                      <p className="font-medium">Year-round program</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Other Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/services/2"
                      className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                        <span className="text-xl">🩸</span>
                      </div>
                      <span>Blood Donation Camps</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/3"
                      className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <span className="text-xl">🍲</span>
                      </div>
                      <span>Food Distribution</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/4"
                      className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-xl">🏥</span>
                      </div>
                      <span>Health Awareness</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/5"
                      className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-300"
                    >
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-xl">🏘️</span>
                      </div>
                      <span>Community Development</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6">
                  If you have any questions about our Education Support Program or would like to get involved, please
                  don&apos;t hesitate to contact us.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-white text-pink-600 hover:bg-gray-100 transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

