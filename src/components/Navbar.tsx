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
        {/* Aumentata l'altezza della navbar da h-20 a h-24 (o h-28 se vuoi esagerare) */}
        <div className="flex items-center justify-between h-24 md:h-28">
          
          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu} className="group flex items-center">
              <img 
                src="/logo2.png" 
                alt="Me Dah Rosticceria Logo" 
                /* Aumentata la grandezza dell'immagine: h-20 su mobile, h-24 su desktop */
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback migliorato */}
              <div className="hidden min-w-[150px] h-16 bg-white flex items-center justify-center border border-zinc-100 rounded shadow-sm">
                <span className="text-primary font-bold text-xl tracking-wider uppercase">Me Dah</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="hover:text-primary px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="hover:text-primary px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/convenzioni"
                className="hover:text-primary px-3 py-2 rounded-md text-base font-semibold transition-colors"
              >
                Convenzioni
              </Link>
              
              {/* Carrello Desktop */}
              <Link to="/menu" className="relative p-2 hover:text-primary transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
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
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/menu" className="relative p-2 hover:text-primary transition-colors">
              <ShoppingCart className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-primary hover:bg-zinc-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
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
            className="md:hidden bg-white border-b border-zinc-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className="hover:text-primary block px-3 py-2 text-xl font-semibold border-b border-zinc-50"
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={closeMenu}
                className="hover:text-primary block px-3 py-2 text-xl font-semibold border-b border-zinc-50"
              >
                Menu
              </Link>
              <Link
                to="/convenzioni"
                onClick={closeMenu}
                className="hover:text-primary block px-3 py-2 text-xl font-semibold border-b border-zinc-50"
              >
                Convenzioni
              </Link>
              <a
                href="https://www.instagram.com/meh_da_rosticceria/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary flex items-center px-3 py-2 text-xl font-semibold text-zinc-600"
              >
                <Instagram className="h-6 w-6 mr-3" />
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
