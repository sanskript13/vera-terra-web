import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactForm',
    title: 'Contact Form',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'formId',
            title: 'Form ID',
            type: 'string',
            description: 'External form service ID (e.g., Formspree, Typeform)',
        }),
        defineField({
            name: 'submitLabel',
            title: 'Submit Button Label',
            type: 'string',
            initialValue: 'Send Message',
        }),
        defineField({
            name: 'successMessage',
            title: 'Success Message',
            type: 'text',
            rows: 2,
            initialValue: 'Thank you! We\'ll be in touch soon.',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Contact Form',
            }
        },
    },
})
