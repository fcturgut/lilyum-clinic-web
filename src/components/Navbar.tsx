import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary">
              LİLYUM
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary hover:text-primary-dark transition-colors">
              {t.nav.home}
            </a>
            <a href="#services" className="text-primary hover:text-primary-dark transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-primary hover:text-primary-dark transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-primary hover:text-primary-dark transition-colors">
              {t.nav.contact}
            </a>
            
            <button
              onClick={onOpenModal}
              className="px-6 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-md"
            >
              {t.hero.cta}
            </button>

            <div className="flex items-center space-x-2 border-l border-primary/20 pl-4">
              <Globe className="w-4 h-4 text-primary" />
              <button
                onClick={() => setLanguage('tr')}
                className={`text-sm font-medium ${language === 'tr' ? 'text-primary' : 'text-primary/50'}`}
              >
                TR
              </button>
              <span className="text-primary/30">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium ${language === 'en' ? 'text-primary' : 'text-primary/50'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-dark"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-primary/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-primary hover:bg-secondary/20 rounded-md">
              {t.nav.home}
            </a>
            <a href="#services" className="block px-3 py-2 text-primary hover:bg-secondary/20 rounded-md">
              {t.nav.services}
            </a>
            <a href="#about" className="block px-3 py-2 text-primary hover:bg-secondary/20 rounded-md">
              {t.nav.about}
            </a>
            <a href="#contact" className="block px-3 py-2 text-primary hover:bg-secondary/20 rounded-md">
              {t.nav.contact}
            </a>
            <button
              onClick={() => { onOpenModal(); setIsOpen(false); }}
              className="w-full text-left block px-3 py-2 text-white bg-primary hover:bg-primary-dark rounded-md font-medium mt-2"
            >
              {t.hero.cta}
            </button>
            <div className="flex items-center space-x-4 px-3 py-2 mt-2 border-t border-primary/10">
              <Globe className="w-4 h-4 text-primary" />
              <button
                onClick={() => { setLanguage('tr'); setIsOpen(false); }}
                className={`text-sm font-medium ${language === 'tr' ? 'text-primary' : 'text-primary/50'}`}
              >
                TR
              </button>
              <button
                onClick={() => { setLanguage('en'); setIsOpen(false); }}
                className={`text-sm font-medium ${language === 'en' ? 'text-primary' : 'text-primary/50'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
