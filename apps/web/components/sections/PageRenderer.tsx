import { PageContent } from '@/content/types'
import { HeroSection } from './HeroSection'
import { CtaSection } from './CtaSection'
import { FeatureGridSection } from './FeatureGridSection'

type PageRendererProps = {
    content: PageContent
}

export function PageRenderer({ content }: PageRendererProps) {
    const { hero, sections } = content

    return (
        <main>
            <HeroSection
                eyebrow={hero.eyebrow}
                headline={hero.headline}
                subheadline={hero.subline}
                primaryCta={hero.primaryCta}
                secondaryCta={hero.secondaryCta}
            />

            {sections.map((section, index) => {
                switch (section.type) {
                    case 'text':
                        return (
                            <section key={index} className="py-16 md:py-24">
                                <div className="mx-auto max-w-3xl px-6">
                                    {section.heading && (
                                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                            {section.heading}
                                        </h2>
                                    )}
                                    {section.subheading && (
                                        <p className="mt-2 text-lg text-muted-foreground">{section.subheading}</p>
                                    )}
                                    <div className="mt-6 space-y-4">
                                        {section.content.split('\n\n').map((para, i) => (
                                            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )

                    case 'grid':
                        return (
                            <FeatureGridSection
                                key={index}
                                title={section.heading}
                                subtitle={section.lead}
                                items={section.items}
                            />
                        )

                    case 'list':
                        return (
                            <section key={index} className="py-16 md:py-24 bg-muted/30">
                                <div className="mx-auto max-w-3xl px-6">
                                    {section.heading && (
                                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                            {section.heading}
                                        </h2>
                                    )}
                                    {section.lead && (
                                        <p className="mt-4 text-lg text-muted-foreground">{section.lead}</p>
                                    )}
                                    <ul className="mt-8 space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-1 text-primary">✓</span>
                                                <span className="text-muted-foreground">
                                                    <strong>{item.title}</strong>
                                                    {item.description && `: ${item.description}`}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )

                    case 'cta':
                        return (
                            <CtaSection
                                key={index}
                                title={section.heading}
                                subtitle={section.lead}
                                primaryCta={section.primaryCta}
                                secondaryCta={section.secondaryCta}
                            />
                        )

                    default:
                        return null
                }
            })}
        </main>
    )
}
