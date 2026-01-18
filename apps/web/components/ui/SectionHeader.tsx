'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'

interface SectionHeaderProps {
    eyebrow?: string
    title: string
    headingLevel?: 'h1' | 'h2'
    description?: string
    align?: 'left' | 'center'
    actions?: ReactNode
    className?: string
}

export function SectionHeader({
    eyebrow,
    title,
    headingLevel = 'h2',
    description,
    align = 'center',
    actions,
    className
}: SectionHeaderProps) {
    const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'

    const HeadingTag = headingLevel
    const headingClass = headingLevel === 'h1' ? tokens.typography.h1 : tokens.typography.h2

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, ease: tokens.motion.easing }}
            className={cn('max-w-3xl', alignClasses, className)}
        >
            {eyebrow && (
                <p className={cn(tokens.typography.eyebrow, 'mb-3')}>{eyebrow}</p>
            )}
            <HeadingTag className={cn(headingClass, 'mb-4')}>{title}</HeadingTag>
            {description && (
                <p className={cn(tokens.typography.body, 'max-w-2xl', alignClasses)}>
                    {description}
                </p>
            )}
            {actions && (
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    {actions}
                </div>
            )}
        </motion.div>
    )
}
