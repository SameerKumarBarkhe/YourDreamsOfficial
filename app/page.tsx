"use client" 

import { useEffect, useState } from "react"  ;{/* SAMEER'S TEAM */}
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DonationCard from "@/components/donation-card"
import EventCard from "@/components/event-card"
import StatCard from "@/components/stat-card"
import TeamCard from "@/components/team-card"
import TestimonialCard from "@/components/testimonial-card"
import BlogCard from "@/components/blog-card"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text mb-2">YOUR DREAMS FOUNDATION</h2>
          <p className="text-gray-600">Loading amazing experiences...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front%20page%20background%20image.jpg-AVUhk2P7qMJGaA5OAcHjwKmjTg9iDJ.jpeg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-pink-900/60 to-orange-900/70"></div>
        </div>
        <div className="container relative z-10 text-white">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="block">Turning Dreams Into</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300">
                Reality For Those In Need
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Inspired by Dr. APJ Abdul Kalam, we are friends who believe in humanity and charity, aspiring to be modern
              day social reformers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donation">
                <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                  Make Donation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-6 text-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg"
                  alt="About our NGO"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-[200px] animate-float">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 mb-2">
                  8+
                </h3>
                <p className="text-gray-700">Years of Service</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
                About Our Foundation
              </span>
              <h2 className="text-3xl font-bold mb-6">We&apos;ve Been Helping People Since 2015</h2>
              <p className="text-gray-600 mb-6">
                YOUR DREAMS FOUNDATION is a non-profit organization dedicated to making a positive impact on the lives
                of underprivileged communities across Mumbai. Our mission is to provide essential resources, education,
                and support to those in need, empowering them to build a better future for themselves and their
                families.
              </p>
              <p className="text-gray-600 mb-6">
                Through our various initiatives in education, healthcare, women empowerment, and environmental
                sustainability, we strive to create lasting change and foster self-reliance in the communities we serve.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Education for All</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Healthcare Access</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Blood Donation</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Food Distribution</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                    Explore More
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-pink-500 text-pink-500 hover:bg-pink-50 transition-all duration-300"
                  >
                    Join With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="5,000+" text="Lives Impacted" icon="users" color="purple" />
            <StatCard number="₹1 Lakh+" text="Funds Raised" icon="currency-rupee" color="pink" />
            <StatCard number="20+" text="Communities Served" icon="home" color="blue" />
            <StatCard number="1,000+" text="Children Supported" icon="heart" color="orange" />
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Our Causes
            </span>
            <h2 className="text-3xl font-bold">Causes We Support</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <DonationCard
                title="Education Support for Underprivileged Children"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20book%20donated%20at%20chembur%20children%20home%20at%2029%20july%202022.jpg-ZNsq8dBhUamiYnfNl5hJO2aw0V8Z2H.jpeg"
                raised={25000}
                goal={50000}
                category="Education"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <DonationCard
                title="Blood Donation Drives for Medical Emergencies"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg"
                raised={15000}
                goal={30000}
                category="Health"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <DonationCard
                title="Food Distribution for Homeless & Needy"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg"
                raised={18000}
                goal={40000}
                category="Food"
              />
            </div>
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
            <Link href="/donation">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                View All Causes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Upcoming Events
            </span>
            <h2 className="text-3xl font-bold">Join Our Events & Make a Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <EventCard
                title="Blood Donation Camp"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg"
                date="2025-05-15"
                time="9:00 AM - 4:00 PM"
                location="Saibaba Nagar, Chembur, Mumbai"
                id="1"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <EventCard
                title="Food Distribution Drive"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg"
                date="2025-05-22"
                time="10:00 AM - 2:00 PM"
                location="Slum Areas, Thane, Mumbai"
                id="2"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <EventCard
                title="Children's Education Support"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg"
                date="2025-05-29"
                time="11:00 AM - 3:00 PM"
                location="Children's Home, Chembur, Mumbai"
                id="3"
              />
            </div>
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
            <Link href="/events">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Our Team
            </span>
            <h2 className="text-3xl font-bold">Meet Our Dedicated Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">  {/*President*/}
              <TeamCard
                name="Mariyappan Pandi"
                role="President"
                image="/image/President.png"
                email="mariyappannupan@gmail.com"
                phone="+91 9833048505"
                instagram="mariyappan_pandi"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <TeamCard
                name="Prabhu Paramasingh"
                role="Vice President"
                email="pparamasingh@gmail.com"
                phone="+91 8667386291"
                instagram="prabhu_paramsingh"
                image="/image/Vice_President.png"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <TeamCard
                name="Nityagajendran Nadar"
                role="General Secretary"
                image="/image/Gneral_Sec.png"
                email="nityagajendran@gmail.com"
                phone="+91 9664277669"
                instagram="nityagajendran"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <TeamCard
                name="Padmanathan Maharajan"
                role="Treasurer"
                image="/image/Treasurer.png"
                email="kanienterprises369@gmail.com"
                phone="+91 9773559857"
                instagram="padmanatha_m"
              />
            </div>
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
            <Link href="/about">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold">What People Say About Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <TestimonialCard
                quote="The work that YOUR DREAMS FOUNDATION is doing for children's education is truly inspiring. I've seen firsthand how they're changing lives in Chembur."
                name="Sameer Kumar Barkhe"
                title="Website Developer"
                image="/image/Sameer.png"
                rating={5}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <TestimonialCard
                quote="As a donor, I appreciate the transparency and accountability that YOUR DREAMS FOUNDATION maintains. I know my contributions are making a real difference."
                name="Manvith Poojary"
                title="Donor"
                image="/image/Manvith.png"
                rating={5}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <TestimonialCard
                quote="The blood donation camp organized by YOUR DREAMS FOUNDATION was well-managed and efficient. Proud to be associated with such a dedicated team."
                name="Sujitha Vadivel"
                title="Accountant"
                image="/image/Suji.png"
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Our Blog
            </span>
            <h2 className="text-3xl font-bold">Latest News & Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <BlogCard
                title="Children's Education Support at Chembur Children's Home"
                excerpt="Our team distributed books and educational materials to children at Chembur Children's Home, helping them continue their education journey."
                date="2022-07-29"
                author="Mariyappan Pandi"
                category="Education"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg"
                id="1"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <BlogCard
                title="Blood Donation Camp at Chembur Shell Colony"
                excerpt="We organized a successful blood donation camp at Chembur Shell Colony, collecting vital blood supplies for local hospitals."
                date="2020-08-10"
                author="Nityagajendran Maharajan"
                category="Health"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg"
                id="2"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <BlogCard
                title="Food Distribution Drive for the Needy in Thane"
                excerpt="Our volunteers distributed food packages to homeless and underprivileged individuals in Thane during the pandemic."
                date="2020-09-14"
                author="Padmanathan Maharajan"
                category="Food"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg"
                id="3"
              />
            </div>
          </div>

          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8">
              Your support can help us continue our mission to create positive change in the lives of those who need it
              most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donation">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105">
                  Donate Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-6 text-lg transition-all duration-300"
                >
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

