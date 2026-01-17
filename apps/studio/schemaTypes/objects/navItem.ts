import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'navItem',
    title: 'Navigation Item',
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
            name: 'external',
            title: 'External Link',
            type: 'boolean',
            description: 'Open in new tab',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'label',
            subtitle: 'url',
        },
    },
})
