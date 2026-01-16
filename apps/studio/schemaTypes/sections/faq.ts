import {defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
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
            {name: 'question', title: 'Question', type: 'string'},
            {name: 'answer', title: 'Answer', type: 'text', rows: 4},
          ],
        },
      ],
    },
  ],
})
