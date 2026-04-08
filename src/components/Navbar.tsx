import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetlerimiz', href: '/#hizmetler' },
    { name: 'Hakkımızda', href: '/#hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <nav className={cn(
        'max-w-7xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300',
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      )}>
        <Link to="/" className="flex items-center gap-3 group" aria-label="Global Hedef Sigorta Ana Sayfa">
          <img src="/logo-full.png" alt="Global Hedef Sigorta Logo" className="h-14 md:h-16 w-auto transition-all" />
          <div className="flex flex-col">
            <span className="text-brand-navy font-bold text-xl md:text-2xl leading-none tracking-tight">Global Hedef</span>
            <span className="text-brand-orange font-bold text-xs md:text-sm tracking-[0.2em] uppercase leading-none mt-1">Sigorta</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/905303771054"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            <Phone size={16} />
            Hızlı Teklif Al
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-slate-700 hover:text-brand-orange"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-200" />
              <a
                href="https://wa.me/905303771054"
                className="bg-brand-orange text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                WhatsApp'tan Yazın
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
