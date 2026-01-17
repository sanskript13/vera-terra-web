import { defineField, defineType } from 'sanity'

export const mkFeatureGridSection = defineType({
    name: 'mkFeatureGridSection',
    title: 'MK Feature Grid',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Alt Başlık', type: 'text', rows: 2 }),
        defineField({
            name: 'items',
            title: 'Ögeler',
            type: 'array',
            of: [
                defineType({
                    name: 'mkFeatureItem',
                    title: 'MK Feature',
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Başlık', type: 'string', validation: (r) => r.required() }),
                        defineField({ name: 'text', title: 'Metin', type: 'text', rows: 3 }),
                        defineField({ name: 'icon', title: 'İkon (opsiyonel)', type: 'string' }),
                    ],
                    preview: { select: { title: 'title', subtitle: 'icon' } },
                }),
            ],
        }),
    ],
    preview: { select: { title: 'title' } },
})
