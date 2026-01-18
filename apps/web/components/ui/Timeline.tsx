'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'

interface TimelineStepProps {
    step: number
    title: string
    description: string
    bullets?: string[]
    delay?: number
}

export function TimelineStep({ step, title, description, bullets, delay = 0 }: TimelineStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.25, delay, ease: tokens.motion.easing }}
            className="relative flex gap-6 md:gap-8"
        >
            {/* Step number */}
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-700 text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                    {step}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-12">
                <h3 className={cn(tokens.typography.h4, 'mb-3')} id={`step-${step}`}>{title}</h3>
                <p className={cn(tokens.typography.body, 'mb-4')}>{description}</p>

                {bullets && bullets.length > 0 && (
                    <ul className="space-y-2">
                        {bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-2 items-start">
                                <span className="text-primary-700 mt-1 flex-shrink-0">•</span>
                                <span className="text-sm text-muted-foreground">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    )
}

interface TimelineProps {
    steps: Array<{
        title: string
        description: string
        bullets?: string[]
    }>
    className?: string
}

export function Timeline({ steps, className }: TimelineProps) {
    return (
        <div className={cn('relative', className)} role="list" aria-label="Process steps">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border/40 hidden md:block" aria-hidden="true" />

            {/* Steps */}
            <div className="space-y-0">
                {steps.map((step, i) => (
                    <div key={i} role="listitem" aria-labelledby={`step-${i + 1}`}>
                        <TimelineStep
                            step={i + 1}
                            title={step.title}
                            description={step.description}
                            bullets={step.bullets}
                            delay={i * 0.08}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
