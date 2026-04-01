import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { ShoppingCart, Trash2, Send, Plus, Minus } from "lucide-react"
import { useCart } from "../context/CartContext"

const menuData = [
  {
    category: "Menù Combo Panzerotti",
    description: "con una bibita o birra a scelta",
    items: [
      { id: 1, name: "Panzerotto con Pomodoro e Mozzarella", price: 5.50 },
      { id: 2, name: "Panzerotto con Pomodoro, Mozzarella e Prosciutto Cotto", price: 6.50 },
      { id: 3, name: "Panzerotto con Pomodoro, Mozzarella e Salame", price: 6.50 },
      { id: 4, name: "Panzerotto con Pomodoro, Mozzarella e Spianata Piccante", price: 6.50 },
      { id: 5, name: "Panzerotto con Prosciutto Cotto, Mozzarella e Funghi", price: 7.00 },
      { id: 6, name: "Panzerotto con Parmigiana di Melanzane e Mozzarella", price: 7.00 },
      { id: 7, name: "Panzerotto con Scamorza Affumicata, Spianata Piccante e Gorgonzola", price: 7.00 },
      { id: 8, name: "Panzerotto con Mozzarella, Mortadella e Crema di Pistacchio", price: 7.00 },
      { id: 9, name: "Panzerotto Rustico con Pomodoro, Mozzarella e Prosciutto Cotto", price: 7.00 },
    ]
  },
  {
    category: "Panzerotti",
    items: [
      { id: 10, name: "Panzerotto con Pomodoro e Mozzarella", price: 4.50 },
      { id: 11, name: "Panzerotto con Pomodoro, Mozzarella e Prosciutto Cotto", price: 5.50 },
      { id: 12, name: "Panzerotto con Pomodoro, Mozzarella e Salame", price: 5.50 },
      { id: 13, name: "Panzerotto con Pomodoro, Mozzarella e Spianata Piccante", price: 5.50 },
      { id: 14, name: "Panzerotto con Prosciutto Cotto, Mozzarella e Funghi", price: 6.00 },
      { id: 15, name: "Panzerotto con Scamorza Affumicata, Spianata Piccante e Gorgonzola", price: 6.50 },
      { id: 16, name: "Panzerotto Rustico con Pomodoro, Mozzarella e Prosciutto Cotto", price: 6.50 },
    ]
  },
  {
    category: "Focacce",
    items: [
      { id: 17, name: "Focaccia con Pomodorini e Origano", price: 3.00 },
    ]
  },
  {
    category: "Specialità",
    items: [
      { id: 18, name: "Polpetta al Sugo con Macinato e Ricotta", price: 2.50 },
    ]
  },
  {
    category: "Fritti",
    items: [
      { id: 19, name: "Crocchetta di Patate con Mortadella", price: 3.00 },
      { id: 20, name: "Würstel in Carrozza", price: 4.00 },
    ]
  },
  {
    category: "Extra",
    items: [
      { id: 21, name: "Ketchup in Bustina", price: 0.30 },
      { id: 22, name: "Maionese in Bustina", price: 0.30 },
    ]
  },
  {
    category: "Bevande",
    items: [
      { id: 23, name: "Acqua Naturale 50cl", price: 2.00 },
      { id: 24, name: "Acqua Frizzante 50cl", price: 2.00 },
      { id: 25, name: "Coca-Cola Sleek 33cl", price: 3.00 },
      { id: 26, name: "Coca-Cola Zero Can 33 cl", price: 3.00 },
      { id: 27, name: "Fanta Original Sleek 33 cl", price: 3.00 },
      { id: 28, name: "Sprite Sleek Can 330 ml", price: 3.00 },
      { id: 29, name: "Lemonsoda in Lattina 33cl", price: 3.00 },
      { id: 30, name: "Estathé al Limone in Lattina 33cl", price: 3.00 },
      { id: 31, name: "Estathé alla Pesca in Lattina 33cl", price: 3.00 },
    ]
  },
  {
    category: "Birre",
    items: [
      { id: 32, name: "Peroni 33cl", price: 3.00 },
      { id: 33, name: "Ichnusa non Filtrata", price: 4.00 },
    ]
  }
]

export function Menu() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart()
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    fidelityCode: ""
  })

  const saveToBrevo = async () => {
    try {
      // Formatta il numero di telefono per Brevo (es. +39...)
      let formattedPhone = customerDetails.phone.replace(/\s+/g, '');
      if (!formattedPhone.startsWith('+')) {
        formattedPhone = '+39' + formattedPhone;
      }

      const contactData = {
        email: customerDetails.email,
        attributes: {
          FIRSTNAME: customerDetails.name,
          SMS: formattedPhone
        },
        listIds: [33],
        updateEnabled: true
      };

      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': (import.meta as any).env.VITE_BREVO_API_KEY || ''
        },
        body: JSON.stringify(contactData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to save/update Brevo contact: ${JSON.stringify(errorData)}`);
      }
      console.log('Contact saved/updated in Brevo successfully');
    } catch (error) {
      console.error('Brevo error:', error);
    }
  };

  const sendWhatsAppOrder = () => {
    if (!customerDetails.name || !customerDetails.phone) {
      alert("Per favore inserisci nome e telefono.")
      return
    }

    saveToBrevo()

    const message = `Nuovo ordine da ${customerDetails.name} (Fidelity: ${customerDetails.fidelityCode || 'Nessuno'}):
${cart.map(i => `- ${i.quantity}x ${i.item.name} (€${(i.item.price * i.quantity).toFixed(2)})`).join('\n')}
Totale: €${total.toFixed(2)}
Telefono: ${customerDetails.phone}
Email: ${customerDetails.email}`

    const whatsappUrl = `https://wa.me/393883460668?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 mb-12 text-center">Il Nostro Menu</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 space-y-12">
          {menuData.map(category => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-zinc-900 mb-2 border-b pb-2">{category.category}</h2>
              {category.description && <p className="text-sm text-zinc-500 mb-6">{category.description}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.items.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.name}</h4>
                      <p className="text-primary font-bold">€{item.price.toFixed(2)}</p>
                    </div>
                    <Button onClick={() => addToCart(item)} size="sm">Aggiungi</Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-lg sticky top-24">
            <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" /> Il tuo ordine
            </h3>
            {cart.length === 0 ? (
              <p className="text-zinc-500">Il carrello è vuoto</p>
            ) : (
              <div className="space-y-4">
                {cart.map(i => (
                  <div key={i.item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{i.item.name}</p>
                      <p className="text-xs text-zinc-500">€{i.item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(i.item.id, i.quantity - 1)}><Minus className="h-3 w-3" /></Button>
                      <span className="font-bold">{i.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(i.item.id, i.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(i.item.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 font-bold text-xl flex justify-between">
                  <span>Totale</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="space-y-4 mt-6">
                  <Input placeholder="Nome e Cognome" value={customerDetails.name} onChange={e => setCustomerDetails({...customerDetails, name: e.target.value})} />
                  <Input placeholder="Email" type="email" value={customerDetails.email} onChange={e => setCustomerDetails({...customerDetails, email: e.target.value})} />
                  <Input placeholder="Telefono" type="tel" value={customerDetails.phone} onChange={e => setCustomerDetails({...customerDetails, phone: e.target.value})} />
                  <Input placeholder="Codice Fidelity Card" value={customerDetails.fidelityCode} onChange={e => setCustomerDetails({...customerDetails, fidelityCode: e.target.value})} />
                  <Button className="w-full flex items-center gap-2" onClick={sendWhatsAppOrder}>
                    <Send className="h-4 w-4" /> Invia Ordine WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
