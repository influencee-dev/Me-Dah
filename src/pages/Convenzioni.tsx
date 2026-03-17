import { motion } from "motion/react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Building2, Percent, Clock, BadgeCheck, Truck, UtensilsCrossed, Send } from "lucide-react"

const convenzioneSchema = z.object({
  companyName: z.string().min(2, { message: "Il nome dell'azienda deve avere almeno 2 caratteri." }),
  contactName: z.string().min(2, { message: "Inserisci il nome del referente." }),
  email: z.string().email({ message: "Inserisci un'email valida." }),
  phone: z.string().min(8, { message: "Inserisci un numero di telefono valido." }),
  employees: z.string().min(1, { message: "Seleziona il numero di dipendenti." }),
  notes: z.string().optional(),
})

type ConvenzioneFormValues = z.infer<typeof convenzioneSchema>

export function Convenzioni() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConvenzioneFormValues>({
    resolver: zodResolver(convenzioneSchema),
  })

  const onSubmit = async (data: ConvenzioneFormValues) => {
    setIsSubmitting(true)
    // Simulate EmailJS submission
    console.log("Form data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const benefits = [
    {
      icon: <Percent className="h-8 w-8 text-primary" />,
      title: "Sconti 10-20%",
      description: "Sconti esclusivi sui menu pranzo e su tutto il listino per i tuoi dipendenti.",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Pranzo in 45 min",
      description: "Servizio prioritario per garantire una pausa pranzo veloce e senza stress.",
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Badge Aziendale",
      description: "Riconoscimento immediato tramite badge o app per accedere agli sconti.",
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
      quote: "La convenzione con Meh Da ha risolto il problema della pausa pranzo.",
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
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Richiesta Inviata!</h3>
                <p className="text-zinc-600">Il nostro team ti contatterà a breve con una proposta su misura.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-zinc-700">Nome Azienda</Label>
                    <Input
                      id="companyName"
                      placeholder="Es. Tech Corp Srl"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("companyName")}
                    />
                    {errors.companyName && <p className="text-primary text-sm">{errors.companyName.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-zinc-700">Referente HR / Office Manager</Label>
                    <Input
                      id="contactName"
                      placeholder="Mario Rossi"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("contactName")}
                    />
                    {errors.contactName && <p className="text-primary text-sm">{errors.contactName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-700">Email Aziendale</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="mario.rossi@azienda.it"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-primary text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zinc-700">Telefono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+39 333 1234567"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-primary text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employees" className="text-zinc-700">Numero Dipendenti in Sede</Label>
                  <select
                    id="employees"
                    className="flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    {...register("employees")}
                  >
                    <option value="">Seleziona...</option>
                    <option value="1-10">1 - 10</option>
                    <option value="11-50">11 - 50</option>
                    <option value="51-100">51 - 100</option>
                    <option value="100+">Più di 100</option>
                  </select>
                  {errors.employees && <p className="text-primary text-sm">{errors.employees.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-zinc-700">Esigenze Particolari (Opzionale)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Es. Richiesta delivery, menu vegetariani, budget fisso..."
                    className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary min-h-[100px]"
                    {...register("notes")}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg rounded-xl font-bold bg-secondary hover:bg-secondary/90 text-white shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Invio in corso..." : "Richiedi Convenzione"}
                </Button>
                
                <p className="text-center text-zinc-500 text-xs mt-4">
                  I tuoi dati saranno trattati nel rispetto della privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
