import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Wrench, 
  Award, 
  Truck,
  Building2,
  Users,
  Clock,
  Check
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenCalibrationModal: () => void;
  currentTheme?: 'light' | 'navy' | 'steel';
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenQuoteModal, 
  onOpenCalibrationModal,
  currentTheme = 'light'
}) => {
  const isLight = currentTheme === 'light';

  return (
    <section 
      className={`relative pt-28 pb-14 xs:pt-32 xs:pb-18 sm:pt-36 sm:pb-22 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300 ${
        isLight 
          ? 'bg-gradient-to-b from-slate-50 via-white to-blue-50/25 text-slate-900 border-b border-slate-200/80' 
          : 'bg-slate-950 text-white border-b border-slate-800/80'
      }`} 
      id="hero"
    >
      {/* Background Subtle Depth & Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glow constrained to viewport */}
        <div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] h-[360px] sm:h-[480px] blur-3xl opacity-50 ${
            isLight 
              ? 'bg-gradient-to-tr from-blue-200/40 via-amber-100/25 to-transparent' 
              : 'bg-gradient-to-tr from-blue-700/20 via-indigo-900/10 to-transparent'
          }`}
        />
        
        {/* Clean Corporate Grid Pattern */}
        <div 
          className={`absolute inset-0 ${isLight ? 'opacity-[0.035]' : 'opacity-[0.06]'}`}
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isLight ? '#1e3a8a' : '#3b82f6'} 1px, transparent 0)`, 
            backgroundSize: '36px 36px' 
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clear, Human & Benefit-Driven Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Accreditation & Heritage Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] sm:text-xs font-semibold backdrop-blur-sm max-w-full truncate ${
              isLight 
                ? 'border-blue-200 bg-blue-50/80 text-blue-900 shadow-xs' 
                : 'border-blue-500/30 bg-blue-950/60 text-blue-300'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="truncate">Ghana’s Trusted Telecom Field Operations • Est. 2020</span>
            </div>

            {/* Main Headline - Responsive Scaling */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.15]">
              {isLight ? (
                <>
                  Ghana’s Premier Fiber Optic{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800">
                    Infrastructure & Field Operations
                  </span>{' '}
                  Partner
                </>
              ) : (
                <>
                  Ghana’s Premier Fiber Optic{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                    Infrastructure & Field Operations
                  </span>{' '}
                  Partner
                </>
              )}
            </h1>

            {/* Clear, Outcome-Focused Description */}
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              We build, service, and protect high-speed communications networks across Ghana. From turnkey fiber optic network deployment and rapid 24/7 emergency cut restoration to authorized UCL Swift fusion splicer distribution and in-house lab calibration, our certified engineers keep your telecom operations running reliably.
            </p>

            {/* Practical Value Highlights - Responsive Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1 text-xs">
              {[
                'Turnkey Fiber Rollouts',
                '24/7 Emergency Cut Repairs',
                'Sole UCL Swift Distributor',
                'Accredited Accra Calib Lab',
                '4x4 Operations Fleet Hire',
                'Sub-4 Hour Emergency MTTR'
              ].map((label, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-2 p-2 sm:p-2.5 rounded-lg border font-medium transition-colors ${
                    isLight 
                      ? 'bg-white border-slate-200/90 text-slate-800 shadow-xs hover:border-blue-300' 
                      : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 font-bold" />
                  <span className="font-semibold text-[11px] sm:text-xs truncate">{label}</span>
                </div>
              ))}
            </div>

            {/* Clear Primary & Secondary Actions - Full width on mobile, inline on tablet+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenQuoteModal}
                id="hero-request-quote-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-95"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalibrationModal}
                id="hero-book-calibration-btn"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border font-semibold text-sm transition-all active:scale-95 ${
                  isLight
                    ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-xs'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
                }`}
              >
                <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Book Lab Calibration</span>
              </button>
            </div>

            {/* Fast Contact Note */}
            <div className="pt-1 flex items-center gap-2 text-xs flex-wrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                Accra Central Operations & 24/7 SLA Hotline:{' '}
                <a 
                  href={`tel:${COMPANY_DETAILS.emergencyHotline.replace(/\s+/g, '')}`} 
                  className="font-bold text-blue-600 hover:underline whitespace-nowrap"
                >
                  {COMPANY_DETAILS.emergencyHotline}
                </a>
              </span>
            </div>

          </div>

          {/* Right Column: Clean Enterprise Value Card */}
          <div className="lg:col-span-5 w-full">
            <div 
              className={`relative rounded-2xl p-5 sm:p-7 border shadow-xl space-y-4 sm:space-y-5 transition-all ${
                isLight 
                  ? 'bg-white border-slate-200/90 text-slate-900' 
                  : 'bg-slate-900/90 border-slate-800 text-white backdrop-blur-xl'
              }`}
            >
              
              {/* Card Header: Corporate Trust & Readiness */}
              <div className={`flex items-center justify-between pb-3 sm:pb-4 border-b ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className={`p-2 sm:p-2.5 rounded-xl ${isLight ? 'bg-blue-50 text-blue-700' : 'bg-blue-950/80 text-blue-400'}`}>
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-tight">
                      Enterprise Telecom Partner
                    </h3>
                    <p className={`text-[10px] sm:text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      Accra Headquarters & Nationwide Coverage
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap">
                  Ready to Deploy
                </span>
              </div>

              {/* Exclusive Distributorship & Lab Callout */}
              <div 
                className={`p-3.5 sm:p-4 rounded-xl border space-y-2 sm:space-y-2.5 ${
                  isLight 
                    ? 'bg-amber-50/70 border-amber-200/80 text-slate-900' 
                    : 'bg-amber-950/20 border-amber-600/30 text-amber-200'
                }`}
              >
                <div className="flex items-center justify-between text-xs flex-wrap gap-1">
                  <span className="font-bold flex items-center gap-1.5 text-amber-900 dark:text-amber-300 text-[11px] sm:text-xs">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    Exclusive Distributorship & Authorized Lab
                  </span>
                  <span className="text-[9px] sm:text-[10px] bg-amber-500 text-slate-950 px-1.5 sm:px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    Accredited
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[10px] sm:text-[11px] pt-0.5">
                  <div className={`p-1.5 sm:p-2 rounded-lg border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-slate-950 border-slate-800'}`}>
                    <p className="font-bold text-slate-900 dark:text-white truncate">UCL Swift</p>
                    <p className="text-[9px] sm:text-[10px] text-amber-600 dark:text-amber-400 font-semibold truncate">Sole Distributor</p>
                  </div>
                  <div className={`p-1.5 sm:p-2 rounded-lg border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-slate-950 border-slate-800'}`}>
                    <p className="font-bold text-slate-900 dark:text-white truncate">EXFO</p>
                    <p className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-semibold truncate">Sales & Service</p>
                  </div>
                  <div className={`p-1.5 sm:p-2 rounded-lg border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-slate-950 border-slate-800'}`}>
                    <p className="font-bold text-slate-900 dark:text-white truncate">VIAVI</p>
                    <p className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-semibold truncate">Sales & Service</p>
                  </div>
                </div>
              </div>

              {/* Core Operational Commitments */}
              <div className="space-y-2 sm:space-y-2.5">
                <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                  Operational Commitments
                </p>

                <div className="space-y-2 text-xs">
                  <div className={`flex flex-col xs:flex-row xs:items-center justify-between p-2.5 sm:p-3 rounded-xl border gap-1 xs:gap-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`flex items-center gap-2 sm:gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      Dedicated Field Teams
                    </span>
                    <span className="font-bold whitespace-nowrap">12 Engineers (3 Squads)</span>
                  </div>

                  <div className={`flex flex-col xs:flex-row xs:items-center justify-between p-2.5 sm:p-3 rounded-xl border gap-1 xs:gap-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`flex items-center gap-2 sm:gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      Emergency Cut Restoration
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">Guaranteed Sub-4 Hours</span>
                  </div>

                  <div className={`flex flex-col xs:flex-row xs:items-center justify-between p-2.5 sm:p-3 rounded-xl border gap-1 xs:gap-2 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
                    <span className={`flex items-center gap-2 sm:gap-2.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      Operations Fleet Rentals
                    </span>
                    <span className="font-bold whitespace-nowrap">Equipped 4x4 Pickups & Labs</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className={`pt-3 border-t flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs ${isLight ? 'border-slate-100 text-slate-500' : 'border-slate-800 text-slate-400'}`}>
                <span className="truncate">Spintex Road Lab & Dispatch Hub</span>
                <button
                  onClick={onOpenQuoteModal}
                  className="font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 inline-flex items-center gap-1.5 group shrink-0"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
