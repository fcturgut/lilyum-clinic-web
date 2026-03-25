import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Details() {
  const { t } = useLanguage();

  const details = [
    {
      id: 'hairTransplant',
      title: t.details.hairTransplant.title,
      desc: t.details.hairTransplant.desc,
      image: "https://placehold.co/800x600/FBDEC5/7A4F2E?text=Hair+Transplant"
    },
    {
      id: 'mesotherapy',
      title: t.details.mesotherapy.title,
      desc: t.details.mesotherapy.desc,
      image: "https://placehold.co/800x600/FBDEC5/7A4F2E?text=Mesotherapy"
    },
    {
      id: 'botox',
      title: t.details.botox.title,
      desc: t.details.botox.desc,
      image: "https://placehold.co/800x600/FBDEC5/7A4F2E?text=Botox"
    },
    {
      id: 'dermalFiller',
      title: t.details.dermalFiller.title,
      desc: t.details.dermalFiller.desc,
      image: "https://placehold.co/800x600/FBDEC5/7A4F2E?text=Dermal+Filler"
    }
  ];

  return (
    <section className="py-24 bg-secondary-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {details.map((detail, index) => (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {detail.title}
                </h3>
                <div className="w-16 h-1 bg-secondary rounded-full" />
                <p className="text-lg text-primary/80 leading-relaxed">
                  {detail.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
