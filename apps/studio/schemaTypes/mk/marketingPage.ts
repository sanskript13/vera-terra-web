import { defineField, defineType } from 'sanity'

export const marketingPage = defineType({
    name: 'marketingPage',
    title: 'Marketing Page',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string', validation: (r) => r.required() }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (r) => r.required(),
        }),
        defineField({ name: 'seo', title: 'SEO', type: 'mkSeo' }),
        defineField({
            name: 'sections',
            title: 'Bölümler',
            type: 'array',
            of: [
                { type: 'mkHeroSection' },
                { type: 'mkFeatureGridSection' },
                { type: 'mkRichTextSection' },
                { type: 'mkTestimonialsSection' },
                { type: 'mkFaqSection' },
                { type: 'mkCtaSection' },
            ],
            validation: (r) => r.required().min(1),
        }),
    ],
    preview: { select: { title: 'title', subtitle: 'slug.current' } },
})
