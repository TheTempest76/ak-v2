"use client"

import { MapPin, Clock, Stethoscope, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeServices() {
  const whatsappNumber = "+919876543210" // Replace with actual number
  const whatsappMessage = "Hi! I'm interested in your home dental services in Bangalore."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const homeServiceFeatures = [
    {
      icon: MapPin,
      title: "Bangalore Wide Coverage",
      description:
        "We provide home dental services across all major areas of Bangalore including Indiranagar, Koramangala, Whitefield, Marathahalli, and more.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Book appointments at your convenience. We offer flexible time slots including weekends and evening appointments.",
    },
    {
      icon: Stethoscope,
      title: "Professional Care at Home",
      description:
        "Our experienced dentists bring advanced equipment and sterilized instruments to provide quality dental care in the comfort of your home.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Home Dental Services in Bangalore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional dental care delivered to your doorstep across Bangalore. No need to visit our clinic—we come to
            you!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {homeServiceFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Services Offered */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Services Available at Your Home</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Routine check-ups and cleanings</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Fillings and cavity treatment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Teeth whitening and cosmetic treatments</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Scaling and polishing</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Emergency dental care</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Orthodontic consultations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Denture adjustments and repairs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Preventive care and oral hygiene guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">Ready to experience convenient dental care at home?</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6">
              <MessageCircle size={24} />
              Book Home Service on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
