import { mkCtaLink } from './objects/mkCtaLink'
import { mkPortableText } from './objects/mkPortableText'
import { mkSeo } from './objects/mkSeo'

import { mkCtaSection } from './sections/mkCtaSection'
import { mkFaqSection } from './sections/mkFaqSection'
import { mkFeatureGridSection } from './sections/mkFeatureGridSection'
import { mkHeroSection } from './sections/mkHeroSection'
import { mkRichTextSection } from './sections/mkRichTextSection'
import { mkTestimonialsSection } from './sections/mkTestimonialsSection'

import { marketingPage } from './marketingPage'

export const mkSchemaTypes = [
    mkCtaLink,
    mkPortableText,
    mkSeo,
    mkHeroSection,
    mkFeatureGridSection,
    mkRichTextSection,
    mkTestimonialsSection,
    mkFaqSection,
    mkCtaSection,
    marketingPage,
]
