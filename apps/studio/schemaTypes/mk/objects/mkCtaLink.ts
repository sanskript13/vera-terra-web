import { defineField, defineType } from 'sanity'

export const mkCtaLink = defineType({
    name: 'mkCtaLink',
    title: 'MK CTA Link',
    type: 'object',
    fields: [
        defineField({ name: 'label', title: 'Buton Metni', type: 'string', validation: (r) => r.required() }),
        defineField({
            name: 'href',
            title: 'Link',
            type: 'url',
            validation: (r) => r.required().uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
        }),
        defineField({
            name: 'variant',
            title: 'Varyant',
            type: 'string',
            options: { list: ['primary', 'secondary'] },
            initialValue: 'primary',
        }),
    ],
})
