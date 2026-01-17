import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(60).warning('Keep under 60 chars for best SEO'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(160).warning('Keep under 160 chars'),
        }),
        defineField({
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Override default OG image for this page',
        }),
        defineField({
            name: 'noIndex',
            title: 'No Index',
            type: 'boolean',
            description: 'Hide this page from search engines',
            initialValue: false,
        }),
    ],
})
