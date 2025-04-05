import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ToastProvider } from "@/components/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "YOUR DREAMS FOUNDATION - Inspired by Dr. APJ Abdul Kalam",
  description: "Created by friends who believe in humanity and charity, aspiring to be modern day social reformers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ToastProvider />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: false
              });
            });
          `,
          }}
        />
      </body>
    </html>
  )
}

import './globals.css'