'use client'
import React from 'react'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-4">Hi, I'm Yuan 👋</h1>
        <p className="text-gray-600 leading-relaxed">
          Web Developer, Open Sourceror, Lifelong Learner.
          <br />
          Currently focusing on Web Development and System Design.
        </p>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <div className="space-y-4">
          <article className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">
              <a href="/posts/example" className="hover:text-gray-600">
                Example Post Title
              </a>
            </h3>
            <time className="text-sm text-gray-500">2024-03-20</time>
          </article>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Project Name</h3>
            <p className="text-sm text-gray-600">Project description goes here.</p>
          </div>
        </div>
      </section>
    </div>
  )
} 