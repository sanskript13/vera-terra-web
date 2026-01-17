'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type CtaLink = { label?: string; href?: string; variant?: 'primary' | 'secondary' }

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

function CtaButton({ cta, index }: { cta?: CtaLink; index: number }) {
    if (!cta?.href || !cta?.label) return null
    const isExternal = /^https?:\/\//.test(cta.href) || /^mailto:/.test(cta.href) || /^tel:/.test(cta.href)

    const baseClasses = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200'
    const primaryClasses = `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5`
    const secondaryClasses = `${baseClasses} border border-border bg-background text-foreground hover:bg-muted hover:-translate-y-0.5`

    const className = cta.variant === 'secondary' ? secondaryClasses : primaryClasses

    const buttonContent = (
        <motion.span
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={className}
        >
            {cta.label}
        </motion.span>
    )

    if (isExternal) {
        return <a href={cta.href}>{buttonContent}</a>
    }
    return <Link href={cta.href}>{buttonContent}</Link>
}

interface HeroSectionProps {
    eyebrow?: string
    headline: string
    subheadline?: string
    primaryCta?: CtaLink
    secondaryCta?: CtaLink
    image?: any
}

export function HeroSection({
    eyebrow,
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-primary-100/30 to-accent-100/20 py-20 md:py-32">
            {/* Animated background gradients */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Large animated blob - green */}
                <motion.div
                    className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary-500/20 to-primary-700/30 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Medium blob - amber */}
                <motion.div
                    className="absolute -right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-accent-500/20 to-accent-700/20 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Small accent blob */}
                <motion.div
                    className="absolute bottom-0 left-1/2 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary-300/30 to-accent-300/30 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [-50, 50, -50],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            <motion.div
                className="mx-auto max-w-5xl px-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {eyebrow && (
                    <motion.p
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="mb-4 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent"
                    >
                        {eyebrow}
                    </motion.p>
                )}

                <motion.h1
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
                >
                    {headline}
                </motion.h1>

                {subheadline && (
                    <motion.p
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="mt-6 max-w-2xl text-lg text-muted-foreground"
                    >
                        {subheadline}
                    </motion.p>
                )}

                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <CtaButton cta={primaryCta} index={0} />
                    <CtaButton cta={secondaryCta} index={1} />
                </motion.div>
            </motion.div>
        </section>
    )
}
