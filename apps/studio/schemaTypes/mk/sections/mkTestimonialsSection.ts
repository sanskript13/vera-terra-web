import { defineField, defineType } from 'sanity'

export const mkTestimonialsSection = defineType({
    name: 'mkTestimonialsSection',
    title: 'MK Testimonials',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Başlık', type: 'string' }),
        defineField({
            name: 'items',
            title: 'Referanslar',
            type: 'array',
            of: [
                defineType({
                    name: 'mkTestimonialItem',
                    title: 'MK Referans',
                    type: 'object',
                    fields: [
                        defineField({ name: 'quote', title: 'Alıntı', type: 'text', rows: 4, validation: (r) => r.required() }),
                        defineField({ name: 'name', title: 'İsim', type: 'string', validation: (r) => r.required() }),
                        defineField({ name: 'role', title: 'Unvan', type: 'string' }),
                        defineField({ name: 'company', title: 'Şirket', type: 'string' }),
                        defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
                    ],
                    preview: { select: { title: 'name', subtitle: 'company' } },
                }),
            ],
        }),
    ],
    preview: { select: { title: 'title' } },
})
