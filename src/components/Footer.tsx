import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, MapPin, Phone, Globe, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-secondary">
              LİLYUM
            </h3>
            <p className="text-white/70 max-w-xs">
              {t.clinic.name} <br />
              {t.clinic.medicalAesthetics} <br />
              {t.clinic.hairTransplant}
            </p>
            <p className="text-secondary font-medium">
              {t.clinic.doctor}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-secondary">
              {t.nav.services}
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>{t.services.hairHealth.title}</li>
              <li>{t.services.skinRejuvenation.title}</li>
              <li>{t.services.injection.title}</li>
              <li>{t.services.energyBased.title}</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-secondary">
              {t.nav.contact}
            </h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">
                  {t.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href={`mailto:${t.contact.email}`} className="hover:text-secondary transition-colors">
                  {t.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-secondary shrink-0" />
                <a href={`https://${t.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  {t.contact.website}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex gap-2">
                  <a href="https://instagram.com/ltmclinic" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    @ltmclinic
                  </a>
                  <span>/</span>
                  <a href="https://instagram.com/ltmhair" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    @ltmhair
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.clinic.name}. {t.language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
        </div>
      </div>
    </footer>
  );
}
