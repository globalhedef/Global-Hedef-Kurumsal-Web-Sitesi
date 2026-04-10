import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/logo-full.png" alt="Global Hedef Sigorta" className="h-14 w-auto brightness-0 invert" />
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            10 yılı aşkın tecrübemizle, Türkiye'nin önde gelen sigorta şirketleri ile iş birliği yaparak size en uygun çözümleri sunuyoruz.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-orange transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-orange transition-colors"><Facebook size={18} /></a>
            <a href="#" aria-label="Twitter" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-orange transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Hızlı Bağlantılar</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-brand-orange transition-colors">Ana Sayfa</Link></li>
            <li><Link to="/#hizmetler" className="hover:text-brand-orange transition-colors">Hizmetlerimiz</Link></li>
            <li><Link to="/#hakkimizda" className="hover:text-brand-orange transition-colors">Hakkımızda</Link></li>
            <li><Link to="/iletisim" className="hover:text-brand-orange transition-colors">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Yasal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/Gizlilik-Politikasi" className="hover:text-brand-orange transition-colors">Gizlilik Politikası</Link></li>
            <li><Link to="/KVKK-Aydinlatma-Metni" className="hover:text-brand-orange transition-colors">KVKK Aydınlatma Metni</Link></li>
            <li><Link to="/iletisim" className="hover:text-brand-orange transition-colors">Çerez Politikası</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">İletişim</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-orange shrink-0" />
              <span>İstiklal Mah. Muhsin Yazıcıoğlu Bulvarı N:51/10 Serdivan / SAKARYA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-orange shrink-0" />
              <span>+90 530 377 10 54</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-orange shrink-0" />
              <span>info@globalhedef.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 Global Hedef Sigorta Aracılık Hizmetleri Ltd. Şti. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
