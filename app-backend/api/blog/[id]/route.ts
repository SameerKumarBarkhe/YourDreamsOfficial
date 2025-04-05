import { type NextRequest, NextResponse } from "next/server"

// Sample blog data (same as in the blog route)
const blogPosts = [
  {
    id: "1",
    title: "Children's Education Support at Chembur Children's Home",
    excerpt:
      "Our team distributed books and educational materials to children at Chembur Children's Home, helping them continue their education journey.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "2022-07-29",
    author: "Mariyappan Pandi",
    category: "Education",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/child%20student%20donation%20at%20chembur%20children%20home%20%20at%2029%20july%202022.jpg-ouhqZnhQnUN4MrKTETQP6QF4Wx3bRc.jpeg",
  },
  {
    id: "2",
    title: "Blood Donation Camp at Chembur Shell Colony",
    excerpt:
      "We organized a successful blood donation camp at Chembur Shell Colony, collecting vital blood supplies for local hospitals.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "2020-08-10",
    author: "Nityagajendran Maharajan",
    category: "Health",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blood%20donation%20camp%20at%20chembur%20shell%20colony%20at%2010%20August%202020.jpg-MsZfrS6q7zS5j6WP8myF27q86JcebQ.jpeg",
  },
  {
    id: "3",
    title: "Food Distribution Drive for the Needy in Thane",
    excerpt:
      "Our volunteers distributed food packages to homeless and underprivileged individuals in Thane during the pandemic.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "2020-09-14",
    author: "Padmanathan Maharajan",
    category: "Food",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20doantion%20or%20other%20at%20thane%20at%2014%20sept%202020.jpg-JwAFewn6i9h5RvO1JSVYsQMlD0vkO7.jpeg",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const post = blogPosts.find((post) => post.id === id)

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("Blog post fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 })
  }
}

