import { defineField, defineType } from 'sanity'

export const mkHeroSection = defineType({
    name: 'mkHeroSection',
    title: 'MK Hero',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Üst Etiket', type: 'string' }),
        defineField({ name: 'headline', title: 'Başlık', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'subheadline', title: 'Alt Başlık', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', title: 'Birincil CTA', type: 'mkCtaLink' }),
        defineField({ name: 'secondaryCta', title: 'İkincil CTA', type: 'mkCtaLink' }),
        defineField({ name: 'image', title: 'Görsel', type: 'image', options: { hotspot: true } }),
    ],
    preview: { select: { title: 'headline', subtitle: 'eyebrow' } },
})
