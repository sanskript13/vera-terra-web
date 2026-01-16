import {defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'quote', title: 'Quote', type: 'text', rows: 3},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'role', title: 'Role', type: 'string'},
          ],
        },
      ],
    },
  ],
})
