import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary-light/30 rounded-l-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x1067/FBDEC5/7A4F2E?text=Doctor+Photo"
                  alt={t.clinic.doctor}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-secondary/20 max-w-xs">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  {t.clinic.doctor}
                </h3>
                <p className="text-primary/70 font-medium">
                  {t.clinic.medicalAesthetics}
                </p>
                <p className="text-primary/70 font-medium">
                  {t.clinic.hairTransplant}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">
                {t.nav.about}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                {t.clinic.name}
              </h2>
              <div className="w-24 h-1 bg-secondary rounded-full mb-8" />
              <p className="text-lg text-primary/80 leading-relaxed mb-8">
                {t.language === 'en' 
                  ? "At Private Lilyum Medical Center, we combine medical expertise with aesthetic vision to help you achieve your best self. Our clinic is certified by the Ministry of Health, ensuring the highest standards of safety and care in all our procedures."
                  : "Özel Lilyum Tıp Merkezi'nde, en iyi halinize ulaşmanıza yardımcı olmak için tıbbi uzmanlığı estetik vizyonla birleştiriyoruz. Kliniğimiz Sağlık Bakanlığı onaylı olup, tüm işlemlerimizde en yüksek güvenlik ve bakım standartlarını sağlamaktadır."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-secondary-light/50 rounded-2xl">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    {t.language === 'en' ? "Certified Clinic" : "Onaylı Klinik"}
                  </h4>
                  <p className="text-sm text-primary/70">
                    {t.language === 'en' ? "Ministry of Health approved" : "Sağlık Bakanlığı onaylı"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-secondary-light/50 rounded-2xl">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    {t.language === 'en' ? "Expert Doctor" : "Uzman Doktor"}
                  </h4>
                  <p className="text-sm text-primary/70">
                    {t.language === 'en' ? "Years of experience" : "Yılların tecrübesi"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
