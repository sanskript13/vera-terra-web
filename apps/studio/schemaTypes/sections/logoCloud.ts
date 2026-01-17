import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'logoCloud',
    title: 'Logo Cloud',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'e.g., "Trusted by leading companies"',
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Company Name',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'Link URL',
                            description: 'Optional link to company website',
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: {
            logos: 'logos',
        },
        prepare({ logos }) {
            return {
                title: 'Logo Cloud',
                subtitle: `${logos?.length || 0} logos`,
            }
        },
    },
})
