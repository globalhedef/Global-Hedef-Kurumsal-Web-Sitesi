import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function KVKK() {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="KVKK Aydınlatma Metni" 
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca aydınlatma metni ve veri işleme politikalarımız."
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-4 bg-brand-orange/10 rounded-3xl text-brand-orange mb-6"
          >
            <ShieldCheck size={40} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">KVKK Aydınlatma Metni</h1>
          <p className="text-slate-500 text-lg">
            Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgilendirme.
          </p>
        </div>

        <div className="glass p-10 md:p-16 rounded-[3rem] shadow-xl">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Veri Sorumlusu</h2>
              <p>
                <strong>Global Hedef Sigorta Aracılık Hizmetleri Ltd. Şti.</strong> olarak kişisel verilerinizin güvenliğine büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla, kişisel verileriniz aşağıda açıklanan kapsamda ve mevzuat tarafından öngörülen sınırlar dahilinde işlenebilecektir.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Kişisel Verilerin İşlenme Amacı</h2>
              <p>
                Toplanan kişisel verileriniz; sigorta tekliflerinin hazırlanması, poliçe süreçlerinin yönetilmesi, hasar işlemlerinin takibi, yasal yükümlülüklerin yerine getirilmesi ve sizlere daha iyi hizmet sunulabilmesi amaçlarıyla işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. İşlenen Kişisel Veriler</h2>
              <p>
                Ad-soyad, T.C. Kimlik Numarası, iletişim bilgileri (telefon, e-posta, adres), araç plaka ve ruhsat bilgileri, konut bilgileri gibi sigortacılık faaliyetleri için gerekli olan verilerdir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Verilerin Aktarımı</h2>
              <p>
                Kişisel verileriniz, sigorta poliçenizin düzenlenebilmesi amacıyla acentesi olduğumuz sigorta şirketlerine (Türkiye Sigorta, Quick Sigorta, Sompo Sigorta, Hepiyi Sigorta, Corpus Sigorta, Acıbadem Sigorta, Eureko Sigorta, GarantiBBVA Emeklilik vb.) ve yasal zorunluluk hallerinde yetkili kamu kurumlarına aktarılabilmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Haklarınız</h2>
              <p>
                KVKK’nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını öğrenme ve düzeltilmesini isteme haklarına sahipsiniz. Başvurularınızı info@globalhedef.com adresine iletebilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
