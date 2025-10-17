"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const whatsappNumber = "+919008646205" // Replace with actual number
  const whatsappMessage = "Hi! I would like to know more about your dental services."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Smile, Our Priority
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience world-class dental care with our team of expert specialists. We combine cutting-edge
                technology with compassionate care to give you the smile you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <MessageCircle size={20} />
                  Connect on WhatsApp
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Specialists</p>
              </div>
            </div>
          </div>

          {/* Right - Doctor Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square overflow-hidden">
                <img
                  src="/professional-dentist-doctor-male.jpg"
                  alt="Dr. Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl aspect-square overflow-hidden">
                <img
                  src="/professional-dentist-female-doctor.jpg"
                  alt="Dr. Priya Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square overflow-hidden">
                <img
                  src="/professional-orthodontist-specialist.jpg"
                  alt="Dr. Amit Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl aspect-square overflow-hidden">
                <img
                  src="/professional-dental-surgeon.jpg"
                  alt="Dr. Neha Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
