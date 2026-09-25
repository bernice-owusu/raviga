import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Truck, 
  Wrench, 
  Layers, 
  Activity
} from 'lucide-react';

interface ClientTrackRecordProps {
  onOpenQuoteModal: () => void;
  currentTheme?: 'light' | 'navy' | 'steel';
}

export const ClientTrackRecord: React.FC<ClientTrackRecordProps> = ({ 
  onOpenQuoteModal,
  currentTheme = 'light'
}) => {
  const isLight = currentTheme === 'light';

  return (
    <section 
      className={`py-16 sm:py-20 md:py-24 relative border-t transition-colors duration-300 ${
        isLight 
          ? 'bg-white border-slate-200 text-slate-900' 
          : 'bg-slate-950 border-slate-800 text-white'
      }`} 
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${
            isLight 
              ? 'bg-blue-50 border-blue-200 text-blue-800' 
              : 'bg-blue-950/80 border-blue-800 text-blue-300'
          }`}>
            <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            Proven Telecom Partnerships
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Trusted by Ghana's Telecom Leaders & Infrastructure Operators
          </h2>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Over the years, Raviga Engineering Limited has collaborated with industry leaders to deliver critical OSP builds, 24/7 SLA maintenance, precision test instruments, and specialized fleet rentals.
          </p>
        </div>

        {/* Client Cards Grid - 1 col on mobile, 2 cols on tablets, 3 cols on desktops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Linfra Ghana */}
          <div className={`rounded-2xl border p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl group ${
            isLight 
              ? 'bg-slate-50/80 border-slate-200 hover:border-blue-400 hover:bg-white text-slate-800' 
              : 'bg-slate-900 border-slate-800 hover:border-blue-500/60 text-white'
          }`}>
            <div className="space-y-5 sm:space-y-6">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                    isLight 
                      ? 'bg-blue-50 border-blue-200 text-blue-800' 
                      : 'bg-blue-950 border-blue-800 text-blue-300'
                  }`}>
                    IPT PowerTech Group
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1 font-semibold whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Contract
                  </span>
                </div>
                
                <h3 className={`text-lg sm:text-xl font-bold transition-colors ${isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400'}`}>
                  Linfra Ghana Limited
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Major telecommunications tower and infrastructure service company.
                </p>
              </div>

              {/* Works Scope Breakdown */}
              <div className={`space-y-3.5 sm:space-y-4 pt-4 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <p className={`font-semibold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1.5 ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                    <Wrench className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    1. Sales, Repairs & Calibration of Precision Equipment:
                  </p>
                  <ul className={`space-y-1.5 pl-4 list-disc ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    <li>Supply & servicing of <strong>UCL Swift Fusion Splicers</strong></li>
                    <li>Calibration & maintenance of <strong>EXFO Test Devices</strong></li>
                    <li>Supply of premium Fiber Optic Cables and passive accessories</li>
                  </ul>
                </div>

                <div className={`space-y-1.5 sm:space-y-2 pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/60'}`}>
                  <p className={`font-semibold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1.5 ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                    <Truck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    2. Fleet Management & Rentals:
                  </p>
                  <p className={`pl-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Turnkey provisioning of equipped 4x4 telecom utility vehicles and mobile splicing rigs for ongoing field projects.
                  </p>
                </div>

              </div>
            </div>

            <div className={`mt-5 sm:mt-6 pt-4 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'}`}>
              <span>Partnership Tier: Strategic</span>
              <span className={`font-mono font-semibold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>Precision & Fleet</span>
            </div>
          </div>

          {/* Card 2: Dynamic Data Solutions (dds55) */}
          <div className={`rounded-2xl border p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl group ${
            isLight 
              ? 'bg-slate-50/80 border-slate-200 hover:border-blue-400 hover:bg-white text-slate-800' 
              : 'bg-slate-900 border-slate-800 hover:border-blue-500/60 text-white'
          }`}>
            <div className="space-y-5 sm:space-y-6">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                    isLight 
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-800' 
                      : 'bg-indigo-950 border-indigo-800 text-indigo-300'
                  }`}>
                    Data Solutions Leader
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1 font-semibold whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Long-Term Partner
                  </span>
                </div>
                
                <h3 className={`text-lg sm:text-xl font-bold transition-colors ${isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400'}`}>
                  Dynamic Data Solution
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Leading telecommunication & data networking provider in Ghana.
                </p>
              </div>

              {/* Works Scope Breakdown */}
              <div className={`space-y-3.5 sm:space-y-4 pt-4 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <p className={`font-semibold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1.5 ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                    <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    1. Telecom Operations & Field Maintenance:
                  </p>
                  <ul className={`space-y-1.5 pl-4 list-disc ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    <li>Core fiber splicing and OTDR trace certifications</li>
                    <li>Fast-response link restoration and preventative maintenance</li>
                    <li>Supply of UCL Swift splicing machines & VIAVI test units</li>
                  </ul>
                </div>

                <div className={`space-y-1.5 sm:space-y-2 pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/60'}`}>
                  <p className={`font-semibold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1.5 ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                    <Truck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    2. Fleet Management and Rentals:
                  </p>
                  <p className={`pl-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Long-term dedicated vehicle lease agreements and specialized optical field tools for data center backbone connectivity.
                  </p>
                </div>

              </div>
            </div>

            <div className={`mt-5 sm:mt-6 pt-4 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'}`}>
              <span>Partnership Tier: Enterprise</span>
              <span className={`font-mono font-semibold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>Operations & Fleet</span>
            </div>
          </div>

          {/* Card 3: Datacom Telecommunication */}
          <div className={`rounded-2xl border p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl group md:col-span-2 lg:col-span-1 ${
            isLight 
              ? 'bg-slate-50/80 border-slate-200 hover:border-blue-400 hover:bg-white text-slate-800' 
              : 'bg-slate-900 border-slate-800 hover:border-blue-500/60 text-white'
          }`}>
            <div className="space-y-5 sm:space-y-6">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                    isLight 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                      : 'bg-emerald-950 border-emerald-800 text-emerald-300'
                  }`}>
                    FTTX Network Builder
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1 font-semibold whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Turnkey Delivery
                  </span>
                </div>
                
                <h3 className={`text-lg sm:text-xl font-bold transition-colors ${isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400'}`}>
                  Datacom Telecommunication
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Pioneering telecom EPC and fiber network contractor.
                </p>
              </div>

              {/* Works Scope Breakdown */}
              <div className={`space-y-3.5 sm:space-y-4 pt-4 border-t text-xs ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <p className={`font-semibold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1.5 ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                    <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    1. Network Design, OSP & Build (GPON / FTTX):
                  </p>
                  <ul className={`space-y-1.5 pl-4 list-disc ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    <li>Feasibility surveys and civil duct route engineering</li>
                    <li>GPON Optical Distribution Network (ODN) implementation</li>
                    <li>Customer terminal splicing and fiber link characterization</li>
                  </ul>
                </div>

                <div className={`space-y-1.5 sm:space-y-2 pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-800/60'}`}>
                  <p className={`font-semibold uppercase tracking-wide text-[10px] sm:text-[11px] flex items-center gap-1.5 ${isLight ? 'text-amber-800' : 'text-amber-300'}`}>
                    <Wrench className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    2. Technical Consultancy & Calibration:
                  </p>
                  <p className={`pl-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Onsite calibration of field splicing units and assignment of FOA-certified technical deployment crews.
                  </p>
                </div>

              </div>
            </div>

            <div className={`mt-5 sm:mt-6 pt-4 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'}`}>
              <span>Partnership Tier: Turnkey OSP</span>
              <span className={`font-mono font-semibold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>FTTX & Consulting</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA to Partner with Raviga */}
        <div className={`mt-10 sm:mt-12 p-5 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left ${
          isLight 
            ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-sm' 
            : 'bg-slate-900/60 border-slate-800 text-white'
        }`}>
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold">
              Ready to Expand or Maintain Your Fiber Network in Ghana?
            </h4>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Partner with Raviga Engineering for SLA-backed field maintenance, FTTx civil builds, or fleet rentals.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-md shadow-blue-600/20"
          >
            Initiate Project Discussion
          </button>
        </div>

      </div>
    </section>
  );
};
