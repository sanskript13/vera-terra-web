import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { pageContent, metadata as pageMetadata } from '@/content/pages/iletisim'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verattera.com'

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: `${siteUrl}/iletisim`,
    siteName: 'Vera Terra',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.title,
    description: pageMetadata.description,
  },
}

export default function IletisimPage() {
  const { hero } = pageContent

  return (
    <main>
      {/* Hero */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {hero.headline}
          </h1>
          {hero.subline && (
            <p className="mt-4 text-lg text-muted-foreground">{hero.subline}</p>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
