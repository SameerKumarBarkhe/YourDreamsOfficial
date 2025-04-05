import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 mb-6">
              YOUR DREAMS FOUNDATION
            </h2>
            <p className="text-gray-400 mb-6">
              Inspired by Dr. APJ Abdul Kalam, created by friends who believe in humanity and charity, aspiring to be
              modern day social reformers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/yourdreams_mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-pink-400 flex items-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-pink-400 flex items-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-pink-400 flex items-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-pink-400 flex items-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="text-gray-400 hover:text-pink-400 flex items-center transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg"
                    alt="Children donation event"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">July 29, 2022</p>
                  <Link
                    href="/blog/1"
                    className="text-gray-300 hover:text-pink-400 line-clamp-2 text-sm transition-colors duration-300"
                  >
                    Children&apos;s Education Support at Chembur Children&apos;s Home
                  </Link>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg"
                    alt="Blood donation camp"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">August 10, 2020</p>
                  <Link
                    href="/blog/2"
                    className="text-gray-300 hover:text-pink-400 line-clamp-2 text-sm transition-colors duration-300"
                  >
                    Blood Donation Camp at Chembur Shell Colony
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-pink-500 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  C/o.Nityagajendran Maharajan Nadar
                  <br />
                  Room no:56, Saibaba Nagar Mata Temple,
                  <br />
                  Shell colony Road, Chembur,
                  <br />
                  Mumbai-400071
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">yourdreamsmumbai@gmail.com</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+91 9773559857</span>
              </div>

              <form className="mt-6">
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-gray-400">
                      I agree with the Privacy Policy.
                    </label>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 YOUR DREAMS FOUNDATION. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

