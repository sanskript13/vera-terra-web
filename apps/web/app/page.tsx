import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { sanityFetch } from '@/sanity/lib/client'
import { MARKETING_PAGE_BY_SLUG_QUERY } from '@/sanity/lib/queries'

type CtaLink = { label?: string; href?: string; variant?: 'primary' | 'secondary' }

function CtaButton({ cta }: { cta?: CtaLink }) {
  if (!cta?.href || !cta?.label) return null
  const isExternal = /^https?:\/\//.test(cta.href) || /^mailto:/.test(cta.href) || /^tel:/.test(cta.href)

  const className =
    cta.variant === 'secondary'
      ? 'inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium'
      : 'inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white'

  if (isExternal) {
    return (
      <a className={className} href={cta.href}>
        {cta.label}
      </a>
    )
  }
  return (
    <Link className={className} href={cta.href}>
      {cta.label}
    </Link>
  )
}

function renderSection(section: any, i: number) {
  switch (section._type) {
    case 'mkHeroSection':
      return (
        <section key={i} className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            {section.eyebrow ? <p className="mb-3 text-sm opacity-70">{section.eyebrow}</p> : null}
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{section.headline}</h1>
            {section.subheadline ? <p className="mt-4 max-w-2xl text-base opacity-80">{section.subheadline}</p> : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton cta={section.primaryCta} />
              <CtaButton cta={section.secondaryCta} />
            </div>
          </div>
        </section>
      )

    case 'mkFeatureGridSection':
      return (
        <section key={i} className="py-14">
          <div className="mx-auto max-w-5xl px-6">
            {section.title ? <h2 className="text-2xl font-semibold">{section.title}</h2> : null}
            {section.subtitle ? <p className="mt-2 max-w-2xl opacity-80">{section.subtitle}</p> : null}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {(section.items || []).map((it: any, idx: number) => (
                <div key={idx} className="rounded-xl border p-5">
                  <h3 className="font-semibold">{it.title}</h3>
                  {it.text ? <p className="mt-2 text-sm opacity-80">{it.text}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'mkRichTextSection':
      return (
        <section key={i} className="py-14">
          <div className="mx-auto max-w-3xl px-6">
            {section.title ? <h2 className="text-2xl font-semibold">{section.title}</h2> : null}
            <div className="prose prose-invert mt-4 max-w-none">
              <PortableText value={section.content || []} />
            </div>
          </div>
        </section>
      )

    case 'mkCtaSection':
      // bazı şema varyantlarında secondaryCta da olabilir; varsa render edelim
      return (
        <section key={i} className="py-14">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border p-8">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.text ? <p className="mt-2 max-w-2xl opacity-80">{section.text}</p> : null}
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaButton cta={section.cta} />
                <CtaButton cta={section.secondaryCta} />
              </div>
            </div>
          </div>
        </section>
      )

    default:
      return null
  }
}

export default async function HomePage() {
  const page = await sanityFetch({
    query: MARKETING_PAGE_BY_SLUG_QUERY,
    params: { slug: '/' },
    revalidate: 60,
    tags: ['marketingPage'],
  })

  if (!page) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Home sayfası bulunamadı</h1>
        <p className="mt-2 opacity-80">
          Sanity'de <code>marketingPage</code> tipinde slug'ı <code>home</code> olan dokümanı kontrol edin.
        </p>
      </main>
    )
  }

  return <main>{(page.sections || []).map(renderSection)}</main>
}
