'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContentContainerProps {
    children: ReactNode
    className?: string
    size?: 'default' | 'wide' | 'full'
}

export function ContentContainer({
    children,
    className,
    size = 'default'
}: ContentContainerProps) {
    const sizeClasses = {
        default: 'max-w-[720px]',
        wide: 'max-w-4xl',
        full: 'max-w-7xl'
    }

    return (
        <div className={cn(
            'mx-auto px-6',
            sizeClasses[size],
            className
        )}>
            {children}
        </div>
    )
}
