'use client'

import { NewHeroSection } from '../components/sections/NewHeroSection'
import { SocialProofMini } from '../components/sections/SocialProofMini'
import { FeaturesGrid } from '../components/sections/FeaturesGrid'
import { HowItWorks } from '../components/sections/HowItWorks'
import { FAQAccordion } from '../components/sections/FAQAccordion'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <NewHeroSection
        headline="Antigravity ile yerçekimsiz bir ürün deneyimi"
        description="Gemini 3 Pro ile tasarım ve arayüz akışlarını hızlıca prototiple, test et ve iterasyonla geliştir."
        primaryCta={{ label: 'Başla', href: '/iletisim' }}
        secondaryCta={{ label: 'Nasıl çalışır?', href: '/nasil-calisiyoruz' }}
      />
      <SocialProofMini />
      <FeaturesGrid />
      <HowItWorks />
      <FAQAccordion />
    </main>
  )
}
