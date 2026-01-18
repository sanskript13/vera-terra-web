'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Timeline } from '@/components/ui/Timeline'
import { CTABand } from '@/components/ui/CTABand'
import { tokens } from '@/lib/design-tokens'

const processSteps = [
  {
    title: "İlk Temas & Çerçeve",
    description: "Başlangıç görüşmesinde ihtiyaç ve hedefleri netleştiririz, çalışma çerçevesini birlikte çizeriz.",
    bullets: [
      "Üretim sisteminizi ve önceliklerinizi dinleriz",
      "Beklentileri ve mevcut zorlukları konuşuruz",
      "Program seçeneklerini ve kapsamını açıklarız",
      "Birlikte çalışma yöntemi ve zamanlamasını belirleriz"
    ]
  },
  {
    title: "Sahaya Çıkış",
    description: "Tarlada gözlem yaparak başlangıç durumunu belgeliyoruz, toprak ve su sistemini yerinde inceliyoruz.",
    bullets: [
      "Toprak sağlığı ve yapı gözlemi",
      "Sulama sistemi ve su kullanımı değerlendirmesi",
      "Bitki sağlığı ve beslenme durumu kontrolü",
      "Fotoğraf ve not ile belgeleme",
      "İlk bulgular hakkında kısa geri bildirim"
    ]
  },
  {
    title: "Birlikte Plan",
    description: "Sahadan toplanan bilgilerle küçük, uygulanabilir adımları planlıyoruz. Her adımı neden-nasıl mantığıyla açıklıyoruz.",
    bullets: [
      "Gözlem bulgularını paylaşıyoruz",
      "Öncelik sırasına göre müdahale alanları belirliyoruz",
      "Kısa ve orta vadeli hedefler koyuyoruz",
      "Uygulama takvimi ve kaynak ihtiyaçlarını planlıyoruz"
    ]
  },
  {
    title: "Sezon Boyu Ritim",
    description: "Düzenli saha ziyaretleri ve uzaktan iletişimle süreci takip ediyoruz. Her aşamada gözlem ve geribildirim döngüsünü sürdürüyoruz.",
    bullets: [
      "Planlanan periyotlarda saha ziyaretleri",
      "Uygulama sonuçlarının gözlemlenmesi",
      "Telefon/mesaj ile hızlı danışma desteği",
      "Sezon içi uyarlamalar ve öneriler",
      "Kayıt ve fotoğraflarla ilerleme takibi"
    ]
  },
  {
    title: "Öğrenme & İyileştirme",
    description: "Sezon sonunda ne işe yaradı, neleri geliştirmemiz gerekiyor diye değerlendiriyoruz. Gelecek sezon için öğrendiklerimizi plana yansıtıyoruz.",
    bullets: [
      "Sezon sonu değerlendirme toplantısı",
      "Başarılı uygulamaları ve zorlukları gözden geçirme",
      "Toprak, bitki ve sistem gelişimini kayıt altına alma",
      "Bir sonraki sezon için öğrenme ve hedefler",
      "Uzun vadeli iz bırakma stratejisi"
    ]
  }
]

export default function NasilCalisiyoruzPage() {
  return (
    <main>
      {/* Hero Section with Page Title */}
      <section className={tokens.spacing.section.md}>
        <div className={tokens.container.default}>
          <SectionHeader
            eyebrow="SÜREÇ"
            title="Nasıl Çalışıyoruz"
            headingLevel="h1"
            description="Tarladan başlayıp sezon boyu devam eden bir döngü. Gözlem, plan, uygulama ve öğrenme adımlarıyla toprak sağlığını ve uzun vadeli dayanıklılığı birlikte inşa ediyoruz."
            align="center"
          />
        </div>
      </section>

      {/* Timeline/Process Steps */}
      <section className={cn(tokens.spacing.section.lg, 'bg-muted/20')}>
        <div className={tokens.container.default}>
          <Timeline steps={processSteps} />
        </div>
      </section>

      {/* Closing CTA */}
      <CTABand
        title="Hadi tanışalım"
        description="Çalışma sürecimiz hakkında daha fazla bilgi almak veya programa başlamak için iletişime geçin."
        primaryCta={{ label: "İletişim Formu", href: "/iletisim" }}
        secondaryCta={{ label: "Hakkımızda", href: "/hakkimizda" }}
      />
    </main>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
