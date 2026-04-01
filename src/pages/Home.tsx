import { motion } from "motion/react"
import { Button } from "../components/ui/button"
import { Utensils, Building2, CreditCard, MapPin, Phone, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

const galleryImages = [
  { src: "https://picsum.photos/seed/panzerotto1/800/600", title: "Panzerotti caldi", alt: "Panzerotto 1" },
  { src: "https://picsum.photos/seed/focaccia1/800/600", title: "Focacce ripiene", alt: "Focaccia 1" },
  { src: "https://picsum.photos/seed/sandwich1/800/600", title: "Sandwich gustosi", alt: "Sandwich 1" },
  { src: "https://picsum.photos/seed/piatto1/800/600", title: "Primi piatti", alt: "Piatto 1" },
  { src: "https://picsum.photos/seed/polpette1/800/600", title: "Polpette al sugo", alt: "Polpette 1" },
  { src: "https://picsum.photos/seed/panzerotto2/800/600", title: "Panzerotto classico", alt: "Panzerotto 2" },
]

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Me Dah Rosticceria"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              Street Food Fresco a <span className="text-primary">Isola</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-100 mb-10 font-medium drop-shadow-md">
              Panzerotti, focacce e menu pranzo veloci.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg" asChild>
              <Link to="/menu">Scopri il Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Rows */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Menu Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-100 h-64 rounded-2xl flex items-center justify-center">
              <Utensils className="h-24 w-24 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Il Nostro Menu</h2>
              <p className="text-zinc-600 mb-8 text-lg">Scopri la nostra selezione di panzerotti, focacce e specialità fresche.</p>
              <Button asChild>
                <Link to="/menu">Vai al Menu</Link>
              </Button>
            </div>
          </div>

          {/* Convenzioni Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Convenzioni Aziendali</h2>
              <p className="text-zinc-600 mb-8 text-lg">Offri ai tuoi dipendenti una pausa pranzo di qualità, veloce e conveniente.</p>
              <Button asChild>
                <Link to="/convenzioni">Scopri le Convenzioni</Link>
              </Button>
            </div>
            <div className="bg-zinc-100 h-64 rounded-2xl flex items-center justify-center order-1 md:order-2">
              <Building2 className="h-24 w-24 text-secondary" />
            </div>
          </div>

          {/* Fidelity Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-100 h-64 rounded-2xl flex items-center justify-center">
              <CreditCard className="h-24 w-24 text-primary" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Fidelity Card</h2>
              <p className="text-zinc-600 mb-8 text-lg">Iscriviti alla nostra Fidelity Card e richiedila al locale per sconti e vantaggi esclusivi.</p>
            </div>
          </div>

          {/* Details & Gallery Row */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-zinc-900 text-center">Il Locale</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, index) => (
                <img key={index} src={img.src} alt={img.alt} className="rounded-xl aspect-square object-cover" referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
