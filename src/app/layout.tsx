'use client'
import React from 'react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yuan's Blog",
  description: "Personal Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-10">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">Yuan</a>
            <div className="space-x-8">
              <a href="/posts" className="hover:text-gray-600">Posts</a>
              <a href="/projects" className="hover:text-gray-600">Projects</a>
              <a href="/about" className="hover:text-gray-600">About</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 pt-24">
          {children}
        </main>
      </body>
    </html>
  )
} 