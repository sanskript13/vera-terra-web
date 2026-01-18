'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'

interface SectionProps {
    children: ReactNode
    size?: 'sm' | 'md' | 'lg'
    tone?: 'default' | 'tint'
    className?: string
    id?: string
}

/**
 * Section wrapper for consistent spacing and background alternation.
 * Use `tone="tint"` sparingly (every 3rd section max) to avoid striping.
 */
export function Section({
    children,
    size = 'md',
    tone = 'default',
    className,
    id
}: SectionProps) {
    const sizeClasses = {
        sm: tokens.spacing.section.sm,
        md: tokens.spacing.section.md,
        lg: tokens.spacing.section.lg,
    }

    const toneClasses = {
        default: 'bg-background',
        tint: 'bg-muted/20 border-y border-border/40',
    }

    return (
        <section
            id={id}
            className={cn(sizeClasses[size], toneClasses[tone], className)}
        >
            <div className={tokens.container.default}>
                {children}
            </div>
        </section>
    )
}

interface PageShellProps {
    children: ReactNode
    className?: string
}

/**
 * PageShell wraps entire page content with consistent structure.
 * Use as direct child of <main>.
 */
export function PageShell({ children, className }: PageShellProps) {
    return (
        <div className={cn('min-h-screen', className)}>
            {children}
        </div>
    )
}
