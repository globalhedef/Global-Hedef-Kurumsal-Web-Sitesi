import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import SEO from '../components/SEO';
import { 
  Shield, 
  Car, 
  Home as HomeIcon, 
  Heart, 
  Briefcase, 
  Flame, 
  Building2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const partners = [
  "Türkiye Sigorta", "Quick Sigorta", "Sompo Sigorta", "Hepiyi Sigorta", "Corpus Sigorta", "Acıbadem Sigorta", "Eureko Sigorta", "GarantiBBVA Emeklilik"
];

const partnersDouble = [...partners, ...partners];

const services = [
  {
    title: "BES & Hayat Sigortası",
    desc: "Geleceğinizi ve sevdiklerinizi güvence altına alın, emeklilikte rahat edin.",
    icon: Heart,
    color: "bg-rose-500"
  },
  {
    title: "DASK & Konut Sigortası",
    desc: "Evinizi deprem, yangın ve diğer risklere karşı koruma altına alın.",
    icon: HomeIcon,
    color: "bg-blue-500"
  },
  {
    title: "Trafik & Kasko",
    desc: "Aracınız için en kapsamlı teminatlar ve hızlı hasar süreçleri.",
    icon: Car,
    color: "bg-brand-orange"
  },
  {
    title: "İşyeri & All-Risk",
    desc: "İşletmenizi ve yatırımlarınızı her türlü operasyonel riske karşı koruyun.",
    icon: Briefcase,
    color: "bg-slate-700"
  }
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Global Hedef Sigorta",
    "image": "https://globalhedefsigorta.com/logo-full.png",
    "@id": "https://globalhedefsigorta.com",
    "url": "https://globalhedefsigorta.com",
    "telephone": "+905303771054",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İstiklal Mah. Muhsin Yazıcıoğlu Bulvarı N:51/16",
      "addressLocality": "Serdivan",
      "addressRegion": "Sakarya",
      "postalCode": "54050",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7731,
      "longitude": 30.4014
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/globalhedefsigorta"
    ]
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Sakarya" 
        description="Global Hedef Sigorta Sakarya'da BES, Hayat, Kasko, Trafik ve Konut sigortalarında uzman kadrosuyla en uygun teklifleri sunar. 10+ yıllık tecrübe."
      />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white p-4 rounded-[2rem] shadow-xl shadow-brand-orange/10 border border-brand-orange/5"
              >
                <img src="/logo-icon.png" alt="Global Hedef Emblem" className="h-16 md:h-20 w-auto" />
              </motion.div>
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold tracking-widest uppercase mb-6">
              Geleceğinizi Güvence Altına Alıyoruz
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy mb-8 leading-[1.1] tracking-tight">
              Sigortada <span className="text-brand-orange">Global</span> Standartlar,<br />
              Yerel <span className="text-blue-600">Güven.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
              Global Hedef Sigorta olarak, 10 yılı aşkın tecrübemizle risklerinizi yönetiyor, 
              ihtiyaçlarınıza en hızlı ve optimum çözümleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/905303771054"
                className="w-full sm:w-auto bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Hızlı Teklif Al
                <ArrowRight size={20} />
              </a>
              <a
                href="#hizmetler"
                className="w-full sm:w-auto glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all text-slate-700"
              >
                Hizmetlerimizi İncele
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Güçlü İş Ortaklarımız</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-scroll whitespace-nowrap items-center py-4">
            {partnersDouble.map((partner, i) => (
              <div key={i} className="mx-12 flex items-center gap-3 hover:scale-105 transition-all cursor-default opacity-60 hover:opacity-100">
                <span className="text-brand-orange text-3xl font-black">#</span>
                <span className="text-2xl font-display font-black text-brand-navy tracking-tighter">{partner.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">Kapsamlı Sigorta Çözümleri</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Bireysel ve kurumsal tüm ihtiyaçlarınız için Türkiye'nin en güçlü acentelikleri ile yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2rem] group hover:shadow-2xl hover:shadow-brand-navy/5 transition-all"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg", service.color)}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/iletisim" className="text-brand-orange font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı Bilgi <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="Global Hedef Sigorta Ofis"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-brand-orange p-1 rounded-xl">
                  <img src="/logo-icon.png" alt="Logo" className="w-10 h-10 brightness-0 invert" />
                </div>
                <div>
                  <p className="text-2xl font-black text-brand-navy">10+ Yıl</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Sektör Tecrübesi</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"Müşterilerimizin taleplerine en hızlı ve optimum çözümler sunuyoruz."</p>
            </div>
          </div>

          <div>
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">Biz Kimiz?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
              Gücümüzü Tecrübemizden,<br />Enerjimizi Sizden Alıyoruz.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              10 yılı aşkın bir süredir Finans, Bankacılık, Elementer & Hayat Sigortaları ve Reel Sektörden edindiğimiz tecrübelerimizi birleştirdik. Müthiş bir ekip olduk!
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Şirketimizi 2023 yılı Ekim ayında kurduk. Türkiye'nin önde gelen şirketleriyle acentelik sözleşmeleri imzaladık ve Sigorta Aracılık Faaliyetlerimize fiilen başladık.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Hızlı & Optimum Çözümler",
                "Güçlü Acentelik Ağı",
                "7/24 WhatsApp Desteği",
                "Uzman Danışman Kadrosu"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                  <span className="font-bold text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-brand-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10">
            Hemen Teklif Alın,<br />Risklerinizi Bize Bırakın.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            WhatsApp üzerinden sadece birkaç dakika içinde en uygun sigorta teklifini hazırlayalım.
          </p>
          <a
            href="https://wa.me/905303771054"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-orange text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-orange/30 hover:scale-105 active:scale-95 transition-all relative z-10"
          >
            WhatsApp ile Teklif Al
            <ArrowRight size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
