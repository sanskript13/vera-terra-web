import {defineType} from 'sanity'

export default defineType({
  name: 'featureGrid',
  title: 'Feature Grid',
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
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
          ],
        },
      ],
    },
  ],
})
