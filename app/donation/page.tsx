import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import DonationForm from "@/components/donation-form"

export default function DonationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/logo.png"
            alt="Donation background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Donation</h1>
          <div className="flex items-center">
            <a href="/" className="hover:text-orange-300">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Donation</span>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[300px]">
                  <Image
                    src="/image/DonationPage.jpeg"
                    alt="Donation campaign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Support Kids by Raising Valuable Donations</h2>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-500 font-semibold">0%</span>
                      <span className="text-gray-600">Goal: ₹30,000</span>
                    </div>
                    <Progress value={3.3} className="h-2 bg-gray-200" />
                    <div className="mt-1 text-gray-600">Raised: ₹1000</div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Your donation will help us provide food, education, and healthcare to children in need. Every
                    contribution makes a difference in their lives and helps build a better future.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <h3 className="text-xl font-bold text-orange-500">10+</h3>
                      <p className="text-gray-600">Donors</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <h3 className="text-xl font-bold text-orange-500">₹1000</h3>
                      <p className="text-gray-600">Raised</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Custom Donate Now</h2>
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

