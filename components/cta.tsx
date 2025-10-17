"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  const whatsappNumber = "+919008646205" // Replace with actual number
  const whatsappMessage = "Hi! I would like to book an appointment at AK Multispeciality Dental Clinic."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready for Your Perfect Smile?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get in touch with us today and schedule your consultation with our expert dental specialists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-lg">
              <MessageCircle size={24} />
              Chat on WhatsApp
            </Button>
          </a>
          <Button variant="outline" className="w-full sm:w-auto gap-2 px-8 py-6 text-lg bg-transparent">
            <Phone size={24} />
            Call Us
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-bold text-primary mb-2">📍</p>
            <p className="font-semibold text-foreground">Location</p>
            <p className="text-muted-foreground">123 Dental Street, City Center</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-2">⏰</p>
            <p className="font-semibold text-foreground">Hours</p>
            <p className="text-muted-foreground">Mon-Sat: 9AM - 8PM</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-2">📞</p>
            <p className="font-semibold text-foreground">Phone</p>
            <p className="text-muted-foreground">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  )
}
