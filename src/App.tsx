import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ClientTrackRecord } from './components/ClientTrackRecord';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { CalibrationBookingModal } from './components/CalibrationBookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './types';

export default function App() {
  // Theme state: defaults to 'light' (Clean Corporate Blue & Amber)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'navy' | 'steel'>(() => {
    const saved = localStorage.getItem('raviga_theme');
    if (saved === 'light' || saved === 'navy' || saved === 'steel') {
      return saved;
    }
    return 'light';
  });

  // Modal states
  const [isCalibrationModalOpen, setIsCalibrationModalOpen] = useState(false);
  const [calibrationDefaultModel, setCalibrationDefaultModel] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledScope, setPrefilledScope] = useState<string | null>(null);

  // Sync theme changes to document and localStorage
  const handleThemeChange = (newTheme: 'light' | 'navy' | 'steel') => {
    setCurrentTheme(newTheme);
    localStorage.setItem('raviga_theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-navy', 'theme-steel', 'dark');
    if (currentTheme === 'light') {
      root.classList.add('theme-light');
    } else {
      root.classList.add('dark', `theme-${currentTheme}`);
    }
  }, [currentTheme]);

  // Handlers
  const handleOpenCalibrationModal = (modelName?: string) => {
    setCalibrationDefaultModel(modelName || '');
    setIsCalibrationModalOpen(true);
  };

  const handleOpenQuoteModal = (identifier?: string) => {
    if (identifier) {
      setPrefilledScope(identifier);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      currentTheme === 'light' 
        ? 'bg-white text-slate-900 selection:bg-blue-600 selection:text-white' 
        : 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white'
    }`}>
      {/* Navigation Bar with Theme Switcher */}
      <Navbar 
        onOpenCalibrationModal={() => handleOpenCalibrationModal()}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        currentTheme={currentTheme}
        onChangeTheme={handleThemeChange}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenCalibrationModal={() => handleOpenCalibrationModal()}
          currentTheme={currentTheme}
        />

        {/* 2. Core Telecom Services */}
        <ServicesSection 
          onOpenServiceDetails={(service: ServiceItem) => setSelectedService(service)}
          onSelectServiceForQuote={(serviceId: string) => handleOpenQuoteModal(serviceId)}
          onOpenCalibrationModal={() => handleOpenCalibrationModal()}
          currentTheme={currentTheme}
        />

        {/* 3. Proven Client Track Record (Linfra, Dynamic Data Solutions, Datacom) */}
        <ClientTrackRecord 
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          currentTheme={currentTheme}
        />

        {/* 4. Contact & RFP Submission Center */}
        <ContactSection 
          prefilledScope={prefilledScope}
          currentTheme={currentTheme}
        />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenCalibrationModal={() => handleOpenCalibrationModal()}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        currentTheme={currentTheme}
      />

      {/* Floating Modals */}
      <CalibrationBookingModal 
        isOpen={isCalibrationModalOpen}
        onClose={() => setIsCalibrationModalOpen(false)}
        defaultModel={calibrationDefaultModel}
      />

      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceId) => handleOpenQuoteModal(serviceId)}
      />

      {/* Direct Floating WhatsApp Contact Channel */}
      <FloatingWhatsApp currentTheme={currentTheme} />
    </div>
  );
}
