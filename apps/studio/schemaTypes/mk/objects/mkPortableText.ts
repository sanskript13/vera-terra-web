import { defineType } from 'sanity'

export const mkPortableText = defineType({
    name: 'mkPortableText',
    title: 'MK Rich Text',
    type: 'array',
    of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
    ],
})
