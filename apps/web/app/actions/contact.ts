'use server'

import { contactFormSchema } from '@/lib/validations/contact'
import { Resend } from 'resend'
import { headers } from 'next/headers'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiting (dev/staging)
// For production, use Upstash Redis or Vercel KV
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const limit = rateLimitMap.get(ip)

    if (!limit || now > limit.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }) // 1 hour
        return true
    }

    if (limit.count >= 3) {
        return false // Max 3 submissions per hour
    }

    limit.count++
    return true
}

export async function submitContactForm(formData: FormData) {
    try {
        // Get IP for rate limiting
        const headersList = await headers()
        const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'

        // Rate limit check
        if (!checkRateLimit(ip)) {
            return {
                success: false,
                error: 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.',
            }
        }

        // Parse form data
        const data = {
            name: formData.get('name') as string,
            region: formData.get('region') as string,
            product: formData.get('product') as string,
            message: formData.get('message') as string,
            expectation: formData.get('expectation') as string,
            website: formData.get('website') as string, // Honeypot
        }

        // Honeypot check
        if (data.website) {
            return { success: false, error: 'Form doğrulaması başarısız oldu.' }
        }

        // Validate
        const validated = contactFormSchema.parse(data)

        // Send email
        const emailBody = `
Yeni İletişim Formu Gönderimi

İsim: ${validated.name}
Bölge: ${validated.region}
Ürün: ${validated.product}

Ne arıyorsunuz?
${validated.message}

Bu noktada ne bekliyorsunuz?
${validated.expectation}

---
IP: ${ip}
Tarih: ${new Date().toLocaleString('tr-TR')}
    `.trim()

        await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.CONTACT_TO_EMAIL || 'hello@verattera.com',
            subject: 'Vera Terra – Tanışalım Formu',
            text: emailBody,
        })

        return { success: true }
    } catch (error) {
        console.error('Contact form error:', error)

        if (error instanceof Error && error.message.includes('validation')) {
            return { success: false, error: 'Form alanlarını kontrol edin.' }
        }

        return { success: false, error: 'Bir hata oluştu.' }
    }
}
