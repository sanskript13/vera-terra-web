// Marketing Page Types
export interface MarketingPage {
    _id: string
    _type: 'marketingPage'
    title: string
    slug: {
        current: string
    }
    seo?: MkSeo
    sections: MkSection[]
}

export interface MkSeo {
    _type: 'mkSeo'
    title?: string
    description?: string
    ogImage?: SanityImage
    noIndex?: boolean
}

export interface SanityImage {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
    hotspot?: {
        x: number
        y: number
        height: number
        width: number
    }
    crop?: {
        top: number
        bottom: number
        left: number
        right: number
    }
}

// Section Types
export type MkSection =
    | MkHeroSection
    | MkFeatureGridSection
    | MkRichTextSection
    | MkTestimonialsSection
    | MkFaqSection
    | MkCtaSection

export interface MkHeroSection {
    _key: string
    _type: 'mkHeroSection'
    eyebrow?: string
    headline: string
    subheadline?: string
    primaryCta?: MkCtaLink
    secondaryCta?: MkCtaLink
    image?: SanityImage
}

export interface MkFeatureGridSection {
    _key: string
    _type: 'mkFeatureGridSection'
    title?: string
    subtitle?: string
    items: MkFeatureItem[]
}

export interface MkFeatureItem {
    _key: string
    _type: 'mkFeatureItem'
    title: string
    text?: string
    icon?: string
}

export interface MkRichTextSection {
    _key: string
    _type: 'mkRichTextSection'
    title?: string
    content: PortableTextBlock[]
}

export interface MkTestimonialsSection {
    _key: string
    _type: 'mkTestimonialsSection'
    title?: string
    items: MkTestimonialItem[]
}

export interface MkTestimonialItem {
    _key: string
    _type: 'mkTestimonialItem'
    quote: string
    name: string
    role?: string
    company?: string
    avatar?: SanityImage
}

export interface MkFaqSection {
    _key: string
    _type: 'mkFaqSection'
    title?: string
    items: MkFaqItem[]
}

export interface MkFaqItem {
    _key: string
    _type: 'mkFaqItem'
    question: string
    answer: PortableTextBlock[]
}

export interface MkCtaSection {
    _key: string
    _type: 'mkCtaSection'
    title: string
    subtitle?: string
    primaryCta?: MkCtaLink
    secondaryCta?: MkCtaLink
}

export interface MkCtaLink {
    _type: 'mkCtaLink'
    label: string
    href: string
    variant?: 'primary' | 'secondary'
}

// Portable Text Types
export interface PortableTextBlock {
    _key: string
    _type: 'block'
    children: PortableTextSpan[]
    markDefs?: PortableTextMarkDef[]
    style?: string
    listItem?: string
    level?: number
}

export interface PortableTextSpan {
    _key: string
    _type: 'span'
    text: string
    marks?: string[]
}

export interface PortableTextMarkDef {
    _key: string
    _type: string
    [key: string]: unknown
}
