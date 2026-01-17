import { cva, type VariantProps } from 'class-variance-authority'
import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center rounded-xl px-3 py-1 text-xs font-medium transition-colors',
    {
        variants: {
            variant: {
                primary: 'bg-primary-100 text-primary-900',
                success: 'bg-primary-100 text-primary-900',
                warning: 'bg-accent-100 text-accent-900',
                error: 'bg-red-100 text-red-900',
                info: 'bg-blue-100 text-blue-900',
                outline: 'border border-border text-foreground',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    }
)

export interface BadgeProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
