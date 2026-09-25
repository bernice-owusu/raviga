import React, { useState } from 'react';
import { 
  X, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Printer,
  MessageSquare,
  Mail,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface CalibrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultModel?: string;
}

export const CalibrationBookingModal: React.FC<CalibrationModalProps> = ({
  isOpen,
  onClose,
  defaultModel = ''
}) => {
  const [brand, setBrand] = useState<'UCL Swift' | 'EXFO' | 'VIAVI' | 'Other'>('UCL Swift');
  const [model, setModel] = useState<string>(defaultModel || 'UCL Swift K11');
  const [serviceType, setServiceType] = useState<string>('calibration');
  const [serialNumber, setSerialNumber] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [urgency, setUrgency] = useState<'standard' | 'priority'>('standard');
  const [notes, setNotes] = useState<string>('');
  const [submittedRMA, setSubmittedRMA] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const targetWhatsApp = '233246762220'; // 0246762220

  const getRmaMessage = (rmaCode: string) => {
    return `*EQUIPMENT CALIBRATION / REPAIR INTAKE*
---------------------------------------
*RMA Code:* ${rmaCode}
*Device Model:* ${brand} ${model}
*Service Required:* ${serviceType.replace(/_/g, ' ')}
*Serial Number:* ${serialNumber || 'N/A'}
*Urgency:* ${urgency === 'priority' ? 'Express Priority (24-48 Hours)' : 'Standard Lab (3-5 Days)'}
*Company:* ${companyName}
*Contact Person:* ${contactName}
*Phone:* ${contactPhone}
*Email:* ${contactEmail}
*Specific Notes:*
${notes || 'Standard calibration & certification.'}
---------------------------------------
Accra Central Lab • Raviga Engineering Limited`;
  };

  const getRmaWhatsAppUrl = (rmaCode: string) => {
    return `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(getRmaMessage(rmaCode))}`;
  };

  const getRmaMailtoUrl = (rmaCode: string) => {
    const subject = encodeURIComponent(`[Calibration RMA] ${rmaCode} - ${brand} ${model} (${companyName})`);
    const body = encodeURIComponent(
`Dear Raviga Metrology & Service Lab,

We have registered an equipment calibration intake:

RMA Code: ${rmaCode}
Device: ${brand} ${model}
Service Required: ${serviceType.replace(/_/g, ' ')}
Serial Number: ${serialNumber || 'N/A'}
Urgency: ${urgency === 'priority' ? 'Express Priority (24-48 Hours)' : 'Standard Lab (3-5 Days)'}

Company: ${companyName}
Contact: ${contactName}
Phone: ${contactPhone}
Email: ${contactEmail}

Notes:
${notes || 'Standard annual calibration.'}

Please confirm readiness for lab drop-off at Spintex Road, Accra.`
    );
    return `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rmaCode = `RMA-RVG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRMA(rmaCode);

    // Automatically trigger WhatsApp in new window
    try {
      window.open(getRmaWhatsAppUrl(rmaCode), '_blank');
    } catch (err) {
      // Handled via explicit button
    }
  };

  const handleCopyRma = () => {
    if (!submittedRMA) return;
    navigator.clipboard.writeText(getRmaMessage(submittedRMA));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmittedRMA(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        id="calibration-modal-container"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white truncate">
                Equipment Calibration & Service Lab
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                Accra Lab • UCL Swift, EXFO & VIAVI Precision Metrology
              </p>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable on mobile */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submittedRMA ? (
            <div className="text-center space-y-4 sm:space-y-5 py-3 sm:py-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Calibration Booking Registered!
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Your instrument service intake request has been generated for direct forwarding to our lab technicians at 0246762220.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-slate-400 font-semibold">Service Intake Code:</span>
                  <span className="font-mono text-amber-400 font-bold text-sm sm:text-base">{submittedRMA}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Device Model:</span>
                  <span className="text-white font-medium">{brand} {model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Intake Type:</span>
                  <span className="text-white font-medium capitalize">{serviceType.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Priority Tier:</span>
                  <span className={urgency === 'priority' ? 'text-amber-400 font-bold' : 'text-slate-300'}>
                    {urgency === 'priority' ? 'Express 24-48h' : 'Standard 3-5 days'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lab Drop-off / Collection:</span>
                  <span className="text-slate-300">Spintex Road Lab, Accra</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                  <span className="text-slate-400">Lab Coordinator Hotline:</span>
                  <span className="font-mono font-bold text-emerald-400">+233 24 676 2220</span>
                </div>
              </div>

              {/* Direct Forward Actions */}
              <div className="max-w-md mx-auto space-y-2.5 pt-1">
                <a
                  href={getRmaWhatsAppUrl(submittedRMA)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/25 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send RMA to Lab via WhatsApp (0246762220)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={getRmaMailtoUrl(submittedRMA)}
                    className="py-2.5 px-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 bg-slate-900 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Email Lab Details</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyRma}
                    className={`py-2.5 px-4 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 transition-colors ${
                      copied
                        ? 'border-emerald-500 bg-emerald-950 text-emerald-300'
                        : 'border-slate-700 hover:bg-slate-800 text-slate-200 bg-slate-900'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copied Intake Details!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>Copy RMA Details</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200 text-left max-w-md mx-auto space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  What Happens Next?
                </p>
                <p className="text-blue-300/90 text-[11px] leading-relaxed">
                  Deliver or courier your unit to our Spintex Road facility with this RMA code. If pickup is required within Greater Accra, our operations team will call to coordinate.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print RMA Sheet</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
                >
                  Close & Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Lab Accreditation Banner */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-600/40 text-xs flex items-start gap-2.5 sm:gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-200">
                    Ghana In-Country Metrology & Service Center
                  </p>
                  <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                    Zero transit time to overseas labs. Authorized electrode replacement, V-groove optical alignments, optical power calibration, and ISO-traceable certificate issuance in Accra.
                  </p>
                </div>
              </div>

              {/* Brand and Model selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Equipment Brand *
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="UCL Swift">UCL Swift (Exclusive Dist.)</option>
                    <option value="EXFO">EXFO (Authorized Lab)</option>
                    <option value="VIAVI">VIAVI Solutions</option>
                    <option value="Other">Other Precision Optical Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Model or Device Name *
                  </label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. K11, KF4A, FTB-1, MTS-2000"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Service Type and Serial */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Required Lab Service *
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="calibration">Annual Calibration & Certificate</option>
                    <option value="electrode_replacement">Electrode Change & Arc Calibration</option>
                    <option value="optical_alignment">Optical V-Groove & Motor Alignment</option>
                    <option value="otdr_testing">OTDR Laser Source & Loss Recalibration</option>
                    <option value="screen_battery">Screen / Battery / Housing Repair</option>
                    <option value="full_diagnostic">Comprehensive Diagnostic & Health Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Serial Number (If Known)
                  </label>
                  <input
                    type="text"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    placeholder="e.g. SN-982314-GH"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Turnaround speed */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Turnaround Urgency
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-colors ${
                    urgency === 'standard' ? 'bg-blue-950/70 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}>
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'standard'}
                      onChange={() => setUrgency('standard')}
                      className="sr-only"
                    />
                    <div>
                      <p className="font-semibold text-white">Standard Lab (3-5 Days)</p>
                      <p className="text-[10px] text-slate-400">Regular calibration queue</p>
                    </div>
                  </label>

                  <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-colors ${
                    urgency === 'priority' ? 'bg-amber-950/70 border-amber-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}>
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'priority'}
                      onChange={() => setUrgency('priority')}
                      className="sr-only"
                    />
                    <div>
                      <p className="font-semibold text-amber-300">Express Priority (24-48 Hours)</p>
                      <p className="text-[10px] text-slate-400">Fast-track emergency field bench</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Company & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-3 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Linfra / Datacom / ISP"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Technical Lead / Contact *
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="lead@company.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Fault Symptoms / Calibration Requirements
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Arc calibration showing high motor step count, high optical return loss on 1550nm..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors text-center"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md text-center flex items-center justify-center gap-1.5"
                >
                  <span>Submit & Route to Lab WhatsApp (0246762220)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
