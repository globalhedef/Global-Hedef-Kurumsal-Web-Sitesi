import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="İletişim" 
        description="Global Hedef Sigorta Sakarya ofisimizle iletişime geçin. Adres, telefon ve WhatsApp üzerinden hızlı teklif alabilirsiniz."
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-6"
          >
            İletişim & <span className="text-brand-orange">KVKK</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Sorularınız, teklif talepleriniz ve KVKK süreçleri hakkında her zaman yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <div className="glass p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-xl text-brand-navy">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-navy mb-1">Adres</p>
                  <p className="text-sm text-slate-500">İstiklal Mah. Muhsin Yazıcıoğlu Bulvarı N:51/16 Serdivan / SAKARYA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-xl text-brand-navy">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-navy mb-1">Telefon & WhatsApp</p>
                  <p className="text-sm text-slate-500">+90 530 377 10 54</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-xl text-brand-navy">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-navy mb-1">E-Posta</p>
                  <p className="text-sm text-slate-500">info@globalhedef.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-xl text-brand-navy">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-brand-navy mb-1">Çalışma Saatleri</p>
                  <p className="text-sm text-slate-500">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/905303771054"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-6 rounded-3xl font-bold text-xl shadow-xl hover:scale-[1.01] transition-all"
            >
              <MessageCircle size={24} />
              WhatsApp'tan Yazın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
