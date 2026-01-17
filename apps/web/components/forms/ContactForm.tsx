'use client'

import { useState } from 'react'
import { submitContactForm } from '@/app/actions/contact'

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (isSubmitting) return // Prevent double-submit

        setIsSubmitting(true)
        setStatus('idle')
        setErrorMessage('')

        const formData = new FormData(event.currentTarget)

        try {
            const result = await submitContactForm(formData)

            if (result.success) {
                setStatus('success')
                event.currentTarget.reset()
            } else {
                setStatus('error')
                setErrorMessage(result.error || 'Bir hata oluştu.')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Bir hata oluştu.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    İsim
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    disabled={isSubmitting}
                />
            </div>

            {/* Region */}
            <div>
                <label htmlFor="region" className="block text-sm font-medium text-foreground">
                    Bölge
                </label>
                <input
                    type="text"
                    id="region"
                    name="region"
                    required
                    minLength={2}
                    placeholder="Örn: Şanlıurfa"
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    disabled={isSubmitting}
                />
            </div>

            {/* Product */}
            <div>
                <label htmlFor="product" className="block text-sm font-medium text-foreground">
                    Ürün
                </label>
                <select
                    id="product"
                    name="product"
                    required
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    <option value="">Seçiniz</option>
                    <option value="Antep fıstığı">Antep fıstığı</option>
                    <option value="Pamuk">Pamuk</option>
                    <option value="Urfa biberi">Urfa biberi</option>
                    <option value="Buğdaygiller">Buğdaygiller</option>
                    <option value="Diğer">Diğer</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Ne arıyorsunuz?
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    disabled={isSubmitting}
                />
            </div>

            {/* Expectation */}
            <div>
                <label htmlFor="expectation" className="block text-sm font-medium text-foreground">
                    Bu noktada ne bekliyorsunuz?
                </label>
                <textarea
                    id="expectation"
                    name="expectation"
                    required
                    minLength={5}
                    rows={3}
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    disabled={isSubmitting}
                />
            </div>

            {/* Honeypot - hidden from users */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800" role="status">
                    Gönderildi.
                </div>
            )}

            {status === 'error' && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800" role="alert">
                    {errorMessage}
                </div>
            )}

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? 'Gönderiliyor...' : 'Tanışalım'}
                </button>
            </div>
        </form>
    )
}
