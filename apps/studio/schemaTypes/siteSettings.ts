import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'href', title: 'Href', type: 'string', validation: (Rule) => Rule.required()},
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3},
        {name: 'ogImage', title: 'OG Image', type: 'image', options: {hotspot: true}},
      ],
    }),
  ],
})
