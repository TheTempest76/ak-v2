"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">AK Multispeciality</h1>
              <p className="text-xs text-muted-foreground">Dental Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
