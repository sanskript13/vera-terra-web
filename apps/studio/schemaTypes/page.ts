import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'richTextSection'},
        {type: 'featureGrid'},
        {type: 'testimonials'},
        {type: 'faq'},
        {type: 'cta'},
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3},
        {name: 'ogImage', title: 'OG Image', type: 'image', options: {hotspot: true}},
      ],
    }),
  ],
})
