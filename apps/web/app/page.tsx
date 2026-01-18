'use client'

import { NewHeroSection } from '../components/sections/NewHeroSection'
import { TrustSignals } from '../components/sections/TrustSignals'
import { Section, PageShell } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/card'
import { CalloutCard } from '@/components/ui/CalloutCard'
import { CTABand } from '@/components/ui/CTABand'
import { Sprout, GraduationCap, Users, Wheat, MapPin } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'

const services = [
  {
    icon: Users,
    title: "Saha Koçluğu",
    description: "Çiftçi ve arazi sahibiyle sezonda birlikte ilerleme, gözlem ve geribildirim döngüsü.",
    href: "/saha-koclugu"
  },
  {
    icon: Sprout,
    title: "Danışmanlık Programları",
    description: "Toprak sağlığı, sulama yönetimi ve ürün bazlı saha odaklı program seçenekleri.",
    href: "/danismanlik-programlari"
  },
  {
    icon: GraduationCap,
    title: "Eğitim & Akademi",
    description: "Çiftçi eğitimleri, atölye çalışmaları ve onarıcı tarım uygulamaları bilgi transferi.",
    href: "/egitim-akademi"
  }
]

const focusAreas = [
  { icon: Sprout, title: "Fıstık", description: "Çukurova ve GAP bölgesi" },
  { icon: Wheat, title: "Pamuk", description: "Toprak sağlığı ve rotasyon" },
  { icon: Sprout, title: "Biber", description: "Açık alan ve sera" },
  { icon: Wheat, title: "Tahıl", description: "Organik madde yönetimi" }
]

const processSteps = [
  "İlk temas: hedef ve saha koşullarını netleştiririz",
  "Sahada gözlem ve ölçüm: veriyle karar alırız",
  "Sezon içi ritim: takip ve iyileştirme döngüsü kurarız"
]

export default function HomePage() {
  return (
    <PageShell>
      <main>
        {/* 1. Hero Section */}
        <NewHeroSection />

        {/* 2. Trust Signals */}
        <TrustSignals />

        {/* 3. Services - 3 Card Grid */}
        <Section size="lg">
          <SectionHeader
            eyebrow="HİZMETLER"
            title="Üç alanda birlikte çalışıyoruz"
            description="Saha koçluğu, program seçenekleri ve bilgi transferiyle onarıcı tarımı uygulamaya taşıyoruz."
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, ease: tokens.motion.easing }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {services.map((service, i) => (
              <Card key={i}>
                <service.icon className="w-10 h-10 text-primary-700 mb-4" strokeWidth={1.5} />
                <h3 className={cn(tokens.typography.h4, 'mb-3')}>{service.title}</h3>
                <p className={cn(tokens.typography.small, 'mb-4')}>{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  Detay <span className="ml-1">→</span>
                </Link>
              </Card>
            ))}
          </motion.div>
        </Section>

        {/* 4. How It Works Teaser */}
        <Section size="md" tone="default">
          <SectionHeader
            eyebrow="SÜREÇ"
            title="Nasıl çalışıyoruz?"
            description="Tarladan başlayan, gözlem ve kayıtla ilerleyen bir döngü."
            align="center"
          />
          <div className="mt-8 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {processSteps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-primary-700 mt-1 flex-shrink-0">•</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/nasil-calisiyoruz"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-700 border-2 border-primary/20 rounded-lg hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Tüm süreci gör <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </Section>

        {/* 5. Focus Areas Teaser */}
        <Section size="md">
          <SectionHeader
            eyebrow="ODAK ALANLARI"
            title="Ürün bazlı saha odağı"
            description="Dört ana üründe yerel koşullara uygun onarıcı yaklaşım geliştiriyoruz."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {focusAreas.map((area, i) => (
              <Card key={i}>
                <area.icon className="w-8 h-8 text-primary-700 mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold text-foreground mb-1">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/odak-alanlarimiz"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-700 border-2 border-primary/20 rounded-lg hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Tüm odak alanları <span className="ml-2">→</span>
            </Link>
          </div>
        </Section>

        {/* 6. Regional Context Callout */}
        <Section size="md">
          <div className="max-w-3xl mx-auto">
            <CalloutCard
              icon={MapPin}
              title="Bölgesel bağlam: Şanlıurfa"
              description="Harran Ovası'nın sıcak-kurak iklimi, tuzlu toprak riski ve sulama kısıtları; her uygulamayı bölgesel gerçekliklere dayandırmamızı zorunlu kılıyor. Çözümlerimizi bu koşullara göre şekillendiriyoruz."
              link={{ label: "Odak alanlarımız", href: "/odak-alanlarimiz" }}
            />
          </div>
        </Section>

        {/* 8. Closing CTA Band */}
        <CTABand
          title="Birlikte başlayalım"
          description="Saha koçluğu ve danışmanlık programlarımız hakkında konuşmak için iletişime geçin."
          primaryCta={{ label: "Tanışalım", href: "/iletisim" }}
          secondaryCta={{ label: "Hakkımızda", href: "/hakkimizda" }}
        />
      </main>
    </PageShell>
  )
}
