import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  FileText,
  Sun,
  Moon
} from 'lucide-react';
import { RavigaLogo } from './RavigaLogo';

interface NavbarProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenCalibrationModal: () => void;
  currentTheme: 'light' | 'navy' | 'steel';
  onChangeTheme: (theme: 'light' | 'navy' | 'steel') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuoteModal, 
  currentTheme,
  onChangeTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  const isLight = currentTheme === 'light';

  const toggleTheme = () => {
    onChangeTheme(isLight ? 'navy' : 'light');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav 
        className={`transition-all duration-300 ${
          isLight
            ? isScrolled 
              ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3 text-slate-800' 
              : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-4 text-slate-800'
            : isScrolled
              ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-md py-3 text-white'
              : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group focus:outline-none shrink-0" id="brand-home-link">
            <RavigaLogo 
              className="max-w-[58vw] xs:max-w-[240px] sm:max-w-none" 
              variant={isLight ? 'light' : 'dark'} 
              showTagline={false} 
            />
          </a>

          {/* Clean Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all ${
                  isLight
                    ? 'text-slate-600 hover:text-blue-600'
                    : 'text-slate-300 hover:text-blue-400'
                }`}
                id={`nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Action Area */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Quick Theme Toggle (Clean Icon Button) */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Request Quote Primary Action */}
            <button
              onClick={() => onOpenQuoteModal()}
              id="nav-quote-cta-btn"
              className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border text-xs flex items-center ${
                isLight 
                  ? 'bg-slate-100 border-slate-200 text-slate-700' 
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
              title="Toggle Theme"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
              className={`p-2 rounded-lg border ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            className={`md:hidden border-b px-4 pt-3 pb-6 space-y-3 max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in slide-in-from-top-4 duration-200 ${
              isLight 
                ? 'bg-white border-slate-200 shadow-xl' 
                : 'bg-slate-950 border-slate-800 shadow-2xl'
            }`}
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-sm font-semibold p-2.5 rounded-lg transition-colors ${
                    isLight
                      ? 'text-slate-800 hover:text-blue-700 hover:bg-slate-100'
                      : 'text-slate-200 hover:text-blue-400 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className={`pt-3 border-t flex flex-col gap-2.5 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
