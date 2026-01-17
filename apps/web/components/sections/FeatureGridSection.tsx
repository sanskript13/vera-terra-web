'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

interface FeatureItem {
    title: string
    text?: string
    icon?: string
}

interface FeatureGridSectionProps {
    title?: string
    subtitle?: string
    items: FeatureItem[]
}

export function FeatureGridSection({ title, subtitle, items }: FeatureGridSectionProps) {
    // Color variants for each card
    const colorVariants = [
        'hover:border-primary-500 hover:shadow-primary-500/20',
        'hover:border-accent-500 hover:shadow-accent-500/20',
        'hover:border-primary-500 hover:shadow-primary-500/20',
    ]

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary-50/30 to-background py-16 md:py-24">
            {/* Decorative background */}
            <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-accent-300/20 blur-3xl" />

            <div className="mx-auto max-w-5xl px-6">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-foreground"
                    >
                        {title}
                    </motion.h2>
                )}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-muted-foreground"
                    >
                        {subtitle}
                    </motion.p>
                )}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainer}
                    className="mt-12 grid gap-6 md:grid-cols-3"
                >
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className={`group relative overflow-hidden rounded-2xl border-2 border-border/50 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${colorVariants[idx % colorVariants.length]}`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon circle if icon exists */}
                            {item.icon && (
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 text-2xl">
                                    {item.icon}
                                </div>
                            )}

                            <h3 className="text-lg font-semibold text-foreground">
                                {item.title}
                            </h3>
                            {item.text && (
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {item.text}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
