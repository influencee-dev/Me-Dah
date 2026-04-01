import { motion } from "motion/react"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { Building2, Percent, Clock, BadgeCheck, Truck, UtensilsCrossed } from "lucide-react"

export function Convenzioni() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Pranzo in 45 min",
      description: "Servizio prioritario per garantire una pausa pranzo veloce e senza stress.",
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8 text-secondary" />,
      title: "Prezzi Fissi",
      description: "Menu completi a prezzo fisso (es. 15€) per facilitare i rimborsi spesa.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Menu Giornaliero",
      description: "Proposte sempre nuove per variare la dieta dei tuoi collaboratori.",
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Delivery Uffici",
      description: "Consegna gratuita per uffici vicini (es. Talent Garden) con ordini cumulativi.",
    },
  ]

  const testimonials = [
    {
      company: "Talent Garden",
      quote: "Pranzi perfetti per il team! Veloci, sani e super gustosi.",
      author: "HR Manager",
    },
    {
      company: "Tech Startup Isola",
      quote: "La convenzione con Me Dah ha risolto il problema della pausa pranzo.",
      author: "Office Manager",
    },
    {
      company: "Studio Legale",
      quote: "Ottima qualità e servizio impeccabile. I panzerotti sono una garanzia.",
      author: "Partner",
    },
  ]

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight">
              Convenzioni Aziendali per <span className="text-primary">Pranzi Veloci</span> a Isola
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
              Offri ai tuoi dipendenti una pausa pranzo di qualità, veloce e conveniente.
              Scopri i vantaggi delle nostre convenzioni su misura.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg" onClick={() => document.getElementById('richiedi')?.scrollIntoView({ behavior: 'smooth' })}>
              Richiedi Informazioni
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">I Vantaggi per la tua Azienda</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 border border-zinc-100 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Pranzo Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Menu Pranzo</h2>
            <p className="text-zinc-600">Le nostre proposte per la tua pausa pranzo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Menù Combo Panzerotti</h3>
              <div className="space-y-4">
                {/* Panzerotti combo items */}
                <div className="flex justify-between border-b border-zinc-200 pb-2"><span>Panzerotto Pomodoro e Mozzarella</span><span className="font-bold">€5.50</span></div>
                <div className="flex justify-between border-b border-zinc-200 pb-2"><span>Panzerotto Pomodoro, Mozzarella e Prosciutto</span><span className="font-bold">€6.50</span></div>
                <div className="flex justify-between border-b border-zinc-200 pb-2"><span>Panzerotto Pomodoro, Mozzarella e Salame</span><span className="font-bold">€6.50</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Panzerotti</h3>
              <div className="space-y-4">
                {/* Panzerotti items */}
                <div className="flex justify-between border-b border-zinc-200 pb-2"><span>Panzerotto Pomodoro e Mozzarella</span><span className="font-bold">€4.50</span></div>
                <div className="flex justify-between border-b border-zinc-200 pb-2"><span>Panzerotto Pomodoro, Mozzarella e Prosciutto</span><span className="font-bold">€5.50</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Già 10+ aziende partner</h2>
            <p className="text-zinc-600">Cosa dicono di noi le aziende della zona Isola.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm relative"
              >
                <div className="text-primary text-6xl absolute top-4 left-4 opacity-10 font-serif">"</div>
                <div className="relative z-10">
                  <p className="text-zinc-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-zinc-900 font-bold">{testimonial.company}</p>
                    <p className="text-zinc-500 text-sm">{testimonial.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="richiedi" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Attiva una Convenzione</h2>
            <p className="text-zinc-600 text-lg">
              Compila il modulo per ricevere una proposta personalizzata per la tua azienda.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-xl">
            <iframe 
              width="540" 
              height="800" 
              src="https://996d0fa4.sibforms.com/serve/MUIFABGEAsa9cDcz_AXj3RhaXDFrikFRZXozhrCWsx91jYnRDDon-QhuJ7EEVVPctjQdKv3UzLTUUKBWLLs__6iWm3WaMuVE-AIR_rJCqorDy0YBzeaSWrVNmQvygMe0NIviIAKds3i71iJkM6Qm0g7Ox-waK19bgDgdKGvmlc3uTpQD3uzmztj3-Li3LklpAO0IpI-sH96ewdlB" 
              frameBorder="0" 
              scrolling="no" 
              allowFullScreen 
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
