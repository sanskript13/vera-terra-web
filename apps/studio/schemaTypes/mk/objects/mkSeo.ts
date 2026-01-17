import { defineField, defineType } from 'sanity'

export const mkSeo = defineType({
    name: 'mkSeo',
    title: 'MK SEO',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'SEO Başlık', type: 'string', validation: (r) => r.max(60) }),
        defineField({ name: 'description', title: 'SEO Açıklama', type: 'text', rows: 3, validation: (r) => r.max(160) }),
        defineField({ name: 'ogImage', title: 'OpenGraph Görseli', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'noIndex', title: 'No-Index', type: 'boolean', initialValue: false }),
    ],
})
