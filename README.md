# Me Dah Rosticceria - Website

Questo è il codice sorgente per il sito web di "Me Dah Rosticceria", sviluppato con React, Tailwind CSS e Vite.

## Struttura del progetto

Il progetto è strutturato come una Single Page Application (SPA) utilizzando React Router per la navigazione.

- `src/components/`: Componenti riutilizzabili (Navbar, Footer, UI components).
- `src/pages/`: Pagine principali (Home, Convenzioni).
- `src/lib/`: Utility functions (es. `cn` per Tailwind).
- `src/App.tsx`: Configurazione del routing.
- `src/index.css`: Configurazione globale di Tailwind CSS e variabili di tema.

## Requisiti

- Node.js (v18 o superiore)
- npm o yarn

## Installazione e Avvio Locale

1. Clona il repository o copia i file in una nuova cartella.
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

## Configurazione EmailJS

Per far funzionare i form di contatto e prenotazione, è necessario configurare EmailJS:

1. Crea un account su [EmailJS](https://www.emailjs.com/).
2. Aggiungi un servizio email (es. Gmail).
3. Crea un template per le prenotazioni e uno per le convenzioni.
4. Crea un file `.env` nella root del progetto e aggiungi la tua Public Key:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=la_tua_public_key
   ```
5. Aggiorna i file `src/pages/Home.tsx` e `src/pages/Convenzioni.tsx` per utilizzare la funzione `emailjs.send()` con il tuo `serviceID` e `templateID`.

## Deploy su Vercel

Questo progetto è pronto per essere deployato su Vercel.

1. Inizializza un repository Git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Pusha il codice su GitHub.
3. Vai su [Vercel](https://vercel.com/), crea un nuovo progetto e collegalo al tuo repository GitHub.
4. Vercel rileverà automaticamente che si tratta di un progetto Vite e configurerà i comandi di build (`npm run build`) e la cartella di output (`dist`).
5. Aggiungi le variabili d'ambiente (es. `VITE_EMAILJS_PUBLIC_KEY`) nelle impostazioni del progetto su Vercel.
6. Clicca su "Deploy".

## Note sugli Assets

- **Logo**: Attualmente viene utilizzato un placeholder CSS per il logo. Per utilizzare l'immagine `Logo.jpg`, posizionala nella cartella `public/` e aggiorna il tag `<img>` in `src/components/Navbar.tsx` e `src/pages/Home.tsx`.
- **Galleria**: Le immagini della galleria utilizzano placeholder di Picsum. Per utilizzare le immagini reali (`1.jpg` - `11.jpg`), posizionale in `public/gallery/` e aggiorna l'array `galleryImages` in `src/pages/Home.tsx`.
