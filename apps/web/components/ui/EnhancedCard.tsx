'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'
import { Card as ShadcnCard } from '@/components/ui/Card'

interface EnhancedCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    delay?: number
}

export function EnhancedCard({ children, className, hover = true, delay = 0 }: EnhancedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay, ease: tokens.motion.easing }}
            whileHover={hover ? { y: -4, transition: { duration: 0.15 } } : undefined}
        >
            <ShadcnCard className={cn(tokens.shadow.focus, 'tabindex-0', className)}>
                {children}
            </ShadcnCard>
        </motion.div>
    )
}

interface CardGridProps {
    children: ReactNode
    columns?: 1 | 2 | 3 | 4
    className?: string
}

export function CardGrid({ children, columns = 3, className }: CardGridProps) {
    const gridClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }

    return (
        <div className={cn('grid', tokens.gap.lg, gridClasses[columns], className)}>
            {children}
        </div>
    )
}
