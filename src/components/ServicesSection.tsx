import React, { useState } from 'react';
import { 
  Activity, 
  Network, 
  Truck, 
  Layers, 
  Wrench, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  ChevronRight
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onOpenServiceDetails: (service: ServiceItem) => void;
  onOpenCalibrationModal?: () => void;
  currentTheme?: 'light' | 'navy' | 'steel';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
  onOpenServiceDetails,
  onOpenCalibrationModal,
  currentTheme = 'light'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const isLight = currentTheme === 'light';

  const getServiceIcon = (name: string) => {
    const iconClass = "w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400";
    switch (name) {
      case 'Truck': return <Truck className={iconClass} />;
      case 'Wrench': return <Wrench className={iconClass} />;
      case 'Network': return <Network className={iconClass} />;
      case 'Activity': return <Activity className={iconClass} />;
      case 'Layers': return <Layers className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      default: return <Activity className={iconClass} />;
    }
  };

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.moduleGroup === activeCategory || s.id === activeCategory);

  const handleActionClick = (service: ServiceItem) => {
    if (service.actionType === 'calibration' && onOpenCalibrationModal) {
      onOpenCalibrationModal();
    } else if (service.actionType === 'call') {
      window.location.href = `tel:${COMPANY_DETAILS.emergencyHotline.replace(/\s+/g, '')}`;
    } else {
      onSelectServiceForQuote(service.id);
    }
  };

  return (
    <section 
      className={`py-16 sm:py-20 md:py-24 relative transition-colors duration-300 ${
        isLight 
          ? 'bg-white text-slate-900 border-b border-slate-200/80' 
          : 'bg-slate-950 text-white border-b border-slate-800'
      }`} 
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-12">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${
            isLight 
              ? 'bg-blue-50 border-blue-200 text-blue-800' 
              : 'bg-blue-950/80 border-blue-800 text-blue-300'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Operational Capabilities
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Everything You Need: Rent, Repair, Build, or Buy
          </h2>
          
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            We've grouped our core operations into simple, clear modules so you can find exactly what you need without confusing technical jargon.
          </p>
        </div>

        {/* "How It Works" 3-Step Simple Guide */}
        <div className={`p-4 sm:p-6 rounded-2xl border mb-10 sm:mb-14 shadow-sm ${
          isLight 
            ? 'bg-gradient-to-r from-blue-50/60 via-slate-50 to-indigo-50/40 border-slate-200/90' 
            : 'bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-blue-950/40 border-slate-800'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              How It Works
            </span>
            <div className={`h-px flex-1 ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}></div>
            <span className={`text-[10px] sm:text-[11px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Simple 3-Step Process
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                1
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h4 className="text-xs sm:text-sm font-bold">1. Select Your Service</h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Choose whether you want to <strong>rent a vehicle or tool</strong>, <strong>repair/calibrate gear</strong>, <strong>build fiber</strong>, or request <strong>24/7 emergency restoration</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                2
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h4 className="text-xs sm:text-sm font-bold">2. Quick Quote or Dispatch</h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Receive upfront pricing and scheduling within hours. For emergency fiber cuts, our field squads mobilize in <strong>under 45 minutes</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                3
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h4 className="text-xs sm:text-sm font-bold">3. Certified Delivery</h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Work performed by FOA-certified telecom engineers, backed by official calibration certificates, test reports, and local warranty in Ghana.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs - Horizontally scrollable on mobile, centered on desktop */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-10 text-xs">
          {[
            { id: 'all', label: 'All Modules' },
            { id: 'rentals', label: '🚗 Rentals & Fleet' },
            { id: 'repairs', label: '🔧 Repairs & Lab' },
            { id: 'deployments', label: '🏗️ Fiber Construction' },
            { id: 'emergency', label: '🚨 24/7 Emergency' },
            { id: 'sales', label: '📦 Buy Equipment' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-semibold transition-all shadow-xs whitespace-nowrap shrink-0 text-xs ${
                activeCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : isLight
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-blue-400 text-slate-800 shadow-sm' 
                  : 'bg-slate-900/90 border-slate-800 hover:border-blue-500/50 text-white'
              }`}
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Top Row: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 sm:p-3 rounded-xl border transition-colors ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50/50 shadow-xs' 
                      : 'bg-slate-950 border-slate-800 group-hover:border-blue-500/40'
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                      service.id === 'field-maintenance'
                        ? isLight
                          ? 'bg-red-50 border-red-200 text-red-700'
                          : 'bg-red-950/80 border-red-800 text-red-300'
                        : service.id === 'precision-repair'
                          ? isLight
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : 'bg-amber-950/80 border-amber-800 text-amber-300'
                          : isLight 
                            ? 'bg-blue-50 border-blue-200 text-blue-700' 
                            : 'bg-blue-950/80 border-blue-800 text-blue-300'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className={`text-base sm:text-lg font-bold transition-colors ${isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs font-semibold mt-1 ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {service.description}
                </p>

                {/* What's Included / Deliverables */}
                <div className={`space-y-1.5 pt-3 border-t text-xs ${isLight ? 'border-slate-100 text-slate-700' : 'border-slate-800/80 text-slate-300'}`}>
                  <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                    What You Get:
                  </p>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] px-2 py-0.5 rounded-md font-medium border truncate max-w-full ${
                        isLight 
                          ? 'bg-slate-50 border-slate-200 text-slate-600' 
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Responsive Wrap */}
              <div className={`pt-4 sm:pt-5 mt-4 sm:mt-5 border-t flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
                <button
                  onClick={() => onOpenServiceDetails(service)}
                  className={`text-xs font-semibold inline-flex items-center justify-center xs:justify-start gap-1 py-1.5 transition-colors ${
                    isLight 
                      ? 'text-slate-600 hover:text-blue-600' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  id={`service-details-btn-${service.id}`}
                >
                  <span>View Scope & Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleActionClick(service)}
                  className={`px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm inline-flex items-center justify-center gap-1.5 active:scale-95 ${
                    service.id === 'field-maintenance'
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/20'
                      : service.id === 'precision-repair'
                        ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                  }`}
                  id={`service-action-btn-${service.id}`}
                >
                  {service.actionType === 'call' && <PhoneCall className="w-3.5 h-3.5" />}
                  <span>{service.actionLabel || 'Get Quote'}</span>
                  {service.actionType !== 'call' && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
