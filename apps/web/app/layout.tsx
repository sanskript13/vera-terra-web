import './globals.css'
import { Inter, Outfit } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-outfit',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verattera.com'

export const metadata = {
  title: 'Vera Terra | Onarıcı Tarım Danışmanlığı Şanlıurfa',
  description: 'Tarladan başlayan değişim. Koçluk, program ve eğitimle toprak sağlığını güçlendirmeyi, uzun vadeli dayanıklılık inşa etmeyi hedefliyoruz.',
  openGraph: {
    title: 'Vera Terra | Onarıcı Tarım Danışmanlığı Şanlıurfa',
    description: 'Tarladan başlayan değişim. Koçluk, program ve eğitimle toprak sağlığını güçlendirmeyi, uzun vadeli dayanıklılık inşa etmeyi hedefliyoruz.',
    url: siteUrl,
    siteName: 'Vera Terra',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vera Terra | Onarıcı Tarım Danışmanlığı Şanlıurfa',
    description: 'Tarladan başlayan değişim. Koçluk, program ve eğitimle toprak sağlığını güçlendirmeyi hedefliyoruz.',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
