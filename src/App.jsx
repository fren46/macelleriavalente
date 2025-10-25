// Vite entrypoint per SPA della Macelleria
// Usa questo file come App.jsx in un progetto Vite React

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Clock, Share2, Copy, ExternalLink } from "lucide-react";

// Importa il logo da /public (in Vite basta <img src="/LOGO_completo_color.png" />)

// === DATI REALI ===
const SHOP_NAME = "Macelleria Valente Vincenzo";
const PHONE_E164 = "+390804968904";
const WHATSAPP_E164 = "+39333111222";
const ADDRESS = "Via Carlo Poerio, 29/d, 70013 Castellana Grotte BA";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Macelleria+Valente+Vincenzo+Castellana+Grotte";
const GOOGLE_REVIEWS_URL = "https://g.page/r/CQg-zrCJ9YAHEAE/review";
const IG_URL = "https://www.instagram.com/macelleriavalentevincenzo/";
const FB_URL = "https://www.facebook.com/macelleriavalentevincenzo";
const base_path = "macelleriavalente.github.io"

const HOURS = [
  { day: "Lunedì", hours: "08:00–13:30, 16:00–21:00" },
  { day: "Martedì", hours: "08:00–13:30, 16:00–21:00" },
  { day: "Mercoledì", hours: "08:00–13:30, 16:00–22:00" },
  { day: "Giovedì", hours: "08:00–13:30" },
  { day: "Venerdì", hours: "08:00–13:30, 16:00–22:00" },
  { day: "Sabato", hours: "08:00–13:30, 16:00–22:00" },
  { day: "Domenica", hours: "Chiuso" },
];

const brand = {
  red: "#CC1425",
  redDark: "#a8101d",
  grey: "#3c3c3b",
};

const ActionButton = ({ href, onClick, icon: Icon, children }) => {
  const base = "w-full inline-flex items-center justify-center gap-2 text-white rounded-2xl py-6 text-lg shadow-md font-sans";
  const colors = "bg-[#CC1425] hover:bg-[#a8101d]";
  const cls = `${base} ${colors}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
        {Icon ? <Icon className="h-5 w-5" /> : null}
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {Icon ? <Icon className="h-5 w-5" /> : null}
      {children}
    </button>
  );
};

export default function App() {
  const telHref = `tel:${PHONE_E164}`;
  const waHref = `https://wa.me/${WHATSAPP_E164.replace("+", "")}`;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      alert("Indirizzo copiato negli appunti ✂️");
    } catch (e) {
      alert("Non sono riuscito a copiare l'indirizzo");
    }
  };

  const sharePage = async () => {
    const shareData = {
      title: SHOP_NAME,
      text: `${SHOP_NAME} — qualità e tradizione. Telefona o scrivici su WhatsApp!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiato! Ora puoi incollarlo dove vuoi.");
      } catch {
        alert("Impossibile copiare il link, prova manualmente.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#2E3136] font-sans flex justify-center px-4">
      <div className="w-full">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 pt-12 pb-8 text-center"
        >
          <div className="mx-auto grid place-items-center">
            <img src={`/${base_path}/LOGO_completo_color2.png`} alt="Logo macelleria" className="h-80 object-contain" />
          </div>
          {/*<h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#3c3c3b]">
            {SHOP_NAME}
          </h1>*/}
          <p className="text-gray-200 font-bold">
            Scopri il gusto autentico alla Macelleria Valente Vincenzo:<br />
            🐂 Carni locali certificate, fresche ogni giorno<br />
            ❤️ Prodotti tipici preparati con passione<br />
            🍖 Gastronomia pronta a pranzo e cena<br />
            🔥 E non perdere il nostro fornello pronto mercoledì, venerdì e sabato sera<br />
          </p>
          {/*<div className="mt-4 flex items-center justify-center gap-3">
            <button onClick={sharePage} className="rounded-2xl px-4 py-2 border text-sm">
              <Share2 className="h-4 w-4 mr-2 inline" /> Condividi
            </button>
          </div>*/}
        </motion.div>
      </header>

      {/* CTA principali */}
      <main className="flex-1">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 gap-4">
            <ActionButton href={telHref} icon={Phone}>Chiama ora</ActionButton>
            <ActionButton href={waHref} icon={MessageCircle}>Scrivici su WhatsApp</ActionButton>
            <div className="grid grid-cols-2 gap-3">
              <a href={IG_URL} target="_blank" rel="noreferrer noopener" className="rounded-2xl py-6 text-base text-center bg-gray-500 text-white hover:bg-gray-600 inline-flex items-center gap-2 justify-center">
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noreferrer noopener" className="rounded-2xl py-6 text-base text-center bg-gray-500 text-white hover:bg-gray-600 inline-flex items-center gap-2 justify-center">
                <Facebook className="h-5 w-5" /> Facebook
              </a>
            </div>
          </div>

          {/* Info */}
          {/*<div className="mt-8 rounded-2xl shadow-sm border p-5 border-gray-600 bg-gray-800">*/}
          <div className="mt-8 rounded-2xl shadow-sm border p-5 border-gray-600 bg-[#3A3F45]">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#CC1425] mt-1" />
              <div className="flex-1">
                <p className="font-bold text-white">Dove siamo</p>
                <p className="text-gray-300 mt-1">{ADDRESS}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer noopener" className="rounded-xl px-3 py-2 border border-gray-600 bg-[#CC1425] text-white text-sm inline-flex items-center gap-2">
                    Apri su Maps <ExternalLink className="h-4 w-4" />
                  </a>
                  {/*<p className="px-3 py-2 text-sm inline-flex items-center gap-2 text-gray-300">Lasciaci una recensione ❤️</p>*/}
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer noopener" className="rounded-xl px-3 py-2 border border-gray-600 bg-[#CC1425] text-white text-sm inline-flex items-center gap-2">
                    Lasciaci una recensione <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Clock className="h-5 w-5 text-[#CC1425] mt-1" />
              <div className="flex-1">
                <p className="font-bold text-white">Orari</p>
                <ul className="mt-1 grid grid-cols-1 gap-x-6 text-gray-300 text-sm sm:text-base">
                  {HOURS.map((row) => (
                    <li key={row.day} className="flex justify-between py-1">
                      <span>{row.day}</span>
                      <span className="font-medium">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sezione menù / novità */}
          {/*<div className="mt-6 rounded-2xl border-dashed border-2 border-[#CC1425] p-5 text-center bg-gray-800">
            <p className="font-bold text-white">Novità e promozioni</p>
            <p className="text-gray-300 mt-1">Pubblica qui offerte del weekend, menù brace o link a storie in evidenza.</p>
            <div className="mt-3">
              <a href={IG_URL} target="_blank" rel="noreferrer noopener" className="rounded-xl px-3 py-2 border border-gray-600 text-gray-300 text-sm">
                Guarda le storie su Instagram
              </a>
            </div>
          </div>*/}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#2E3136] border-t border-gray-600">
        <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl px-4 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {SHOP_NAME}. Tutti i diritti riservati.
        </div>
      </footer>
      </div>
    </div>
  );
}
