'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type CtaLink = { label?: string; href?: string; variant?: 'primary' | 'secondary' }

interface CtaSectionProps {
    title: string
    subtitle?: string
    primaryCta?: CtaLink
    secondaryCta?: CtaLink
}

function CtaButton({ cta }: { cta?: CtaLink }) {
    if (!cta?.href || !cta?.label) return null
    const isExternal = /^https?:\/\//.test(cta.href) || /^mailto:/.test(cta.href) || /^tel:/.test(cta.href)

    const baseClasses = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200'
    const primaryClasses = `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5`
    const secondaryClasses = `${baseClasses} border border-border bg-background/80 backdrop-blur text-foreground hover:bg-background hover:-translate-y-0.5`

    const className = cta.variant === 'secondary' ? secondaryClasses : primaryClasses

    if (isExternal) {
        return <a className={className} href={cta.href}>{cta.label}</a>
    }
    return <Link className={className} href={cta.href}>{cta.label}</Link>
}

export function CtaSection({ title, subtitle, primaryCta, secondaryCta }: CtaSectionProps) {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary to-accent/20 p-8 md:p-12"
                >
                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

                    <div className="relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl font-bold tracking-tight text-foreground"
                        >
                            {title}
                        </motion.h2>

                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-3 max-w-2xl text-muted-foreground"
                            >
                                {subtitle}
                            </motion.p>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <CtaButton cta={primaryCta} />
                            <CtaButton cta={secondaryCta} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
