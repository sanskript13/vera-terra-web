import {PortableText} from '../PortableText'

type Section = {_key?: string; _type: string; [key: string]: any}

function Hero({headline, subheadline, imageUrl, primaryCta}: any) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">{headline}</h1>
          {subheadline ? <p className="text-lg opacity-80">{subheadline}</p> : null}
          {primaryCta?.href && primaryCta?.label ? (
            <a className="inline-flex rounded-md border px-4 py-2" href={primaryCta.href}>
              {primaryCta.label}
            </a>
          ) : null}
        </div>
        {imageUrl ? (
          <div className="rounded-xl overflow-hidden border">
            <img src={imageUrl} alt={headline || 'Hero image'} className="w-full h-auto" />
          </div>
        ) : null}
      </div>
    </section>
  )
}

function RichTextSection({content}: any) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-6">
        <PortableText value={content} />
      </div>
    </section>
  )
}

function FeatureGrid({title, items}: any) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
        <div className="grid gap-4 md:grid-cols-3">
          {(items || []).map((it: any, i: number) => (
            <div key={i} className="rounded-xl border p-4">
              {it.title ? <h3 className="font-medium">{it.title}</h3> : null}
              {it.description ? <p className="mt-2 opacity-80">{it.description}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials({title, items}: any) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6 space-y-6">
        {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
        <div className="grid gap-4 md:grid-cols-3">
          {(items || []).map((it: any, i: number) => (
            <div key={i} className="rounded-xl border p-4">
              {it.quote ? <p className="opacity-90">“{it.quote}”</p> : null}
              <div className="mt-3 text-sm opacity-70">
                {it.name ? <div>{it.name}</div> : null}
                {it.role ? <div>{it.role}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ({title, items}: any) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-6 space-y-6">
        {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
        <div className="space-y-3">
          {(items || []).map((it: any, i: number) => (
            <details key={i} className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">{it.question}</summary>
              {it.answer ? <p className="mt-2 opacity-80">{it.answer}</p> : null}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA({title, description, button}: any) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
            {description ? <p className="mt-2 opacity-80">{description}</p> : null}
          </div>
          {button?.href && button?.label ? (
            <a className="inline-flex rounded-md border px-4 py-2" href={button.href}>
              {button.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function SectionRenderer({sections}: {sections: Section[]}) {
  return (
    <>
      {(sections || []).map((s) => {
        const key = s._key || `${s._type}-${Math.random()}`
        switch (s._type) {
          case 'hero':
            return <Hero key={key} {...s} />
          case 'richTextSection':
            return <RichTextSection key={key} {...s} />
          case 'featureGrid':
            return <FeatureGrid key={key} {...s} />
          case 'testimonials':
            return <Testimonials key={key} {...s} />
          case 'faq':
            return <FAQ key={key} {...s} />
          case 'cta':
            return <CTA key={key} {...s} />
          default:
            return null
        }
      })}
    </>
  )
}
