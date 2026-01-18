'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'

interface CalloutCardProps {
    icon?: LucideIcon
    title: string
    description: string
    link?: { label: string; href: string }
    className?: string
}

/**
 * CalloutCard for highlighting important contextual information.
 * Use for: regional context, key principles, important notes.
 * Visual: Light tint background, icon on left, prominent but not loud.
 */
export function CalloutCard({
    icon: Icon,
    title,
    description,
    link,
    className
}: CalloutCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, ease: tokens.motion.easing }}
            className={cn(
                'p-6 rounded-xl border border-primary/20 bg-primary-50/30',
                'flex gap-4 items-start',
                className
            )}
        >
            {Icon && (
                <div className="flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-primary-700" strokeWidth={1.5} />
                </div>
            )}
            <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                {link && (
                    <Link
                        href={link.href}
                        className="inline-flex items-center mt-3 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
                    >
                        {link.label}
                        <span className="ml-1">→</span>
                    </Link>
                )}
            </div>
        </motion.div>
    )
}
