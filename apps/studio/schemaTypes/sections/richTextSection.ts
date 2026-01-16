import {defineType} from 'sanity'

export default defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  fields: [
    {name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]},
  ],
})
