/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Details from './components/Details';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-primary">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <main>
          <Hero onOpenModal={() => setIsModalOpen(true)} />
          <About />
          <Services />
          <Details />
          <InstagramFeed />
          <Contact />
        </main>
        <Footer />
        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </LanguageProvider>
  );
}

