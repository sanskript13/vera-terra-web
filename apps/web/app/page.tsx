'use client'

import { HeroSection } from '../components/sections/HeroSection'
import { FeatureGridSection } from '../components/sections/FeatureGridSection'
import { CtaSection } from '../components/sections/CtaSection'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        eyebrow="Şanlıurfa'da"
        headline="Onarıcı tarımda saha danışmanlığı"
        subheadline="Tarladan başlayan değişim. Koçluk, program ve eğitimle toprak sağlığını güçlendirmeyi, uzun vadeli dayanıklılık inşa etmeyi hedefliyoruz."
        primaryCta={{ label: 'Tanışalım', href: '/iletisim' }}
        secondaryCta={{ label: 'Nasıl Çalışıyoruz', href: '/nasil-calisiyoruz' }}
      />

      {/* Biz Kimiz */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Sahadan geldik, sahada çalışıyoruz
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Onarıcı tarımda saha danışmanlığı yapıyoruz. Toprak sağlığı, su verimliliği ve uzun vadeli dayanıklılık üzerine çalışıyoruz. Tarla ziyaretleriyle başlıyor, veriyle ilerliyoruz. Kimyasal reçete değil, pratik değişim öneriyoruz.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Şanlıurfa ve çevresinde 4 üründe (Antep fıstığı, pamuk, Urfa biberi, buğdaygiller) aktif çalışıyoruz.
          </p>
        </div>
      </section>

      {/* Ne Yapıyoruz */}
      <FeatureGridSection
        title="Üç alanda hizmet veriyoruz"
        subtitle="Sahadan başlayan danışmanlık: birebir koçluk, program desteği ve eğitim. Her tarla farklıdır, her çiftçi farklı yoldan ilerler."
        items={[
          {
            title: 'Saha Koçluğu',
            text: 'Birebir tarla ziyaretleri. Toprak, su ve pratikleri yerinde değerlendiriyor, adım adım rehberlik ediyoruz.',
            icon: '🌱'
          },
          {
            title: 'Danışmanlık Programları',
            text: 'Sezonluk veya yıllık paket programlar. Baseline ölçümden, izleme ve raporlamaya kadar tüm süreç dahil.',
            icon: '📋'
          },
          {
            title: 'Eğitim & Akademi',
            text: 'Çiftçi, agronomist ve kooperatif yöneticileri için eğitim. Teorik değil, uygulama odaklı.',
            icon: '🎓'
          }
        ]}
      />

      {/* Odak: Onarıcı Tarım */}
      <section className="bg-gradient-to-b from-background to-primary-50/20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Toprak sağlığından başlar, uzun vadeli dayanıklılığa gider
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Onarıcı tarım bizim için bir sezonluk çözüm değil, yıllarca süren bir süreç. Toprak organik maddesini artırmayı, su tutma kapasitesini güçlendirmeyi, biyoçeşitliliği desteklemeyi amaçlıyoruz.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Kimyasal doz yazmıyoruz. Pratik değişiklikler öneriyoruz: rotasyon, toprak örtüsü, sulama zamanlaması gibi.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span className="text-muted-foreground">Toprak sağlığı: organik madde, yapı, su tutma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span className="text-muted-foreground">Su verimliliği: zamanlaması, miktarı, kayıp azaltma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span className="text-muted-foreground">Biyoçeşitlilik: habitat, yararlı organizmaları destekleme</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Çalıştığımız Ürünler */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Şanlıurfa'da dört üründe çalışıyoruz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Her ürünün kendi dinamikleri var. Lokal iklim, toprak tipi ve su kaynaklarına göre pratikler uyarlıyoruz.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-primary-500/20 bg-gradient-to-br from-primary-50/50 to-background p-6">
              <h3 className="text-xl font-semibold text-foreground">Antep Fıstığı</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Uzun dönem toprak sağlığı ve verim dayanıklılığı. Çok yıllık ürün, sabırlı yaklaşım gerektirir.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-accent-500/20 bg-gradient-to-br from-accent-50/50 to-background p-6">
              <h3 className="text-xl font-semibold text-foreground">Pamuk</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Rotasyon, su verimliliği ve toprak yapısı. Yıllık ürün, hızlı iterasyon mümkün.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-primary-500/20 bg-gradient-to-br from-primary-50/50 to-background p-6">
              <h3 className="text-xl font-semibold text-foreground">Urfa Biberi</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Organik madde artışı ve sulama optimizasyonu. Lokal ürün, özel pratikler.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-accent-500/20 bg-gradient-to-br from-accent-50/50 to-background p-6">
              <h3 className="text-xl font-semibold text-foreground">Buğdaygiller</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Minimal işleme, toprak örtüsü, rotasyon. Geniş alan uygulamaları.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nasıl Çalışıyoruz */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Tarladan başlıyor, veriyle ilerliyoruz
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ön görüşmeyle başlıyoruz: alan profili, hedefler, zorluklar. Sonra tarlaya gidiyoruz: toprak, su, mevcut pratikler. Baseline ölçüm yapıyoruz.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary">1.</span>
              <span className="text-muted-foreground">Ön görüşme ve alan profili</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary">2.</span>
              <span className="text-muted-foreground">Tarla değerlendirmesi ve baseline</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary">3.</span>
              <span className="text-muted-foreground">Sezonluk izleme ve rehberlik</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-primary">4.</span>
              <span className="text-muted-foreground">Ölçüm, raporlama, bir sonraki sezon</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Kimlerle Çalışıyoruz */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Küçük çiftçiden kooperatiflere
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Küçük ölçekli üreticilerle birebir koçluk yapıyoruz. Orta ölçekli çiftçilerle sezonluk veya yıllık programlar yürütüyoruz. Kooperatif ağlarıyla grup koordinasyonu ve eğitim çalışıyoruz.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Şanlıurfa ve çevresinde <strong className="text-foreground">650+ dekar</strong> alanda aktif olarak çalışıyoruz. Ortalama program süresi <strong className="text-foreground">12 ay</strong>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Tarlanız için ön görüşme yapalım"
        subtitle="Alan profilinizi dinleyelim, hedeflerinizi anlayalım, uygun yaklaşımı birlikte belirleyelim. 48 saat içinde dönüş yapıyoruz."
        primaryCta={{ label: 'Tanışalım', href: '/iletisim' }}
        secondaryCta={{ label: 'Email Gönder', href: 'mailto:hello@verattera.com' }}
      />
    </main>
  )
}
