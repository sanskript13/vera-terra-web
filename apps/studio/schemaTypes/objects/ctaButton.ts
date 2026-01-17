import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ctaButton',
    title: 'CTA Button',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Ghost', value: 'ghost' },
                ],
            },
            initialValue: 'primary',
        }),
    ],
    preview: {
        select: {
            title: 'label',
            subtitle: 'url',
        },
    },
})
