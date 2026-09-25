import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowUp, 
  Wrench, 
  MessageSquare
} from 'lucide-react';
import { RavigaLogo } from './RavigaLogo';
import { COMPANY_DETAILS } from '../data/companyData';

interface FooterProps {
  onOpenCalibrationModal: () => void;
  onOpenQuoteModal: () => void;
  currentTheme?: 'light' | 'navy' | 'steel';
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCalibrationModal, 
  onOpenQuoteModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs relative">
      {/* Top Banner inside footer */}
      <div className="border-b border-slate-900 bg-slate-900/60 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
              Ghana's Trusted Partner for Telecom Field Operations
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl">
              Delivering high-quality, safe, cost-efficient telecom solutions with certified engineers, exclusive UCL Swift distribution, and authorized calibration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenCalibrationModal}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors text-center"
            >
              Book Splicer / OTDR Calibration
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-md shadow-blue-600/30 text-center"
            >
              Request Project RFP
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand & Mission Column */}
          <div className="sm:col-span-2 space-y-4">
            <RavigaLogo className="max-w-[200px] xs:max-w-[240px] sm:max-w-none" showTagline={false} variant="dark" />
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Founded on August 31, 2020. Addressing critical challenges in the telecom field operations market with turnkey OSP design, FTTx/GPON/AirPon deployment, 24/7 SLA emergency maintenance, and precision equipment calibration.
            </p>

            <div className="space-y-2 pt-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Exclusive Distributor:</strong> UCL Swift Splicers in Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Authorized Lab:</strong> EXFO & VIAVI Sales, Calibration & Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Certified Field Teams:</strong> FOA & ITU-T Certified Optical Engineers</span>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Fiber Optics Field Maintenance (24/7)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  OSP Design & Build (FTTX, FTTH, GPON)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  AirPon Wireless-Fiber Integration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Fleet Management & 4x4 Rentals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Engineering Consultancy & Auditing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Telecom Hardware & Cable Supply
                </a>
              </li>
            </ul>
          </div>

          {/* Distributorship & Labs Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hardware & Labs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  UCL Swift Splicers (Sole Distributor)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Optical Test Equipment & OTDRs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Fiber Cables, Closures & Hardware
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Telecom Utility Vehicle Rentals
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Request Equipment Pricing
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenCalibrationModal}
                  className="text-blue-400 hover:underline flex items-center gap-1 text-left"
                >
                  Book In-House Calibration (Accra)
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Accra HQ Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Accra Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">WhatsApp:</span>
                <a 
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp.replace(/\D/g, '')}?text=Hello%20Raviga%20Engineering,%20we%20have%20an%20inquiry%20regarding%20telecom%20services.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-emerald-300"
                >
                  {COMPANY_DETAILS.whatsapp}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span className="text-emerald-400 font-semibold whitespace-nowrap">24/7 SLA:</span>
                <a href={`tel:${COMPANY_DETAILS.emergencyHotline.replace(/\s+/g, '')}`} className="text-white hover:text-blue-300">
                  {COMPANY_DETAILS.emergencyHotline}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white break-all">
                  {COMPANY_DETAILS.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Raviga Engineering Limited. All rights reserved. Registered in Ghana since August 31, 2020.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-slate-400">
            <span>EHS & Cybersecurity Compliant</span>
            <span className="text-slate-600">•</span>
            <span>FOA Certified Workforce</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
