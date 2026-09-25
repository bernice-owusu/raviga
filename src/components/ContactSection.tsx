import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2,
  Copy,
  Check,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ContactSectionProps {
  prefilledScope?: any;
  currentTheme?: 'light' | 'navy' | 'steel';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefilledScope,
  currentTheme = 'light'
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('field-maintenance');
  const [message, setMessage] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const isLight = currentTheme === 'light';

  useEffect(() => {
    if (prefilledScope) {
      if (typeof prefilledScope === 'string') {
        setService(prefilledScope);
      } else if (prefilledScope.serviceDomain) {
        if (prefilledScope.serviceDomain === 'osp') setService('osp-implementation');
        else if (prefilledScope.serviceDomain === 'maintenance') setService('field-maintenance');
        else if (prefilledScope.serviceDomain === 'calibration') setService('precision-repair');
        else if (prefilledScope.serviceDomain === 'fleet' || prefilledScope.serviceDomain === 'rentals') setService('rent-equipment-fleet');
        else if (prefilledScope.serviceDomain === 'supplies') setService('telecom-supplies');
      }

      if (prefilledScope.details) {
        setMessage(
          `Project Estimate Transfer:\n- Service: ${prefilledScope.details.title}\n- Timeline: ${prefilledScope.details.timeline}\n- Squad: ${prefilledScope.details.squad}\n- Highlights: ${prefilledScope.details.highlights.join(', ')}`
        );
      }
    }
  }, [prefilledScope]);

  const targetWhatsAppNumber = '233246762220'; // 0246762220

  const getFormattedMessage = (ticketId: string) => {
    return `*NEW INQUIRY / RFP PROPOSAL REQUEST*
---------------------------------------
*Reference ID:* ${ticketId}
*Full Name:* ${fullName}
*Company:* ${company}
*Phone:* ${phone}
*Email:* ${email}
*Service Domain:* ${service.replace(/-/g, ' ')}
*Scope Details:*
${message || 'Standard project discussion requested.'}
---------------------------------------
Submitted via Raviga Engineering Online Portal`;
  };

  const getWhatsAppUrl = (ticketId: string) => {
    return `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(getFormattedMessage(ticketId))}`;
  };

  const getMailtoUrl = (ticketId: string) => {
    const mailtoSubject = encodeURIComponent(`[RFP Request] ${ticketId} - ${fullName} (${company})`);
    const mailtoBody = encodeURIComponent(
`Dear Raviga Engineering Operations Team,

Please review our project proposal request:

Ticket Reference: ${ticketId}
Full Name: ${fullName}
Company: ${company}
Phone: ${phone}
Email: ${email}
Primary Service: ${service.replace(/-/g, ' ')}

Project Scope:
${message || 'Standard project discussion requested.'}

Please confirm receipt and expected mobilization / quotation timeline.

Best regards,
${fullName}`
    );
    return `mailto:${COMPANY_DETAILS.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `RFP-RVG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
    
    // Automatically trigger WhatsApp window so user info is routed directly to 0246762220
    const url = getWhatsAppUrl(ticketId);
    try {
      window.open(url, '_blank');
    } catch (err) {
      // Popup blocked, user can still click the explicit button
    }
  };

  const handleCopySummary = () => {
    if (!submittedTicket) return;
    navigator.clipboard.writeText(getFormattedMessage(submittedTicket));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      className={`py-16 sm:py-20 md:py-24 relative border-t transition-colors duration-300 ${
        isLight 
          ? 'bg-slate-50 border-slate-200 text-slate-900' 
          : 'bg-slate-900 border-slate-800 text-white'
      }`} 
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${
            isLight 
              ? 'bg-blue-50 border-blue-200 text-blue-800' 
              : 'bg-blue-950/80 border-blue-800 text-blue-300'
          }`}>
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            Connect With Raviga Engineering
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Request an RFP Proposal or Operational Support
          </h2>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Speak directly with our operations manager and lead engineers. We are ready to mobilize across Ghana for turnkey OSP builds, 24/7 SLA maintenance, or precision equipment supply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contacts, Address, Emergency Line */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full">
            
            {/* Headquarters Card */}
            <div className={`p-5 sm:p-6 rounded-2xl border space-y-4 shadow-sm ${
              isLight 
                ? 'bg-white border-slate-200 text-slate-900' 
                : 'bg-slate-950 border-slate-800 text-white'
            }`}>
              <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                Accra Corporate Headquarters & Service Lab
              </h3>

              <div className={`space-y-3 text-xs ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block ${isLight ? 'text-slate-900' : 'text-white'}`}>Physical Location:</strong>
                    <span>{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block ${isLight ? 'text-slate-900' : 'text-white'}`}>Operating Hours:</strong>
                    <span>Lab & Office: Monday – Friday: 8:00 AM – 5:30 PM</span>
                    <span className="block text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                      Emergency SLA Teams: 24 Hours / 7 Days a Week / 365 Days
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block ${isLight ? 'text-slate-900' : 'text-white'}`}>Direct Telephone & WhatsApp:</strong>
                    <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-blue-600 dark:text-blue-300 font-medium hover:underline">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={`block ${isLight ? 'text-slate-900' : 'text-white'}`}>Corporate Email:</strong>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-600 dark:text-blue-300 font-medium hover:underline break-all">
                      {COMPANY_DETAILS.email}
                    </a>
                    <span className={`block mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'} break-all`}>
                      Operations: {COMPANY_DETAILS.opsEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 SLA Emergency Callout Card */}
            <div className={`p-5 sm:p-6 rounded-2xl border space-y-3 shadow-md ${
              isLight 
                ? 'bg-amber-50/80 border-amber-300 text-slate-900' 
                : 'bg-gradient-to-br from-slate-950 to-blue-950/70 border-blue-700/60 text-white'
            }`}>
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Active 24/7 Emergency Line
                </span>
                <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300">Sub-4hr MTTR</span>
              </div>

              <p className={`text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Experiencing an active backbone or metro fiber cut? Our tactical on-call teams are on 24/7 standby for immediate dispatch across Ghana.
              </p>

              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.emergencyHotline.replace(/\s+/g, '')}`}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="truncate">Call Emergency SLA: {COMPANY_DETAILS.emergencyHotline}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Connect Card - Mobile Optimized */}
            <div className={`p-4 rounded-xl border flex flex-col xs:flex-row xs:items-center justify-between gap-3 ${
              isLight 
                ? 'bg-white border-slate-200 text-slate-900 shadow-xs' 
                : 'bg-slate-950 border-slate-800 text-white'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">Chat on WhatsApp: {COMPANY_DETAILS.whatsapp}</p>
                  <p className={`text-[10px] sm:text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Direct messaging with engineering coordinators</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${targetWhatsAppNumber}?text=Hello%20Raviga%20Engineering,%20we%20have%20an%20inquiry%20regarding%20telecom%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto text-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 transition-colors shadow-xs"
              >
                Chat Now
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className={`lg:col-span-7 rounded-2xl border p-5 sm:p-8 shadow-xl w-full ${
            isLight 
              ? 'bg-white border-slate-200 text-slate-900' 
              : 'bg-slate-950 border-slate-800 text-white'
          }`}>
            {submittedTicket ? (
              <div className="text-center py-6 sm:py-8 space-y-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Proposal Request Prepared!
                  </h3>
                  <p className={`text-xs max-w-md mx-auto ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Your project details have been formatted and are ready for direct delivery to Raviga Operations.
                  </p>
                </div>

                {/* Ticket Details Summary Card */}
                <div className={`p-4 sm:p-5 rounded-xl border text-xs text-left max-w-md mx-auto space-y-2 ${
                  isLight 
                    ? 'bg-slate-50 border-slate-200 text-slate-800' 
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Ticket Reference:</span>
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm">{submittedTicket}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Client Name:</span>
                    <span className="font-semibold">{fullName} ({company})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Contact Info:</span>
                    <span>{phone} • {email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Service Domain:</span>
                    <span className="capitalize font-medium">{service.replace(/-/g, ' ')}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-slate-200 dark:border-slate-800">
                    <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Target Dispatch Number:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+233 24 676 2220</span>
                  </div>
                </div>

                {/* Primary Direct Delivery Action Buttons */}
                <div className="max-w-md mx-auto space-y-2.5 pt-1">
                  <a
                    href={getWhatsAppUrl(submittedTicket)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/25 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send Directly via WhatsApp (0246762220)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={getMailtoUrl(submittedTicket)}
                      className={`py-2.5 px-4 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 transition-colors ${
                        isLight
                          ? 'border-slate-300 hover:bg-slate-100 text-slate-800 bg-white'
                          : 'border-slate-700 hover:bg-slate-800 text-slate-200 bg-slate-900'
                      }`}
                    >
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className={`py-2.5 px-4 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 transition-colors ${
                        copied
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : isLight
                            ? 'border-slate-300 hover:bg-slate-100 text-slate-800 bg-white'
                            : 'border-slate-700 hover:bg-slate-800 text-slate-200 bg-slate-900'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-500" />
                          <span>Copy Message Details</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setMessage('');
                    }}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Submit Another Inquiry / Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className={`space-y-1 pb-2 border-b ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
                  <h3 className="text-sm sm:text-base font-bold">
                    Submit Proposal Request / Project Inquiry
                  </h3>
                  <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Fill out the form below. Submitting will forward your specifications directly to our operations team at 0246762220.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Samuel Mensah"
                      className={`w-full rounded-lg px-3 py-2.5 text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                        isLight 
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600' 
                          : 'bg-slate-900 border-slate-700 text-white focus:border-blue-500'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Linfra Ghana / MTN Contractor"
                      className={`w-full rounded-lg px-3 py-2.5 text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                        isLight 
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600' 
                          : 'bg-slate-900 border-slate-700 text-white focus:border-blue-500'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="s.mensah@company.com"
                      className={`w-full rounded-lg px-3 py-2.5 text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                        isLight 
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600' 
                          : 'bg-slate-900 border-slate-700 text-white focus:border-blue-500'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Telephone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+233 XX XXX XXXX"
                      className={`w-full rounded-lg px-3 py-2.5 text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                        isLight 
                          ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600' 
                          : 'bg-slate-900 border-slate-700 text-white focus:border-blue-500'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Primary Service Domain *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`w-full rounded-lg px-3 py-2.5 text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-600 truncate max-w-full ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600' 
                        : 'bg-slate-900 border-slate-700 text-white focus:border-blue-500'
                    }`}
                  >
                    <option value="rent-equipment-fleet">🚗 Rent Vehicles & Telecom Equipment (4x4 Trucks, Splicing Labs)</option>
                    <option value="precision-repair">🔧 Equipment Repair & Calibration (Accra Lab for UCL Swift, EXFO, VIAVI)</option>
                    <option value="osp-implementation">🏗️ Fiber Network Construction & Deployments (OSP / FTTx / GPON)</option>
                    <option value="field-maintenance">🚨 24/7 Emergency Repairs & Fiber Cut Restoration (Sub-4hr SLA)</option>
                    <option value="telecom-supplies">📦 Buy Splicers, Cables & Hardware Supplies (UCL Swift Sole Distributor)</option>
                    <option value="other">General Inquiry / Other</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Project Scope / Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details such as route kilometers, location in Ghana, equipment model requiring calibration, or project timeline..."
                    className={`w-full rounded-lg px-3 py-2.5 text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-600 ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600' 
                        : 'bg-slate-900 border-slate-700 text-white focus:border-blue-500'
                    }`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Submit & Route to WhatsApp (0246762220)</span>
                  </button>
                  <p className={`text-[10px] sm:text-[11px] text-center mt-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Your submission directly reaches Raviga operations coordinators via WhatsApp and email.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
