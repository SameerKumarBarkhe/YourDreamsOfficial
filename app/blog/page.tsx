"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Children's Education Support at Chembur Children's Home",
    excerpt:
      "Our team distributed books and educational materials to children at Chembur Children's Home, helping them continue their education journey.",
    date: "2022-07-29",
    author: "Mariyappan Pandi",
    category: "Education",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Blood Donation Camp at Chembur Shell Colony",
    excerpt:
      "We organized a successful blood donation camp at Chembur Shell Colony, collecting vital blood supplies for local hospitals.",
    date: "2020-08-10",
    author: "Nityagajendran Maharajan",
    category: "Health",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Food Distribution Drive for the Needy in Thane",
    excerpt:
      "Our volunteers distributed food packages to homeless and underprivileged individuals in Thane during the pandemic.",
    date: "2020-09-14",
    author: "Padmanathan Maharajan",
    category: "Food",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Blood Donation Drive Helps Woman in Medical Emergency",
    excerpt: "Our blood donation initiative provided critical support to a woman facing a medical emergency in Mumbai.",
    date: "2018-10-15",
    author: "Akram Khan",
    category: "Health",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doanted%20blood%20to%20lady%20in%20mumbai%20at%2015%20october%202018.jpg-yhBGLM94HRl7tzQAql3BAmW3ZnuxyU.jpeg",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Celebrating Dr. APJ Abdul Kalam's Birthday with Blood Donation",
    excerpt: "We honored the legacy of Dr. APJ Abdul Kalam by organizing a blood donation camp on his birthday.",
    date: "2019-10-15",
    author: "Prabhu Paramsingh",
    category: "Health",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blood%20camp%20at%20APJ%20ABDUL%20KALAM%20birthday.jpg-35nekjQKLhr2lucAVd8IuPhUQlVddJ.jpeg",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Literacy Program for Underprivileged Children",
    excerpt:
      "Our new initiative aims to bridge the digital divide by providing computer education to children from low-income families.",
    date: "2023-01-15",
    author: "Balakrishnan Reddiar",
    category: "Education",
    image: "/image/BlogLitracy.jpeg",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === activeCategory))
    }
  }, [activeCategory])

  const categories = ["All", "Education", "Health", "Food"]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/*y-center">*/}
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text mb-2">Loading Blog Posts</h2>
          <p className="text-gray-600">Please wait while we fetch our latest articles...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/logo.png"
            alt="Blog background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <div className="flex items-center">
            <Link href="/" className="hover:text-pink-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-semibold mb-2 block">
              Our Stories & News
            </span>
            <h2 className="text-3xl font-bold">Latest Articles & Blog Posts</h2>
          </div>

          {/* Blog Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant="outline"
                className={`${
                  activeCategory === category
                    ? "border-pink-500 text-pink-500 bg-pink-50"
                    : "border-gray-200 hover:border-pink-500 hover:text-pink-500"
                } transition-all duration-300`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blood%20camp%20at%20APJ%20ABDUL%20KALAM%20birthday.jpg-35nekjQKLhr2lucAVd8IuPhUQlVddJ.jpeg"
                    alt="Featured blog post"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-500 transition-colors duration-300">
                    Celebrating Dr. APJ Abdul Kalam's Legacy Through Service
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">October 15, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-sm">Mariyappan Pandi</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Inspired by Dr. APJ Abdul Kalam's vision, YOUR DREAMS FOUNDATION was created by friends who believe
                    in humanity and charity. Learn about our journey, our mission, and how we're working to create
                    positive change in our communities.
                  </p>
                  <Link href="/blog/featured">
                    <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                      Read Full Article
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <span className="text-sm font-medium text-gray-600">{post.author.charAt(0)}</span>
                          </div>
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="ghost" className="text-pink-500 hover:text-pink-600 p-0 h-auto">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">😢</div>
              <h3 className="text-xl font-bold mb-2">No posts found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any blog posts in the "{activeCategory}" category.</p>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-50"
                onClick={() => setActiveCategory("All")}
              >
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">
              Stay updated with our latest news, events, and stories. We promise not to spam your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              />
              <Button className="bg-white text-pink-500 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

