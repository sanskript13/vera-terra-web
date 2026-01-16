import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subheadline', title: 'Subheadline', type: 'text', rows: 3}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label', type: 'string'},
        {name: 'href', title: 'Href', type: 'string'},
      ],
    }),
  ],
})
