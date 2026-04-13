import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Syringe, Sparkles, Scissors, Zap } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'hairHealth',
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: t.services.hairHealth.title,
      items: t.services.hairHealth.items,
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'skinRejuvenation',
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: t.services.skinRejuvenation.title,
      items: t.services.skinRejuvenation.items,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'injection',
      icon: <Syringe className="w-8 h-8 text-primary" />,
      title: t.services.injection.title,
      items: t.services.injection.items,
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'energyBased',
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t.services.energyBased.title,
      items: t.services.energyBased.items,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-secondary-light/30 border border-secondary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-primary/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
