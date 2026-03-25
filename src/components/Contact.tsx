import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Globe, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 rounded-r-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">
                {t.nav.contact}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                {t.contact.title}
              </h2>
              <div className="w-24 h-1 bg-secondary rounded-full" />
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-secondary-light/30 rounded-3xl border border-secondary/20 hover:bg-secondary-light/50 transition-colors">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">
                    {t.language === 'en' ? "Phone" : "Telefon"}
                  </h4>
                  <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="text-primary/70 hover:text-primary transition-colors text-lg">
                    {t.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-secondary-light/30 rounded-3xl border border-secondary/20 hover:bg-secondary-light/50 transition-colors">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">
                    {t.language === 'en' ? "Address" : "Adres"}
                  </h4>
                  <p className="text-primary/70 leading-relaxed">
                    {t.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-secondary-light/30 rounded-3xl border border-secondary/20 hover:bg-secondary-light/50 transition-colors">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">
                    {t.language === 'en' ? "Email" : "E-posta"}
                  </h4>
                  <a href={`mailto:${t.contact.email}`} className="text-primary/70 hover:text-primary transition-colors text-lg">
                    {t.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-secondary-light/30 rounded-3xl border border-secondary/20 hover:bg-secondary-light/50 transition-colors">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">
                    {t.language === 'en' ? "Website" : "Web Sitesi"}
                  </h4>
                  <a href={`https://${t.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
                    {t.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-primary p-8 md:p-12 rounded-[3rem] shadow-2xl text-white h-full flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold mb-8">
                {t.language === 'en' ? "Send us a message" : "Bize mesaj gönderin"}
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t.language === 'en' ? "Name Surname" : "Ad Soyad"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder={t.language === 'en' ? "John Doe" : "Ahmet Yılmaz"}
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t.language === 'en' ? "Phone Number" : "Telefon Numarası"}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t.language === 'en' ? "Message" : "Mesajınız"}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                    placeholder={t.language === 'en' ? "How can we help you?" : "Size nasıl yardımcı olabiliriz?"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-secondary text-primary font-bold rounded-2xl hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  {t.language === 'en' ? "Send Message" : "Mesaj Gönder"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
