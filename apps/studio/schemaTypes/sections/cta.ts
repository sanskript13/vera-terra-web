import {defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text', rows: 3},
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label', type: 'string'},
        {name: 'href', title: 'Href', type: 'string'},
      ],
    },
  ],
})
