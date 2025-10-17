"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Smile, Zap, Shield, Sparkles } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Smile,
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and preventive treatments for optimal oral health.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with teeth whitening, veneers, and smile design treatments.",
    color: "from-teal-500/20 to-teal-600/20",
  },
  {
    id: 3,
    icon: Zap,
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces and clear aligner treatments for a perfect alignment.",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    id: 4,
    icon: Shield,
    title: "Implants & Prosthetics",
    description: "Restore missing teeth with advanced dental implants and prosthetic solutions.",
    color: "from-blue-400/20 to-blue-500/20",
  },
  {
    id: 5,
    icon: Smile,
    title: "Root Canal Treatment",
    description: "Advanced endodontic treatment to save your natural teeth and eliminate pain.",
    color: "from-teal-400/20 to-teal-500/20",
  },
  {
    id: 6,
    icon: Sparkles,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a friendly and comfortable environment.",
    color: "from-cyan-400/20 to-cyan-500/20",
  },
]

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const getVisibleServices = () => {
    const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
    const visible = []
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(services[(currentIndex + i) % services.length])
    }
    return visible
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental solutions tailored to meet all your oral health needs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleServices().map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className={`bg-gradient-to-br ${service.color} border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow`}
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-muted transition"
              aria-label="Previous services"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-muted transition"
              aria-label="Next services"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${index === currentIndex ? "bg-primary w-8" : "bg-border"}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
