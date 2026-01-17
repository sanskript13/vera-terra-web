// Content Types - Type-safe content structure for all pages

export type CTALink = {
    label: string
    href: string
    variant?: 'primary' | 'secondary'
}

export type HeroContent = {
    eyebrow?: string
    headline: string
    subline: string
    primaryCta: CTALink
    secondaryCta?: CTALink
}

export type TextSectionContent = {
    type: 'text'
    heading: string
    content: string
    subheading?: string
}

export type ListSectionContent = {
    type: 'list'
    heading: string
    lead?: string
    items: Array<{
        title: string
        description: string
        icon?: string
    }>
}

export type GridSectionContent = {
    type: 'grid'
    heading: string
    lead?: string
    items: Array<{
        title: string
        text: string
        icon?: string
    }>
}

export type ProductsSectionContent = {
    type: 'products'
    heading: string
    lead?: string
    products: Array<{
        name: string
        description: string
    }>
}

export type ProcessSectionContent = {
    type: 'process'
    heading: string
    lead?: string
    steps: Array<{
        number: number
        title: string
        description: string
    }>
}

export type StatsSectionContent = {
    type: 'stats'
    heading: string
    stats: Array<{
        value: string
        label: string
    }>
    testimonial?: {
        quote: string
        author: string
    }
}

export type CTASectionContent = {
    type: 'cta'
    heading: string
    lead?: string
    primaryCta: CTALink
    secondaryCta?: CTALink
}

export type SectionContent =
    | TextSectionContent
    | ListSectionContent
    | GridSectionContent
    | ProductsSectionContent
    | ProcessSectionContent
    | StatsSectionContent
    | CTASectionContent

export type PageContent = {
    hero: HeroContent
    sections: SectionContent[]
}

export type PageMetadata = {
    title: string
    description: string
    keywords: string[]
}
