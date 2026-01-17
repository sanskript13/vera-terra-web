import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
    region: z.string().min(2, 'Bölge en az 2 karakter olmalıdır'),
    product: z.string().min(2, 'Ürün seçimi zorunludur'),
    message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
    expectation: z.string().min(5, 'Beklenti en az 5 karakter olmalıdır'),
    // Honeypot field
    website: z.string().max(0, 'Invalid').optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
