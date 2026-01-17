import { defineField, defineType } from 'sanity'

export const mkFaqSection = defineType({
    name: 'mkFaqSection',
    title: 'MK FAQ',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string' }),
        defineField({
            name: 'items',
            title: 'Sorular',
            type: 'array',
            of: [
                defineType({
                    name: 'mkFaqItem',
                    title: 'MK SSS Ögesi',
                    type: 'object',
                    fields: [
                        defineField({ name: 'question', title: 'Soru', type: 'string', validation: (r) => r.required() }),
                        defineField({ name: 'answer', title: 'Cevap', type: 'mkPortableText', validation: (r) => r.required() }),
                    ],
                    preview: { select: { title: 'question' } },
                }),
            ],
        }),
    ],
    preview: { select: { title: 'title' } },
})
