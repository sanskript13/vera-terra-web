import { defineField, defineType } from 'sanity'

export const mkCtaSection = defineType({
    name: 'mkCtaSection',
    title: 'MK CTA',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'subtitle', title: 'Alt Başlık', type: 'text', rows: 2 }),
        defineField({ name: 'primaryCta', title: 'Birincil CTA', type: 'mkCtaLink' }),
        defineField({ name: 'secondaryCta', title: 'İkincil CTA', type: 'mkCtaLink' }),
    ],
    preview: { select: { title: 'title' } },
})
