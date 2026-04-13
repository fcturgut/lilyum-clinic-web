import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-light">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1920&q=80"
          alt="Beauty Clinic"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-light/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary/70 font-medium tracking-wider uppercase text-sm mb-4 block">
              {t.clinic.name}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-primary/80 mb-8 max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {t.hero.cta}
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-primary bg-white border border-primary/20 hover:bg-secondary/20 transition-colors duration-300"
              >
                {t.nav.services}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-secondary rounded-tl-full opacity-30 blur-3xl" />
      <div className="absolute top-0 left-1/4 w-1/4 h-1/4 bg-primary rounded-full opacity-10 blur-3xl" />
    </section>
  );
}
