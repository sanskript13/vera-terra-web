import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pricing',
    title: 'Pricing Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'plans',
            title: 'Pricing Plans',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'pricingPlan',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Plan Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'price',
                            title: 'Price',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'period',
                            title: 'Period',
                            type: 'string',
                            description: 'e.g., "/month", "/year"',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 2,
                        }),
                        defineField({
                            name: 'features',
                            title: 'Features',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                        defineField({
                            name: 'cta',
                            title: 'CTA Button',
                            type: 'ctaButton',
                        }),
                        defineField({
                            name: 'highlighted',
                            title: 'Highlighted',
                            type: 'boolean',
                            description: 'Make this plan stand out',
                            initialValue: false,
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'price',
                        },
                    },
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Pricing Section',
            }
        },
    },
})
