export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AK</span>
              </div>
              <span className="font-bold text-foreground">AK Multispeciality</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing world-class dental care with compassion and expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition">
                  General Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Orthodontics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Implants
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AK Multispeciality Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
