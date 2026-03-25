import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    callDate: '',
    callTime: '',
    message: ''
  });

  const preferredTimeOptions = Array.from({ length: 10 }, (_, i) => {
    const start = i + 9;
    const end = start + 1;
    return `${start.toString().padStart(2, '0')}:00 - ${end.toString().padStart(2, '0')}:00`;
  });

  const callTimeOptions = Array.from({ length: 14 }, (_, i) => {
    const start = i + 8;
    const end = start + 1;
    return `${start.toString().padStart(2, '0')}:00 - ${end.toString().padStart(2, '0')}:00`;
  });

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(t.appointment.whatsappMsg);
    window.open(`https://wa.me/905324366375?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Randevu Talebi: ${formData.name}`);
    const body = encodeURIComponent(
      `İsim: ${formData.name}\nTelefon: ${formData.phone}\nRandevu Tarihi: ${formData.date}\nSaat: ${formData.time}\nArama Tarihi: ${formData.callDate}\nArama Saati: ${formData.callTime}\nMesaj: ${formData.message}`
    );
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="p-6 sm:p-8 border-b border-secondary/20 flex justify-between items-center bg-secondary-light/30">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              {t.appointment.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-primary/50 hover:text-primary hover:bg-secondary/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 sm:p-8 overflow-y-auto">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/20 mb-8"
            >
              <MessageCircle className="w-6 h-6" />
              {t.appointment.whatsapp}
            </button>

            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-secondary/30"></div>
              </div>
              <div className="relative bg-white px-4 text-sm font-medium text-primary/50">
                {t.appointment.or}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                {t.appointment.formTitle}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> {t.appointment.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {t.appointment.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {t.appointment.callDate}
                  </label>
                  <input
                    type="date"
                    name="callDate"
                    required
                    value={formData.callDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {t.appointment.callTime}
                  </label>
                  <select
                    name="callTime"
                    required
                    value={formData.callTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none"
                  >
                    <option value="" disabled>{t.appointment.selectTime}</option>
                    {callTimeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {t.appointment.date}
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {t.appointment.time}
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all appearance-none"
                  >
                    <option value="" disabled>{t.appointment.selectTime}</option>
                    {preferredTimeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-primary/80 text-sm font-medium mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {t.appointment.message}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-light/20 border border-secondary/30 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors duration-300 shadow-lg"
              >
                {t.appointment.submit}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
