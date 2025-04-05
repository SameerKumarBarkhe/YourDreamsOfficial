"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Education Support",
    description:
      "We provide educational materials, scholarships, and mentoring to underprivileged children to help them build a better future.",
    icon: "📚",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20book%20donated%20at%20chembur%20children%20home%20at%2029%20july%202022.jpg-ZNsq8dBhUamiYnfNl5hJO2aw0V8Z2H.jpeg",
    color: "purple",
  },
  {
    id: 2,
    title: "Blood Donation Camps",
    description:
      "We organize regular blood donation camps to support medical emergencies and help save lives in our community.",
    icon: "🩸",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg",
    color: "pink",
  },
  {
    id: 3,
    title: "Food Distribution",
    description:
      "We distribute food packages to homeless and underprivileged individuals to combat hunger and malnutrition.",
    icon: "🍲",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg",
    color: "orange",
  },
  {
    id: 4,
    title: "Health Awareness",
    description:
      "We conduct health awareness programs to educate communities about preventive healthcare and healthy living practices.",
    icon: "🏥",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doanted%20blood%20to%20lady%20in%20mumbai%20at%2015%20october%202018.jpg-yhBGLM94HRl7tzQAql3BAmW3ZnuxyU.jpeg",
    color: "green",
  },
  {
    id: 5,
    title: "Community Development",
    description:
      "We work on various community development projects to improve infrastructure and living conditions in underserved areas.",
    icon: "🏘️",
    image: "https://tse1.mm.bing.net/th?id=OIP.omIfohPAggic3Zz0Tl7drwHaFu&pid=Api",
    color: "blue",
  },
  {
    id: 6,
    title: "Skill Development",
    description:
      "We provide vocational training and skill development programs to help individuals become financially independent.",
    icon: "🛠️",
    image: "/image/ServiceSkillDevelopment.jpeg",
    color: "yellow",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Services background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <div className="flex items-center">
            <Link href="/" className="hover:text-pink-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl font-bold">Our Services & Programs</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              We offer a range of services and programs designed to make a positive impact on the lives of those in
              need. Our work spans across education, healthcare, food security, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-md h-full hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-${service.color}-900/70 to-transparent`}
                    ></div>
                    <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={`/services/${service.id}`}>
                      <Button
                        className={`bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 hover:from-${service.color}-600 hover:to-${service.color}-700 text-white transition-all duration-300 transform hover:scale-105`}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Our Process
            </span>
            <h2 className="text-3xl font-bold">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-3xl font-bold text-purple-600">1</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Identify Needs</h3>
              <p className="text-gray-600">
                We identify the needs of communities through research and direct engagement.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-3xl font-bold text-pink-600">2</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Plan Solutions</h3>
              <p className="text-gray-600">
                We develop comprehensive plans to address the identified needs effectively.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-3xl font-bold text-orange-600">3</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-blue-500"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Implement Programs</h3>
              <p className="text-gray-600">
                We implement our programs with the help of dedicated volunteers and partners.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <span className="text-3xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Measure Impact</h3>
              <p className="text-gray-600">
                We measure the impact of our programs to ensure they are making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Ready to Support Our Cause?</h2>
            <p className="text-xl mb-8">
              Join us in our mission to create positive change in the lives of those who need it most. Your support can
              make a real difference.
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

