import { Instagram, MapPin, Clock, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Social */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary tracking-wider uppercase">Meh Da</h3>
            <p className="text-zinc-400 text-sm">
              Street Food Fresco a Isola. Panzerotti, focacce e menu pranzo veloci.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/meh_da_rosticceria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contatti</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>Via Thaon di Revel 4<br />Milano, Italy 20159</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>+39 02 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a href="mailto:mehda@rosticceria.it" className="hover:text-white transition-colors">
                  mehda@rosticceria.it
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Orari</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary shrink-0" />
                <div>
                  <p><span className="text-white font-medium">Mar - Sab:</span> 11:30 - 15:00 / 18:00 - 22:00</p>
                  <p className="mt-1"><span className="text-white font-medium">Domenica:</span> 11:30 - 15:00</p>
                  <p className="mt-1 text-primary">Lunedì Chiusi</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Me Dah Rosticceria. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
