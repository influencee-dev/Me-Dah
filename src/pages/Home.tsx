import { motion } from "motion/react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Utensils, Clock, MapPin, Phone, Instagram, Send } from "lucide-react"

// Form Schema
const reservationSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve avere almeno 2 caratteri." }),
  phone: z.string().min(8, { message: "Inserisci un numero di telefono valido." }),
  date: z.string().min(1, { message: "Seleziona una data." }),
  time: z.string().min(1, { message: "Seleziona un orario." }),
  guests: z.string().min(1, { message: "Seleziona il numero di persone." }),
  notes: z.string().optional(),
})

type ReservationFormValues = z.infer<typeof reservationSchema>

// Gallery Images (Picsum placeholders for 1.jpg to 11.jpg)
const galleryImages = [
  { src: "https://picsum.photos/seed/panzerotto1/800/600", title: "Panzerotti caldi", alt: "Panzerotto 1" },
  { src: "https://picsum.photos/seed/focaccia1/800/600", title: "Focacce ripiene", alt: "Focaccia 1" },
  { src: "https://picsum.photos/seed/sandwich1/800/600", title: "Sandwich gustosi", alt: "Sandwich 1" },
  { src: "https://picsum.photos/seed/piatto1/800/600", title: "Primi piatti", alt: "Piatto 1" },
  { src: "https://picsum.photos/seed/polpette1/800/600", title: "Polpette al sugo", alt: "Polpette 1" },
  { src: "https://picsum.photos/seed/panzerotto2/800/600", title: "Panzerotto classico", alt: "Panzerotto 2" },
  { src: "https://picsum.photos/seed/focaccia2/800/600", title: "Focaccia farcita", alt: "Focaccia 2" },
  { src: "https://picsum.photos/seed/piatto2/800/600", title: "Secondi piatti", alt: "Piatto 2" },
  { src: "https://picsum.photos/seed/streetfood1/800/600", title: "Street food", alt: "Street food 1" },
  { src: "https://picsum.photos/seed/panzerotto3/800/600", title: "Panzerotto salume", alt: "Panzerotto 3" },
  { src: "https://picsum.photos/seed/focaccia3/800/600", title: "Focaccia calda", alt: "Focaccia 3" },
]

export function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
  })

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true)
    // Simulate EmailJS submission
    console.log("Form data:", data)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/rosticceria-hero/1920/1080"
            alt="Me Dah Rosticceria"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Placeholder for Logo.jpg */}
            <div className="w-48 h-48 mx-auto mb-8 bg-white rounded-full flex items-center justify-center border-4 border-primary shadow-2xl overflow-hidden">
               <span className="text-primary font-bold text-3xl tracking-wider uppercase">Me Dah</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              Street Food Fresco a <span className="text-primary">Isola</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-100 mb-10 font-medium drop-shadow-md">
              Panzerotti, focacce e menu pranzo veloci.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full w-full sm:w-auto shadow-lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                Scopri il Menu
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-zinc-900 transition-colors" onClick={() => document.getElementById('prenota')?.scrollIntoView({ behavior: 'smooth' })}>
                Prenota Ora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Pranzo Section */}
      <section id="menu" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Menu Pranzo</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-zinc-600 max-w-2xl mx-auto text-lg">
              Soluzioni veloci e gustose per la tua pausa pranzo a Isola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Menu 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-4 rounded-bl-xl text-lg">
                €7
              </div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Primo</h3>
              <p className="text-zinc-600">Primo del giorno + acqua</p>
            </motion.div>

            {/* Menu 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-4 rounded-bl-xl text-lg">
                €9
              </div>
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Secondo</h3>
              <p className="text-zinc-600">2 polpette al sugo o secondo del giorno + contorno + acqua</p>
            </motion.div>

            {/* Menu 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-primary/20 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-4 rounded-bl-xl text-lg">
                €13
              </div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Completo</h3>
              <p className="text-zinc-600">Primo + Secondo + acqua</p>
            </motion.div>

            {/* Menu 4 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-secondary text-white font-bold py-1 px-4 rounded-bl-xl text-lg">
                €5.5
              </div>
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Panzerotto</h3>
              <p className="text-zinc-600">Panzerotto (classico o con salume) + acqua</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-primary">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Orari</h3>
              <p className="text-zinc-600">Mar - Sab: 11:30 - 15:00 / 18:00 - 22:00</p>
              <p className="text-zinc-600">Domenica: 11:30 - 15:00</p>
              <p className="text-primary font-medium mt-2">Lunedì Chiusi</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-primary">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Indirizzo</h3>
              <p className="text-zinc-600">Via Thaon di Revel 4</p>
              <p className="text-zinc-600">Milano, Italy 20159</p>
              <p className="text-zinc-500 mt-2 font-medium">Zona Isola</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-secondary">
                <Instagram className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Social</h3>
              <p className="text-zinc-600 mb-4">Seguici per le novità del giorno</p>
              <a 
                href="https://www.instagram.com/meh_da_rosticceria/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-primary transition-colors font-bold"
              >
                @meh_da_rosticceria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Le Nostre Specialità</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-xl aspect-square bg-zinc-200"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="prenota" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Prenota Ora</h2>
            <p className="text-zinc-600 text-lg">
              Prenota il tuo tavolo o il tuo asporto. Ti risponderemo al più presto.
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
                <p className="text-zinc-600">Ti contatteremo a breve per confermare la prenotazione.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-700">Nome e Cognome</Label>
                    <Input
                      id="name"
                      placeholder="Mario Rossi"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-primary text-sm">{errors.name.message}</p>}
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

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-zinc-700">Data</Label>
                    <Input
                      id="date"
                      type="date"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("date")}
                    />
                    {errors.date && <p className="text-primary text-sm">{errors.date.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-zinc-700">Orario</Label>
                    <Input
                      id="time"
                      type="time"
                      className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary"
                      {...register("time")}
                    />
                    {errors.time && <p className="text-primary text-sm">{errors.time.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-zinc-700">Numero Persone</Label>
                  <select
                    id="guests"
                    className="flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    {...register("guests")}
                  >
                    <option value="">Seleziona...</option>
                    <option value="1">1 Persona</option>
                    <option value="2">2 Persone</option>
                    <option value="3">3 Persone</option>
                    <option value="4">4 Persone</option>
                    <option value="5">5 Persone</option>
                    <option value="6+">6+ Persone</option>
                  </select>
                  {errors.guests && <p className="text-primary text-sm">{errors.guests.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-zinc-700">Note (Opzionale)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Intolleranze, richieste speciali, asporto..."
                    className="bg-white border-zinc-300 text-zinc-900 focus-visible:ring-primary min-h-[100px]"
                    {...register("notes")}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg rounded-xl font-bold shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Invio in corso..." : "Prenota Ora"}
                </Button>
                
                <p className="text-center text-zinc-500 text-xs mt-4">
                  Inviando il modulo accetti la nostra privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
