import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileText, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Gizlilik Politikası" 
        description="Global Hedef Sigorta Gizlilik Politikası. Kişisel verilerinizin korunması ve güvenliği hakkında detaylı bilgi."
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 bg-brand-orange/10 rounded-3xl text-brand-orange mb-6"
          >
            <Lock size={40} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">Gizlilik Politikası</h1>
          <p className="text-slate-500 text-lg">
            Verilerinizin güvenliği ve gizliliği bizim için en öncelikli konudur.
          </p>
        </div>

        <div className="glass p-10 md:p-16 rounded-[3rem] shadow-xl">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-3 mb-4">
                <ShieldCheck className="text-brand-orange" />
                Genel Bakış
              </h2>
              <p>
                Bu Gizlilik Politikası, <strong>Global Hedef Sigorta Aracılık Hizmetleri Ltd. Şti.</strong> ("Şirket") tarafından işletilen globalhedefsigorta.com web sitesini ziyaret eden kullanıcıların verilerinin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-3 mb-4">
                <MessageCircle size={24} className="text-brand-orange" />
                WhatsApp Business API Etkileşimi
              </h2>
              <p>
                Web sitemiz üzerinden WhatsApp butonuna tıkladığınızda, WhatsApp Business API üzerinden bizimle iletişime geçersiniz. Bu etkileşim sırasında paylaştığınız telefon numarası, isim ve mesaj içerikleri, taleplerinize cevap verebilmek ve sigorta tekliflerinizi hazırlayabilmek amacıyla uçtan uca şifreli bir şekilde işlenmektedir.
              </p>
              <p>
                WhatsApp üzerinden yapılan görüşmelerde paylaşılan veriler, Meta (Facebook) gizlilik standartlarına ve şirketimizin veri güvenliği politikalarına tabidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-3 mb-4">
                <Eye size={24} className="text-brand-orange" />
                Toplanan Veriler
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>İletişim Formu ve WhatsApp üzerinden paylaşılan kimlik ve iletişim bilgileri.</li>
                <li>Sigorta teklifi için gerekli olan araç, konut veya sağlık bilgileri.</li>
                <li>Web sitesi kullanım istatistikleri (Çerezler aracılığıyla anonim olarak).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-3 mb-4">
                <FileText size={24} className="text-brand-orange" />
                Veri Güvenliği
              </h2>
              <p>
                Kişisel verileriniz, yetkisiz erişime, kayba veya kötüye kullanıma karşı endüstri standardı güvenlik önlemleri (SSL sertifikaları, şifreleme vb.) ile korunmaktadır. Verileriniz, yasal bir zorunluluk olmadıkça veya sigorta poliçesi düzenleme süreci gerektirmedikçe üçüncü şahıslarla paylaşılmaz.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-400 italic">
                Son Güncelleme: 1 Nisan 2024. Şirketimiz bu politikayı önceden haber vermeksizin güncelleme hakkını saklı tutar.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
