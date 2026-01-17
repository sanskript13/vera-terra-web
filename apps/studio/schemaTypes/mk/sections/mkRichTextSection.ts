import { defineField, defineType } from 'sanity'

export const mkRichTextSection = defineType({
    name: 'mkRichTextSection',
    title: 'MK Rich Text',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string' }),
        defineField({ name: 'content', title: 'İçerik', type: 'mkPortableText', validation: (r) => r.required() }),
    ],
    preview: { select: { title: 'title' } },
})
