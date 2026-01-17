import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'imageGallery',
    title: 'Image Gallery',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt Text',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Grid', value: 'grid' },
                    { title: 'Carousel', value: 'carousel' },
                    { title: 'Masonry', value: 'masonry' },
                ],
            },
            initialValue: 'grid',
        }),
        defineField({
            name: 'columns',
            title: 'Columns',
            type: 'number',
            options: {
                list: [2, 3, 4],
            },
            initialValue: 3,
            hidden: ({ parent }) => parent?.layout !== 'grid',
        }),
    ],
    preview: {
        select: {
            images: 'images',
        },
        prepare({ images }) {
            return {
                title: 'Image Gallery',
                subtitle: `${images?.length || 0} images`,
            }
        },
    },
})
