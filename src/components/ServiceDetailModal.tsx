import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="space-y-1 min-w-0 pr-2">
            {service.badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800 inline-block mb-0.5">
                {service.badge}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-white truncate">{service.title}</h3>
            <p className="text-xs text-cyan-300 font-medium truncate">{service.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto text-xs text-slate-300 flex-1">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            {service.description}
          </p>

          {/* Deliverables */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">
              Contractual Deliverables & Scope
            </h4>
            <div className="space-y-2 rounded-xl bg-slate-950 border border-slate-800 p-3.5 sm:p-4">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">
              Methodologies & Technology Platforms
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-[10px] sm:text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* SLA Note */}
          {service.slaNote && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-slate-950 to-cyan-950/60 border border-cyan-800/80 space-y-1">
              <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                Service Level Agreement (SLA) Commitment
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {service.slaNote}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions - Responsive Stack */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 text-xs font-medium transition-colors text-center"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(service.id);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow text-center"
          >
            <span>Request RFP For This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
