'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'
import { Button } from '@/components/ui/button'

interface CTABandProps {
    eyebrow?: string
    title: string
    description?: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
    className?: string
}

export function CTABand({
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    className
}: CTABandProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: tokens.motion.easing }}
            className={cn(
                'py-16 md:py-24 bg-primary-50/30 border-y border-border/40',
                className
            )}
        >
            <div className={tokens.container.default}>
                <div className="text-center space-y-6">
                    {eyebrow && (
                        <p className={tokens.typography.eyebrow}>{eyebrow}</p>
                    )}
                    <h2 className={cn(tokens.typography.h2, 'max-w-2xl mx-auto')}>
                        {title}
                    </h2>
                    {description && (
                        <p className={cn(tokens.typography.body, 'max-w-xl mx-auto')}>
                            {description}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button asChild size="lg">
                            <Link href={primaryCta.href} className="group">
                                {primaryCta.label}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        {secondaryCta && (
                            <Button asChild variant="outline" size="lg">
                                <Link href={secondaryCta.href}>
                                    {secondaryCta.label}
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
