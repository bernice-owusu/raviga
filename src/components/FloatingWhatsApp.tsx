import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface FloatingWhatsAppProps {
  currentTheme?: 'light' | 'navy' | 'steel';
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentTheme }) => {
  const isLight = currentTheme === 'light';
  const cleanNumber = COMPANY_DETAILS.whatsapp.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(
    'Hello Raviga Engineering, we have an inquiry regarding telecom field operations and services.'
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <aside 
      aria-label="Contact options"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group print:hidden"
    >
      {/* Tooltip / Prompt pill */}
      <div
        className={`pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 px-3 py-1.5 rounded-xl shadow-lg border text-xs font-semibold flex items-center gap-2 ${
          isLight
            ? 'bg-slate-900 text-white border-slate-800'
            : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>WhatsApp: {COMPANY_DETAILS.whatsapp}</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with Raviga Engineering at ${COMPANY_DETAILS.whatsapp}`}
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Pulsing beacon ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 fill-current relative z-10" />

        {/* Status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-slate-900 rounded-full z-20"></span>
      </a>
    </aside>
  );
};
