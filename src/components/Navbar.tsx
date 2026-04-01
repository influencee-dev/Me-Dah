import { Link } from "react-router-dom"
import { Instagram, Menu, X, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useCart } from "../context/CartContext"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-zinc-900 shadow-sm border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="Me Dah Rosticceria Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback se l'immagine non è ancora stata caricata
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-[150px] h-[60px] bg-white flex items-center justify-center border border-zinc-100 rounded shadow-sm">
                <span className="text-primary font-bold text-lg tracking-wider uppercase">Me Dah</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/convenzioni"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Convenzioni
              </Link>
              <Link to="/menu" className="relative p-2 hover:text-primary transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <a
                href="https://www.instagram.com/meh_da_rosticceria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/menu" className="relative p-2 hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-primary hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={closeMenu}
                className="hover:bg-zinc-50 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={closeMenu}
                className="hover:bg-zinc-50 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Menu
              </Link>
              <Link
                to="/convenzioni"
                onClick={closeMenu}
                className="hover:bg-zinc-50 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Convenzioni
              </Link>
              <a
                href="https://www.instagram.com/meh_da_rosticceria/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-zinc-50 hover:text-primary flex items-center px-3 py-2 rounded-md text-base font-medium text-zinc-600"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
