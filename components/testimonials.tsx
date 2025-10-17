"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "Excellent service! The doctors are highly professional and the clinic is very clean. I felt completely comfortable during my treatment.",
    rating: 5,
    image: "/professional-man-avatar.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Engineer",
    content:
      "Best dental clinic in the city! The staff is friendly and the treatment was painless. Highly recommended to everyone.",
    rating: 5,
    image: "/professional-woman-avatar.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Entrepreneur",
    content:
      "I got my teeth whitening done here and the results are amazing. The doctors explained everything clearly before the procedure.",
    rating: 5,
    image: "/professional-man-avatar-2.jpg",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Teacher",
    content:
      "My child was nervous about dental treatment, but the pediatric team made it so comfortable and fun. Great experience!",
    rating: 5,
    image: "/professional-woman-avatar-2.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground">Real experiences from our satisfied patients</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>

          <p className="text-xl text-foreground mb-8 leading-relaxed italic">"{current.content}"</p>

          <div className="flex items-center gap-4">
            <img
              src={current.image || "/placeholder.svg"}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <p className="font-bold text-foreground">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-border hover:bg-muted transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-border hover:bg-muted transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${index === currentIndex ? "bg-primary w-8" : "bg-border"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
