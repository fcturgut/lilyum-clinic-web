import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstagramFeed() {
  const { t } = useLanguage();

  // Mock Instagram feed data
  const feed = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      likes: 124,
      comments: 12
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=400&q=80",
      likes: 89,
      comments: 5
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
      likes: 256,
      comments: 34
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80",
      likes: 145,
      comments: 8
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80",
      likes: 312,
      comments: 45
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
      likes: 178,
      comments: 19
    }
  ];

  return (
    <section className="py-24 bg-secondary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-secondary-light rounded-full mb-6">
            <Instagram className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            {t.instagram.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <div className="flex justify-center gap-4 text-primary/70 font-medium">
            <a href="https://instagram.com/ltmclinic" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              @ltmclinic
            </a>
            <span>|</span>
            <a href="https://instagram.com/ltmhair" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              @ltmhair
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {feed.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center text-white font-medium">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  {post.likes}
                </div>
                <div className="flex items-center text-white font-medium">
                  <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" />
                  </svg>
                  {post.comments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
